__d(
  "adsInsightsPerformanceGetBreakdownsFromSectionSpec",
  ["AdsInsightsPerformanceConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.subsection !== "custom") {
        var t,
          n = o("AdsInsightsPerformanceConfig").performanceTabsByID[
            (t = e.subsection) != null ? t : ""
          ];
        return { breakdowns: n.breakdowns || [], sort: n.sort || [] };
      } else return { breakdowns: [], sort: [] };
    }
    l.default = e;
  },
  98,
);
