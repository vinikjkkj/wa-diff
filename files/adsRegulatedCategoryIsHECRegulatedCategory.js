__d(
  "adsRegulatedCategoryIsHECRegulatedCategory",
  ["AdsRegulatedCategory", "AdsRegulatedCategoryConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ||
        e === r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS ||
        e === r("AdsRegulatedCategory").SOCIAL_ISSUES ||
        e === r("AdsRegulatedCategory").ELECTIONS_POLITICS
        ? !1
        : o(
            "AdsRegulatedCategoryConstants",
          ).AdsRegulatedCategoryRestrictMap.includes(e);
    }
    l.default = e;
  },
  98,
);
