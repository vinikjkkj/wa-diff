__d(
  "WAWebProductImageCollection",
  ["WAWebBaseCollection", "WAWebProductImageModel"],
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
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebProductImageModel").ProductImage),
      (l.ProductImageCollection = e));
  },
  98,
);
