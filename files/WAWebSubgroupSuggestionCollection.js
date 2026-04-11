__d(
  "WAWebSubgroupSuggestionCollection",
  ["WAWebBaseCollection", "WAWebSubgroupSuggestionModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = r("WAWebSubgroupSuggestionModel")),
      (e.comparator = function (e, t) {
        return e.t - t.t;
      }),
      (l.default = e));
  },
  98,
);
