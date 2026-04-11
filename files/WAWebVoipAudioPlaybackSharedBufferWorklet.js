__d(
  "WAWebVoipAudioPlaybackSharedBufferWorklet",
  [
    "Promise",
    "WALogger",
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
      b = 8192,
      v = 8;
    function S() {
      return "\nclass WAWebVoipSharedBufferPlaybackProcessor extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n    this._isProcessing = false;\n    this._isInitialized = false;\n    this._consecutiveUnderruns = 0;\n    this._totalFramesRead = 0;\n    this._lastDiagnosticTime = 0;\n\n    // Shared buffer views (set after receiving SAB via postMessage)\n    this._atomicIndices = null;  // Uint32Array view for writePos/readPos\n    this._audioBuffer = null;    // Float32Array view for audio samples\n    this._bufferSize = 0;\n\n    this.port.onmessage = (event) => {\n      const data = event.data;\n      if (data.type === 'initSharedBuffer') {\n        // Receive SharedArrayBuffer from main thread\n        this._initSharedBuffer(\n          data.heapBuffer,\n          data.heapBufferOffset,\n          data.bufferSize,\n        );\n      } else if (data.type === 'start') {\n        this._isProcessing = true;\n      } else if (data.type === 'stop') {\n        this._isProcessing = false;\n      }\n    };\n\n    this.port.postMessage({type: 'ready'});\n  }\n\n  _initSharedBuffer(heapBuffer, heapBufferOffset, bufferSize) {\n    // Create views into the WASM heap SharedArrayBuffer\n    // Header: [writePos uint32 at offset+0][readPos uint32 at offset+4]\n    this._atomicIndices = new Uint32Array(heapBuffer, heapBufferOffset, 2);\n    // Audio data starts after the 8-byte header\n    this._audioBuffer = new Float32Array(\n      heapBuffer,\n      heapBufferOffset + 8,\n      bufferSize,\n    );\n    this._bufferSize = bufferSize;\n    this._isInitialized = true;\n    this._consecutiveUnderruns = 0;\n    this._totalFramesRead = 0;\n    this._lastDiagnosticTime = currentTime;\n\n    this.port.postMessage({type: 'sharedBufferReady'});\n  }\n\n  process(inputs, outputs, parameters) {\n    if (!this._isProcessing || !this._isInitialized) {\n      return true;\n    }\n\n    if (outputs.length === 0 || outputs[0].length === 0) {\n      return true;\n    }\n\n    const output = outputs[0];\n    const channelCount = output.length;\n    const frameCount = output[0].length;\n\n    // Read current write position (set by WASM pthread)\n    const writePos = Atomics.load(this._atomicIndices, 0);\n    const readPos = Atomics.load(this._atomicIndices, 1);\n\n    // Calculate available data in ring buffer\n    const bufferSize = this._bufferSize;\n    const availableData = (writePos - readPos + bufferSize) % bufferSize;\n\n    if (availableData < frameCount) {\n      // Not enough data \u2014 zero-fill output buffers for explicit silence (underrun)\n      for (let ch = 0; ch < channelCount; ch++) {\n        output[ch].fill(0);\n      }\n      this._consecutiveUnderruns++;\n      this._maybeSendDiagnostics(availableData);\n      return true;\n    }\n\n    // Read audio data from ring buffer using bulk copy with wrap-around\n    const audioBuffer = this._audioBuffer;\n    const endPos = readPos + frameCount;\n\n    if (endPos <= bufferSize) {\n      // No wrap-around: single bulk read\n      const chunk = audioBuffer.subarray(readPos, endPos);\n      output[0].set(chunk);\n      for (let ch = 1; ch < channelCount; ch++) {\n        output[ch].set(chunk);\n      }\n    } else {\n      // Wrap-around: two bulk reads\n      const firstLen = bufferSize - readPos;\n      const first = audioBuffer.subarray(readPos, bufferSize);\n      const second = audioBuffer.subarray(0, frameCount - firstLen);\n      output[0].set(first);\n      output[0].set(second, firstLen);\n      for (let ch = 1; ch < channelCount; ch++) {\n        output[ch].set(first);\n        output[ch].set(second, firstLen);\n      }\n    }\n\n    // Update read position atomically (release consumed slots to producer)\n    const newReadPos = endPos % bufferSize;\n    Atomics.store(this._atomicIndices, 1, newReadPos);\n\n    this._totalFramesRead += frameCount;\n    this._consecutiveUnderruns = 0;\n    this._maybeSendDiagnostics(availableData);\n\n    return true;\n  }\n\n  _maybeSendDiagnostics(availableData) {\n    // Send diagnostics approximately every 1 second\n    // AudioWorklet's currentTime is in seconds\n    const now = currentTime;\n    if (now - this._lastDiagnosticTime >= 1.0) {\n      this._lastDiagnosticTime = now;\n      this.port.postMessage({\n        type: 'diagnostics',\n        consecutiveUnderruns: this._consecutiveUnderruns,\n        totalFramesRead: this._totalFramesRead,\n        availableData: availableData,\n        bufferSize: this._bufferSize,\n      });\n    }\n  }\n}\n\nregisterProcessor(\n  'voip-shared-buffer-playback-processor',\n  WAWebVoipSharedBufferPlaybackProcessor,\n);\n";
    }
    var R = (function () {
      function t() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.playbackAudioElement = null),
          (this.playbackMediaStreamDestination = null),
          (this.ringBufferPtr = null),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, S, "[AV:SharedBuffer:Playback]")
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
            try {
              var f = o("WAWebAudioUtility").getCachedWasmModule();
              if (f == null)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] WASM module not initialized",
                );
              var g = b,
                h = g * Float32Array.BYTES_PER_ELEMENT + v;
              this.ringBufferPtr =
                yield o("WAWebAudioUtility").mallocWasmBuffer(h);
              var y = this.ringBufferPtr;
              if (y == null)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
                );
              var C = f.GROWABLE_HEAP_U8();
              if (
                (C.fill(0, y, y + h),
                this.workletPreloadPromise != null &&
                  (yield this.workletPreloadPromise),
                !this.isWorkletPreloaded)
              ) {
                var R = S(),
                  L = new Blob([R], { type: "application/javascript" }),
                  E = URL.createObjectURL(L);
                try {
                  yield a.audioWorklet.addModule(E);
                } finally {
                  URL.revokeObjectURL(E);
                }
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
                (k.port.onmessage = function (t) {
                  var r = t.data;
                  if (!(typeof r != "object" || r == null)) {
                    var a = r.type;
                    if (a === "ready") {
                      var i;
                      ((n.isProcessorReady = !0),
                        (i = n.processorReadyResolvable) == null || i.resolve(),
                        (n.processorReadyResolvable = null));
                    } else if (a !== "sharedBufferReady") {
                      if (a === "diagnostics") {
                        var l = r.consecutiveUnderruns,
                          s = r.availableData,
                          u = r.bufferSize;
                        typeof l == "number" &&
                          l > 0 &&
                          o("WALogger").WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Playback] Consecutive underruns: ",
                                ", available: ",
                                "/",
                                "",
                              ])),
                            l,
                            String(s),
                            String(u),
                          );
                      }
                    }
                  }
                }),
                yield this.waitForProcessorReady());
              var I = f.GROWABLE_HEAP_F32(),
                T = I.buffer;
              (k != null &&
                k.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: T,
                  heapBufferOffset: y,
                  bufferSize: g,
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
                    this.playbackMediaStreamDestination.stream));
              var D = o(
                "WAWebAudioDeviceManager",
              ).getCurrentSelectedAudioOutputDevice();
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] applying saved output device preference: ",
                      "",
                    ])),
                  D != null ? D : "(none)",
                ),
                D != null && this.playbackAudioElement != null)
              ) {
                var x = this.playbackAudioElement;
                if (typeof x.setSinkId == "function")
                  try {
                    (yield x.setSinkId(D),
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] output device set successfully to ",
                            "",
                          ])),
                        D.slice(0, 8),
                      ));
                  } catch (e) {
                    var $ = e instanceof Error ? e.name : String(e);
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Playback] setSinkId failed for saved device ",
                          ": ",
                          "",
                        ])),
                      D.slice(0, 8),
                      $,
                    );
                  }
                else
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] setSinkId not available, output will use browser default",
                      ])),
                  );
              }
              var P = f.startAudioWriterThread(y, g, l);
              if (!P)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread",
                );
              var N = new Uint32Array(f.GROWABLE_HEAP_U8().buffer, y, 2);
              if (
                (yield this.waitForPrebuffer(N, g),
                this.playbackAudioElement != null)
              )
                try {
                  yield this.playbackAudioElement.play();
                } catch (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                        "",
                      ])),
                    e,
                  );
                }
              (this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "start" }),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                    ])),
                ));
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            function* (e, t) {
              var r = 500;
              yield new (C || (C = n("Promise")))(function (e) {
                window.setTimeout(e, r);
              });
              var a = Atomics.load(e, 0),
                i = Atomics.load(e, 1),
                l = (a - i + t) % t;
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Pre-buffer wait complete: ",
                    " samples buffered after ",
                    "ms",
                  ])),
                l,
                r,
              );
            },
          );
          function t(t, n) {
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                (this.workletPreloadPromise = null));
            } catch (e) {
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
        t
      );
    })();
    l.WAWebVoipAudioPlaybackSharedBufferWorklet = R;
  },
  98,
);
