__d(
  "WAWebVoipAudioCaptureAndPlayback",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
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
      S = null,
      R = null,
      L = null,
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
          "enable_web_voip_virtual_audio_capture_driver",
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
            var a = yield ne(n, r, !0);
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
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (q(),
            w.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (O()) {
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualAudioCapture] Creating virtual audio capture driver",
                      ])),
                  ),
                    R != null && (yield R.stopCapture()),
                    (R = new (o(
                      "WAWebVoipVirtualAudioCaptureDriver",
                    ).WAWebVoipVirtualAudioCaptureDriver)()),
                    yield R.initCaptureDriver(e));
                  return;
                }
                (S == null &&
                  (S = new (o(
                    "WAWebVoipAudioCaptureBase",
                  ).WAWebVoipAudioCaptureBase)()),
                  yield S.initCaptureDriver(e));
              }),
              "initCaptureDriver",
            ));
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          w.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              if (R != null) {
                yield R.startCapture();
                return;
              }
              if (S == null) {
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
              yield S.startCapture();
              var t = (e = L) == null ? void 0 : e.playbackAudioContext;
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
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          w.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (R != null) {
                (yield R.stopCapture(), (R = null));
                return;
              }
              if (S == null) {
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                    ])),
                );
                return;
              }
              (yield S.stopCapture(), (S = null));
            }),
            "stopCapture",
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
          var t = x();
          A.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              t === k &&
                (L == null &&
                  (L = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)()),
                (J = null),
                yield L.initPlaybackDriver(e),
                t === k &&
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  ));
            }),
            "initPlaybackDriver",
          );
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = k;
          A.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (e === k) {
                if (L == null) {
                  (D(!1, e),
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
                  (yield L.startPlayback(), D(!0, e));
                } catch (t) {
                  throw (D(!1, e), t);
                }
              }
            }),
            "startPlayback",
          );
        })),
        Y.apply(this, arguments)
      );
    }
    var J = null;
    function Z() {
      if (L != null) return L.consumeAudioPlaybackMetrics();
      var e = J;
      return ((J = null), e);
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = k;
          A.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = L;
              if (t == null) {
                ($(e),
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                      ])),
                  ));
                return;
              }
              J = t.consumeAudioPlaybackMetrics();
              try {
                yield t.stopPlayback();
              } finally {
                ($(e),
                  (L = null),
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    null,
                  ));
              }
            }),
            "stopPlayback",
          );
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = new (o("WAResolvable").Resolvable)();
            return (
              w.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    if (R != null) {
                      (o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioInputDevice] virtual capture active, ignoring device switch",
                          ])),
                      ),
                        a.resolve(!0));
                      return;
                    }
                    if (S == null) {
                      (o("WALogger").ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null.",
                          ])),
                      ),
                        a.resolve(!1));
                      return;
                    }
                    var n = yield S.switchDevice(e, t, r);
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
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            A.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var n,
                    r = (n = L) == null ? void 0 : n.getAudioElement(),
                    a = yield o(
                      "WAWebAudioDeviceManager",
                    ).switchAudioOutputDeviceInternal(e, r);
                  t.resolve(a);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
        ae.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = P),
      (l.waitForPlaybackStart = N),
      (l.initCaptureDriverJS = U),
      (l.startCaptureJS = H),
      (l.stopCaptureJS = z),
      (l.initPlaybackDriverJS = K),
      (l.startPlaybackJS = X),
      (l.consumeAudioPlaybackMetrics = Z),
      (l.stopPlaybackJS = ee),
      (l.switchAudioInputDevice = ne),
      (l.switchAudioOutputDevice = oe));
  },
  98,
);
