__d(
  "AdsSensitiveVerticalUtils",
  ["IGAdsSensitiveVerticalsUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical;
    }
    function s() {
      return r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical;
    }
    function u() {
      return r("IGAdsSensitiveVerticalsUtils").is_gsi;
    }
    function c() {
      return e() || s() || u();
    }
    function d() {
      return r("gkx")("14222");
    }
    function m() {
      return r("gkx")("14223");
    }
    function p() {
      return r("gkx")("14353");
    }
    ((l.isAdAccountInPharmaOrSensitiveVertical = e),
      (l.isAdAccountLuxuryVertical = s),
      (l.isAdAccountGSIVertical = u),
      (l.isAccountInSensitiveVerticals = c),
      (l.isAdAccountOnDefaultOnBlocklist = d),
      (l.isAdAccountOnBig6AgencyBlocklist = m),
      (l.isAdAccountOnFastTrackBlocklist = p));
  },
  98,
);
