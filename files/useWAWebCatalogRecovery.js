__d(
  "useWAWebCatalogRecovery",
  [
    "WAWebCatalogCollection",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(
          o(
            "WAWebCatalogCollection",
          ).CatalogCollection.hasSelfCatalogErrorEmailMask() &&
            o(
              "WAWebCatalogCollection",
            ).CatalogCollection.shouldUseCatalogErrorEmailMask(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            ),
        ),
        t = e[0],
        n = e[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebCatalogCollection").CatalogCollection,
          "change:selfCatalogErrorEmailMask",
          function () {
            n(
              o(
                "WAWebCatalogCollection",
              ).CatalogCollection.hasSelfCatalogErrorEmailMask(),
            );
          },
        ),
        t
      );
    }
    l.useCatalogRecovery = u;
  },
  98,
);
