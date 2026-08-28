__d(
  "createLevelFiltersFromFilterSet",
  ["AdsPELevelFilters", "createFilterFn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (r("AdsPELevelFilters"))(),
        n = e.toAPI();
      return (
        n.forEach(function (e) {
          var n = r("createFilterFn")(e);
          t.addFilter(n, e);
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
