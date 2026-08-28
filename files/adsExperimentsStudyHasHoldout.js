__d(
  "adsExperimentsStudyHasHoldout",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "LIFT":
        case "CONTINUOUS_LIFT_CONFIG":
        case "ICO_LIFT":
        case "GEO_LIFT":
          return !0;
        case "SPLIT_TEST":
        case "SPLIT_TEST_V2":
        case "BACKEND_AB_TESTING":
        case "CREATIVE_SPEND_ENFORCEMENT":
        case "PORTFOLIO_OPTIMIZER":
        case "VERSION_CONTROL":
        case "TRACKING":
          return !1;
        default:
          return !1;
      }
    }
    i.default = e;
  },
  66,
);
