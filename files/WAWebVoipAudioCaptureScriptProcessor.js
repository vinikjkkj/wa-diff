__d(
  "WAWebVoipAudioCaptureScriptProcessor",
  [
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebNoop",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipMicrophoneLevelReporter",
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
      _ = (function () {
        function t() {
          ((this.scriptProcessor = null),
            (this.captureRingBuffer = null),
            (this.audioBuffer = null),
            (this.captureParams = null),
            (this.inputLevelReporter = null));
        }
        var a = t.prototype;
        return (
          (a.startAudioCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r = t.audioBuffer,
                  a = t.audioContext,
                  i = t.channels,
                  l = t.framesPerChunk,
                  u = t.mediaStreamSource,
                  c = t.onInputLevel,
                  d = t.sampleRate;
                ((this.audioBuffer = r),
                  (this.captureParams = {
                    sampleRate: d,
                    channels: i,
                    framesPerChunk: l,
                  }),
                  (this.inputLevelReporter =
                    c != null
                      ? new (o(
                          "WAWebVoipMicrophoneLevelReporter",
                        ).WAWebVoipMicrophoneLevelReporter)(
                          c,
                          "ScriptProcessor",
                        )
                      : null));
                var m = 256;
                ((this.captureRingBuffer = new (o(
                  "WAWebAudioRingBuffer",
                ).WAWebAudioRingBuffer)(m, l, "Capture")),
                  (this.scriptProcessor = a.createScriptProcessor(m, i, i)),
                  u.connect(this.scriptProcessor),
                  this.scriptProcessor != null &&
                    this.scriptProcessor.connect(a.destination),
                  this.scriptProcessor != null &&
                    (this.scriptProcessor.onaudioprocess = function (t) {
                      var r = n.captureParams,
                        a = n.audioBuffer,
                        i = n.captureRingBuffer;
                      if (!(!r || a == null)) {
                        var l = null;
                        try {
                          for (
                            var s = t.inputBuffer.sampleRate, u = [], c = 0;
                            c < r.channels;
                            c++
                          )
                            u.push(t.inputBuffer.getChannelData(c));
                          l = o("WAWebAudioUtility").interleaveTypedArrays(
                            Float32Array,
                            u,
                          );
                          var d = o("WAWebAudioUtility").maybeDownsampleBuffer(
                            l,
                            s,
                            r.sampleRate,
                          );
                          (i != null && i.write(d),
                            i != null &&
                              a != null &&
                              o(
                                "WAWebVoipAudioCaptureBase",
                              ).WAWebVoipAudioCaptureBase.processCapturedAudioChunks(
                                i,
                                a,
                                r.framesPerChunk,
                                r.channels,
                                l.length,
                                "ScriptProcessor",
                              ));
                        } catch (t) {
                          o("WALogger").ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:ScriptProcessor] audio processing error: ",
                                "",
                              ])),
                            t,
                          );
                        }
                        if (l != null) {
                          var m;
                          (m = n.inputLevelReporter) == null ||
                            m.report(l, r.channels);
                        }
                      }
                    }),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor] audio capture started +",
                      ])),
                  ));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.stopAudioCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:ScriptProcessor] stopping audio capture",
                  ])),
              );
              try {
                var e;
                (this.scriptProcessor &&
                  ((this.scriptProcessor.onaudioprocess = r("WAWebNoop")),
                  this.scriptProcessor.disconnect(),
                  (this.scriptProcessor = null),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor] disconnected script processor",
                      ])),
                  )),
                  (e = this.captureRingBuffer) == null || e.reset(),
                  (this.captureRingBuffer = null),
                  (this.audioBuffer = null),
                  (this.captureParams = null),
                  (this.inputLevelReporter = null),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor] cleanup completed",
                      ])),
                  ));
              } catch (e) {
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:ScriptProcessor] cleanup error: ",
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
          (a.reconnect = function (t) {
            this.scriptProcessor &&
              t &&
              (t.connect(this.scriptProcessor),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:ScriptProcessor] reconnected to new stream src",
                  ])),
              ));
          }),
          t
        );
      })();
    l.WAWebVoipAudioCaptureScriptProcessor = _;
  },
  98,
);
