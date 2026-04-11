__d(
  "failCometInteraction",
  ["interaction-tracing"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(t) {
      var n = t != null ? t : "";
      return n.length > e ? n.slice(0, e) + "..." : n;
    }
    function u(e) {
      var t = r(
        "interaction-tracing",
      ).InteractionTracingCore.getPendingInteractions();
      t.forEach(function (t) {
        var n,
          r = t.getConfigAndDependencies().cfg,
          o = r.failLoggingFixCometErrorBoundary,
          a = r.failOnCometErrorBoundary;
        if (a !== "disabled") {
          t.addAnnotation("failType", "failCometInteraction");
          var i = s(
            (n = e == null ? void 0 : e.message) != null ? n : "unknown",
          );
          o &&
            (a === "fail"
              ? t.failTrace(i, !0)
              : t.addMetadata("errorComponent", i));
        }
      });
    }
    l.default = u;
  },
  98,
);
