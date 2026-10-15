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
        r = [
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
        ];
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
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineDataFragmentSpread",
                        name: "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign",
                        selections: r,
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
                {
                  kind: "InlineFragment",
                  selections: r,
                  type: "XFBWhatsAppBusinessMMLiteCampaign",
                  abstractKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
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
