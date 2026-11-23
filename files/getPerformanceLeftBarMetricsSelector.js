__d(
  "getPerformanceLeftBarMetricsSelector",
  [
    "AdsInsightsObjectStatsStore",
    "AdsInsightsObjectStatsStoreUtil",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsInsightsObjectStatsStore"),
      function (e, t) {
        return r(
          "AdsInsightsObjectStatsStoreUtil",
        ).getPerformanceLeftBarMetrics(e, t);
      },
    );
    l.default = e;
  },
  98,
);
