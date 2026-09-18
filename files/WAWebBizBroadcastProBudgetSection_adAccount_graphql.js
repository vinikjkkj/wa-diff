__d(
  "WAWebBizBroadcastProBudgetSection_adAccount.graphql",
  ["WAWebBizBroadcastProBudgetSectionRefetchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        r = [
          t,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "wizard_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "wizard_props_json",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: ["node"],
            operation: n(
              "WAWebBizBroadcastProBudgetSectionRefetchQuery.graphql",
            ),
            identifierInfo: {
              identifierField: "id",
              identifierQueryVariableName: "id",
            },
          },
        },
        name: "WAWebBizBroadcastProBudgetSection_adAccount",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency_code_enum",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "payment_account",
            plural: !1,
            selections: [e],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Literal",
                name: "specific_entrypoint",
                value: "WHATSAPP_SMB",
              },
            ],
            concreteType: "XFBBillableAccountBillingInfo",
            kind: "LinkedField",
            name: "billing_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBBillableAccountPaymentSectionDetails",
                kind: "LinkedField",
                name: "payment_section_details",
                plural: !1,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "label_ax",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "logos",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBBillableAccountBillingInfoAction",
                    kind: "LinkedField",
                    name: "primary_action",
                    plural: !1,
                    selections: r,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBBillableAccountRequiredAction",
                kind: "LinkedField",
                name: "required_action",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBBillableAccountBillingInfoAction",
                    kind: "LinkedField",
                    name: "action",
                    plural: !1,
                    selections: r,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBBillableAccountBillingInfoMessage",
                    kind: "LinkedField",
                    name: "message",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "headline",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "body",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'billing_info(specific_entrypoint:"WHATSAPP_SMB")',
          },
          e,
        ],
        type: "AdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
