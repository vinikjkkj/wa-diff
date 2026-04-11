__d(
  "useWAWebBizAdCreationAdAccountUpdate_BudgetQuery.graphql",
  ["useWAWebBizAdCreationAdAccountUpdate_BudgetQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        r = [
          {
            alias: "offsetAmount",
            args: null,
            kind: "ScalarField",
            name: "offset_amount",
            storageKey: null,
          },
        ],
        o = {
          alias: null,
          args: null,
          concreteType: "CurrencyQuantity",
          kind: "LinkedField",
          name: "budget",
          plural: !1,
          selections: r,
          storageKey: null,
        },
        a = {
          alias: "budgetOptions",
          args: [{ kind: "Literal", name: "granularity", value: "HIGH" }],
          concreteType: "CurrencyQuantity",
          kind: "LinkedField",
          name: "budget_options",
          plural: !0,
          selections: r,
          storageKey: 'budget_options(granularity:"HIGH")',
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdCreationAdAccountUpdate_BudgetQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LWIAPI",
              kind: "LinkedField",
              name: "lwi",
              plural: !1,
              selections: [
                {
                  alias: "boostedComponent",
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "boosted_component",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "spec",
                      plural: !1,
                      selections: [o],
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
                        selections: [a],
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "lwi.boostedComponent.boostedComponentOptions",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCreationAdAccountUpdate_BudgetQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LWIAPI",
              kind: "LinkedField",
              name: "lwi",
              plural: !1,
              selections: [
                {
                  alias: "boostedComponent",
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "boosted_component",
                  plural: !1,
                  selections: [
                    i,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "spec",
                      plural: !1,
                      selections: [i, o],
                      storageKey: null,
                    },
                    {
                      alias: "boostedComponentOptions",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "options",
                      plural: !1,
                      selections: [i, a],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "useWAWebBizAdCreationAdAccountUpdate_BudgetQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationAdAccountUpdate_BudgetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
