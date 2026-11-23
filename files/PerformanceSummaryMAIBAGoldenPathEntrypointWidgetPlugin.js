__d(
  "PerformanceSummaryMAIBAGoldenPathEntrypointWidgetPlugin",
  [
    "AdsAIEntrypointAvailabilityUtils",
    "AdsPerformanceSummaryTypes",
    "MAIBAPerformanceSummaryEntrypointContainer.react",
    "feature",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "MAIBAGoldenPathEntrypointCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .MAIBAGoldenPathEntrypointCard,
        isEnabled: function () {
          return (
            o(
              "AdsAIEntrypointAvailabilityUtils",
            ).getIsGoldenPathEntrypointAvailable(
              "PERFORMANCE_SUMMARY_WIDGET",
            ) &&
            o(
              "AdsAIEntrypointAvailabilityUtils",
            ).getIsGoldenPathJanMVPEntrypointAvailable()
          );
        },
        ContentComponent: function (t) {
          return r("isTruthy")(t.adAccount)
            ? u.jsx(r("MAIBAPerformanceSummaryEntrypointContainer.react"), {
                adObjectIds: t.selectedIdsAtCurrentLevel,
                adObjectLevel: t.currentLevel,
              })
            : u.jsx(u.Fragment, {});
        },
        logKey: "maiba_chat_entrypoint",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_MAIBA_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
