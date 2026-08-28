__d(
  "AdsRegulatedCategoryConvertAdproRegulatedCategory",
  ["AdproRegulatedCategory", "AdsRegulatedCategory", "enumUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .map(function (e) {
          return o("enumUtils").enumValueToKey(e, r("AdproRegulatedCategory"));
        })
        .filter(Boolean)
        .map(function (e) {
          return o("enumUtils").coerce(e, r("AdsRegulatedCategory"));
        })
        .filter(Boolean);
    }
    function s(e) {
      return e
        .map(function (e) {
          return o("enumUtils").enumValueToKey(e, r("AdsRegulatedCategory"));
        })
        .filter(Boolean)
        .map(function (e) {
          return o("enumUtils").coerceFromKey(e, r("AdproRegulatedCategory"));
        })
        .filter(Boolean);
    }
    ((l.adsRegulatedCategoryConvertAdproRegulatedCategory = e),
      (l.adproRegulatedCategoryConvertAdsRegulatedCategory = s));
  },
  98,
);
