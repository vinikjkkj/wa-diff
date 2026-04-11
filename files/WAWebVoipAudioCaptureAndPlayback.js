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
      g = null,
      h = null,
      y = null,
      C = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      b = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      );
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          C.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (v()) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [VirtualAudioCapture] Creating virtual audio capture driver",
                    ])),
                ),
                  h != null && (yield h.stopCapture()),
                  (h = new (o(
                    "WAWebVoipVirtualAudioCaptureDriver",
                  ).WAWebVoipVirtualAudioCaptureDriver)()),
                  yield h.initCaptureDriver(t));
                return;
              }
              (g == null &&
                (g = new (o(
                  "WAWebVoipAudioCaptureBase",
                ).WAWebVoipAudioCaptureBase)()),
                yield g.initCaptureDriver(t));
            }),
            "initCaptureDriver",
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          C.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (h != null) {
                yield h.startCapture();
                return;
              }
              if (g == null) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                      ])),
                  )
                  .sendLogs("voip: capture instance is null");
                return;
              }
              yield g.startCapture();
            }),
            "startCapture",
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          C.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (h != null) {
                (yield h.stopCapture(), (h = null));
                return;
              }
              if (g == null) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                    ])),
                );
                return;
              }
              (yield g.stopCapture(), (g = null));
            }),
            "stopCapture",
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          b.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (y == null &&
                (y = new (o(
                  "WAWebVoipAudioPlaybackBase",
                ).WAWebVoipAudioPlaybackBase)()),
                yield y.initPlaybackDriver(e),
                o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                  e.sample_rate,
                ));
            }),
            "initPlaybackDriver",
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          b.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (y == null) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                      ])),
                  )
                  .sendLogs("voip: playback instance is null");
                return;
              }
              yield y.startPlayback();
            }),
            "startPlayback",
          );
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
          b.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (y == null) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                    ])),
                );
                return;
              }
              (yield y.stopPlayback(),
                (y = null),
                o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
                  null,
                ));
            }),
            "stopPlayback",
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = new (o("WAResolvable").Resolvable)();
          return (
            C.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  if (h != null) {
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchAudioInputDevice] virtual capture active, ignoring device switch",
                        ])),
                    ),
                      a.resolve(!0));
                    return;
                  }
                  if (g == null) {
                    (o("WALogger").ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchAudioDevice] capture instance is null.",
                        ])),
                    ),
                      a.resolve(!1));
                    return;
                  }
                  var n = yield g.switchDevice(e, t, r);
                  a.resolve(n);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            b.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var n,
                    r = (n = y) == null ? void 0 : n.getAudioElement(),
                    a = yield o(
                      "WAWebAudioDeviceManager",
                    ).switchAudioOutputDeviceInternal(e, r);
                  t.resolve(a);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
        F.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.initCaptureDriverJS = S),
      (l.startCaptureJS = L),
      (l.stopCaptureJS = k),
      (l.initPlaybackDriverJS = T),
      (l.startPlaybackJS = x),
      (l.stopPlaybackJS = P),
      (l.switchAudioInputDevice = M),
      (l.switchAudioOutputDevice = A));
  },
  98,
);
