__d(
  "WAWebNewsletterRpcUtils",
  ["WAExponentialBackoff", "WAWebBackendErrors", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = { minTimeout: 1e3, retries: 3 },
      s = new Set([429, 500]);
    function u(t, r) {
      var a = r === void 0 ? { retryableErrorCodes: s } : r,
        i = a.retryableErrorCodes,
        l = new AbortController(),
        u = l.signal;
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, e, { signal: u }),
        (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, r) {
              try {
                return yield t();
              } catch (t) {
                if (
                  !(t instanceof o("WAWebBackendErrors").ServerStatusCodeError)
                )
                  throw t;
                var a = i.has(t.statusCode);
                if (a && r < e.retries) return n(t);
                throw t;
              }
            },
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
      );
    }
    l.runWithBackoff = u;
  },
  98,
);
