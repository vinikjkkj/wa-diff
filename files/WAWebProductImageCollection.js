__d(
  "WAWebProductImageCollection",
  ["WAWebBaseCollection", "WAWebProductImageGetters", "WAWebProductImageModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.toArray = function () {
          var t = this;
          return e.prototype.filter.call(this, function (e) {
            return e.old ? (t.remove(e), !1) : e;
          });
        }),
        (n.remove = function (n, r) {
          var t = e.prototype.remove.call(this, n, r);
          return (
            t.forEach(function (e) {
              e != null &&
                o("WAWebProductImageGetters").clearProductImageGetterCacheFor(
                  e,
                );
            }),
            t
          );
        }),
        (n.reset = function () {
          (this.forEach(
            o("WAWebProductImageGetters").clearProductImageGetterCacheFor,
          ),
            e.prototype.reset.call(this));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebProductImageModel").ProductImage),
      (l.ProductImageCollection = e));
  },
  98,
);
