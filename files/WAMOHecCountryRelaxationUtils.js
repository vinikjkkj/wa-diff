__d(
  "WAMOHecCountryRelaxationUtils",
  [
    "AdsRegulatedCategory",
    "AdsWAMOSensitiveAdvertisersUtils",
    "SV_EU_COUNTRIES_ADSSitevarConfig",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsRegulatedCategory")).HOUSING,
        e.EMPLOYMENT,
        e.CREDIT,
        e.FINANCIAL_PRODUCTS_SERVICES,
      ],
      u = ["US", "AS", "GU", "MP", "PR", "UM", "VI", "CA"];
    function c() {
      return new Set(
        [].concat(r("SV_EU_COUNTRIES_ADSSitevarConfig").EU_COUNTRIES_ADS, u),
      );
    }
    function d(e) {
      return (
        e != null &&
        e.length > 0 &&
        e.every(function (e) {
          return s.includes(e);
        })
      );
    }
    function m(e) {
      var t = c();
      return (
        e != null &&
        e.some(function (e) {
          return t.has(e);
        })
      );
    }
    function p(e) {
      return (
        e != null &&
        e.length > 0 &&
        !m(e) &&
        !r("AdsWAMOSensitiveAdvertisersUtils").is_us_tax_country
      );
    }
    function _() {
      return new Set(u);
    }
    function f(e) {
      var t = _();
      return (
        e != null &&
        e.some(function (e) {
          return t.has(e);
        })
      );
    }
    function g(e) {
      var t = new Set(r("SV_EU_COUNTRIES_ADSSitevarConfig").EU_COUNTRIES_ADS);
      return (
        e != null &&
        e.some(function (e) {
          return t.has(e);
        })
      );
    }
    function h(e) {
      return g(e)
        ? !1
        : f(e) ||
            (r("AdsWAMOSensitiveAdvertisersUtils").is_us_tax_country &&
              e != null &&
              e.length > 0);
    }
    function y(e, t) {
      return r("gkx")("24024") && d(e) && h(t);
    }
    ((l.isHecOnlySpecialAdCategories = d),
      (l.isSacCountryUsCaEuUk = m),
      (l.isRelaxedNonUsCaEuUkRegion = p),
      (l.isSacCountryUsOrCa = f),
      (l.isSacCountryEuUk = g),
      (l.isRelaxedUsCaOnlyRegion = h),
      (l.isUnknownAgeForceDisabledForUsCaHec = y));
  },
  98,
);
