__d(
  "WAWebCustomerManagerResidualFilter",
  [
    "WAWebCustomerManagerFilterRegistry",
    "WAWebCustomerManagerLocalSearch",
    "WAWebCustomerManagerProfileQueryPlan",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = t.clientFilterKeys,
        i = t.options,
        l = t.query;
      if (
        a.length === 0 &&
        !o("WAWebCustomerManagerProfileQueryPlan").isSearchQueryActive(l)
      )
        return e;
      var s = a.map(function (e) {
          return o("WAWebCustomerManagerFilterRegistry")
            .getFilterSpec(e)
            .matcher(i);
        }),
        u = o(
          "WAWebCustomerManagerLocalSearch",
        ).createCustomerSearchQueryMatcher(l, r);
      return e.filter(function (e) {
        return (
          s.every(function (t) {
            return t(e);
          }) && u(e, n == null ? void 0 : n.get(String(e.chatJid)))
        );
      });
    }
    l.filterCustomersByResidual = e;
  },
  98,
);
