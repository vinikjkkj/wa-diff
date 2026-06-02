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
    async function p(t, n) {
      var a;
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var i = await o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
          l =
            (a = o("WAWebABProps").getABPropConfigValue("favorites_limit")) !=
            null
              ? a
              : 100;
        if (i.length + (Array.isArray(t) ? t.length : 1) > l) {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(
                    /*BTDS*/ "You can't add more than {favorites_limit} favourites",
                    [s._param("favorites_limit", l)],
                  )
                : s._(
                    /*BTDS*/ "You can't add more than {favorites_limit} favorites",
                    [s._param("favorites_limit", l)],
                  ),
            }),
          );
          return;
        }
        var u;
        if (Array.isArray(t)) {
          var p = await o(
            "WAWebDBFavoriteDatabaseApi",
          ).getNextFavoriteOrderIndex();
          u = t.map(function (e) {
            return { id: e.toString(), orderIndex: p++ };
          });
        } else u = [babelHelpers.extends({}, t)];
        n.entryPoint != null &&
          o("WAWebFavoritesLogging").logAddingMessagingFavorites(
            u,
            n.entryPoint,
          );
        var _ = i.concat(u),
          f = o("WATimeUtils").unixTime(),
          g = await r("WAWebFavoritesSync").getFavoritesMutation(_, f);
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Favorites] addToFavoritesAction, mutation generated",
            ])),
        );
        var h = o("WAWebSyncdCoreApi")
          .lockForSync(["favorite", "chat"], [g], async function () {
            return o("WAWebDBFavoriteDatabaseApi").addOrEditFavorites(u);
          })
          .then(function () {
            return o("WAWebFavoriteCollection").FavoriteCollection.add(
              u.map(function (e) {
                return babelHelpers.extends({}, e);
              }),
            );
          });
        if (n.suppressToast === !0) await h;
        else {
          var y = new (o("WAWebActionToast.react").ActionType)(d()),
            C = h.then(function () {
              return new (o("WAWebActionToast.react").ActionType)(m());
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
    }
    l.addToFavoritesAction = p;
  },
  226,
);
