__d(
  "WAWebProductCollectionCatalogCategoriesBanner",
  [
    "fbt",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogCollection",
    "WAWebCatalogGetters",
    "WDSText.react",
    "react",
    "useWAWebCatalogValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.catalogId,
        n = o("useWAWebCatalogValues").useCatalogValues(t, [
          o("WAWebCatalogGetters").getHasCatalogCategories,
        ]),
        a = n[0];
      return (
        c(
          function () {
            a == null &&
              o("WAWebBizProductCatalogBridge")
                .queryCatalogHasCategories(t)
                .then(function (e) {
                  var n;
                  (n = o("WAWebCatalogCollection").CatalogCollection.get(t)) ==
                    null || n.set({ hasCatalogCategories: e });
                });
          },
          [a, t],
        ),
        a === !1 || a == null
          ? null
          : u.jsx("div", {
              "data-testid": "catalog-categories-banner",
              className:
                "x1280gxy x78zum5 x6s0dn4 xso031l x1q0q8m5 x120ee7l x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDefault",
                testid: "catalog-categories-banner-description",
                children: s._(/*BTDS*/ ""),
              }),
            })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
