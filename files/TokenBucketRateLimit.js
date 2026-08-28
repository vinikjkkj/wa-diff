__d(
  "TokenBucketRateLimit",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = (function () {
        function t(t, n) {
          ((this.$1 = t * e),
            (this.$2 = t * e),
            (this.$3 = Date.now()),
            (this.$4 = n * e));
        }
        var n = t.prototype;
        return (
          (n.take = function (n) {
            n === void 0 && (n = 1);
            var t = n * e;
            return (this.$5(), this.$2 < t ? !1 : ((this.$2 -= t), !0));
          }),
          (n.$5 = function () {
            if (!(this.$2 >= this.$1)) {
              var e = Date.now(),
                t = (e - this.$3) / o("DateConsts").MS_PER_SEC,
                n = Math.round(t * this.$4);
              n !== 0 &&
                ((this.$2 = Math.min(this.$1, this.$2 + n)), (this.$3 = e));
            }
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
