__d(
  "BillingDetermineAwareOnboardingOptionStateQuery.graphql",
  [
    "BillingDetermineAwareOnboardingOptionStateQuery_facebookRelayOperation",
    "relay-runtime",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
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
          name: "BillingDetermineAwareOnboardingOptionStateQuery",
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
                  name: "billing_payment_method_options",
                  plural: !0,
                  selections: [r],
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
          name: "BillingDetermineAwareOnboardingOptionStateQuery",
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
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billing_payment_method_options",
                  plural: !0,
                  selections: [r, o],
                  storageKey: null,
                },
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingDetermineAwareOnboardingOptionStateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingDetermineAwareOnboardingOptionStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
