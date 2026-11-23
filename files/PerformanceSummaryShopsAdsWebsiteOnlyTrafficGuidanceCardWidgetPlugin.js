__d(
  "PerformanceSummaryShopsAdsWebsiteOnlyTrafficGuidanceCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryShopsAdsWebsiteOnlyTrafficeGuidanceCardContainer.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "saWebsiteOnlyTrafficeGuidance",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .ShopsAdsWebsiteOnlyTrafficGuidanceCard,
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
            r(
              "PerformanceSummaryShopsAdsWebsiteOnlyTrafficeGuidanceCardContainer.react",
            ),
            { currentLevel: o },
          );
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "shops_ads_website_only_traffic_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
