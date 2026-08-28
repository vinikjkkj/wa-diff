__d(
  "AdsMgmt2025H1DatePickerLaunchUtils",
  ["AdsInsightsTimeRangeUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o(
        "AdsInsightsTimeRangeUtils",
      ).isEligibleForIGFAGraduationDateRangePreset()
        ? "last_30_days"
        : "last_30d";
    }
    function s() {
      var e = r("gkx")("21669");
      return !!e;
    }
    ((l.getIsAccountInDatePickerImprovementsDateRangeDefault = e),
      (l.getShouldRenderPSEmptySectionWithSuggestion = s));
  },
  98,
);
