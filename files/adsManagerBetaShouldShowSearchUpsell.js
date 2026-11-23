__d(
  "adsManagerBetaShouldShowSearchUpsell",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.betaEnrollmentState,
        n = e.inFilterButtonDropdown,
        o = e.inRightsManager,
        a = e.isInAdsManager;
      return a && !o && !n && t !== "opted_in" && r("gkx")("7366");
    }
    l.default = e;
  },
  98,
);
