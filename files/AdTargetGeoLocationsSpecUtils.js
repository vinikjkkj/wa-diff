__d(
  "AdTargetGeoLocationsSpecUtils",
  [
    "AdTargetSpecCustomType",
    "AdTargetSpecDistanceUnit",
    "AdsAPITargetGeoLocationTypes",
    "LocationConstants",
    "TypeCoercionUtils",
    "XFBLocationExpansionIntentTypeUtils.facebook",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, a, l, u, c, d, m, p, _, f, g, h;
      return e != null
        ? {
            cities: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (t = e.cities) == null
                ? void 0
                : t.map(function (e) {
                    var t;
                    return {
                      country: e.country,
                      distance_unit: (t =
                        o("TypeCoercionUtils")).coerceNonMaybeValue(
                        o("enumUtils").coerceNullable(
                          e.distance_unit,
                          r("AdTargetSpecDistanceUnit"),
                        ),
                        "cities[].distance_unit",
                        i.id,
                      ),
                      key: t.coerceNonMaybeValue(
                        t.coerceMaybeNumberToString(e.key),
                        "cities[].key",
                        i.id,
                      ),
                      name: t.coerceEmptyStringToUndefined(e.name),
                      radius: e.radius,
                      region: e.region,
                      region_id: t.coerceMaybeNumberToString(e.region_id),
                    };
                  }),
            ),
            countries: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (n = e.countries) == null
                ? void 0
                : n.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.country_code,
                      "countries[].country_code",
                      i.id,
                    );
                  }),
            ),
            country_groups: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              e.country_groups,
            ),
            custom_locations: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              (a = e.custom_locations) == null
                ? void 0
                : a.reduce(function (e, t) {
                    var n;
                    return (
                      e.push({
                        address_string: (n =
                          o("TypeCoercionUtils")).coerceEmptyStringToUndefined(
                          t.address_string,
                        ),
                        country: n.coerceOptionalValue(t.country),
                        country_group: n.coerceOptionalValue(t.country_group),
                        custom_type: n.coerceOptionalValue(
                          o("enumUtils").coerceFromKey(
                            t.custom_type,
                            r("AdTargetSpecCustomType"),
                          ),
                        ),
                        distance_unit: n.coerceOptionalValue(
                          o("enumUtils").coerceNullable(
                            t.distance_unit,
                            r("AdTargetSpecDistanceUnit"),
                          ),
                        ),
                        latitude: n.coerceOptionalValue(t.latitude),
                        longitude: n.coerceOptionalValue(t.longitude),
                        max_population: n.coerceOptionalValue(t.max_population),
                        min_population: n.coerceOptionalValue(t.min_population),
                        name: n.coerceEmptyStringToUndefined(t.name),
                        primary_city_id: n.coerceOptionalValue(
                          t.primary_city_id,
                        ),
                        radius: n.coerceOptionalValue(t.radius),
                        region_id: n.coerceOptionalValue(t.region_id),
                      }),
                      e
                    );
                  }, []),
            ),
            electoral_districts: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              (l = e.electoral_districts) == null
                ? void 0
                : l.map(function (e) {
                    var t;
                    return {
                      country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                        e.country,
                      ),
                      electoral_district: t.coerceNonMaybeValue(
                        e.electoral_district,
                        "electoral_districts[].electoral_district",
                        i.id,
                      ),
                      key: t.coerceNonMaybeValue(
                        e.key,
                        "electoral_districts[].key",
                        i.id,
                      ),
                      name: t.coerceOptionalValue(e.name),
                    };
                  }),
            ),
            geo_markets: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (u =
                (c = e.geo_markets) == null
                  ? void 0
                  : c.map(function (e) {
                      var t;
                      return {
                        country: o("TypeCoercionUtils").coerceOptionalValue(
                          e.country,
                        ),
                        key: o("TypeCoercionUtils").coerceNonMaybeValue(
                          e.key,
                          "geo_markets[].key",
                          i.id,
                        ),
                        market_type:
                          (t = e.key) != null &&
                          t.startsWith(r("LocationConstants").DMA)
                            ? "DMA"
                            : "COMSCORE_MARKET",
                        name: o("TypeCoercionUtils").coerceOptionalValue(
                          e.name,
                        ),
                      };
                    })) != null
                ? u
                : [],
            ),
            large_geo_areas: s(e.large_geo_areas),
            location_cluster_ids: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(e.location_cluster_ids),
            location_expansion: e.location_expansion
              ? {
                  allowed: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.location_expansion.allowed,
                    "geo_markets[].location_expansion.allowed",
                    i.id,
                  ),
                  intent: o(
                    "XFBLocationExpansionIntentTypeUtils.facebook",
                  ).toJSEnum(
                    (d = e.location_expansion) == null ? void 0 : d.intent,
                  ),
                }
              : void 0,
            location_set_ids: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              (m = e.location_set_ids) == null
                ? void 0
                : m.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.key,
                      "location_set_ids[].key",
                      i.id,
                    );
                  }),
            ),
            location_types: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (p = e.location_types) == null
                ? void 0
                : p.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      r("getJSEnumSafe")(r("AdsAPITargetGeoLocationTypes"), e),
                      "location_types[]",
                      i.id,
                    );
                  }),
            ),
            medium_geo_areas: s(e.medium_geo_areas),
            metro_areas: s(e.metro_areas),
            neighborhoods: s(e.neighborhoods),
            places: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (_ = e.places) == null
                ? void 0
                : _.map(function (e) {
                    var t;
                    return {
                      country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                        e.country,
                      ),
                      distance_unit: t.coerceNonMaybeValue(
                        o("enumUtils").coerceNullable(
                          e.distance_unit,
                          r("AdTargetSpecDistanceUnit"),
                        ),
                        "places[].distance_unit",
                        i.id,
                      ),
                      key: t.coerceNonMaybeValue(e.key, "places[].key", i.id),
                      latitude: t.coerceOptionalValue(e.latitude),
                      longitude: t.coerceOptionalValue(e.longitude),
                      name: t.coerceOptionalValue(e.name),
                      primary_city_id: t.coerceOptionalValue(
                        t.coerceMaybeNumberToString(e.primary_city_id),
                      ),
                      radius: t.coerceOptionalValue(e.radius),
                      region_id: t.coerceOptionalValue(
                        t.coerceMaybeNumberToString(e.region_id),
                      ),
                    };
                  }),
            ),
            political_districts: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              (f = e.political_districts) == null
                ? void 0
                : f.map(function (e) {
                    return {
                      country: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.country,
                        "political_districts[].country",
                        i.id,
                      ),
                      key: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.key,
                        "political_districts[].key",
                        i.id,
                      ),
                      name: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.name,
                        "political_districts[].name",
                        i.id,
                      ),
                      political_district: "",
                    };
                  }),
            ),
            regions: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (g = e.regions) == null
                ? void 0
                : g.map(function (e) {
                    var t;
                    return {
                      country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                        e.country,
                      ),
                      key: t.coerceNonMaybeValue(
                        t.coerceMaybeNumberToString(e.key),
                        "regions[].key",
                        i.id,
                      ),
                      name: t.coerceNonMaybeValue(
                        e.name,
                        "regions[].name",
                        i.id,
                      ),
                    };
                  }),
            ),
            small_geo_areas: s(e.small_geo_areas),
            subcities: s(e.subcities),
            subneighborhoods: s(e.subneighborhoods),
            zips: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (h = e.zips) == null
                ? void 0
                : h.map(function (e) {
                    var t;
                    return {
                      country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                        e.country,
                      ),
                      country_name: t.coerceOptionalValue(e.country_name),
                      key: t.coerceNonMaybeValue(e.key, "zips[].key", i.id),
                      name: t.coerceOptionalValue(e.name),
                      primary_city: t.coerceOptionalValue(e.primary_city),
                      primary_city_id: t.coerceOptionalValue(
                        t.coerceMaybeNumberToString(e.primary_city_id),
                      ),
                      region: t.coerceOptionalValue(e.region),
                      region_id: t.coerceOptionalValue(
                        t.coerceMaybeNumberToString(e.region_id),
                      ),
                      supports_city: t.coerceNonMaybeValue(
                        e.supports_city,
                        "zips[].supports_city",
                        i.id,
                      ),
                      supports_region: t.coerceNonMaybeValue(
                        e.supports_region,
                        "zips[].supports_region",
                        i.id,
                      ),
                      type: "zips",
                    };
                  }),
            ),
          }
        : null;
    }
    function s(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e == null
          ? void 0
          : e.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(
                  e.key,
                  "large_geo_areas[].key",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceOptionalValue(e.region),
                region_id: t.coerceOptionalValue(e.region_id),
              };
            }),
      );
    }
    l.coerceGeoLocations = e;
  },
  98,
);
