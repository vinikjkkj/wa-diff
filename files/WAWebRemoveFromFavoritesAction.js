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
      return o(
        "WAWebL10NIsUsingSupportedBritishEnglishLocale",
      ).isUsingSupportedBritishEnglishLocale()
        ? s._(/*BTDS*/ "Removing from Favourites list")
        : s._(/*BTDS*/ "Removing from Favorites list");
    }
    function m() {
      return o(
        "WAWebL10NIsUsingSupportedBritishEnglishLocale",
      ).isUsingSupportedBritishEnglishLocale()
        ? s._(/*BTDS*/ "Removed from Favourites list")
        : s._(/*BTDS*/ "Removed from Favorites list");
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            var i = (Array.isArray(t) ? t : [t]).map(function (e) {
              return e.toString();
            });
            a.entryPoint != null &&
              o("WAWebFavoritesLogging").logRemovingMessagingFavorites(
                i,
                a.entryPoint,
              );
            var l = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
              u = l.filter(function (e) {
                var t = e.id;
                return i.includes(t);
              }),
              p = l.filter(function (e) {
                var t = e.id;
                return !i.includes(t);
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
                  return o("WAWebDBFavoriteDatabaseApi").removeFavorites(i);
                }),
              )
              .then(function () {
                return o("WAWebFavoriteCollection").FavoriteCollection.remove(
                  i,
                );
              });
            if (a.suppressToast === !0) yield g;
            else {
              var h = u.length === 1 ? u[0] : null,
                y = new (o("WAWebActionToast.react").ActionType)(d()),
                C = g.then(function () {
                  return new (o("WAWebActionToast.react").ActionType)(
                    m(),
                    h
                      ? {
                          actionText: s._(/*BTDS*/ "Undo"),
                          actionHandler: function () {
                            return o(
                              "WAWebAddToFavoritesAction",
                            ).addToFavoritesAction(h, {
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
                  initialAction: y,
                  pendingAction: C,
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
