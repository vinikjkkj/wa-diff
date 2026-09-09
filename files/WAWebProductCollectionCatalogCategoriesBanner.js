__d(
  "WAWebProductCollectionCatalogCategoriesBanner",
  [
    "fbt",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogCollection",
    "WAWebCatalogGetters",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCatalogValues",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.catalogId,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebCatalogGetters").getHasCatalogCategories]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebCatalogValues").useCatalogValues(n, r),
        i = a[0],
        l,
        m;
      if (
        (t[1] !== n || t[2] !== i
          ? ((l = function () {
              i == null &&
                o("WAWebBizProductCatalogBridge")
                  .queryCatalogHasCategories(n)
                  .then(function (e) {
                    var t;
                    (t = o("WAWebCatalogCollection").CatalogCollection.get(
                      n,
                    )) == null || t.set({ hasCatalogCategories: e });
                  });
            }),
            (m = [i, n]),
            (t[1] = n),
            (t[2] = i),
            (t[3] = l),
            (t[4] = m))
          : ((l = t[3]), (m = t[4])),
        c(l, m),
        i === !1 || i == null)
      )
        return null;
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [d.banner, d.paddingAll16]), (t[5] = p))
        : (p = t[5]);
      var _;
      return (
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              xstyle: p,
              size: "13",
              color: "dark",
              children: s._(
                /*BTDS*/ "Use WhatsApp on your phone to browse product categories.",
              ),
            })),
            (t[6] = _))
          : (_ = t[6]),
        _
      );
    }
    l.default = m;
  },
  226,
);
