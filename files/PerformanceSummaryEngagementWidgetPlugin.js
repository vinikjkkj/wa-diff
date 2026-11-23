__d(
  "PerformanceSummaryEngagementWidgetPlugin",
  [
    "AdsInsightsEngagementCard.react",
    "AdsPerformanceSummaryTypes",
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
        key: "engagement",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .Engagement,
        ContentComponent: function () {
          return u.jsx(r("AdsInsightsEngagementCard.react"), {});
        },
        isEnabled: function (t) {
          return t.currentLevel === "ad" && t.numSelectedAdgroups > 0;
        },
        logKey: "ad_preview",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
