__d(
  "PerformanceSummaryPlacementOverviewProviderPlugin",
  ["AdsInsightsSections"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsInsightsSections").getDefaultForSection("placement"),
      s = e.metrics,
      u = { initialState: { metrics: s || [], subsection: "allPlacement" } },
      c = u;
    l.default = c;
  },
  98,
);
