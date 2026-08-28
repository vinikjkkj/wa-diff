__d(
  "AdsDeliveryMidFlightAudienceExpansionAdoptionLoggerPlugins",
  [
    "AdsMidFlightRecommendationLoggingUtils",
    "targetingBulkSpecTransformSpecToAdsBulkValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t, n) {
          var e = n.audienceExpansionModalProvider;
          t.campaignIDs
            .filter(function (t) {
              var n;
              return (n = e.campaignIDsToUseSuggestedAudience) == null
                ? void 0
                : n.has(t);
            })
            .forEach(function (t) {
              return o("AdsMidFlightRecommendationLoggingUtils").logPublish(
                "audience_expansion_resolution_publish_draft_action",
                "audience_expansion",
                JSON.stringify({
                  campaignID: t,
                  campaignIDsToUseSuggestedAudience:
                    e.campaignIDsToUseSuggestedAudience,
                }),
              );
            });
        },
      },
      s = {
        log: function (t, n) {
          var e = n.audienceExpansionModalProvider;
          t.campaignIDs
            .filter(function (t) {
              var n;
              return (n = e.campaignIDsToUseSuggestedAudience) == null
                ? void 0
                : n.has(t);
            })
            .forEach(function (n) {
              return o("AdsMidFlightRecommendationLoggingUtils").logPublish(
                "audience_expansion_resolution_set_targeting_spec_action",
                "audience_expansion",
                JSON.stringify({
                  campaignID: n,
                  newTargetingSpec: r(
                    "targetingBulkSpecTransformSpecToAdsBulkValue",
                  )(t.targetingBulkSpec),
                  campaignIDsToUseSuggestedAudience:
                    e.campaignIDsToUseSuggestedAudience,
                }),
              );
            });
        },
      };
    ((l.AdsDeliveryMidFlightAudienceExpansionAdoptionLoggerPlugins = e),
      (l.AdsDeliveryMidFlightAudienceExpansionSetTargetingSpecLoggerPlugins =
        s));
  },
  98,
);
