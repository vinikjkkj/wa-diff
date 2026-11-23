__d(
  "AdsManagerToCreativeInsightsALLogging",
  ["AdsInsightsLoggingCapabilityUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      ANALYZE_BUTTON: "creative_insights_video_analyze_button",
      CHART: "creative_insights_video_chart_plot",
      CTR_CHART: "creative_insights_video_ctr_chart",
      CTR_SPARSE: "creative_insights_video_ctr_sparse",
      CTR_TAB: "creative_insights_video_chart_ctr_tab",
      RETENTION_TAB: "creative_insights_video_chart_retention_tab",
      VIDEO_PLAYER: "creative_insights_video_player",
    };
    function s(e, t, n) {
      var r;
      n === void 0 && (n = {});
      var a = babelHelpers.extends({}, n, {
          engagement: "false",
          pi_feature: "creative_insights_video_chart",
          product_area: "performance_intelligence",
        }),
        i = babelHelpers.extends({}, n, {
          engagement: "true",
          pi_feature: "creative_insights_video_chart",
          product_area: "performance_intelligence",
        });
      return {
        capability: o("AdsInsightsLoggingCapabilityUtil")
          .INSIGHTS_ALSURFACE_CAPABILITY,
        metadata: a,
        surface: e,
        uiEventMetadata: ((r = {}), (r[t] = i), r),
      };
    }
    ((l.VideoChartALSurfaces = e), (l.getVideoChartLogging = s));
  },
  98,
);
