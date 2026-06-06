__d(
  "WAWebVoipAudioCaptureScriptProcessor",
  [
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebNoop",
    "WAWebVoipAudioCaptureBase",
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
            (this.captureParams = null));
        }
        var n = t.prototype;
        return (
          (n.startAudioCapture = async function (n) {
            var t = this,
              r = n.audioBuffer,
              a = n.audioContext,
              i = n.channels,
              l = n.framesPerChunk,
              u = n.mediaStreamSource,
              c = n.sampleRate;
            ((this.audioBuffer = r),
              (this.captureParams = {
                sampleRate: c,
                channels: i,
                framesPerChunk: l,
              }));
            var d = 256;
            ((this.captureRingBuffer = new (o(
              "WAWebAudioRingBuffer",
            ).WAWebAudioRingBuffer)(d, l, "Capture")),
              (this.scriptProcessor = a.createScriptProcessor(d, i, i)),
              u.connect(this.scriptProcessor),
              this.scriptProcessor != null &&
                this.scriptProcessor.connect(a.destination),
              this.scriptProcessor != null &&
                (this.scriptProcessor.onaudioprocess = function (n) {
                  try {
                    var r = t.captureParams,
                      a = t.audioBuffer,
                      i = t.captureRingBuffer;
                    if (!r || a == null) return;
                    for (
                      var l = n.inputBuffer.sampleRate, s = [], u = 0;
                      u < r.channels;
                      u++
                    )
                      s.push(n.inputBuffer.getChannelData(u));
                    var c = o("WAWebAudioUtility").interleaveTypedArrays(
                        Float32Array,
                        s,
                      ),
                      d = o("WAWebAudioUtility").maybeDownsampleBuffer(
                        c,
                        l,
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
                          c.length,
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
                }),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:ScriptProcessor] audio capture started +",
                  ])),
              ));
          }),
          (n.stopAudioCapture = async function () {
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
          }),
          (n.reconnect = function (t) {
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
