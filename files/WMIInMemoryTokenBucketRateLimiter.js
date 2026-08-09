__d(
  "WMIInMemoryTokenBucketRateLimiter",
  ["WATimeUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 18e5;
    function s(e) {
      var t = e.capacity,
        n = e.refillIntervalMs;
      if (!Number.isFinite(t) || t < 0 || !Number.isFinite(n) || n <= 0)
        throw r("err")("Invalid token bucket rate limit config");
    }
    var u = (function () {
      function t(e) {
        ((this.$1 = new Map()), (this.$3 = 0), s(e), (this.$2 = e));
      }
      var n = t.prototype;
      return (
        (n.check = function (t) {
          var e = { allowed: this.$4(t) };
          return (this.$5(), e);
        }),
        (n.$4 = function (t) {
          var e = this.$6(t);
          return (this.$7(e), e.tokens < 1 ? !1 : ((e.tokens -= 1), !0));
        }),
        (n.$6 = function (t) {
          var e = o("WATimeUtils").millisTime(),
            n = this.$1.get(t);
          return n == null
            ? ((n = {
                lastRefilledAtIntervalMs: e,
                lastTouchedMs: e,
                tokens: this.$2.capacity,
              }),
              this.$1.set(t, n),
              n)
            : ((n.lastTouchedMs = e), n);
        }),
        (n.$7 = function (t) {
          var e = o("WATimeUtils").millisTime();
          if (t.tokens >= this.$2.capacity) {
            t.lastRefilledAtIntervalMs = e;
            return;
          }
          var n = Math.max(0, e - t.lastRefilledAtIntervalMs),
            r = Math.floor(n / this.$2.refillIntervalMs);
          r !== 0 &&
            ((t.tokens = Math.min(this.$2.capacity, t.tokens + r)),
            (t.lastRefilledAtIntervalMs += r * this.$2.refillIntervalMs));
        }),
        (n.$5 = function () {
          var t = o("WATimeUtils").millisTime();
          if (!(t - this.$3 < e)) {
            this.$3 = t;
            var n = t - this.$2.capacity * this.$2.refillIntervalMs;
            for (var r of this.$1) {
              var a = r[0],
                i = r[1];
              i.lastTouchedMs <= n && this.$1.delete(a);
            }
          }
        }),
        t
      );
    })();
    l.WMIInMemoryTokenBucketRateLimiter = u;
  },
  98,
);
