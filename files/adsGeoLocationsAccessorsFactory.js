__d(
  "adsGeoLocationsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "adsGeoLocationExpansionAccessorsFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          cities: n.basicListFieldAccessorFactory(e, t, "cities"),
          countries: n.basicListFieldAccessorFactory(e, t, "countries"),
          country_groups: n.basicListFieldAccessorFactory(
            e,
            t,
            "country_groups",
          ),
          custom_locations: n.basicListFieldAccessorFactory(
            e,
            t,
            "custom_locations",
          ),
          electoral_districts: n.basicListFieldAccessorFactory(
            e,
            t,
            "electoral_districts",
          ),
          geo_markets: n.basicListFieldAccessorFactory(e, t, "geo_markets"),
          location_set_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "location_set_ids",
          ),
          location_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "location_types",
          ),
          places: n.basicListFieldAccessorFactory(e, t, "places"),
          political_districts: n.basicListFieldAccessorFactory(
            e,
            t,
            "political_districts",
          ),
          large_geo_areas: n.basicListFieldAccessorFactory(
            e,
            t,
            "large_geo_areas",
          ),
          location_cluster_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "location_cluster_ids",
          ),
          medium_geo_areas: n.basicListFieldAccessorFactory(
            e,
            t,
            "medium_geo_areas",
          ),
          small_geo_areas: n.basicListFieldAccessorFactory(
            e,
            t,
            "small_geo_areas",
          ),
          metro_areas: n.basicListFieldAccessorFactory(e, t, "metro_areas"),
          subcities: n.basicListFieldAccessorFactory(e, t, "subcities"),
          neighborhoods: n.basicListFieldAccessorFactory(e, t, "neighborhoods"),
          subneighborhoods: n.basicListFieldAccessorFactory(
            e,
            t,
            "subneighborhoods",
          ),
          regions: n.basicListFieldAccessorFactory(e, t, "regions"),
          zips: n.basicListFieldAccessorFactory(e, t, "zips"),
          location_expansion: r("adsGeoLocationExpansionAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.location_expansion;
            },
            [].concat(t, ["location_expansion"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
