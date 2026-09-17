__d(
  "WAWebLandingPromoGating",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WAWebEnvironment").getIsShowroom() ? !1 : r("gkx")("14815");
    }
    function s() {
      return e() ? d() : "none";
    }
    function u() {
      return s() === "test";
    }
    function c() {
      return (function (e) {
        if (e === "control") return 0;
        if (e === "test") return 1;
        if (e === "none") return 3;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(s());
    }
    function d() {
      return r("gkx")("14893") ? "test" : "control";
    }
    ((l.isRegistrationUpsellEligible = e),
      (l.isLandingPromoEnabled = u),
      (l.getLandingPromoExpBucket = c));
  },
  98,
);
