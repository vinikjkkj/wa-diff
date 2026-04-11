__d(
  "useCometReportErrorToHeroTracing",
  [
    "failCometInteraction",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime",
    "useHeroFailTrigger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = c(
          o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext,
        ),
        a = r("useHeroFailTrigger")(),
        i;
      return (
        t[0] !== n || t[1] !== a || t[2] !== e
          ? ((i = function (i, l) {
              var t,
                s,
                u = l === void 0 ? "CometErrorBoundary" : l,
                c = (t = n.current) == null ? void 0 : t.interactionUUID;
              if (c == null) {
                r("failCometInteraction")(i);
                return;
              }
              var d = r(
                  "interaction-tracing",
                ).InteractionTracingCore.getPendingInteractionById(c),
                m =
                  d == null || (s = d.getConfigAndDependencies()) == null
                    ? void 0
                    : s.cfg;
              ((m == null ? void 0 : m.failOnCometErrorBoundary) === "fail" &&
                (e == null || !e(i)) &&
                a({ error: i }),
                ((m == null ? void 0 : m.failOnCometErrorBoundary) === "fail" ||
                  (m == null ? void 0 : m.failOnCometErrorBoundary) ===
                    "annotate") &&
                  o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addAnnotation(
                    c,
                    "failType",
                    u,
                  ));
            }),
            (t[0] = n),
            (t[1] = a),
            (t[2] = e),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = d;
  },
  98,
);
