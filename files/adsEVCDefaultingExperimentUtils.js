__d(
  "adsEVCDefaultingExperimentUtils",
  ["AdsOptimalPreflightExperimentUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !0;
    }
    function s() {
      return !0;
    }
    function u() {
      return !1;
    }
    function c() {
      return (
        o(
          "AdsOptimalPreflightExperimentUtils",
        ).logOptimalPreflightIBTExperimentExposure({
          experimentName: "evc_duplication_upgrade_package_eligibility",
          hbtTrain: "train_4_2025",
          hbtType: "optimal_preflight",
        }),
        r("gkx")("12717")
      );
    }
    ((l.isEVCDefaultingEnabled = e),
      (l.isLeadsEVCDefaultingEnabled = s),
      (l.isEVCDefaultingEnabledForShopsAds = u),
      (l.isEVCDuplicationUpgradePackageEligibilityEnabled = c));
  },
  98,
);
