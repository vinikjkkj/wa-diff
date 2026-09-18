__d(
  "WAWebBizBroadcastProBudgetSectionRefetchQuery.graphql",
  ["WAWebBizBroadcastProBudgetSectionRefetchQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
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
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        i = [
          a,
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
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProBudgetSectionRefetchQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WAWebBizBroadcastProBudgetSection_adAccount",
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
          name: "WAWebBizBroadcastProBudgetSectionRefetchQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                r,
                o,
                {
                  kind: "InlineFragment",
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
                      selections: [r, o],
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
                          concreteType:
                            "XFBBillableAccountPaymentSectionDetails",
                          kind: "LinkedField",
                          name: "payment_section_details",
                          plural: !1,
                          selections: [
                            a,
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
                              concreteType:
                                "XFBBillableAccountBillingInfoAction",
                              kind: "LinkedField",
                              name: "primary_action",
                              plural: !1,
                              selections: i,
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
                              concreteType:
                                "XFBBillableAccountBillingInfoAction",
                              kind: "LinkedField",
                              name: "action",
                              plural: !1,
                              selections: i,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBBillableAccountBillingInfoMessage",
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
                      storageKey:
                        'billing_info(specific_entrypoint:"WHATSAPP_SMB")',
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProBudgetSectionRefetchQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProBudgetSectionRefetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
