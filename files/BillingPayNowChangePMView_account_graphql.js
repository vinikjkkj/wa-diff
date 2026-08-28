__d(
  "BillingPayNowChangePMView_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "credential_type",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "card_association_name",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "credential_id",
          storageKey: null,
        },
        o = [r],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "last_four_digits",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "country" },
          { kind: "RootArgument", name: "currency" },
          { kind: "RootArgument", name: "intent" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BillingPayNowChangePMView_account",
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
                name: "account_balance",
                plural: !1,
                selections: [
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "BillingCurrencyAmount_amount",
                    selections: [
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
            args: [
              {
                kind: "Literal",
                name: "allowlist",
                value: [
                  "UNVERIFIED_OR_PENDING_AUTH",
                  "PENDING_VERIFICATION",
                  "UNVERIFIABLE",
                ],
              },
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "currency",
                    variableName: "currency",
                  },
                  { kind: "Variable", name: "intent", variableName: "intent" },
                  {
                    kind: "Variable",
                    name: "tax_country",
                    variableName: "country",
                  },
                ],
                kind: "ObjectValue",
                name: "usability_params",
              },
            ],
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
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  t,
                  {
                    kind: "InlineFragment",
                    selections: [n, r],
                    type: "ExternalCreditCard",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: o,
                    type: "DirectDebit",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: o,
                    type: "PaymentPaypalBillingAgreement",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "BillingPaymentIconUtils_paymentCredential",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: [
                              { kind: "Literal", name: "limit", value: 1 },
                            ],
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
                            storageKey: "billing_icons(limit:1)",
                          },
                        ],
                        type: "BillingPaymentMethod",
                        abstractKey: "__isBillingPaymentMethod",
                      },
                    ],
                    args: null,
                    argumentDefinitions: [],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "BillingPaymentMethodDisplayUtils_paymentCredential",
                    selections: [
                      e,
                      {
                        kind: "InlineFragment",
                        selections: [n, a],
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
                          a,
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
                          t,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "user_display_name",
                            storageKey: null,
                          },
                          i,
                        ],
                        type: "LPMCredential",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [i],
                        type: "AltPayCredential",
                        abstractKey: null,
                      },
                    ],
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
        type: "PaymentAccount",
        abstractKey: "__isPaymentAccount",
      };
    })();
    a.exports = e;
  },
  null,
);
