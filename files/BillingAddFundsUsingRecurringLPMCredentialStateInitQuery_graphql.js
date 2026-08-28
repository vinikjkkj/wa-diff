__d(
  "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery.graphql",
  [
    "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery_facebookRelayOperation",
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
          name: "currency",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "amount_with_offset",
            storageKey: null,
          },
          r,
        ],
        a = [
          { kind: "Literal", name: "allowlist", value: ["USABLE"] },
          { kind: "Literal", name: "filter", value: "SUPPORTS_RECURRING" },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
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
          name: "require_auto_reload",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "supports_auto_reload",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery",
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
                    r,
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
                          selections: o,
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: a,
                  concreteType: "PaymentCredentialDetails",
                  kind: "LinkedField",
                  name: "billing_payment_methods",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "credential",
                      plural: !1,
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [i, l, s, u],
                          type: "LPMCredential",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'billing_payment_methods(allowlist:["USABLE"],filter:"SUPPORTS_RECURRING")',
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
          name: "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery",
          selections: [
            {
              alias: null,
              args: t,
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
                  selections: [
                    l,
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: "CurrencyAmount",
                      kind: "LinkedField",
                      name: "prepay_balance",
                      plural: !1,
                      selections: o,
                      storageKey: null,
                    },
                    i,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: a,
                  concreteType: "PaymentCredentialDetails",
                  kind: "LinkedField",
                  name: "billing_payment_methods",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "credential",
                      plural: !1,
                      selections: [
                        l,
                        i,
                        {
                          kind: "InlineFragment",
                          selections: [s, u],
                          type: "LPMCredential",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'billing_payment_methods(allowlist:["USABLE"],filter:"SUPPORTS_RECURRING")',
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
