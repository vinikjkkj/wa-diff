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
      k = new (o("WAResolvable").Resolvable)();
    function I() {
      ((E = !1), (k = new (o("WAResolvable").Resolvable)()));
    }
    function T(e) {
      ((E = e), k.resolve(e));
    }
    function D(e) {
      (T(e), I());
    }
    function x() {
      var e, t;
      return (e =
        (t = L) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return E
            ? !0
            : yield o("WAPromiseDelays").withTimeout(
                k.promise,
                e,
                o("WAWebBoolFunc").returnFalse,
              );
        })),
        P.apply(this, arguments)
      );
    }
    var N = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      M = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      w = !1;
    function A() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var a = yield J(n, r, !0);
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
        O.apply(this, arguments)
      );
    }
    function B() {
      w ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          F,
        ),
        (w = !0));
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (B(),
            N.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (A()) {
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
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N.enqueue(
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
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N.enqueue(
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (D(!1),
            M.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (L == null &&
                  (L = new (o(
                    "WAWebVoipAudioPlaybackBase",
                  ).WAWebVoipAudioPlaybackBase)()),
                  yield L.initPlaybackDriver(e),
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    e.sample_rate,
                  ));
              }),
              "initPlaybackDriver",
            ));
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          M.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (L == null) {
                (T(!1),
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
                (yield L.startPlayback(), T(!0));
              } catch (e) {
                throw (T(!1), e);
              }
            }),
            "startPlayback",
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
          M.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (L == null) {
                (D(!1),
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                      ])),
                  ));
                return;
              }
              try {
                yield L.stopPlayback();
              } finally {
                (D(!1),
                  (L = null),
                  o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                    null,
                  ));
              }
            }),
            "stopPlayback",
          );
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = new (o("WAResolvable").Resolvable)();
          return (
            N.enqueue(
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
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            M.enqueue(
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
        te.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = x),
      (l.waitForPlaybackStart = $),
      (l.initCaptureDriverJS = W),
      (l.startCaptureJS = U),
      (l.stopCaptureJS = H),
      (l.initPlaybackDriverJS = z),
      (l.startPlaybackJS = K),
      (l.stopPlaybackJS = X),
      (l.switchAudioInputDevice = J),
      (l.switchAudioOutputDevice = ee));
  },
  98,
);
