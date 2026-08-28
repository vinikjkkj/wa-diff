__d(
  "AdsGuidanceActionsPerfScoreQEUtils",
  ["AdsOSAUExperimentUtils", "AdsOSDataModelExperimentConstants", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s();
    }
    function s() {
      var e = o("AdsOSDataModelExperimentConstants").genOSDataModelL4Setting();
      return e != null
        ? e
        : o("AdsOSAUExperimentUtils").isOSAndAUTest({ logExposure: !0 })
          ? u()
            ? "os_v2_l4_testing_a"
            : "os_v2_l4_au"
          : u()
            ? "os_v2_l4_testing_b"
            : "os_v2_l4_beta";
    }
    function u() {
      return r("gkx")("15357");
    }
    ((l.getOpportunityScoreVersionName = e),
      (l.getOpportunityScoreVersionNameForUGP = s));
  },
  98,
);
