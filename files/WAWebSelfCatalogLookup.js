__d(
  "WAWebSelfCatalogLookup",
  ["WAWebCatalogCollection", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserUtils").getMeUserOrThrow(),
      );
    }
    l.getSelfCatalog = e;
  },
  98,
);
