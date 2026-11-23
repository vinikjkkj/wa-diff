__d(
  "WormIDbRetry",
  ["getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      for (
        var t = e.fn, n = e.maxRetries, o = e.shouldRetry, a, i = 0;
        i <= n;
        i++
      ) {
        var l = void 0;
        if (i > 0 && ((l = r("getErrorSafe")(a)), !o({ attempt: i, error: l })))
          throw a;
        var s = void 0;
        try {
          s = await t({ attempt: i, error: l });
        } catch (e) {
          a = e;
          continue;
        }
        return s;
      }
      throw a;
    }
    l.withRetry = e;
  },
  98,
);
