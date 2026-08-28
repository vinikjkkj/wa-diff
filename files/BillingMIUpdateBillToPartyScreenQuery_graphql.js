__d(
  "BillingMIUpdateBillToPartyScreenQuery.graphql",
  ["BillingMIUpdateBillToPartyScreenQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "organizationID",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentMethodID",
        },
        o = [
          {
            kind: "Variable",
            name: "payment_legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "credential_id",
            storageKey: null,
          },
        ],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legal_entity_name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "BillingMIUpdateBillToPartyScreenQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useBillingUpdateBillToParty_values",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "BillingMIUpdateBillToPartyView_values",
            },
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_payment_account",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useBillingMiToMiTransition_primaryMethod",
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
          argumentDefinitions: [t, r, e],
          kind: "Operation",
          name: "BillingMIUpdateBillToPartyScreenQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_payment_account",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                i,
                {
                  alias: "ads_pausing_options",
                  args: [
                    {
                      kind: "Literal",
                      name: "gk_name",
                      value: "AOAB_PAUSING_ADS_OPTIONS",
                    },
                  ],
                  kind: "ScalarField",
                  name: "gk_on_payment_account",
                  storageKey:
                    'gk_on_payment_account(gk_name:"AOAB_PAUSING_ADS_OPTIONS")',
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "billToOrgName",
                      args: null,
                      kind: "ScalarField",
                      name: "billto_legal_entity_name",
                      storageKey: null,
                    },
                    {
                      alias: "liableOrgName",
                      args: null,
                      kind: "ScalarField",
                      name: "liable_legal_entity_name",
                      storageKey: null,
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                {
                  kind: "TypeDiscriminator",
                  abstractKey: "__isBillableAccount",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billing_payment_account",
                  plural: !1,
                  selections: [
                    a,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isPaymentAccount",
                    },
                    {
                      alias: "primaryMethod",
                      args: [
                        {
                          kind: "Literal",
                          name: "filter",
                          value: "PRIMARY_ONLY",
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
                            a,
                            i,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "credential_type",
                              storageKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: l,
                              type: "DirectDebit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: l,
                              type: "PaymentPaypalBillingAgreement",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: l,
                              type: "ExternalCreditCard",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'billing_payment_methods(filter:"PRIMARY_ONLY")',
                    },
                    i,
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
                  kind: "Variable",
                  name: "id",
                  variableName: "paymentMethodID",
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "extended_credit",
              plural: !1,
              selections: [a, s, i],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "id",
                  variableName: "organizationID",
                },
              ],
              concreteType: "Organization",
              kind: "LinkedField",
              name: "organization",
              plural: !1,
              selections: [s, i],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingMIUpdateBillToPartyScreenQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingMIUpdateBillToPartyScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
