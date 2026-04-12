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
      p = (function () {
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
                  m = t.sampleRate;
                ((this.playbackBuffer = l),
                  (this.playbackParams = {
                    sampleRate: m,
                    channels: a,
                    framesPerChunk: i,
                  }));
                var p = 256,
                  _ =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "initializeVoipWasm",
                    );
                this.playbackRingBuffer = new (o(
                  "WAWebAudioRingBuffer",
                ).WAWebAudioRingBuffer)(p, i, "Playback");
                var f = r.destination.channelCount;
                this.playbackScriptProcessor = r.createScriptProcessor(p, 1, f);
                var g = this.playbackScriptProcessor,
                  h = this.playbackRingBuffer,
                  y = this.playbackBuffer,
                  C = i * 4;
                (g != null &&
                  (g.onaudioprocess = function (t) {
                    try {
                      var r, a;
                      if (!n.isActive) return;
                      if (y == null) {
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
                          (r = h == null ? void 0 : h.getDataLength()) != null
                            ? r
                            : 0,
                        m = l,
                        p = l * 2;
                      if (d < m && y != null) {
                        var f = y;
                        _.requestAudioDataFromWasmVoip(f, C);
                        var g = Math.floor(f / 4),
                          b = C / 4,
                          v = _.GROWABLE_HEAP_F32().subarray(g, g + b),
                          S = d + v.length > p;
                        !S && h != null
                          ? h.write(v)
                          : o("WALogger").ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:ScriptProcessor:Playback] buffer overflow detected,\n                requested=",
                                  ", available=",
                                  ", max=",
                                  "",
                                ])),
                              v.length,
                              d,
                              p,
                            );
                      }
                      for (
                        var R =
                            (a = h == null ? void 0 : h.read(l)) != null
                              ? a
                              : new Float32Array(0),
                          L = 0;
                        L < i.numberOfChannels;
                        L++
                      )
                        i.getChannelData(L).set(R);
                      R.length < l &&
                        o("WALogger").WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:ScriptProcessor:Playback] under-run detected, requested=\n              ",
                              ", available=",
                              "",
                            ])),
                          l,
                          R.length,
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
                  }),
                  this.playbackAudioElement != null &&
                    (yield o(
                      "WAWebAudioDeviceManager",
                    ).applyPreferredAudioOutputDevice(
                      this.playbackAudioElement,
                      "AV:ScriptProcessor:Playback",
                    )),
                  (this.isActive = !0));
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WAWebVoipAudioPlaybackScriptProcessor = p;
  },
  98,
);
