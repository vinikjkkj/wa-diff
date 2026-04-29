__d(
  "WAWebVoipAudioPlaybackSharedBufferWorklet",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipWorkletPreload",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = 8192,
      S = 8,
      R = 50,
      L = 500,
      E = 10;
    function k(e, t) {
      var n = Math.ceil((e * R) / 100);
      if (t <= 0) return n;
      var r = Math.ceil(n / t) * t,
        o = e > t ? e - t : e;
      return Math.min(r, o);
    }
    function I(e, t, n) {
      return (e - t + n) % n;
    }
    function T(e, t, n) {
      var r = (n * 1e3) / t,
        o = typeof e.baseLatency == "number" ? e.baseLatency * 1e3 : 0,
        a = typeof e.outputLatency == "number" ? e.outputLatency * 1e3 : 0,
        i = null,
        l = e.getOutputTimestamp();
      if (
        l != null &&
        typeof l.contextTime == "number" &&
        typeof l.performanceTime == "number"
      ) {
        var s = Math.max(0, self.performance.now() - l.performanceTime),
          u = l.contextTime + s / 1e3;
        i = Math.max(0, (e.currentTime - u) * 1e3);
      }
      var c = i != null ? i : o > 0 && a > 0 ? o + a : Math.max(o, a);
      return { estimatedOutputLagMs: r + c };
    }
    function D() {
      return "\nclass WAWebVoipSharedBufferPlaybackProcessor extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n    this._isProcessing = false;\n    this._isInitialized = false;\n    this._consecutiveUnderruns = 0;\n    this._totalFramesRead = 0;\n    this._lastDiagnosticTime = 0;\n\n    // Shared buffer views (set after receiving SAB via postMessage)\n    this._atomicIndices = null;  // Uint32Array view for writePos/readPos\n    this._audioBuffer = null;    // Float32Array view for audio samples\n    this._bufferSize = 0;\n\n    this.port.onmessage = (event) => {\n      const data = event.data;\n      if (data.type === 'initSharedBuffer') {\n        // Receive SharedArrayBuffer from main thread\n        this._initSharedBuffer(\n          data.heapBuffer,\n          data.heapBufferOffset,\n          data.bufferSize,\n        );\n      } else if (data.type === 'start') {\n        this._isProcessing = true;\n      } else if (data.type === 'stop') {\n        this._isProcessing = false;\n      }\n    };\n\n    this.port.postMessage({type: 'ready'});\n  }\n\n  _initSharedBuffer(heapBuffer, heapBufferOffset, bufferSize) {\n    // Create views into the WASM heap SharedArrayBuffer\n    // Header: [writePos uint32 at offset+0][readPos uint32 at offset+4]\n    this._atomicIndices = new Uint32Array(heapBuffer, heapBufferOffset, 2);\n    // Audio data starts after the 8-byte header\n    this._audioBuffer = new Float32Array(\n      heapBuffer,\n      heapBufferOffset + 8,\n      bufferSize,\n    );\n    this._bufferSize = bufferSize;\n    this._isInitialized = true;\n    this._consecutiveUnderruns = 0;\n    this._totalFramesRead = 0;\n    this._lastDiagnosticTime = currentTime;\n\n    this.port.postMessage({type: 'sharedBufferReady'});\n  }\n\n  process(inputs, outputs, parameters) {\n    if (!this._isProcessing || !this._isInitialized) {\n      return true;\n    }\n\n    if (outputs.length === 0 || outputs[0].length === 0) {\n      return true;\n    }\n\n    const output = outputs[0];\n    const channelCount = output.length;\n    const frameCount = output[0].length;\n\n    // Read current write position (set by WASM pthread)\n    const writePos = Atomics.load(this._atomicIndices, 0);\n    const readPos = Atomics.load(this._atomicIndices, 1);\n\n    // Calculate available data in ring buffer\n    const bufferSize = this._bufferSize;\n    const availableData = (writePos - readPos + bufferSize) % bufferSize;\n\n    if (availableData < frameCount) {\n      // Not enough data \u2014 zero-fill output buffers for explicit silence (underrun)\n      for (let ch = 0; ch < channelCount; ch++) {\n        output[ch].fill(0);\n      }\n      this._consecutiveUnderruns++;\n      this._maybeSendDiagnostics(availableData);\n      return true;\n    }\n\n    // Read audio data from ring buffer using bulk copy with wrap-around\n    const audioBuffer = this._audioBuffer;\n    const endPos = readPos + frameCount;\n\n    if (endPos <= bufferSize) {\n      // No wrap-around: single bulk read\n      const chunk = audioBuffer.subarray(readPos, endPos);\n      output[0].set(chunk);\n      for (let ch = 1; ch < channelCount; ch++) {\n        output[ch].set(chunk);\n      }\n    } else {\n      // Wrap-around: two bulk reads\n      const firstLen = bufferSize - readPos;\n      const first = audioBuffer.subarray(readPos, bufferSize);\n      const second = audioBuffer.subarray(0, frameCount - firstLen);\n      output[0].set(first);\n      output[0].set(second, firstLen);\n      for (let ch = 1; ch < channelCount; ch++) {\n        output[ch].set(first);\n        output[ch].set(second, firstLen);\n      }\n    }\n\n    // Update read position atomically (release consumed slots to producer)\n    const newReadPos = endPos % bufferSize;\n    Atomics.store(this._atomicIndices, 1, newReadPos);\n\n    this._totalFramesRead += frameCount;\n    this._consecutiveUnderruns = 0;\n    this._maybeSendDiagnostics(availableData);\n\n    return true;\n  }\n\n  _maybeSendDiagnostics(availableData) {\n    // Send diagnostics approximately every 1 second\n    // AudioWorklet's currentTime is in seconds\n    const now = currentTime;\n    if (now - this._lastDiagnosticTime >= 1.0) {\n      this._lastDiagnosticTime = now;\n      this.port.postMessage({\n        type: 'diagnostics',\n        consecutiveUnderruns: this._consecutiveUnderruns,\n        totalFramesRead: this._totalFramesRead,\n        availableData: availableData,\n        bufferSize: this._bufferSize,\n      });\n    }\n  }\n}\n\nregisterProcessor(\n  'voip-shared-buffer-playback-processor',\n  WAWebVoipSharedBufferPlaybackProcessor,\n);\n";
    }
    var x = (function () {
      function t() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.playbackAudioContext = null),
          (this.playbackAudioElement = null),
          (this.playbackMediaStreamDestination = null),
          (this.playbackSampleRate = 0),
          (this.ringBufferPtr = null),
          (this.hasLoggedOutputLagEstimationFailure = !1),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, D, "[AV:SharedBuffer:Playback]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var a = t.prototype;
      return (
        (a.startAudioPlayback = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = this,
              a = t.audioContext,
              i = t.channels,
              l = t.framesPerChunk;
            ((this.playbackAudioContext = a),
              (this.playbackSampleRate = t.sampleRate),
              (this.hasLoggedOutputLagEstimationFailure = !1));
            try {
              var g = o("WAWebAudioUtility").getCachedWasmModule();
              if (g == null)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] WASM module not initialized",
                );
              var h = v,
                y = h * Float32Array.BYTES_PER_ELEMENT + S;
              this.ringBufferPtr =
                yield o("WAWebAudioUtility").mallocWasmBuffer(y);
              var C = this.ringBufferPtr;
              if (C == null)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
                );
              var b = g.GROWABLE_HEAP_U8();
              if (
                (b.fill(0, C, C + y),
                this.workletPreloadPromise != null &&
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] awaiting worklet preload",
                      ])),
                  ),
                  yield this.workletPreloadPromise),
                !this.isWorkletPreloaded)
              ) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] loading worklet module (contextState=",
                      ")",
                    ])),
                  a.state,
                );
                var R = D(),
                  L = new Blob([R], { type: "application/javascript" }),
                  E = URL.createObjectURL(L);
                try {
                  yield a.audioWorklet.addModule(E);
                } finally {
                  URL.revokeObjectURL(E);
                }
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Worklet processor module loaded",
                    ])),
                );
              }
              this.audioWorkletNode = new AudioWorkletNode(
                a,
                "voip-shared-buffer-playback-processor",
                {
                  numberOfInputs: 0,
                  numberOfOutputs: 1,
                  outputChannelCount: [i],
                },
              );
              var k = this.audioWorkletNode;
              (k != null &&
                (k.port.onmessage = function (e) {
                  var t = e.data;
                  if (!(typeof t != "object" || t == null)) {
                    var r = t.type;
                    if (r === "ready") {
                      var a;
                      ((n.isProcessorReady = !0),
                        (a = n.processorReadyResolvable) == null || a.resolve(),
                        (n.processorReadyResolvable = null));
                    } else if (r !== "sharedBufferReady") {
                      if (r === "diagnostics") {
                        var i = t.consecutiveUnderruns,
                          l = t.availableData,
                          s = t.bufferSize;
                        typeof i == "number" &&
                          i > 0 &&
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Playback] Consecutive underruns: ",
                                ", available: ",
                                "/",
                                "",
                              ])),
                            i,
                            String(l),
                            String(s),
                          );
                      }
                    }
                  }
                }),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] waiting for processor ready",
                    ])),
                ),
                yield this.waitForProcessorReady());
              var I = g.GROWABLE_HEAP_F32(),
                T = I.buffer;
              (k != null &&
                k.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: T,
                  heapBufferOffset: C,
                  bufferSize: h,
                }),
                (this.playbackMediaStreamDestination =
                  a.createMediaStreamDestination()),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.connect(
                    this.playbackMediaStreamDestination,
                  ),
                (this.playbackAudioElement = new Audio()),
                this.playbackMediaStreamDestination != null &&
                  (this.playbackAudioElement.srcObject =
                    this.playbackMediaStreamDestination.stream),
                this.playbackAudioElement != null &&
                  (yield o(
                    "WAWebAudioDeviceManager",
                  ).applyPreferredAudioOutputDevice(
                    this.playbackAudioElement,
                    "AV:SharedBuffer:Playback",
                  )),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] starting writer thread",
                    ])),
                ));
              var x = g.startAudioWriterThread(C, h, l);
              if (!x)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread",
                );
              var $ = new Uint32Array(g.GROWABLE_HEAP_U8().buffer, C, 2);
              if (
                (yield this.waitForPrebuffer($, h, l),
                this.playbackAudioElement != null)
              )
                try {
                  yield this.playbackAudioElement.play();
                } catch (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                        "",
                      ])),
                    e,
                  );
                }
              (this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "start" }),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                    ])),
                ));
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Failed to start playback: ",
                      "",
                    ])),
                  e,
                ),
                yield this.stopAudioPlayback(),
                r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to start playback",
                )
              );
            }
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.waitForProcessorReady = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this,
              t = 5e3;
            if (!this.isProcessorReady) {
              this.processorReadyResolvable = new (o(
                "WAResolvable",
              ).Resolvable)();
              var n = window.setTimeout(function () {
                e.processorReadyResolvable != null &&
                  (e.processorReadyResolvable.reject(
                    r("err")(
                      "voip: [AV:SharedBuffer:Playback] Processor failed to become ready within 5s",
                    ),
                  ),
                  (e.processorReadyResolvable = null));
              }, t);
              try {
                var a;
                yield (a = this.processorReadyResolvable) == null
                  ? void 0
                  : a.promise;
              } finally {
                window.clearTimeout(n);
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.waitForPrebuffer = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              for (var r = k(t, n), a = self.performance.now(), i = 0; ; ) {
                var l = Atomics.load(e, 0),
                  s = Atomics.load(e, 1);
                if (((i = I(l, s, t)), i >= r)) break;
                var u = self.performance.now() - a;
                if (u >= L) break;
                var c = Math.min(E, Math.max(0, L - u));
                yield o("WAPromiseDelays").delayMs(c);
              }
              var d = self.performance.now() - a;
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Pre-buffer wait complete: reason=",
                    ", buffered=",
                    " samples, target=",
                    " samples, elapsed=",
                    "ms",
                  ])),
                i >= r ? "target_reached" : "timeout",
                i,
                r,
                Math.round(d),
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.stopAudioPlayback = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = o("WAWebAudioUtility").getCachedWasmModule();
              if (e != null)
                try {
                  e.isAudioWriterThreadRunning() && e.stopAudioWriterThread();
                } catch (e) {
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Error stopping writer thread: ",
                        "",
                      ])),
                    e,
                  );
                }
              if (
                (this.audioWorkletNode != null &&
                  this.audioWorkletNode.port.postMessage({ type: "stop" }),
                this.playbackAudioElement != null)
              ) {
                var t = this.playbackAudioElement;
                (t.pause(),
                  (t.srcObject = null),
                  (this.playbackAudioElement = null));
              }
              (this.audioWorkletNode != null &&
                (this.audioWorkletNode.disconnect(),
                (this.audioWorkletNode = null)),
                this.playbackMediaStreamDestination != null &&
                  (this.playbackMediaStreamDestination.disconnect(),
                  (this.playbackMediaStreamDestination = null)));
              var n = this.ringBufferPtr;
              if (n != null) {
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(n);
                } catch (e) {
                  o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Error freeing ring buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
                this.ringBufferPtr = null;
              }
              ((this.isProcessorReady = !1),
                (this.processorReadyResolvable = null),
                (this.isWorkletPreloaded = !1),
                (this.playbackAudioContext = null),
                (this.playbackSampleRate = 0),
                (this.hasLoggedOutputLagEstimationFailure = !1),
                (this.workletPreloadPromise = null));
            } catch (e) {
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Cleanup error: ",
                    "",
                  ])),
                e,
              );
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getAudioElement = function () {
          return this.playbackAudioElement;
        }),
        (a.getEstimatedOutputLagSamples = function () {
          var e = this.playbackAudioContext,
            t = this.ringBufferPtr,
            n = this.playbackSampleRate;
          if (e == null || t == null || n <= 0) return 0;
          var r = o("WAWebAudioUtility").getCachedWasmModule();
          if (r == null) return 0;
          try {
            var a = new Uint32Array(r.GROWABLE_HEAP_U8().buffer, t, 2),
              i = Atomics.load(a, 0),
              l = Atomics.load(a, 1),
              s = I(i, l, v),
              u = T(e, n, s);
            return Math.max(0, Math.round((u.estimatedOutputLagMs * n) / 1e3));
          } catch (e) {
            return (
              this.hasLoggedOutputLagEstimationFailure ||
                ((this.hasLoggedOutputLagEstimationFailure = !0),
                o("WALogger").WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Failed to estimate output lag: ",
                      "",
                    ])),
                  e,
                )),
              0
            );
          }
        }),
        t
      );
    })();
    l.WAWebVoipAudioPlaybackSharedBufferWorklet = x;
  },
  98,
);
