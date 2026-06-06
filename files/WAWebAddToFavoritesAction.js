__d(
  "WAWebAddToFavoritesAction",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebFavoriteCollection",
    "WAWebFavoritesLogging",
    "WAWebFavoritesSync",
    "WAWebFbtCommon",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebListsGatingUtils",
    "WAWebModalManager",
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
          ? s._(/*BTDS*/ "Adding to Favourites list")
          : s._(/*BTDS*/ "Adding to Favorites list")
        : o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Adding to Favourites")
          : s._(/*BTDS*/ "Adding to Favorites");
    }
    function m() {
      return o("WAWebListsGatingUtils").isListsEnabled()
        ? o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Added to Favourites list")
          : s._(/*BTDS*/ "Added to Favorites list")
        : o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
          ? s._(/*BTDS*/ "Added to Favourites")
          : s._(/*BTDS*/ "Added to Favorites");
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i;
          if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            var l = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
              u =
                (i =
                  o("WAWebABProps").getABPropConfigValue("favorites_limit")) !=
                null
                  ? i
                  : 100;
            if (l.length + (Array.isArray(t) ? t.length : 1) > u) {
              o("WAWebModalManager").ModalManager.open(
                c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: o("WAWebModalManager").closeModalManager,
                  okText: r("WAWebFbtCommon")("OK"),
                  children: o(
                    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
                  ).isUsingSupportedBritishEnglishLocale()
                    ? s._(
                        /*BTDS*/ "You can't add more than {favorites_limit} favourites",
                        [s._param("favorites_limit", u)],
                      )
                    : s._(
                        /*BTDS*/ "You can't add more than {favorites_limit} favorites",
                        [s._param("favorites_limit", u)],
                      ),
                }),
              );
              return;
            }
            var p;
            if (Array.isArray(t)) {
              var _ = yield o(
                "WAWebDBFavoriteDatabaseApi",
              ).getNextFavoriteOrderIndex();
              p = t.map(function (e) {
                return { id: e.toString(), orderIndex: _++ };
              });
            } else p = [babelHelpers.extends({}, t)];
            a.entryPoint != null &&
              o("WAWebFavoritesLogging").logAddingMessagingFavorites(
                p,
                a.entryPoint,
              );
            var f = l.concat(p),
              g = o("WATimeUtils").unixTime(),
              h = yield r("WAWebFavoritesSync").getFavoritesMutation(f, g);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Favorites] addToFavoritesAction, mutation generated",
                ])),
            );
            var y = o("WAWebSyncdCoreApi")
              .lockForSync(
                ["favorite", "chat"],
                [h],
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  return o("WAWebDBFavoriteDatabaseApi").addOrEditFavorites(p);
                }),
              )
              .then(function () {
                return o("WAWebFavoriteCollection").FavoriteCollection.add(
                  p.map(function (e) {
                    return babelHelpers.extends({}, e);
                  }),
                );
              });
            if (a.suppressToast === !0) yield y;
            else {
              var C = new (o("WAWebActionToast.react").ActionType)(d()),
                b = y.then(function () {
                  return new (o("WAWebActionToast.react").ActionType)(m());
                });
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebActionToast.react").ActionToast, {
                  id: o("WAWebActionToast.react").genId(),
                  initialAction: C,
                  pendingAction: b,
                }),
              );
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.addToFavoritesAction = p;
  },
  226,
);
