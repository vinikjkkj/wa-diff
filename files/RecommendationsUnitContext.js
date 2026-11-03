__d(
  "RecommendationsUnitContext",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "RecommendationsUnit.entrypoint",
    "RecommendationsUnitContext_recommendationUnitFragmentRef.graphql",
    "RecommendationsUnitGlimmer.react",
    "RelayHooks",
    "react",
    "react-compiler-runtime",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useState,
      p = function () {},
      _ = function () {
        return !1;
      },
      f = u.createContext({
        chainExpandRecommendationsUnit: _,
        isRecommendationsUnitExpanded: !1,
        parentID: null,
        recommendationsUnitEntryPointContainer: null,
        setIsRecommendationsUnitExpanded: p,
        shouldExpandOnInitialLoad: !1,
        toggleIsRecommendationsUnitExpanded: p,
      });
    function g(t) {
      var a,
        l = o("react-compiler-runtime").c(30),
        s = t.children,
        c = t.parentID,
        d = t.recommendationUnitFragmentRef,
        p = t.renderLocation,
        _ = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "RecommendationsUnitContext_recommendationUnitFragmentRef.graphql",
              )),
          d,
        ),
        g = r("useCometRelayEntrypointContextualEnvironmentProvider")(),
        y = o("CometRelay").useEntryPointLoader(
          g,
          r("RecommendationsUnit.entrypoint"),
        ),
        C = y[0],
        b = y[1],
        v =
          (_ == null || (a = _.user) == null
            ? void 0
            : a.if_viewer_can_see_pymk_unit_on_initial_load) != null,
        S = m(v),
        R = S[0],
        L = S[1],
        E = m(C != null || v),
        k = E[0],
        I = E[1],
        T;
      l[0] !== k || l[1] !== C
        ? ((T =
            C != null
              ? u.jsx(r("CometPlaceholder.react"), {
                  fallback: u.jsx(r("RecommendationsUnitGlimmer.react"), {}),
                  name: i.id,
                  children: u.jsx(o("CometRelay").EntryPointContainer, {
                    entryPointReference: C,
                    props: { isExpanded: k != null ? k : !1 },
                  }),
                })
              : null),
          (l[0] = k),
          (l[1] = C),
          (l[2] = T))
        : (T = l[2]);
      var D = T,
        x = m(!1),
        $ = x[0],
        P = x[1],
        N;
      l[3] !== $ || l[4] !== k || l[5] !== b || l[6] !== c || l[7] !== p
        ? ((N = function () {
            return !$ && !k
              ? (b({ parentID: c, renderLocation: p }), P(!0), I(!0), !0)
              : !1;
          }),
          (l[3] = $),
          (l[4] = k),
          (l[5] = b),
          (l[6] = c),
          (l[7] = p),
          (l[8] = N))
        : (N = l[8]);
      var M;
      l[9] !== b || l[10] !== c || l[11] !== p
        ? ((M = function (t) {
            t ? (b({ parentID: c, renderLocation: p }), P(!0), I(!0)) : I(!1);
          }),
          (l[9] = b),
          (l[10] = c),
          (l[11] = p),
          (l[12] = M))
        : (M = l[12]);
      var w;
      l[13] !== k || l[14] !== b || l[15] !== c || l[16] !== p || l[17] !== R
        ? ((w = function () {
            (b({ parentID: c, renderLocation: p }),
              k || P(!0),
              R && L(!1),
              I(h));
          }),
          (l[13] = k),
          (l[14] = b),
          (l[15] = c),
          (l[16] = p),
          (l[17] = R),
          (l[18] = w))
        : (w = l[18]);
      var A;
      l[19] !== k ||
      l[20] !== c ||
      l[21] !== D ||
      l[22] !== R ||
      l[23] !== N ||
      l[24] !== M ||
      l[25] !== w
        ? ((A = {
            chainExpandRecommendationsUnit: N,
            isRecommendationsUnitExpanded: k,
            parentID: c,
            recommendationsUnitEntryPointContainer: D,
            setIsRecommendationsUnitExpanded: M,
            shouldExpandOnInitialLoad: R,
            toggleIsRecommendationsUnitExpanded: w,
          }),
          (l[19] = k),
          (l[20] = c),
          (l[21] = D),
          (l[22] = R),
          (l[23] = N),
          (l[24] = M),
          (l[25] = w),
          (l[26] = A))
        : (A = l[26]);
      var F = A,
        O;
      return (
        l[27] !== s || l[28] !== F
          ? ((O = u.jsx(f.Provider, { value: F, children: s })),
            (l[27] = s),
            (l[28] = F),
            (l[29] = O))
          : (O = l[29]),
        O
      );
    }
    function h(e) {
      return !e;
    }
    ((l.noOpFunc = p),
      (l.RecommendationsUnitContext = f),
      (l.RecommendationsUnitContextProvider = g));
  },
  98,
);
