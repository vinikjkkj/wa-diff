__d(
  "useWAWebBizAdCreationBudgetSpec",
  [
    "CometRelay",
    "WAWebBizAdCreationBudgetUtils",
    "react",
    "react-compiler-runtime",
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
      var t,
        n = o("react-compiler-runtime").c(3),
        r = o("CometRelay").useFragment(c, e),
        a;
      if (
        n[0] !== r.boostedComponentOptions.budgetOptions ||
        n[1] !==
          ((t = r.spec) == null || (t = t.budget) == null
            ? void 0
            : t.offsetAmount)
      ) {
        var i, l;
        ((a = o("WAWebBizAdCreationBudgetUtils").createBudgetSpec(
          {
            offsetAmount:
              (i = r.spec) == null || (i = i.budget) == null
                ? void 0
                : i.offsetAmount,
            budgetOptions: r.boostedComponentOptions.budgetOptions,
          },
          { setInitialDefault: !0 },
        )),
          (n[0] = r.boostedComponentOptions.budgetOptions),
          (n[1] =
            (l = r.spec) == null || (l = l.budget) == null
              ? void 0
              : l.offsetAmount),
          (n[2] = a));
      } else a = n[2];
      return a;
    }
    l.default = d;
  },
  98,
);
