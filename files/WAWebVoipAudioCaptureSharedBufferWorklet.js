__d(
  "WAWebVoipAudioCaptureSharedBufferWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneLevelReporter",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
    "WAWebVoipSharedBufferRingQuarantine",
    "WAWebVoipSharedBufferRingRelease",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(t, n) {
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
    var R = 8192,
      L = 8,
      E = r("err")("Audio capture start cancelled");
    function k(e) {
      if (e()) throw E;
    }
    function I(e, t) {
      return e === E || t();
    }
    function T() {
      try {
        return (
          o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
            "capture_stop",
          ) && !r("justknobx")._("7007")
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:Capture] main thread lock fix gate unavailable, keeping the main thread reader stop: ",
                "",
              ])),
            e,
          ),
          !1
        );
      }
    }
    function D(e, t, n) {
      return e
        ? t
          ? "skipped_native_stopped"
          : n == null
            ? "skipped_no_owner"
            : null
        : null;
    }
    function x(e) {
      e &&
        (o("WAWebVoipMainThreadLockODS").logMainThreadLockAudioStopEvent(
          "capture_stop",
          "native_still_running",
        ),
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:SharedBuffer:Capture] reader thread still running after the native stop",
            ])),
        ));
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t != null &&
            (yield o("WAWebVoipSharedBufferRingRelease").didWorkletStop(t)),
            o("WAWebVoipSharedBufferRingQuarantine").holdSharedBufferRing(
              "mic",
              { ringBufferPtr: e, workletStopped: t },
            ));
        })),
        P.apply(this, arguments)
      );
    }
    var N = (function () {
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                var p = R,
                  _ = p * Float32Array.BYTES_PER_ELEMENT + L;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(_)),
                  k(l));
                var h = this.ringBufferPtr;
                if (h == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
                  );
                var y = m.GROWABLE_HEAP_U8();
                (y.fill(0, h, h + _), yield this.$12(a, l), k(l));
                var C = new AudioWorkletNode(
                  a,
                  "voip-shared-buffer-capture-processor",
                  { numberOfInputs: 1, numberOfOutputs: 0 },
                );
                this.audioWorkletNode = C;
                var b = new (o("WAResolvable").Resolvable)();
                ((this.$5 = b),
                  (C.port.onmessage = function (e) {
                    var t = e.data;
                    if (!(typeof t != "object" || t == null))
                      if (t.type === "ready") {
                        var r;
                        ((n.isProcessorReady = !0),
                          (r = n.processorReadyResolvable) == null ||
                            r.resolve(),
                          (n.processorReadyResolvable = null));
                      } else if (t.type === "stopped") b.resolve();
                      else if (t.type === "level") {
                        var o = t.rmsDbfs;
                        if (typeof o == "number" && Number.isFinite(o)) {
                          var a;
                          (a = n.$4) == null || a.forward(o);
                        }
                      } else (n.$11(t), S(t, "Capture"));
                  }),
                  yield this.waitForProcessorReady(),
                  k(l));
                var v = m.GROWABLE_HEAP_F32(),
                  E = v.buffer;
                (C.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: E,
                  heapBufferOffset: h,
                  bufferSize: p,
                  targetSampleRate: t.sampleRate,
                  reportInputLevel: this.$4 != null,
                  levelReportIntervalMs: o("WAWebVoipMicrophoneInputState")
                    .LEVEL_REPORT_INTERVAL_MS,
                  doorbellOffset: m.getAudioDoorbellPtr(),
                  doorbellChunkSamples: i,
                }),
                  (this.$6 = !0),
                  (this.mediaStreamSource = s),
                  s.connect(C),
                  k(l),
                  o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
                    "capture_start",
                  ));
                var T = o(
                    "WAWebVoipMainThreadLockMarker",
                  ).startMainThreadLockMarker("capture_start", "main"),
                  D = window.performance.now(),
                  x,
                  $;
                try {
                  ((x = m.startAudioReaderThread(h, p, i)),
                    ($ = window.performance.now() - D));
                } finally {
                  o("WAWebVoipMainThreadLockODS").logMainThreadLockCallDuration(
                    "capture_start",
                    o(
                      "WAWebVoipMainThreadLockMarker",
                    ).finishMainThreadLockMarker(T),
                  );
                }
                if (!x)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
                  );
                ((e.$2 = c),
                  (this.$3 = c),
                  o(
                    "WAWebVoipSharedBufferRingQuarantine",
                  ).releaseHeldSharedBufferRings("mic", h),
                  C.port.postMessage({ type: "start" }),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                        "ms",
                      ])),
                    $.toFixed(1),
                  ));
              } catch (e) {
                if (
                  I(e, l) ||
                  (o("WALogger").ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield this.workletPreloadPromise, k(t)),
                !this.isWorkletPreloaded)
              ) {
                var n = r(
                  "WAWebVoipSharedBufferCaptureProcessorConfig",
                ).module_url;
                if (n === "")
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Capture] Missing worklet module url",
                  );
                (yield e.audioWorklet.addModule(n), k(t));
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
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              try {
                var r = (n == null ? void 0 : n.nativeStopped) === !0,
                  a = T(),
                  i = t != null ? t : this.$3,
                  l = i == null ? e.$2 == null : e.$2 === i,
                  s = o("WAWebAudioUtility").getCachedWasmModule(),
                  u = !1;
                if (l && s != null) {
                  var c = D(a, r, i);
                  try {
                    if (c == null) {
                      var d = o(
                        "WAWebVoipMainThreadLockMarker",
                      ).startMainThreadLockMarker("capture_stop", "main");
                      try {
                        s.isAudioReaderThreadRunning() &&
                          (s.stopAudioReaderThread(), x(r));
                      } finally {
                        o(
                          "WAWebVoipMainThreadLockODS",
                        ).logMainThreadLockCallDuration(
                          "capture_stop",
                          o(
                            "WAWebVoipMainThreadLockMarker",
                          ).finishMainThreadLockMarker(d),
                        );
                      }
                    } else
                      ((u = c === "skipped_native_stopped"),
                        o(
                          "WAWebVoipMainThreadLockODS",
                        ).logMainThreadLockAudioStopEvent("capture_stop", c),
                        o("WALogger").LOG(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:SharedBuffer:Capture] main thread reader stop skipped: ",
                              "",
                            ])),
                          c,
                        ));
                    (e.$2 === i && (e.$2 = null),
                      this.$3 === i && (this.$3 = null));
                  } catch (e) {
                    o("WALogger").WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Capture] reader stop err: ",
                          "",
                        ])),
                      e,
                    );
                  }
                }
                var m = this.$13();
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
                (this.audioWorkletNode != null &&
                  (this.audioWorkletNode.disconnect(),
                  (this.audioWorkletNode = null)),
                  yield this.$14(m, u),
                  (this.isProcessorReady = !1),
                  (this.processorReadyResolvable = null),
                  (this.isWorkletPreloaded = !1),
                  (this.workletPreloadPromise = null),
                  (this.$4 = null));
              } catch (e) {
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Cleanup error: ",
                      "",
                    ])),
                  e,
                );
              }
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (t.$13 = function () {
          var e,
            t = this.$6 ? ((e = this.$5) == null ? void 0 : e.promise) : null;
          return ((this.$5 = null), (this.$6 = !1), t);
        }),
        (t.$14 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = this.ringBufferPtr;
              if (n != null) {
                if (((this.ringBufferPtr = null), t)) {
                  yield $(n, e);
                  return;
                }
                try {
                  yield o(
                    "WAWebVoipSharedBufferRingRelease",
                  ).freeRingBufferAfterWorkletStop(n, e, "Capture");
                } catch (e) {
                  o("WALogger").WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Error freeing ring buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
            },
          );
          function t(t, n) {
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Reconnected to new stream",
                  ])),
              )));
        }),
        e
      );
    })();
    ((N.$1 = 0),
      (N.$2 = null),
      (l.handleSharedBufferWorkletDiagnostics = S),
      (l.WAWebVoipAudioCaptureSharedBufferWorklet = N));
  },
  98,
);
