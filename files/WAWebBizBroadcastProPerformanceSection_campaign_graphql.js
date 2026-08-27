__d(
  "WAWebBizBroadcastProPerformanceSection_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizBroadcastProPerformanceSection_campaign",
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
                concreteType: "XFBWhatsAppBusinessMessagingEngagementMetric",
                kind: "LinkedField",
                name: "quick_reply_clicks",
                plural: !0,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppBusinessMessagingEngagementMetric",
                kind: "LinkedField",
                name: "cta_url_clicks",
                plural: !0,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "XFBWhatsAppBusinessMMLiteCampaign",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
