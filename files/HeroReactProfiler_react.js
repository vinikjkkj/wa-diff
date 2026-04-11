__d(
  "HeroReactProfiler.react",
  [
    "HeroTracingCoreConfig",
    "addAnnotations",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = function (t) {
        var e = t.children;
        return e;
      };
    m.displayName = "HeroReactProfilerNoOp";
    function p(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        a = e.id,
        i = e.isPagelet,
        l = e.logDurationToQPL,
        u = i === void 0 ? !1 : i,
        c = l === void 0 ? !1 : l,
        m = d(o("hero-tracing-placeholder").HeroInteractionContext.Context),
        p = d(o("hero-tracing-placeholder").HeroInteractionIDContext),
        _;
      t[0] !== m || t[1] !== p || t[2] !== u || t[3] !== c
        ? ((_ = function (t, n, a, i, l, s) {
            p != null &&
              (m.logReactRender(p, t, n, l, s, a, i, u, m.pageletStack),
              o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.addReactRender(
                p,
                t,
                l,
                s,
                a,
                i,
                n,
              ),
              c &&
                r("interaction-tracing")
                  .InteractionTracingCore.getPendingInteractions()
                  .forEach(function (e) {
                    var n = e.getTrace();
                    if (n) {
                      var o,
                        i,
                        l,
                        s = t.replace(/_[0-9]+$/, "_{N}"),
                        u = "ReactRenderDuration_" + s,
                        c =
                          ((o =
                            (i = n.annotations.int) == null ? void 0 : i[u]) !=
                          null
                            ? o
                            : 0) + a;
                      r("addAnnotations")(n.annotations, {
                        int: ((l = {}), (l[u] = c), l),
                      });
                    }
                  }));
          }),
          (t[0] = m),
          (t[1] = p),
          (t[2] = u),
          (t[3] = c),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] !== m || t[6] !== p || t[7] !== u
        ? ((g = function (t, n, r, o) {
            p != null && m.logReactCommit(p, t, n, r, o, u, m.pageletStack);
          }),
          (t[5] = m),
          (t[6] = p),
          (t[7] = u),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y;
      t[9] !== m || t[10] !== p || t[11] !== u
        ? ((y = function (t, n, r, o) {
            p != null && m.logReactPostCommit(p, t, n, r, o, u, m.pageletStack);
          }),
          (t[9] = m),
          (t[10] = p),
          (t[11] = u),
          (t[12] = y))
        : (y = t[12]);
      var C = y,
        b;
      return (
        t[13] !== n || t[14] !== a || t[15] !== h || t[16] !== C || t[17] !== f
          ? ((b = s.jsx(s.Profiler, {
              id: a,
              onCommit: h,
              onPostCommit: C,
              onRender: f,
              children: n,
            })),
            (t[13] = n),
            (t[14] = a),
            (t[15] = h),
            (t[16] = C),
            (t[17] = f),
            (t[18] = b))
          : (b = t[18]),
        b
      );
    }
    p.displayName = "HeroReactProfiler";
    var _ =
      s.Profiler != null && r("HeroTracingCoreConfig").enableReactProfiling
        ? p
        : m;
    l.default = _;
  },
  98,
);
