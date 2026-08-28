__d(
  "AdsFinservISOCodes",
  ["AdsFinservAdsTargetISOCountryCodesWithNamesSitevarConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(
      o(
        "AdsFinservAdsTargetISOCountryCodesWithNamesSitevarConfig",
      ).FINSERV_ADS_TARGET_ISO_COUNTRY_CODES_WITH_NAMES.map(function (e) {
        var t = e.ISOCountryCode;
        return t;
      }),
    );
    l.FINSERV_ADS_TARGET_ISO_COUNTRY_CODES = e;
  },
  98,
);
