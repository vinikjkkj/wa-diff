__d(
  "WAWebVoipMicrophoneLevelAccumulator",
  ["WAWebVoipMicrophoneInputState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = 0), (this.$2 = 0), (this.$3 = 0), (this.$4 = null));
        }
        var t = e.prototype;
        return (
          (t.add = function (t, n, r) {
            this.$4 == null && (this.$4 = r);
            for (
              var e = Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1,
                o = Math.floor(t.length / e),
                a = 0,
                i = 0,
                l = 0;
              l < o;
              l++
            ) {
              for (var s = l * e, u = 0, c = 0; c < e; c++) u += t[s + c];
              ((u /= e), (a += u), (i += u * u));
            }
            ((this.$1 += a), (this.$2 += i), (this.$3 += o));
          }),
          (t.flushIfDue = function (t) {
            var e = this.$4;
            if (
              e == null ||
              t - e <
                o("WAWebVoipMicrophoneInputState").LEVEL_REPORT_INTERVAL_MS
            )
              return null;
            var n = u(this.$1, this.$2, this.$3);
            ((this.$1 = 0), (this.$2 = 0), (this.$3 = 0));
            var r = t - e;
            return (
              (this.$4 =
                t -
                (r %
                  o("WAWebVoipMicrophoneInputState").LEVEL_REPORT_INTERVAL_MS)),
              n
            );
          }),
          e
        );
      })(),
      s = -120;
    function u(e, t, n) {
      if (n === 0) return s;
      var r = e / n,
        o = t / n - r * r;
      return !(o > 0) || !Number.isFinite(o)
        ? s
        : Math.max(s, 10 * Math.log10(o));
    }
    ((l.WAWebVoipMicrophoneLevelAccumulator = e),
      (l.SILENCE_RMS_DBFS = s),
      (l.computeRmsDbfs = u));
  },
  98,
);
