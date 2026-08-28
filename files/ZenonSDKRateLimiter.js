__d(
  "ZenonSDKRateLimiter",
  ["TokenBucketRateLimit", "ZenonPlatformRateLimitSitevarConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.take = function (t, n) {
          n === void 0 && (n = 1);
          var e = this.$2(t);
          return e.take(n);
        }),
        (t.$2 = function (t) {
          var e,
            n = this.$1.get(t);
          if (n) return n;
          var o =
            (e = r(
              "ZenonPlatformRateLimitSitevarConfig.experimental",
            ).buckets.get(t)) != null
              ? e
              : r("ZenonPlatformRateLimitSitevarConfig.experimental").default;
          return (
            (n = new (r("TokenBucketRateLimit"))(o.bucket_size, o.refill_rate)),
            this.$1.set(t, n),
            n
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
