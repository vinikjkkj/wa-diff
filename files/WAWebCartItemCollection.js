__d(
  "WAWebCartItemCollection",
  ["WAWebBaseCollection", "WAWebCartItemModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebCartItemModel").CartItem), (l.CartItemCollection = e));
  },
  98,
);
