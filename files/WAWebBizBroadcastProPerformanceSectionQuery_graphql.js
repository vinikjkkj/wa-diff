__d(
  "WAWebBizBroadcastProPerformanceSectionQuery.graphql",
  ["WAWebBizBroadcastProPerformanceSectionQuery_facebookRelayOperation"],
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
            concreteType: "XFBWhatsAppBusinessMessagingMetricCountData",
            kind: "LinkedField",
            name: "count_data",
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProPerformanceSectionQuery",
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
                  kind: "InlineFragment",
                  selections: [
                    {
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "WAWebBizBroadcastProPerformanceSection_campaign",
                          },
                        ],
                        type: "XFBWhatsAppBusinessMMLiteCampaign",
                        abstractKey: null,
                      },
                      kind: "AliasedInlineFragmentSpread",
                      name: "WAWebBizBroadcastProPerformanceSection_campaign",
                    },
                  ],
                  type: "XFBWhatsAppBusinessMMLiteCampaign",
                  abstractKey: null,
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
          name: "WAWebBizBroadcastProPerformanceSectionQuery",
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
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WhatsAppBusinessMessagingBroadcastInsights",
                      kind: "LinkedField",
                      name: "broadcast_insights",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "XFBWhatsAppBusinessMessagingEngagementMetric",
                          kind: "LinkedField",
                          name: "quick_reply_clicks",
                          plural: !0,
                          selections: r,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "XFBWhatsAppBusinessMessagingEngagementMetric",
                          kind: "LinkedField",
                          name: "cta_url_clicks",
                          plural: !0,
                          selections: r,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
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
            "WAWebBizBroadcastProPerformanceSectionQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProPerformanceSectionQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
