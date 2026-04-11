__d(
  "WAWebBizAdCreationSAFRContextProvider.react",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationSAFRContext",
    "WAWebBizAdCreationSAFRContextProvider_boostedComponentWrapper.graphql",
    "react",
    "react-compiler-runtime",
    "useLWISAFRData",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useState;
    function p(t) {
      var a = o("react-compiler-runtime").c(5),
        i = t.boostedComponentWrapperRef,
        l = t.children,
        s = t.canSeeSAFRV3,
        c = t.regulatedCategories,
        d = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationSAFRContextProvider_boostedComponentWrapper.graphql",
              )),
          i,
        ),
        p = d.safr_data;
      if (p == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "SAFR Data under boosted component node should not be empty",
        );
      var _ = r("useLWISAFRData")(p, c, s),
        f = m(_),
        g = f[0],
        h = f[1],
        y;
      a[0] !== g
        ? ((y = babelHelpers.extends({}, g, { setConfig: h })),
          (a[0] = g),
          (a[1] = y))
        : (y = a[1]);
      var C = y,
        b;
      return (
        a[2] !== l || a[3] !== C
          ? ((b = u.jsx(r("WAWebBizAdCreationSAFRContext").Provider, {
              value: C,
              children: l,
            })),
            (a[2] = l),
            (a[3] = C),
            (a[4] = b))
          : (b = a[4]),
        b
      );
    }
    var _ = r("withWAWebBizAdCreationSpecContext")(p, function (e) {
      var t;
      return {
        canSeeSAFRV3: (t = e.adAccountData.canSeeSAFRV3) != null ? t : !1,
        regulatedCategories: e.regulatedCategories,
      };
    });
    l.default = _;
  },
  98,
);
