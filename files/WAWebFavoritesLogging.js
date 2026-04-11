__d(
  "WAWebFavoritesLogging",
  [
    "WALogger",
    "WAWebFavoriteCollection",
    "WAWebMessagingFavoritesUpdateWamEvent",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      try {
        var a = 0,
          i = 0,
          l = 0,
          s = 0;
        (o("WAWebFavoriteCollection").FavoriteCollection.forEach(function (e) {
          r("WAWebWid").isGroup(e.id) ? l++ : a++;
        }),
          (i = a),
          (s = l),
          t.forEach(function (e) {
            r("WAWebWid").isGroup(e.id) ? s++ : i++;
          }),
          new (o(
            "WAWebMessagingFavoritesUpdateWamEvent",
          ).MessagingFavoritesUpdateWamEvent)({
            favoritesUpdateEntryPoint: n,
            contactFavCountBeforeUpdate: a,
            contactFavCountAfterUpdate: i,
            groupFavCountBeforeUpdate: l,
            groupFavCountAfterUpdate: s,
          }).commit());
      } catch (t) {
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Favorites] logAddingMessagingFavorites, error: ",
                "",
              ])),
            t,
          )
          .sendLogs("logAddingMessagingFavorites");
      }
    }
    function c(e, t) {
      try {
        var n = 0,
          a = 0,
          i = 0,
          l = 0;
        (o("WAWebFavoriteCollection").FavoriteCollection.forEach(function (e) {
          r("WAWebWid").isGroup(e.id) ? i++ : n++;
        }),
          (a = n),
          (l = i),
          e.forEach(function (e) {
            r("WAWebWid").isGroup(e) ? l-- : a--;
          }),
          (a = Math.max(a, 0)),
          (l = Math.max(l, 0)),
          new (o(
            "WAWebMessagingFavoritesUpdateWamEvent",
          ).MessagingFavoritesUpdateWamEvent)({
            favoritesUpdateEntryPoint: t,
            contactFavCountBeforeUpdate: n,
            contactFavCountAfterUpdate: a,
            groupFavCountBeforeUpdate: i,
            groupFavCountAfterUpdate: l,
          }).commit());
      } catch (e) {
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Favorites] logRemovingMessagingFavorites, error: ",
                "",
              ])),
            e,
          )
          .sendLogs("logRemovingMessagingFavorites");
      }
    }
    ((l.logAddingMessagingFavorites = u),
      (l.logRemovingMessagingFavorites = c));
  },
  98,
);
