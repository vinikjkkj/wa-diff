__d(
  "useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper.graphql",
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
        name: "useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "spec",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CurrencyQuantity",
                kind: "LinkedField",
                name: "budget",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: "boostedComponentOptions",
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "options",
              plural: !1,
              selections: [
                {
                  alias: "budgetOptions",
                  args: [
                    { kind: "Literal", name: "granularity", value: "HIGH" },
                  ],
                  concreteType: "CurrencyQuantity",
                  kind: "LinkedField",
                  name: "budget_options",
                  plural: !0,
                  selections: e,
                  storageKey: 'budget_options(granularity:"HIGH")',
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "boostedComponentOptions",
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
