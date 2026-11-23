__d(
  "PerformanceSummaryPlayableHeatmapWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "AdsPlayableHeatmapPerfSumWidget.react",
    "CometPlaceholder.react",
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
        key: "playableHeatmap",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .PlayableHeatmap,
        ContentComponent: function (t) {
          return u.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: u.jsx(r("AdsPlayableHeatmapPerfSumWidget.react"), {
              adID: t.selectedIdsAtCurrentLevel[0],
            }),
          });
        },
        isEnabled: function (t) {
          return (
            t.currentLevel === "ad" && t.selectedIdsAtCurrentLevel.length === 1
          );
        },
        logKey: "playable_heatmap",
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
