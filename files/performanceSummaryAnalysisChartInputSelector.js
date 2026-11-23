__d(
  "performanceSummaryAnalysisChartInputSelector",
  [
    "AdsInsightsTimeRangeUtil",
    "LocalDate",
    "adsCreateSelector",
    "performanceSummaryInsightsMetricsDynamicSelector",
    "performanceSummaryInsightsOverviewSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("performanceSummaryInsightsOverviewSelectors")
            .performanceSummaryInsightsOverviewSelector,
          r("performanceSummaryInsightsMetricsDynamicSelector"),
        ],
        function (t, n) {
          var e = t.getValue();
          if (e == null) return null;
          var a = n(e.viewSpec).getValue();
          if (a == null) return null;
          var i = e.viewSpec.timeRange,
            l = e.accountInfo.timezoneID;
          return {
            activeMetric: a.activeMetric,
            chartMetrics: a.selectedMetrics,
            interval: i.isLifetime()
              ? null
              : o("AdsInsightsTimeRangeUtil")
                  .toDateInterval(i, r("LocalDate").today(l))
                  .toTimeInterval(l),
          };
        },
        { name: i.id + ".performanceSummaryAnalysisChartInputSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
