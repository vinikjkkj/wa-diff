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
      L = null,
      E = null,
      k = !1,
      I = 0,
      T = new (o("WAResolvable").Resolvable)();
    function D() {
      return ((k = !1), I++, (T = new (o("WAResolvable").Resolvable)()), I);
    }
    function x(e, t) {
      (t === void 0 && (t = I), t === I && ((k = e), T.resolve(e)));
    }
    function $() {
      return (T.resolve(!1), D());
    }
    function P(e) {
      e === I && (T.resolve(!1), D());
    }
    function N() {
      var e, t;
      return (e =
        (t = E) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return k
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                T.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        w.apply(this, arguments)
      );
    }
    var A = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      F = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      O = !1;
    function B() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var a = yield oe(n, r, !0);
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
        q.apply(this, arguments)
      );
    }
    function U() {
      O ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          W,
        ),
        (O = !0));
    }
    function V() {
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
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.device_type !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            (U(),
            A.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (B()) {
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualAudioCapture] Creating virtual audio capture driver",
                      ])),
                  ),
                    L != null && (yield L.stopCapture()),
                    (L = new (o(
                      "WAWebVoipVirtualAudioCaptureDriver",
                    ).WAWebVoipVirtualAudioCaptureDriver)()),
                    yield L.initCaptureDriver(e));
                  return;
                }
                (R == null &&
                  (R = new (o(
                    "WAWebVoipAudioCaptureBase",
                  ).WAWebVoipAudioCaptureBase)()),
                  yield R.initCaptureDriver(e));
              }),
              "initCaptureDriver",
            ));
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            A.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                if (L != null) {
                  yield L.startCapture();
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
                yield R.startCapture();
                var t = (e = E) == null ? void 0 : e.playbackAudioContext;
                if (t != null && t.state === "suspended")
                  try {
                    (yield t.resume(),
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                          ])),
                      ));
                  } catch (e) {
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }),
              "startCapture",
            );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e == null ? void 0 : e.device_type) !==
            o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
            A.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (L != null) {
                  (yield L.stopCapture(), (L = null));
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
            );
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = $();
          F.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              t === I &&
                (E == null &&
                  (E = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)()),
                (ee = null),
                yield E.initPlaybackDriver(e),
                t === I &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  ));
            }),
            "initPlaybackDriver",
          );
        })),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = I;
          F.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (e === I) {
                if (E == null) {
                  (x(!1, e),
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
                  (yield E.startPlayback(), x(!0, e));
                } catch (t) {
                  throw (x(!1, e), t);
                }
              }
            }),
            "startPlayback",
          );
        })),
        Z.apply(this, arguments)
      );
    }
    var ee = null;
    function te() {
      if (E != null) return E.consumeAudioPlaybackMetrics();
      var e = ee;
      return ((ee = null), e);
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = I;
          F.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = E;
              if (t == null) {
                (P(e),
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                      ])),
                  ));
                return;
              }
              ee = t.consumeAudioPlaybackMetrics();
              try {
                yield t.stopPlayback();
              } finally {
                (P(e),
                  (E = null),
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    null,
                  ));
              }
            }),
            "stopPlayback",
          );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t, n) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = new (o("WAResolvable").Resolvable)();
            return (
              A.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    if (L != null) {
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
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            F.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (E == null) {
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
                  var n = yield E.switchOutputDevice(e);
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
        le.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = N),
      (l.waitForPlaybackStart = M),
      (l.getCaptureParams = V),
      (l.initCaptureDriverJS = H),
      (l.startCaptureJS = z),
      (l.stopCaptureJS = K),
      (l.initPlaybackDriverJS = X),
      (l.startPlaybackJS = J),
      (l.consumeAudioPlaybackMetrics = te),
      (l.stopPlaybackJS = ne),
      (l.switchAudioInputDevice = oe),
      (l.switchAudioOutputDevice = ie));
  },
  98,
);
