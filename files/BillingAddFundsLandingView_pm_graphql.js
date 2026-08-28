__d(
  "BillingAddFundsLandingView_pm.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "last_four_digits",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "BillingAddFundsLandingView_pm",
        selections: [
          {
            kind: "InlineDataFragmentSpread",
            name: "BillingPaymentMethodDisplayUtils_paymentCredential",
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
                    args: null,
                    kind: "ScalarField",
                    name: "card_association_name",
                    storageKey: null,
                  },
                  e,
                ],
                type: "ExternalCreditCard",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "bank_name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "bank_account_type",
                    storageKey: null,
                  },
                  e,
                ],
                type: "DirectDebit",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "email",
                    storageKey: null,
                  },
                ],
                type: "PaymentPaypalBillingAgreement",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "legal_entity_name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "partition_from",
                    storageKey: null,
                  },
                ],
                type: "IEntEC",
                abstractKey: "__isIEntEC",
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "stored_balance_type",
                    storageKey: null,
                  },
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
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "credential_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "user_display_name",
                    storageKey: null,
                  },
                  t,
                ],
                type: "LPMCredential",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [t],
                type: "AltPayCredential",
                abstractKey: null,
              },
            ],
            args: null,
            argumentDefinitions: [],
          },
        ],
        type: "PaymentCredential",
        abstractKey: "__isPaymentCredential",
      };
    })();
    a.exports = e;
  },
  null,
);
