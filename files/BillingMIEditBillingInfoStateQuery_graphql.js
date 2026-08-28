__d(
  "BillingMIEditBillingInfoStateQuery.graphql",
  ["BillingMIEditBillingInfoStateQuery_facebookRelayOperation"],
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
            name: "payment_legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_using_ec",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingMIEditBillingInfoStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_payment_account",
              plural: !1,
              selections: [r],
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
          name: "BillingMIEditBillingInfoStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_payment_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
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
        },
        params: {
          id: n("BillingMIEditBillingInfoStateQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingMIEditBillingInfoStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
