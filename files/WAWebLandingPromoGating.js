__d(
  "WAWebLandingPromoGating",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WAWebEnvironment").getIsShowroom()
        ? "test"
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
