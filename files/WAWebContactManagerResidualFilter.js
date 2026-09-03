__d(
  "WAWebContactManagerResidualFilter",
  ["WAWebContactManagerFilterRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.clientFilterKeys,
        r = t.options;
      if (n.length === 0) return e;
      var a = n.map(function (e) {
        return o("WAWebContactManagerFilterRegistry")
          .getFilterSpec(e)
          .matcher(r);
      });
      return e.filter(function (e) {
        return a.every(function (t) {
          return t(e);
        });
      });
    }
    l.filterCustomersByResidual = e;
  },
  98,
);
