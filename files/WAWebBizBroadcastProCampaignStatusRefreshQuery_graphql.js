__d(
  "WAWebBizBroadcastProCampaignStatusRefreshQuery.graphql",
  ["WAWebBizBroadcastProCampaignStatusRefreshQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaignId" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignId" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "bb_pro_can_stop",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "bb_pro_display_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBBMCampaignDeliveryStatusInfo",
            kind: "LinkedField",
            name: "delivery_status_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WhatsAppBusinessMessagingBroadcastInsights",
              kind: "LinkedField",
              name: "broadcast_insights",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBWhatsAppBusinessMessagingMetricCountData",
                  kind: "LinkedField",
                  name: "ads_delivered",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "count",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "XFBWhatsAppBusinessMMLiteCampaign",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProCampaignStatusRefreshQuery",
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
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineDataFragmentSpread",
                        name: "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign",
                        selections: o,
                        args: null,
                        argumentDefinitions: [],
                      },
                    ],
                    type: "XFBWhatsAppBusinessMMLiteCampaign",
                    abstractKey: null,
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign",
                },
                {
                  fragment: a,
                  kind: "AliasedInlineFragmentSpread",
                  name: "deliveryMetrics",
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
          name: "WAWebBizBroadcastProCampaignStatusRefreshQuery",
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
                {
                  kind: "InlineFragment",
                  selections: o,
                  type: "XFBWhatsAppBusinessMMLiteCampaign",
                  abstractKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProCampaignStatusRefreshQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProCampaignStatusRefreshQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
