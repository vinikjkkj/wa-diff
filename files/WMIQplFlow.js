__d(
  "WMIQplFlow",
  ["QPLEvent", "QPLFlow", "WMIInMemoryTokenBucketRateLimiter", "WmiOds"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "wmi_qpl_rate_limiter",
      u = "rate_limit_hit",
      c = 1e4,
      d = 3600 * 1e3,
      m = { capacity: c, refillIntervalMs: d / c },
      p = null;
    function _(t, n) {
      var r = (e || (e = o("QPLEvent"))).getMarkerId(t);
      if (f().check(String(r)).allowed) {
        var a;
        return o("QPLFlow").startQPLFlow(
          t,
          babelHelpers.extends({}, n, {
            annotations: babelHelpers.extends(
              {},
              n == null ? void 0 : n.annotations,
              {
                bool: babelHelpers.extends(
                  {},
                  n == null || (a = n.annotations) == null ? void 0 : a.bool,
                  { wmi_qpl_flow: !0 },
                ),
              },
            ),
          }),
        );
      }
      return (
        o("WmiOds").wmiOdsBump(s, u + "." + r),
        o("QPLFlow").startNoopQPLFlow()
      );
    }
    function f() {
      return (
        p == null &&
          (p = new (o(
            "WMIInMemoryTokenBucketRateLimiter",
          ).WMIInMemoryTokenBucketRateLimiter)(m)),
        p
      );
    }
    l.startQplFlow = _;
  },
  98,
);
