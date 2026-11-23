__d(
  "PerformanceSummaryShopsAdsROASAndPCVWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryShopsAdsROASAndPCVContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "saROASAndPCV",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .ShopsAdsROAS,
        ContentComponent: function (t) {
          return s.jsx(
            r("PerformanceSummaryShopsAdsROASAndPCVContainer.react"),
            { currentLevel: t.currentLevel },
          );
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "shops_ads_roas_and_pcv",
      },
      c = u;
    l.default = c;
  },
  98,
);
