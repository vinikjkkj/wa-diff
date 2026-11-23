__d(
  "PerformanceSummaryShopsAdsUtils",
  ["adsGetInsightsMetricDefinition", "performanceSummaryGetMetricLabel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsGetInsightsMetricDefinition")(e),
        n = r("performanceSummaryGetMetricLabel")({
          customConversion: void 0,
          metric: e,
          resultsField: void 0,
        });
      return { definition: t, label: n };
    }
    l.getMetricInfo = e;
  },
  98,
);
