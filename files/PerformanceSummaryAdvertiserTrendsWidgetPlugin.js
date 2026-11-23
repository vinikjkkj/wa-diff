__d(
  "PerformanceSummaryAdvertiserTrendsWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "AdsReportingAdvertiserTrendsUtils",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "AdsManagerToAdvertiserTrendsCardContainer.react",
        ).__setRef("PerformanceSummaryAdvertiserTrendsWidgetPlugin"),
      ),
      c = {
        type: "performanceSummaryWidget",
        key: "advertiserTrendsCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .AdvertiserTrendsCard,
        isEnabled: function (t) {
          return (
            t.currentLevel === "ad_set" &&
            o("AdsReportingAdvertiserTrendsUtils").isInAdvertiserTrendsGK() &&
            t.adAccount != null
          );
        },
        ContentComponent: function (t) {
          var e, n;
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: s.jsx(u, {
              adAccountID: (e = t.adAccount) == null ? void 0 : e.account_id,
              adObjectID:
                t.selectedIdsAtCurrentLevel.length === 1
                  ? t.selectedIdsAtCurrentLevel[0]
                  : null,
              timeRange: t.timeRange,
              timezoneID: (n = t.adAccount) == null ? void 0 : n.timezone_id,
            }),
          });
        },
        logKey: "advertiser_trends",
      },
      d = c;
    l.default = d;
  },
  98,
);
