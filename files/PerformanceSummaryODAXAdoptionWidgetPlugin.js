__d(
  "PerformanceSummaryODAXAdoptionWidgetPlugin",
  [
    "AdsErrorBoundary.react",
    "AdsODAXEditorCampaignGroupGuidanceCardContainer.react",
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryWidget.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "ODAXAdoptionGuidanceCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .ODAXAdoptionGuidanceCard,
        ContentComponent: function () {
          return s.jsx(r("PerformanceSummaryWidget.react"), {
            children: s.jsx(r("AdsErrorBoundary.react"), {
              moduleName:
                "PerformanceSummaryODAXEditorCampaignGroupGuidanceCardContainer",
              children: s.jsx(
                r("AdsODAXEditorCampaignGroupGuidanceCardContainer.react"),
                { isInsightTab: !0 },
              ),
            }),
          });
        },
        isEnabled: function (t) {
          return t.currentLevel === "campaign" && t.isODAXAdoptionEnabled;
        },
        logKey: "odax_adoption_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
