__d(
  "WAWebBizAdCreationTargetingModalLocationSpecParsers",
  [
    "WAWebAsISOCountryCode",
    "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
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
      return {
        key: e,
        name: e,
        type: "COUNTRY",
        countryCode: o("WAWebAsISOCountryCode").asISOCountryCode(e),
        countryName: e,
        region: null,
        regionId: null,
        isWorldwide: !1,
      };
    }
    function c(e) {
      return {
        key: e.key,
        name: e.name,
        type: "REGION",
        countryCode: s(e.country),
        countryName: e.country_name,
        region: null,
        regionId: null,
        isWorldwide: !1,
      };
    }
    function d(e) {
      var t,
        n,
        r = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).convertRadiusToMeters(
          (t = e.radius) != null ? t : 0,
          (n = e.distance_unit) != null ? n : "kilometer",
        );
      return {
        key: e.key,
        name: e.name,
        type: "CITY",
        countryCode: s(e.country),
        countryName: e.country_name,
        radiusInMeters: r,
        region: e.region,
        regionId: e.region_id,
        isWorldwide: !1,
      };
    }
    function m(e) {
      return {
        key: e.key,
        name: e.name,
        type: "ZIP",
        countryCode: s(e.country),
        countryName: e.country_name,
        region: e.region,
        regionId: e.region_id,
        isWorldwide: !1,
      };
    }
    function p(e) {
      return {
        key: e.key,
        name: e.name,
        type: "NEIGHBORHOOD",
        countryCode: s(e.country),
        countryName: e.country_name,
        region: e.region,
        regionId: e.region_id,
        isWorldwide: !1,
      };
    }
    function _(e) {
      return {
        key: e.key,
        name: e.name,
        type: "SUBCITY",
        countryCode: s(e.country),
        countryName: e.country_name,
        region: e.region,
        regionId: e.region_id,
        isWorldwide: !1,
      };
    }
    function f(e) {
      var t,
        n,
        r = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).convertRadiusToMeters(
          (t = e.radius) != null ? t : 0,
          (n = e.distance_unit) != null ? n : "kilometer",
        );
      return {
        key: e.address_string,
        name: e.address_string,
        type: "CUSTOM_LOCATION",
        countryCode: s(e.country),
        countryName: e.country_name,
        region: e.region,
        regionId: e.region_id,
        latitude: e.latitude,
        longitude: e.longitude,
        primaryCityId: e.primary_city_id,
        isWorldwide: !1,
        radiusInMeters: r,
      };
    }
    function g(t) {
      var n, r, o, a, i, l, s, g;
      if (t == null) return [];
      var h = [];
      return (
        ((n = t.country_groups) != null ? n : []).forEach(function (t) {
          var n = typeof t == "string" ? t : t.key,
            r = typeof t == "string" ? e(t) : t.name;
          n != null &&
            h.push({
              key: n,
              name: r,
              type: "COUNTRY_GROUP",
              countryCode: null,
              countryName: null,
              region: null,
              regionId: null,
              isWorldwide: !1,
            });
        }),
        [].concat(
          ((r = t.countries) != null ? r : []).map(u),
          h,
          ((o = t.regions) != null ? o : []).map(c),
          ((a = t.cities) != null ? a : []).map(d),
          ((i = t.zips) != null ? i : []).map(m),
          ((l = t.neighborhoods) != null ? l : []).map(p),
          ((s = t.subcities) != null ? s : []).map(_),
          ((g = t.custom_locations) != null ? g : []).map(f),
        )
      );
    }
    l.convertGeoLocationsToSearchResults = g;
  },
  98,
);
