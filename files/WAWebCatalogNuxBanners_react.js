__d(
  "WAWebCatalogNuxBanners.react",
  [
    "WAWebCatalogCollection",
    "WAWebNuxBanners.react",
    "WAWebNuxCollectionsBanner.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onOpenCollections,
        a = u(!1),
        i = a[0],
        l = a[1],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("WAWebCatalogCollection").CatalogCollection.get(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          )),
          (t[0] = c))
        : (c = t[0]);
      var d = c,
        m;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            l(!0);
          }),
          (t[1] = m))
        : (m = t[1]),
        o("useWAWebListener").useListener(
          d == null ? void 0 : d.collections,
          "change",
          m,
        ));
      var p;
      return (
        t[2] !== i || t[3] !== n
          ? ((p =
              i &&
              s.jsx(r("WAWebNuxBanners.react"), {
                children: s.jsx(r("WAWebNuxCollectionsBanner.react"), {
                  onClick: n,
                }),
              })),
            (t[2] = i),
            (t[3] = n),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.default = c;
  },
  98,
);
