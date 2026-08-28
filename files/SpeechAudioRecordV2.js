__d(
  "SpeechAudioRecordV2",
  ["FBLogger", "asyncToGeneratorRuntime", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "SpeechAudioRecorder",
      s = 24e3,
      u = 512,
      c = "recorder-worklet-processor",
      d =
        '\n\nclass RecorderWorkletProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n  }\n\n  process(\n    inputs,\n    outputs,\n    parameters,\n  ) {\n    const input = inputs[0];\n    if (input.length > 0) {\n      const channelData = input[0];\n      this.port.postMessage(channelData);\n    }\n    return true;\n  }\n}\n\n\nregisterProcessor("' +
        c +
        '", RecorderWorkletProcessor);\n\n  ',
      m = new Blob([d], { type: "application/javascript" }),
      p = URL.createObjectURL(m),
      _ = (function () {
        function t(e, t, n, r, o) {
          (e === void 0 && (e = s),
            t === void 0 && (t = 1),
            n === void 0 && (n = "float32"),
            r === void 0 && (r = u),
            o === void 0 && (o = !1),
            (this.audioContext = null),
            (this.recorderNode = null),
            (this.stream = null),
            (this.source = null),
            (this.listeners = new Set()),
            (this.sampleRate = e),
            (this.channels = t),
            (this.outputFormat = n),
            (this.amplitudeSampleRate = r),
            (this.amplitudeListeners = new Set()),
            (this.amplitudeSampleRateCounter = 0),
            (this.pendingAmplitude = 0),
            (this.shouldResampleInput = o));
        }
        var o = t.prototype;
        return (
          (o.$1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = new AudioContext(
                this.shouldResampleInput ? {} : { sampleRate: this.sampleRate },
              );
              return (
                yield e.audioWorklet.addModule(p),
                (this.audioContext = e),
                e
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.$2 = function (t) {
            for (
              var e = new ArrayBuffer(t.length * 2),
                n = new DataView(e),
                r = 0,
                o = 0;
              o < t.length;
              o++, r += 2
            ) {
              var a = Math.max(-1, Math.min(1, t[o]));
              n.setInt16(r, a < 0 ? a * 32768 : a * 32767, !0);
            }
            return e;
          }),
          (o.$3 = function (t) {
            var e = this;
            if (this.amplitudeListeners.size !== 0) {
              for (var n of t)
                this.pendingAmplitude = Math.max(
                  this.pendingAmplitude,
                  Math.abs(n),
                );
              ((this.amplitudeSampleRateCounter += t.length),
                this.amplitudeSampleRateCounter >= this.amplitudeSampleRate &&
                  (this.amplitudeListeners.forEach(function (t) {
                    return t(e.pendingAmplitude);
                  }),
                  (this.amplitudeSampleRateCounter = 0),
                  (this.pendingAmplitude = 0)));
            }
          }),
          (o.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = t.createBuffer(1, e.length, t.sampleRate);
                n.copyToChannel(e, 0);
                var r = new OfflineAudioContext({
                    numberOfChannels: this.channels,
                    length: (e.length * this.sampleRate) / t.sampleRate,
                    sampleRate: this.sampleRate,
                  }),
                  o = r.createBufferSource();
                return (
                  (o.buffer = n),
                  o.connect(r.destination),
                  o.start(),
                  (yield r.startRendering()).getChannelData(0)
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = this,
                o = (e = this.audioContext) != null ? e : yield this.$1(),
                a = r("nullthrows")(
                  navigator.mediaDevices,
                  "Mising 'navigator.mediaDevices', are you using an old browser?",
                ),
                i = {
                  audio: {
                    sampleRate: this.sampleRate,
                    channelCount: this.channels,
                    noiseSuppression: !0,
                    echoCancellation: !0,
                    autoGainControl: !0,
                  },
                };
              ((this.stream = yield a.getUserMedia(i)),
                (this.source = o.createMediaStreamSource(this.stream)),
                (this.recorderNode = new AudioWorkletNode(o, c)),
                (this.recorderNode.port.onmessage = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = t.shouldResampleInput
                          ? yield t.$4(e.data, o)
                          : e.data,
                        r;
                      (t.outputFormat === "int16"
                        ? (r = t.$2(n))
                        : (r = n.buffer),
                        t.listeners.forEach(function (e) {
                          return e(r);
                        }),
                        t.$3(n));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                r("nullthrows")(this.source)
                  .connect(this.recorderNode)
                  .connect(r("nullthrows")(this.audioContext).destination),
                o.state !== "running" &&
                  o.state !== "closed" &&
                  (yield o.resume()));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.start = function (n) {
            this.$5()
              .then(function () {
                n == null || n.onSuccess == null || n.onSuccess();
              })
              .catch(function (t) {
                (r("FBLogger")(e, "Recording failed to start").catching(t),
                  n == null || n.onError == null || n.onError(t));
              })
              .finally(function () {});
          }),
          (o.stop = function () {
            (this.stream &&
              this.stream.getTracks().forEach(function (e) {
                return e.stop();
              }),
              this.recorderNode &&
                r("nullthrows")(this.recorderNode).disconnect(),
              this.source && r("nullthrows")(this.source).disconnect());
          }),
          (o.addListener = function (t) {
            this.listeners.add(t);
          }),
          (o.removeListener = function (t) {
            this.listeners.delete(t);
          }),
          (o.addAmplitudeListener = function (t) {
            this.amplitudeListeners.add(t);
          }),
          (o.getSamplingRate = function () {
            return this.sampleRate;
          }),
          t
        );
      })(),
      f = _;
    l.default = f;
  },
  98,
);
