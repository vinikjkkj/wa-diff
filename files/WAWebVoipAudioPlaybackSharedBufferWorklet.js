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
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = 0),
          (this.$8 = 0),
          (this.$9 = 0),
          (this.$10 = null),
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
            if (t.$5 === 0) return null;
            var e = t.playbackSampleRate > 0 ? t.playbackSampleRate : T,
              n = t.$3 / t.$5,
              r = Math.round((t.$4 / I) * 100),
              o = t.$9 > 0 ? Math.round(t.$7 / t.$9) : null,
              a = t.$9 > 0 ? t.$8 : null,
              i = {
                webAudioRbDelayAvgMs: Math.round((n / e) * 1e3),
                webAudioRbDelayMaxMs: Math.round((t.$4 / e) * 1e3),
                webAudioRbFillMaxPct: r,
                webAudioUnderrunTotal: t.$6,
                webAudioCtxOutputLatencyAvgMs: o,
                webAudioCtxOutputLatencyMaxMs: a,
              };
            return (
              (t.$3 = 0),
              (t.$4 = 0),
              (t.$5 = 0),
              (t.$6 = 0),
              (t.$7 = 0),
              (t.$8 = 0),
              (t.$9 = 0),
              i
            );
          }));
      }
      var a = t.prototype;
      return (
        (a.$11 = function (t) {
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
              e > this.$6 && (this.$6 = e)),
            typeof n == "number")
          ) {
            ((this.$3 += n), this.$5++, n > this.$4 && (this.$4 = n));
            var a = this.playbackAudioContext,
              i =
                a != null && typeof a.outputLatency == "number"
                  ? Math.round(a.outputLatency * 1e3)
                  : null;
            i != null &&
              ((this.$7 += i), this.$9++, i > this.$8 && (this.$8 = i));
            var l = this.playbackSampleRate > 0 ? this.playbackSampleRate : T,
              s = Math.round((n / l) * 1e3),
              u = Math.round((n / I) * 100);
          }
        }),
        (a.startAudioPlayback = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = this,
              a = e.audioContext,
              i = e.channels,
              l = e.framesPerChunk,
              s = e.isStartCancelled,
              u = e.sampleRate;
            if (!s()) {
              var c = ++t.$1;
              ((this.playbackAudioContext = a),
                (this.playbackSampleRate = u),
                (this.hasLoggedOutputLagEstimationFailure = !1));
              var f = !1;
              try {
                var g = o("WAWebAudioUtility").getCachedWasmModule();
                if (g == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] WASM module not initialized",
                  );
                var h = I,
                  y = h * Float32Array.BYTES_PER_ELEMENT + D;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(y)),
                  M(s));
                var C = this.ringBufferPtr;
                if (C == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
                  );
                var b = g.GROWABLE_HEAP_U8();
                (b.fill(0, C, C + y), yield this.$12(a, s), M(s));
                var v = new AudioWorkletNode(
                  a,
                  "voip-shared-buffer-playback-processor",
                  {
                    numberOfInputs: 0,
                    numberOfOutputs: 1,
                    outputChannelCount: [i],
                  },
                );
                ((this.audioWorkletNode = v),
                  (v.port.onmessage = function (e) {
                    var t = e.data;
                    if (!(typeof t != "object" || t == null)) {
                      var r = t.type;
                      if (r === "ready") {
                        var o;
                        ((n.isProcessorReady = !0),
                          (o = n.processorReadyResolvable) == null ||
                            o.resolve(),
                          (n.processorReadyResolvable = null));
                      } else
                        r === "sharedBufferReady" ||
                          (r === "diagnostics" && n.$11(t));
                    }
                  }),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] waiting for processor ready",
                      ])),
                  ),
                  yield this.waitForProcessorReady(),
                  M(s));
                var S = g.GROWABLE_HEAP_F32(),
                  R = S.buffer;
                (v.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: R,
                  heapBufferOffset: C,
                  bufferSize: h,
                }),
                  yield this.connectOutputRoute(a, s),
                  M(s),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] starting writer thread",
                      ])),
                  ));
                var L = g.startAudioWriterThread(C, h, l);
                if (!L)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread",
                  );
                ((t.$2 = c), (this.$10 = c));
                var E = new Uint32Array(g.GROWABLE_HEAP_U8().buffer, C, 2);
                (yield this.waitForStartupPrebufferIfNeeded(E, h, l, s),
                  M(s),
                  yield this.$13(v, s),
                  M(s),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                      ])),
                  ));
              } catch (e) {
                if (
                  w(e, s) ||
                  (o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Failed to start playback: ",
                        "",
                      ])),
                    e,
                  ),
                  (f = !0),
                  yield this.stopAudioPlayback(c),
                  s())
                )
                  return;
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to start playback",
                );
              } finally {
                s() && !f && (yield this.stopAudioPlayback(c));
              }
            }
          });
          function a(t) {
            return e.apply(this, arguments);
          }
          return a;
        })()),
        (a.$12 = (function () {
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
        (a.$13 = (function () {
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var n = e != null ? e : this.$10,
                r = n == null ? t.$2 == null : t.$2 === n,
                a = o("WAWebAudioUtility").getCachedWasmModule();
              if (r && a != null)
                try {
                  (a.isAudioWriterThreadRunning() && a.stopAudioWriterThread(),
                    t.$2 === n && (t.$2 = null),
                    this.$10 === n && (this.$10 = null));
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
                var i = this.playbackAudioElement;
                (i.pause(),
                  (i.srcObject = null),
                  (this.playbackAudioElement = null));
              }
              (this.audioWorkletNode != null &&
                (this.audioWorkletNode.disconnect(),
                (this.audioWorkletNode = null)),
                this.playbackMediaStreamDestination != null &&
                  (this.playbackMediaStreamDestination.disconnect(),
                  (this.playbackMediaStreamDestination = null)));
              var l = this.ringBufferPtr;
              if (l != null) {
                this.ringBufferPtr = null;
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(l);
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
                (this.$3 = 0),
                (this.$4 = 0),
                (this.$5 = 0),
                (this.$6 = 0),
                (this.$7 = 0),
                (this.$8 = 0),
                (this.$9 = 0));
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
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
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
    ((q.$1 = 0),
      (q.$2 = null),
      (l.WAWebVoipAudioPlaybackSharedBufferWorklet = q));
  },
  98,
);
