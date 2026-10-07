__d(
  "WAWebCustomerManagerResidualFilter",
  [
    "WAWebCustomerManagerFilterRegistry",
    "WAWebCustomerManagerLocalSearch",
    "WAWebCustomerManagerProfileQueryPlan",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = t.clientFilterKeys,
        a = t.options,
        i = t.query;
      if (
        r.length === 0 &&
        !o("WAWebCustomerManagerProfileQueryPlan").isSearchQueryActive(i)
      )
        return e;
      var l = r.map(function (e) {
        return o("WAWebCustomerManagerFilterRegistry")
          .getFilterSpec(e)
          .matcher(a);
      });
      return e.filter(function (e) {
        return (
          l.every(function (t) {
            return t(e);
          }) &&
          o("WAWebCustomerManagerLocalSearch").matchesCustomerSearchQuery(
            e,
            i,
            n == null ? void 0 : n.get(String(e.chatJid)),
          )
        );
      });
    }
    l.filterCustomersByResidual = e;
  },
  98,
);
