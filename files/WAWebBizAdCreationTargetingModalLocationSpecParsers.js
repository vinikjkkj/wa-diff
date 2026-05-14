__d(
  "WAWebBizAdCreationTargetingModalLocationSpecParsers",
  [
    "WAWebAsISOCountryCode",
    "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
    "WAWebCountriesNativeCountryNames",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .split("_")
        .map(function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
        })
        .join(" ");
    }
    function s(e) {
      return e != null ? o("WAWebAsISOCountryCode").asISOCountryCode(e) : null;
    }
    function u(e) {
      var t = r("WAWebCountriesNativeCountryNames")[e];
      return t != null ? t : e;
    }
    function c(e) {
      var t = u(e);
      return {
        countryCode: o("WAWebAsISOCountryCode").asISOCountryCode(e),
        countryName: t,
        isWorldwide: !1,
        key: e,
        name: t,
        region: null,
        regionId: null,
        type: "COUNTRY",
      };
    }
    function d(e) {
      return {
        countryCode: s(e.country),
        countryName: e.country_name,
        isWorldwide: !1,
        key: e.key,
        name: e.name,
        region: null,
        regionId: null,
        type: "REGION",
      };
    }
    function m(e) {
      var t,
        n,
        r = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).convertRadiusToMeters(
          (t = e.radius) != null ? t : 0,
          (n = e.distance_unit) != null ? n : "kilometer",
        );
      return {
        countryCode: s(e.country),
        countryName: e.country_name,
        isWorldwide: !1,
        key: e.key,
        name: e.name,
        radiusInMeters: r,
        region: e.region,
        regionId: e.region_id,
        type: "CITY",
      };
    }
    function p(e) {
      return {
        countryCode: s(e.country),
        countryName: e.country_name,
        isWorldwide: !1,
        key: e.key,
        name: e.name,
        region: e.region,
        regionId: e.region_id,
        type: "ZIP",
      };
    }
    function _(e) {
      return {
        countryCode: s(e.country),
        countryName: e.country_name,
        isWorldwide: !1,
        key: e.key,
        name: e.name,
        region: e.region,
        regionId: e.region_id,
        type: "NEIGHBORHOOD",
      };
    }
    function f(e) {
      return {
        countryCode: s(e.country),
        countryName: e.country_name,
        isWorldwide: !1,
        key: e.key,
        name: e.name,
        region: e.region,
        regionId: e.region_id,
        type: "SUBCITY",
      };
    }
    function g(e) {
      var t,
        n,
        r = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).convertRadiusToMeters(
          (t = e.radius) != null ? t : 0,
          (n = e.distance_unit) != null ? n : "kilometer",
        );
      return {
        countryCode: s(e.country),
        countryName: e.country_name,
        isWorldwide: !1,
        key: e.address_string,
        latitude: e.latitude,
        longitude: e.longitude,
        name: e.address_string,
        primaryCityId: e.primary_city_id,
        radiusInMeters: r,
        region: e.region,
        regionId: e.region_id,
        type: "CUSTOM_LOCATION",
      };
    }
    function h(t) {
      var n, r, o, a, i, l, s, u;
      if (t == null) return [];
      var h = [];
      return (
        ((n = t.country_groups) != null ? n : []).forEach(function (t) {
          var n = typeof t == "string" ? t : t.key,
            r = typeof t == "string" ? e(t) : t.name;
          n != null &&
            h.push({
              countryCode: null,
              countryName: null,
              isWorldwide: !1,
              key: n,
              name: r,
              region: null,
              regionId: null,
              type: "COUNTRY_GROUP",
            });
        }),
        [].concat(
          ((r = t.countries) != null ? r : []).map(c),
          h,
          ((o = t.regions) != null ? o : []).map(d),
          ((a = t.cities) != null ? a : []).map(m),
          ((i = t.zips) != null ? i : []).map(p),
          ((l = t.neighborhoods) != null ? l : []).map(_),
          ((s = t.subcities) != null ? s : []).map(f),
          ((u = t.custom_locations) != null ? u : []).map(g),
        )
      );
    }
    l.convertGeoLocationsToSearchResults = h;
  },
  98,
);
