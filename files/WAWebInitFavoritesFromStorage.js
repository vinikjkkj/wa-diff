__d(
  "WAWebInitFavoritesFromStorage",
  ["WAWebDBFavoriteDatabaseApi", "WAWebFavoriteCollection"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebDBFavoriteDatabaseApi")
        .getAllFavorites()
        .then(function (e) {
          o("WAWebFavoriteCollection").FavoriteCollection.initializeFromCache(
            [].concat(e),
          );
        });
    }
    l.restoreFavorites = e;
  },
  98,
);
