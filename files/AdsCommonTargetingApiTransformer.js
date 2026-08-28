__d(
  "AdsCommonTargetingApiTransformer",
  [
    "AddressPart",
    "AdsAPISpec",
    "AdsCommonTargetingLatLonUtils",
    "AdsCustomAudienceApiWhitelist",
    "AdsFlexibleTargetingConstants",
    "AdsMobileDeviceTypes",
    "AdsTargetingAdvancedDemoConstants",
    "AdsTargetingLocationDataTransformer",
    "AdsUtils",
    "AdsValidationConsts",
    "LocationConstants",
    "ads-app-platforms",
    "ads-mobile-operating-systems",
    "ads-mobile-platforms",
    "adsTargetingLocationGetLocationsCount",
    "gkx",
    "justknobx",
    "trimObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = "2.0",
      u = "2.0",
      c = "10.0";
    function d(e) {
      return e;
    }
    function m(e, t, n) {
      var r = {};
      return ((r[t] = e[o("AdsUtils").underscoreKey(t)] || n), r);
    }
    function p(e) {
      return o("AdsCustomAudienceApiWhitelist").applyCustomAudienceWhitelist(e);
    }
    var _ = {
      ageMax: r("AdsValidationConsts").maxAge,
      ageMin: r("AdsValidationConsts").minAgeDefault,
      fbDealID: null,
      genders: [],
      customAudiences: [],
      prospectingAudience: {},
      directInstallDevices: null,
      dynamicAudienceIds: [],
      excludedPublisherCategories: [],
      excludedPublisherListIDs: [],
      excludedCustomAudiences: [],
      excludedDynamicAudienceIds: [],
      interestedIn: [],
      mobileDevices: [],
      wifiOnly: !1,
      educationMajors: [],
      educationSchools: [],
      maxGradYear: r("AdsTargetingAdvancedDemoConstants").graduationYearBounds
        .maxGraduationYear,
      minGradYear: r("AdsTargetingAdvancedDemoConstants").graduationYearBounds
        .minGraduationYear,
      workEmployers: [],
      flexibleSpec: [
        { type: r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY },
      ],
    };
    function f(e, t) {
      var n = t.ageMinLimit || r("AdsValidationConsts").minAge;
      return Math.max(e, n);
    }
    function g(e, t, n, r, a, i, l) {
      if (!e) return [];
      var d, m;
      if (e === o("ads-mobile-operating-systems").operatingSystems.IOS)
        ((d = !t && n ? s : t), (m = n));
      else if (e === o("ads-mobile-operating-systems").operatingSystems.ANDROID)
        ((d = !r && a ? u : r), (m = a));
      else if (
        e === o("ads-mobile-operating-systems").operatingSystems.WINDOWS
      ) {
        var p = i == null ? void 0 : i.toString();
        (p != null && p.indexOf(",") >= 0 && (p = p.split(",")[0]),
          (d = !i && l ? c : p),
          (m = l));
      }
      m === "None" && (m = null);
      var _ = d ? e + "_ver_" + d + (m ? "_to_" + m : "_and_above") : e;
      return [_];
    }
    function h(e) {
      var t = e.user_os || [],
        n = { userOs: t };
      return (
        t.forEach(function (e) {
          var t = null,
            r = null;
          if (e.indexOf("_ver_") >= 0) {
            var a = e.split("_ver_")[1];
            t = a.split("_")[0];
            var i = a.split("_")[2];
            i !== "above" && (r = i);
          }
          var l = o("ads-app-platforms").getMobileOperatingSystemFromUserOS(e);
          l === o("ads-mobile-operating-systems").operatingSystems.IOS
            ? ((n.mobileOperatingSystem = o(
                "ads-mobile-operating-systems",
              ).operatingSystems.IOS),
              (n.minIosVersion = t),
              (n.maxIosVersion = r))
            : l === o("ads-mobile-operating-systems").operatingSystems.ANDROID
              ? ((n.mobileOperatingSystem = o(
                  "ads-mobile-operating-systems",
                ).operatingSystems.ANDROID),
                (n.minAndroidVersion = t),
                (n.maxAndroidVersion = r))
              : l === o("ads-mobile-operating-systems").operatingSystems.WINDOWS
                ? ((n.mobileOperatingSystem = o(
                    "ads-mobile-operating-systems",
                  ).operatingSystems.WINDOWS),
                  (n.minWindowsVersion = t),
                  (n.maxWindowsVersion = r))
                : (n.mobileOperatingSystem = null);
        }),
        n
      );
    }
    function y(e, t) {
      return (
        (t = t || []),
        e === o("ads-mobile-operating-systems").operatingSystems.IOS
          ? t.filter(o("ads-mobile-platforms").isIosDevice)
          : e === o("ads-mobile-operating-systems").operatingSystems.ANDROID
            ? t.filter(o("ads-mobile-platforms").isAndroidDevice)
            : []
      );
    }
    function C(e) {
      var t = r("AdsMobileDeviceTypes"),
        n = e.user_device || [];
      return (
        n.length || (n = [t.IPAD, t.IPOD, t.IPHONE]),
        { mobileDevices: n }
      );
    }
    function b(e, t) {
      var n = {};
      return ((n[t] = e[o("AdsUtils").underscoreKey(t)]), n);
    }
    function v(e) {
      return { excludedUserDevice: e.excluded_user_device || [] };
    }
    var S = { WIFI: "Wifi", "3G": "3G" };
    function R(e) {
      return e ? [S.WIFI] : [];
    }
    function L(e) {
      var t = e.wireless_carrier,
        n = { wifiOnly: !1 };
      return (t && t.length && t[0] === S.WIFI && (n.wifiOnly = !0), n);
    }
    function E(e, t, n) {
      if (e !== !1) return [];
      for (var r = [], o = n; o <= t; o++) r.push(o);
      return r;
    }
    function k(e) {
      var t = e.college_years,
        n = { targetAllGraduationYears: !0 };
      return (
        t &&
          t.length &&
          ((n.minGradYear = t[0]),
          (n.maxGradYear = t[t.length - 1]),
          (n.targetAllGraduationYears = !1)),
        n
      );
    }
    function I(e) {
      return (
        (e = e || {}),
        Array.isArray(e) && (e = {}),
        o("AdsTargetingLocationDataTransformer").convertKeyToString(e)
      );
    }
    function T(e, t) {
      var n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C;
      if (e == null) return {};
      var b = {
          country_groups:
            (n =
              (a = e.country_groups) == null
                ? void 0
                : a.map(function (e) {
                    return typeof e == "string" ? e : e.key;
                  })) != null
              ? n
              : [],
          countries: e.countries || [],
          cities:
            (i =
              (l = e.cities) == null
                ? void 0
                : l.map(function (e) {
                    return {
                      distance_unit: e.distance_unit,
                      key: e.key,
                      name: e.name,
                      region: e.region,
                      region_id: e.region_id,
                      radius: e.radius,
                      country: e.country,
                    };
                  })) != null
              ? i
              : [],
          regions:
            (s =
              (u = e.regions) == null
                ? void 0
                : u.map(function (e) {
                    return { key: e.key, name: e.name, country: e.country };
                  })) != null
              ? s
              : [],
          location_cluster_ids:
            (c =
              (d = e.location_cluster_ids) == null
                ? void 0
                : d.map(function (e) {
                    return { key: e.key, country: e.country };
                  })) != null
              ? c
              : [],
          zips:
            (m =
              (p = e.zips) == null
                ? void 0
                : p.map(function (e) {
                    return {
                      key: e.key,
                      name: e.name,
                      country: e.country,
                      region_id: e.region_id,
                    };
                  })) != null
              ? m
              : [],
          geo_markets:
            (_ =
              (f = e.geo_markets) == null
                ? void 0
                : f.map(function (e) {
                    return { key: e.key, name: e.name, country: e.country };
                  })) != null
              ? _
              : [],
          electoral_districts:
            (g =
              (h = e.electoral_districts) == null
                ? void 0
                : h.map(function (e) {
                    return {
                      key: e.key,
                      name: e.name,
                      country: e.country,
                      deprecation_code: e.deprecation_code,
                    };
                  })) != null
              ? g
              : [],
          political_districts:
            (y =
              (C = e.political_districts) == null
                ? void 0
                : C.map(function (e) {
                    return { key: e.key, name: e.name, country: e.country };
                  })) != null
              ? y
              : [],
          large_geo_areas: e.large_geo_areas
            ? e.large_geo_areas.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          medium_geo_areas: e.medium_geo_areas
            ? e.medium_geo_areas.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          small_geo_areas: e.small_geo_areas
            ? e.small_geo_areas.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          metro_areas: e.metro_areas
            ? e.metro_areas.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          subcities: e.subcities
            ? e.subcities.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          neighborhoods: e.neighborhoods
            ? e.neighborhoods.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          subneighborhoods: e.subneighborhoods
            ? e.subneighborhoods.map(function (e) {
                return {
                  key: e.key,
                  name: e.name,
                  country: e.country,
                  region: e.region,
                  region_id: e.region_id,
                };
              })
            : [],
          custom_locations: e.custom_locations
            ? e.custom_locations.map(function (e) {
                if (
                  e.custom_type == r("LocationConstants").CUSTOM_TYPE_MULTI_CITY
                ) {
                  var t = {
                    custom_type: e.custom_type,
                    min_population: e.min_population,
                    max_population: e.max_population,
                  };
                  return e.country
                    ? babelHelpers.extends({}, t, { country: e.country })
                    : babelHelpers.extends({}, t, {
                        country_group: e.country_group,
                      });
                }
                var n = e.address_string;
                return (
                  (!n ||
                    o("AdsCommonTargetingLatLonUtils").isLatLonString(n)) &&
                    (n = void 0),
                  {
                    name: e.address_string,
                    address_string: n,
                    distance_unit: e.distance_unit,
                    latitude: e.latitude,
                    longitude: e.longitude,
                    primary_city_id: Number(e.primary_city_id),
                    radius: e.radius,
                    region_id: Number(e.region_id),
                    country: e.country,
                  }
                );
              })
            : [],
          places: e.places
            ? e.places.map(function (e) {
                return {
                  key: e.key,
                  distance_unit: e.distance_unit,
                  radius: e.radius,
                  country: e.country,
                  region_id: e.region_id,
                };
              })
            : [],
        },
        v = r("adsTargetingLocationGetLocationsCount")(e);
      if (v) {
        var S,
          R = t
            ? r("LocationConstants").DEFAULT_EXCLUSION_LOCATION_TYPES
            : r("LocationConstants").DEFAULT_LOCATION_TYPES,
          L = (S = e.location_types) != null ? S : R;
        (!t &&
          r("gkx")("13547") &&
          r("justknobx")._("32") &&
          !L.includes("frequently_in") &&
          (L = [].concat(L, ["frequently_in"])),
          (b.location_types = L));
      }
      return b;
    }
    function D(e) {
      return T(e, !1);
    }
    function x(e) {
      return { geoLocations: I(e.geo_locations) };
    }
    function $(e) {
      return T(e, !0);
    }
    function P(e) {
      return { excludedGeoLocations: I(e.excluded_geo_locations) };
    }
    function N(e) {
      return e || [];
    }
    function M(e) {
      return {
        contextualTargetingCategories: e.contextual_targeting_categories || [],
      };
    }
    function w(e) {
      e = e || [];
      var t = [];
      return (
        e.forEach(function (e) {
          if (!(Object.keys(e).length <= 1)) {
            if (
              e.type ===
              r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ALL
            )
              Object.keys(e).forEach(function (n) {
                if (n !== "type") {
                  var r,
                    o = (r = e[n]) != null ? r : [];
                  o.forEach(function (e) {
                    var r = {};
                    ((r[n] = [e]), t.push(r));
                  });
                }
              });
            else if (
              e.type ===
              r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY
            ) {
              var n = {};
              (Object.keys(e).forEach(function (t) {
                t !== "type" &&
                  (t === "custom_audiences" && e[t] != null
                    ? (n[t] = p(e[t]))
                    : (n[t] = e[t]));
              }),
                t.push(n));
            }
          }
        }),
        t
      );
    }
    function A(e) {
      e = e || [];
      var t = {};
      return (
        e.forEach(function (e) {
          Object.keys(e).length <= 1 ||
            (e.type ===
              r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY &&
              Object.keys(e).forEach(function (n) {
                n !== "type" &&
                  ((t[n] = t[n] || []), (t[n] = t[n].concat(e[n])));
              }));
        }),
        t
      );
    }
    function F(e) {
      return O(e);
    }
    function O(e) {
      var t = [];
      return (
        Object.keys(e).forEach(function (n) {
          if (
            e[n] &&
            r("AdsFlexibleTargetingConstants").SUPPORT_TARGETING_TYPES[n]
          ) {
            var o = {
              type: r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY,
            };
            ((o[n] = e[n]), t.push(o));
          }
        }),
        t.push.apply(t, W(e.flexible_spec, e.exclusions)),
        { flexibleSpec: H(t) }
      );
    }
    function B(e, t) {
      var n, o, a;
      switch (t) {
        case r("LocationConstants").CITIES:
          return (
            (n = {}),
            (n[r("AddressPart").CITY] = e.name),
            (n[r("AddressPart").REGION] = e.region),
            (n[r("AddressPart").COUNTRY] = e.country_name),
            n
          );
        case r("LocationConstants").REGIONS:
          return (
            (o = {}),
            (o[r("AddressPart").REGION] = e.name),
            (o[r("AddressPart").COUNTRY] = e.country_name),
            o
          );
        case r("LocationConstants").ZIPS:
          return (
            (a = {}),
            (a[r("AddressPart").POSTAL_CODE] = e.name),
            (a[r("AddressPart").CITY] = e.primary_city),
            (a[r("AddressPart").REGION] = e.region),
            (a[r("AddressPart").COUNTRY] = e.country_name),
            a
          );
        default: {
          var i = new Error("Unsupported location type");
          throw (i.stack, i);
        }
      }
    }
    function W(e, t) {
      var n = [];
      return (
        e &&
          e.forEach(function (e) {
            Array.isArray(e)
              ? e.forEach(function (e) {
                  n.push(
                    babelHelpers.extends({}, e, {
                      type: r("AdsFlexibleTargetingConstants").ITEM_TYPE
                        .INCLUDE_ANY,
                    }),
                  );
                })
              : n.push(
                  babelHelpers.extends({}, e, {
                    type: r("AdsFlexibleTargetingConstants").ITEM_TYPE
                      .INCLUDE_ANY,
                  }),
                );
          }),
        t &&
          Object.keys(t).length &&
          n.push(
            babelHelpers.extends(
              {
                type: r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY,
              },
              t,
            ),
          ),
        n
      );
    }
    function q(e) {
      return _[e];
    }
    var U = {
        ageMax: { getter: d, from: m },
        ageMin: { getter: f, from: m },
        ageRange: { getter: d, from: m },
        genders: { getter: d, from: m },
        interests: { getter: d, from: m },
        userAdclusters: { getter: d, from: m },
        conjunctiveUserAdclusters: { getter: d, from: m },
        customAudiences: { getter: p, from: m },
        prospectingAudience: { getter: d, from: m },
        excludedCustomAudiences: { getter: p, from: m },
        dynamicAudienceIds: { getter: d, from: m },
        excludedDynamicAudienceIds: { getter: d, from: m },
        excludedProductAudienceSpecs: { getter: d, from: m },
        productAudienceSpecs: { getter: d, from: m },
        connections: { getter: d, from: m },
        excludedConnections: { getter: d, from: m },
        excludedPublisherCategories: { getter: d, from: m },
        excludedPublisherListIDs: { getter: d, from: m },
        brandSafetyContentFilterLevels: { getter: d, from: m },
        excludedBrandSafetyContentTypes: { getter: d, from: m },
        instreamVideoSkippableExcluded: { getter: d, from: m },
        publisherVisibilityCategories: { getter: d, from: m },
        friendsOfConnections: { getter: d, from: m },
        fbDealID: { getter: d, from: m },
        engagementSpecs: { getter: d, from: m },
        excludedEngagementSpecs: { getter: d, from: m },
        interestedIn: { getter: d, from: m },
        relationshipStatuses: { getter: d, from: m },
        familyStatuses: { getter: d, from: m },
        industries: { getter: d, from: m },
        lifeEvents: { getter: d, from: m },
        politics: { getter: d, from: m },
        income: { getter: d, from: m },
        netWorth: { getter: d, from: m },
        homeType: { getter: d, from: m },
        homeOwnership: { getter: d, from: m },
        homeValue: { getter: d, from: m },
        ethnicAffinity: { getter: d, from: m },
        generation: { getter: d, from: m },
        householdComposition: { getter: d, from: m },
        moms: { getter: d, from: m },
        officeType: { getter: d, from: m },
        locales: { getter: d, from: m },
        timezones: { getter: d, from: m },
        targetingOptimization: { getter: d, from: m },
        targetingRelaxationTypes: { getter: d, from: m },
        targetingAutomation: { getter: d, from: m },
        tafeCaMitigationStrategy: { getter: d, from: m },
        educationMajors: { getter: d, from: m },
        educationSchools: { getter: d, from: m },
        workEmployers: { getter: d, from: m },
        workPositions: { getter: d, from: m },
        behaviors: { getter: d, from: m },
        gatekeepers: { getter: d, from: m },
        followProfiles: { getter: d, from: m },
        followProfilesNegative: { getter: d, from: m },
        excludedUserAdclusters: { getter: d, from: m },
        pageTypes: { getter: d, from: m },
        appInstallState: { getter: d, from: m },
        installStateApplication: { getter: d, from: m },
        placePageSetIDs: { getter: d, from: m },
        alternateAutoTargetingOption: { getter: d, from: m },
        directInstallDevices: { getter: d, from: b },
        userOs: { getter: g, from: h },
        userDevice: { getter: y, from: C },
        excludedUserDevice: { getter: d, from: v },
        wirelessCarrier: { getter: R, from: L },
        collegeYears: { getter: E, from: k },
        educationStatuses: { getter: d, from: m },
        geoLocations: { getter: D, from: x },
        excludedGeoLocations: { getter: $, from: P },
        contextualTargetingCategories: { getter: N, from: M },
        flexibleSpec: { getter: w, from: O },
        exclusions: { getter: A, from: F },
        catalogBasedTargeting: { getter: d, from: m },
        marketingMessageTargeting: { getter: d, from: m },
        marketingMessageChannels: { getter: d, from: m },
        subscriberUniverse: { getter: d, from: m },
        userAgeUnknown: { getter: d, from: m },
      },
      V = {
        fromApi: function (n, a, i) {
          var t = {};
          return (
            o("AdsAPISpec").TARGETING_FIELDS.forEach(function (r) {
              var a,
                l = (a = e.get(r)) != null ? a : o("AdsUtils").underscoreKey(r);
              if ((e.set(r, l), !(i && !n[l]))) {
                var s = _[r],
                  u = U[r].from;
                if (u === m)
                  r === "userAgeUnknown"
                    ? (t[r] = n[l] != null ? n[l] : s)
                    : (t[r] = n[l] || s);
                else {
                  var c = u(n, r, s);
                  for (var d in c) t[d] = c[d];
                }
              }
            }),
            a && a[r("AdsFlexibleTargetingConstants").FLEXIBLE_TARGETING_API]
              ? Object.keys(
                  r("AdsFlexibleTargetingConstants").SUPPORT_TARGETING_TYPES,
                ).forEach(function (e) {
                  return delete t[o("AdsUtils").camelCaseKey(e)];
                })
              : delete t.flexibleSpec,
            t
          );
        },
        targetingSpecToApi: function (t) {
          var e = {};
          return (
            o("AdsAPISpec").TARGETING_FIELDS.forEach(function (n) {
              var r = t[n],
                a = o("AdsUtils").underscoreKey(n);
              (r === void 0 && (r = _[n]),
                n === "userOs"
                  ? (e[a] = U[n].getter(
                      t.mobileOperatingSystem,
                      t.minIosVersion,
                      t.maxIosVersion,
                      t.minAndroidVersion,
                      t.maxAndroidVersion,
                      t.minWindowsVersion,
                      t.maxWindowsVersion,
                    ))
                  : n === "userDevice"
                    ? (e[a] = U[n].getter(
                        t.mobileOperatingSystem,
                        t.mobileDevices || _.mobileDevices,
                      ))
                    : n === "excludedUserDevice"
                      ? (e[a] = U.userDevice.getter(
                          t.mobileOperatingSystem,
                          t.excludedMobileDevices || _.mobileDevices,
                        ))
                      : n === "wirelessCarrier"
                        ? (e[a] = U[n].getter(t.wifiOnly || _.wifiOnly))
                        : n === "collegeYears" ||
                          (n === "exclusions"
                            ? (e[a] = U[n].getter(t.flexibleSpec))
                            : n === "gatekeepers"
                              ? (e[a] = U[n].getter(t.gatekeepers))
                              : n === "followProfiles"
                                ? (e[a] = U[n].getter(t.followProfiles))
                                : n === "followProfilesNegative"
                                  ? (e[a] = U[n].getter(
                                      t.followProfilesNegative,
                                    ))
                                  : (e[a] = U[n].getter(r, t, n))));
            }),
            t.sex &&
              (e.genders =
                t.sex === o("AdsAPISpec").GENDERS.ALL ? [] : [t.sex]),
            r("trimObject")(e)
          );
        },
        fromCollegeYears: U.collegeYears.from,
        fromContextualTargetingCategories: U.contextualTargetingCategories.from,
        fromExclusions: F,
        fromFlexibleSpec: O,
        fromFollowProfiles: U.followProfiles.from,
        fromFollowProfilesNegative: U.followProfilesNegative.from,
        fromGatekeepers: U.gatekeepers.from,
        fromGeoLocations: x,
        fromExcludedGeoLocations: P,
        fromUserOs: U.userOs.from,
        getCollegeYears: U.collegeYears.getter,
        getContextualTargetingCategories:
          U.contextualTargetingCategories.getter,
        getExclusions: A,
        getFlexibleSpec: w,
        getFollowProfiles: U.followProfiles.getter,
        getFollowProfilesNegative: U.followProfilesNegative.getter,
        getGatekeepers: U.gatekeepers.getter,
        getGeoLocations: D,
        getUserOs: g,
        getGeoLocationApiSpec: T,
        getIntlAddressMetadata: B,
        getDefaultValue: q,
        _keyAccessors: U,
      };
    function H(e) {
      return (
        e.length ||
          e.push({
            type: r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY,
          }),
        e
      );
    }
    i.exports = V;
  },
  34,
);
