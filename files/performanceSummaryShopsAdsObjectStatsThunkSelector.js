__d(
  "performanceSummaryShopsAdsObjectStatsThunkSelector",
  ["AdsInsightsObjectStatsStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsInsightsObjectStatsStore"),
      function (e, t, n, o) {
        return r("AdsInsightsObjectStatsStore").get(e, t, n, o);
      },
    );
    l.default = e;
  },
  98,
);
