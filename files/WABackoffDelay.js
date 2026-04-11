__d(
  "WABackoffDelay",
  [
    "Promise",
    "WAPromiseDelays",
    "WARetryableError",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { retries: 1 / 0 };
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = babelHelpers.extends({}, s, t),
            l = i.delay,
            u = i.retries,
            c = i.signal,
            d = 0,
            m = Date.now(),
            p = null,
            _ = function (o) {
              return (e || (e = n("Promise"))).reject(
                new (r("WARetryableError"))(o),
              );
            };
          try {
            return ((m = Date.now()), yield a(_, d, c));
          } catch (e) {
            if ((d++, !(e instanceof r("WARetryableError")))) throw e;
            p = e;
          }
          for (; d <= u; ) {
            var f = Date.now() - m,
              g = l({ iterationCount: d, taskDuration: f });
            yield o("WAPromiseDelays").delayMs(g, c);
            try {
              return ((m = Date.now()), yield a(_, d, c));
            } catch (e) {
              if ((d++, !(e instanceof r("WARetryableError")))) throw e;
              p = e;
            }
          }
          if (!p)
            throw r("err")("assert: backoff completed without error or result");
          var h = p.source;
          throw h;
        })),
        c.apply(this, arguments)
      );
    }
    l.backoff = u;
  },
  98,
);
