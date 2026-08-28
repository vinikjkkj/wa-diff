__d(
  "adsInsightsPerformanceGetMetricsFromSectionSpec",
  ["invariant", "AdsInsightsPerformanceConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (e.subsection && e.subsection !== "custom") {
        var t = o("AdsInsightsPerformanceConfig").performanceTabsByID[
          e.subsection
        ];
        return t.metrics || [];
      } else return (e.metrics || s(0, void 0), e.metrics);
    }
    l.default = e;
  },
  98,
);
