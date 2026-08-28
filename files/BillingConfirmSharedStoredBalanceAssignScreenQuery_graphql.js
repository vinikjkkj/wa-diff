__d(
  "BillingConfirmSharedStoredBalanceAssignScreenQuery.graphql",
  ["BillingConfirmSharedStoredBalanceAssignScreenQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentMethodID",
        },
        r = [{ kind: "Variable", name: "id", variableName: "paymentMethodID" }],
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "CurrencyAmount",
              kind: "LinkedField",
              name: "balance_amount",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "currency_name",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "StoredBalance",
          abstractKey: null,
        },
        a = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "business_object_name",
              storageKey: null,
            },
          ],
          type: "BusinessObjectRenderedInUI",
          abstractKey: "__isBusinessObjectRenderedInUI",
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "BillingConfirmSharedStoredBalanceAssignScreenQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [o],
              storageKey: null,
            },
            {
              alias: null,
              args: a,
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
                  selections: [i],
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
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "BillingConfirmSharedStoredBalanceAssignScreenQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [l, o, s],
              storageKey: null,
            },
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                l,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [l, i, s],
                  storageKey: null,
                },
                s,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingConfirmSharedStoredBalanceAssignScreenQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingConfirmSharedStoredBalanceAssignScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
