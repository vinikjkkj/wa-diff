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
    "WAWebVoipCallAudioUnlock",
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
      A,
      F = 8192,
      O = 16e3,
      B = 8,
      W = 7,
      q = 200,
      U = 10,
      V = 2,
      H = 30,
      G = r("err")("Audio playback start cancelled");
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_audio_playback_use_media_element_output",
      );
    }
    function j(e) {
      if (e()) throw G;
    }
    function K(e, t) {
      return e === G || t();
    }
    function Q(e) {
      var t = e;
      return typeof t.setSinkId == "function" ? t : null;
    }
    function X(e) {
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
    function Y(e, t) {
      var n = Math.ceil((e * W) / 100);
      if (t <= 0) return n;
      var r = Math.ceil(n / t) * t,
        o = e > t ? e - t : e;
      return Math.min(r, o);
    }
    function J(e, t, n) {
      return (e - t + n) % n;
    }
    function Z(e, t, n) {
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
    var ee = (function () {
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
                  i = X(r),
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
            var e = t.playbackSampleRate > 0 ? t.playbackSampleRate : O,
              n = t.$3 / t.$5,
              r = Math.round((t.$4 / F) * 100),
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
            var s = this.playbackSampleRate > 0 ? this.playbackSampleRate : O,
              u = Math.round((n / s) * 1e3),
              d = Math.round((n / F) * 100);
          }
        }),
        (a.$19 = function (t, n) {
          var e = this.$10;
          if (!(e != null && Math.abs(n - e) < V) && !(this.$11 >= H)) {
            (this.$11++, (this.$10 = n));
            var r =
                typeof t.baseLatency == "number"
                  ? Math.round(t.baseLatency * 1e3)
                  : null,
              a = e == null ? "n/a" : e + "ms",
              i = this.$11 === H ? ", further changes suppressed" : "";
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
            this.$22();
            var e = t.baseLatency * 1e3,
              a = this.$12.observe({ outputLatencyMs: n, baseLatencyMs: e });
            (this.$23(),
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
                  ? this.$24()
                  : r("WAWebODS").incr(
                      "web.call.audio_playback.browser_mute_cleared",
                    ),
                o("WAWebVoipBrowserMuteState").reportBrowserMuteSuspected(
                  a === "suspected",
                )));
          }
        }),
        (a.$22 = function () {
          this.$12.getSampleCount() > 0 ||
            !o("WAWebVoipBrowserMuteState").wasLastPlaybackBrowserMuted() ||
            (this.$12.expectMute(),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] browser mute expected: the last playback stayed at the floor",
                ])),
            ),
            r("WAWebODS").incr(
              "web.call.audio_playback.browser_mute_carryover_session",
            ));
        }),
        (a.$23 = function () {
          this.$15 ||
            !this.$12.hasEnoughSamplesToDetect() ||
            ((this.$15 = !0),
            r("WAWebODS").incr(
              "web.call.audio_playback.browser_mute_eligible",
            ));
        }),
        (a.$24 = function () {
          (r("WAWebODS").incr("web.call.audio_playback.browser_mute_suspected"),
            this.$12.isMuteExpected() &&
              r("WAWebODS").incr(
                "web.call.audio_playback.browser_mute_carryover_suspected",
              ),
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
              return e.$25(t);
            }));
        }),
        (a.$25 = function (t) {
          var e = t === "granted";
          e !== this.$13 &&
            ((this.$13 = e),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                var p = F,
                  _ = p * Float32Array.BYTES_PER_ELEMENT + B;
                ((this.ringBufferPtr =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(_)),
                  j(s));
                var C = this.ringBufferPtr;
                if (C == null)
                  throw r("err")(
                    "voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer",
                  );
                var b = m.GROWABLE_HEAP_U8();
                (b.fill(0, C, C + _), yield this.$26(a, s), j(s));
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] waiting for processor ready",
                      ])),
                  ),
                  yield this.waitForProcessorReady(),
                  j(s));
                var S = m.GROWABLE_HEAP_F32(),
                  R = S.buffer;
                (v.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: R,
                  heapBufferOffset: C,
                  bufferSize: p,
                }),
                  yield this.connectOutputRoute(a, s),
                  j(s),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  j(s),
                  yield this.$27(v, s),
                  j(s),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Audio playback started successfully",
                      ])),
                  ));
              } catch (e) {
                if (
                  K(e, s) ||
                  (o("WALogger").ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
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
        (a.$26 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (
                (this.workletPreloadPromise != null &&
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] awaiting worklet preload",
                      ])),
                  ),
                  yield this.workletPreloadPromise,
                  j(t)),
                !this.isWorkletPreloaded)
              ) {
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
                  j(t),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
        (a.$27 = (function () {
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
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                          "",
                        ])),
                      e,
                    ),
                    j(t));
                  var a = yield this.$28(t);
                  a &&
                    r("WAWebODS").incr(
                      "web.call.audio_playback.media_element.play_failed_fallback_direct",
                    );
                }
                j(t);
              }
              e.port.postMessage({ type: "start" });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$28 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this.playbackAudioContext,
              n = this.audioWorkletNode,
              r = t != null ? Q(t) : null;
            if (t == null || n == null || r == null)
              return (
                o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] media element play rejected and no direct AudioContext route is available",
                    ])),
                ),
                !1
              );
            this.$29(n);
            var a = yield this.$30({
              audioContext: t,
              audioContextOutputSink: r,
              audioWorkletNode: n,
              isStartCancelled: e,
            });
            return (
              a &&
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
        (a.$29 = function (t) {
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
        (a.$30 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.audioContext,
              n = e.audioContextOutputSink,
              r = e.audioWorkletNode,
              a = e.isStartCancelled,
              i = yield o(
                "WAWebAudioDeviceManager",
              ).applyPreferredAudioOutputSink(
                n,
                "AV:SharedBuffer:Playback:AudioContext",
              );
            return a()
              ? !1
              : (r.connect(t.destination),
                (this.playbackOutputSink = n),
                (this.playbackOutputRoute = "direct_audio_context"),
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] connected worklet directly to AudioContext.destination, setSinkIdApplied=",
                      "",
                    ])),
                  String(i),
                ),
                !0);
          });
          function t(t) {
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
              var n = Q(e),
                r = this.audioWorkletNode,
                a = z(),
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
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
                yield this.$30({
                  audioContext: e,
                  audioContextOutputSink: n,
                  audioWorkletNode: r,
                  isStartCancelled: t,
                });
                return;
              }
              ((this.isMediaElementOutputForced = a && n != null),
                (this.playbackMediaStreamDestination =
                  e.createMediaStreamDestination()),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.connect(
                    this.playbackMediaStreamDestination,
                  ),
                (this.playbackAudioElement = o(
                  "WAWebVoipCallAudioUnlock",
                ).createCallPlaybackElement()),
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
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for direct AudioContext output route",
                    ])),
                );
                return;
              }
              if (this.isMediaElementOutputForced) {
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
              for (var a = Y(t, n), i = self.performance.now(), l = 0; ; ) {
                if (r()) return;
                var s = Atomics.load(e, 0),
                  u = Atomics.load(e, 1);
                if (((l = J(s, u, t)), l >= a)) break;
                var c = self.performance.now() - i;
                if (c >= q) break;
                var d = Math.min(U, Math.max(0, q - c));
                if ((yield o("WAPromiseDelays").delayMs(d), r())) return;
              }
              var m = self.performance.now() - i;
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
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
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Cleanup error: ",
                    "",
                  ])),
                e,
              );
            } finally {
              this.$31();
            }
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })()),
        (a.$31 = function () {
          var e;
          ((e = this.$14) == null || e.call(this),
            (this.$14 = null),
            (this.$13 = null),
            (this.$15 = !1),
            (this.$16 = !1));
          var t = this.$12.getFloorSampleCount();
          (t > 0 &&
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Playback] browser mute floor seconds this session: ",
                  "",
                ])),
              t,
            ),
            this.$12.isSuspected() &&
              o("WAWebVoipBrowserMuteState").reportBrowserMuteSuspected(!1));
          var n = this.$12.getMuteEvidence();
          (n !== "inconclusive" &&
            o("WAWebVoipBrowserMuteState").recordPlaybackBrowserMuted(
              n === "muted",
            ),
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
              s = J(i, l, F),
              u = Z(e, n, s);
            return Math.max(0, Math.round((u.estimatedOutputLagMs * n) / 1e3));
          } catch (e) {
            return (
              this.hasLoggedOutputLagEstimationFailure ||
                ((this.hasLoggedOutputLagEstimationFailure = !0),
                o("WALogger").WARN(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
    ((ee.$1 = 0),
      (ee.$2 = null),
      (l.WAWebVoipAudioPlaybackSharedBufferWorklet = ee));
  },
  98,
);
