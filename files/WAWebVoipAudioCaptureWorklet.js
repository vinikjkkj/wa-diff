__d(
  "WAWebVoipAudioCaptureWorklet",
  [
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipWorkletPreload",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    function h() {
      return `
/**
 * AudioWorklet Processor for Capture (runs in AudioWorkletGlobalScope)
 */
class WAWebVoipAudioCaptureWorkletProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();

    const {channels} = options.processorOptions;
    this._channels = channels;
    this._isProcessing = false;

    this.port.onmessage = (event) => {
      if (event.data.type === 'start') {
        this._isProcessing = true;
      } else if (event.data.type === 'stop') {
        this._isProcessing = false;
      }
    };

    this.port.postMessage({type: 'ready'});
  }

  /**
   * Process input audio (called by browser at regular intervals)
   */
  process(inputs, outputs) {
    if (!this._isProcessing || inputs.length === 0 || inputs[0].length === 0) {
      return true;
    }

    const input = inputs[0];
    const channelCount = Math.min(input.length, this._channels);
    const frameCount = input[0].length; // Typically 128 frames

    // Interleave channels into single buffer
    const interleavedData = new Float32Array(frameCount * channelCount);
    for (let frame = 0; frame < frameCount; frame++) {
      for (let channel = 0; channel < channelCount; channel++) {
        interleavedData[frame * channelCount + channel] = input[channel][frame];
      }
    }
    // Send to main thread with sample rate.
    // (Sample rate is needed to detect Firefox sample rate mismatches)
    this.port.postMessage(
      {
        type: 'audioData',
        audioData: interleavedData,
        sampleRate: sampleRate, // Available from AudioWorkletGlobalScope
      },
      [interleavedData.buffer],
    );

    return true;
  }
}

registerProcessor('voip-capture-worklet-processor', WAWebVoipAudioCaptureWorkletProcessor);
  `;
    }
    var y = (function () {
      function t() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.audioBuffer = null),
          (this.captureRingBuffer = null),
          (this.captureParams = null),
          (this.isProcessorReady = !1),
          (this.mediaStreamSource = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, h, "[AV:Worklet:Capture]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var n = t.prototype;
      return (
        (n.startAudioCapture = async function (n) {
          var t = this,
            r = n.audioBuffer,
            a = n.audioContext,
            i = n.channels,
            l = n.framesPerChunk,
            d = n.mediaStreamSource,
            m = n.sampleRate;
          ((this.audioBuffer = r),
            (this.mediaStreamSource = d),
            (this.captureParams = {
              sampleRate: m,
              channels: i,
              framesPerChunk: l,
            }));
          var p = 128;
          this.captureRingBuffer = new (o(
            "WAWebAudioRingBuffer",
          ).WAWebAudioRingBuffer)(p, l, "CaptureWorklet");
          try {
            if (
              (this.workletPreloadPromise != null &&
                (await this.workletPreloadPromise),
              !this.isWorkletPreloaded)
            ) {
              var _ = h(),
                f = new Blob([_], { type: "application/javascript" }),
                g = URL.createObjectURL(f);
              (await a.audioWorklet.addModule(g),
                URL.revokeObjectURL(g),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] worklet processor module loaded",
                    ])),
                ));
            }
            this.audioWorkletNode = new AudioWorkletNode(
              a,
              "voip-capture-worklet-processor",
              {
                numberOfInputs: 1,
                numberOfOutputs: 0,
                processorOptions: { channels: i },
              },
            );
            var y = this.audioWorkletNode;
            (y != null &&
              (y.port.onmessage = function (e) {
                var n = e.data;
                if (!(typeof n != "object" || n == null)) {
                  var r = n,
                    a = r.type;
                  if (a === "ready")
                    ((t.isProcessorReady = !0),
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Capture] processor ready",
                          ])),
                      ));
                  else if (a === "audioData") {
                    var i = r.audioData,
                      l = r.sampleRate;
                    i instanceof Float32Array &&
                      typeof l == "number" &&
                      t.handleAudioData(i, l);
                  }
                }
              }),
              await this.waitForProcessorReady(),
              this.audioWorkletNode != null && d.connect(this.audioWorkletNode),
              this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "start" }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] capture started +",
                  ])),
              ));
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] failed to start capture: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        }),
        (n.waitForProcessorReady = async function () {
          var e = this,
            t = 50;
          return new Promise(function (n) {
            var r = function () {
              e.isProcessorReady ? n() : window.setTimeout(r, t);
            };
            r();
          });
        }),
        (n.handleAudioData = function (t, n) {
          var e = this.captureParams,
            r = this.audioBuffer,
            a = this.captureRingBuffer;
          if (!(e == null || r == null || a == null))
            try {
              var i = o("WAWebAudioUtility").maybeDownsampleBuffer(
                t,
                n,
                e.sampleRate,
              );
              (a.write(i),
                o(
                  "WAWebVoipAudioCaptureBase",
                ).WAWebVoipAudioCaptureBase.processCapturedAudioChunks(
                  a,
                  r,
                  e.framesPerChunk,
                  e.channels,
                  t.length,
                  "Worklet:Capture",
                ));
            } catch (e) {
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] error handling audio data: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (n.stopAudioCapture = async function () {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:Worklet:Capture] stopping audio capture",
              ])),
          );
          try {
            var e;
            (this.audioWorkletNode != null &&
              this.audioWorkletNode.port.postMessage({ type: "stop" }),
              this.audioWorkletNode &&
                (this.audioWorkletNode.disconnect(),
                (this.audioWorkletNode = null),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] disconnected worklet node",
                    ])),
                )),
              (e = this.captureRingBuffer) == null || e.reset(),
              (this.captureRingBuffer = null),
              (this.audioBuffer = null),
              (this.captureParams = null),
              (this.mediaStreamSource = null),
              (this.isProcessorReady = !1),
              (this.isWorkletPreloaded = !1),
              (this.workletPreloadPromise = null),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] cleanup completed",
                  ])),
              ));
          } catch (e) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:Worklet:Capture] cleanup error: ",
                  "",
                ])),
              e,
            );
          }
        }),
        (n.reconnect = function (t) {
          this.audioWorkletNode &&
            t &&
            (t.connect(this.audioWorkletNode),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:Worklet:Capture] reconnected to new stream",
                ])),
            ));
        }),
        t
      );
    })();
    l.WAWebVoipAudioCaptureWorklet = y;
  },
  98,
);
