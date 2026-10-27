__d(
  "WAWebVoipAudioCaptureSharedBufferWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneLevelReporter",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
    "WAWebVoipSharedBufferRingRelease",
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
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = !1),
          (this.$7 = 0),
          (this.$8 = 0),
          (this.$9 = 0),
          (this.$10 = 0),
          (this.consumeCaptureMetrics = function () {
            if (e.$10 === 0 && e.$7 === 0) return null;
            var t = e.$10 > 0,
              n = {
                webAudioCaptureOverrunCount: e.$7,
                webAudioCaptureSabFillAvgMs: t
                  ? Math.round(e.$8 / e.$10)
                  : null,
                webAudioCaptureSabFillMaxMs: t ? Math.round(e.$9) : null,
              };
            return ((e.$7 = 0), (e.$8 = 0), (e.$9 = 0), (e.$10 = 0), n);
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
        (t.$11 = function (t) {
          if (t.type === "overrunEnded") {
            var e = t.droppedFrames;
            typeof e == "number" && e > 0 && (this.$7 += e);
            return;
          }
          if (t.type === "diagnostics") {
            var n = t.fillMs;
            typeof n != "number" ||
              !Number.isFinite(n) ||
              ((this.$8 += n), this.$10++, n > this.$9 && (this.$9 = n));
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
              var u = t.onInputLevel;
              this.$4 =
                u != null
                  ? new (o(
                      "WAWebVoipMicrophoneLevelReporter",
                    ).WAWebVoipMicrophoneLevelReporter)(
                      u,
                      "SharedBuffer:Capture",
                    )
                  : null;
              var c = ++e.$1,
                d = !1;
              try {
                var m = o("WAWebAudioUtility").getCachedWasmModule();
                if (m == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] WASM module not initialized",
                  );
                var f = b,
                  g = f * Float32Array.BYTES_PER_ELEMENT + v;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(g)),
                  R(l));
                var h = this.ringBufferPtr;
                if (h == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
                  );
                var y = m.GROWABLE_HEAP_U8();
                (y.fill(0, h, h + g), yield this.$12(a, l), R(l));
                var S = new AudioWorkletNode(
                  a,
                  "voip-shared-buffer-capture-processor",
                  { numberOfInputs: 1, numberOfOutputs: 0 },
                );
                this.audioWorkletNode = S;
                var E = new (o("WAResolvable").Resolvable)();
                ((this.$5 = E),
                  (S.port.onmessage = function (e) {
                    var t = e.data;
                    if (!(typeof t != "object" || t == null))
                      if (t.type === "ready") {
                        var r;
                        ((n.isProcessorReady = !0),
                          (r = n.processorReadyResolvable) == null ||
                            r.resolve(),
                          (n.processorReadyResolvable = null));
                      } else if (t.type === "stopped") E.resolve();
                      else if (t.type === "level") {
                        var o = t.rmsDbfs;
                        if (typeof o == "number" && Number.isFinite(o)) {
                          var a;
                          (a = n.$4) == null || a.forward(o);
                        }
                      } else (n.$11(t), C(t, "Capture"));
                  }),
                  yield this.waitForProcessorReady(),
                  R(l));
                var k = m.GROWABLE_HEAP_F32(),
                  I = k.buffer;
                (S.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: I,
                  heapBufferOffset: h,
                  bufferSize: f,
                  targetSampleRate: t.sampleRate,
                  reportInputLevel: this.$4 != null,
                  levelReportIntervalMs: o("WAWebVoipMicrophoneInputState")
                    .LEVEL_REPORT_INTERVAL_MS,
                  doorbellOffset: m.getAudioDoorbellPtr(),
                  doorbellChunkSamples: i,
                }),
                  (this.$6 = !0),
                  (this.mediaStreamSource = s),
                  s.connect(S),
                  R(l));
                var T = window.performance.now(),
                  D = m.startAudioReaderThread(h, f, i),
                  x = window.performance.now() - T;
                if (!D)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
                  );
                ((e.$2 = c),
                  (this.$3 = c),
                  S.port.postMessage({ type: "start" }),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                        "ms",
                      ])),
                    x.toFixed(1),
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
                  (d = !0),
                  yield this.stopAudioCapture(c),
                  l())
                )
                  return;
                throw r("err")(
                  "voip: [AV:SharedBuffer:Capture] Failed to start capture",
                );
              } finally {
                l() && !d && (yield this.stopAudioCapture(c));
              }
            }
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (t.$12 = (function () {
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
              var i = this.$13();
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
              var l = this.ringBufferPtr;
              if (l != null) {
                this.ringBufferPtr = null;
                try {
                  yield o(
                    "WAWebVoipSharedBufferRingRelease",
                  ).freeRingBufferAfterWorkletStop(l, i, "Capture");
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
                (this.workletPreloadPromise = null),
                (this.$4 = null));
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
        (t.$13 = function () {
          var e,
            t = this.$6 ? ((e = this.$5) == null ? void 0 : e.promise) : null;
          return ((this.$5 = null), (this.$6 = !1), t);
        }),
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
