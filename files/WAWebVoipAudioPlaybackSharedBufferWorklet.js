__d(
  "WAWebVoipAudioPlaybackSharedBufferWorklet",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipSharedBufferPlaybackProcessorConfig",
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
      v,
      S,
      R,
      L,
      E,
      k,
      I = 8192,
      T = 16e3,
      D = 8,
      x = 7,
      $ = 200,
      P = 10,
      N = r("err")("Audio playback start cancelled");
    function M(e) {
      if (e()) throw N;
    }
    function w(e, t) {
      return e === N || t();
    }
    function A(e) {
      var t = e;
      return typeof t.setSinkId == "function" ? t : null;
    }
    function F(e) {
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
    function O(e, t) {
      var n = Math.ceil((e * x) / 100);
      if (t <= 0) return n;
      var r = Math.ceil(n / t) * t,
        o = e > t ? e - t : e;
      return Math.min(r, o);
    }
    function B(e, t, n) {
      return (e - t + n) % n;
    }
    function W(e, t, n) {
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
    var q = (function () {
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
          (this.preloadWorkletModule = function (n) {
            var a = r(
              "WAWebVoipSharedBufferPlaybackProcessorConfig",
            ).module_url;
            if (a === "") {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Missing worklet module url, skipping preload",
                  ])),
              );
              return;
            }
            var i = n.audioWorklet
              .addModule(a)
              .then(function () {
                ((t.isWorkletPreloaded = !0), (t.workletPreloadPromise = null));
              })
              .catch(function (e) {
                (o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Worklet preload failed, will load during start: ",
                      "",
                    ])),
                  e,
                ),
                  (t.isWorkletPreloaded = !1),
                  (t.workletPreloadPromise = null));
              });
            t.workletPreloadPromise = i;
          }),
          (this.switchOutputDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n) {
                var r = t.playbackOutputRoute,
                  a = t.playbackOutputSink,
                  i = F(r),
                  l = yield o(
                    "WAWebAudioDeviceManager",
                  ).switchAudioOutputSinkIdInternal(e, a, i, n);
                return a != null &&
                  (t.playbackOutputSink !== a || t.playbackOutputRoute !== r)
                  ? (o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [",
                          "] output route changed during device switch",
                        ])),
                      i,
                    ),
                    !1)
                  : l;
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()),
          (this.consumePlaybackMetrics = function () {
            if (t.$3 === 0) return null;
            var e = t.playbackSampleRate > 0 ? t.playbackSampleRate : T,
              n = t.$1 / t.$3,
              r = Math.round((t.$2 / I) * 100),
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
      var a = t.prototype;
      return (
        (a.$8 = function (t) {
          var e = t.consecutiveUnderruns,
            n = t.availableData,
            r = t.bufferSize;
          if (
            (typeof e == "number" &&
              e > 0 &&
              (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
            var l = this.playbackSampleRate > 0 ? this.playbackSampleRate : T,
              s = Math.round((n / l) * 1e3),
              u = Math.round((n / I) * 100);
          }
        }),
        (a.startAudioPlayback = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = e.audioContext,
              a = e.channels,
              i = e.framesPerChunk,
              l = e.isStartCancelled,
              s = e.sampleRate;
            if (!l()) {
              ((this.playbackAudioContext = n),
                (this.playbackSampleRate = s),
                (this.hasLoggedOutputLagEstimationFailure = !1));
              var u = !1;
              try {
                var c = o("WAWebAudioUtility").getCachedWasmModule();
                if (c == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] WASM module not initialized",
                  );
                var f = I,
                  g = f * Float32Array.BYTES_PER_ELEMENT + D;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(g)),
                  M(l));
                var h = this.ringBufferPtr;
                if (h == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
                  );
                var y = c.GROWABLE_HEAP_U8();
                (y.fill(0, h, h + g), yield this.$9(n, l), M(l));
                var C = new AudioWorkletNode(
                  n,
                  "voip-shared-buffer-playback-processor",
                  {
                    numberOfInputs: 0,
                    numberOfOutputs: 1,
                    outputChannelCount: [a],
                  },
                );
                ((this.audioWorkletNode = C),
                  (C.port.onmessage = function (e) {
                    var n = e.data;
                    if (!(typeof n != "object" || n == null)) {
                      var r = n.type;
                      if (r === "ready") {
                        var o;
                        ((t.isProcessorReady = !0),
                          (o = t.processorReadyResolvable) == null ||
                            o.resolve(),
                          (t.processorReadyResolvable = null));
                      } else
                        r === "sharedBufferReady" ||
                          (r === "diagnostics" && t.$8(n));
                    }
                  }),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] waiting for processor ready",
                      ])),
                  ),
                  yield this.waitForProcessorReady(),
                  M(l));
                var b = c.GROWABLE_HEAP_F32(),
                  v = b.buffer;
                (C.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: v,
                  heapBufferOffset: h,
                  bufferSize: f,
                }),
                  yield this.connectOutputRoute(n, l),
                  M(l),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] starting writer thread",
                      ])),
                  ));
                var S = c.startAudioWriterThread(h, f, i);
                if (!S)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread",
                  );
                var R = new Uint32Array(c.GROWABLE_HEAP_U8().buffer, h, 2);
                (yield this.waitForStartupPrebufferIfNeeded(R, f, i, l),
                  M(l),
                  yield this.$10(C, l),
                  M(l),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                      ])),
                  ));
              } catch (e) {
                if (
                  w(e, l) ||
                  (o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Failed to start playback: ",
                        "",
                      ])),
                    e,
                  ),
                  (u = !0),
                  yield this.stopAudioPlayback(),
                  l())
                )
                  return;
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to start playback",
                );
              } finally {
                l() && !u && (yield this.stopAudioPlayback());
              }
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$9 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (
                (this.workletPreloadPromise != null &&
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] awaiting worklet preload",
                      ])),
                  ),
                  yield this.workletPreloadPromise,
                  M(t)),
                !this.isWorkletPreloaded)
              ) {
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] loading worklet module (contextState=",
                      ")",
                    ])),
                  e.state,
                );
                var n = r(
                  "WAWebVoipSharedBufferPlaybackProcessorConfig",
                ).module_url;
                if (n === "")
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Missing worklet module url",
                  );
                (yield e.audioWorklet.addModule(n),
                  M(t),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Worklet processor module loaded",
                      ])),
                  ));
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (this.playbackAudioElement != null) {
                try {
                  yield this.playbackAudioElement.play();
                } catch (e) {
                  o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                        "",
                      ])),
                    e,
                  );
                }
                M(t);
              }
              e.port.postMessage({ type: "start" });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
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
        (a.connectOutputRoute = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = A(e),
                r = this.audioWorkletNode;
              if (n != null && r != null) {
                var a = yield o(
                  "WAWebAudioDeviceManager",
                ).applyPreferredAudioOutputSink(
                  n,
                  "AV:SharedBuffer:Playback:AudioContext",
                );
                if (t()) return;
                (r.connect(e.destination),
                  (this.playbackOutputSink = n),
                  (this.playbackOutputRoute = "direct_audio_context"),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] connected worklet directly to AudioContext.destination, setSinkIdApplied=",
                        "",
                      ])),
                    String(a),
                  ));
                return;
              }
              ((this.playbackMediaStreamDestination =
                e.createMediaStreamDestination()),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.connect(
                    this.playbackMediaStreamDestination,
                  ),
                (this.playbackAudioElement = new Audio()),
                this.playbackMediaStreamDestination != null &&
                  (this.playbackAudioElement.srcObject =
                    this.playbackMediaStreamDestination.stream));
              var i = this.playbackAudioElement;
              if (i != null) {
                if (
                  (yield o(
                    "WAWebAudioDeviceManager",
                  ).applyPreferredAudioOutputSink(
                    i,
                    "AV:SharedBuffer:Playback:AudioElement",
                  ),
                  t())
                )
                  return;
                ((this.playbackOutputSink = i),
                  (this.playbackOutputRoute = "media_element"));
              }
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] connected worklet through MediaStreamDestination audio element fallback",
                  ])),
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.waitForStartupPrebufferIfNeeded = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              if (this.playbackOutputRoute === "direct_audio_context") {
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for direct AudioContext output route",
                    ])),
                );
                return;
              }
              yield this.waitForPrebuffer(e, t, n, r);
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.waitForPrebuffer = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              for (var a = O(t, n), i = self.performance.now(), l = 0; ; ) {
                if (r()) return;
                var s = Atomics.load(e, 0),
                  u = Atomics.load(e, 1);
                if (((l = B(s, u, t)), l >= a)) break;
                var c = self.performance.now() - i;
                if (c >= $) break;
                var d = Math.min(P, Math.max(0, $ - c));
                if ((yield o("WAPromiseDelays").delayMs(d), r())) return;
              }
              var m = self.performance.now() - i;
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Pre-buffer wait complete: reason=",
                    ", buffered=",
                    " samples, target=",
                    " samples, elapsed=",
                    "ms",
                  ])),
                l >= a ? "target_reached" : "timeout",
                l,
                a,
                Math.round(m),
              );
            },
          );
          function t(t, n, r, o) {
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
                this.ringBufferPtr = null;
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(n);
                } catch (e) {
                  o("WALogger").WARN(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Error freeing ring buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
              s = B(i, l, I),
              u = W(e, n, s);
            return Math.max(0, Math.round((u.estimatedOutputLagMs * n) / 1e3));
          } catch (e) {
            return (
              this.hasLoggedOutputLagEstimationFailure ||
                ((this.hasLoggedOutputLagEstimationFailure = !0),
                o("WALogger").WARN(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WAWebVoipAudioPlaybackSharedBufferWorklet = q;
  },
  98,
);
