__d(
  "WAWebTemplateButtonCollection",
  ["WAWebBaseCollection", "WAWebTemplateButtonModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = r("WAWebTemplateButtonModel")),
      (e.comparator = function (e, t) {
        return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
      }),
      (l.TemplateButtonCollection = e));
  },
  98,
);
