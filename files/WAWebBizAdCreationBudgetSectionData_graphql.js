__d(
  "WAWebBizAdCreationBudgetSectionData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: "offsetAmount",
          args: null,
          kind: "ScalarField",
          name: "offset_amount",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizAdCreationBudgetSectionData",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "AdsLWIContraints",
            kind: "LinkedField",
            name: "constraints",
            plural: !1,
            selections: [
              {
                alias: "minDailyBudget",
                args: null,
                concreteType: "CurrencyQuantity",
                kind: "LinkedField",
                name: "min_daily_budget",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: "maxDailyBudget",
                args: null,
                concreteType: "CurrencyQuantity",
                kind: "LinkedField",
                name: "max_daily_budget",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "BoostedComponentCommonWrapper",
        abstractKey: "__isBoostedComponentCommonWrapper",
      };
    })();
    a.exports = e;
  },
  null,
);
