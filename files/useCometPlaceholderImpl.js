__d(
  "useCometPlaceholderImpl",
  [
    "CometSSRHydrationMarkerUtils",
    "CometSuspenseContext_DO_NOT_USE.react",
    "CometSuspenseHUD.react",
    "ExecutionEnvironment",
    "cr:22912",
    "cr:5128",
    "gkx",
    "hero-tracing-placeholder",
    "react",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = n("cr:22912") || n("cr:5128"),
      g = r("gkx")("5486");
    function h(n) {
      var a = n.children,
        i = n.fallback,
        l = n.name,
        s = n.unstable_avoidThisFallback,
        c = n.unstable_defer,
        h = n.unstable_onSuspense,
        y = r("useStable")(function () {
          return r("CometSuspenseHUD.react") &&
            (e || (e = r("ExecutionEnvironment"))).canUseDOM
            ? t.document.createElement("div")
            : null;
        }),
        C = p(null),
        b = r("useStable")(
          o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID,
        ),
        v = _(null),
        S = v[0],
        R = v[1],
        L = a,
        E = i;
      o("CometSSRHydrationMarkerUtils").addMarkersToChildren != null &&
        o("CometSSRHydrationMarkerUtils").addMarkersToFallback != null &&
        ((L = o("CometSSRHydrationMarkerUtils").addMarkersToChildren(L)),
        (E = o("CometSSRHydrationMarkerUtils").addMarkersToFallback(E)));
      var k = d(
          function (e, t) {
            (g && R(e),
              y != null && (y.textContent = e),
              (C.current = e),
              f == null ||
                f.trackSuspendedComponent == null ||
                f.trackSuspendedComponent(e, b, t),
              h && h(e));
          },
          [y, h, b],
        ),
        I = m(
          function () {
            return { isFallback: !0, suspendedPromiseName: S };
          },
          [S],
        ),
        T = null;
      y != null &&
        r("CometSuspenseHUD.react") != null &&
        (T = u.jsx(r("CometSuspenseHUD.react"), { desc: y }));
      var D = u.jsxs(r("CometSuspenseContext_DO_NOT_USE.react").Provider, {
          value: I,
          children: [E, T],
        }),
        x = L;
      return u.jsx(o("hero-tracing-placeholder").HeroPlaceholder, {
        fallback: D,
        name: l,
        placeholderUUID: b,
        unstable_avoidThisFallback: s,
        unstable_defer: c,
        unstable_onSuspense: k,
        children: x,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
