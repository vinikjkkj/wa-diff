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
      b = null,
      v = null,
      S = null,
      R = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      L = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      E = !1;
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var a = yield U(n, r, !0);
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
        T.apply(this, arguments)
      );
    }
    function D() {
      E ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          I,
        ),
        (E = !0));
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (D(),
            R.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (k()) {
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualAudioCapture] Creating virtual audio capture driver",
                      ])),
                  ),
                    v != null && (yield v.stopCapture()),
                    (v = new (o(
                      "WAWebVoipVirtualAudioCaptureDriver",
                    ).WAWebVoipVirtualAudioCaptureDriver)()),
                    yield v.initCaptureDriver(e));
                  return;
                }
                (b == null &&
                  (b = new (o(
                    "WAWebVoipAudioCaptureBase",
                  ).WAWebVoipAudioCaptureBase)()),
                  yield b.initCaptureDriver(e));
              }),
              "initCaptureDriver",
            ));
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          R.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (v != null) {
                yield v.startCapture();
                return;
              }
              if (b == null) {
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
              yield b.startCapture();
            }),
            "startCapture",
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          R.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (v != null) {
                (yield v.stopCapture(), (v = null));
                return;
              }
              if (b == null) {
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                    ])),
                );
                return;
              }
              (yield b.stopCapture(), (b = null));
            }),
            "stopCapture",
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          L.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (S == null &&
                (S = new (o(
                  "WAWebVoipAudioPlaybackBase",
                ).WAWebVoipAudioPlaybackBase)()),
                yield S.initPlaybackDriver(e),
                o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                  e.sample_rate,
                ));
            }),
            "initPlaybackDriver",
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          L.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (S == null) {
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                      ])),
                  )
                  .sendLogs("voip: playback instance is null");
                return;
              }
              yield S.startPlayback();
            }),
            "startPlayback",
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          L.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (S == null) {
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                    ])),
                );
                return;
              }
              (yield S.stopPlayback(),
                (S = null),
                o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                  null,
                ));
            }),
            "stopPlayback",
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = new (o("WAResolvable").Resolvable)();
          return (
            R.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (v != null) {
                    (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchAudioInputDevice] virtual capture active, ignoring device switch",
                        ])),
                    ),
                      a.resolve(!0));
                    return;
                  }
                  if (b == null) {
                    (o("WALogger").ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchAudioDevice] capture instance is null.",
                        ])),
                    ),
                      a.resolve(!1));
                    return;
                  }
                  var n = yield b.switchDevice(e, t, r);
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
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            L.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var n,
                    r = (n = S) == null ? void 0 : n.getAudioElement(),
                    a = yield o(
                      "WAWebAudioDeviceManager",
                    ).switchAudioOutputDeviceInternal(e, r);
                  t.resolve(a);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
        G.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.initCaptureDriverJS = x),
      (l.startCaptureJS = P),
      (l.stopCaptureJS = M),
      (l.initPlaybackDriverJS = A),
      (l.startPlaybackJS = O),
      (l.stopPlaybackJS = W),
      (l.switchAudioInputDevice = U),
      (l.switchAudioOutputDevice = H));
  },
  98,
);
