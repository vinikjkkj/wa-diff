__d(
  "BillingPaymentAccountAddFundsStateQuery.graphql",
  ["BillingPaymentAccountAddFundsStateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        r = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "amount_with_offset",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency",
            storageKey: null,
          },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingPaymentAccountAddFundsStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CurrencyAmount",
                      kind: "LinkedField",
                      name: "prepay_balance",
                      plural: !1,
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "BillingCurrencyAmount_amount",
                          selections: r,
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      storageKey: null,
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
          name: "BillingPaymentAccountAddFundsStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    o,
                    {
                      alias: null,
                      args: null,
                      concreteType: "CurrencyAmount",
                      kind: "LinkedField",
                      name: "prepay_balance",
                      plural: !1,
                      selections: r,
                      storageKey: null,
                    },
                    a,
                  ],
                  storageKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingPaymentAccountAddFundsStateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingPaymentAccountAddFundsStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
