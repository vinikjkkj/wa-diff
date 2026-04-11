__d(
  "LWICometBasicAdsYouthAdsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "electoral_districts",
        "political_districts",
        "zips",
        "custom_locations",
        "places",
        "subcities",
        "neighborhoods",
        "subneighborhoods",
        "location_cluster_ids",
      ],
      l = [
        "CITY",
        "COUNTRY",
        "COUNTRY_GROUP",
        "GEO_ENTITY_IDS",
        "LARGE_GEO_AREA",
        "MARKET",
        "MEDIUM_GEO_AREA",
        "METRO_AREA",
        "REGION",
        "SMALL_GEO_AREA",
      ],
      s = function (t) {
        return t != null && (t.includes(1) || t.includes(2));
      },
      u = function (n) {
        return (
          n != null &&
          e.some(function (e) {
            var t, r;
            return (
              ((t = (r = n[e]) == null ? void 0 : r.length) != null ? t : 0) > 0
            );
          })
        );
      },
      c = function (t) {
        return l.includes(t);
      };
    ((i.isTargetingGender = s),
      (i.isTargetingUnderCity = u),
      (i.isValidLocationType = c));
  },
  66,
);
