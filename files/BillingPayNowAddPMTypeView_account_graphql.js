__d(
  "BillingPayNowAddPMTypeView_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        kind: "Variable",
        name: "payment_legacy_account_id",
        variableName: "paymentAccountID",
      };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "country" },
          { kind: "RootArgument", name: "currency" },
          { kind: "RootArgument", name: "intent" },
          { kind: "RootArgument", name: "paymentAccountID" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BillingPayNowAddPMTypeView_account",
        selections: [
          {
            alias: "payment_method_options",
            args: [
              { kind: "Variable", name: "country", variableName: "country" },
              { kind: "Variable", name: "currency", variableName: "currency" },
              { kind: "Variable", name: "intent", variableName: "intent" },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "billing_payment_method_options",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: [{ kind: "Literal", name: "limit", value: 5 }, e],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "billing_icons",
                    plural: !0,
                    selections: [
                      {
                        kind: "InlineDataFragmentSpread",
                        name: "BillingPaymentIconUtils_data",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "uri",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "scale",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "height",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "width",
                            storageKey: null,
                          },
                        ],
                        args: null,
                        argumentDefinitions: [],
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "BillingPaymentMethodOption",
                abstractKey: "__isBillingPaymentMethodOption",
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "credential_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "payment_method_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      e,
                      { kind: "Literal", name: "skip_qe_check", value: !0 },
                    ],
                    kind: "ScalarField",
                    name: "supports_recurring",
                    storageKey: null,
                  },
                ],
                type: "AdAccountAltpayOption",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "PaymentAccount",
        abstractKey: "__isPaymentAccount",
      };
    })();
    a.exports = e;
  },
  null,
);
