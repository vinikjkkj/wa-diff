__d(
  "WAWebDebugFavorites",
  ["WAWebFavoritesSync"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await r("WAWebFavoritesSync").applyMutations(e);
    }
    e.doc =
      "Apply favorites mutations to the DB. This is used for testing purposes only.";
    var s = { applyFavoritesMutations: e };
    l.default = s;
  },
  98,
);
