__d(
  "WAWebLandingPromoGating",
  ["WAWebEnvironment", "WAWebHybridRegGating", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !o("WAWebHybridRegGating").isHybridRegEnabled() ||
        r("WAWebEnvironment").getIsShowroom()
        ? "none"
        : r("gkx")("14815")
          ? u()
          : "none";
    }
    function s() {
      return e() === "test";
    }
    function u() {
      return r("gkx")("14893") ? "test" : "control";
    }
    ((l.getLandingPromoExperiment = e), (l.isLandingPromoEnabled = s));
  },
  98,
);
