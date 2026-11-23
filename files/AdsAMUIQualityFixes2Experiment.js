__d(
  "AdsAMUIQualityFixes2Experiment",
  ["AdsAMUIQualityFixExposureLogger", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("gkx")("29507") !== !0) return !1;
      var t = r("qex")._("6081") === !0;
      return (
        e != null &&
          o("AdsAMUIQualityFixExposureLogger").logAMUIQualityFixExposure(
            "am_e2e_ui_quality_fixes_2_ibt",
            e,
            t,
          ),
        t
      );
    }
    l.isAMUIQualityFixes2TestArm = e;
  },
  98,
);
