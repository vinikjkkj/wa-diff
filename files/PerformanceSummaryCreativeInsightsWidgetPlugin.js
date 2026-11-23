__d(
  "PerformanceSummaryCreativeInsightsWidgetPlugin",
  [
    "AdsManagerToCreativeInsightsCardContainer.react",
    "AdsPerformanceSummaryTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "creativeInsightsCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CreativeInsightsCard,
        isEnabled: function (t) {
          return t.currentLevel === "ad";
        },
        ContentComponent: function () {
          return s.jsx(
            r("AdsManagerToCreativeInsightsCardContainer.react"),
            {},
          );
        },
        logKey: "creative_insights",
      },
      c = u;
    l.default = c;
  },
  98,
);
