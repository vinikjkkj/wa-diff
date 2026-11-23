__d(
  "WMIRateLimiter",
  ["WATimeUtils", "WMIRateLimitDb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.key,
        n = e.limit,
        r = e.windowMs,
        a = o("WATimeUtils").unixTimeMs(),
        i = a - r,
        l = await o("WMIRateLimitDb").getRateLimitDb(),
        s = await l.runInTransaction(
          ["rateLimitAttempts"],
          "readwrite",
          async function (e) {
            var n = await e.stores.rateLimitAttempts.readIndexRange(
                "by_key_and_timestamp",
                {
                  greaterThanOrEqual: [
                    t,
                    o("WATimeUtils").castMilliSecondsToUnixTime(i),
                  ],
                },
              ),
              r = await e.stores.rateLimitAttempts.readIndexRange(
                "by_key_and_timestamp",
                {
                  greaterThanOrEqual: [
                    t,
                    o("WATimeUtils").castMilliSecondsToUnixTime(0),
                  ],
                  lessThan: [t, o("WATimeUtils").castMilliSecondsToUnixTime(i)],
                },
              );
            if (r.length > 0) {
              var a = r.map(function (e) {
                return e.id;
              });
              await e.stores.rateLimitAttempts.bulkDelete(a);
            }
            return n.length;
          },
          "checkRateLimit",
        ),
        u = s >= n;
      return { currentCount: s, limitBreached: u };
    }
    async function s(e) {
      var t = await o("WMIRateLimitDb").getRateLimitDb(),
        n = o("WATimeUtils").castMilliSecondsToUnixTime(
          o("WATimeUtils").unixTimeMs(),
        ),
        r = await t.runInTransaction(
          ["rateLimitAttempts"],
          "readwrite",
          async function (t) {
            var r = { key: e, timestamp: n },
              o = await t.stores.rateLimitAttempts.bulkAdd([r]),
              a = o[0];
            return { id: a, key: e, timestamp: n };
          },
          "recordAttempt",
        );
      return r;
    }
    async function u(t) {
      var n = await e(t);
      return (n.limitBreached || (await s(t.key)), n);
    }
    ((l.queryRateLimitStore = e),
      (l.recordAttempt = s),
      (l.checkAndRecordAttempt = u));
  },
  98,
);
