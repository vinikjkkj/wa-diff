__d(
  "WAWebLandingPromoGating",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WAWebEnvironment").getIsShowroom()
        ? "none"
        : r("gkx")("14815")
          ? c()
          : "none";
    }
    function s() {
      return e() === "test";
    }
    function u() {
      return (function (e) {
        if (e === "control") return 0;
        if (e === "test") return 1;
        if (e === "none") return 3;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e());
    }
    function c() {
      return r("gkx")("14893") ? "test" : "control";
    }
    ((l.getLandingPromoExperiment = e),
      (l.isLandingPromoEnabled = s),
      (l.getLandingPromoExpBucket = u));
  },
  98,
);
