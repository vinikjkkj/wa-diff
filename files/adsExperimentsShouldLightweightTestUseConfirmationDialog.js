__d(
  "adsExperimentsShouldLightweightTestUseConfirmationDialog",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || r("justknobx")._("2000")) return !1;
      switch (e) {
        case "ADVANTAGE_PLUS_AUDIENCE":
        case "AUTOMATIC_PLACEMENT":
        case "CREATIVE_PRIMARY_TEXT_GEN":
        case "CREATIVE_IMAGE_GEN":
        case "ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS":
        case "DYNAMIC_ADS":
        case "L2_DUPLICATION_UPGRADE":
        case "L3_DUPLICATION_UPGRADE":
        case "VALUE_OPTIMIZATION_GOAL":
        case "LEAD_GEN_FORM":
          return !0;
        case "STANDARD_ENHANCEMENT":
        case "ADVANTAGE_PLUS_CREATIVE":
        case "ADVANTAGE_SHOPPING_CAMPAIGN":
        case "CREATIVE_MULTICELL_TESTING":
        case "GUIDANCE_DUPLICATION":
        case "GUIDANCE_MFR":
        case "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE":
          return !1;
      }
    }
    l.default = e;
  },
  98,
);
