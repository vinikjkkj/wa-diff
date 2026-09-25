__d(
  "WAWebVoipAudioPlaybackSharedBufferWorklet",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebMediaPermissionsUtils",
    "WAWebODS",
    "WAWebUA",
    "WAWebVoipBrowserMuteDetector",
    "WAWebVoipBrowserMuteState",
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
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A = 8192,
      F = 16e3,
      O = 8,
      B = 7,
      W = 200,
      q = 10,
      U = 2,
      V = 30,
      H = r("err")("Audio playback start cancelled");
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_audio_playback_use_media_element_output",
      );
    }
    function z(e) {
      if (e()) throw H;
    }
    function j(e, t) {
      return e === H || t();
    }
    function K(e) {
      var t = e;
      return typeof t.setSinkId == "function" ? t : null;
    }
    function Q(e) {
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
    function X(e, t) {
      var n = Math.ceil((e * B) / 100);
      if (t <= 0) return n;
      var r = Math.ceil(n / t) * t,
        o = e > t ? e - t : e;
      return Math.min(r, o);
    }
    function Y(e, t, n) {
      return (e - t + n) % n;
    }
    function J(e, t, n) {
      var r = (n * 1e3) / t,
        o = typeof e.baseLatency == "number" ? e.baseLatency * 1e3 : 0,
        a = typeof e.outputLatency == "number" ? e.outputLatency * 1e3 : 0,
        i = null,
        l = e.getOutputTimestamp();
      if (l != null) {
        var s = l.contextTime,
          u = l.performanceTime;
        if (typeof s == "number" && typeof u == "number") {
          var c = Math.max(0, self.performance.now() - u),
            d = s + c / 1e3;
          i = Math.max(0, (e.currentTime - d) * 1e3);
        }
      }
      var m = i != null ? i : o > 0 && a > 0 ? o + a : Math.max(o, a);
      return { estimatedOutputLagMs: r + m };
    }
    var Z = (function () {
      function t() {
        var t = this;
        ((this.audioWorkletNode = null),
          (this.playbackAudioContext = null),
          (this.playbackAudioElement = null),
          (this.playbackMediaStreamDestination = null),
          (this.playbackOutputSink = null),
          (this.playbackOutputRoute = "none"),
          (this.isMediaElementOutputForced = !1),
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
          (this.$11 = 0),
          (this.$12 = new (o(
            "WAWebVoipBrowserMuteDetector",
          ).WAWebVoipBrowserMuteDetector)()),
          (this.$13 = null),
          (this.$14 = null),
          (this.$15 = !1),
          (this.$16 = !1),
          (this.$17 = null),
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
                  i = Q(r),
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
            var e = t.playbackSampleRate > 0 ? t.playbackSampleRate : F,
              n = t.$3 / t.$5,
              r = Math.round((t.$4 / A) * 100),
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
        (a.$18 = function (t) {
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
              i = null;
            if (a != null && typeof a.outputLatency == "number") {
              var l = Math.round(a.outputLatency * 1e3);
              ((i = l),
                (this.$7 += l),
                this.$9++,
                l > this.$8 && (this.$8 = l),
                this.$19(a, l),
                this.$20(a, l));
            }
            var s = this.playbackSampleRate > 0 ? this.playbackSampleRate : F,
              u = Math.round((n / s) * 1e3),
              d = Math.round((n / A) * 100);
          }
        }),
        (a.$19 = function (t, n) {
          var e = this.$10;
          if (!(e != null && Math.abs(n - e) < U) && !(this.$11 >= V)) {
            (this.$11++, (this.$10 = n));
            var r =
                typeof t.baseLatency == "number"
                  ? Math.round(t.baseLatency * 1e3)
                  : null,
              a = e == null ? "n/a" : e + "ms",
              i = this.$11 === V ? ", further changes suppressed" : "";
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] outputLatency changed: ",
                  " -> ",
                  "ms, baseLatencyMs=",
                  ", state=",
                  ", route=",
                  "",
                  "",
                ])),
              a,
              n,
              String(r),
              t.state,
              this.playbackOutputRoute,
              i,
            );
          }
        }),
        (a.$20 = function (t, n) {
          if (
            !(
              o("WAWebUA").UA.isFirefox ||
              o("WAWebUA").UA.isSafari ||
              typeof t.baseLatency != "number"
            )
          ) {
            if (this.$13 !== !0) {
              this.$21();
              return;
            }
            var e = t.baseLatency * 1e3,
              a = this.$12.observe({ outputLatencyMs: n, baseLatencyMs: e });
            (this.$22(),
              a != null &&
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] browser mute ",
                      ": outputLatency=",
                      "ms, floor=",
                      "ms, route=",
                      "",
                    ])),
                  a,
                  n,
                  Math.round(
                    o("WAWebVoipBrowserMuteDetector").getBrowserMuteFloorMs(e),
                  ),
                  this.playbackOutputRoute,
                ),
                a === "suspected"
                  ? this.$23()
                  : r("WAWebODS").incr(
                      "web.call.audio_playback.browser_mute_cleared",
                    ),
                o("WAWebVoipBrowserMuteState").reportBrowserMuteSuspected(
                  a === "suspected",
                )));
          }
        }),
        (a.$22 = function () {
          this.$15 ||
            !this.$12.hasEnoughSamplesToDetect() ||
            ((this.$15 = !0),
            r("WAWebODS").incr(
              "web.call.audio_playback.browser_mute_eligible",
            ));
        }),
        (a.$23 = function () {
          (r("WAWebODS").incr("web.call.audio_playback.browser_mute_suspected"),
            this.$16 ||
              ((this.$16 = !0),
              r("WAWebODS").incr(
                "web.call.audio_playback.browser_mute_suspected_session",
              )));
        }),
        (a.$21 = function () {
          var e = this;
          this.$14 == null &&
            (this.$14 = o(
              "WAWebMediaPermissionsUtils",
            ).watchMediaPermissionState("microphone", function (t) {
              return e.$24(t);
            }));
        }),
        (a.$24 = function (t) {
          var e = t === "granted";
          e !== this.$13 &&
            ((this.$13 = e),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] browser mute detection ",
                  ": microphone permission ",
                  "",
                ])),
              e ? "on" : "off",
              t,
            ));
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
              var d = !1;
              try {
                var m = o("WAWebAudioUtility").getCachedWasmModule();
                if (m == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] WASM module not initialized",
                  );
                var p = A,
                  y = p * Float32Array.BYTES_PER_ELEMENT + O;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(y)),
                  z(s));
                var C = this.ringBufferPtr;
                if (C == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
                  );
                var b = m.GROWABLE_HEAP_U8();
                (b.fill(0, C, C + y), yield this.$25(a, s), z(s));
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
                          (r === "diagnostics" && n.$18(t));
                    }
                  }),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] waiting for processor ready",
                      ])),
                  ),
                  yield this.waitForProcessorReady(),
                  z(s));
                var S = m.GROWABLE_HEAP_F32(),
                  R = S.buffer;
                (v.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: R,
                  heapBufferOffset: C,
                  bufferSize: p,
                }),
                  yield this.connectOutputRoute(a, s),
                  z(s),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] starting writer thread",
                      ])),
                  ));
                var L = m.startAudioWriterThread(C, p, l);
                if (!L)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread",
                  );
                ((t.$2 = c), (this.$17 = c));
                var E = new Uint32Array(m.GROWABLE_HEAP_U8().buffer, C, 2);
                (yield this.waitForStartupPrebufferIfNeeded(E, p, l, s),
                  z(s),
                  yield this.$26(v, s),
                  z(s),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                      ])),
                  ));
              } catch (e) {
                if (
                  j(e, s) ||
                  (o("WALogger").ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Failed to start playback: ",
                        "",
                      ])),
                    e,
                  ),
                  (d = !0),
                  yield this.stopAudioPlayback(c),
                  s())
                )
                  return;
                throw r("err")(
                  "voip: [AV:SharedBuffer:Playback] Failed to start playback",
                );
              } finally {
                s() && !d && (yield this.stopAudioPlayback(c));
              }
            }
          });
          function a(t) {
            return e.apply(this, arguments);
          }
          return a;
        })()),
        (a.$25 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (
                (this.workletPreloadPromise != null &&
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] awaiting worklet preload",
                      ])),
                  ),
                  yield this.workletPreloadPromise,
                  z(t)),
                !this.isWorkletPreloaded)
              ) {
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
                  z(t),
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
        (a.$26 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = this.playbackAudioElement;
              if (n != null) {
                try {
                  (yield n.play(),
                    r("WAWebODS").incr(
                      "web.call.audio_playback.media_element.play_ok",
                    ),
                    o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Playback] Audio element playback activated, volume=",
                          ", muted=",
                          ", paused=",
                          ", readyState=",
                          "",
                        ])),
                      n.volume,
                      String(n.muted),
                      String(n.paused),
                      n.readyState,
                    ));
                } catch (e) {
                  (r("WAWebODS").incr(
                    "web.call.audio_playback.media_element.play_failed",
                  ),
                    o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                          "",
                        ])),
                      e,
                    ),
                    z(t));
                  var a = yield this.$27(t);
                  a &&
                    r("WAWebODS").incr(
                      "web.call.audio_playback.media_element.play_failed_fallback_direct",
                    );
                }
                z(t);
              }
              e.port.postMessage({ type: "start" });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$27 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this.playbackAudioContext,
              n = this.audioWorkletNode,
              r = t != null ? K(t) : null;
            if (t == null || n == null || r == null)
              return (
                o("WALogger").WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] media element play rejected and no direct AudioContext route is available",
                    ])),
                ),
                !1
              );
            this.$28(n);
            var a = yield this.$29(t, r, n, e);
            return (
              a &&
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] media element play rejected, fell back to direct AudioContext output",
                    ])),
                ),
              a
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$28 = function (t) {
          var e = this.playbackAudioElement;
          e != null &&
            (e.pause(),
            (e.srcObject = null),
            (this.playbackAudioElement = null));
          var n = this.playbackMediaStreamDestination;
          (n != null &&
            (t.disconnect(),
            n.disconnect(),
            (this.playbackMediaStreamDestination = null)),
            (this.playbackOutputSink = null),
            (this.playbackOutputRoute = "none"),
            (this.isMediaElementOutputForced = !1));
        }),
        (a.$29 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              var a = yield o(
                "WAWebAudioDeviceManager",
              ).applyPreferredAudioOutputSink(
                t,
                "AV:SharedBuffer:Playback:AudioContext",
              );
              return r()
                ? !1
                : (n.connect(e.destination),
                  (this.playbackOutputSink = t),
                  (this.playbackOutputRoute = "direct_audio_context"),
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] connected worklet directly to AudioContext.destination, setSinkIdApplied=",
                        "",
                      ])),
                    String(a),
                  ),
                  !0);
            },
          );
          function t(t, n, r, o) {
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
              var n = K(e),
                r = this.audioWorkletNode,
                a = G(),
                i =
                  typeof e.baseLatency == "number"
                    ? Math.round(e.baseLatency * 1e3)
                    : null,
                l =
                  typeof e.outputLatency == "number"
                    ? Math.round(e.outputLatency * 1e3)
                    : null;
              if (
                (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] selecting output route: forceMediaElement=",
                      ", audioContextSetSinkId=",
                      ", requestedSampleRate=",
                      ", actualSampleRate=",
                      ", state=",
                      ", baseLatencyMs=",
                      ", outputLatencyMs=",
                      "",
                    ])),
                  String(a),
                  String(n != null),
                  this.playbackSampleRate,
                  e.sampleRate,
                  e.state,
                  String(i),
                  String(l),
                ),
                !a && n != null && r != null)
              ) {
                yield this.$29(e, n, r, t);
                return;
              }
              ((this.isMediaElementOutputForced = a && n != null),
                (this.playbackMediaStreamDestination =
                  e.createMediaStreamDestination()),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.connect(
                    this.playbackMediaStreamDestination,
                  ),
                (this.playbackAudioElement = new Audio()),
                this.playbackMediaStreamDestination != null &&
                  (this.playbackAudioElement.srcObject =
                    this.playbackMediaStreamDestination.stream));
              var s = this.playbackAudioElement,
                u = !1;
              if (s != null) {
                if (
                  ((u = yield o(
                    "WAWebAudioDeviceManager",
                  ).applyPreferredAudioOutputSink(
                    s,
                    "AV:SharedBuffer:Playback:AudioElement",
                  )),
                  t())
                )
                  return;
                ((this.playbackOutputSink = s),
                  (this.playbackOutputRoute = "media_element"));
              }
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] connected worklet through MediaStreamDestination audio element, setSinkIdApplied=",
                    "",
                  ])),
                String(u),
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for direct AudioContext output route",
                    ])),
                );
                return;
              }
              if (this.isMediaElementOutputForced) {
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for forced media element output route",
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
              for (var a = X(t, n), i = self.performance.now(), l = 0; ; ) {
                if (r()) return;
                var s = Atomics.load(e, 0),
                  u = Atomics.load(e, 1);
                if (((l = Y(s, u, t)), l >= a)) break;
                var c = self.performance.now() - i;
                if (c >= W) break;
                var d = Math.min(q, Math.max(0, W - c));
                if ((yield o("WAPromiseDelays").delayMs(d), r())) return;
              }
              var m = self.performance.now() - i;
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
              var n = e != null ? e : this.$17,
                r = n == null ? t.$2 == null : t.$2 === n,
                a = o("WAWebAudioUtility").getCachedWasmModule();
              if (r && a != null)
                try {
                  (a.isAudioWriterThreadRunning() && a.stopAudioWriterThread(),
                    t.$2 === n && (t.$2 = null),
                    this.$17 === n && (this.$17 = null));
                } catch (e) {
                  o("WALogger").WARN(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
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
                (this.isMediaElementOutputForced = !1),
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
                (this.$9 = 0),
                (this.$10 = null),
                (this.$11 = 0));
            } catch (e) {
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Cleanup error: ",
                    "",
                  ])),
                e,
              );
            } finally {
              this.$30();
            }
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })()),
        (a.$30 = function () {
          var e;
          ((e = this.$14) == null || e.call(this),
            (this.$14 = null),
            (this.$13 = null),
            (this.$15 = !1),
            (this.$16 = !1));
          var t = this.$12.getFloorSampleCount();
          (t > 0 &&
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] browser mute floor seconds this session: ",
                  "",
                ])),
              t,
            ),
            this.$12.isSuspected() &&
              o("WAWebVoipBrowserMuteState").reportBrowserMuteSuspected(!1),
            this.$12.reset());
        }),
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
              s = Y(i, l, A),
              u = J(e, n, s);
            return Math.max(0, Math.round((u.estimatedOutputLagMs * n) / 1e3));
          } catch (e) {
            return (
              this.hasLoggedOutputLagEstimationFailure ||
                ((this.hasLoggedOutputLagEstimationFailure = !0),
                o("WALogger").WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
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
    ((Z.$1 = 0),
      (Z.$2 = null),
      (l.WAWebVoipAudioPlaybackSharedBufferWorklet = Z));
  },
  98,
);
