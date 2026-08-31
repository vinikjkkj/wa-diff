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
          (this.$3 = null),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = 0),
          (this.consumeCaptureMetrics = function () {
            if (e.$7 === 0 && e.$4 === 0) return null;
            var t = e.$7 > 0,
              n = {
                webAudioCaptureOverrunCount: e.$4,
                webAudioCaptureSabFillAvgMs: t ? Math.round(e.$5 / e.$7) : null,
                webAudioCaptureSabFillMaxMs: t ? Math.round(e.$6) : null,
              };
            return ((e.$4 = 0), (e.$5 = 0), (e.$6 = 0), (e.$7 = 0), n);
          }),
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
        (t.$8 = function (t) {
          if (t.type === "overrunEnded") {
            var e = t.droppedFrames;
            typeof e == "number" && e > 0 && (this.$4 += e);
            return;
          }
          if (t.type === "diagnostics") {
            var n = t.fillMs;
            typeof n != "number" ||
              !Number.isFinite(n) ||
              ((this.$5 += n), this.$7++, n > this.$6 && (this.$6 = n));
          }
        }),
        (t.startAudioCapture = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = this,
              a = t.audioContext,
              i = t.framesPerChunk,
              l = t.isStartCancelled,
              s = t.mediaStreamSource;
            if (!l()) {
              var u = ++e.$1,
                c = !1;
              try {
                var d = o("WAWebAudioUtility").getCachedWasmModule();
                if (d == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] WASM module not initialized",
                  );
                var m = b,
                  f = m * Float32Array.BYTES_PER_ELEMENT + v;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(f)),
                  R(l));
                var g = this.ringBufferPtr;
                if (g == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
                  );
                var h = d.GROWABLE_HEAP_U8();
                (h.fill(0, g, g + f), yield this.$9(a, l), R(l));
                var y = new AudioWorkletNode(
                  a,
                  "voip-shared-buffer-capture-processor",
                  { numberOfInputs: 1, numberOfOutputs: 0 },
                );
                ((this.audioWorkletNode = y),
                  (y.port.onmessage = function (e) {
                    var t = e.data;
                    if (!(typeof t != "object" || t == null))
                      if (t.type === "ready") {
                        var r;
                        ((n.isProcessorReady = !0),
                          (r = n.processorReadyResolvable) == null ||
                            r.resolve(),
                          (n.processorReadyResolvable = null));
                      } else (n.$8(t), C(t, "Capture"));
                  }),
                  yield this.waitForProcessorReady(),
                  R(l));
                var S = d.GROWABLE_HEAP_F32(),
                  E = S.buffer;
                (y.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: E,
                  heapBufferOffset: g,
                  bufferSize: m,
                  targetSampleRate: t.sampleRate,
                }),
                  (this.mediaStreamSource = s),
                  s.connect(y),
                  R(l));
                var k = window.performance.now(),
                  I = d.startAudioReaderThread(g, m, i),
                  T = window.performance.now() - k;
                if (!I)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
                  );
                ((e.$2 = u),
                  (this.$3 = u),
                  y.port.postMessage({ type: "start" }),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                        "ms",
                      ])),
                    T.toFixed(1),
                  ));
              } catch (e) {
                if (
                  L(e, l) ||
                  (o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Failed to start capture: ",
                        "",
                      ])),
                    e,
                  ),
                  (c = !0),
                  yield this.stopAudioCapture(u),
                  l())
                )
                  return;
                throw r("err")(
                  "voip: [AV:SharedBuffer:Capture] Failed to start capture",
                );
              } finally {
                l() && !c && (yield this.stopAudioCapture(u));
              }
            }
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (t.$9 = (function () {
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
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            try {
              var n = t != null ? t : this.$3,
                r = n == null ? e.$2 == null : e.$2 === n,
                a = o("WAWebAudioUtility").getCachedWasmModule();
              if (r && a != null)
                try {
                  (a.isAudioReaderThreadRunning() && a.stopAudioReaderThread(),
                    e.$2 === n && (e.$2 = null),
                    this.$3 === n && (this.$3 = null));
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
              var i = this.ringBufferPtr;
              if (i != null) {
                this.ringBufferPtr = null;
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(i);
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
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
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
    ((E.$1 = 0),
      (E.$2 = null),
      (l.handleSharedBufferWorkletDiagnostics = C),
      (l.WAWebVoipAudioCaptureSharedBufferWorklet = E));
  },
  98,
);
