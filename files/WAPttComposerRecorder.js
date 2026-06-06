__d(
  "WAPttComposerRecorder",
  [
    "WAPttComposerOpusRecorder",
    "WAPttComposerWaveformRecorder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this._handleOpusRecorderDuration = function () {
          (t._waveformRecorder.commitSamples(t.getDuration()),
            t._onDuration == null || t._onDuration(t.getDuration()));
        }),
          (this._onDuration = e.onDuration),
          (this._opusRecorder = new (o(
            "WAPttComposerOpusRecorder",
          ).OpusRecorder)({
            createStream: e.createStream,
            onDuration: this._handleOpusRecorderDuration,
            onPage: function (n, r) {
              e.onPage == null || e.onPage(n, r);
            },
          })),
          (this._waveformRecorder = new (r("WAPttComposerWaveformRecorder"))(
            this._opusRecorder.getMonitorNode(),
            e.waveformSampleRate,
          )));
      }
      var t = e.prototype;
      return (
        (t.start = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield this._opusRecorder.start();
            return e ? (this._waveformRecorder.start(), !0) : !1;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.stop = function () {
          (this._opusRecorder.stop(), this._waveformRecorder.stop());
        }),
        (t.pause = function () {
          (this._opusRecorder.pause(), this._waveformRecorder.pause());
        }),
        (t.resume = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield this._opusRecorder.resume();
            return e ? (this._waveformRecorder.resume(), !0) : !1;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.getDuration = function () {
          return this._opusRecorder.getDuration();
        }),
        (t.getPreciseDuration = function () {
          var e;
          return (e = this._waveformRecorder.getDuration()) != null ? e : 0;
        }),
        (t.getLiveWaveformSamples = function () {
          return this._waveformRecorder.getSamples();
        }),
        (t.getCorrectedWaveformSamples = function () {
          return this._waveformRecorder.getCorrectedSamples();
        }),
        (t.getPartialRecording = function () {
          return this._opusRecorder.getPartialRecording();
        }),
        (t.getCompleteRecording = function () {
          return this._opusRecorder.getCompleteRecording();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
