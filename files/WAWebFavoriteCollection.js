__d(
  "WAWebFavoriteCollection",
  [
    "WAWebBaseCollection",
    "WAWebContactCollection",
    "WAWebFavoriteModel",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.listenTo(t, "add", function (e) {
            var t = o("WAWebContactCollection").ContactCollection.get(
              o("WAWebWidFactory").createWid(e.id),
            );
            t && t.set("isFavorite", !0);
          }),
          t.listenTo(t, "remove", function (e) {
            var t = o("WAWebContactCollection").ContactCollection.get(
              o("WAWebWidFactory").createWid(e.id),
            );
            t && t.set("isFavorite", !1);
          }),
          t
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebFavoriteModel").Favorite;
    var s = new e();
    l.FavoriteCollection = s;
  },
  98,
);
