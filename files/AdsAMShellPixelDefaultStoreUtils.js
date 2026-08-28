__d(
  "AdsAMShellPixelDefaultStoreUtils",
  ["AdsAMLPVDefaultStoreUtils", "AdsSignalChallengedSalesQEUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "am_shell_pixel_default";
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
          .shouldDefaultOptimizationGoalForShellPixel,
      );
    }
    ((l.hasAMShellPixelDefaultForAccount = s),
      (l.isShellPixelLPVDefaultEligible = u));
  },
  98,
);
