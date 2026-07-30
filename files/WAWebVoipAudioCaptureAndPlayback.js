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
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipAudioPlaybackBase",
    "WAWebVoipAudioPlaybackState",
    "WAWebVoipAvDriverInitQpl",
    "WAWebVoipOperationQueue",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVirtualAudioCaptureDriver",
    "asyncToGeneratorRuntime",
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
      R = null,
      L = 0;
    function E() {
      return (L++, L);
    }
    var k = null,
      I = null,
      T = !1,
      D = 0,
      x = new (o("WAResolvable").Resolvable)();
    function $() {
      return ((T = !1), D++, (x = new (o("WAResolvable").Resolvable)()), D);
    }
    function P(e, t) {
      (t === void 0 && (t = D), t === D && ((T = e), x.resolve(e)));
    }
    function N() {
      return (x.resolve(!1), $());
    }
    function M(e) {
      e === D && (x.resolve(!1), $());
    }
    function w() {
      var e, t;
      return (e =
        (t = I) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return T
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                x.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        F.apply(this, arguments)
      );
    }
    var O = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      B = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      W = !1;
    function q() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    function U() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.deviceId,
            r = t.targetWindow;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] requestAudioReacquisition: ",
                "",
              ])),
            n,
          );
          try {
            var a = yield le(n, r, !0);
            a
              ? o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition completed",
                    ])),
                )
              : o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] audio re-acquisition failed",
                    ])),
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] audio re-acquisition error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: audio re-acquisition failed");
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      W ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          V,
        ),
        (W = !0));
    }
    function z() {
      var e,
        t,
        n,
        r = (e = R) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = q(),
              r = t ? E() : L;
            (G(),
              O.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(t && r !== L)) {
                    if (U()) {
                      if (
                        (o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [VirtualAudioCapture] Creating virtual audio capture driver",
                            ])),
                        ),
                        k != null && (yield k.stopCapture(), t && r !== L))
                      )
                        return;
                      ((k = new (o(
                        "WAWebVoipVirtualAudioCaptureDriver",
                      ).WAWebVoipVirtualAudioCaptureDriver)()),
                        yield k.initCaptureDriver(e));
                      return;
                    }
                    R == null &&
                      (R = new (o(
                        "WAWebVoipAudioCaptureBase",
                      ).WAWebVoipAudioCaptureBase)());
                    var n = R,
                      a = o(
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
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = q(),
              r = L;
            O.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                if (!(t && r !== L)) {
                  if (k != null) {
                    yield k.startCapture();
                    return;
                  }
                  if (R == null) {
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
                    (yield R.startCapture(
                      t
                        ? function () {
                            return r !== L;
                          }
                        : void 0,
                    ),
                    !(t && r !== L))
                  ) {
                    var n = (e = I) == null ? void 0 : e.playbackAudioContext;
                    if (n != null && n.state === "suspended")
                      try {
                        if ((yield n.resume(), t && r !== L)) return;
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                            ])),
                        );
                      } catch (e) {
                        if (t && r !== L) return;
                        o("WALogger").WARN(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                              "",
                            ])),
                          e,
                        );
                      }
                  }
                }
              }),
              "startCapture",
            );
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (q() && E(),
            O.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (k != null) {
                  (yield k.stopCapture(), (k = null));
                  return;
                }
                if (R == null) {
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                      ])),
                  );
                  return;
                }
                (yield R.stopCapture(), (R = null));
              }),
              "stopCapture",
            ));
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = N();
          B.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === D) {
                I == null &&
                  (I = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)());
                var n = I;
                re = null;
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
                t === D &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  );
              }
            }),
            "initPlaybackDriver",
          );
        })),
        ee.apply(this, arguments)
      );
    }
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = q(),
            t = D;
          B.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === D) {
                if (I == null) {
                  (P(!1, t),
                    o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: playback instance is null"));
                  return;
                }
                try {
                  (yield I.startPlayback(
                    e
                      ? function () {
                          return t !== D;
                        }
                      : void 0,
                  ),
                    P(!0, t));
                } catch (e) {
                  throw (P(!1, t), e);
                }
              }
            }),
            "startPlayback",
          );
        })),
        ne.apply(this, arguments)
      );
    }
    var re = null;
    function oe() {
      if (I != null) return I.consumeAudioPlaybackMetrics();
      var e = re;
      return ((re = null), e);
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = q(),
            t = e ? null : D;
          (e && N(),
            B.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = I;
                if (e == null) {
                  (t != null && M(t),
                    o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                        ])),
                    ));
                  return;
                }
                re = e.consumeAudioPlaybackMetrics();
                try {
                  yield e.stopPlayback();
                } finally {
                  (t != null && M(t),
                    (I = null),
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                      null,
                    ));
                }
              }),
              "stopPlayback",
            ));
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = new (o("WAResolvable").Resolvable)();
            return (
              O.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    if (k != null) {
                      (o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioInputDevice] virtual capture active, ignoring device switch",
                          ])),
                      ),
                        a.resolve(!0));
                      return;
                    }
                    if (R == null) {
                      (o("WALogger").ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        a.resolve(!1));
                      return;
                    }
                    var n = yield R.switchDevice(e, t, r);
                    a.resolve(n);
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioInputDevice] failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("voip: switchAudioInputDevice failed"),
                      a.resolve(!1));
                  }
                }),
                "switchInputDevice",
              ),
              a.promise
            );
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            B.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (I == null) {
                    (o("WALogger").WARN(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                  var n = yield I.switchOutputDevice(e);
                  t.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
        ce.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = w),
      (l.waitForPlaybackStart = A),
      (l.getCaptureParams = z),
      (l.initCaptureDriverJS = j),
      (l.startCaptureJS = Q),
      (l.stopCaptureJS = Y),
      (l.initPlaybackDriverJS = Z),
      (l.startPlaybackJS = te),
      (l.consumeAudioPlaybackMetrics = oe),
      (l.stopPlaybackJS = ae),
      (l.switchAudioInputDevice = le),
      (l.switchAudioOutputDevice = ue));
  },
  98,
);
