__d(
  "PerformanceSummaryShopsAdsGuidanceCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryShopsAdsGuidanceCardContainer.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "saGuidanceCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .ShopsAdsGuidanceCard,
        ContentComponent: function (t) {
          var e,
            n,
            o = r("gkx")("2029")
              ? (e =
                  (n = t.currentAdObjectLevelsForCREPE) == null
                    ? void 0
                    : n[0]) != null
                ? e
                : "campaign"
              : t.currentLevel;
          return s.jsx(
            r("PerformanceSummaryShopsAdsGuidanceCardContainer.react"),
            { currentLevel: o, isAscShopsAds: t.showASCShopAdsWidget },
          );
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "shops_ads_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
