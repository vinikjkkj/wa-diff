__d(
  "PerformanceSummaryGoToCTMMessagingReportWidgetPlugin",
  [
    "AdsManagerToMessagingReportGuidanceCardContainer.react",
    "AdsPerformanceSummaryTypes",
    "AdsRBCuratedReportCTMGatingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "ctmMessagingReportGuidanceCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CTMMessagingReportGuidanceCard,
        isEnabled: function (t) {
          return (
            (t.currentLevel === "ad" ||
              t.currentLevel === "campaign" ||
              t.currentLevel === "ad_set") &&
            o(
              "AdsRBCuratedReportCTMGatingUtils",
            ).showMessagingCampaignReportGuidanceCard()
          );
        },
        ContentComponent: function () {
          return s.jsx(
            r("AdsManagerToMessagingReportGuidanceCardContainer.react"),
            {},
          );
        },
        logKey: "ctm_messaging_report_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
