__d(
  "WAWebProductCollectionCatalogCategoriesBanner",
  [
    "fbt",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogCollection",
    "WAWebCatalogGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCatalogValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.catalogId,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebCatalogGetters").getHasCatalogCategories]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebCatalogValues").useCatalogValues(n, a),
        l = i[0],
        d,
        m;
      if (
        (t[1] !== n || t[2] !== l
          ? ((d = function () {
              l == null &&
                o("WAWebBizProductCatalogBridge")
                  .queryCatalogHasCategories(n)
                  .then(function (e) {
                    var t;
                    (t = o("WAWebCatalogCollection").CatalogCollection.get(
                      n,
                    )) == null || t.set({ hasCatalogCategories: e });
                  });
            }),
            (m = [l, n]),
            (t[1] = n),
            (t[2] = l),
            (t[3] = d),
            (t[4] = m))
          : ((d = t[3]), (m = t[4])),
        c(d, m),
        l === !1 || l == null)
      )
        return null;
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            className:
              "x1280gxy x78zum5 x6s0dn4 xso031l x1q0q8m5 x120ee7l x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
          }),
          (t[5] = p))
        : (p = t[5]);
      var _;
      return (
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = u.jsx(
              "div",
              babelHelpers.extends(
                { "data-testid": "catalog-categories-banner" },
                p,
                {
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body3",
                    colorName: "contentDefault",
                    testid: "catalog-categories-banner-description",
                    children: s._(
                      /*BTDS*/ "Use WhatsApp on your phone to browse product categories.",
                    ),
                  }),
                },
              ),
            )),
            (t[6] = _))
          : (_ = t[6]),
        _
      );
    }
    l.default = d;
  },
  226,
);
