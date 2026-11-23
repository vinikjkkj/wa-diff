__d(
  "CSHelpCenterExperienceArm",
  ["ServerJsRuntimeEnvironment", "cr:22307", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()
        ? null
        : (e = n("cr:22307") == null ? void 0 : n("cr:22307")()) != null
          ? e
          : null;
    }
    function s(t) {
      var n = e();
      return n == null || r("justknobx")._("6075")
        ? t
        : babelHelpers.extends({}, t, {
            hc_latency_allocated: n.allocated ? "true" : "false",
            hc_latency_arm: n.arm,
            hc_latency_condition: n.condition,
          });
    }
    ((l.getResolvedArm = e), (l.withResolvedArm = s));
  },
  98,
);
