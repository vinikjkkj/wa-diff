__d(
  "WAWebSuspiciousLinkMetrics",
  ["WALogger", "WAShiftTimer", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 6e4,
      u = [
        "attempt",
        "exception",
        "not-ready",
        "cache-exception",
        "init-exception",
      ],
      c = {
        attempt: 0,
        exception: 0,
        "not-ready": 0,
        "cache-exception": 0,
        "init-exception": 0,
      },
      d = "main",
      m,
      p,
      _ = new (o("WAShiftTimer").ShiftTimer)(function () {
        h();
      });
    function f(e) {
      (c[e]++, b());
    }
    function g(e, t) {
      ((d = e), (m = t), C() && b());
    }
    function h() {
      if (p != null) return p;
      _.cancel();
      var e = m;
      if (!C() || e == null) return Promise.resolve();
      var t = y(babelHelpers.extends({}, c), d, e).finally(function () {
        ((p = null), C() && b());
      });
      return ((p = t), t);
    }
    async function y(t, n, a) {
      await Promise.all(
        u.map(async function (i) {
          var l = t[i];
          if (l !== 0)
            try {
              (await a({ metric: i, realm: n, count: l })) && (c[i] -= l);
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
        }),
      );
    }
    function C() {
      return u.some(function (e) {
        return c[e] > 0;
      });
    }
    function b() {
      p == null && m != null && _.onOrBefore(s, void 0);
    }
    ((l.recordSuspiciousLinkMetric = f),
      (l.configureSuspiciousLinkMetrics = g),
      (l.flushSuspiciousLinkMetrics = h));
  },
  98,
);
