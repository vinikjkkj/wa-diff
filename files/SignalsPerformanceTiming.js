__d(
  "SignalsPerformanceTiming",
  ["invariant", "performanceNow", "requestAnimationFrame"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {},
      c = {};
    function d(e) {
      u[e] = u[e] == null ? 0 : u[e] + 1;
      var t = u[e];
      return { key: e + "_" + t, runCount: u[e] };
    }
    var m = (function () {
      function t(e, t) {
        var n = this;
        ((this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = 0),
          (this.$7 = function () {
            (n.$6++, n.$5 === !1 && r("requestAnimationFrame")(n.$7));
          }),
          (this.$2 = e),
          (this.$1 = d(e)),
          (this.$3 = t));
      }
      var n = t.prototype;
      return (
        (n.reset = function () {
          return (
            (this.$4 = !1),
            (this.$5 = !0),
            (this.$1 = d(this.$2)),
            (this.$6 = 0),
            this
          );
        }),
        (n.start = function () {
          return (
            this.$4 ||
              ((this.$4 = !0),
              (this.$5 = !1),
              (c[this.$1.key] = [(e || (e = r("performanceNow")))()]),
              this.$7()),
            this
          );
        }),
        (n.end = function () {
          if (!this.$5 && this.$4) {
            ((this.$5 = !0),
              c[this.$1.key].push((e || (e = r("performanceNow")))()));
            var t = c[this.$1.key];
            t.length === 2 || s(0, 4726);
            var n = t[0],
              o = t[1];
            this.$8(n, o - n);
          }
          return this;
        }),
        (n.$8 = function (t, n) {
          this.$3 &&
            this.$3({
              duration: n,
              frameCount: this.$6,
              runCount: this.$1.runCount,
              start: t,
            });
        }),
        t
      );
    })();
    l.default = m;
  },
  98,
);
