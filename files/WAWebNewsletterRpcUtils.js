__d(
  "WAWebNewsletterRpcUtils",
  ["WAExponentialBackoff", "WAWebBackendErrors"],
  function (t, n, r, o, a, i, l) {
    var e = { minTimeout: 1e3, retries: 3 },
      s = new Set([429, 500]);
    function u(t, n) {
      var r = n === void 0 ? { retryableErrorCodes: s } : n,
        a = r.retryableErrorCodes,
        i = new AbortController(),
        l = i.signal;
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, e, { signal: l }),
        async function (n, r) {
          try {
            return await t();
          } catch (t) {
            if (!(t instanceof o("WAWebBackendErrors").ServerStatusCodeError))
              throw t;
            var i = a.has(t.statusCode);
            if (i && r < e.retries) return n(t);
            throw t;
          }
        },
      );
    }
    l.runWithBackoff = u;
  },
  98,
);
