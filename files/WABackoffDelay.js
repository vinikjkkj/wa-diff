__d(
  "WABackoffDelay",
  ["WAPromiseDelays", "WARetryableError", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { retries: 1 / 0 };
    async function s(t, n) {
      var a = babelHelpers.extends({}, e, t),
        i = a.delay,
        l = a.retries,
        s = a.signal,
        u = 0,
        c = Date.now(),
        d = null,
        m = function (t) {
          return Promise.reject(new (r("WARetryableError"))(t));
        };
      try {
        return ((c = Date.now()), await n(m, u, s));
      } catch (e) {
        if ((u++, !(e instanceof r("WARetryableError")))) throw e;
        d = e;
      }
      for (; u <= l; ) {
        var p = Date.now() - c,
          _ = i({ iterationCount: u, taskDuration: p });
        await o("WAPromiseDelays").delayMs(_, s);
        try {
          return ((c = Date.now()), await n(m, u, s));
        } catch (e) {
          if ((u++, !(e instanceof r("WARetryableError")))) throw e;
          d = e;
        }
      }
      if (!d)
        throw r("err")("assert: backoff completed without error or result");
      var f = d.source;
      throw f;
    }
    l.backoff = s;
  },
  98,
);
