__d(
  "WAWebContactsAndGroupsFavoritesText",
  ["fbt", "WAWebL10NIsUsingSupportedBritishEnglishLocale"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return o(
        "WAWebL10NIsUsingSupportedBritishEnglishLocale",
      ).isUsingSupportedBritishEnglishLocale()
        ? s._(/*BTDS*/ "Favourites")
        : s._(/*BTDS*/ "Favorites");
    }
    function u() {
      return o(
        "WAWebL10NIsUsingSupportedBritishEnglishLocale",
      ).isUsingSupportedBritishEnglishLocale()
        ? s._(/*BTDS*/ "Add to favourites")
        : s._(/*BTDS*/ "Add to Favorites");
    }
    function c() {
      return o(
        "WAWebL10NIsUsingSupportedBritishEnglishLocale",
      ).isUsingSupportedBritishEnglishLocale()
        ? s._(/*BTDS*/ "Remove from favourites")
        : s._(/*BTDS*/ "Remove from Favorites");
    }
    ((l.getFavoritesText = e),
      (l.getAddToFavoritesText = u),
      (l.getRemoveFromFavoritesText = c));
  },
  226,
);
