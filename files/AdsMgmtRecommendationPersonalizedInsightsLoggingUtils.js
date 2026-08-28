__d(
  "AdsMgmtRecommendationPersonalizedInsightsLoggingUtils",
  [
    "$InternalEnum",
    "AdsGuidanceActionsPerfScoreQEUtils",
    "AdsGuidanceUnifiedEventsGuidanceName",
    "AdsGuidanceUnifiedEventsLoggingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "COMPETITIVE_INDUSTRY_BENCHMARK",
      "PLE_V2",
      "SOCIAL_PROOF",
      "CIB_DOTTED_UNDERLINE",
    ]);
    function s(e) {
      var t,
        n = e.adAccountID,
        a = e.adObjectIDs,
        i = a === void 0 ? [] : a,
        l = e.adObjectLevel,
        s = l === void 0 ? 7 : l,
        u = e.channel,
        c = e.component,
        d = e.event,
        m = e.experiment,
        p = e.guidanceType,
        _ = e.recommendationSource,
        f = _ === void 0 ? "unspecified" : _,
        g = e.recommendationType,
        h = e.text;
      o("AdsGuidanceUnifiedEventsLoggingUtils").logGuidanceEvent({
        adAccountID: n,
        adObjectIDs: i,
        adObjectLevel: s,
        channel: u,
        component: c,
        event: d,
        eventCategory: "insights",
        logLevel: "info",
        message: JSON.stringify({ experiment: m, event: d, text: h }),
        os_version: o(
          "AdsGuidanceActionsPerfScoreQEUtils",
        ).getOpportunityScoreVersionNameForUGP(),
        recommendationHash: "",
        recommendationSource: f,
        recommendationType: p,
        recommendationName:
          (t = r("AdsGuidanceUnifiedEventsGuidanceName").cast(g)) != null
            ? t
            : "not_applicable",
        surface: "ads_manager",
      });
    }
    function u(t) {
      switch (t) {
        case "ads_insights_cib_display_only_launch_gk":
        case "ads_duplication_upgrade_cib_mvp":
        case "ads_duplication_upgrade_cib_expansion":
        case "ads_pfr_cib_expansion":
        case "ads_pfr_cib_unified_3arm_relaunch":
          return e.COMPETITIVE_INDUSTRY_BENCHMARK;
        case "ads_insights_ple_v2_launch_gk":
          return e.PLE_V2;
        default:
          return null;
      }
    }
    function c(e) {
      switch (e) {
        case "ads_insights_cib_display_only_launch_gk":
        case "ads_duplication_upgrade_cib_mvp":
        case "ads_duplication_upgrade_cib_expansion":
        case "ads_pfr_cib_expansion":
        case "ads_pfr_cib_unified_3arm_relaunch":
          return "competitive_industry_benchmark_insight_impression";
        case "ads_insights_ple_v2_launch_gk":
          return "ple_v2_insight_impression";
        default:
          return "outcome_prediction_loaded";
      }
    }
    ((l.PersonalizedInsightLoggingType = e),
      (l.logInsightsForGuidanceEvent = s),
      (l.getInsightTypeForLogging = u),
      (l.getInsightsImpressionEventTypeForLogging = c));
  },
  98,
);
