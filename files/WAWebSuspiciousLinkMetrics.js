__d(
  "WAWebSuspiciousLinkMetrics",
  [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6e4,
      c = [
        "attempt",
        "exception",
        "not-ready",
        "cache-exception",
        "init-exception",
      ],
      d = {
        attempt: 0,
        exception: 0,
        "not-ready": 0,
        "cache-exception": 0,
        "init-exception": 0,
      },
      m = "main",
      p,
      _,
      f = new (o("WAShiftTimer").ShiftTimer)(function () {
        y();
      });
    function g(e) {
      (d[e]++, S());
    }
    function h(e, t) {
      ((m = e), (p = t), v() && S());
    }
    function y() {
      if (_ != null) return _;
      f.cancel();
      var e = p;
      if (!v() || e == null) return (s || (s = n("Promise"))).resolve();
      var t = C(babelHelpers.extends({}, d), m, e).finally(function () {
        ((_ = null), v() && S());
      });
      return ((_ = t), t);
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          yield (s || (s = n("Promise"))).all(
            c.map(
              (function () {
                var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var l = t[n];
                    if (l !== 0)
                      try {
                        (yield i({ metric: n, realm: a, count: l })) &&
                          (d[n] -= l);
                      } catch (t) {
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Host-check metrics unavailable",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t));
                      }
                  },
                );
                return function (e) {
                  return l.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return c.some(function (e) {
        return d[e] > 0;
      });
    }
    function S() {
      _ == null && p != null && f.onOrBefore(u, void 0);
    }
    ((l.recordSuspiciousLinkMetric = g),
      (l.configureSuspiciousLinkMetrics = h),
      (l.flushSuspiciousLinkMetrics = y));
  },
  98,
);
