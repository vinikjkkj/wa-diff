__d(
  "WAWebQueryMediaConnsBridge",
  [
    "WABackoffDelay",
    "WAPromiseBackoffs",
    "WAWebBackendErrors",
    "WAWebQueryMediaConnsJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3,
      s = 900 * 1e3,
      u = o("WAPromiseBackoffs").createTimer({
        algo: { type: "fibonacci", first: 0, second: 1 },
        max: s,
        jitter: 0.25,
      });
    function c(t) {
      return o("WABackoffDelay").backoff(
        {
          delay: function (n) {
            var t = n.taskDuration,
              r = e * u();
            return Math.max(r - t, 0);
          },
          signal: t,
        },
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = o("WAWebQueryMediaConnsJob").queryMediaConn(t);
            try {
              var r = yield n,
                a = r.authTTL,
                i = r.ttl;
              return (
                (a *= 1e3),
                (i *= 1e3),
                babelHelpers.extends({}, r, { authTTL: a, ttl: i })
              );
            } catch (t) {
              if (t instanceof o("WAWebBackendErrors").E507) throw t;
              if (
                t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                t.status >= 500
              )
                return e(t);
              throw t;
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    l.sendQueryMediaConn = c;
  },
  98,
);
