__d(
  "MAIBAAudienceLocationUtils",
  [
    "CountryNames",
    "ISOCountryCode",
    "LocationConstants",
    "MAIBAAudienceLocationUtilsQuery.graphql",
    "castToEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("MAIBAAudienceLocationUtilsQuery.graphql"));
    function u(e) {
      var t, n;
      return (t =
        e == null || (n = e.ad_account) == null
          ? void 0
          : n.maiba_geo_location_meta_search) != null
        ? t
        : [];
    }
    function c(e) {
      return e != null && e !== "" ? e : null;
    }
    function d(e) {
      var t,
        n = r("castToEnum")(e, r("ISOCountryCode"), null);
      return n == null ? e : (t = r("CountryNames")[n]) != null ? t : e;
    }
    function m(e, t) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e[t];
    }
    function p(e, t) {
      var n = m(e, t);
      return Array.isArray(n) ? n : null;
    }
    function _(e) {
      return (
        typeof e.name == "string" &&
        typeof e.country == "string" &&
        typeof e.latitude == "number" &&
        typeof e.longitude == "number"
      );
    }
    function f(e) {
      var t,
        n,
        r = (t = e.cities) != null ? t : [],
        o = (n = e.places) != null ? n : [],
        a = r.filter(function (e) {
          return e.country != null;
        }),
        i = o.filter(_);
      return babelHelpers.extends({}, e, { cities: a, places: i });
    }
    function g(e, t) {
      if (e == null || e === "") return null;
      try {
        var n = JSON.parse(e),
          r = n == null ? void 0 : n[t];
        return r != null && typeof r == "object" ? r : null;
      } catch (e) {
        return null;
      }
    }
    function h(e) {
      switch (e) {
        case o("LocationConstants").CITIES:
          return "CITY";
        case o("LocationConstants").COUNTRY_GROUPS:
          return "COUNTRY_GROUP";
        case o("LocationConstants").CUSTOM_LOCATIONS:
          return "CUSTOM_LOCATION";
        case o("LocationConstants").ELECTORAL_DISTRICTS:
          return "ELECTORAL_DISTRICT";
        case o("LocationConstants").GEO_MARKETS:
          return "MARKET";
        case o("LocationConstants").LARGE_GEO_AREAS:
          return "LARGE_GEO_AREA";
        case o("LocationConstants").LOCATION_CLUSTER_IDS:
          return "LOCATION_CLUSTER_IDS";
        case o("LocationConstants").MEDIUM_GEO_AREAS:
          return "MEDIUM_GEO_AREA";
        case o("LocationConstants").METRO_AREAS:
          return "METRO_AREA";
        case o("LocationConstants").NEIGHBORHOODS:
          return "NEIGHBORHOOD";
        case o("LocationConstants").PLACES:
          return "PLACE";
        case o("LocationConstants").REGIONS:
          return "REGION";
        case o("LocationConstants").SMALL_GEO_AREAS:
          return "SMALL_GEO_AREA";
        case o("LocationConstants").SUBCITIES:
          return "SUBCITY";
        case o("LocationConstants").SUBNEIGHBORHOODS:
          return "SUBNEIGHBORHOOD";
        case o("LocationConstants").ZIPS:
          return "ZIP";
        default:
          return null;
      }
    }
    function y(e) {
      switch (e) {
        case "CITY":
          return o("LocationConstants").CITIES;
        case "COUNTRY":
          return o("LocationConstants").COUNTRIES;
        case "COUNTRY_GROUP":
          return o("LocationConstants").COUNTRY_GROUPS;
        case "CUSTOM_LOCATION":
          return o("LocationConstants").CUSTOM_LOCATIONS;
        case "ELECTORAL_DISTRICT":
          return o("LocationConstants").ELECTORAL_DISTRICTS;
        case "LARGE_GEO_AREA":
          return o("LocationConstants").LARGE_GEO_AREAS;
        case "LOCATION_CLUSTER_IDS":
          return o("LocationConstants").LOCATION_CLUSTER_IDS;
        case "MARKET":
          return o("LocationConstants").GEO_MARKETS;
        case "MEDIUM_GEO_AREA":
          return o("LocationConstants").MEDIUM_GEO_AREAS;
        case "METRO_AREA":
          return o("LocationConstants").METRO_AREAS;
        case "NEIGHBORHOOD":
          return o("LocationConstants").NEIGHBORHOODS;
        case "PLACE":
          return o("LocationConstants").PLACES;
        case "REGION":
          return o("LocationConstants").REGIONS;
        case "SMALL_GEO_AREA":
          return o("LocationConstants").SMALL_GEO_AREAS;
        case "SUBCITY":
          return o("LocationConstants").SUBCITIES;
        case "SUBNEIGHBORHOOD":
          return o("LocationConstants").SUBNEIGHBORHOODS;
        case "ZIP":
          return o("LocationConstants").ZIPS;
        default:
          return null;
      }
    }
    function C(e, t) {
      if (e === o("LocationConstants").COUNTRIES) return !0;
      if (t == null || typeof t != "object") return !1;
      var n = m(t, "name");
      return typeof n != "string" || n === ""
        ? !1
        : e === o("LocationConstants").REGIONS
          ? typeof m(t, "country") == "string"
          : e === o("LocationConstants").PLACES
            ? typeof m(t, "latitude") == "number" &&
              typeof m(t, "longitude") == "number"
            : !0;
    }
    function b(e) {
      if (typeof e == "string") return e;
      if (e == null || typeof e != "object") return null;
      var t = m(e, "key");
      return typeof t == "string" && t !== "" ? t : null;
    }
    function v(e, t) {
      var n = [];
      return (
        [e, t].forEach(function (e) {
          e != null &&
            o("LocationConstants").locationTypes.forEach(function (t) {
              var r = h(t);
              if (r != null) {
                var o = p(e, t);
                o != null &&
                  o.forEach(function (e) {
                    var o = b(e);
                    o == null ||
                      C(t, e) ||
                      n.some(function (e) {
                        return e.key === o && e.type === r;
                      }) ||
                      n.push({ key: o, type: r });
                  });
              }
            });
        }),
        n
      );
    }
    function S(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          t.some(function (t) {
            return t.key === e.key && t.type === e.type;
          }) || t.push(e);
        }),
        t
      );
    }
    function R(e, t, n, r) {
      return e == null
        ? e
        : e.map(function (e) {
            var o = b(e),
              a = o != null ? n.get(t + ":" + o) : null;
            return a != null ? r(e, a) : e;
          });
    }
    function L(e, t) {
      var n, r, o;
      return babelHelpers.extends({}, e, {
        country_codes:
          t.country_codes.length > 0
            ? t.country_codes.map(function (e) {
                return String(e);
              })
            : e.country_codes,
        is_worldwide: (n = t.is_worldwide) != null ? n : e.is_worldwide,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
      });
    }
    function E(e, t) {
      var n, r, o;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
      });
    }
    function k(e, t) {
      var n, r, o;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
      });
    }
    function I(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function T(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function D(e, t) {
      var n, r;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        key: (n = t.key) != null ? n : e.key,
        name: (r = t.name) != null ? r : e.name,
      });
    }
    function x(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function $(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function P(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function N(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function M(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function w(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function A(e, t) {
      var n, r, o, a, i;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        region: (a = t.region) != null ? a : e.region,
        region_id: (i = t.region_id) != null ? i : e.region_id,
      });
    }
    function F(e, t) {
      var n, r, o, a, i, l, s, u, c, d, m, p;
      return babelHelpers.extends({}, e, {
        category: (n = t.category) != null ? n : e.category,
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (r = t.country_name) != null ? r : e.country_name,
        key: (o = t.key) != null ? o : e.key,
        latitude:
          (a = (i = t.coordinates) == null ? void 0 : i.latitude) != null
            ? a
            : e.latitude,
        longitude:
          (l = (s = t.coordinates) == null ? void 0 : s.longitude) != null
            ? l
            : e.longitude,
        name: (u = t.name) != null ? u : e.name,
        primary_city: (c = t.primary_city) != null ? c : e.primary_city,
        primary_city_id:
          (d = t.primary_city_id) != null ? d : e.primary_city_id,
        region: (m = t.region) != null ? m : e.region,
        region_id: (p = t.region_id) != null ? p : e.region_id,
      });
    }
    function O(e, t) {
      var n, r, o, a, i, l, s;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        name: (o = t.name) != null ? o : e.name,
        primary_city: (a = t.primary_city) != null ? a : e.primary_city,
        primary_city_id:
          (i = t.primary_city_id) != null ? i : e.primary_city_id,
        region: (l = t.region) != null ? l : e.region,
        region_id: (s = t.region_id) != null ? s : e.region_id,
      });
    }
    function B(e, t) {
      var n, r, o, a, i, l, s, u, c, d, m;
      return babelHelpers.extends({}, e, {
        country: t.country_code != null ? String(t.country_code) : e.country,
        country_codes: t.country_codes.map(function (e) {
          return String(e);
        }),
        country_name: (n = t.country_name) != null ? n : e.country_name,
        key: (r = t.key) != null ? r : e.key,
        latitude:
          (o = (a = t.coordinates) == null ? void 0 : a.latitude) != null
            ? o
            : e.latitude,
        longitude:
          (i = (l = t.coordinates) == null ? void 0 : l.longitude) != null
            ? i
            : e.longitude,
        name: (s = t.name) != null ? s : e.name,
        primary_city: (u = t.primary_city) != null ? u : e.primary_city,
        primary_city_id:
          (c = t.primary_city_id) != null ? c : e.primary_city_id,
        region: (d = t.region) != null ? d : e.region,
        region_id: (m = t.region_id) != null ? m : e.region_id,
      });
    }
    function W(e, t) {
      var n;
      if (e == null) return null;
      var r = new Map();
      return (
        t.forEach(function (e) {
          var t = y(e.type);
          t == null || e.key == null || r.set(t + ":" + e.key, e);
        }),
        babelHelpers.extends(
          {},
          e,
          {
            cities: R(e.cities, o("LocationConstants").CITIES, r, I),
            country_groups: R(
              e.country_groups,
              o("LocationConstants").COUNTRY_GROUPS,
              r,
              L,
            ),
            custom_locations: R(
              e.custom_locations,
              o("LocationConstants").CUSTOM_LOCATIONS,
              r,
              B,
            ),
            electoral_districts: R(
              e.electoral_districts,
              o("LocationConstants").ELECTORAL_DISTRICTS,
              r,
              T,
            ),
          },
          e.geo_markets != null
            ? {
                geo_markets:
                  (n = R(
                    e.geo_markets,
                    o("LocationConstants").GEO_MARKETS,
                    r,
                    k,
                  )) != null
                    ? n
                    : e.geo_markets,
              }
            : {},
          {
            large_geo_areas: R(
              e.large_geo_areas,
              o("LocationConstants").LARGE_GEO_AREAS,
              r,
              x,
            ),
            location_cluster_ids: R(
              e.location_cluster_ids,
              o("LocationConstants").LOCATION_CLUSTER_IDS,
              r,
              D,
            ),
            medium_geo_areas: R(
              e.medium_geo_areas,
              o("LocationConstants").MEDIUM_GEO_AREAS,
              r,
              $,
            ),
            metro_areas: R(
              e.metro_areas,
              o("LocationConstants").METRO_AREAS,
              r,
              N,
            ),
            neighborhoods: R(
              e.neighborhoods,
              o("LocationConstants").NEIGHBORHOODS,
              r,
              w,
            ),
            places: R(e.places, o("LocationConstants").PLACES, r, F),
            regions: R(e.regions, o("LocationConstants").REGIONS, r, E),
            small_geo_areas: R(
              e.small_geo_areas,
              o("LocationConstants").SMALL_GEO_AREAS,
              r,
              P,
            ),
            subcities: R(e.subcities, o("LocationConstants").SUBCITIES, r, M),
            subneighborhoods: R(
              e.subneighborhoods,
              o("LocationConstants").SUBNEIGHBORHOODS,
              r,
              A,
            ),
            zips: R(e.zips, o("LocationConstants").ZIPS, r, O),
          },
        )
      );
    }
    function q(e) {
      var t = [
        e.name,
        e.address_string,
        e.country_name,
        e.country_group,
        e.primary_city,
        e.region,
      ]
        .map(function (e) {
          return typeof e == "string" ? c(e) : null;
        })
        .find(Boolean);
      if (t == null) return null;
      var n = e.radius;
      return typeof n == "number" && n > 0
        ? t + " (+" + String(n) + " mile)"
        : t;
    }
    function U(e) {
      var t, n, r, o, a, i, l, s, u, c, m, p, _, f, g, h, y, C;
      if (e == null) return null;
      var b = []
          .concat(
            ((t = e.cities) != null ? t : []).map(function (e) {
              return q(e);
            }),
            ((n = e.country_groups) != null ? n : []).map(function (e) {
              return q(e);
            }),
            ((r = e.custom_locations) != null ? r : []).map(function (e) {
              return q(e);
            }),
            ((o = e.electoral_districts) != null ? o : []).map(function (e) {
              return q(e);
            }),
            ((a = e.geo_markets) != null ? a : []).map(function (e) {
              return q(e);
            }),
            ((i = e.large_geo_areas) != null ? i : []).map(function (e) {
              return q(e);
            }),
            ((l = e.location_cluster_ids) != null ? l : []).map(function (e) {
              return q(e);
            }),
            ((s = e.medium_geo_areas) != null ? s : []).map(function (e) {
              return q(e);
            }),
            ((u = e.metro_areas) != null ? u : []).map(function (e) {
              return q(e);
            }),
            ((c = e.neighborhoods) != null ? c : []).map(function (e) {
              return q(e);
            }),
            ((m = e.places) != null ? m : []).map(function (e) {
              return q(e);
            }),
            ((p = e.political_districts) != null ? p : []).map(function (e) {
              return q(e);
            }),
            ((_ = e.regions) != null ? _ : []).map(function (e) {
              return q(e);
            }),
            ((f = e.small_geo_areas) != null ? f : []).map(function (e) {
              return q(e);
            }),
            ((g = e.subcities) != null ? g : []).map(function (e) {
              return q(e);
            }),
            ((h = e.subneighborhoods) != null ? h : []).map(function (e) {
              return q(e);
            }),
            ((y = e.zips) != null ? y : []).map(function (e) {
              return q(e);
            }),
          )
          .filter(Boolean),
        v = ((C = e.countries) != null ? C : []).map(d);
      return [].concat(b, v).join(", ") || null;
    }
    ((l.MAIBA_LOCATION_META_QUERY = s),
      (l.getLocationMetaSearchResults = u),
      (l.getCountryDisplayName = d),
      (l.sanitizeGeoLocationsForEditor = f),
      (l.parseLocationFieldFromTargetSpecJSON = g),
      (l.getLocationTypeForRelay = h),
      (l.getSelectedLocationMetaQuery = v),
      (l.dedupeGeoLocationMetaQueryItems = S),
      (l.hydrateGeoLocations = W),
      (l.formatGeoLocations = U));
  },
  98,
);
