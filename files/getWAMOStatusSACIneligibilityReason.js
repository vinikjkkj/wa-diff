__d(
  "getWAMOStatusSACIneligibilityReason",
  [
    "AdsPlacementIneligibilityReason",
    "AdsRegulatedCategory",
    "WAMOHecCountryRelaxationUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        e == null ||
        e.length === 0 ||
        e.includes(r("AdsRegulatedCategory").NONE)
      )
        return null;
      var n = r("gkx")("443"),
        a = r("gkx")("24024");
      return e.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS)
        ? n || a
          ? o("AdsPlacementIneligibilityReason").createWAMOStatusSIEPReason()
          : o("AdsPlacementIneligibilityReason").createWAMOStatusSACReason()
        : o("WAMOHecCountryRelaxationUtils").isHecOnlySpecialAdCategories(e) &&
            ((n &&
              o("WAMOHecCountryRelaxationUtils").isRelaxedNonUsCaEuUkRegion(
                t,
              )) ||
              (a &&
                o("WAMOHecCountryRelaxationUtils").isRelaxedUsCaOnlyRegion(t)))
          ? null
          : o("AdsPlacementIneligibilityReason").createWAMOStatusSACReason();
    }
    l.default = e;
  },
  98,
);
