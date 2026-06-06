__d(
  "JSSPInteractionTraceDataMarker",
  ["JSSPTraceBaseTransformer", "interaction-tracing-metrics", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.transform = async function (n) {
            var t,
              a,
              i,
              l = (t = n.metadata) == null ? void 0 : t.interactionId;
            if (l == null) return n;
            var s = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.get(l);
            return (
              s == null ||
                ((n.metadata = (a = n.metadata) != null ? a : {}),
                (n.metadata.interactionDuration = Math.floor(
                  ((i = s.completed) != null
                    ? i
                    : (e || (e = r("performanceNow")))()) - s.start,
                ))),
              n
            );
          }),
          n
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
