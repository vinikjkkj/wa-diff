__d(
  "WAWebDeveloperToolsDBViewerUpdateFilters",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.filterIndex,
        n = e.filters,
        r = e.updatedValue,
        o = [].concat(n);
      return (r ? o.splice(t, 1, r) : o.splice(t, 1), o);
    }
    function l(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.filterIndex,
            r = t.filters,
            o = t.onFilterChange,
            a = t.updatedValue,
            i = yield e({ filterIndex: n, filters: r, updatedValue: a });
          yield o(i);
        })),
        s.apply(this, arguments)
      );
    }
    ((i.getUpdatedFilters = e), (i.updateFilters = l));
  },
  66,
);
