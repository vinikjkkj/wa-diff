__d(
  "WAWebRemoveFromFavoritesAction",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebFavoriteCollection",
    "WAWebFavoritesLogging",
    "WAWebFavoritesSync",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebListsGatingUtils",
    "WAWebSyncdCoreApi",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      return o("WAWebListsGatingUtils").isListsEnabled()
        ? o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Removing from Favourites list")
          : s._(/*BTDS*/ "Removing from Favorites list")
        : o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Removing from Favourites")
          : s._(/*BTDS*/ "Removing from Favorites");
    }
    function m() {
      return o("WAWebListsGatingUtils").isListsEnabled()
        ? o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Removed from Favourites list")
          : s._(/*BTDS*/ "Removed from Favorites list")
        : o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Removed from Favourites")
          : s._(/*BTDS*/ "Removed from Favorites");
    }
    async function p(t, n) {
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var a = t.toString();
        n.entryPoint != null &&
          o("WAWebFavoritesLogging").logRemovingMessagingFavorites(
            [a],
            n.entryPoint,
          );
        var i = await o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
          l = i.find(function (e) {
            var t = e.id;
            return t === a;
          }),
          u = i.filter(function (e) {
            var t = e.id;
            return t !== a;
          }),
          p = o("WATimeUtils").unixTime(),
          _ = await r("WAWebFavoritesSync").getFavoritesMutation(u, p);
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Favorites] removeFromFavoritesAction, mutation generated",
            ])),
        );
        var f = o("WAWebSyncdCoreApi")
          .lockForSync(["favorite", "chat"], [_], async function () {
            return o("WAWebDBFavoriteDatabaseApi").removeFavorites([a]);
          })
          .then(function () {
            return o("WAWebFavoriteCollection").FavoriteCollection.remove([a]);
          });
        if (n.suppressToast === !0) await f;
        else {
          var g = new (o("WAWebActionToast.react").ActionType)(d()),
            h = f.then(function () {
              return new (o("WAWebActionToast.react").ActionType)(
                m(),
                l
                  ? {
                      actionText: s._(/*BTDS*/ "Undo"),
                      actionHandler: function () {
                        return o(
                          "WAWebAddToFavoritesAction",
                        ).addToFavoritesAction(l, { entryPoint: n.entryPoint });
                      },
                    }
                  : void 0,
              );
            });
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              id: o("WAWebActionToast.react").genId(),
              initialAction: g,
              pendingAction: h,
            }),
          );
        }
      }
    }
    l.removeFromFavoritesAction = p;
  },
  226,
);
