__d(
  "WAWebVoipAudioPlaybackScriptProcessor",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebAudioRingBuffer",
    "WAWebBackendApi",
    "WAWebNoop",
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
      h = (function () {
        function t() {
          ((this.playbackScriptProcessor = null),
            (this.playbackRingBuffer = null),
            (this.playbackBuffer = null),
            (this.playbackAudioElement = null),
            (this.playbackMediaStreamDestination = null),
            (this.playbackParams = null),
            (this.isActive = !1));
        }
        var a = t.prototype;
        return (
          (a.startAudioPlayback = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r = t.audioContext,
                  a = t.channels,
                  i = t.framesPerChunk,
                  l = t.playbackBuffer,
                  g = t.sampleRate;
                ((this.playbackBuffer = l),
                  (this.playbackParams = {
                    sampleRate: g,
                    channels: a,
                    framesPerChunk: i,
                  }));
                var h = 256,
                  y =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "initializeVoipWasm",
                    );
                this.playbackRingBuffer = new (o(
                  "WAWebAudioRingBuffer",
                ).WAWebAudioRingBuffer)(h, i, "Playback");
                var C = r.destination.channelCount;
                this.playbackScriptProcessor = r.createScriptProcessor(h, 1, C);
                var b = this.playbackScriptProcessor,
                  v = this.playbackRingBuffer,
                  S = this.playbackBuffer,
                  R = i * 4;
                (b != null &&
                  (b.onaudioprocess = function (t) {
                    try {
                      var r, a;
                      if (!n.isActive) return;
                      if (S == null) {
                        o("WALogger").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:ScriptProcessor:Playback] playback buffer is null",
                            ])),
                        );
                        return;
                      }
                      var i = t.outputBuffer,
                        l = i.length,
                        d =
                          (r = v == null ? void 0 : v.getDataLength()) != null
                            ? r
                            : 0,
                        m = l,
                        p = l * 2;
                      if (d < m && S != null) {
                        var _ = S;
                        y.requestAudioDataFromWasmVoip(_, R);
                        var f = Math.floor(_ / 4),
                          g = R / 4,
                          h = y.GROWABLE_HEAP_F32().subarray(f, f + g),
                          C = d + h.length > p;
                        !C && v != null
                          ? v.write(h)
                          : o("WALogger").ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:ScriptProcessor:Playback] buffer overflow detected,\n                requested=",
                                  ", available=",
                                  ", max=",
                                  "",
                                ])),
                              h.length,
                              d,
                              p,
                            );
                      }
                      for (
                        var b =
                            (a = v == null ? void 0 : v.read(l)) != null
                              ? a
                              : new Float32Array(0),
                          L = 0;
                        L < i.numberOfChannels;
                        L++
                      )
                        i.getChannelData(L).set(b);
                      b.length < l &&
                        o("WALogger").WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:ScriptProcessor:Playback] under-run detected, requested=\n              ",
                              ", available=",
                              "",
                            ])),
                          l,
                          b.length,
                        );
                    } catch (e) {
                      o("WALogger").ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:ScriptProcessor:Playback] audio processing error: ",
                            "",
                          ])),
                        e,
                      );
                    }
                  }),
                  (this.playbackMediaStreamDestination =
                    r.createMediaStreamDestination()),
                  this.playbackScriptProcessor != null &&
                    this.playbackScriptProcessor.connect(
                      this.playbackMediaStreamDestination,
                    ),
                  (this.playbackAudioElement = new Audio()),
                  this.playbackMediaStreamDestination != null &&
                    (this.playbackAudioElement.srcObject =
                      this.playbackMediaStreamDestination.stream),
                  this.playbackAudioElement.play().catch(function (e) {
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:ScriptProcessor:Playback] audio element play failed: ",
                          "",
                        ])),
                      e,
                    );
                  }));
                var L = o(
                  "WAWebAudioDeviceManager",
                ).getCurrentSelectedAudioOutputDevice();
                if (
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor:Playback] applying saved output device preference: ",
                        "",
                      ])),
                    L != null ? L : "(none)",
                  ),
                  L != null && this.playbackAudioElement != null)
                ) {
                  var E = this.playbackAudioElement;
                  if (typeof E.setSinkId == "function")
                    try {
                      (yield E.setSinkId(L),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:ScriptProcessor:Playback] output device set successfully to ",
                              "",
                            ])),
                          L.slice(0, 8),
                        ));
                    } catch (e) {
                      var k = e instanceof Error ? e.name : String(e);
                      o("WALogger").WARN(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:ScriptProcessor:Playback] setSinkId failed for saved device ",
                            ": ",
                            "",
                          ])),
                        L.slice(0, 8),
                        k,
                      );
                    }
                  else
                    o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:ScriptProcessor:Playback] setSinkId not available, output will use browser default",
                        ])),
                    );
                }
                this.isActive = !0;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.stopAudioPlayback = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.isActive = !1;
              try {
                var e;
                if (this.playbackAudioElement != null) {
                  var t = this.playbackAudioElement;
                  (t.pause(),
                    (t.srcObject = null),
                    (this.playbackAudioElement = null));
                }
                (this.playbackScriptProcessor &&
                  ((this.playbackScriptProcessor.onaudioprocess =
                    r("WAWebNoop")),
                  this.playbackScriptProcessor.disconnect(),
                  (this.playbackScriptProcessor = null)),
                  this.playbackMediaStreamDestination &&
                    (this.playbackMediaStreamDestination.disconnect(),
                    (this.playbackMediaStreamDestination = null)),
                  (e = this.playbackRingBuffer) == null || e.reset(),
                  (this.playbackRingBuffer = null),
                  (this.playbackBuffer = null),
                  (this.playbackParams = null));
              } catch (e) {
                o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:ScriptProcessor:Playback] cleanup error: ",
                      "",
                    ])),
                  e,
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getAudioElement = function () {
            return this.playbackAudioElement;
          }),
          t
        );
      })();
    l.WAWebVoipAudioPlaybackScriptProcessor = h;
  },
  98,
);
