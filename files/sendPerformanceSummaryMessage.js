__d(
  "sendPerformanceSummaryMessage",
  ["FBLogger", "convertAssetsToGraphQLType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "CAMPAIGN_GROUP"
        ? "campaign"
        : e === "CAMPAIGN"
          ? "ad set"
          : e === "ADGROUP"
            ? "ad"
            : "campaign";
    }
    function s(t, n, o, a, i, l, s) {
      return t({
        adAccountID: n,
        entrypoint: "PERFORMANCE_SUMMARY_INSIGHTS",
        entrypointContext: {
          ad_object_ids: [o],
          ad_object_level: a,
          instu_entry_point_type: "PERFORMANCE_SUMMARY_INSIGHTS",
        },
        isInSituPregeneration: !0,
        isSentFromOutOfChat: !0,
        message:
          "Analyze my " +
          e(a) +
          " performance for last 28 days and provide recommendations for improvements",
        originComponent: "MAIBAPerformanceSummaryPreloader",
        selected_assets: r("convertAssetsToGraphQLType")(i != null ? i : []),
        onCompleted: function () {
          (r("FBLogger")(
            "maiba_perf_summary_insight_generated_preloader_success",
          ).info(
            "Preloaded insight ad objects for adObject: %s, adObjectLevel: %s, accountID: %s",
            o,
            a,
            n,
          ),
            l == null || l());
        },
        onError: function (t) {
          (r("FBLogger")(
            "maiba_perf_summary_insight_generated_preloader_error",
          ).warn(
            "Error fetching eligible ad objects for pregeneration: %s, adObject: %s, adObjectLevel: %s, accountID: %s",
            t.message,
            o,
            a,
            n,
          ),
            s == null || s(t));
        },
      });
    }
    l.default = s;
  },
  98,
);
