__d(
  "WAWebVoipAudioCaptureAndPlayback",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBoolFunc",
    "WAWebUA",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipAudioContextResume",
    "WAWebVoipAudioPlaybackBase",
    "WAWebVoipAudioPlaybackState",
    "WAWebVoipAvDriverInitQpl",
    "WAWebVoipOperationQueue",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipSilentCapture",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isWAWebFeatureDetectionAndroidTablet",
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
      F,
      O,
      B,
      W = null,
      q = 0;
    function U() {
      return (q++, q);
    }
    var V = null,
      H = !1,
      G = 0,
      z = new (o("WAResolvable").Resolvable)();
    function j() {
      return ((H = !1), G++, (z = new (o("WAResolvable").Resolvable)()), G);
    }
    function K(e, t) {
      (t === void 0 && (t = G), t === G && ((H = e), z.resolve(e)));
    }
    function Q() {
      return (z.resolve(!1), j());
    }
    function X(e) {
      e === G && (z.resolve(!1), j());
    }
    function Y() {
      var e, t;
      return (e =
        (t = V) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return H
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                z.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        Z.apply(this, arguments)
      );
    }
    var ee = 15e3,
      te = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      ne = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      re = !1;
    function oe() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.targetWindow;
          if (W == null) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] requestAudioReacquisition: no capture yet, skipping",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] requestAudioReacquisition: ",
                "",
              ])),
            t,
          );
          try {
            var r = yield ze(t, n, !0, !0);
            r
              ? o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition completed",
                    ])),
                )
              : o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition failed",
                    ])),
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] audio re-acquisition error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: audio re-acquisition failed");
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le() {
      re ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          ae,
        ),
        (re = !0));
    }
    function se() {
      var e,
        t,
        n,
        r = (e = W) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    function ue() {
      var e;
      return ((e = W) == null ? void 0 : e.hasLiveAudioTrack()) === !0;
    }
    function ce() {
      var e;
      return ((e = W) == null ? void 0 : e.silentSource) != null;
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = oe(),
              r = t ? U() : q;
            (le(),
              te.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(t && r !== q)) {
                    W == null &&
                      (W = new (o(
                        "WAWebVoipAudioCaptureBase",
                      ).WAWebVoipAudioCaptureBase)(Ie));
                    var n = W;
                    Me = null;
                    var a = o(
                      "WAWebVoipAvDriverInitQpl",
                    ).startVoipAvDriverInitQpl();
                    o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
                      a,
                      o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                        .CAPTURE_DRIVER_INIT_START,
                    );
                    try {
                      (yield n.initCaptureDriver(e),
                        o(
                          "WAWebVoipAvDriverInitQpl",
                        ).voipAvDriverInitQplAddPoint(
                          a,
                          o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                            .CAPTURE_DRIVER_INIT_END,
                        ),
                        o(
                          "WAWebVoipAvDriverInitQpl",
                        ).endVoipAvDriverInitQplSuccess(a));
                    } catch (e) {
                      throw (
                        o(
                          "WAWebVoipAvDriverInitQpl",
                        ).endVoipAvDriverInitQplFail(a, "capture_init_failed"),
                        e
                      );
                    }
                  }
                }),
                "initCaptureDriver",
              ));
          }
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = oe(),
              r = q;
            te.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                if (!(t && r !== q)) {
                  if (W == null) {
                    o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: capture instance is null");
                    return;
                  }
                  if (
                    (yield W.startCapture(
                      t
                        ? function () {
                            return r !== q;
                          }
                        : void 0,
                    ),
                    !(t && r !== q))
                  ) {
                    var n = (e = V) == null ? void 0 : e.playbackAudioContext;
                    if (n != null && n.state === "suspended")
                      try {
                        if (
                          (yield o(
                            "WAWebVoipAudioContextResume",
                          ).resumeAudioContextLoggingDelays(
                            n,
                            "startCaptureJS",
                          ),
                          t && r !== q)
                        )
                          return;
                        (ye(n),
                          o("WALogger").LOG(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                              ])),
                          ));
                      } catch (e) {
                        if (t && r !== q) return;
                        o("WALogger").WARN(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                              "",
                            ])),
                          e,
                        );
                      }
                    else n != null && n.state === "running" && he() && Ce(n);
                  }
                }
              }),
              "startCapture",
            );
          }
        })),
        _e.apply(this, arguments)
      );
    }
    var fe = 2e3,
      ge = new WeakSet();
    function he() {
      return (
        o("WAWebUA").UA.isBlink &&
        o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidOS() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_playback_restart_after_mic_mode",
        ) === 1
      );
    }
    function ye(e) {
      ue() && ge.add(e);
    }
    function Ce(e) {
      ne.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          be(e) && (yield ve(e)) && ge.add(e);
        }),
        "restartPlaybackOutput",
      );
    }
    function be(e) {
      var t = V;
      return (
        t != null &&
        t.playbackAudioContext === e &&
        t.getAudioElement() == null &&
        e.state === "running" &&
        !ge.has(e) &&
        ue()
      );
    }
    function ve(e) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (yield Re(e.suspend(), "suspend"))
            ? (yield Re(e.resume(), "resume"))
              ? (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] recreated playback output after microphone start",
                    ])),
                ),
                !0)
              : ((t = V) == null ? void 0 : t.playbackAudioContext) !== e
                ? !1
                : (yield Re(e.resume(), "resume"))
                  ? (o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:restartPlaybackOutput] playback output resumed on the second attempt",
                        ])),
                    ),
                    !0)
                  : (Ee(e),
                    o("WALogger")
                      .ERROR(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:restartPlaybackOutput] playback output did not resume, state=",
                            "",
                          ])),
                        e.state,
                      )
                      .sendLogs("voip: playback output restart did not resume"),
                    !1)
            : (Ee(e),
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] playback output did not suspend, state=",
                      "",
                    ])),
                  e.state,
                )
                .sendLogs("voip: playback output restart did not suspend"),
              !1);
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e, t) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.then(o("WAWebBoolFunc").returnTrue),
              fe,
              function () {
                return (
                  o("WALogger").WARN(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:restartPlaybackOutput] playback output ",
                        " timed out",
                      ])),
                    t,
                  ),
                  !1
                );
              },
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackOutput] playback output ",
                    " failed: ",
                    "",
                  ])),
                t,
                e,
              ),
              !1
            );
          }
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(t) {
      t.resume().catch(function (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:restartPlaybackOutput] background resume failed: ",
              "",
            ])),
          t,
        );
      });
    }
    var ke = 300;
    function Ie() {
      o("WAWebUA").UA.isWebkit &&
        ne.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = (e = V) == null ? void 0 : e.getAudioElement();
            if (!(t == null || t.paused || !xe(t) || !$e())) {
              if ((t.pause(), (yield Pe(t)) || (yield Pe(t)))) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackElement] restarted call audio once the microphone delivered audio",
                    ])),
                );
                return;
              }
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackElement] call audio did not resume",
                    ])),
                )
                .sendLogs("voip-playback-element-restart-did-not-resume"),
                De(t));
            }
          }),
          "restartPlaybackElement",
        );
    }
    var Te = null;
    function De(e) {
      Te == null || Te();
      var t = e.ownerDocument,
        n = function () {
          (Te == null || Te(),
            e.paused &&
              e.play().catch(function (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackElement] play on the next gesture failed: ",
                      "",
                    ])),
                  e,
                );
              }));
        };
      (t.addEventListener("pointerdown", n, !0),
        t.addEventListener("keydown", n, !0),
        (Te = function () {
          (t.removeEventListener("pointerdown", n, !0),
            t.removeEventListener("keydown", n, !0),
            (Te = null));
        }));
    }
    function xe(e) {
      return e.sinkId == null || e.sinkId === "" || e.sinkId === "default";
    }
    function $e() {
      var e,
        t =
          (e = W) == null || (e = e.audioStream) == null
            ? void 0
            : e.getAudioTracks()[0];
      return (
        t instanceof MediaStreamTrack && t.readyState === "live" && !t.muted
      );
    }
    function Pe(e) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAPromiseDelays").delayMs(ke);
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.play().then(o("WAWebBoolFunc").returnTrue),
              fe,
              function () {
                return !e.paused;
              },
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackElement] play failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        Ne.apply(this, arguments)
      );
    }
    var Me = null;
    function we() {
      if (W != null) return W.consumeAudioCaptureMetrics();
      var e = Me;
      return ((Me = null), e);
    }
    function Ae(e, t) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (oe() && U(),
            te.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = W;
                if (e == null) {
                  o("WALogger").WARN(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                      ])),
                  );
                  return;
                }
                ((Me = e.consumeAudioCaptureMetrics()),
                  yield e.stopCapture(t == null ? void 0 : t.nativeStopped),
                  (W = null));
              }),
              "stopCapture",
            ));
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Q();
          ne.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === G) {
                V == null &&
                  (V = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)());
                var n = V;
                Ue = null;
                var r = o(
                  "WAWebVoipAvDriverInitQpl",
                ).startVoipAvDriverInitQpl();
                o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
                  r,
                  o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                    .PLAYBACK_DRIVER_INIT_START,
                );
                try {
                  (yield n.initPlaybackDriver(e),
                    o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
                      r,
                      o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                        .PLAYBACK_DRIVER_INIT_END,
                    ),
                    o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(
                      r,
                    ));
                } catch (e) {
                  throw (
                    o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplFail(
                      r,
                      "playback_init_failed",
                    ),
                    e
                  );
                }
                t === G &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  );
              }
            }),
            "initPlaybackDriver",
          );
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = oe(),
            t = G;
          ne.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === G) {
                if (V == null) {
                  (K(!1, t),
                    o("WALogger")
                      .ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: playback instance is null"));
                  return;
                }
                try {
                  (yield V.startPlayback(
                    e
                      ? function () {
                          return t !== G;
                        }
                      : void 0,
                  ),
                    K(!0, t));
                } catch (e) {
                  throw (K(!1, t), e);
                }
              }
            }),
            "startPlayback",
          );
        })),
        qe.apply(this, arguments)
      );
    }
    var Ue = null;
    function Ve() {
      if (V != null) return V.consumeAudioPlaybackMetrics();
      var e = Ue;
      return ((Ue = null), e);
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = oe(),
            r = t ? null : G;
          (t && Q(),
            ne.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = V;
                if (t == null) {
                  (r != null && X(r),
                    o("WALogger").WARN(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                        ])),
                    ));
                  return;
                }
                Ue = t.consumeAudioPlaybackMetrics();
                try {
                  yield t.stopPlayback(e);
                } finally {
                  (r != null && X(r),
                    (V = null),
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                      null,
                    ),
                    Te == null || Te());
                }
              }),
              "stopPlayback",
            ));
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t, n, r) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = new (o("WAResolvable").Resolvable)();
            return (
              te.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var n = W;
                    if (n == null) {
                      (o("WALogger").ERROR(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        i.resolve(!1));
                      return;
                    }
                    if (Ke(n, e, r, a)) {
                      i.resolve(!0);
                      return;
                    }
                    var l = yield n.switchDevice(e, t, r, a);
                    i.resolve(l);
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioInputDevice] failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("voip: switchAudioInputDevice failed"),
                      i.resolve(!1));
                  }
                }),
                "switchInputDevice",
              ),
              i.promise
            );
          },
        )),
        je.apply(this, arguments)
      );
    }
    function Ke(e, t, n, r) {
      return (
        r === !0 &&
        n !== !0 &&
        o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(e, t)
      );
    }
    function Qe(e) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isRecoveryCurrent,
            a = e.targetWindow,
            i = W;
          if (i == null)
            return (
              o("WALogger").WARN(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] current capture is unavailable",
                  ])),
              ),
              !1
            );
          var l = new (o("WAResolvable").Resolvable)();
          return (
            te.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (W !== i || !t()) {
                    l.resolve(!1);
                    return;
                  }
                  if (yield Ye(i)) {
                    l.resolve(W === i && t());
                    return;
                  }
                  var e = o(
                    "WAWebAudioDeviceManager",
                  ).getCurrentSelectedAudioDevice();
                  if (e == null) {
                    (o("WALogger").WARN(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:reacquireAudioInputDevice] current device is unavailable",
                        ])),
                    ),
                      l.resolve(!1));
                    return;
                  }
                  var n = yield o("WAPromiseDelays").withTimeout(
                    i.switchDevice(e, a, void 0, !0),
                    ee,
                    o("WAWebBoolFunc").returnFalse,
                  );
                  l.resolve(W === i && t() && n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:reacquireAudioInputDevice] failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-mic-reacquire-failed"),
                    l.resolve(!1));
                }
              }),
              "reacquireInputDevice",
            ),
            l.promise
          );
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye(e) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.automaticDeviceChangePromise;
          return t == null ||
            (yield t.catch(o("WAWebBoolFunc").returnFalse),
            !e.hasLiveAudioTrack())
            ? !1
            : (o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] an automatic switch already provided a live microphone",
                  ])),
              ),
              !0);
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e, t) {
      var n = e
        .then(function (e) {
          return e == null ? !1 : et(e, t);
        })
        .catch(o("WAWebBoolFunc").returnFalse);
      return (
        o("WAWebVoipSilentCapture").holdSilenceSwitchesUntil(n, t),
        n.then(function (e) {
          if (!e && t()) {
            var n;
            o("WAWebVoipSilentCapture").retrySwitchFromSilence(
              (n = W) == null ? void 0 : n.silentSource,
            );
          }
        }),
        n
      );
    }
    function et(e, t) {
      var a = new (o("WAResolvable").Resolvable)();
      return (
        te.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = !1;
            try {
              n = yield tt(e, t);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:adoptMicrophoneStream] failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-adopt-granted-microphone-failed");
            }
            (n ||
              e.getTracks().forEach(function (e) {
                e.stop();
              }),
              a.resolve(n));
          }),
          "adoptMicrophoneStream",
        ),
        a.promise
      );
    }
    function tt(e, t) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = W,
            a =
              (n = e.getAudioTracks()[0]) == null
                ? void 0
                : n.getSettings().deviceId;
          return (r == null ? void 0 : r.silentSource) == null ||
            a == null ||
            !t()
            ? (o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] capture isn't waiting for a microphone, releasing the granted one",
                  ])),
              ),
              !1)
            : (o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] adopting the granted microphone ",
                    "",
                  ])),
                a.slice(0, 8),
              ),
              o("WAWebVoipSilentCapture").markGrantedMicrophoneStream(e, a),
              r.switchDevice(a, void 0, void 0, !0, e));
        })),
        nt.apply(this, arguments)
      );
    }
    function rt(e) {
      return ot.apply(this, arguments);
    }
    function ot() {
      return (
        (ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            ne.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (V == null) {
                    (o("WALogger").WARN(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchAudioOutputDevice] playback instance is null, saving preference only",
                        ])),
                    ),
                      o(
                        "WAWebAudioDeviceManager",
                      ).saveAudioOutputDevicePreference(
                        e,
                        "AV:switchAudioOutputDevice",
                      ),
                      t.resolve(!1));
                    return;
                  }
                  var n = yield V.switchOutputDevice(e);
                  t.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchAudioOutputDevice] failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: switchAudioOutputDevice failed"),
                    t.resolve(!1));
                }
              }),
              "switchOutputDevice",
            ),
            t.promise
          );
        })),
        ot.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = Y),
      (l.waitForPlaybackStart = J),
      (l.getCaptureParams = se),
      (l.isCurrentAudioInputTrackLive = ue),
      (l.isCurrentAudioInputSilent = ce),
      (l.initCaptureDriverJS = de),
      (l.startCaptureJS = pe),
      (l.consumeAudioCaptureMetrics = we),
      (l.stopCaptureJS = Ae),
      (l.initPlaybackDriverJS = Oe),
      (l.startPlaybackJS = We),
      (l.consumeAudioPlaybackMetrics = Ve),
      (l.stopPlaybackJS = He),
      (l.switchAudioInputDevice = ze),
      (l.reacquireCurrentAudioInputDevice = Qe),
      (l.adoptGrantedMicrophoneStream = Ze),
      (l.switchAudioOutputDevice = rt));
  },
  98,
);
