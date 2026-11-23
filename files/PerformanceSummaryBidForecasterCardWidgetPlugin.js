__d(
  "PerformanceSummaryBidForecasterCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryBidForecasterCardContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "bidForecasterCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .BidForecasterCard,
        ContentComponent: function (t) {
          var e;
          return s.jsx(
            r("PerformanceSummaryBidForecasterCardContainer.react"),
            {
              adAccount: t.adAccount,
              currentLevel: t.currentLevel,
              selectedCampaignID:
                (e = t.selectedIdsAtCurrentLevel[0]) != null ? e : null,
            },
          );
        },
        isEnabled: function (t) {
          return t.currentLevel === "ad_set";
        },
        logKey: "bid_forecaster",
      },
      c = u;
    l.default = c;
  },
  98,
);
