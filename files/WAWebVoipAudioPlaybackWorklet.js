__d(
  "WAWebVoipAudioPlaybackWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipWorkletPreload",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m() {
      return `
class WAWebVoipAudioPlaybackWorkletProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this._isProcessing = false;
    this._underrunCount = 0;

    // Internal ring buffer in worklet scope
    const bufferSize = options.processorOptions.bufferSize || 8192;
    this._buffer = new Float32Array(bufferSize);
    this._writePos = 0;
    this._readPos = 0;
    this._bufferSize = bufferSize;

    this.port.onmessage = (event) => {
      if (event.data.type === 'start') {
        this.port.postMessage({type: 'requestPlaybackData'});
      } else if (event.data.type === 'stop') {
        this._isProcessing = false;
      } else if (event.data.type === 'audioData') {
        // Write received audio data to internal buffer
        this._writeAudioData(event.data.audioData);
        if (!this._isProcessing) {
          this._isProcessing = true;
        }
      }
    };

    this.port.postMessage({type: 'ready'});
  }

  _getAvailableSpace() {
    return (
      (this._readPos - this._writePos - 1 + this._bufferSize) %
      this._bufferSize
    );
  }

  _getDataLength() {
    return (this._writePos - this._readPos + this._bufferSize) % this._bufferSize;
  }

  _writeAudioData(audioData) {
    if (audioData.length === 0) {
      return;
    }
    const availableSpace = this._getAvailableSpace();
    if (availableSpace < audioData.length) {
      const samplesToAdvance = Math.max(audioData.length - availableSpace + 4, 4);
      const alignedAdvance = Math.ceil(samplesToAdvance / 4) * 4;
      this._readPos = (this._readPos + alignedAdvance) % this._bufferSize;
    }
    if (this._writePos + audioData.length <= this._bufferSize) {
      this._buffer.set(audioData, this._writePos);
      this._writePos += audioData.length;
    } else {
      // Wrap-around: use subarray() to avoid allocating Float32Array views
      const partitionSizeFormer = this._bufferSize - this._writePos;
      const partitionSizeLatter = audioData.length - partitionSizeFormer;
      this._buffer.set(audioData.subarray(0, partitionSizeFormer), this._writePos);
      this._buffer.set(audioData.subarray(partitionSizeFormer), 0);
      this._writePos = partitionSizeLatter;
    }
  }

  _readAudioDataInto(outputBuffer, length) {
    const availableData = this._getDataLength();
    const samplesToRead = Math.min(length, availableData);
    if (samplesToRead === 0) {
      return 0;
    }
    if (this._readPos + samplesToRead <= this._bufferSize) {
      // Non-wrap-around case: copy directly from ring buffer to output
      outputBuffer.set(
        this._buffer.subarray(this._readPos, this._readPos + samplesToRead),
      );
      this._readPos += samplesToRead;
      return samplesToRead;
    }
    // Wrap-around case: copy in two parts directly to output buffer
    const partitionSizeFormer = this._bufferSize - this._readPos;
    const partitionSizeLatter = samplesToRead - partitionSizeFormer;
    outputBuffer.set(this._buffer.subarray(this._readPos, this._bufferSize), 0);
    outputBuffer.set(
      this._buffer.subarray(0, partitionSizeLatter),
      partitionSizeFormer,
    );
    this._readPos = partitionSizeLatter;
    return samplesToRead;
  }

  process(inputs, outputs, parameters) {
    if (!this._isProcessing || outputs.length === 0 || outputs[0].length === 0) {
      return true;
    }

    const output = outputs[0];
    const channelCount = output.length;
    const outputChannel = output[0];
    const frameCount = outputChannel.length;

    const availableData = this._getDataLength();

    if (availableData < frameCount * 2) {
      this.port.postMessage({type: 'requestPlaybackData'});
      if (availableData < frameCount) {
        this._underrunCount++;
        return true;
      }
    }

    // Write audio data directly into first output channel
    const samplesRead = this._readAudioDataInto(outputChannel, frameCount);
    if (samplesRead === frameCount) {
      // Copy to other channels if present
      for (let channel = 1; channel < channelCount; channel++) {
        output[channel].set(outputChannel);
      }
      this._underrunCount = 0;
    }

    return true;
  }
}

registerProcessor('voip-playback-worklet-processor', WAWebVoipAudioPlaybackWorkletProcessor);
`;
    }
    var p = (function () {
      function t() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.playbackBuffer = null),
          (this.playbackAudioElement = null),
          (this.playbackMediaStreamDestination = null),
          (this.playbackParams = null),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, m, "[AV:Worklet:Playback]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var n = t.prototype;
      return (
        (n.startAudioPlayback = async function (n) {
          var t = this,
            a = n.audioContext,
            i = n.channels,
            l = n.framesPerChunk,
            c = n.playbackBuffer,
            d = n.sampleRate;
          ((this.playbackBuffer = c),
            (this.playbackParams = {
              sampleRate: d,
              channels: i,
              framesPerChunk: l,
            }));
          try {
            if (
              (this.workletPreloadPromise != null &&
                (await this.workletPreloadPromise),
              !this.isWorkletPreloaded)
            ) {
              var p = m(),
                _ = new Blob([p], { type: "application/javascript" }),
                f = URL.createObjectURL(_);
              (await a.audioWorklet.addModule(f), URL.revokeObjectURL(f));
            }
            this.audioWorkletNode = new AudioWorkletNode(
              a,
              "voip-playback-worklet-processor",
              {
                numberOfInputs: 0,
                numberOfOutputs: 1,
                outputChannelCount: [i],
                processorOptions: { bufferSize: 8192 },
              },
            );
            var g = this.audioWorkletNode;
            g != null &&
              (g.port.onmessage = function (n) {
                var r = n.data;
                if (!(typeof r != "object" || r == null)) {
                  var a = r,
                    i = a.type;
                  if (i === "ready") {
                    var l;
                    ((t.isProcessorReady = !0),
                      (l = t.processorReadyResolvable) == null || l.resolve(),
                      (t.processorReadyResolvable = null));
                  } else if (i === "requestPlaybackData") t.sendAudioChunk();
                  else if (i === "underrun") {
                    var s = a.count;
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:Worklet:Playback] audio underrun detected, count=",
                          "",
                        ])),
                      s,
                    );
                  }
                }
              });
            var h = Date.now();
            await this.waitForProcessorReady();
            var y = Date.now() - h;
            ((this.playbackMediaStreamDestination =
              a.createMediaStreamDestination()),
              this.audioWorkletNode != null &&
                this.audioWorkletNode.connect(
                  this.playbackMediaStreamDestination,
                ),
              (this.playbackAudioElement = new Audio()),
              this.playbackMediaStreamDestination != null &&
                (this.playbackAudioElement.srcObject =
                  this.playbackMediaStreamDestination.stream),
              this.playbackAudioElement.play().catch(function (e) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Playback] audio element play failed: ",
                      "",
                    ])),
                  e,
                );
              }),
              this.playbackAudioElement != null &&
                (await o(
                  "WAWebAudioDeviceManager",
                ).applyPreferredAudioOutputSink(
                  this.playbackAudioElement,
                  "AV:Worklet:Playback",
                )),
              this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "start" }));
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Playback] failed to start playback: ",
                    "",
                  ])),
                e,
              ),
              r("err")("voip: [AV:Worklet:Playback] failed to start playback")
            );
          }
        }),
        (n.waitForProcessorReady = async function () {
          var e = this,
            t = 5e3;
          if (!this.isProcessorReady) {
            this.processorReadyResolvable = new (o(
              "WAResolvable",
            ).Resolvable)();
            var n = window.setTimeout(function () {
              e.processorReadyResolvable != null &&
                (e.processorReadyResolvable.reject(
                  r("err")(
                    "voip: [AV:Worklet:Playback] processor failed to become ready within 5 second timeout",
                  ),
                ),
                (e.processorReadyResolvable = null));
            }, t);
            try {
              var a;
              await ((a = this.processorReadyResolvable) == null
                ? void 0
                : a.promise);
            } catch (e) {
              throw e;
            } finally {
              window.clearTimeout(n);
            }
          }
        }),
        (n.sendAudioChunk = function () {
          var e = this.playbackParams,
            t = this.playbackBuffer,
            n = this.audioWorkletNode;
          if (!(e == null || t == null || n == null))
            try {
              var r = e.framesPerChunk * 4,
                a = o("WAWebAudioUtility").requestAudioFromWasm(t, r),
                i = new Float32Array(a);
              n.port.postMessage({ type: "audioData", audioData: i }, [
                i.buffer,
              ]);
            } catch (e) {
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Playback] error sending audio chunk: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (n.stopAudioPlayback = async function () {
          try {
            if (
              (this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "stop" }),
              this.playbackAudioElement != null)
            ) {
              var e = this.playbackAudioElement;
              (e.pause(),
                (e.srcObject = null),
                (this.playbackAudioElement = null));
            }
            (this.audioWorkletNode &&
              (this.audioWorkletNode.disconnect(),
              (this.audioWorkletNode = null)),
              this.playbackMediaStreamDestination &&
                (this.playbackMediaStreamDestination.disconnect(),
                (this.playbackMediaStreamDestination = null)),
              (this.playbackBuffer = null),
              (this.playbackParams = null),
              (this.isProcessorReady = !1),
              (this.processorReadyResolvable = null),
              (this.isWorkletPreloaded = !1),
              (this.workletPreloadPromise = null));
          } catch (e) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:Worklet:Playback] cleanup error: ",
                  "",
                ])),
              e,
            );
          }
        }),
        (n.getAudioElement = function () {
          return this.playbackAudioElement;
        }),
        (n.getEstimatedOutputLagSamples = function () {
          return 0;
        }),
        t
      );
    })();
    l.WAWebVoipAudioPlaybackWorklet = p;
  },
  98,
);
