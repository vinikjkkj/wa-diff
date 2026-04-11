__d(
  "WAOpusRecorderResampler",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t) {
      ((this.originalSampleRate = t.originalSampleRate),
        (this.numberOfChannels = t.numberOfChannels),
        (this.resampledRate = t.resampledRate),
        (this.lastSampleCache = []));
      for (var e = 0; e < this.numberOfChannels; e++)
        this.lastSampleCache[e] = [0, 0];
      this.resampledRate === this.originalSampleRate &&
        (this.resample = function (e) {
          return e;
        });
    };
    ((e.prototype.magicKernel = function (e) {
      return e < -0.5
        ? 0.5 * (e + 1.5) * (e + 1.5)
        : e > 0.5
          ? 0.5 * (e - 1.5) * (e - 1.5)
          : 0.75 - e * e;
    }),
      (e.prototype.resample = function (e, t) {
        for (
          var n = Math.round(
              (e.length * this.resampledRate) / this.originalSampleRate,
            ),
            r = e.length / n,
            o = new Float32Array(n),
            a = 0;
          a < n - 1;
          a++
        )
          for (var i = r - 1 + a * r, l = Math.round(i), s = -1; s < 2; s++) {
            var u = e[l + s] || this.lastSampleCache[t][1 + s] || e[l];
            o[a] += u * this.magicKernel(i - l - s);
          }
        return (
          (this.lastSampleCache[t][0] = e[e.length - 2]),
          (this.lastSampleCache[t][1] = o[n - 1] = e[e.length - 1]),
          o
        );
      }));
    var l = e;
    i.default = l;
  },
  66,
);
