__d(
  "AdsYouthAdsAgeLimitEligibility",
  [
    "AdsYouthAdsIndonesia18MinAgeUtils",
    "AdsYouthAdsLegalAge",
    "adsTargetingGetCountriesFromSpec",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "TH",
      s = "ID";
    function u(e, t) {
      return e == null || e < c(t);
    }
    function c(t) {
      if (r("isFalsey")(t)) return r("AdsYouthAdsLegalAge").GLOBAL;
      var n = r("adsTargetingGetCountriesFromSpec")(t);
      return n.includes(s) &&
        !o(
          "AdsYouthAdsIndonesia18MinAgeUtils",
        ).shouldEnable18MinAgeInIndonesia()
        ? r("AdsYouthAdsLegalAge").INDONESIA
        : n.includes(e)
          ? r("AdsYouthAdsLegalAge").THAILAND
          : r("AdsYouthAdsLegalAge").GLOBAL;
    }
    function d(t) {
      if (r("isFalsey")(t)) return r("AdsYouthAdsLegalAge").GLOBAL;
      var n = r("adsTargetingGetCountriesFromSpec")(t);
      return n.length === 0
        ? r("AdsYouthAdsLegalAge").GLOBAL
        : Math.min.apply(
            Math,
            n.map(function (t) {
              return t === s &&
                !o(
                  "AdsYouthAdsIndonesia18MinAgeUtils",
                ).shouldEnable18MinAgeInIndonesia()
                ? r("AdsYouthAdsLegalAge").INDONESIA
                : t === e
                  ? r("AdsYouthAdsLegalAge").THAILAND
                  : r("AdsYouthAdsLegalAge").GLOBAL;
            }),
          );
    }
    function m(t) {
      var n = t ? r("adsTargetingGetCountriesFromSpec")(t) : [];
      return n.includes(s) &&
        !o(
          "AdsYouthAdsIndonesia18MinAgeUtils",
        ).shouldEnable18MinAgeInIndonesia()
        ? "Indonesia"
        : n.includes(e)
          ? "Thailand"
          : "Global";
    }
    ((l.THAILAND_COUNTRY_CODE = e),
      (l.INDONESIA_COUNTRY_CODE = s),
      (l.isYoungerThanAgeLimit = u),
      (l.getYouthAgeCutoff = c),
      (l.getLowestAgeCutoff = d),
      (l.getLegalYouthAgeVersionFromGeoLocations = m));
  },
  98,
);
