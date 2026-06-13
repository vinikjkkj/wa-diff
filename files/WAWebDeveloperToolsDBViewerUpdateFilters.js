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
    function l(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, o) {
            var a = yield e({ filterIndex: t, filters: n, updatedValue: o });
            yield r(a);
          },
        )),
        s.apply(this, arguments)
      );
    }
    ((i.getUpdatedFilters = e), (i.updateFilters = l));
  },
  66,
);
