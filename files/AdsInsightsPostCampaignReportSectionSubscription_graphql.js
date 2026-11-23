__d(
  "AdsInsightsPostCampaignReportSectionSubscription.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "downloadableID" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "downloadable_id",
                variableName: "downloadableID",
              },
            ],
            concreteType:
              "XFBBrandSafetyDownloadableSubscriptionResponsePayload",
            kind: "LinkedField",
            name: "xfb_brand_safety_downloadable_subscription",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "async_job_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "file_cdn_url",
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
          name: "AdsInsightsPostCampaignReportSectionSubscription",
          selections: t,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsInsightsPostCampaignReportSectionSubscription",
          selections: t,
        },
        params: {
          id: "26661742820093071",
          metadata: {
            subscriptionName: "xfb_brand_safety_downloadable_subscription",
          },
          name: "AdsInsightsPostCampaignReportSectionSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
