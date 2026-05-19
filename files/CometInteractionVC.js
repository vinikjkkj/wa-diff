__d(
  "CometInteractionVC",
  ["interaction-tracing-metrics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.get(e),
        r = n == null ? void 0 : n.vcTracker;
      r && r.addMutationRoot(t);
    }
    l.addMutationRootForTraceId = e;
  },
  98,
);
