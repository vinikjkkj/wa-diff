__d(
  "BillingDecideShouldUsePaymentAccountAddFundsStateQuery.graphql",
  [
    "BillingDecideShouldUsePaymentAccountAddFundsStateQuery_facebookRelayOperation",
  ],
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
        r = {
          alias: "allow_payment_account_add_funds",
          args: [
            {
              kind: "Literal",
              name: "gk",
              value: "PAYMENT_ACCOUNT_ADD_FUNDS_DEV",
            },
          ],
          kind: "ScalarField",
          name: "gk_on_payment_account",
          storageKey:
            'gk_on_payment_account(gk:"PAYMENT_ACCOUNT_ADD_FUNDS_DEV")',
        },
        o = {
          alias: "allow_biz_stored_balance",
          args: [
            { kind: "Literal", name: "gk", value: "BIZ_STORED_BALANCE_DEV" },
          ],
          kind: "ScalarField",
          name: "gk_on_payment_account",
          storageKey: 'gk_on_payment_account(gk:"BIZ_STORED_BALANCE_DEV")',
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "application_type",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = {
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
          name: "BillingDecideShouldUsePaymentAccountAddFundsStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [a],
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
          name: "BillingDecideShouldUsePaymentAccountAddFundsStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                i,
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [i, a, l],
                  storageKey: null,
                },
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingDecideShouldUsePaymentAccountAddFundsStateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingDecideShouldUsePaymentAccountAddFundsStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
