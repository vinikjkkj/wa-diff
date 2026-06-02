__d(
  "WAWebAddToFavoritesModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebAddToFavoritesModal.react",
        )
          .__setRef("WAWebAddToFavoritesModalLoadable")
          .load();
        return e;
      }, "AddToFavoritesModal"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to favorites"),
            error: !!t.error,
          });
        },
      });
    l.AddToFavoritesModalLoadable = d;
  },
  226,
);
