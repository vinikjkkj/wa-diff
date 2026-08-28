__d(
  "adsInsightsPerformanceGetSummaryFieldsFromSectionSpec",
  [
    "AdsInsightsPerformanceConfig",
    "AdsInsightsPerformanceMetricsUtils",
    "flatMapArray",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.subsection && e.subsection !== "custom") {
        var t = o("AdsInsightsPerformanceConfig").performanceTabsByID[
          e.subsection
        ];
        return t.summaryFields || [];
      } else
        return r("flatMapArray")(r("nullthrows")(e.metrics), function (e) {
          return o("AdsInsightsPerformanceMetricsUtils").getConfig(e)
            .summaryFields;
        });
    }
    l.default = e;
  },
  98,
);
