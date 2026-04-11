__d(
  "HeroPlaceholder.react",
  [
    "HeroFallbackTracker.react",
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "HeroPlaceholderUtils",
    "react",
    "react-compiler-runtime",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useLayoutEffect,
      p = u.useRef,
      _ = function (t) {
        var e = t.children;
        return e;
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.cb,
        r = p(!1),
        a;
      return (
        t[0] !== n
          ? ((a = function () {
              r.current || (n(), (r.current = !0));
            }),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        m(a),
        null
      );
    }
    function g(e) {
      var t,
        n = o("react-compiler-runtime").c(37),
        a = e.children,
        i = e.fallback,
        l = e.name,
        u = e.unstable_avoidThisFallback,
        c = e.unstable_defer,
        _ = e.unstable_onSuspense,
        g = d(o("HeroInteractionContext").Context),
        h = d(r("HeroInteractionIDContext")),
        y = r("useStable")(o("HeroPlaceholderUtils").getSimpleUUID),
        C = (t = e.placeholderUUID) != null ? t : y,
        b = r("useStable")(o("HeroPlaceholderUtils").getSimpleUUID),
        v = p(!1),
        S = a,
        R;
      n[3] !== g || n[4] !== h || n[5] !== l || n[6] !== C || n[7] !== _
        ? ((R = function (t) {
            if (
              (h != null &&
                g.suspenseCallback(
                  h,
                  C,
                  g.pageletStack,
                  t,
                  l != null ? l : "Unnamed Suspense",
                ),
              _)
            ) {
              var e,
                n =
                  (e = o("HeroPlaceholderUtils").createThenableDescription(
                    t,
                  )) != null
                    ? e
                    : "";
              _(n, l != null ? l : "Unnamed Suspense");
            }
          }),
          (n[3] = g),
          (n[4] = h),
          (n[5] = l),
          (n[6] = C),
          (n[7] = _),
          (n[8] = R))
        : (R = n[8]);
      var L = R,
        E,
        k;
      (n[9] !== g || n[10] !== h || n[11] !== l || n[12] !== b
        ? ((E = function () {
            if (v.current === !1 && h != null && h != null)
              return (
                g.hold(h, g.pageletStack, "Hydration", b, l),
                function () {
                  return g.unhold(h, b);
                }
              );
          }),
          (k = [g, h, l, b]),
          (n[9] = g),
          (n[10] = h),
          (n[11] = l),
          (n[12] = b),
          (n[13] = E),
          (n[14] = k))
        : ((E = n[13]), (k = n[14])),
        m(E, k));
      var I;
      n[15] !== g || n[16] !== h || n[17] !== b
        ? ((I = function () {
            ((v.current = !0), h != null && g.unhold(h, b));
          }),
          (n[15] = g),
          (n[16] = h),
          (n[17] = b),
          (n[18] = I))
        : (I = n[18]);
      var T = I,
        D;
      n[19] !== T
        ? ((D = s.jsx(f, { cb: T })), (n[19] = T), (n[20] = D))
        : (D = n[20]);
      var x;
      n[21] !== C
        ? ((x = s.jsx(r("HeroFallbackTracker.react"), { uuid: C })),
          (n[21] = C),
          (n[22] = x))
        : (x = n[22]);
      var $;
      n[23] !== i || n[24] !== D || n[25] !== x
        ? (($ = s.jsxs(s.Fragment, { children: [i, D, x] })),
          (n[23] = i),
          (n[24] = D),
          (n[25] = x),
          (n[26] = $))
        : ($ = n[26]);
      var P;
      n[27] !== T
        ? ((P = s.jsx(f, { cb: T })), (n[27] = T), (n[28] = P))
        : (P = n[28]);
      var N;
      return (
        n[29] !== l ||
        n[30] !== L ||
        n[31] !== $ ||
        n[32] !== P ||
        n[33] !== u ||
        n[34] !== c ||
        n[35] !== S
          ? ((N = s.jsxs(s.Suspense, {
              defer: c,
              fallback: $,
              name: l,
              suspenseCallback: L,
              unstable_avoidThisFallback: u,
              children: [P, S],
            })),
            (n[29] = l),
            (n[30] = L),
            (n[31] = $),
            (n[32] = P),
            (n[33] = u),
            (n[34] = c),
            (n[35] = S),
            (n[36] = N))
          : (N = n[36]),
        N
      );
    }
    ((g.displayName = "HeroPlaceholder"), (l.default = g));
  },
  98,
);
