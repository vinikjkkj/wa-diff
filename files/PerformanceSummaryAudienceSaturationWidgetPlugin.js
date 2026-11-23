__d(
  "PerformanceSummaryAudienceSaturationWidgetPlugin",
  [
    "AdsPerfIntelLLMRecsGating",
    "AdsPerformanceSummaryTypes",
    "AppliedInsightsRepeatReachCard.react",
    "feature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "audienceSaturationCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .AudienceSaturationCard,
        isEnabled: function (t) {
          return (
            t.currentLevel === "ad_set" &&
            o("AdsPerfIntelLLMRecsGating").isPerfIntelLLMRecsAllocated()
          );
        },
        ContentComponent: function (t) {
          var e, n, r, a;
          return u.jsx(
            o("AppliedInsightsRepeatReachCard.react")
              .AppliedInsightsRepeatReachCardContainer,
            {
              adAccountId: (e = t.adAccount) == null ? void 0 : e.account_id,
              campaignId:
                t.selectedIdsAtCurrentLevel.length === 1
                  ? String(t.selectedIdsAtCurrentLevel[0])
                  : null,
              currencyCode:
                (n = (r = t.adAccount) == null ? void 0 : r.currency) != null
                  ? n
                  : "USD",
              timezoneID: (a = t.adAccount) == null ? void 0 : a.timezone_id,
            },
          );
        },
        logKey: "audience_saturation",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_InsightsOverview_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
