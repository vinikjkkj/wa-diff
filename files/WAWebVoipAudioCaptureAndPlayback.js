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
      B = null,
      W = 0;
    function q() {
      return (W++, W);
    }
    var U = null,
      V = !1,
      H = 0,
      G = new (o("WAResolvable").Resolvable)();
    function z() {
      return ((V = !1), H++, (G = new (o("WAResolvable").Resolvable)()), H);
    }
    function j(e, t) {
      (t === void 0 && (t = H), t === H && ((V = e), G.resolve(e)));
    }
    function K() {
      return (G.resolve(!1), z());
    }
    function Q(e) {
      e === H && (G.resolve(!1), z());
    }
    function X() {
      var e, t;
      return (e =
        (t = U) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return V
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                G.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        J.apply(this, arguments)
      );
    }
    var Z = 15e3,
      ee = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      te = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      ne = !1;
    function re() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.targetWindow;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] requestAudioReacquisition: ",
                "",
              ])),
            t,
          );
          try {
            var r = yield Ge(t, n, !0, !0);
            r
              ? o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition completed",
                    ])),
                )
              : o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition failed",
                    ])),
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] audio re-acquisition error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: audio re-acquisition failed");
          }
        })),
        ae.apply(this, arguments)
      );
    }
    function ie() {
      ne ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          oe,
        ),
        (ne = !0));
    }
    function le() {
      var e,
        t,
        n,
        r = (e = B) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    function se() {
      var e;
      return ((e = B) == null ? void 0 : e.hasLiveAudioTrack()) === !0;
    }
    function ue() {
      var e;
      return ((e = B) == null ? void 0 : e.silentSource) != null;
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = re(),
              r = t ? q() : W;
            (ie(),
              ee.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(t && r !== W)) {
                    B == null &&
                      (B = new (o(
                        "WAWebVoipAudioCaptureBase",
                      ).WAWebVoipAudioCaptureBase)(ke));
                    var n = B;
                    Ne = null;
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
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = re(),
              r = W;
            ee.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                if (!(t && r !== W)) {
                  if (B == null) {
                    o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: capture instance is null");
                    return;
                  }
                  if (
                    (yield B.startCapture(
                      t
                        ? function () {
                            return r !== W;
                          }
                        : void 0,
                    ),
                    !(t && r !== W))
                  ) {
                    var n = (e = U) == null ? void 0 : e.playbackAudioContext;
                    if (n != null && n.state === "suspended")
                      try {
                        if ((yield n.resume(), t && r !== W)) return;
                        (he(n),
                          o("WALogger").LOG(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                              ])),
                          ));
                      } catch (e) {
                        if (t && r !== W) return;
                        o("WALogger").WARN(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                              "",
                            ])),
                          e,
                        );
                      }
                    else n != null && n.state === "running" && ge() && ye(n);
                  }
                }
              }),
              "startCapture",
            );
          }
        })),
        pe.apply(this, arguments)
      );
    }
    var _e = 2e3,
      fe = new WeakSet();
    function ge() {
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
    function he(e) {
      se() && fe.add(e);
    }
    function ye(e) {
      te.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          Ce(e) && (yield be(e)) && fe.add(e);
        }),
        "restartPlaybackOutput",
      );
    }
    function Ce(e) {
      var t = U;
      return (
        t != null &&
        t.playbackAudioContext === e &&
        t.getAudioElement() == null &&
        e.state === "running" &&
        !fe.has(e) &&
        se()
      );
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (yield Se(e.suspend(), "suspend"))
            ? (yield Se(e.resume(), "resume"))
              ? (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] recreated playback output after microphone start",
                    ])),
                ),
                !0)
              : ((t = U) == null ? void 0 : t.playbackAudioContext) !== e
                ? !1
                : (yield Se(e.resume(), "resume"))
                  ? (o("WALogger").WARN(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:restartPlaybackOutput] playback output resumed on the second attempt",
                        ])),
                    ),
                    !0)
                  : (Le(e),
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:restartPlaybackOutput] playback output did not resume, state=",
                            "",
                          ])),
                        e.state,
                      )
                      .sendLogs("voip: playback output restart did not resume"),
                    !1)
            : (Le(e),
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] playback output did not suspend, state=",
                      "",
                    ])),
                  e.state,
                )
                .sendLogs("voip: playback output restart did not suspend"),
              !1);
        })),
        ve.apply(this, arguments)
      );
    }
    function Se(e, t) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.then(o("WAWebBoolFunc").returnTrue),
              _e,
              function () {
                return (
                  o("WALogger").WARN(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
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
        Re.apply(this, arguments)
      );
    }
    function Le(t) {
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
    var Ee = 300;
    function ke() {
      o("WAWebUA").UA.isWebkit &&
        te.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = (e = U) == null ? void 0 : e.getAudioElement();
            if (!(t == null || t.paused || !De(t) || !xe())) {
              if ((t.pause(), (yield $e(t)) || (yield $e(t)))) {
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
                Te(t));
            }
          }),
          "restartPlaybackElement",
        );
    }
    var Ie = null;
    function Te(e) {
      Ie == null || Ie();
      var t = e.ownerDocument,
        n = function () {
          (Ie == null || Ie(),
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
        (Ie = function () {
          (t.removeEventListener("pointerdown", n, !0),
            t.removeEventListener("keydown", n, !0),
            (Ie = null));
        }));
    }
    function De(e) {
      return e.sinkId == null || e.sinkId === "" || e.sinkId === "default";
    }
    function xe() {
      var e,
        t =
          (e = B) == null || (e = e.audioStream) == null
            ? void 0
            : e.getAudioTracks()[0];
      return (
        t instanceof MediaStreamTrack && t.readyState === "live" && !t.muted
      );
    }
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAPromiseDelays").delayMs(Ee);
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.play().then(o("WAWebBoolFunc").returnTrue),
              _e,
              function () {
                return !e.paused;
              },
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackElement] play failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        Pe.apply(this, arguments)
      );
    }
    var Ne = null;
    function Me() {
      if (B != null) return B.consumeAudioCaptureMetrics();
      var e = Ne;
      return ((Ne = null), e);
    }
    function we(e) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (re() && q(),
            ee.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = B;
                if (e == null) {
                  o("WALogger").WARN(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                      ])),
                  );
                  return;
                }
                ((Ne = e.consumeAudioCaptureMetrics()),
                  yield e.stopCapture(),
                  (B = null));
              }),
              "stopCapture",
            ));
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = K();
          te.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === H) {
                U == null &&
                  (U = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)());
                var n = U;
                qe = null;
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
                t === H &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  );
              }
            }),
            "initPlaybackDriver",
          );
        })),
        Oe.apply(this, arguments)
      );
    }
    function Be() {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = re(),
            t = H;
          te.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === H) {
                if (U == null) {
                  (j(!1, t),
                    o("WALogger")
                      .ERROR(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: playback instance is null"));
                  return;
                }
                try {
                  (yield U.startPlayback(
                    e
                      ? function () {
                          return t !== H;
                        }
                      : void 0,
                  ),
                    j(!0, t));
                } catch (e) {
                  throw (j(!1, t), e);
                }
              }
            }),
            "startPlayback",
          );
        })),
        We.apply(this, arguments)
      );
    }
    var qe = null;
    function Ue() {
      if (U != null) return U.consumeAudioPlaybackMetrics();
      var e = qe;
      return ((qe = null), e);
    }
    function Ve() {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = re(),
            t = e ? null : H;
          (e && K(),
            te.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = U;
                if (e == null) {
                  (t != null && Q(t),
                    o("WALogger").WARN(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                        ])),
                    ));
                  return;
                }
                qe = e.consumeAudioPlaybackMetrics();
                try {
                  yield e.stopPlayback();
                } finally {
                  (t != null && Q(t),
                    (U = null),
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                      null,
                    ),
                    Ie == null || Ie());
                }
              }),
              "stopPlayback",
            ));
        })),
        He.apply(this, arguments)
      );
    }
    function Ge(e, t, n, r) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = new (o("WAResolvable").Resolvable)();
            return (
              ee.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var n = B;
                    if (n == null) {
                      (o("WALogger").ERROR(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        i.resolve(!1));
                      return;
                    }
                    if (je(n, e, r, a)) {
                      i.resolve(!0);
                      return;
                    }
                    var l = yield n.switchDevice(e, t, r, a);
                    i.resolve(l);
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
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
        ze.apply(this, arguments)
      );
    }
    function je(e, t, n, r) {
      return (
        r === !0 &&
        n !== !0 &&
        o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(e, t)
      );
    }
    function Ke(e) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isRecoveryCurrent,
            a = e.targetWindow,
            i = B;
          if (i == null)
            return (
              o("WALogger").WARN(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] current capture is unavailable",
                  ])),
              ),
              !1
            );
          var l = new (o("WAResolvable").Resolvable)();
          return (
            ee.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (B !== i || !t()) {
                    l.resolve(!1);
                    return;
                  }
                  if (yield Xe(i)) {
                    l.resolve(B === i && t());
                    return;
                  }
                  var e = o(
                    "WAWebAudioDeviceManager",
                  ).getCurrentSelectedAudioDevice();
                  if (e == null) {
                    (o("WALogger").WARN(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:reacquireAudioInputDevice] current device is unavailable",
                        ])),
                    ),
                      l.resolve(!1));
                    return;
                  }
                  var n = yield o("WAPromiseDelays").withTimeout(
                    i.switchDevice(e, a, void 0, !0),
                    Z,
                    o("WAWebBoolFunc").returnFalse,
                  );
                  l.resolve(B === i && t() && n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
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
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.automaticDeviceChangePromise;
          return t == null ||
            (yield t.catch(o("WAWebBoolFunc").returnFalse),
            !e.hasLiveAudioTrack())
            ? !1
            : (o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] an automatic switch already provided a live microphone",
                  ])),
              ),
              !0);
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je(e, t) {
      var n = e
        .then(function (e) {
          return e == null ? !1 : Ze(e, t);
        })
        .catch(o("WAWebBoolFunc").returnFalse);
      return (
        o("WAWebVoipSilentCapture").holdSilenceSwitchesUntil(n, t),
        n.then(function (e) {
          if (!e && t()) {
            var n;
            o("WAWebVoipSilentCapture").retrySwitchFromSilence(
              (n = B) == null ? void 0 : n.silentSource,
            );
          }
        }),
        n
      );
    }
    function Ze(e, t) {
      var a = new (o("WAResolvable").Resolvable)();
      return (
        ee.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = !1;
            try {
              n = yield et(e, t);
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
    function et(e, t) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = B,
            a =
              (n = e.getAudioTracks()[0]) == null
                ? void 0
                : n.getSettings().deviceId;
          return (r == null ? void 0 : r.silentSource) == null ||
            a == null ||
            !t()
            ? (o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] capture isn't waiting for a microphone, releasing the granted one",
                  ])),
              ),
              !1)
            : (o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] adopting the granted microphone ",
                    "",
                  ])),
                a.slice(0, 8),
              ),
              o("WAWebVoipSilentCapture").markGrantedMicrophoneStream(e, a),
              r.switchDevice(a, void 0, void 0, !0, e));
        })),
        tt.apply(this, arguments)
      );
    }
    function nt(e) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            te.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (U == null) {
                    (o("WALogger").WARN(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
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
                  var n = yield U.switchOutputDevice(e);
                  t.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
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
        rt.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = X),
      (l.waitForPlaybackStart = Y),
      (l.getCaptureParams = le),
      (l.isCurrentAudioInputTrackLive = se),
      (l.isCurrentAudioInputSilent = ue),
      (l.initCaptureDriverJS = ce),
      (l.startCaptureJS = me),
      (l.consumeAudioCaptureMetrics = Me),
      (l.stopCaptureJS = we),
      (l.initPlaybackDriverJS = Fe),
      (l.startPlaybackJS = Be),
      (l.consumeAudioPlaybackMetrics = Ue),
      (l.stopPlaybackJS = Ve),
      (l.switchAudioInputDevice = Ge),
      (l.reacquireCurrentAudioInputDevice = Ke),
      (l.adoptGrantedMicrophoneStream = Je),
      (l.switchAudioOutputDevice = nt));
  },
  98,
);
