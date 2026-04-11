__d(
  "StreamRetryState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e3,
      l = 120 * 1e3,
      s = (function () {
        function t() {
          this.$1 = 0;
        }
        var n = t.prototype;
        return (
          (n.resetErrorAndRetryCount = function () {
            this.$1 = 0;
          }),
          (n.onRetry = function () {
            this.$1 += 1;
          }),
          (n.getRetryCount = function () {
            return this.$1;
          }),
          (n.getBackoffDelayMs = function () {
            if (this.$1 <= 1) return 0;
            if (this.$1 === 2) return e * Math.random();
            var t = e * Math.pow(2, this.$1 - 3),
              n = t * Math.random(),
              r = t + n;
            return Math.min(r, l);
          }),
          t
        );
      })();
    i.default = s;
  },
  66,
);
