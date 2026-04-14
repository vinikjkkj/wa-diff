__d(
  "WAWebBizAdCreationTargetingModalContextProvider.react",
  [
    "LWICometDefaultTargetingSpec",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdCreationTargetingSpecDispatcherContext",
    "react",
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
      var n = t.children,
        a = t.initialAudienceName,
        i = t.initialTargetingSpec,
        l =
          i === void 0
            ? o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC
            : i,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = s.currency,
        f = s.dailyBudget,
        g = s.environment,
        h = s.legacyAdAccountID,
        y = s.selectedPublisherPlatforms,
        C = _(a),
        b = C[0],
        v = C[1],
        S = d(function (e) {
          v(e);
        }, []),
        R = p(r("waWebBizAdCreationTargetingModalReducer"), l),
        L = R[0],
        E = R[1],
        k = m(
          function () {
            return {
              audienceName: b,
              setAudienceName: S,
              environment: g,
              dailyBudget: f,
              currency: c,
              legacyAdAccountID: h,
              selectedPublisherPlatforms: y,
            };
          },
          [b, S, g, f, c, h, y],
        );
      return u.jsx(r("WAWebBizAdCreationTargetingModalContext").Provider, {
        value: k,
        children: u.jsx(r("WAWebBizAdCreationTargetingSpecContext").Provider, {
          value: L,
          children: u.jsx(
            r("WAWebBizAdCreationTargetingSpecDispatcherContext").Provider,
            { value: E, children: n },
          ),
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
