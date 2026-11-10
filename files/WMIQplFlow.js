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
      m = new Map();
    function p(t, n, r) {
      var a,
        i = (e || (e = o("QPLEvent"))).getMarkerId(t),
        l = !_(r == null ? void 0 : r.maxFlowsPerHour).check(String(i)).allowed;
      if (
        l &&
        (o("WmiOds").wmiOdsBump(s, u + "." + i),
        (r == null ? void 0 : r.emitRateLimitedFlows) !== !0)
      )
        return o("QPLFlow").startNoopQPLFlow();
      var c = l
        ? { wmi_qpl_flow: !0, wmi_qpl_rate_limited: !0 }
        : { wmi_qpl_flow: !0 };
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
                c,
              ),
            },
          ),
        }),
      );
    }
    function _(e) {
      var t = e != null && Number.isFinite(e) && e >= 1 ? e : c,
        n = m.get(t);
      return (
        n == null &&
          ((n = new (o(
            "WMIInMemoryTokenBucketRateLimiter",
          ).WMIInMemoryTokenBucketRateLimiter)({
            capacity: t,
            refillIntervalMs: d / t,
          })),
          m.set(t, n)),
        n
      );
    }
    l.startQplFlow = p;
  },
  98,
);
