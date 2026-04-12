__d(
  "WAWebBizAdCreationSAFRContextProvider.react",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationSAFRContext",
    "WAWebBizAdCreationSAFRContextProvider_boostedComponentWrapper.graphql",
    "react",
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
      var a = t.boostedComponentWrapperRef,
        i = t.children,
        l = t.canSeeSAFRV3,
        s = t.regulatedCategories,
        c = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationSAFRContextProvider_boostedComponentWrapper.graphql",
              )),
          a,
        ),
        p = c.safr_data;
      if (p == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "SAFR Data under boosted component node should not be empty",
        );
      var _ = r("useLWISAFRData")(p, s, l),
        f = m(_),
        g = f[0],
        h = f[1],
        y = d(
          function () {
            return babelHelpers.extends({}, g, { setConfig: h });
          },
          [g],
        );
      return u.jsx(r("WAWebBizAdCreationSAFRContext").Provider, {
        value: y,
        children: i,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
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
