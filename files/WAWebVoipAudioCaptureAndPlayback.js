__d(
  "WAWebVoipAudioCaptureAndPlayback",
  [
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
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
      L = null;
    function E() {
      var e, t;
      return (e =
        (t = L) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    var k = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      I = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      T = !1;
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var a = yield G(n, r, !0);
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
        $.apply(this, arguments)
      );
    }
    function P() {
      T ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          x,
        ),
        (T = !0));
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (P(),
            k.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (D()) {
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
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k.enqueue(
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
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k.enqueue(
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          I.enqueue(
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
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          I.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (L == null) {
                o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                      ])),
                  )
                  .sendLogs("voip: playback instance is null");
                return;
              }
              yield L.startPlayback();
            }),
            "startPlayback",
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          I.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (L == null) {
                o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                    ])),
                );
                return;
              }
              (yield L.stopPlayback(),
                (L = null),
                o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                  null,
                ));
            }),
            "stopPlayback",
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = new (o("WAResolvable").Resolvable)();
          return (
            k.enqueue(
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            I.enqueue(
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
        K.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = E),
      (l.initCaptureDriverJS = N),
      (l.startCaptureJS = w),
      (l.stopCaptureJS = F),
      (l.initPlaybackDriverJS = B),
      (l.startPlaybackJS = q),
      (l.stopPlaybackJS = V),
      (l.switchAudioInputDevice = G),
      (l.switchAudioOutputDevice = j));
  },
  98,
);
