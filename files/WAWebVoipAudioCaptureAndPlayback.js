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
      v = null,
      S = 0;
    function R() {
      return (S++, S);
    }
    var L = null,
      E = !1,
      k = 0,
      I = new (o("WAResolvable").Resolvable)();
    function T() {
      return ((E = !1), k++, (I = new (o("WAResolvable").Resolvable)()), k);
    }
    function D(e, t) {
      (t === void 0 && (t = k), t === k && ((E = e), I.resolve(e)));
    }
    function x() {
      return (I.resolve(!1), T());
    }
    function $(e) {
      e === k && (I.resolve(!1), T());
    }
    function P() {
      var e, t;
      return (e =
        (t = L) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return E
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                I.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        M.apply(this, arguments)
      );
    }
    var w = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      A = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      F = !1;
    function O() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_audio_driver_lifetime_fix",
        ) === !0
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var a = yield ae(n, r, !0);
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
        W.apply(this, arguments)
      );
    }
    function q() {
      F ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          B,
        ),
        (F = !0));
    }
    function U() {
      var e,
        t,
        n,
        r = (e = v) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = O(),
              r = t ? R() : S;
            (q(),
              w.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(t && r !== S)) {
                    v == null &&
                      (v = new (o(
                        "WAWebVoipAudioCaptureBase",
                      ).WAWebVoipAudioCaptureBase)());
                    var n = v;
                    j = null;
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio
          ) {
            var t = O(),
              r = S;
            w.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                if (!(t && r !== S)) {
                  if (v == null) {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: capture instance is null");
                    return;
                  }
                  if (
                    (yield v.startCapture(
                      t
                        ? function () {
                            return r !== S;
                          }
                        : void 0,
                    ),
                    !(t && r !== S))
                  ) {
                    var n = (e = L) == null ? void 0 : e.playbackAudioContext;
                    if (n != null && n.state === "suspended")
                      try {
                        if ((yield n.resume(), t && r !== S)) return;
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                            ])),
                        );
                      } catch (e) {
                        if (t && r !== S) return;
                        o("WALogger").WARN(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
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
        z.apply(this, arguments)
      );
    }
    var j = null;
    function K() {
      if (v != null) return v.consumeAudioCaptureMetrics();
      var e = j;
      return ((j = null), e);
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (O() && R(),
            w.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = v;
                if (e == null) {
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                      ])),
                  );
                  return;
                }
                ((j = e.consumeAudioCaptureMetrics()),
                  yield e.stopCapture(),
                  (v = null));
              }),
              "stopCapture",
            ));
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
          var t = x();
          A.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === k) {
                L == null &&
                  (L = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)());
                var n = L;
                te = null;
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
                t === k &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  );
              }
            }),
            "initPlaybackDriver",
          );
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = O(),
            t = k;
          A.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (t === k) {
                if (L == null) {
                  (D(!1, t),
                    o("WALogger")
                      .ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                          ])),
                      )
                      .sendLogs("voip: playback instance is null"));
                  return;
                }
                try {
                  (yield L.startPlayback(
                    e
                      ? function () {
                          return t !== k;
                        }
                      : void 0,
                  ),
                    D(!0, t));
                } catch (e) {
                  throw (D(!1, t), e);
                }
              }
            }),
            "startPlayback",
          );
        })),
        ee.apply(this, arguments)
      );
    }
    var te = null;
    function ne() {
      if (L != null) return L.consumeAudioPlaybackMetrics();
      var e = te;
      return ((te = null), e);
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = O(),
            t = e ? null : k;
          (e && x(),
            A.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = L;
                if (e == null) {
                  (t != null && $(t),
                    o("WALogger").WARN(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                        ])),
                    ));
                  return;
                }
                te = e.consumeAudioPlaybackMetrics();
                try {
                  yield e.stopPlayback();
                } finally {
                  (t != null && $(t),
                    (L = null),
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                      null,
                    ));
                }
              }),
              "stopPlayback",
            ));
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e, t, n) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = new (o("WAResolvable").Resolvable)();
            return (
              w.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    if (v == null) {
                      (o("WALogger").ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        a.resolve(!1));
                      return;
                    }
                    var n = yield v.switchDevice(e, t, r);
                    a.resolve(n);
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
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
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            A.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (L == null) {
                    (o("WALogger").WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
                  var n = yield L.switchOutputDevice(e);
                  t.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
        se.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = P),
      (l.waitForPlaybackStart = N),
      (l.getCaptureParams = U),
      (l.initCaptureDriverJS = V),
      (l.startCaptureJS = G),
      (l.consumeAudioCaptureMetrics = K),
      (l.stopCaptureJS = Q),
      (l.initPlaybackDriverJS = Y),
      (l.startPlaybackJS = Z),
      (l.consumeAudioPlaybackMetrics = ne),
      (l.stopPlaybackJS = re),
      (l.switchAudioInputDevice = ae),
      (l.switchAudioOutputDevice = le));
  },
  98,
);
