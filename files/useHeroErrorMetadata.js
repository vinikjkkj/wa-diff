__d(
  "useHeroErrorMetadata",
  [
    "QPLEvent",
    "fb-error",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useContext;
    function m() {
      var e = o("react-compiler-runtime").c(3),
        t = d(
          o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext,
        ),
        n = d(o("hero-tracing-placeholder").HeroInteractionContext.Context),
        a = n.pageletStack,
        i;
      return (
        e[0] !== t || e[1] !== a
          ? ((i = function (n) {
              var e,
                i,
                l =
                  (e = n.metadata) != null
                    ? e
                    : new (r("fb-error").ErrorMetadata)();
              n.metadata = l;
              var u = (i = t.current) == null ? void 0 : i.interactionUUID;
              if (u != null) {
                var c = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(u);
                (a != null &&
                  l.addEntry(
                    "COMET_INFRA",
                    "INTERACTION_PAGELET_STACK",
                    a.join(","),
                  ),
                  c != null &&
                    c.qplAction == null &&
                    (c.qplEvent != null &&
                      l.addEntry(
                        "COMET_INFRA",
                        "INTERACTION_QPL_EVENT",
                        String(
                          (s || (s = o("QPLEvent"))).getMarkerId(c.qplEvent),
                        ),
                      ),
                    c.tracePolicy != null &&
                      l.addEntry(
                        "COMET_INFRA",
                        "INTERACTION_TRACE_POLICY",
                        c.tracePolicy,
                      )));
              }
            }),
            (e[0] = t),
            (e[1] = a),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    l.default = m;
  },
  98,
);
