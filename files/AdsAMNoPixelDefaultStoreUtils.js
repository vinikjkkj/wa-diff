__d(
  "AdsAMNoPixelDefaultStoreUtils",
  ["AdsAMLPVDefaultStoreUtils", "AdsSignalChallengedSalesQEUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "am_no_pixel_default";
    function s(t) {
      return o("AdsAMLPVDefaultStoreUtils").hasAMDefaultSourceForAccount(t, e);
    }
    function u(t, n, r) {
      return o("AdsAMLPVDefaultStoreUtils").isAMLPVDefaultEligible(
        t,
        n,
        r,
        e,
        o("AdsSignalChallengedSalesQEUtils")
          .shouldDefaultOptimizationGoalForNoPixel,
      );
    }
    ((l.hasAMNoPixelDefaultForAccount = s),
      (l.isNoPixelLPVDefaultEligible = u));
  },
  98,
);
