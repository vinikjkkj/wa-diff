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
    "WAWebVoipPerfOptimizations",
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
      E = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      k = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      I = !1;
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var a = yield H(n, r, !0);
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
        x.apply(this, arguments)
      );
    }
    function $() {
      I ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          D,
        ),
        (I = !0));
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ($(),
            E.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (T()) {
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
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          E.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              if (
                (yield S.startCapture(),
                o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                  o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                    .PLAYBACK_RESUME_FROM_CAPTURE,
                ))
              ) {
                var e,
                  t = (e = L) == null ? void 0 : e.playbackAudioContext;
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
              }
            }),
            "startCapture",
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          E.enqueue(
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          k.enqueue(
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
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k.enqueue(
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
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k.enqueue(
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
        V.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = new (o("WAResolvable").Resolvable)();
          return (
            E.enqueue(
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAResolvable").Resolvable)();
          return (
            k.enqueue(
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
        j.apply(this, arguments)
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.initCaptureDriverJS = P),
      (l.startCaptureJS = M),
      (l.stopCaptureJS = A),
      (l.initPlaybackDriverJS = O),
      (l.startPlaybackJS = W),
      (l.stopPlaybackJS = U),
      (l.switchAudioInputDevice = H),
      (l.switchAudioOutputDevice = z));
  },
  98,
);
