__d(
  "WAWebStickerCollection",
  ["WAWebBaseCollection", "WAWebStickerModel", "err"],
  function (t, n, r, o, a, i, l) {
    var e = { PENDING: "PENDING", SUCCESS: "SUCCESS", ERROR: "ERROR" },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.fetch = function (t) {
            throw r("err")(this.constructor.name + ".fetch is not implemented");
          }),
          t
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebStickerModel").StickerModel;
    var u = new s();
    ((l.FETCH_STATE = e),
      (l.StickerCollectionImpl = s),
      (l.StickerCollection = u));
  },
  98,
);
