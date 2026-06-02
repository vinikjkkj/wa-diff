__d(
  "WAWebVoipAudioPlaybackSharedBufferWorklet",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipWorkletPreload",
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
      v,
      S,
      R,
      L,
      E = 8192,
      k = 16e3,
      I = 8,
      T = 7,
      D = 200,
      x = 10;
    function $(e) {
      var t = e;
      return typeof t.setSinkId == "function" ? t : null;
    }
    function P(e) {
      return e === "direct_audio_context"
        ? "AV:SharedBuffer:Playback:AudioContext"
        : e === "media_element"
          ? "AV:SharedBuffer:Playback:AudioElement"
          : e === "none"
            ? "AV:SharedBuffer:Playback:NotConnected"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function N(e, t) {
      var n = Math.ceil((e * T) / 100);
      if (t <= 0) return n;
      var r = Math.ceil(n / t) * t,
        o = e > t ? e - t : e;
      return Math.min(r, o);
    }
    function M(e, t, n) {
      return (e - t + n) % n;
    }
    function w(e, t, n) {
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
    function A() {
      return `
class WAWebVoipSharedBufferPlaybackProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this._isProcessing = false;
    this._isInitialized = false;
    this._consecutiveUnderruns = 0;
    this._totalFramesRead = 0;
    this._lastDiagnosticTime = 0;

    // Shared buffer views (set after receiving SAB via postMessage)
    this._atomicIndices = null;  // Uint32Array view for writePos/readPos
    this._atomicIndicesI32 = null; // Int32Array view for Atomics.notify
    this._audioBuffer = null;    // Float32Array view for audio samples
    this._bufferSize = 0;

    this.port.onmessage = (event) => {
      const data = event.data;
      if (data.type === 'initSharedBuffer') {
        // Receive SharedArrayBuffer from main thread
        this._initSharedBuffer(
          data.heapBuffer,
          data.heapBufferOffset,
          data.bufferSize,
        );
      } else if (data.type === 'start') {
        this._isProcessing = true;
      } else if (data.type === 'stop') {
        this._isProcessing = false;
      }
    };

    this.port.postMessage({type: 'ready'});
  }

  _initSharedBuffer(heapBuffer, heapBufferOffset, bufferSize) {
    // Create views into the WASM heap SharedArrayBuffer
    // Header: [writePos uint32 at offset+0][readPos uint32 at offset+4]
    this._atomicIndices = new Uint32Array(heapBuffer, heapBufferOffset, 2);
    // Int32Array view of same memory for Atomics.notify (requires Int32Array)
    this._atomicIndicesI32 = new Int32Array(heapBuffer, heapBufferOffset, 2);
    // Audio data starts after the 8-byte header
    this._audioBuffer = new Float32Array(
      heapBuffer,
      heapBufferOffset + 8,
      bufferSize,
    );
    this._bufferSize = bufferSize;
    this._isInitialized = true;
    this._consecutiveUnderruns = 0;
    this._totalFramesRead = 0;
    this._lastDiagnosticTime = currentTime;

    this.port.postMessage({type: 'sharedBufferReady'});
  }

  process(inputs, outputs, parameters) {
    if (!this._isProcessing || !this._isInitialized) {
      return true;
    }

    if (outputs.length === 0 || outputs[0].length === 0) {
      return true;
    }

    const output = outputs[0];
    const channelCount = output.length;
    const frameCount = output[0].length;

    // Read current write position (set by WASM pthread)
    const writePos = Atomics.load(this._atomicIndices, 0);
    const readPos = Atomics.load(this._atomicIndices, 1);

    // Calculate available data in ring buffer
    const bufferSize = this._bufferSize;
    const availableData = (writePos - readPos + bufferSize) % bufferSize;

    if (availableData < frameCount) {
      // Not enough data \u2014 zero-fill output buffers for explicit silence (underrun)
      for (let ch = 0; ch < channelCount; ch++) {
        output[ch].fill(0);
      }
      this._consecutiveUnderruns++;
      this._maybeSendDiagnostics(availableData);
      return true;
    }

    // Read audio data from ring buffer using bulk copy with wrap-around
    const audioBuffer = this._audioBuffer;
    const endPos = readPos + frameCount;

    if (endPos <= bufferSize) {
      // No wrap-around: single bulk read
      const chunk = audioBuffer.subarray(readPos, endPos);
      output[0].set(chunk);
      for (let ch = 1; ch < channelCount; ch++) {
        output[ch].set(chunk);
      }
    } else {
      // Wrap-around: two bulk reads
      const firstLen = bufferSize - readPos;
      const first = audioBuffer.subarray(readPos, bufferSize);
      const second = audioBuffer.subarray(0, frameCount - firstLen);
      output[0].set(first);
      output[0].set(second, firstLen);
      for (let ch = 1; ch < channelCount; ch++) {
        output[ch].set(first);
        output[ch].set(second, firstLen);
      }
    }

    // Update read position atomically (release consumed slots to producer)
    const newReadPos = endPos % bufferSize;
    Atomics.store(this._atomicIndices, 1, newReadPos);
    // Wake the writer thread \u2014 it may be blocked in emscripten_futex_wait
    // on readPos, waiting for space to become available.
    Atomics.notify(this._atomicIndicesI32, 1, 1);

    this._totalFramesRead += frameCount;
    this._consecutiveUnderruns = 0;
    this._maybeSendDiagnostics(availableData);

    return true;
  }

  _maybeSendDiagnostics(availableData) {
    // Send diagnostics approximately every 1 second
    // AudioWorklet's currentTime is in seconds
    const now = currentTime;
    if (now - this._lastDiagnosticTime >= 1.0) {
      this._lastDiagnosticTime = now;
      this.port.postMessage({
        type: 'diagnostics',
        consecutiveUnderruns: this._consecutiveUnderruns,
        totalFramesRead: this._totalFramesRead,
        availableData: availableData,
        bufferSize: this._bufferSize,
      });
    }
  }
}

registerProcessor(
  'voip-shared-buffer-playback-processor',
  WAWebVoipSharedBufferPlaybackProcessor,
);
`;
    }
    var F = (function () {
      function t() {
        var t = this;
        ((this.audioWorkletNode = null),
          (this.playbackAudioContext = null),
          (this.playbackAudioElement = null),
          (this.playbackMediaStreamDestination = null),
          (this.playbackOutputSink = null),
          (this.playbackOutputRoute = "none"),
          (this.playbackSampleRate = 0),
          (this.ringBufferPtr = null),
          (this.hasLoggedOutputLagEstimationFailure = !1),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.$1 = 0),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = 0),
          (this.preloadWorkletModule = function (e) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(e, A, "[AV:SharedBuffer:Playback]")
              .then(function (e) {
                ((t.isWorkletPreloaded = e), (t.workletPreloadPromise = null));
              });
            t.workletPreloadPromise = n;
          }),
          (this.switchOutputDevice = async function (n, r) {
            var a = t.playbackOutputRoute,
              i = t.playbackOutputSink,
              l = P(a),
              s = await o(
                "WAWebAudioDeviceManager",
              ).switchAudioOutputSinkIdInternal(n, i, l, r);
            return i != null &&
              (t.playbackOutputSink !== i || t.playbackOutputRoute !== a)
              ? (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] output route changed during device switch",
                    ])),
                  l,
                ),
                !1)
              : s;
          }),
          (this.consumePlaybackMetrics = function () {
            if (t.$3 === 0) return null;
            var e = t.playbackSampleRate > 0 ? t.playbackSampleRate : k,
              n = t.$1 / t.$3,
              r = Math.round((t.$2 / E) * 100),
              o = t.$7 > 0 ? Math.round(t.$5 / t.$7) : null,
              a = t.$7 > 0 ? t.$6 : null,
              i = {
                webAudioRbDelayAvgMs: Math.round((n / e) * 1e3),
                webAudioRbDelayMaxMs: Math.round((t.$2 / e) * 1e3),
                webAudioRbFillMaxPct: r,
                webAudioUnderrunTotal: t.$4,
                webAudioCtxOutputLatencyAvgMs: o,
                webAudioCtxOutputLatencyMaxMs: a,
              };
            return (
              (t.$1 = 0),
              (t.$2 = 0),
              (t.$3 = 0),
              (t.$4 = 0),
              (t.$5 = 0),
              (t.$6 = 0),
              (t.$7 = 0),
              i
            );
          }));
      }
      var n = t.prototype;
      return (
        (n.$8 = function (t) {
          var e = t.consecutiveUnderruns,
            n = t.availableData,
            r = t.bufferSize;
          if (
            (typeof e == "number" &&
              e > 0 &&
              (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Consecutive underruns: ",
                    ", available: ",
                    "/",
                    "",
                  ])),
                e,
                String(n),
                String(r),
              ),
              e > this.$4 && (this.$4 = e)),
            typeof n == "number")
          ) {
            ((this.$1 += n), this.$3++, n > this.$2 && (this.$2 = n));
            var a = this.playbackAudioContext,
              i =
                a != null && typeof a.outputLatency == "number"
                  ? Math.round(a.outputLatency * 1e3)
                  : null;
            i != null &&
              ((this.$5 += i), this.$7++, i > this.$6 && (this.$6 = i));
            var l = this.playbackSampleRate > 0 ? this.playbackSampleRate : k,
              u = Math.round((n / l) * 1e3),
              c = Math.round((n / E) * 100);
          }
        }),
        (n.startAudioPlayback = async function (t) {
          var e = this,
            n = t.audioContext,
            a = t.channels,
            i = t.framesPerChunk,
            l = t.sampleRate;
          ((this.playbackAudioContext = n),
            (this.playbackSampleRate = l),
            (this.hasLoggedOutputLagEstimationFailure = !1));
          try {
            var s = o("WAWebAudioUtility").getCachedWasmModule();
            if (s == null)
              throw r("err")(
                "voip: [AV:SharedBuffer:Playback] WASM module not initialized",
              );
            var h = E,
              y = h * Float32Array.BYTES_PER_ELEMENT + I;
            this.ringBufferPtr =
              await o("WAWebAudioUtility").mallocWasmBuffer(y);
            var C = this.ringBufferPtr;
            if (C == null)
              throw r("err")(
                "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
              );
            var b = s.GROWABLE_HEAP_U8();
            if (
              (b.fill(0, C, C + y),
              this.workletPreloadPromise != null &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] awaiting worklet preload",
                    ])),
                ),
                await this.workletPreloadPromise),
              !this.isWorkletPreloaded)
            ) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] loading worklet module (contextState=",
                    ")",
                  ])),
                n.state,
              );
              var v = A(),
                S = new Blob([v], { type: "application/javascript" }),
                R = URL.createObjectURL(S);
              try {
                await n.audioWorklet.addModule(R);
              } finally {
                URL.revokeObjectURL(R);
              }
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Worklet processor module loaded",
                  ])),
              );
            }
            this.audioWorkletNode = new AudioWorkletNode(
              n,
              "voip-shared-buffer-playback-processor",
              {
                numberOfInputs: 0,
                numberOfOutputs: 1,
                outputChannelCount: [a],
              },
            );
            var L = this.audioWorkletNode;
            (L != null &&
              (L.port.onmessage = function (t) {
                var n = t.data;
                if (!(typeof n != "object" || n == null)) {
                  var r = n.type;
                  if (r === "ready") {
                    var o;
                    ((e.isProcessorReady = !0),
                      (o = e.processorReadyResolvable) == null || o.resolve(),
                      (e.processorReadyResolvable = null));
                  } else
                    r === "sharedBufferReady" ||
                      (r === "diagnostics" && e.$8(n));
                }
              }),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] waiting for processor ready",
                  ])),
              ),
              await this.waitForProcessorReady());
            var k = s.GROWABLE_HEAP_F32(),
              T = k.buffer;
            (L != null &&
              L.port.postMessage({
                type: "initSharedBuffer",
                heapBuffer: T,
                heapBufferOffset: C,
                bufferSize: h,
              }),
              await this.connectOutputRoute(n),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] starting writer thread",
                  ])),
              ));
            var D = s.startAudioWriterThread(C, h, i);
            if (!D)
              throw r("err")(
                "voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread",
              );
            var x = new Uint32Array(s.GROWABLE_HEAP_U8().buffer, C, 2);
            if (
              (await this.waitForStartupPrebufferIfNeeded(x, h, i),
              this.playbackAudioElement != null)
            )
              try {
                await this.playbackAudioElement.play();
              } catch (e) {
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                      "",
                    ])),
                  e,
                );
              }
            (this.audioWorkletNode != null &&
              this.audioWorkletNode.port.postMessage({ type: "start" }),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                  ])),
              ));
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Failed to start playback: ",
                    "",
                  ])),
                e,
              ),
              await this.stopAudioPlayback(),
              r("err")(
                "voip: [AV:SharedBuffer:Playback] Failed to start playback",
              )
            );
          }
        }),
        (n.waitForProcessorReady = async function () {
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
              await ((a = this.processorReadyResolvable) == null
                ? void 0
                : a.promise);
            } finally {
              window.clearTimeout(n);
            }
          }
        }),
        (n.connectOutputRoute = async function (t) {
          var e = $(t),
            n = this.audioWorkletNode;
          if (e != null && n != null) {
            var r = await o(
              "WAWebAudioDeviceManager",
            ).applyPreferredAudioOutputSink(
              e,
              "AV:SharedBuffer:Playback:AudioContext",
            );
            (n.connect(t.destination),
              (this.playbackOutputSink = e),
              (this.playbackOutputRoute = "direct_audio_context"),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] connected worklet directly to AudioContext.destination, setSinkIdApplied=",
                    "",
                  ])),
                String(r),
              ));
            return;
          }
          ((this.playbackMediaStreamDestination =
            t.createMediaStreamDestination()),
            this.audioWorkletNode != null &&
              this.audioWorkletNode.connect(
                this.playbackMediaStreamDestination,
              ),
            (this.playbackAudioElement = new Audio()),
            this.playbackMediaStreamDestination != null &&
              (this.playbackAudioElement.srcObject =
                this.playbackMediaStreamDestination.stream));
          var a = this.playbackAudioElement;
          (a != null &&
            (await o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(
              a,
              "AV:SharedBuffer:Playback:AudioElement",
            ),
            (this.playbackOutputSink = a),
            (this.playbackOutputRoute = "media_element")),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] connected worklet through MediaStreamDestination audio element fallback",
                ])),
            ));
        }),
        (n.waitForStartupPrebufferIfNeeded = async function (t, n, r) {
          if (this.playbackOutputRoute === "direct_audio_context") {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for direct AudioContext output route",
                ])),
            );
            return;
          }
          await this.waitForPrebuffer(t, n, r);
        }),
        (n.waitForPrebuffer = async function (t, n, r) {
          for (var e = N(n, r), a = self.performance.now(), i = 0; ; ) {
            var l = Atomics.load(t, 0),
              s = Atomics.load(t, 1);
            if (((i = M(l, s, n)), i >= e)) break;
            var u = self.performance.now() - a;
            if (u >= D) break;
            var c = Math.min(x, Math.max(0, D - u));
            await o("WAPromiseDelays").delayMs(c);
          }
          var d = self.performance.now() - a;
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:Playback] Pre-buffer wait complete: reason=",
                ", buffered=",
                " samples, target=",
                " samples, elapsed=",
                "ms",
              ])),
            i >= e ? "target_reached" : "timeout",
            i,
            e,
            Math.round(d),
          );
        }),
        (n.stopAudioPlayback = async function () {
          try {
            var e = o("WAWebAudioUtility").getCachedWasmModule();
            if (e != null)
              try {
                e.isAudioWriterThreadRunning() && e.stopAudioWriterThread();
              } catch (e) {
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
                await o("WAWebAudioUtility").freeWasmBuffer(n);
              } catch (e) {
                o("WALogger").WARN(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
              (this.playbackOutputSink = null),
              (this.playbackOutputRoute = "none"),
              (this.playbackAudioContext = null),
              (this.playbackSampleRate = 0),
              (this.hasLoggedOutputLagEstimationFailure = !1),
              (this.workletPreloadPromise = null),
              (this.$1 = 0),
              (this.$2 = 0),
              (this.$3 = 0),
              (this.$4 = 0),
              (this.$5 = 0),
              (this.$6 = 0),
              (this.$7 = 0));
          } catch (e) {
            o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] Cleanup error: ",
                  "",
                ])),
              e,
            );
          }
        }),
        (n.getAudioElement = function () {
          return this.playbackAudioElement;
        }),
        (n.getEstimatedOutputLagSamples = function () {
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
              s = M(i, l, E),
              u = w(e, n, s);
            return Math.max(0, Math.round((u.estimatedOutputLagMs * n) / 1e3));
          } catch (e) {
            return (
              this.hasLoggedOutputLagEstimationFailure ||
                ((this.hasLoggedOutputLagEstimationFailure = !0),
                o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WAWebVoipAudioPlaybackSharedBufferWorklet = F;
  },
  98,
);
