__d(
  "AdsInsightsPreloader",
  ["AdsInsightsSettingsStore", "Bootloader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsInsightsSettingsStore").get(),
        t = e.section;
      switch ((t == null && (t = "performance"), t)) {
        case "performance":
          s();
          break;
        case "audience":
        case "pacing":
        case "placement":
          return;
      }
    }
    function s() {
      r("Bootloader").loadModules(
        [
          "performanceSummaryBigMetricsSelector",
          "performanceSummaryInsightsChartsSelector",
          "performanceSummaryInsightsOverviewSelectors",
        ],
        function (e, t, n) {
          var r = n.hasMultipleObjectivesOrAllDraftSelector;
          (r(), e(), t());
        },
        "AdsInsightsPreloader",
      );
    }
    l.preload = e;
  },
  98,
);
