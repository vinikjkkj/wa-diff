__d(
  "WAPttComposerWaveformRecorder",
  [
    "WANullthrows",
    "WAPttComposerRecorderPollableTimer",
    "WAPttComposerScaleWaveform",
    "WAStartAnimationLoop",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        var n = this;
        ((this.$2 = new (r("WAPttComposerRecorderPollableTimer"))()),
          (this.$3 = []),
          (this.$4 = []),
          (this.$5 = 0),
          (this.$10 = function () {
            n.$5 = Math.max(n.$5, n.$11());
            var e = n.$3.length / n.$1,
              t = Math.floor((n.getDuration() - e) * n.$1);
            if (t !== 0) {
              for (var r = 0; r < t; r++) n.$3.push(n.$5);
              n.$5 = 0;
            }
          }),
          (this.$12 = 0),
          (this.$7 = s(e)),
          e.connect(this.$7),
          (this.$1 = t));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          (this.$2.start(), this.$9());
        }),
        (t.stop = function () {
          var e;
          (this.$2.stop(), (e = this.$6) == null || e.call(this));
        }),
        (t.pause = function () {
          var e;
          (this.$2.pause(), (e = this.$6) == null || e.call(this));
        }),
        (t.resume = function () {
          (this.$2.resume(), this.$9());
        }),
        (t.$9 = function () {
          this.$6 = o("WAStartAnimationLoop").startAnimationLoop(this.$10);
        }),
        (t.$11 = function () {
          var e,
            t = r("WANullthrows")(this.$7);
          this.$8 =
            (e = this.$8) != null ? e : new Uint8Array(t.frequencyBinCount);
          var n = this.$8;
          return (
            t.getByteFrequencyData(n),
            Math.max.apply(Math, Array.from(n)) / 255
          );
        }),
        (t.commitSamples = function (t) {
          var e = Math.floor(t * this.$1),
            n = e - this.$4.length,
            o = this.$3.length - this.$12;
          if (!(n === 0 || o === 0)) {
            var a = this.$3.slice(this.$12, this.$3.length),
              i = r("WAPttComposerScaleWaveform")(a, n);
            for (var l of i) this.$4.push(l);
            this.$12 = this.$3.length;
          }
        }),
        (t.getSamples = function () {
          return this.$3;
        }),
        (t.getDuration = function () {
          var e,
            t = (e = this.$2.getTime()) != null ? e : 0;
          return t / 1e3;
        }),
        (t.getCorrectedSamples = function () {
          return this.$4;
        }),
        e
      );
    })();
    function s(e) {
      var t = e.context.createAnalyser();
      return (
        (t.fftSize = 32),
        (t.smoothingTimeConstant = 0),
        (t.minDecibels = -60),
        (t.maxDecibels = -10),
        t
      );
    }
    l.default = e;
  },
  98,
);
