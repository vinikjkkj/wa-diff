__d(
  "WAWebBizBroadcastProNewBroadcastFlowQuery.graphql",
  [
    "WAWebBizBroadcastProNewBroadcastFlowQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "audienceId" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "fetchInitialAudience",
          },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_custom_param_restricted_for_first_party_paid_messaging",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          condition: "fetchInitialAudience",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: "initialAudience",
              args: [
                { kind: "Variable", name: "find", variableName: "audienceId" },
                { kind: "Variable", name: "first", variableName: "first" },
              ],
              concreteType:
                "WhatsAppBusinessAccountWaBbProCustomAudiencesConnection",
              kind: "LinkedField",
              name: "wa_bb_pro_custom_audiences",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "WhatsAppBusinessAccountWaBbProCustomAudiencesEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdCustomAudience",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        r,
                        {
                          alias: null,
                          args: null,
                          concreteType: "CustomAudienceOperationStatus",
                          kind: "LinkedField",
                          name: "operation_status",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "status_code",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "subscriber_size",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        a = {
          alias: null,
          args: null,
          concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
          kind: "LinkedField",
          name: "default_subscriber_pool",
          plural: !1,
          selections: [r],
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        l = [
          i,
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
          name: "WAWebBizBroadcastProNewBroadcastFlowQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "WAWebBizBroadcastProNewBroadcastDrawer_query",
            },
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [t, o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppSMBBBPro",
              kind: "LinkedField",
              name: "xfb_whatsapp_bb_pro",
              plural: !1,
              selections: [a],
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
          name: "WAWebBizBroadcastProNewBroadcastFlowQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "audience_send_max_bid_amount",
                      storageKey: null,
                    },
                    r,
                    t,
                    o,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppSMBBBPro",
              kind: "LinkedField",
              name: "xfb_whatsapp_bb_pro",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
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
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                        r,
                      ],
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
                            i,
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
                              selections: l,
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
                              selections: l,
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
                    r,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "currency",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBWABBProSendingRestriction",
                  kind: "LinkedField",
                  name: "sending_restriction",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_sending_allowed",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "upsell_business_verification",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProNewBroadcastFlowQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProNewBroadcastFlowQuery",
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
