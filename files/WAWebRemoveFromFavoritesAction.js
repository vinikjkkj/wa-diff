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
    "asyncToGeneratorRuntime",
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            var i = t.toString();
            a.entryPoint != null &&
              o("WAWebFavoritesLogging").logRemovingMessagingFavorites(
                [i],
                a.entryPoint,
              );
            var l = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
              u = l.find(function (e) {
                var t = e.id;
                return t === i;
              }),
              p = l.filter(function (e) {
                var t = e.id;
                return t !== i;
              }),
              _ = o("WATimeUtils").unixTime(),
              f = yield r("WAWebFavoritesSync").getFavoritesMutation(p, _);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Favorites] removeFromFavoritesAction, mutation generated",
                ])),
            );
            var g = o("WAWebSyncdCoreApi")
              .lockForSync(
                ["favorite", "chat"],
                [f],
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  return o("WAWebDBFavoriteDatabaseApi").removeFavorites([i]);
                }),
              )
              .then(function () {
                return o("WAWebFavoriteCollection").FavoriteCollection.remove([
                  i,
                ]);
              });
            if (a.suppressToast === !0) yield g;
            else {
              var h = new (o("WAWebActionToast.react").ActionType)(d()),
                y = g.then(function () {
                  return new (o("WAWebActionToast.react").ActionType)(
                    m(),
                    u
                      ? {
                          actionText: s._(/*BTDS*/ "Undo"),
                          actionHandler: function () {
                            return o(
                              "WAWebAddToFavoritesAction",
                            ).addToFavoritesAction(u, {
                              entryPoint: a.entryPoint,
                            });
                          },
                        }
                      : void 0,
                  );
                });
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebActionToast.react").ActionToast, {
                  id: o("WAWebActionToast.react").genId(),
                  initialAction: h,
                  pendingAction: y,
                }),
              );
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.removeFromFavoritesAction = p;
  },
  226,
);
