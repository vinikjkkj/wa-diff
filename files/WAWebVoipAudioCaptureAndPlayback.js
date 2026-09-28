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
      $ = null,
      P = 0;
    function N() {
      return (P++, P);
    }
    var M = null,
      w = !1,
      A = 0,
      F = new (o("WAResolvable").Resolvable)();
    function O() {
      return ((w = !1), A++, (F = new (o("WAResolvable").Resolvable)()), A);
    }
    function B(e, t) {
      (t === void 0 && (t = A), t === A && ((w = e), F.resolve(e)));
    }
    function W() {
      return (F.resolve(!1), O());
    }
    function q(e) {
      e === A && (F.resolve(!1), O());
    }
    function U() {
      var e, t;
      return (e =
        (t = M) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return w
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                F.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        H.apply(this, arguments)
      );
    }
    var G = 15e3,
      z = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      j = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      K = !1;
    function Q() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.targetWindow;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] requestAudioReacquisition: ",
                "",
              ])),
            t,
          );
          try {
            var r = yield Ie(t, n, !0, !0);
            r
              ? o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition completed",
                    ])),
                )
              : o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition failed",
                    ])),
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] audio re-acquisition error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: audio re-acquisition failed");
          }
        })),
        Y.apply(this, arguments)
      );
    }
    function J() {
      K ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          X,
        ),
        (K = !0));
    }
    function Z() {
      var e,
        t,
        n,
        r = (e = $) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    function ee() {
      var e;
      return ((e = $) == null ? void 0 : e.hasLiveAudioTrack()) === !0;
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = Q(),
              r = t ? N() : P;
            (J(),
              z.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(t && r !== P)) {
                    $ == null &&
                      ($ = new (o(
                        "WAWebVoipAudioCaptureBase",
                      ).WAWebVoipAudioCaptureBase)());
                    var n = $;
                    fe = null;
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
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = Q(),
              r = P;
            z.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                if (!(t && r !== P)) {
                  if ($ == null) {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: capture instance is null");
                    return;
                  }
                  if (
                    (yield $.startCapture(
                      t
                        ? function () {
                            return r !== P;
                          }
                        : void 0,
                    ),
                    !(t && r !== P))
                  ) {
                    var n = (e = M) == null ? void 0 : e.playbackAudioContext;
                    if (n != null && n.state === "suspended")
                      try {
                        if ((yield n.resume(), t && r !== P)) return;
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                            ])),
                        );
                      } catch (e) {
                        if (t && r !== P) return;
                        o("WALogger").WARN(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                              "",
                            ])),
                          e,
                        );
                      }
                    else n != null && n.state === "running" && le() && se(n);
                  }
                }
              }),
              "startCapture",
            );
          }
        })),
        oe.apply(this, arguments)
      );
    }
    var ae = 2e3,
      ie = new WeakSet();
    function le() {
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
    function se(e) {
      j.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ue(e) && (yield ce(e)) && ie.add(e);
        }),
        "restartPlaybackOutput",
      );
    }
    function ue(e) {
      var t = M;
      return (
        t != null &&
        t.playbackAudioContext === e &&
        t.getAudioElement() == null &&
        e.state === "running" &&
        !ie.has(e) &&
        ee()
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (yield me(e.suspend(), "suspend"))
            ? (yield me(e.resume(), "resume"))
              ? (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] recreated playback output after microphone start",
                    ])),
                ),
                !0)
              : ((t = M) == null ? void 0 : t.playbackAudioContext) !== e
                ? !1
                : (yield me(e.resume(), "resume"))
                  ? (o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:restartPlaybackOutput] playback output resumed on the second attempt",
                        ])),
                    ),
                    !0)
                  : (_e(e),
                    o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:restartPlaybackOutput] playback output did not resume, state=",
                            "",
                          ])),
                        e.state,
                      )
                      .sendLogs("voip: playback output restart did not resume"),
                    !1)
            : (_e(e),
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] playback output did not suspend, state=",
                      "",
                    ])),
                  e.state,
                )
                .sendLogs("voip: playback output restart did not suspend"),
              !1);
        })),
        de.apply(this, arguments)
      );
    }
    function me(e, t) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.then(function () {
                return !0;
              }),
              ae,
              function () {
                return (
                  o("WALogger").WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
        pe.apply(this, arguments)
      );
    }
    function _e(t) {
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
    var fe = null;
    function ge() {
      if ($ != null) return $.consumeAudioCaptureMetrics();
      var e = fe;
      return ((fe = null), e);
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (Q() && N(),
            z.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = $;
                if (e == null) {
                  o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                      ])),
                  );
                  return;
                }
                ((fe = e.consumeAudioCaptureMetrics()),
                  yield e.stopCapture(),
                  ($ = null));
              }),
              "stopCapture",
            ));
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = W();
          j.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === A) {
                M == null &&
                  (M = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)());
                var n = M;
                Re = null;
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
                t === A &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  );
              }
            }),
            "initPlaybackDriver",
          );
        })),
        be.apply(this, arguments)
      );
    }
    function ve() {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Q(),
            t = A;
          j.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === A) {
                if (M == null) {
                  (B(!1, t),
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: playback instance is null"));
                  return;
                }
                try {
                  (yield M.startPlayback(
                    e
                      ? function () {
                          return t !== A;
                        }
                      : void 0,
                  ),
                    B(!0, t));
                } catch (e) {
                  throw (B(!1, t), e);
                }
              }
            }),
            "startPlayback",
          );
        })),
        Se.apply(this, arguments)
      );
    }
    var Re = null;
    function Le() {
      if (M != null) return M.consumeAudioPlaybackMetrics();
      var e = Re;
      return ((Re = null), e);
    }
    function Ee() {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Q(),
            t = e ? null : A;
          (e && W(),
            j.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = M;
                if (e == null) {
                  (t != null && q(t),
                    o("WALogger").WARN(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                        ])),
                    ));
                  return;
                }
                Re = e.consumeAudioPlaybackMetrics();
                try {
                  yield e.stopPlayback();
                } finally {
                  (t != null && q(t),
                    (M = null),
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                      null,
                    ));
                }
              }),
              "stopPlayback",
            ));
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n, r) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = new (o("WAResolvable").Resolvable)();
            return (
              z.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    if ($ == null) {
                      (o("WALogger").ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        i.resolve(!1));
                      return;
                    }
                    var n = yield $.switchDevice(e, t, r, a);
                    i.resolve(n);
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
        Te.apply(this, arguments)
      );
    }
    function De(e) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isRecoveryCurrent,
            a = e.targetWindow,
            i = $;
          if (i == null)
            return (
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] current capture is unavailable",
                  ])),
              ),
              !1
            );
          var l = new (o("WAResolvable").Resolvable)();
          return (
            z.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if ($ !== i || !t()) {
                    l.resolve(!1);
                    return;
                  }
                  var e = o(
                    "WAWebAudioDeviceManager",
                  ).getCurrentSelectedAudioDevice();
                  if (e == null) {
                    (o("WALogger").WARN(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:reacquireAudioInputDevice] current device is unavailable",
                        ])),
                    ),
                      l.resolve(!1));
                    return;
                  }
                  var n = yield o("WAPromiseDelays").withTimeout(
                    i.switchDevice(e, a, void 0, !0),
                    G,
                    o("WAWebBoolFunc").returnFalse,
                  );
                  l.resolve($ === i && t() && n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
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
        xe.apply(this, arguments)
      );
    }
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            j.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (M == null) {
                    (o("WALogger").WARN(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
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
                  var n = yield M.switchOutputDevice(e);
                  t.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
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
        Pe.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = U),
      (l.waitForPlaybackStart = V),
      (l.getCaptureParams = Z),
      (l.isCurrentAudioInputTrackLive = ee),
      (l.initCaptureDriverJS = te),
      (l.startCaptureJS = re),
      (l.consumeAudioCaptureMetrics = ge),
      (l.stopCaptureJS = he),
      (l.initPlaybackDriverJS = Ce),
      (l.startPlaybackJS = ve),
      (l.consumeAudioPlaybackMetrics = Le),
      (l.stopPlaybackJS = Ee),
      (l.switchAudioInputDevice = Ie),
      (l.reacquireCurrentAudioInputDevice = De),
      (l.switchAudioOutputDevice = $e));
  },
  98,
);
