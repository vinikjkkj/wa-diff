__d(
  "usePageletVCTracker",
  [
    "interaction-tracing-metrics",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useRef;
    function m(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.alwaysMarkMutationRootAsVisualChange,
        i = t.interactionUUID,
        l = t.isMutationRoot,
        s = t.observeTextMutation,
        u = t.pageletName,
        c = t.pageletType,
        m = t.vcCallback,
        _ = r("useStable")(p),
        f = d(null),
        g;
      return (
        n[0] !== a ||
        n[1] !== i ||
        n[2] !== l ||
        n[3] !== s ||
        n[4] !== u ||
        n[5] !== c ||
        n[6] !== _ ||
        n[7] !== m
          ? ((g = function (n) {
              if (n != null) {
                var t = _.has(n),
                  d = _.get(n);
                d == null &&
                  ((d = (e || (e = r("performanceNow")))()), _.set(n, d));
                var p,
                  g =
                    i != null
                      ? o(
                          "interaction-tracing-metrics",
                        ).InteractionTracingMetricsCore.get(i)
                      : null;
                i != null &&
                  f.current !== i &&
                  g &&
                  g.vcTracker &&
                  ((p = g.vcTracker),
                  l === !0 &&
                    (s != null && (p.config.observeTextMutation = s),
                    t && a === !1
                      ? p.observeMutation(n)
                      : p.addMutationRoot(n)));
                var h = t && g != null && g.start > d,
                  y =
                    h && g != null
                      ? g.start
                      : (e || (e = r("performanceNow")))();
                if (i != null && (!t || h)) {
                  var C;
                  (o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addMountPoint(i, y, u),
                    (C = p) == null || C.trackPagelet(n, u, y, m, c));
                }
                f.current = i;
              }
            }),
            (n[0] = a),
            (n[1] = i),
            (n[2] = l),
            (n[3] = s),
            (n[4] = u),
            (n[5] = c),
            (n[6] = _),
            (n[7] = m),
            (n[8] = g))
          : (g = n[8]),
        g
      );
    }
    function p() {
      return typeof WeakMap == "function" ? new WeakMap() : new Map();
    }
    l.default = m;
  },
  98,
);
