__d(
  "ZenonHistogram",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return (e.value || 0) - (t.value || 0);
    }
    var l = (function () {
      function t() {
        ((this.$1 = []), (this.$2 = !0));
      }
      var n = t.prototype;
      return (
        (n.$3 = function () {
          (this.$2 === !1 && this.$1.sort(e), (this.$2 = !0));
        }),
        (n.add = function (t) {
          (this.$1.push(t), (this.$2 = !1));
        }),
        (n.getAvgAndPercentile = function (t, n) {
          this.$2 || this.$3();
          var e = n ? this.$1.filter(n) : this.$1;
          if (e.length === 0) return { avg: null, percentiles: null };
          var r =
              e.reduce(function (e, t) {
                return e + t.value;
              }, 0) / e.length,
            o = t.map(function (t) {
              var n = Math.min(100, Math.max(0, t)),
                r = ((e.length - 1) * n) / 100,
                o = Math.floor(r),
                a = Math.ceil(r);
              if (o === a) return e[o].value;
              var i = e[o].value * (a - r),
                l = e[a].value * (r - o);
              return i + l;
            });
          return { avg: r, percentiles: o };
        }),
        t
      );
    })();
    i.default = l;
  },
  66,
);
