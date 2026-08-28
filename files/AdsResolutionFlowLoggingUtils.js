__d(
  "AdsResolutionFlowLoggingUtils",
  [
    "AdsGuidanceUnifiedEventsGuidanceName",
    "AdsGuidanceUnifiedEventsLoggingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.logPublishSuccessOrFailure = function (t, n, a, i, l, s, u, c) {
          var e,
            d = l ? "guidance_publish_success" : "guidance_publish_failed";
          a != null &&
            o("AdsGuidanceUnifiedEventsLoggingUtils").logGuidanceEvent({
              event: "guidance_publish",
              eventCategory: d,
              adAccountID: s,
              adObjectIDs: t != null ? t : [],
              adObjectLevel: 4,
              resolution_type: u ? String(u) : void 0,
              recommendationSource: a,
              recommendationHash: n != null ? n : "",
              recommendationType: "mid_flight_recommendation",
              recommendationName:
                (e = r("AdsGuidanceUnifiedEventsGuidanceName").cast(i)) != null
                  ? e
                  : "not_applicable",
              message: JSON.stringify({
                ad_object_ids: t,
                hash: n,
                recommendation_source: a,
                resolution_subtype: c,
              }),
              surface: "ads_manager",
              channel: o(
                "AdsGuidanceUnifiedEventsLoggingUtils",
              ).convertRecommendationSourceToGuidanceChannel(a),
            });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
