__d(
  "oz-player/networks/OzClientClock",
  ["oz-player/shims/OzPerformance", "oz-player/utils/OzResourceTimingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e !== null) {
        var t = parseInt(e, 10);
        if (!isNaN(t)) return t;
      }
      return null;
    }
    var s = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = 0),
            (this.$2 = Date.now() - r("oz-player/shims/OzPerformance").now()));
        }
        var n = t.prototype;
        return (
          (n.updateOffsetFromHeaderResponse = function (n, r) {
            var t = e(r.get("x-fb-dynamic-server-wallclock-ms")),
              a = e(r.get("x-fb-dynamic-rtt-ms")),
              i = o(
                "oz-player/utils/OzResourceTimingUtils",
              ).getLatestResourceTimingEntry(n);
            if (
              t !== null &&
              a !== null &&
              i != null &&
              i.responseStart > 0 &&
              i.duration > 10
            ) {
              var l = i.requestStart + this.$2,
                s = t - l - a / 2;
              this.$1 = s;
            }
          }),
          (n.now = function () {
            var e;
            return (
              r("oz-player/shims/OzPerformance").now() +
              this.$2 +
              ((e = this.$1) != null ? e : 0)
            );
          }),
          (n.getClientClockOffsetMs = function () {
            return this.$1;
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
