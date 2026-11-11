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
    "WAWebVoipSharedCallAudioContext",
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
      W,
      q,
      U = null,
      V = 0;
    function H() {
      return (V++, V);
    }
    var G = null,
      z = !1,
      j = 0,
      K = new (o("WAResolvable").Resolvable)();
    function Q() {
      return ((z = !1), j++, (K = new (o("WAResolvable").Resolvable)()), j);
    }
    function X(e, t) {
      (t === void 0 && (t = j), t === j && ((z = e), K.resolve(e)));
    }
    function Y() {
      return (K.resolve(!1), Q());
    }
    function J(e) {
      e === j && (K.resolve(!1), Q());
    }
    function Z() {
      var e, t;
      return (e =
        (t = G) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return z
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                K.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        te.apply(this, arguments)
      );
    }
    var ne = 15e3,
      re = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      oe = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      ae = !1;
    function ie() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.targetWindow;
          if (U == null) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] requestAudioReacquisition: no capture yet, skipping",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] requestAudioReacquisition: ",
                "",
              ])),
            t,
          );
          try {
            var r = yield Ze(t, n, !0, !0);
            r
              ? o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition completed",
                    ])),
                )
              : o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition failed",
                    ])),
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] audio re-acquisition error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: audio re-acquisition failed");
          }
        })),
        se.apply(this, arguments)
      );
    }
    function ue() {
      ae ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          le,
        ),
        (ae = !0));
    }
    function ce() {
      var e,
        t,
        n,
        r = (e = U) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    function de() {
      var e;
      return ((e = U) == null ? void 0 : e.hasLiveAudioTrack()) === !0;
    }
    function me() {
      var e;
      return ((e = U) == null ? void 0 : e.silentSource) != null;
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = ie(),
              r = t ? H() : V;
            (ue(),
              re.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(t && r !== V)) {
                    U == null &&
                      (U = new (o(
                        "WAWebVoipAudioCaptureBase",
                      ).WAWebVoipAudioCaptureBase)(De));
                    var n = U;
                    Ae = null;
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
        _e.apply(this, arguments)
      );
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = ie(),
              r = V;
            re.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e, n;
                if (!(t && r !== V)) {
                  if (U == null) {
                    o("WALogger")
                      .ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: capture instance is null");
                    return;
                  }
                  if (
                    (yield U.startCapture(
                      t
                        ? function () {
                            return r !== V;
                          }
                        : void 0,
                    ),
                    !(t && r !== V))
                  ) {
                    var a = (e = G) == null ? void 0 : e.playbackAudioContext;
                    if (
                      !(
                        o(
                          "WAWebVoipSharedCallAudioContext",
                        ).isAudioPipelineV2Enabled() &&
                        a === ((n = U) == null ? void 0 : n.audioContext)
                      )
                    )
                      if (a != null && a.state === "suspended")
                        try {
                          var i = yield o(
                            "WAWebVoipAudioContextResume",
                          ).resumeAudioContextWithinV2Wait(a, "startCaptureJS");
                          if (!i || (t && r !== V)) return;
                          (be(a),
                            o("WALogger").LOG(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                                ])),
                            ));
                        } catch (e) {
                          if (t && r !== V) return;
                          o("WALogger").WARN(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                                "",
                              ])),
                            e,
                          );
                        }
                      else a != null && a.state === "running" && Ce() && ve(a);
                  }
                }
              }),
              "startCapture",
            );
          }
        })),
        ge.apply(this, arguments)
      );
    }
    var he = 2e3,
      ye = new WeakSet();
    function Ce() {
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
    function be(e) {
      de() && ye.add(e);
    }
    function ve(e) {
      oe.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          Se(e) && (yield Re(e)) && ye.add(e);
        }),
        "restartPlaybackOutput",
      );
    }
    function Se(e) {
      var t = G;
      return (
        t != null &&
        t.playbackAudioContext === e &&
        t.getAudioElement() == null &&
        e.state === "running" &&
        !ye.has(e) &&
        de()
      );
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (yield Ee(e.suspend(), "suspend"))
            ? (yield Ee(e.resume(), "resume"))
              ? (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] recreated playback output after microphone start",
                    ])),
                ),
                !0)
              : ((t = G) == null ? void 0 : t.playbackAudioContext) !== e
                ? !1
                : (yield Ee(e.resume(), "resume"))
                  ? (o("WALogger").WARN(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:restartPlaybackOutput] playback output resumed on the second attempt",
                        ])),
                    ),
                    !0)
                  : (Ie(e),
                    o("WALogger")
                      .ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:restartPlaybackOutput] playback output did not resume, state=",
                            "",
                          ])),
                        e.state,
                      )
                      .sendLogs("voip: playback output restart did not resume"),
                    !1)
            : (Ie(e),
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] playback output did not suspend, state=",
                      "",
                    ])),
                  e.state,
                )
                .sendLogs("voip: playback output restart did not suspend"),
              !1);
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.then(o("WAWebBoolFunc").returnTrue),
              he,
              function () {
                return (
                  o("WALogger").WARN(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
        ke.apply(this, arguments)
      );
    }
    function Ie(t) {
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
    var Te = 300;
    function De() {
      o("WAWebUA").UA.isWebkit &&
        oe.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = (e = G) == null ? void 0 : e.getAudioElement();
            if (!(t == null || t.paused || !Pe(t) || !Ne())) {
              if ((t.pause(), (yield Me(t)) || (yield Me(t)))) {
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
                $e(t));
            }
          }),
          "restartPlaybackElement",
        );
    }
    var xe = null;
    function $e(e) {
      xe == null || xe();
      var t = e.ownerDocument,
        n = function () {
          (xe == null || xe(),
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
        (xe = function () {
          (t.removeEventListener("pointerdown", n, !0),
            t.removeEventListener("keydown", n, !0),
            (xe = null));
        }));
    }
    function Pe(e) {
      return e.sinkId == null || e.sinkId === "" || e.sinkId === "default";
    }
    function Ne() {
      var e,
        t =
          (e = U) == null || (e = e.audioStream) == null
            ? void 0
            : e.getAudioTracks()[0];
      return (
        t instanceof MediaStreamTrack && t.readyState === "live" && !t.muted
      );
    }
    function Me(e) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAPromiseDelays").delayMs(Te);
          try {
            return yield o("WAPromiseDelays").withTimeout(
              e.play().then(o("WAWebBoolFunc").returnTrue),
              he,
              function () {
                return !e.paused;
              },
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackElement] play failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        we.apply(this, arguments)
      );
    }
    var Ae = null;
    function Fe() {
      if (U != null) return U.consumeAudioCaptureMetrics();
      var e = Ae;
      return ((Ae = null), e);
    }
    function Oe(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (We(),
            ie() && H(),
            re.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = U;
                if (e == null) {
                  o("WALogger").WARN(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                      ])),
                  );
                  return;
                }
                ((Ae = e.consumeAudioCaptureMetrics()),
                  yield e.stopCapture(t == null ? void 0 : t.nativeStopped),
                  (U = null));
              }),
              "stopCapture",
            ));
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      try {
        var e,
          t = U;
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:stopCaptureJS] capture state: queue=",
              ", init=",
              ", source=",
              ", context=",
              ", track=",
              "",
            ])),
          re.describeForLogs(),
          (e = t == null ? void 0 : t.audioCaptureInitState) != null
            ? e
            : "none",
          qe(t),
          Ue(t == null ? void 0 : t.audioContext),
          He(t == null ? void 0 : t.audioStream),
        );
      } catch (e) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:stopCaptureJS] failed to read the capture state: ",
              "",
            ])),
          e,
        );
      }
    }
    function qe(e) {
      return (e == null ? void 0 : e.mediaStreamSource) != null
        ? "microphone"
        : (e == null ? void 0 : e.silentSource) != null
          ? "silence"
          : "none";
    }
    function Ue(e) {
      if (e == null) return "none";
      var t = o("WAWebVoipSharedCallAudioContext").isSharedCallAudioContext(e)
        ? "shared call context"
        : "own context";
      return (
        e.state +
        " at " +
        e.currentTime.toFixed(2) +
        "s, " +
        e.sampleRate +
        "Hz, " +
        t +
        ", " +
        Ve(e) +
        " output"
      );
    }
    function Ve(e) {
      var t = Reflect.get(e, "sinkId");
      return t === "" || t === "default"
        ? "default"
        : typeof t == "string"
          ? "selected"
          : t == null
            ? "unknown"
            : "no";
    }
    function He(e) {
      var t = e == null ? void 0 : e.getAudioTracks()[0];
      return t == null
        ? "none"
        : "" +
            t.readyState +
            (t.muted ? " muted" : "") +
            (t.enabled ? "" : " disabled");
    }
    function Ge(e) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Y();
          oe.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === j) {
                G == null &&
                  (G = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)());
                var n = G;
                Qe = null;
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
                t === j &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  );
              }
            }),
            "initPlaybackDriver",
          );
        })),
        ze.apply(this, arguments)
      );
    }
    function je() {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ie(),
            t = j;
          oe.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === j) {
                if (G == null) {
                  (X(!1, t),
                    o("WALogger")
                      .ERROR(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: playback instance is null"));
                  return;
                }
                try {
                  (yield G.startPlayback(
                    e
                      ? function () {
                          return t !== j;
                        }
                      : void 0,
                  ),
                    X(!0, t));
                } catch (e) {
                  throw (X(!1, t), e);
                }
              }
            }),
            "startPlayback",
          );
        })),
        Ke.apply(this, arguments)
      );
    }
    var Qe = null;
    function Xe() {
      if (G != null) return G.consumeAudioPlaybackMetrics();
      var e = Qe;
      return ((Qe = null), e);
    }
    function Ye(e) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ie(),
            r = t ? null : j;
          (t && Y(),
            oe.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = G;
                if (t == null) {
                  (r != null && J(r),
                    o("WALogger").WARN(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                        ])),
                    ));
                  return;
                }
                Qe = t.consumeAudioPlaybackMetrics();
                try {
                  yield t.stopPlayback(e);
                } finally {
                  (r != null && J(r),
                    (G = null),
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                      null,
                    ),
                    xe == null || xe());
                }
              }),
              "stopPlayback",
            ));
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e, t, n, r) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = new (o("WAResolvable").Resolvable)();
            return (
              re.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var n = U;
                    if (n == null) {
                      (o("WALogger").ERROR(
                        P ||
                          (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        i.resolve(!1));
                      return;
                    }
                    if (tt(n, e, r, a)) {
                      i.resolve(!0);
                      return;
                    }
                    var l = yield n.switchDevice(e, t, r, a);
                    i.resolve(l);
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        N ||
                          (N = babelHelpers.taggedTemplateLiteralLoose([
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
        et.apply(this, arguments)
      );
    }
    function tt(e, t, n, r) {
      return (
        r === !0 &&
        n !== !0 &&
        o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(e, t)
      );
    }
    function nt(e) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isRecoveryCurrent,
            a = e.targetWindow,
            i = U;
          if (i == null)
            return (
              o("WALogger").WARN(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] current capture is unavailable",
                  ])),
              ),
              !1
            );
          var l = new (o("WAResolvable").Resolvable)();
          return (
            re.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (U !== i || !t()) {
                    l.resolve(!1);
                    return;
                  }
                  if (yield ot(i)) {
                    l.resolve(U === i && t());
                    return;
                  }
                  var e = o(
                    "WAWebAudioDeviceManager",
                  ).getCurrentSelectedAudioDevice();
                  if (e == null) {
                    (o("WALogger").WARN(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:reacquireAudioInputDevice] current device is unavailable",
                        ])),
                    ),
                      l.resolve(!1));
                    return;
                  }
                  var n = yield o("WAPromiseDelays").withTimeout(
                    i.switchDevice(e, a, void 0, !0),
                    ne,
                    o("WAWebBoolFunc").returnFalse,
                  );
                  l.resolve(U === i && t() && n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
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
        rt.apply(this, arguments)
      );
    }
    function ot(e) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.automaticDeviceChangePromise;
          return t == null ||
            (yield t.catch(o("WAWebBoolFunc").returnFalse),
            !e.hasLiveAudioTrack())
            ? !1
            : (o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] an automatic switch already provided a live microphone",
                  ])),
              ),
              !0);
        })),
        at.apply(this, arguments)
      );
    }
    function it(e, t) {
      var n = e
        .then(function (e) {
          return e == null ? !1 : lt(e, t);
        })
        .catch(o("WAWebBoolFunc").returnFalse);
      return (
        o("WAWebVoipSilentCapture").holdSilenceSwitchesUntil(n, t),
        n.then(function (e) {
          if (!e && t()) {
            var n;
            o("WAWebVoipSilentCapture").retrySwitchFromSilence(
              (n = U) == null ? void 0 : n.silentSource,
            );
          }
        }),
        n
      );
    }
    function lt(e, t) {
      var a = new (o("WAResolvable").Resolvable)();
      return (
        re.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = !1;
            try {
              n = yield st(e, t);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
    function st(e, t) {
      return ut.apply(this, arguments);
    }
    function ut() {
      return (
        (ut = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = U,
            a =
              (n = e.getAudioTracks()[0]) == null
                ? void 0
                : n.getSettings().deviceId;
          return (r == null ? void 0 : r.silentSource) == null ||
            a == null ||
            !t()
            ? (o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] capture isn't waiting for a microphone, releasing the granted one",
                  ])),
              ),
              !1)
            : (o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] adopting the granted microphone ",
                    "",
                  ])),
                a.slice(0, 8),
              ),
              o("WAWebVoipSilentCapture").markGrantedMicrophoneStream(e, a),
              r.switchDevice(a, void 0, void 0, !0, e));
        })),
        ut.apply(this, arguments)
      );
    }
    function ct(e) {
      return dt.apply(this, arguments);
    }
    function dt() {
      return (
        (dt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            oe.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (G == null) {
                    (o("WALogger").WARN(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
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
                  var n = yield G.switchOutputDevice(e);
                  t.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
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
        dt.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = Z),
      (l.waitForPlaybackStart = ee),
      (l.getCaptureParams = ce),
      (l.isCurrentAudioInputTrackLive = de),
      (l.isCurrentAudioInputSilent = me),
      (l.initCaptureDriverJS = pe),
      (l.startCaptureJS = fe),
      (l.consumeAudioCaptureMetrics = Fe),
      (l.stopCaptureJS = Oe),
      (l.initPlaybackDriverJS = Ge),
      (l.startPlaybackJS = je),
      (l.consumeAudioPlaybackMetrics = Xe),
      (l.stopPlaybackJS = Ye),
      (l.switchAudioInputDevice = Ze),
      (l.reacquireCurrentAudioInputDevice = nt),
      (l.adoptGrantedMicrophoneStream = it),
      (l.switchAudioOutputDevice = ct));
  },
  98,
);
