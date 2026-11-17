__d(
  "WAWebVoipBackgroundSegmentationCadence",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 16.666666666666668,
      l = 0.8,
      s = 4,
      u = 0.1,
      c = 250,
      d = 1e3;
    function m(e, t) {
      return e == null ? t : e + (t - e) * u;
    }
    var p = (function () {
      function t() {
        ((this.$1 = 1),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = null),
          (this.$5 = 0),
          (this.$6 = null),
          (this.$7 = null));
      }
      var n = t.prototype;
      return (
        (n.startFrame = function (t) {
          var e = this.$4;
          return (
            (this.$4 = t),
            (this.$3 = t),
            e == null
              ? ((this.$5 = t), "fresh")
              : t - e > c
                ? "fresh"
                : this.$2 + 1 >= this.$1
                  ? "segment"
                  : "reuse"
          );
        }),
        (n.finishFrame = function (t, n) {
          var e = t - this.$3;
          return (
            n
              ? ((this.$2 = 0), (this.$6 = m(this.$6, e)))
              : (this.$2++, (this.$7 = m(this.$7, e))),
            this.$8(t)
          );
        }),
        (n.$8 = function (n) {
          var t,
            r = this.$6;
          if (r == null || n - this.$5 < d) return null;
          var o = (t = this.$7) != null ? t : 0,
            a = function (t) {
              return (r + (t - 1) * o) / t;
            },
            i = this.$1;
          if (i < s && a(i) > e) i++;
          else if (i > 1 && a(i - 1) <= l * e) i--;
          else return null;
          return (
            (this.$1 = i),
            (this.$5 = n),
            {
              averageMs: a(i),
              budgetMs: e,
              reusedMs: o,
              segmentedMs: r,
              stride: i,
            }
          );
        }),
        t
      );
    })();
    i.WAWebVoipBackgroundSegmentationCadence = p;
  },
  66,
);
