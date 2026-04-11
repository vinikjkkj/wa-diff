__d(
  "WAWebFavoritesBridgeApi",
  ["WAWebFavoriteCollection"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setFavoriteCollection: function (t) {
        var e = t.favorites;
        o("WAWebFavoriteCollection").FavoriteCollection.set(
          e.map(function (e) {
            return { id: e.id, orderIndex: e.orderIndex };
          }),
        );
      },
    };
    l.FavoritesBridgeApi = e;
  },
  98,
);
