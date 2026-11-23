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
    async function ee(e) {
      return z
        ? !0
        : await o("WAPromiseDelays").withTimeout(
            K.promise,
            e,
            o("WAWebBoolFunc").returnFalse,
          );
    }
    var te = 15e3,
      ne = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      re = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      oe = !1;
    function ae() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    async function ie(t) {
      var n = t.deviceId,
        r = t.targetWindow;
      if (U == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV] requestAudioReacquisition: no capture yet, skipping",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV] requestAudioReacquisition: ",
            "",
          ])),
        n,
      );
      try {
        var a = await Ue(n, r, !0, !0);
        a
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
    }
    function le() {
      oe ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          ie,
        ),
        (oe = !0));
    }
    function se() {
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
    function ue() {
      var e;
      return ((e = U) == null ? void 0 : e.hasLiveAudioTrack()) === !0;
    }
    function ce() {
      var e;
      return ((e = U) == null ? void 0 : e.silentSource) != null;
    }
    async function de(e) {
      if (
        e.device_type !==
        o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
      ) {
        var t = ae(),
          n = t ? H() : V;
        (le(),
          ne.enqueue(async function () {
            if (!(t && n !== V)) {
              U == null &&
                (U = new (o(
                  "WAWebVoipAudioCaptureBase",
                ).WAWebVoipAudioCaptureBase)(Re));
              var r = U;
              De = null;
              var a = o("WAWebVoipAvDriverInitQpl").startVoipAvDriverInitQpl();
              o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
                a,
                o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                  .CAPTURE_DRIVER_INIT_START,
              );
              try {
                (await r.initCaptureDriver(e),
                  o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
                    a,
                    o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                      .CAPTURE_DRIVER_INIT_END,
                  ),
                  o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(
                    a,
                  ));
              } catch (e) {
                throw (
                  o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplFail(
                    a,
                    "capture_init_failed",
                  ),
                  e
                );
              }
            }
          }, "initCaptureDriver"));
      }
    }
    async function me(e) {
      if (
        (e == null ? void 0 : e.device_type) !==
        o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
      ) {
        var t = ae(),
          n = V;
        ne.enqueue(async function () {
          var e, r;
          if (!(t && n !== V)) {
            if (U == null) {
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
              (await U.startCapture(
                t
                  ? function () {
                      return n !== V;
                    }
                  : void 0,
              ),
              !(t && n !== V))
            ) {
              var a = (e = G) == null ? void 0 : e.playbackAudioContext;
              if (
                !(
                  o(
                    "WAWebVoipSharedCallAudioContext",
                  ).isAudioPipelineV2Enabled() &&
                  a === ((r = U) == null ? void 0 : r.audioContext)
                )
              )
                if (a != null && a.state === "suspended")
                  try {
                    var i = await o(
                      "WAWebVoipAudioContextResume",
                    ).resumeAudioContextWithinV2Wait(a, "startCaptureJS");
                    if (!i || (t && n !== V)) return;
                    (ge(a),
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                          ])),
                      ));
                  } catch (e) {
                    if (t && n !== V) return;
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                          "",
                        ])),
                      e,
                    );
                  }
                else a != null && a.state === "running" && fe() && he(a);
            }
          }
        }, "startCapture");
      }
    }
    var pe = 2e3,
      _e = new WeakSet();
    function fe() {
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
    function ge(e) {
      ue() && _e.add(e);
    }
    function he(e) {
      re.enqueue(async function () {
        ye(e) && (await Ce(e)) && _e.add(e);
      }, "restartPlaybackOutput");
    }
    function ye(e) {
      var t = G;
      return (
        t != null &&
        t.playbackAudioContext === e &&
        t.getAudioElement() == null &&
        e.state === "running" &&
        !_e.has(e) &&
        ue()
      );
    }
    async function Ce(e) {
      var t;
      return (await be(e.suspend(), "suspend"))
        ? (await be(e.resume(), "resume"))
          ? (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:restartPlaybackOutput] recreated playback output after microphone start",
                ])),
            ),
            !0)
          : ((t = G) == null ? void 0 : t.playbackAudioContext) !== e
            ? !1
            : (await be(e.resume(), "resume"))
              ? (o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackOutput] playback output resumed on the second attempt",
                    ])),
                ),
                !0)
              : (ve(e),
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
        : (ve(e),
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
    }
    async function be(e, t) {
      try {
        return await o("WAPromiseDelays").withTimeout(
          e.then(o("WAWebBoolFunc").returnTrue),
          pe,
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
    }
    function ve(e) {
      e.resume().catch(function (e) {
        o("WALogger").WARN(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:restartPlaybackOutput] background resume failed: ",
              "",
            ])),
          e,
        );
      });
    }
    var Se = 300;
    function Re() {
      o("WAWebUA").UA.isWebkit &&
        re.enqueue(async function () {
          var e,
            t = (e = G) == null ? void 0 : e.getAudioElement();
          if (!(t == null || t.paused || !ke(t) || !Ie())) {
            if ((t.pause(), (await Te(t)) || (await Te(t)))) {
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackElement] restarted call audio once the microphone delivered audio",
                  ])),
              );
              return;
            }
            (o("WALogger")
              .ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackElement] call audio did not resume",
                  ])),
              )
              .sendLogs("voip-playback-element-restart-did-not-resume"),
              Ee(t));
          }
        }, "restartPlaybackElement");
    }
    var Le = null;
    function Ee(e) {
      Le == null || Le();
      var t = e.ownerDocument,
        n = function () {
          (Le == null || Le(),
            e.paused &&
              e.play().catch(function (e) {
                o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:restartPlaybackElement] play on the next gesture failed: ",
                      "",
                    ])),
                  e,
                );
              }));
        };
      (t.addEventListener("pointerdown", n, !0),
        t.addEventListener("keydown", n, !0),
        (Le = function () {
          (t.removeEventListener("pointerdown", n, !0),
            t.removeEventListener("keydown", n, !0),
            (Le = null));
        }));
    }
    function ke(e) {
      return e.sinkId == null || e.sinkId === "" || e.sinkId === "default";
    }
    function Ie() {
      var e,
        t =
          (e = U) == null || (e = e.audioStream) == null
            ? void 0
            : e.getAudioTracks()[0];
      return (
        t instanceof MediaStreamTrack && t.readyState === "live" && !t.muted
      );
    }
    async function Te(e) {
      await o("WAPromiseDelays").delayMs(Se);
      try {
        return await o("WAPromiseDelays").withTimeout(
          e.play().then(o("WAWebBoolFunc").returnTrue),
          pe,
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
    }
    var De = null;
    function xe() {
      if (U != null) return U.consumeAudioCaptureMetrics();
      var e = De;
      return ((De = null), e);
    }
    async function $e(e, t) {
      (e == null ? void 0 : e.device_type) !==
        o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
        (Pe(),
        ae() && H(),
        ne.enqueue(async function () {
          var e = U;
          if (e == null) {
            o("WALogger").WARN(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                ])),
            );
            return;
          }
          ((De = e.consumeAudioCaptureMetrics()),
            await e.stopCapture(t == null ? void 0 : t.nativeStopped),
            (U = null));
        }, "stopCapture"));
    }
    function Pe() {
      try {
        var e,
          t = U;
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:stopCaptureJS] capture state: queue=",
              ", init=",
              ", source=",
              ", context=",
              ", track=",
              "",
            ])),
          ne.describeForLogs(),
          (e = t == null ? void 0 : t.audioCaptureInitState) != null
            ? e
            : "none",
          Ne(t),
          Me(t == null ? void 0 : t.audioContext),
          Ae(t == null ? void 0 : t.audioStream),
        );
      } catch (e) {
        o("WALogger").WARN(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:stopCaptureJS] failed to read the capture state: ",
              "",
            ])),
          e,
        );
      }
    }
    function Ne(e) {
      return (e == null ? void 0 : e.mediaStreamSource) != null
        ? "microphone"
        : (e == null ? void 0 : e.silentSource) != null
          ? "silence"
          : "none";
    }
    function Me(e) {
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
        we(e) +
        " output"
      );
    }
    function we(e) {
      var t = Reflect.get(e, "sinkId");
      return t === "" || t === "default"
        ? "default"
        : typeof t == "string"
          ? "selected"
          : t == null
            ? "unknown"
            : "no";
    }
    function Ae(e) {
      var t = e == null ? void 0 : e.getAudioTracks()[0];
      return t == null
        ? "none"
        : "" +
            t.readyState +
            (t.muted ? " muted" : "") +
            (t.enabled ? "" : " disabled");
    }
    async function Fe(e) {
      var t = Y();
      re.enqueue(async function () {
        if (t === j) {
          G == null &&
            (G = new (o(
              "WAWebVoipAudioPlaybackBase",
            ).WAWebVoipAudioPlaybackBase)());
          var n = G;
          Be = null;
          var r = o("WAWebVoipAvDriverInitQpl").startVoipAvDriverInitQpl();
          o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
            r,
            o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
              .PLAYBACK_DRIVER_INIT_START,
          );
          try {
            (await n.initPlaybackDriver(e),
              o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(
                r,
                o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint
                  .PLAYBACK_DRIVER_INIT_END,
              ),
              o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(r));
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
      }, "initPlaybackDriver");
    }
    async function Oe() {
      var e = ae(),
        t = j;
      re.enqueue(async function () {
        if (t === j) {
          if (G == null) {
            (X(!1, t),
              o("WALogger")
                .ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                    ])),
                )
                .sendLogs("voip: playback instance is null"));
            return;
          }
          try {
            (await G.startPlayback(
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
      }, "startPlayback");
    }
    var Be = null;
    function We() {
      if (G != null) return G.consumeAudioPlaybackMetrics();
      var e = Be;
      return ((Be = null), e);
    }
    async function qe(e) {
      var t = ae(),
        n = t ? null : j;
      (t && Y(),
        re.enqueue(async function () {
          var t = G;
          if (t == null) {
            (n != null && J(n),
              o("WALogger").WARN(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                  ])),
              ));
            return;
          }
          Be = t.consumeAudioPlaybackMetrics();
          try {
            await t.stopPlayback(e);
          } finally {
            (n != null && J(n),
              (G = null),
              o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(null),
              Le == null || Le());
          }
        }, "stopPlayback"));
    }
    async function Ue(e, t, n, r) {
      var a = new (o("WAResolvable").Resolvable)();
      return (
        ne.enqueue(async function () {
          try {
            var i = U;
            if (i == null) {
              (o("WALogger").ERROR(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioDevice] capture instance is null.",
                  ])),
              ),
                a.resolve(!1));
              return;
            }
            if (Ve(i, e, n, r)) {
              a.resolve(!0);
              return;
            }
            var l = await i.switchDevice(e, t, n, r);
            a.resolve(l);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioInputDevice] failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: switchAudioInputDevice failed"),
              a.resolve(!1));
          }
        }, "switchInputDevice"),
        a.promise
      );
    }
    function Ve(e, t, n, r) {
      return (
        r === !0 &&
        n !== !0 &&
        o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(e, t)
      );
    }
    async function He(e) {
      var t = e.isRecoveryCurrent,
        n = e.targetWindow,
        a = U;
      if (a == null)
        return (
          o("WALogger").WARN(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:reacquireAudioInputDevice] current capture is unavailable",
              ])),
          ),
          !1
        );
      var i = new (o("WAResolvable").Resolvable)();
      return (
        ne.enqueue(async function () {
          try {
            if (U !== a || !t()) {
              i.resolve(!1);
              return;
            }
            if (await Ge(a)) {
              i.resolve(U === a && t());
              return;
            }
            var e = o(
              "WAWebAudioDeviceManager",
            ).getCurrentSelectedAudioDevice();
            if (e == null) {
              (o("WALogger").WARN(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] current device is unavailable",
                  ])),
              ),
                i.resolve(!1));
              return;
            }
            var l = await o("WAPromiseDelays").withTimeout(
              a.switchDevice(e, n, void 0, !0),
              te,
              o("WAWebBoolFunc").returnFalse,
            );
            i.resolve(U === a && t() && l);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-mic-reacquire-failed"),
              i.resolve(!1));
          }
        }, "reacquireInputDevice"),
        i.promise
      );
    }
    async function Ge(e) {
      var t = e.automaticDeviceChangePromise;
      return t == null ||
        (await t.catch(o("WAWebBoolFunc").returnFalse), !e.hasLiveAudioTrack())
        ? !1
        : (o("WALogger").LOG(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:reacquireAudioInputDevice] an automatic switch already provided a live microphone",
              ])),
          ),
          !0);
    }
    function ze(e, t) {
      var n = e
        .then(function (e) {
          return e == null ? !1 : je(e, t);
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
    function je(e, t) {
      var n = new (o("WAResolvable").Resolvable)();
      return (
        ne.enqueue(async function () {
          var a = !1;
          try {
            a = await Ke(e, t);
          } catch (e) {
            o("WALogger")
              .ERROR(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-adopt-granted-microphone-failed");
          }
          (a ||
            e.getTracks().forEach(function (e) {
              e.stop();
            }),
            n.resolve(a));
        }, "adoptMicrophoneStream"),
        n.promise
      );
    }
    async function Ke(e, t) {
      var n,
        r = U,
        a =
          (n = e.getAudioTracks()[0]) == null
            ? void 0
            : n.getSettings().deviceId;
      return (r == null ? void 0 : r.silentSource) == null || a == null || !t()
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
    }
    async function Qe(e) {
      var t = new (o("WAResolvable").Resolvable)();
      return (
        re.enqueue(async function () {
          try {
            if (G == null) {
              (o("WALogger").WARN(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioOutputDevice] playback instance is null, saving preference only",
                  ])),
              ),
                o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(
                  e,
                  "AV:switchAudioOutputDevice",
                ),
                t.resolve(!1));
              return;
            }
            var n = await G.switchOutputDevice(e);
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
        }, "switchOutputDevice"),
        t.promise
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = Z),
      (l.waitForPlaybackStart = ee),
      (l.getCaptureParams = se),
      (l.isCurrentAudioInputTrackLive = ue),
      (l.isCurrentAudioInputSilent = ce),
      (l.initCaptureDriverJS = de),
      (l.startCaptureJS = me),
      (l.consumeAudioCaptureMetrics = xe),
      (l.stopCaptureJS = $e),
      (l.initPlaybackDriverJS = Fe),
      (l.startPlaybackJS = Oe),
      (l.consumeAudioPlaybackMetrics = We),
      (l.stopPlaybackJS = qe),
      (l.switchAudioInputDevice = Ue),
      (l.reacquireCurrentAudioInputDevice = He),
      (l.adoptGrantedMicrophoneStream = ze),
      (l.switchAudioOutputDevice = Qe));
  },
  98,
);
