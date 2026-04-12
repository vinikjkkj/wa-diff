__d(
  "useWAWebBizAdCreationBudgetOptions",
  ["WAWebBizAdCreationSpecContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d() {
      var e,
        t = u(r("WAWebBizAdCreationSpecContext")),
        n = t.currentValue,
        o = n.budgetData,
        a = c(
          function () {
            var e;
            return (e = o == null ? void 0 : o.budgetOptions) != null ? e : [];
          },
          [o == null ? void 0 : o.budgetOptions],
        ),
        i = o == null ? void 0 : o.defaultBudget,
        l = (e = o == null ? void 0 : o.budget) != null ? e : 0,
        s = c(
          function () {
            var e = [].concat(a);
            return (
              i != null && (e = e.concat(i)),
              (e = e.concat(l)),
              (e = Array.from(new Set(e)).sort(function (e, t) {
                return e - t;
              })),
              e
            );
          },
          [a, i, l],
        );
      return s;
    }
    l.default = d;
  },
  98,
);
