__d(
  "WAWebStickerCollection",
  ["WAWebBaseCollection", "WAWebStickerGetters", "WAWebStickerModel", "err"],
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
          (n.remove = function (n, r) {
            var t = e.prototype.remove.call(this, n, r);
            return (
              t.forEach(function (e) {
                e != null &&
                  o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
              }),
              t
            );
          }),
          (n.reset = function () {
            (this.forEach(function (e) {
              return o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
            }),
              e.prototype.reset.call(this));
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
