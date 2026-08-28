__d(
  "ZenonDeltaMediaStat",
  ["median"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = []),
          (this.$2 = 0),
          (this.$3 = null),
          (this.$4 = 1 / 0),
          (this.$5 = -1 / 0));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          (this.$1.push(t),
            this.$2++,
            (this.$3 = t),
            (this.$4 = Math.min(this.$4, t)),
            (this.$5 = Math.max(this.$5, t)));
        }),
        (t.getLastAddedValue = function () {
          return this.$3;
        }),
        (t.getTotal = function () {
          return this.$1.reduce(function (e, t) {
            return e + t;
          }, 0);
        }),
        (t.getCount = function () {
          return this.$1.length;
        }),
        (t.getAverage = function () {
          return this.getTotal() / this.getCount();
        }),
        (t.getMin = function () {
          return this.$4;
        }),
        (t.getMax = function () {
          return this.$5;
        }),
        (t.getMedian = function () {
          return r("median")(this.$1);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
