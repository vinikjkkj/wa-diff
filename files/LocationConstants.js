__d(
  "LocationConstants",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsTargetingConstraints.experimental",
    "AdsTargetingLocationConstants.experimental",
    "CurrentLocale",
    "SearchableEntry",
    "getByPath",
    "gkx",
    "intlNumUtils",
    "keyMirror",
    "maybe",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "km",
      c = "kilometer",
      d = "mi",
      m = "mile",
      p = [1, 3, 5, 10, 15, 20, 25, 50],
      _ = [1, 3, 5, 10, 15, 20, 25, 50, 100, 200, 500],
      f = [1, 3, 5, 10, 20, 25, 40, 70, 160, 320, 800],
      g = [1, 3, 5, 10, 20, 25, 40, 70],
      h = [0, 10, 25, 50],
      y = [0, 10, 25, 50, 100, 200, 500],
      C = [0, 20, 40, 70],
      b = [0, 20, 40, 70, 160, 320, 800],
      v = [1, 3, 5, 10, 15, 25, 30, 40, 50],
      S = [1, 3, 5, 10, 15, 25, 30, 40, 50, 100, 200, 500],
      R = [1, 5, 8, 16, 25, 40, 48, 64, 80],
      L = [1, 5, 8, 16, 25, 40, 48, 64, 80, 160, 320, 800],
      E = [0, 10, 15, 20, 25, 30, 40, 50],
      k = [0, 10, 15, 20, 25, 30, 40, 50, 100, 200, 500],
      I = [0, 10, 15, 20, 25, 30, 35, 40, 50, 100, 200, 500],
      T = [0, 16, 25, 32, 40, 48, 64, 80],
      D = [0, 16, 25, 32, 40, 48, 64, 80, 160, 320, 800],
      x = [0, 16, 25, 32, 40, 48, 56, 80, 160, 320, 800],
      $ = 10,
      P = 17,
      N = 0.63,
      M = 1,
      w = 1,
      A = 1.6,
      F = 50,
      O = 500,
      B = 80,
      W = 800,
      q = 25,
      U = 35,
      V = 50,
      H = 100,
      G = 40,
      z = 56,
      j = 80,
      K = 160,
      Q = 10,
      X = 25,
      Y = 50,
      J = 16,
      Z = 40,
      ee = 80,
      te = 1,
      ne = 10,
      re = 25,
      oe = 50,
      ae = 2,
      ie = 16,
      le = 40,
      se = 80,
      ue = 1e3,
      ce = 5,
      de = 8,
      me = 200,
      pe = 2500,
      _e = 250,
      fe = 250,
      ge = 2500,
      he = 200,
      ye = 200,
      Ce = 5e4,
      be = {
        countries: r("AdsTargetingConstraints.experimental").MAX_COUNTRIES,
        cities: _e,
        medium_geo_areas: fe,
        regions: me,
        geo_markets: pe,
        zips: ge,
        custom_locations: he,
        places: ye,
        location_cluster_ids: Ce,
      },
      ve = 0,
      Se = 1,
      Re = 2,
      Le = 3,
      Ee = 3,
      ke = 6,
      Ie = 8,
      Te = 11,
      De = "COORDINATES_UNAVAILABLE",
      xe = "worldwide",
      $e,
      Pe = {
        getSupportedRadii: function (t, n) {
          var e = n || Pe.getLocalizedUnit(),
            r = Pe.isRadiusImprovementEnabled();
          return t === gt.LA_RADIUS_TYPE
            ? r
              ? e === m
                ? _
                : g
              : e === m
                ? p
                : f
            : r
              ? e === m
                ? y
                : b
              : e === m
                ? h
                : C;
        },
        getLocalizedUnit: function () {
          return $e || (r("CurrentLocale").get() === "en_US" ? m : c);
        },
        getLocalizedUnitFbt: function (t) {
          return (t || Pe.getLocalizedUnit()) === m
            ? s._(/*BTDS*/ "mi")
            : s._(/*BTDS*/ "km");
        },
        getCityMinRadius: function (t) {
          var e = t || Pe.getLocalizedUnit();
          return e === m ? $ : P;
        },
        getAddressMinRadius: function (t) {
          var e = t || Pe.getLocalizedUnit();
          return e === m ? N : M;
        },
        getMinRadius: function (t, n) {
          return t === gt.CITIES || t === gt.CUSTOM_LOCATIONS || t === gt.PLACES
            ? t === gt.CITIES
              ? Pe.getCityMinRadius(n)
              : Pe.getAddressMinRadius(n)
            : 0;
        },
        getMaxRadius: function (t, n) {
          var e = n || Pe.getLocalizedUnit();
          if (t === !0) {
            var r = Pe.isRadiusImprovementEnabled();
            if (r) return e === m ? O : W;
          }
          return e === m ? F : B;
        },
        getCityDefaultRadius: function (t) {
          var e = Pe.getLocalizedUnit();
          if (t === !0) {
            if (Pe._isAggressiveRadiusEnabled()) return e === m ? H : K;
            if (Pe._isPerformanceRadiusEnabled()) return e === m ? V : j;
            if (Pe._isPreferencePlusRadiusEnabled()) return e === m ? U : z;
          }
          return e === m ? q : G;
        },
        getAddressDefaultRadius: function (t, n) {
          var e = n || Pe.getLocalizedUnit();
          if (t === !0) {
            if (Pe._isAggressiveRadiusEnabled()) return e === m ? Y : ee;
            if (Pe._isPerformanceRadiusEnabled()) return e === m ? X : Z;
          }
          return e === m ? Q : J;
        },
        getPlaceDefaultRadius: function (t) {
          var e = Pe.getLocalizedUnit();
          if (t === !0) {
            if (Pe._isAggressiveRadiusEnabled()) return e === m ? oe : se;
            if (Pe._isPerformanceRadiusEnabled()) return e === m ? re : le;
            if (
              Pe._isPreferenceRadiusEnabled() ||
              Pe._isPreferencePlusRadiusEnabled()
            )
              return e === m ? ne : ie;
          }
          return e === m ? te : ae;
        },
        getLocationSetDefaultRadius: function (t) {
          var e = t || Pe.getLocalizedUnit();
          return e === m ? gt.DEFAULT_DISTANCE_MILES : gt.DEFAULT_DISTANCE_KM;
        },
        getSupportedRadiiByLocationType: function (t, n, r, o) {
          var e = Pe.getSupportedRadii(t, r),
            a = Pe.getMinRadius(n),
            i = Pe.getMaxRadius(o);
          return e.filter(function (e) {
            return e >= a && e <= i;
          });
        },
        getBulkInputRadiusOptions: function (t, n) {
          if (t === gt.CITIES) {
            var e = Pe.isRadiusImprovementEnabled();
            return n === !0 && e
              ? Pe._isPreferencePlusRadiusEnabled()
                ? Pe.getLocalizedUnit() === m
                  ? I
                  : x
                : Pe.getLocalizedUnit() === m
                  ? k
                  : D
              : Pe.getLocalizedUnit() === m
                ? E
                : T;
          } else if (t === gt.CUSTOM_LOCATIONS) {
            var r = Pe.isRadiusImprovementEnabled();
            return n === !0 && r
              ? Pe.getLocalizedUnit() === m
                ? S
                : L
              : Pe.getLocalizedUnit() === m
                ? v
                : R;
          }
          return [];
        },
        getDefaultRadius: function (t, n) {
          var e,
            r =
              ((e = {}),
              (e[gt.CITIES] = Pe.getCityDefaultRadius),
              (e[gt.PLACES] = Pe.getPlaceDefaultRadius),
              (e[gt.CUSTOM_LOCATIONS] = Pe.getAddressDefaultRadius),
              e),
            o = r[t];
          return o != null ? o(n) : 0;
        },
        setLocalizedUnit: function (t) {
          $e = t;
        },
        unsetLocalizedUnit: function () {
          $e = null;
        },
        MENU_ITEMS: r("keyMirror")({
          CURRENT_CITY: null,
          CITIES_IN_RADIUS: null,
          RADIUS_INPUT: null,
          SEPARATOR: null,
        }),
        isRadiusImprovementEnabled: function () {
          return (
            r("gkx")("18019") ||
            r("gkx")("18020") ||
            r("gkx")("19714") ||
            r("gkx")("18021")
          );
        },
        _isAggressiveRadiusEnabled: function () {
          return r("gkx")("18019");
        },
        _isPerformanceRadiusEnabled: function () {
          return r("gkx")("18020");
        },
        _isPreferencePlusRadiusEnabled: function () {
          return r("gkx")("19714");
        },
        _isPreferenceRadiusEnabled: function () {
          return r("gkx")("18021");
        },
      },
      Ne = {
        getMinPopulationForCountry: function () {
          return r("AdsTargetingLocationConstants.experimental")
            .minPopulationThresholdForCountries;
        },
        getMinPopulationForCountryGroup: function () {
          return r("AdsTargetingLocationConstants.experimental")
            .minPopulationThresholdForCountryGroups;
        },
        getMaxPopulation: function () {
          return r("AdsTargetingLocationConstants.experimental")
            .maxPopulationThreshold;
        },
        getPopulationRangesForCountry: function () {
          return r("AdsTargetingLocationConstants.experimental")
            .populationRanges.filter(function (e) {
              return (
                e >= Ne.getMinPopulationForCountry() &&
                e <= Ne.getMaxPopulation()
              );
            })
            .slice();
        },
        getPopulationRangesForCountryGroup: function () {
          return r("AdsTargetingLocationConstants.experimental")
            .populationRanges.filter(function (e) {
              return (
                e >= Ne.getMinPopulationForCountryGroup() &&
                e <= Ne.getMaxPopulation()
              );
            })
            .slice();
        },
        getMaxPopulationFormat: function () {
          return s._(/*BTDS*/ "3 million+");
        },
        getFormattedPopulation: function (t) {
          return t === Ne.getMaxPopulation()
            ? Ne.getMaxPopulationFormat()
            : t % 1e6 === 0
              ? s._(/*BTDS*/ '_j{"*":"{population count} million"}', [
                  s._param("population count", t / 1e6, [0, t / 1e6]),
                ])
              : s._(/*BTDS*/ '_j{"*":"{population count}"}', [
                  s._param(
                    "population count",
                    r("intlNumUtils").formatNumberWithThousandDelimiters(t, 0),
                    [0, t],
                  ),
                ]);
        },
        MENU_ITEMS: r("keyMirror")({ POPULATION_INPUT: null }),
      };
    function Me(e) {
      return e == null || e === 0 || e < Ee
        ? ve
        : e < ke
          ? Se
          : e < Ie
            ? Re
            : Le;
    }
    var we =
      ((e = {}),
      (e[ve] = 1),
      (e[Se] = Ee + 1),
      (e[Re] = ke + 1),
      (e[Le] = Ie + 1),
      e);
    function Ae(e) {
      var t;
      return (t = we[e]) != null ? t : Te + 1;
    }
    function Fe(e) {
      return e == null || e === 0 || e < Ee
        ? Ee + 1
        : e < ke
          ? ke + 1
          : e < Ie
            ? Ie + 1
            : e < Te
              ? Te + 1
              : e + 2;
    }
    function Oe(e) {
      var t;
      return (t = be[e]) != null ? t : 0;
    }
    function Be(e) {
      gt.DEFAULT_LOCATION_TYPES = e;
    }
    function We(e) {
      switch (e) {
        case gt.COUNTRY_GROUP:
          return gt.COUNTRY_GROUPS;
        case gt.COUNTRY:
          return gt.COUNTRIES;
        case gt.CITY:
          return gt.CITIES;
        case gt.REGION:
          return gt.REGIONS;
        case gt.GEO_MARKET:
          return gt.GEO_MARKETS;
        case gt.LARGE_GEO_AREA:
          return gt.LARGE_GEO_AREAS;
        case gt.MEDIUM_GEO_AREA:
          return gt.MEDIUM_GEO_AREAS;
        case gt.SMALL_GEO_AREA:
          return gt.SMALL_GEO_AREAS;
        case gt.METRO_AREA:
          return gt.METRO_AREAS;
        case gt.SUBCITY:
          return gt.SUBCITIES;
        case gt.NEIGHBORHOOD:
          return gt.NEIGHBORHOODS;
        case gt.SUBNEIGHBORHOOD:
          return gt.SUBNEIGHBORHOODS;
        case gt.LOCATION_CLUSTER_ID:
          return gt.LOCATION_CLUSTER_IDS;
        case gt.ELECTORAL_DISTRICT:
          return gt.ELECTORAL_DISTRICTS;
        case gt.POLITICAL_DISTRICT:
          return gt.POLITICAL_DISTRICTS;
        case gt.ZIP:
          return gt.ZIPS;
        case gt.CUSTOM_LOCATION:
          return gt.CUSTOM_LOCATIONS;
        case gt.PLACE:
          return gt.PLACES;
        case gt.COUNTRY_GROUPS:
        case gt.COUNTRIES:
        case gt.CITIES:
        case gt.REGIONS:
        case gt.GEO_MARKETS:
        case gt.LARGE_GEO_AREAS:
        case gt.MEDIUM_GEO_AREAS:
        case gt.SMALL_GEO_AREAS:
        case gt.METRO_AREAS:
        case gt.SUBCITIES:
        case gt.NEIGHBORHOODS:
        case gt.SUBNEIGHBORHOODS:
        case gt.ELECTORAL_DISTRICTS:
        case gt.POLITICAL_DISTRICTS:
        case gt.ZIPS:
        case gt.CUSTOM_LOCATIONS:
        case gt.LOCATION_CLUSTER_IDS:
        case gt.PLACES:
          return e;
        default:
          return gt.UNKNOWN;
      }
    }
    function qe(e) {
      switch (e) {
        case gt.COUNTRY_GROUPS:
          return gt.COUNTRY_GROUP;
        case gt.COUNTRIES:
          return gt.COUNTRY;
        case gt.CITIES:
          return gt.CITY;
        case gt.REGIONS:
          return gt.REGION;
        case gt.GEO_MARKETS:
          return gt.GEO_MARKET;
        case gt.LARGE_GEO_AREAS:
          return gt.LARGE_GEO_AREA;
        case gt.MEDIUM_GEO_AREAS:
          return gt.MEDIUM_GEO_AREA;
        case gt.SMALL_GEO_AREAS:
          return gt.SMALL_GEO_AREA;
        case gt.METRO_AREAS:
          return gt.METRO_AREA;
        case gt.SUBCITIES:
          return gt.SUBCITY;
        case gt.NEIGHBORHOODS:
          return gt.NEIGHBORHOOD;
        case gt.SUBNEIGHBORHOODS:
          return gt.SUBNEIGHBORHOOD;
        case gt.ELECTORAL_DISTRICTS:
          return gt.ELECTORAL_DISTRICT;
        case gt.POLITICAL_DISTRICTS:
          return gt.POLITICAL_DISTRICT;
        case gt.ZIPS:
          return gt.ZIP;
        case gt.CUSTOM_LOCATIONS:
          return gt.CUSTOM_LOCATION;
        case gt.LOCATION_CLUSTER_ID:
          return gt.LOCATION_CLUSTER_ID;
        case gt.PLACES:
          return gt.PLACE;
        case gt.COUNTRY_GROUP:
        case gt.COUNTRY:
        case gt.CITY:
        case gt.REGION:
        case gt.GEO_MARKET:
        case gt.LARGE_GEO_AREA:
        case gt.MEDIUM_GEO_AREA:
        case gt.SMALL_GEO_AREA:
        case gt.METRO_AREA:
        case gt.SUBCITY:
        case gt.NEIGHBORHOOD:
        case gt.SUBNEIGHBORHOOD:
        case gt.ELECTORAL_DISTRICT:
        case gt.POLITICAL_DISTRICT:
        case gt.ZIP:
        case gt.CUSTOM_LOCATION:
        case gt.PLACE:
          return e;
        default:
          return gt.UNKNOWN;
      }
    }
    function Ue(e) {
      switch (e) {
        case gt.COUNTRY_GROUPS:
        case gt.COUNTRIES:
        case gt.CITIES:
        case gt.REGIONS:
        case gt.GEO_MARKETS:
        case gt.LARGE_GEO_AREAS:
        case gt.MEDIUM_GEO_AREAS:
        case gt.SMALL_GEO_AREAS:
        case gt.METRO_AREAS:
        case gt.SUBCITIES:
        case gt.NEIGHBORHOODS:
        case gt.SUBNEIGHBORHOODS:
        case gt.ELECTORAL_DISTRICTS:
        case gt.POLITICAL_DISTRICTS:
        case gt.ZIPS:
        case gt.CUSTOM_LOCATIONS:
        case gt.LOCATION_CLUSTER_IDS:
        case gt.PLACES:
          return e;
      }
      return null;
    }
    function Ve() {
      return {
        country_groups: [],
        countries: [],
        regions: [],
        geo_markets: [],
        cities: [],
        electoral_districts: [],
        political_districts: [],
        zips: [],
        custom_locations: [],
        places: [],
        large_geo_areas: [],
        medium_geo_areas: [],
        small_geo_areas: [],
        metro_areas: [],
        subcities: [],
        neighborhoods: [],
        subneighborhoods: [],
        location_cluster_ids: [],
      };
    }
    function He() {
      return gt.DEFAULT_LOCATION_TYPES;
    }
    function Ge(e) {
      return (
        r("vulture")("YW3zs66nPaZHIE4GXfcYdndSAVI="),
        r("getByPath")(
          e,
          [gt.CUSTOM_LOCATIONS, "0", "distance_unit"],
          Pe.getLocalizedUnit(),
        )
      );
    }
    function ze() {
      var e;
      return [
        (e = r("AdsAPIObjectives")).APP_INSTALLS,
        e.MOBILE_APP_ENGAGEMENT,
        e.MOBILE_APP_INSTALLS,
        e.CONVERSIONS,
        e.PRODUCT_CATALOG_SALES,
      ];
    }
    var je = "country_groups",
      Ke = "countries",
      Qe = "regions",
      Xe = "geo_markets",
      Ye = "cities",
      Je = "electoral_districts",
      Ze = "political_districts",
      et = "zips",
      tt = "custom_locations",
      nt = "places",
      rt = "large_geo_areas",
      ot = "medium_geo_areas",
      at = "small_geo_areas",
      it = "metro_areas",
      lt = "subcities",
      st = "neighborhoods",
      ut = "subneighborhoods",
      ct = "location_cluster_ids",
      dt = [
        je,
        Ke,
        Qe,
        Xe,
        Ye,
        Je,
        Ze,
        et,
        tt,
        nt,
        rt,
        ot,
        at,
        it,
        lt,
        st,
        ut,
        ct,
      ],
      mt = dt.concat(["location_types", "location_expansion"]),
      pt = {
        AGGREGATION_RADIUS: 10,
        LARGE_CLUSTER_THRESHOLD: 1e3,
        MEDIUM_CLUSTER_THRESHOLD: 500,
        SMALL_CLUSTER_THRESHOLD: 100,
        MAX_LOCATIONS_SIZE: 1e3,
        MIN_ZOOM_LEVEL_FOR_FILTERING: 3,
      },
      _t = "__NO_RESULTS_FOUND__",
      ft = "unknown",
      gt = {
        Aggregation: pt,
        LOCATION_EXPANSION: "location_expansion",
        LOCATION_EXPANSION_NOT_ALLOWED: 0,
        COUNTRY_GROUP: "country_group",
        COUNTRY_GROUPS: je,
        COUNTRY: "country",
        COUNTRIES: Ke,
        CUSTOM_LOCATION: "custom_location",
        CUSTOM_LOCATIONS: tt,
        DMA: "DMA",
        COMSCORE_MARKET: "COMSCORE_MARKET",
        GEO_MARKET: "geo_market",
        GEO_MARKETS: Xe,
        REGION: "region",
        REGIONS: Qe,
        CITY: "city",
        CITIES: Ye,
        ELECTORAL_DISTRICT: "electoral_district",
        ELECTORAL_DISTRICTS: Je,
        POLITICAL_DISTRICT: "political_district",
        POLITICAL_DISTRICTS: Ze,
        ZIP: "zip",
        ZIPS: et,
        LARGE_GEO_AREA: "large_geo_area",
        LARGE_GEO_AREAS: rt,
        MEDIUM_GEO_AREA: "medium_geo_area",
        MEDIUM_GEO_AREAS: ot,
        SMALL_GEO_AREA: "small_geo_area",
        SMALL_GEO_AREAS: at,
        METRO_AREA: "metro_area",
        METRO_AREAS: it,
        SUBCITY: "subcity",
        SUBCITIES: lt,
        NEIGHBORHOOD: "neighborhood",
        NEIGHBORHOODS: st,
        SUBNEIGHBORHOOD: "subneighborhood",
        SUBNEIGHBORHOODS: ut,
        PLACE: "place",
        PLACES: nt,
        LOCATION_CLUSTER_ID: "location_cluster_id",
        LOCATION_CLUSTER_IDS: ct,
        LA_RADIUS_TYPE: "LA_RADIUS_TYPE",
        CUSTOM_TYPE_MULTI_CITY: "multi_city",
        locationTypes: dt,
        locationTypesWithSource: mt,
        UNKNOWN: ft,
        RadiusInfo: Pe,
        MultiCityPopulationInfo: Ne,
        SAVED_LOCATIONS: "saved_locations",
        MAX_SAVED_LOCATIONS_ALLOWED: r(
          "AdsTargetingLocationConstants.experimental",
        ).maxSavedLocationsAllowed,
        KILOMETER_SYMBOL: u,
        KILOMETER_UNIT: c,
        MILE_SYMBOL: d,
        MILE_UNIT: m,
        BULK_INPUT_ADDRESS_RADIUS_MILES: v,
        BULK_INPUT_ADDRESS_RADIUS_IMPROVED_MILES: S,
        BULK_INPUT_ADDRESS_RADIUS_KILOMETERS: R,
        BULK_INPUT_ADDRESS_RADIUS_IMPROVED_KILOMETERS: L,
        BULK_INPUT_CITY_RADIUS_MILES: E,
        BULK_INPUT_CITY_RADIUS_IMPROVED_MILES: k,
        BULK_INPUT_CITY_RADIUS_PREFERENCE_PLUS_MILES: I,
        BULK_INPUT_CITY_RADIUS_KILOMETERS: T,
        BULK_INPUT_CITY_RADIUS_IMPROVED_KILOMETERS: D,
        BULK_INPUT_CITY_RADIUS_PREFERENCE_PLUS_KILOMETERS: x,
        STORE_VISITS_MIN_AUDIENCE: ue,
        STORE_VISITS_MIN_RADIUS_MILE: ce,
        STORE_VISITS_MIN_RADIUS_KILOMETER: de,
        ADDRESS_MIN_RADIUS_MILE: N,
        ADDRESS_MIN_RADIUS_KILOMETER: M,
        ADDRESS_MIN_RADIUS_MILE_V2: w,
        ADDRESS_MIN_RADIUS_KILOMETER_V2: A,
        COUNTRY_TREE_LEVEL: ve,
        REGION_TREE_LEVEL: Se,
        CITY_TREE_LEVEL: Re,
        LOCATION_TREE_LEVEL: Le,
        TYPE_ALL: "home,recent",
        TYPE_HOME: "home",
        TYPE_RECENT: "recent",
        TYPE_TRAVELING: "travel_in",
        TYPE_FREQUENTLY_IN: "frequently_in",
        DEFAULT_AUDIENCE_SIZE: "500000",
        DEFAULT_DISTANCE_KM: "18",
        DEFAULT_DISTANCE_MILES: "11",
        MAX_MILES_DISTANCE_SIZE: 50,
        DEFAULT_LOCATION_TYPES: r("gkx")("13547")
          ? ["home", "recent", "frequently_in"]
          : ["home", "recent"],
        DEFAULT_EXCLUSION_LOCATION_TYPES: ["home"],
        DEFAULT_EXCLUSION_LOCATION_TYPES_V2: ["home", "recent"],
        DEFAULT_DYNAMIC_LOCAL_AWARENESS_LOCATION_TYPES: ["recent"],
        getDynamicLocalAwarenessDefaultLocationTypes: He,
        setDefaultLocationTypes: Be,
        getPluralLocationType: We,
        getSingularLocationType: qe,
        getAsLocationType: Ue,
        getEmptyLocations: Ve,
        getLocationDistanceUnit: Ge,
        getMaxTargetLocationsCount: Oe,
        getTreeDepthForZoomLevel: Me,
        getZoomLevelForTreeDepth: Ae,
        getNextZoomRangeStart: Fe,
        getAllowedObjectivesForGlobalTargeting: ze,
        CLEAR_WARNING: "clear_warning",
        INCLUDE: "include",
        EXCLUDE: "exclude",
        WORLDWIDE: xe,
        MAX_COUNTRIES: r("AdsTargetingConstraints.experimental").MAX_COUNTRIES,
        MAP_DEFAULT_HEIGHT: 230,
        COUNTRIES_WITH_ZIP_TARGETING: r(
          "AdsTargetingLocationConstants.experimental",
        ).CountriesWithPostalCodeTargeting,
        REPORT_OPTIONS: r("keyMirror")({
          SHAPE_WRONG: null,
          SHAPE_MISSING: null,
          NAME_WRONG: null,
          OTHER: null,
        }),
        LIST_ITEM_STATE: r("keyMirror")({
          MENU: null,
          HIDE: null,
          REPORT: null,
          COMPLETE: null,
        }),
        NOTICE_TYPES: r("keyMirror")({
          hasDropPinFailed: null,
          hasNoInclusion: null,
          hasNoPolygon: null,
          hasTooManyLocations: null,
          hasTooManyCountriesForMap: null,
          hasDuplicates: null,
          hasTooManyCountries: null,
          hasReplacedLocations: null,
          hasInvalidExclude: null,
          hasValidLocations: null,
          hasInvalidLocationNames: null,
          hasSuggestedLocation: null,
          isSavedLocationCreated: null,
          isSavedLocationDeleted: null,
          isSavedLocationUpdated: null,
          isSavedLocationDeletedFailed: null,
          hasSavedLocationLoadFailed: null,
        }),
        BULK_INPUT_VIEW_STATE: r("keyMirror")({
          INPUT_VIEW: null,
          HIDE_VIEW: null,
          VALIDATING_VIEW: null,
          REVIEW_VIEW: null,
          UPDATING_SAVED_LOCATION: null,
          LOADING_LOCATION_CLUSTER_VIEW: null,
          LOCATION_CLUSTER_CREATION_ERROR_VIEW: null,
        }),
        SAVED_LOCATION_VIEW_STATE: r("keyMirror")({
          NAME_INPUT_VIEW: null,
          NAME_SAVING_VIEW: null,
          DELETE_VIEW: null,
          DELETE_SPINNER_VIEW: null,
          HIDE_VIEW: null,
        }),
        BULK_INPUT_FORMAT_STATE: r("keyMirror")({
          CORRECT: null,
          ERROR_EXCEED_MAX_LOCATIONS: null,
        }),
        BULK_INUT_REVIEW_TABLE_KEY: r("keyMirror")({
          TOTAL: null,
          VALID: null,
          INVALID: null,
        }),
        BULK_INUT_GEO_MARKET_INPUT_FORMAT: r("keyMirror")({
          CODE: null,
          NAME: null,
        }),
        BULK_INUT_ROW_DATA_KEYS: [
          "valid",
          "key",
          "name",
          "primary_city",
          "region",
          "country_name",
        ],
        BULK_INPUT_DOWNLOAD_OPTIONS: r("keyMirror")({
          ALL: null,
          MATCHED: null,
          UNMATCHED: null,
        }),
        BULK_INUT_ROW_DATA_KEY_INDEX_MAP: {},
        SUGGESTED_COUNTRY_GROUPS_KEYS: [
          "asia",
          "africa",
          "europe",
          "north_america",
          "south_america",
          "oceania",
          "caribbean",
          "central_america",
          "worldwide",
        ],
        SUGGEST_LOCATION_COUNTRIES_THRESHOLD: r(
          "AdsTargetingLocationConstants.experimental",
        ).SuggestRegionsCountryThreshold,
        SUGGEST_MULTI_CITY_LOCATIONS_COUNTRIES: 3,
        SUGGEST_MULTI_CITY_LOCATIONS_COUNTRY_GROUPS: 5,
        LOCATION_COORDINATES_UNAVAILABLE: De,
        LOCATION_TYPES_SUPPORTED_FOR_SAVED_LOCATIONS: new Set(),
        NO_RESULTS_ID: _t,
        NO_RESULTS_ENTRY: new (r("SearchableEntry"))({
          title: s._(/*BTDS*/ "No locations found"),
          uniqueID: _t,
          auxiliaryData: o("maybe").None,
        }),
      };
    (gt.BULK_INUT_ROW_DATA_KEYS.forEach(function (e, t) {
      gt.BULK_INUT_ROW_DATA_KEY_INDEX_MAP[e] = t;
    }),
      (gt.LOCATION_TYPES_SUPPORTED_FOR_SAVED_LOCATIONS = new Set([
        "countries",
        "regions",
        "cities",
        "zips",
        "geo_markets",
        "custom_locations",
      ])),
      (i.exports = gt));
  },
  162,
);
