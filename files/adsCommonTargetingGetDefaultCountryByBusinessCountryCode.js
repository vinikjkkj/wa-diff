__d(
  "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
  ["AdsCommonTargetingDefaultConstants", "AdsCurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
        e != null && e !== ""
          ? e
          : r("AdsCurrentUser").countryCode != null &&
              r("AdsCurrentUser").countryCode !== ""
            ? r("AdsCurrentUser").countryCode
            : o("AdsCommonTargetingDefaultConstants").FALLBACK_COUNTRY;
      return t;
    }
    l.default = e;
  },
  98,
);
