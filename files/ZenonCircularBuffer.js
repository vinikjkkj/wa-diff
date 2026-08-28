__d(
  "ZenonCircularBuffer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$2 = e < 0 ? 0 : e),
          (this.$1 = new Array(this.$2).fill(0)));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          this.$1.length !== 0 &&
            ((this.$1[this.$3 % this.$2] = t),
            this.$3++,
            this.$3 > this.$2 && (this.$4 = (this.$4 + 1) % this.$2));
        }),
        (t.getAvg = function () {
          var e = this.$1.length;
          if (e <= 0) return null;
          var t = this.$1.slice(0, this.$3);
          return t.length > 0
            ? Number(
                t
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0)
                  .toPrecision(10),
              ) / t.length
            : 0;
        }),
        (t.getDelta = function () {
          return this.$1.length <= 0
            ? null
            : this.$3 > 0
              ? this.$2 === 1
                ? Number(this.$1[this.$4])
                : this.$3 < this.$2
                  ? Number(this.$1[this.$3 - 1])
                  : Number(this.$1[(this.$3 - 1) % this.$2] - this.$1[this.$4])
              : 0;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
