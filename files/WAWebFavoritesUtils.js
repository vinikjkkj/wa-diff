__d(
  "WAWebFavoritesUtils",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFavoriteCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebFavoriteCollection")
        .FavoriteCollection.toArray()
        .map(function (e) {
          return o("WAWebChatCollection").ChatCollection.get(e.id);
        })
        .filter(function (e) {
          return e != null;
        })
        .sort(function (e, t) {
          var n,
            r,
            a = o("WAWebFavoriteCollection").FavoriteCollection.get(
              e.id.toString(),
            ),
            i = o("WAWebFavoriteCollection").FavoriteCollection.get(
              t.id.toString(),
            );
          return (
            ((n = a == null ? void 0 : a.orderIndex) != null ? n : 0) -
            ((r = i == null ? void 0 : i.orderIndex) != null ? r : 0)
          );
        });
    }
    function s(t) {
      return (t === void 0 && (t = 3), e().slice(0, t));
    }
    function u() {
      var e = [];
      for (var t of o("WAWebFavoriteCollection").FavoriteCollection.toArray()) {
        var n,
          r,
          a = o("WAWebWidFactory").createWid(t.id),
          i = o("WAWebChatCollection").ChatCollection.get(t.id),
          l =
            (n =
              (r = i == null ? void 0 : i.contact) != null
                ? r
                : o("WAWebContactCollection").ContactCollection.get(a)) != null
              ? n
              : null;
        (i == null && l == null) ||
          e.push({
            wid: a,
            chat: i != null ? i : null,
            contact: l,
            orderIndex: t.orderIndex,
          });
      }
      return (
        e.sort(function (e, t) {
          return e.orderIndex - t.orderIndex;
        }),
        e
      );
    }
    function c(e) {
      return (e === void 0 && (e = 3), u().slice(0, e));
    }
    ((l.getFavoriteChats = e),
      (l.getFavoriteChatsLimited = s),
      (l.getFavoriteItems = u),
      (l.getFavoriteItemsLimited = c));
  },
  98,
);
