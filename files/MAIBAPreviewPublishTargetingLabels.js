__d(
  "MAIBAPreviewPublishTargetingLabels",
  [
    "AdsCountries",
    "AdsLocalesConfig",
    "AdsTargetingConstants",
    "AdsTargetingLocationTypeStrings",
    "MAIBAAudienceLocationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsCountries").countries[e];
      return typeof t == "string" && t !== "" ? t : null;
    }
    function s(e) {
      var t = o("AdsLocalesConfig").locales[e];
      return typeof t == "string" && t !== "" ? t : null;
    }
    function u(e) {
      return e === 1 || e === "1"
        ? String(o("AdsTargetingConstants").MEN_LABEL)
        : e === 2 || e === "2"
          ? String(o("AdsTargetingConstants").WOMEN_LABEL)
          : null;
    }
    function c(e) {
      var t = o("AdsTargetingLocationTypeStrings").getLocationTypeLabel(e);
      return t != null ? String(t) : null;
    }
    function d(e) {
      return o("MAIBAAudienceLocationUtils").getLocationTypeForRelay(e);
    }
    ((l.getCountryName = e),
      (l.getLanguageName = s),
      (l.getGenderLabel = u),
      (l.getLocationTypeLabel = c),
      (l.getLocationTypeForRelay = d));
  },
  98,
);
