__d(
  "useCometDisplayTimingTrackerForInteraction",
  [
    "InteractionTracingMetrics",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "vc-tracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useRef;
    function m(t, n, a) {
      var i = o("react-compiler-runtime").c(4),
        l = n === void 0 ? !1 : n,
        s = d(null),
        u;
      return (
        i[0] !== a || i[1] !== l || i[2] !== t
          ? ((u = function (o) {
              if (t != null && s.current !== o && ((s.current = o), o)) {
                var n = (e || (e = r("performanceNow")))();
                if (
                  (a != null
                    ? r("InteractionTracingMetrics").addMountPoint(a, n, t)
                    : r("InteractionTracingMetrics")
                        .currentInteractionLogger()
                        .forEach(function (e) {
                          return r("InteractionTracingMetrics").addMountPoint(
                            e.traceId,
                            n,
                            t,
                          );
                        }),
                  !l)
                ) {
                  var i = r("vc-tracker").getCurrentVCTraces();
                  i.forEach(function (e) {
                    e.interactionType !== "INTERACTION" && e.excludeElement(o);
                  });
                }
              }
            }),
            (i[0] = a),
            (i[1] = l),
            (i[2] = t),
            (i[3] = u))
          : (u = i[3]),
        u
      );
    }
    l.default = m;
  },
  98,
);
