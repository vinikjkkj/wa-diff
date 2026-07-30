__d(
  "WAWebSelfCatalogLookup",
  ["WAWebCatalogCollection", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
    }
    l.getSelfCatalog = e;
  },
  98,
);
