__d(
  "useWAWebBizAdCreationBudgetSpec",
  [
    "CometRelay",
    "WAWebBizAdCreationBudgetUtils",
    "react",
    "useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo,
      c =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper.graphql",
            ));
    function d(e) {
      var t = o("CometRelay").useFragment(c, e);
      return u(
        function () {
          var e;
          return o("WAWebBizAdCreationBudgetUtils").createBudgetSpec(
            {
              offsetAmount:
                (e = t.spec) == null || (e = e.budget) == null
                  ? void 0
                  : e.offsetAmount,
              budgetOptions: t.boostedComponentOptions.budgetOptions,
            },
            { setInitialDefault: !0 },
          );
        },
        [t],
      );
    }
    l.default = d;
  },
  98,
);
