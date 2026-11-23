__d(
  "adsInsightsPerformanceBreakdownEmptyChartSelectorUtils",
  [
    "AdsInsightsField",
    "AdsInsightsObjectStatsStoreUtil",
    "AdsInsightsSections",
    "AdsInsightsTimeRangeUtil",
    "flattenArray",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i = t.timeRange,
        l = e.getValueEnforcing(),
        s = n.isEmpty,
        u = s === !0,
        c = o("AdsInsightsSections").getConfig("placement"),
        d = r("AdsInsightsObjectStatsStoreUtil").getAllPlacementBreakdownRows(
          r("flattenArray")(r("nullthrows")(c.metricOptions)),
          t,
          l,
        ),
        m = d.summary,
        p = !((a = m.value) != null && a[r("AdsInsightsField").IMPRESSIONS]),
        _ = o("AdsInsightsTimeRangeUtil").isTimeRangeInFuture(l.timezoneID, i);
      return {
        isAudienceChartEmpty: u || _,
        isBreakdownChartEmpty: p || _,
        isTimeRangeInFuture: _,
      };
    }
    l.adsInsightsPerformanceBreakdownEmptyChart = e;
  },
  98,
);
