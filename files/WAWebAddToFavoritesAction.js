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
    function p(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
            ? s._(/*BTDS*/ "", [s._param("favorites_limit", e)])
            : s._(/*BTDS*/ "", [s._param("favorites_limit", e)]),
        }),
      );
    }
    async function _(t, n) {
      var a;
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var i = await o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
          l =
            (a = o("WAWebABProps").getABPropConfigValue("favorites_limit")) !=
            null
              ? a
              : 100;
        if (i.length + (Array.isArray(t) ? t.length : 1) > l) {
          p(l);
          return;
        }
        var s;
        if (Array.isArray(t)) {
          var u = await o(
            "WAWebDBFavoriteDatabaseApi",
          ).getNextFavoriteOrderIndex();
          s = t.map(function (e) {
            return { id: e.toString(), orderIndex: u++ };
          });
        } else s = [babelHelpers.extends({}, t)];
        n.entryPoint != null &&
          o("WAWebFavoritesLogging").logAddingMessagingFavorites(
            s,
            n.entryPoint,
          );
        var _ = i.concat(s),
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
            return o("WAWebDBFavoriteDatabaseApi").addOrEditFavorites(s);
          })
          .then(function () {
            return o("WAWebFavoriteCollection").FavoriteCollection.add(
              s.map(function (e) {
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
    ((l.showFavoritesLimitExceededPopup = p), (l.addToFavoritesAction = _));
  },
  226,
);
