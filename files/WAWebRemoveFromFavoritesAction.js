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
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    function m() {
      return o(
        "WAWebL10NIsUsingSupportedBritishEnglishLocale",
      ).isUsingSupportedBritishEnglishLocale()
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    async function p(t, n) {
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var a = (Array.isArray(t) ? t : [t]).map(function (e) {
          return e.toString();
        });
        n.entryPoint != null &&
          o("WAWebFavoritesLogging").logRemovingMessagingFavorites(
            a,
            n.entryPoint,
          );
        var i = await o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
          l = i.filter(function (e) {
            var t = e.id;
            return a.includes(t);
          }),
          u = i.filter(function (e) {
            var t = e.id;
            return !a.includes(t);
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
            return o("WAWebDBFavoriteDatabaseApi").removeFavorites(a);
          })
          .then(function () {
            return o("WAWebFavoriteCollection").FavoriteCollection.remove(a);
          });
        if (n.suppressToast === !0) await f;
        else {
          var g = l.length === 1 ? l[0] : null,
            h = new (o("WAWebActionToast.react").ActionType)(d()),
            y = f.then(function () {
              return new (o("WAWebActionToast.react").ActionType)(
                m(),
                g
                  ? {
                      actionText: s._(/*BTDS*/ ""),
                      actionHandler: function () {
                        return o(
                          "WAWebAddToFavoritesAction",
                        ).addToFavoritesAction(g, { entryPoint: n.entryPoint });
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
    }
    l.removeFromFavoritesAction = p;
  },
  226,
);
