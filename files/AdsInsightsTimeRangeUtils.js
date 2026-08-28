__d(
  "AdsInsightsTimeRangeUtils",
  ["AdsCommonIGFAGraduationAudienceUtils", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("qex")._("740") === !0;
    }
    function s() {
      return (
        o(
          "AdsCommonIGFAGraduationAudienceUtils",
        ).isInIGFAGraduationEligibleAudience() && e()
      );
    }
    ((l.isIGFAGraduationDateRangePresetEnabled = e),
      (l.isEligibleForIGFAGraduationDateRangePreset = s));
  },
  98,
);
