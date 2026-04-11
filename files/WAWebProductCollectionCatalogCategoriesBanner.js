__d(
  "WAWebProductCollectionCatalogCategoriesBanner",
  [
    "fbt",
    "WAWebBizProductCatalogBridge",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        n = e.catalog,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["id", "hasCatalogCategories"]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebModelValues").useModelValues(n, r),
        i = a.hasCatalogCategories,
        l = a.id,
        m,
        p;
      if (
        (t[1] !== n || t[2] !== i || t[3] !== l
          ? ((m = function () {
              i == null &&
                o("WAWebBizProductCatalogBridge")
                  .queryCatalogHasCategories(l)
                  .then(function (e) {
                    n.set({ hasCatalogCategories: e });
                  });
            }),
            (p = [i, l, n]),
            (t[1] = n),
            (t[2] = i),
            (t[3] = l),
            (t[4] = m),
            (t[5] = p))
          : ((m = t[4]), (p = t[5])),
        c(m, p),
        i === !1 || i == null)
      )
        return null;
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [d.banner, d.paddingAll16]), (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              xstyle: _,
              size: "13",
              color: "dark",
              children: s._(
                /*BTDS*/ "Use WhatsApp on your phone to browse product categories.",
              ),
            })),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    l.default = m;
  },
  226,
);
