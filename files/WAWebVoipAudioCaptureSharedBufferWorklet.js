__d(
  "WAWebVoipAudioCaptureSharedBufferWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(t, n) {
      var r = t.type;
      if (r !== "sharedBufferReady")
        if (r === "resamplingConfigured")
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] resample ",
                "->",
                "Hz r=",
                "",
              ])),
            n,
            String(t.inputRate),
            String(t.targetRate),
            String(t.ratio),
          );
        else if (r === "overrunEnded")
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] overrun end ",
                " dropped ",
                "ms",
              ])),
            n,
            String(t.droppedFrames),
            String(t.durationMs),
          );
        else if (r === "diagnostics") {
          var a = t.overrunCount;
          typeof a == "number" &&
            a > 0 &&
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:",
                  "] Overruns: ",
                  ", available: ",
                  "/",
                  "",
                ])),
              n,
              a,
              String(t.availableSpace),
              String(t.bufferSize),
            );
          var i = t.fillMs;
          if (typeof i == "number") {
            var l =
              typeof t.audioWorkletTime == "number"
                ? t.audioWorkletTime.toFixed(2)
                : "n/a";
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:capture-skew] ",
                  " sab fill=",
                  "ms (",
                  "/",
                  " samples) totalFramesWritten=",
                  " workletTime=",
                  "s",
                ])),
              n,
              i.toFixed(1),
              String(t.bufferedSamples),
              String(t.bufferSize),
              String(t.totalFramesWritten),
              l,
            );
          }
        } else return !1;
      return !0;
    }
    var b = 8192,
      v = 8,
      S = r("err")("Audio capture start cancelled");
    function R(e) {
      if (e()) throw S;
    }
    function L(e, t) {
      return e === S || t();
    }
    var E = (function () {
      function e() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.ringBufferPtr = null),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.mediaStreamSource = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = r("WAWebVoipSharedBufferCaptureProcessorConfig").module_url;
            if (n === "") {
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Missing worklet module url, skipping preload",
                  ])),
              );
              return;
            }
            var a = t.audioWorklet
              .addModule(n)
              .then(function () {
                ((e.isWorkletPreloaded = !0), (e.workletPreloadPromise = null));
              })
              .catch(function (t) {
                (o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Worklet preload failed, will load during start: ",
                      "",
                    ])),
                  t,
                ),
                  (e.isWorkletPreloaded = !1),
                  (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = a;
          }));
      }
      var t = e.prototype;
      return (
        (t.startAudioCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = e.audioContext,
              a = e.framesPerChunk,
              i = e.isStartCancelled,
              l = e.mediaStreamSource;
            if (!i()) {
              var s = !1;
              try {
                var u = o("WAWebAudioUtility").getCachedWasmModule();
                if (u == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] WASM module not initialized",
                  );
                var c = b,
                  d = c * Float32Array.BYTES_PER_ELEMENT + v;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(d)),
                  R(i));
                var m = this.ringBufferPtr;
                if (m == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
                  );
                var f = u.GROWABLE_HEAP_U8();
                (f.fill(0, m, m + d), yield this.$1(n, i), R(i));
                var g = new AudioWorkletNode(
                  n,
                  "voip-shared-buffer-capture-processor",
                  { numberOfInputs: 1, numberOfOutputs: 0 },
                );
                ((this.audioWorkletNode = g),
                  (g.port.onmessage = function (e) {
                    var n = e.data;
                    if (!(typeof n != "object" || n == null))
                      if (n.type === "ready") {
                        var r;
                        ((t.isProcessorReady = !0),
                          (r = t.processorReadyResolvable) == null ||
                            r.resolve(),
                          (t.processorReadyResolvable = null));
                      } else C(n, "Capture");
                  }),
                  yield this.waitForProcessorReady(),
                  R(i));
                var h = u.GROWABLE_HEAP_F32(),
                  y = h.buffer;
                (g.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: y,
                  heapBufferOffset: m,
                  bufferSize: c,
                  targetSampleRate: e.sampleRate,
                }),
                  (this.mediaStreamSource = l),
                  l.connect(g),
                  R(i));
                var S = window.performance.now(),
                  E = u.startAudioReaderThread(m, c, a),
                  k = window.performance.now() - S;
                if (!E)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
                  );
                (g.port.postMessage({ type: "start" }),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                        "ms",
                      ])),
                    k.toFixed(1),
                  ));
              } catch (e) {
                if (
                  L(e, i) ||
                  (o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Failed to start capture: ",
                        "",
                      ])),
                    e,
                  ),
                  (s = !0),
                  yield this.stopAudioCapture(),
                  i())
                )
                  return;
                throw r("err")(
                  "voip: [AV:SharedBuffer:Capture] Failed to start capture",
                );
              } finally {
                i() && !s && (yield this.stopAudioCapture());
              }
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$1 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (
                (this.workletPreloadPromise != null &&
                  (yield this.workletPreloadPromise, R(t)),
                !this.isWorkletPreloaded)
              ) {
                var n = r(
                  "WAWebVoipSharedBufferCaptureProcessorConfig",
                ).module_url;
                if (n === "")
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Missing worklet module url",
                  );
                (yield e.audioWorklet.addModule(n), R(t));
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.waitForProcessorReady = (function () {
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
                      "voip: [AV:SharedBuffer:Capture] Processor failed to become ready within 5s",
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
        (t.stopAudioCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = o("WAWebAudioUtility").getCachedWasmModule();
              if (e != null)
                try {
                  e.isAudioReaderThreadRunning() && e.stopAudioReaderThread();
                } catch (e) {
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] reader stop err: ",
                        "",
                      ])),
                    e,
                  );
                }
              if (
                (this.audioWorkletNode != null &&
                  this.audioWorkletNode.port.postMessage({ type: "stop" }),
                this.mediaStreamSource != null)
              ) {
                try {
                  this.mediaStreamSource.disconnect();
                } catch (e) {}
                this.mediaStreamSource = null;
              }
              this.audioWorkletNode != null &&
                (this.audioWorkletNode.disconnect(),
                (this.audioWorkletNode = null));
              var t = this.ringBufferPtr;
              if (t != null) {
                this.ringBufferPtr = null;
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(t);
                } catch (e) {
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Error freeing ring buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
              ((this.isProcessorReady = !1),
                (this.processorReadyResolvable = null),
                (this.isWorkletPreloaded = !1),
                (this.workletPreloadPromise = null));
            } catch (e) {
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Cleanup error: ",
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
        (t.reconnect = function (t) {
          if (this.mediaStreamSource != null)
            try {
              this.mediaStreamSource.disconnect();
            } catch (e) {}
          ((this.mediaStreamSource = t),
            this.audioWorkletNode != null &&
              (t.connect(this.audioWorkletNode),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Reconnected to new stream",
                  ])),
              )));
        }),
        e
      );
    })();
    ((l.handleSharedBufferWorkletDiagnostics = C),
      (l.WAWebVoipAudioCaptureSharedBufferWorklet = E));
  },
  98,
);
