__d(
  "useWAWebCatalogRecovery",
  [
    "WAWebCatalogCollection",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t =
            o(
              "WAWebCatalogCollection",
            ).CatalogCollection.hasSelfCatalogErrorEmailMask() &&
            o(
              "WAWebCatalogCollection",
            ).CatalogCollection.shouldUseCatalogErrorEmailMask(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            )),
          (e[0] = t))
        : (t = e[0]);
      var n = s(t),
        r = n[0],
        a = n[1],
        i;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = function () {
              a(
                o(
                  "WAWebCatalogCollection",
                ).CatalogCollection.hasSelfCatalogErrorEmailMask(),
              );
            }),
            (e[1] = i))
          : (i = e[1]),
        o("useWAWebListener").useListener(
          o("WAWebCatalogCollection").CatalogCollection,
          "change:selfCatalogErrorEmailMask",
          i,
        ),
        r
      );
    }
    l.useCatalogRecovery = u;
  },
  98,
);
