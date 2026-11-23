__d(
  "PerformanceSummaryAdCreativePerformanceGuidanceCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryAdCreativePerformanceGuidanceCard.react",
    "feature",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "adCreativePerformanceGuidance",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .AdCreativePerformanceGuidanceCard,
        isEnabled: function (t) {
          var e = t.currentAdObjectLevelsForCREPE;
          return r("gkx")("2029") && e != null
            ? e.includes("ad_set") ||
                (e.includes("ad") && t.numSelectedAdgroups > 0)
            : (t.currentLevel === "ad" && t.numSelectedAdgroups > 0) ||
                t.currentLevel === "ad_set";
        },
        ContentComponent: function () {
          return u.jsx(
            r("PerformanceSummaryAdCreativePerformanceGuidanceCard.react"),
            {},
          );
        },
        logKey: "ad_creative_perf_guidance",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_AdCreativePerfGuidance_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
