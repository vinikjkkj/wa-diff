__d(
  "WAWebBizAdCreationTargetingModalContextProvider.react",
  [
    "LWICometDefaultTargetingSpec",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdCreationTargetingSpecDispatcherContext",
    "react",
    "react-compiler-runtime",
    "waWebBizAdCreationTargetingModalReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "initialAudienceName", "initialTargetingSpec"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useReducer,
      _ = c.useState;
    function f(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i,
        l,
        s;
      n[0] !== t
        ? ((a = t.children),
          (l = t.initialAudienceName),
          (s = t.initialTargetingSpec),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]));
      var c =
          s === void 0
            ? o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC
            : s,
        d = i,
        m = d.currency,
        f = d.dailyBudget,
        g = d.environment,
        h = d.legacyAdAccountID,
        y = d.selectedPublisherPlatforms,
        C = _(l),
        b = C[0],
        v = C[1],
        S;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            v(t);
          }),
          (n[5] = S))
        : (S = n[5]);
      var R = S,
        L = p(r("waWebBizAdCreationTargetingModalReducer"), c),
        E = L[0],
        k = L[1],
        I;
      n[6] !== b ||
      n[7] !== m ||
      n[8] !== f ||
      n[9] !== g ||
      n[10] !== h ||
      n[11] !== y
        ? ((I = {
            audienceName: b,
            setAudienceName: R,
            environment: g,
            dailyBudget: f,
            currency: m,
            legacyAdAccountID: h,
            selectedPublisherPlatforms: y,
          }),
          (n[6] = b),
          (n[7] = m),
          (n[8] = f),
          (n[9] = g),
          (n[10] = h),
          (n[11] = y),
          (n[12] = I))
        : (I = n[12]);
      var T = I,
        D;
      n[13] !== a
        ? ((D = u.jsx(
            r("WAWebBizAdCreationTargetingSpecDispatcherContext").Provider,
            { value: k, children: a },
          )),
          (n[13] = a),
          (n[14] = D))
        : (D = n[14]);
      var x;
      n[15] !== D || n[16] !== E
        ? ((x = u.jsx(r("WAWebBizAdCreationTargetingSpecContext").Provider, {
            value: E,
            children: D,
          })),
          (n[15] = D),
          (n[16] = E),
          (n[17] = x))
        : (x = n[17]);
      var $;
      return (
        n[18] !== T || n[19] !== x
          ? (($ = u.jsx(r("WAWebBizAdCreationTargetingModalContext").Provider, {
              value: T,
              children: x,
            })),
            (n[18] = T),
            (n[19] = x),
            (n[20] = $))
          : ($ = n[20]),
        $
      );
    }
    l.default = f;
  },
  98,
);
