__d(
  "WAWebDeveloperToolsDBViewerUpdateFilters",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.filterIndex,
        n = e.filters,
        r = e.updatedValue,
        o = [].concat(n);
      return (r ? o.splice(t, 1, r) : o.splice(t, 1), o);
    }
    async function l(t) {
      var n = t.filterIndex,
        r = t.filters,
        o = t.onFilterChange,
        a = t.updatedValue,
        i = await e({ filterIndex: n, filters: r, updatedValue: a });
      await o(i);
    }
    ((i.getUpdatedFilters = e), (i.updateFilters = l));
  },
  66,
);
