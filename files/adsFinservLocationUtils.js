__d(
  "adsFinservLocationUtils",
  [
    "AdsCampaignTargetingCommonUtils",
    "AdsCountriesRegionalRegulatedCategories",
    "AdsCountryGroupsRegulatedCategories.experimental",
    "AdsFinservAdsTargetCountryGroupsSitevarConfig.experimental",
    "AdsFinservISOCodes",
    "AdsRegulatedCategoriesIdentitiesFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o(
        "AdsCampaignTargetingCommonUtils",
      ).doesCampaignTargetingContainRequiredLocations(
        e,
        o("AdsFinservISOCodes").FINSERV_ADS_TARGET_ISO_COUNTRY_CODES,
        new Set(
          r("AdsFinservAdsTargetCountryGroupsSitevarConfig.experimental")
            .FINSERV_ADS_TARGET_COUNTRY_GROUP_NAMES,
        ),
      );
    }
    function s(e) {
      return o(
        "AdsCampaignTargetingCommonUtils",
      ).doesCampaignTargetingOnlyContainRequiredCountry(
        e,
        o("AdsFinservISOCodes").FINSERV_ADS_TARGET_ISO_COUNTRY_CODES,
      );
    }
    function u(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d = new Set();
      return (
        e == null ||
          (t = e.countries) == null ||
          t.reduce(function (e, t) {
            return r("AdsCountriesRegionalRegulatedCategories")
              .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t],
                )
              : e;
          }, d),
        e == null ||
          (n = e.cities) == null ||
          n.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (o = e.subcities) == null ||
          o.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (a = e.regions) == null ||
          a.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (i = e.zips) == null ||
          i.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (l = e.places) == null ||
          l.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (s = e.neighborhoods) == null ||
          s.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (u = e.custom_locations) == null ||
          u.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, d),
        e == null ||
          (c = e.country_groups) == null ||
          c.reduce(function (e, t) {
            return r("AdsCountryGroupsRegulatedCategories.experimental")
              .COUNTRY_GROUPS_REGULATED_CATEGORIES[t] != null
              ? m(
                  e,
                  r("AdsCountryGroupsRegulatedCategories.experimental")
                    .COUNTRY_GROUPS_REGULATED_CATEGORIES[t],
                )
              : e;
          }, d),
        Array.from(d)
      );
    }
    function c(e) {
      var t,
        n,
        o,
        a = new Set();
      return (
        e == null ||
          (t = e.countries) == null ||
          t.reduce(function (e, t) {
            return r("AdsCountriesRegionalRegulatedCategories")
              .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t],
                )
              : e;
          }, a),
        e == null ||
          (n = e.regions) == null ||
          n.reduce(function (e, t) {
            return t.country != null &&
              r("AdsCountriesRegionalRegulatedCategories")
                .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country] != null
              ? m(
                  e,
                  r("AdsCountriesRegionalRegulatedCategories")
                    .COUNTRIES_REGIONAL_REGULATED_CATEGORIES[t.country],
                )
              : e;
          }, a),
        e == null ||
          (o = e.country_groups) == null ||
          o.reduce(function (e, t) {
            return r("AdsCountryGroupsRegulatedCategories.experimental")
              .COUNTRY_GROUPS_REGULATED_CATEGORIES[t] != null
              ? m(
                  e,
                  r("AdsCountryGroupsRegulatedCategories.experimental")
                    .COUNTRY_GROUPS_REGULATED_CATEGORIES[t],
                )
              : e;
          }, a),
        Array.from(a)
      );
    }
    function d(e, t) {
      var n = u(e),
        r = c(t);
      return n.filter(function (e) {
        return !r.includes(e);
      });
    }
    function m(e, t) {
      return t.reduce(function (e, t) {
        return e.add(t);
      }, e);
    }
    function p(e) {
      return e.reduce(function (e, t) {
        var n;
        return e.concat(
          (n = r("AdsRegulatedCategoriesIdentitiesFields")
            .REGULATED_CATEGORIES_IDENTITIES_FIELDS[t.toString()]) != null
            ? n
            : [],
        );
      }, []);
    }
    ((l.areLocationsInFinservAdsRegulatory = e),
      (l.areLocationsInFinservAdsRegulatoryOnly = s),
      (l.getRegulatedCategoriesByLocations = u),
      (l.getRegulatedCategoriesByLocationsWithExclusions = d),
      (l.getRegulationIdentitiesFieldsByRegulatedCategories = p));
  },
  98,
);
