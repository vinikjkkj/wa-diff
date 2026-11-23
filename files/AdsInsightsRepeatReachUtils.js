__d(
  "AdsInsightsRepeatReachUtils",
  [
    "AdsGuidanceActionsTabsAction",
    "AdsMgmtDrawerActions",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsPerfIntelLLMRecsGating",
    "AdsToggleSource",
    "PerformanceSummaryConfirmSelectedChartMetricsAction",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("AdsInsightsPreloader").__setRef(
        "AdsInsightsRepeatReachUtils",
      ),
      s = "repeat_reach",
      u = function (t, n, a, i) {
        if (n !== r("AdsObjectTypes").CAMPAIGN || a !== "reach" || t == null)
          return !1;
        var e = t.current_saturation_level,
          l = t.high_saturation_threshold;
        return l === 0 || e <= l
          ? !1
          : o("AdsPerfIntelLLMRecsGating").isPerfIntelLLMRecsAllocated() &&
              o("AdsPerfIntelLLMRecsGating").isPerfIntelLLMRecsEnabled();
      },
      c = function (t) {
        return t == null
          ? null
          : t.find(function (e) {
              return e.recommendation_type === "advantage_plus_audience";
            });
      };
    function d(t, n, a) {
      e.onReady(function (e) {
        return e.preload();
      });
      var l = o("AdsObjectTypeUtils").toObjectLevel(n);
      l != null &&
        (o("AdsMgmtDrawerActions").openTarget(
          "INSIGHTS_DRAWER",
          [t],
          l,
          r("AdsToggleSource").repeat_reach_card,
          !1,
          null,
          null,
          null,
          0,
        ),
        r("PerformanceSummaryConfirmSelectedChartMetricsAction").dispatch(
          { selectedMetrics: [a] },
          {
            line: "98",
            module: "AdsInsightsRepeatReachUtils.js",
            moduleID: i.id,
          },
        ),
        r("AdsGuidanceActionsTabsAction").dispatch(
          { scrollTarget: s },
          {
            line: "101",
            module: "AdsInsightsRepeatReachUtils.js",
            moduleID: i.id,
          },
        ));
    }
    var m = function () {
      return o("AdsPerfIntelLLMRecsGating").isPerfIntelLLMRecsAllocated();
    };
    ((l.REPEAT_REACH_SCROLL_TARGET = s),
      (l.shouldExposeRepeatReach = u),
      (l.getAdvantagePlusAudienceRecommendation = c),
      (l.openRepeatReachInsights = d),
      (l.isRepeatReachEnabledForReachCell = m));
  },
  98,
);
