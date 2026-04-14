__d(
  "WAWebProductCollectionCatalogCategoriesBanner",
  [
    "fbt",
    "WAWebBizProductCatalogBridge",
    "WAWebText_DONOTUSE.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        banner: {
          backgroundColor: "x1280gxy",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        paddingAll16: {
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.catalog,
        n = o("useWAWebModelValues").useModelValues(t, [
          "id",
          "hasCatalogCategories",
        ]),
        r = n.hasCatalogCategories,
        a = n.id;
      return (
        c(
          function () {
            r == null &&
              o("WAWebBizProductCatalogBridge")
                .queryCatalogHasCategories(a)
                .then(function (e) {
                  t.set({ hasCatalogCategories: e });
                });
          },
          [r, a, t],
        ),
        r === !1 || r == null
          ? null
          : u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              xstyle: [d.banner, d.paddingAll16],
              size: "13",
              color: "dark",
              children: s._(
                /*BTDS*/ "Use WhatsApp on your phone to browse product categories.",
              ),
            })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
