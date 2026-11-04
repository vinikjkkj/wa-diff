__d(
  "WormIDbRetry",
  ["asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.fn, n = e.maxRetries, o = e.shouldRetry, a, i = 0;
            i <= n;
            i++
          ) {
            var l = void 0;
            if (
              i > 0 &&
              ((l = r("getErrorSafe")(a)), !o({ attempt: i, error: l }))
            )
              throw a;
            var s = void 0;
            try {
              s = yield t({ attempt: i, error: l });
            } catch (e) {
              a = e;
              continue;
            }
            return s;
          }
          throw a;
        })),
        s.apply(this, arguments)
      );
    }
    l.withRetry = e;
  },
  98,
);
