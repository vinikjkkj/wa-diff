__d(
  "WMIQplFlow",
  ["QPLEvent", "QPLFlow", "WMIInMemoryTokenBucketRateLimiter", "WmiOds", "qex"],
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
      if (r("qex")._("2708") !== !0) return o("QPLFlow").startQPLFlow(t, n);
      var a = (e || (e = o("QPLEvent"))).getMarkerId(t);
      return f().check(String(a)).allowed
        ? o("QPLFlow").startQPLFlow(t, n)
        : (o("WmiOds").wmiOdsBump(s, u + "." + a),
          o("QPLFlow").startNoopQPLFlow());
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
