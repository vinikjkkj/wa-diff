__d(
  "HeroPagelet.react",
  [
    "HeroReactProfiler.react",
    "HeroTracingPlatformDependencies",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "mergeRefs",
    "performanceNow",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useLayoutEffect,
      _ = c.useMemo,
      f = c.useRef;
    function g(t) {
      var n = t.ref,
        a = t.alwaysMarkMutationRootAsVisualChange,
        i = t.children,
        l = t.isMutationRoot,
        s = t.name,
        c = t.observeTextMutation,
        g = t.pageletName,
        h = t.pageletType,
        y = t.position,
        C = t.trackTailLoad,
        b = m(o("hero-tracing-placeholder").HeroInteractionContext.Context),
        v = m(o("hero-tracing-placeholder").HeroInteractionIDContext),
        S = _(
          function () {
            return babelHelpers.extends({}, b, {
              pageletStack: [].concat(b.pageletStack, [s]),
            });
          },
          [b, s],
        ),
        R = _(
          function () {
            return (e || (e = r("performanceNow")))();
          },
          [v],
        ),
        L = d(
          function () {
            return (
              v != null &&
                (o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addFirstMarkerPoint(
                  v,
                  "Queue_" + s,
                  "VisualCompletion",
                  R,
                ),
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addFirstMarkerPoint(
                  v,
                  "Render_" + s,
                  "VisualCompletion",
                  (e || (e = r("performanceNow")))(),
                )),
              null
            );
          },
          [v, s, R],
        ),
        E = d(
          function (e, t) {
            v != null && S.logPageletVC(v, R, e, t, S.pageletStack);
          },
          [v, S, R],
        ),
        k = r("HeroTracingPlatformDependencies").useHostInstanceTracking({
          vcCallback: E,
          isMutationRoot: l,
          interactionUUID: v,
          name: s,
          pageletName: g,
          observeTextMutation: c,
          pageletType: h,
          position: y,
          trackTailLoad: C,
          alwaysMarkMutationRootAsVisualChange: a,
        }),
        I = f(null),
        T = f(null),
        D = _(
          function () {
            return r("mergeRefs")(k, n, I);
          },
          [k, n],
        );
      if (l === !0 && a === !1 && v != null && T.current !== v) {
        var x,
          $ =
            (x = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.get(v)) == null
              ? void 0
              : x.vcTracker;
        I.current != null &&
          $ &&
          ($.observeMutation(I.current), (T.current = v));
      }
      return (
        p(
          function () {
            l === !0 &&
              a === !1 &&
              v != null &&
              T.current !== v &&
              (T.current = v);
          },
          [a, T, v, l],
        ),
        u.jsx(
          o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
          {
            value: S,
            children: u.jsx(r("HeroReactProfiler.react"), {
              id: s,
              isPagelet: !0,
              children: i(D, L),
            }),
          },
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (g.displayName = "HeroPagelet"),
      (l.default = g));
  },
  98,
);
