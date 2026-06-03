__d(
  "JSSPInteractionTraceDataMarker",
  [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.transform = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  a,
                  i,
                  l = (n = t.metadata) == null ? void 0 : n.interactionId;
                if (l == null) return t;
                var s = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(l);
                return (
                  s == null ||
                    ((t.metadata = (a = t.metadata) != null ? a : {}),
                    (t.metadata.interactionDuration = Math.floor(
                      ((i = s.completed) != null
                        ? i
                        : (e || (e = r("performanceNow")))()) - s.start,
                    ))),
                  t
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
