__d(
  "oz-player/strategies/OzStreamSegmentsCountCalculator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1,
      l = (function () {
        function t(e) {
          this.$1 = e;
        }
        var n = t.prototype;
        return (
          (n.computeMin = function (n, r, o) {
            var t = Number.MAX_VALUE;
            for (var a of this.$1)
              a.isActive(n) && (t = Math.min(t, a.getSegmentsCount(n, r, o)));
            return t === Number.MAX_VALUE ? e : Math.max(t, e);
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
