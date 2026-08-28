__d(
  "AdsTargetingLocationDataTransformer",
  [
    "invariant",
    "AdsCityRadiusRemovalQEUtils",
    "AdsTargetingDMAToComscoreMigrationUtils",
    "LocationConstants",
    "SearchableEntry",
    "adsTargetingLocationGetCustomLocationKey",
    "flattenArray",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, r, o, a, i) {
      var l = babelHelpers.extends(
        { region_id: String(t), region: n, country: r, country_name: o },
        e,
      );
      return (
        a != null && (l.city = a),
        i != null && (l.city_id = String(i)),
        l
      );
    }
    function u(e, t, n) {
      var r = o("LocationConstants").getEmptyLocations();
      return (
        e
          .filter(function (e) {
            var t = o("LocationConstants").getAsLocationType(e.getType());
            return t != null && r[t];
          })
          .forEach(function (e) {
            r[e.getType()].push(c(e.getAuxiliaryData() || {}, !1, t, n));
          }),
        r
      );
    }
    function c(t, n, r, a) {
      var i = t.type,
        l = t.region_id,
        u = t.country_code,
        c = t.country_name,
        d = t.region,
        m = t.city,
        p = t.city_id,
        _ = t.primary_city_id,
        f = { key: t.key, name: t.name, type: i },
        g = a ? a(i) : t.radius;
      switch (i) {
        case o("LocationConstants").COUNTRY_GROUPS:
          return babelHelpers.extends(
            { country_codes: t.country_codes, is_worldwide: t.is_worldwide },
            f,
          );
        case o("LocationConstants").COUNTRIES:
          return n ? f : t.key;
        case o("LocationConstants").REGIONS:
          return babelHelpers.extends({ country: u, country_name: c }, f);
        case o("LocationConstants").CITIES:
          var h = babelHelpers.extends(
            {
              country: u,
              country_name: c,
              radius:
                r === !1 &&
                o(
                  "AdsCityRadiusRemovalQEUtils",
                ).isInCityRadiusRemovalQETreatment()
                  ? 0
                  : g ||
                    o("LocationConstants").RadiusInfo.getCityDefaultRadius(r),
              distance_unit:
                o("LocationConstants").RadiusInfo.getLocalizedUnit(),
            },
            f,
          );
          return (l && ((h.region_id = String(l)), (h.region = d)), h);
        case o("LocationConstants").GEO_MARKETS:
          return babelHelpers.extends(
            {
              country: u,
              country_name: c,
              market_type: o(
                "AdsTargetingDMAToComscoreMigrationUtils",
              ).getMarketType(t.key),
            },
            f,
          );
        case o("LocationConstants").ELECTORAL_DISTRICTS:
          return babelHelpers.extends(
            { region_id: String(l), region: d, country: u, country_name: c },
            f,
          );
        case o("LocationConstants").LARGE_GEO_AREAS:
          return babelHelpers.extends(
            { region_id: String(l), region: d, country: u, country_name: c },
            f,
          );
        case o("LocationConstants").MEDIUM_GEO_AREAS:
          return babelHelpers.extends(
            { region_id: String(l), region: d, country: u, country_name: c },
            f,
          );
        case o("LocationConstants").SMALL_GEO_AREAS:
          return babelHelpers.extends(
            { region_id: String(l), region: d, country: u, country_name: c },
            f,
          );
        case o("LocationConstants").METRO_AREAS:
          return babelHelpers.extends(
            { region_id: String(l), region: d, country: u, country_name: c },
            f,
          );
        case o("LocationConstants").LOCATION_CLUSTER_IDS:
          return babelHelpers.extends({}, f);
        case o("LocationConstants").POLITICAL_DISTRICTS:
          return babelHelpers.extends(
            { region_id: String(l), region: d, country: u, country_name: c },
            f,
          );
        case o("LocationConstants").SUBCITIES:
        case o("LocationConstants").NEIGHBORHOODS:
        case o("LocationConstants").SUBNEIGHBORHOODS:
          return e(f, l, d, u, c, m, p);
        case o("LocationConstants").ZIPS:
          var y = babelHelpers.extends({ country: u, country_name: c }, f);
          return (
            l && ((y.region_id = String(l)), (y.region = d)),
            _ &&
              ((y.primary_city_id = String(_)),
              (y.primary_city = t.primary_city)),
            y
          );
        case o("LocationConstants").CUSTOM_LOCATIONS:
          var C = t,
            b = C.custom_type;
          if (b === o("LocationConstants").CUSTOM_TYPE_MULTI_CITY)
            return babelHelpers.extends(
              {
                custom_type: b,
                min_population: C.min_population,
                max_population: C.max_population,
                country: C.country,
                country_group: C.country_group,
              },
              f,
            );
          var v = babelHelpers.extends(
            {
              address_string: C.name,
              country: u,
              country_name: c,
              latitude: Number(C.latitude),
              longitude: Number(C.longitude),
              radius:
                g ||
                o("LocationConstants").RadiusInfo.getAddressDefaultRadius(r),
              distance_unit:
                o("LocationConstants").RadiusInfo.getLocalizedUnit(),
            },
            f,
          );
          return (
            l && ((v.region_id = String(l)), (v.region = d)),
            _ &&
              ((v.primary_city_id = String(_)),
              (v.primary_city = C.primary_city)),
            v
          );
        case o("LocationConstants").PLACES:
          var S = babelHelpers.extends(
            {
              category: t.category,
              country: u,
              country_name: c,
              radius:
                g || o("LocationConstants").RadiusInfo.getPlaceDefaultRadius(r),
              distance_unit:
                o("LocationConstants").RadiusInfo.getLocalizedUnit(),
            },
            f,
          );
          return (
            l && ((S.region_id = String(l)), (S.region = d)),
            _ &&
              ((S.primary_city_id = String(_)),
              (S.primary_city = t.primary_city)),
            S
          );
        default:
          s(0, 42873, i);
      }
    }
    function d(e) {
      var t = e.normalized_address;
      return new (r("SearchableEntry"))({
        uniqueID: t,
        title: t,
        type: o("LocationConstants").CUSTOM_LOCATIONS,
        auxiliaryData: m(e),
      });
    }
    function m(e) {
      var t = e.normalized_address,
        n = {
          type: o("LocationConstants").CUSTOM_LOCATIONS,
          latitude: Number(e.latitude),
          longitude: Number(e.longitude),
          key: t,
          name: t,
          country_code: e.country.key,
          country_name: e.country.name,
        },
        r = e.city;
      r && ((n.primary_city_id = String(r.key)), (n.primary_city = r.name));
      var a = e.region;
      a && ((n.region_id = String(a.key)), (n.region = a.name));
      var i = e.radius;
      return (i && (n.radius = i), n);
    }
    function p(e, t, n) {
      e = e || {};
      var r = babelHelpers.extends({}, e);
      return (
        o("LocationConstants").locationTypes.forEach(function (a) {
          !e[a] ||
            !t[a] ||
            (r[a] = e[a].map(function (e) {
              var r;
              if (a === o("LocationConstants").COUNTRIES) {
                if (!n) return e;
                r = { key: e };
              } else if (
                ((r = typeof e == "string" ? { key: e } : e), !t[a][r.key])
              )
                return r;
              var i = babelHelpers.extends({}, t[a][r.key]);
              return (
                i.country_code && (i.country = i.country_code),
                (i.type = a),
                delete i.country_code,
                i.region_id
                  ? (i.region_id = String(i.region_id))
                  : (delete i.region_id, delete i.region),
                i.primary_city_id
                  ? (i.primary_city_id = String(i.primary_city_id))
                  : (delete i.primary_city_id, delete i.primary_city),
                (a === o("LocationConstants").CUSTOM_LOCATIONS ||
                  a === o("LocationConstants").PLACES) &&
                  i.latitude &&
                  i.longitude &&
                  ((i.latitude = Number(i.latitude)),
                  (i.longitude = Number(i.longitude))),
                babelHelpers.extends({}, r, i)
              );
            }));
        }),
        r
      );
    }
    function _(e) {
      var t = {};
      return (
        o("LocationConstants").locationTypes.forEach(function (e) {
          t[e] = [];
        }),
        e.forEach(function (e) {
          e.type === o("LocationConstants").COUNTRIES
            ? t[e.type].push(e.key)
            : t[e.type].push(e);
        }),
        t
      );
    }
    function f(e) {
      var t = {};
      o("LocationConstants").locationTypes.forEach(function (n) {
        var a = e[n];
        a &&
          ((t[n] = []),
          a.forEach(function (e) {
            var a = null;
            if (n === o("LocationConstants").COUNTRIES) a = e;
            else if (n === o("LocationConstants").COUNTRY_GROUPS)
              a = { key: e };
            else {
              ((a = babelHelpers.extends({}, e)),
                n === o("LocationConstants").CITIES && (a.radius = e.radius),
                n === o("LocationConstants").CUSTOM_LOCATIONS &&
                  (a.key = r("adsTargetingLocationGetCustomLocationKey")(e)));
              var i = e.region_id;
              i && (a.region_id = String(i));
              var l = e.primary_city_id;
              l && (a.primary_city_id = String(l));
            }
            t[n].push(a);
          }));
      });
      var n = e.location_types;
      n && (t.location_types = n.slice());
      var a = e.location_expansion;
      return (a && (t.location_expansion = a), t);
    }
    function g(e) {
      return e.type === o("LocationConstants").COUNTRIES
        ? [
            new (r("SearchableEntry"))({
              uniqueID: e.id,
              title: e.name,
              type: o("LocationConstants").COUNTRIES,
              auxiliaryData: {
                country_code: e.id,
                country_name: e.name,
                key: e.id,
                name: e.name,
                supports_city: !0,
                supports_region: !0,
                type: o("LocationConstants").COUNTRIES,
                order: 0,
              },
            }),
          ]
        : e.id === o("LocationConstants").WORLDWIDE ||
            e.type === o("LocationConstants").COUNTRY_GROUPS
          ? [
              new (r("SearchableEntry"))({
                uniqueID: e.id,
                title: e.name,
                type: o("LocationConstants").COUNTRY_GROUPS,
                auxiliaryData: {
                  key: e.id,
                  name: e.name.toString(),
                  country_codes: e.geoLocations.countries,
                  supports_city: !0,
                  supports_region: !0,
                  is_worldwide: e.id == o("LocationConstants").WORLDWIDE,
                  type: o("LocationConstants").COUNTRY_GROUPS,
                  order: 0,
                },
              }),
            ]
          : null;
    }
    function h(e) {
      var t,
        n = g(e),
        o = (t = e.children) != null ? t : [];
      return (
        n ||
        r("flattenArray")(
          o.map(function (e) {
            return h(e);
          }),
        )
      );
    }
    ((l.entriesToDataStore = u),
      (l.searchDataToDataStore = c),
      (l.getSearchableEntryFromGeoCoder = d),
      (l.geoCoderDataToSearchData = m),
      (l.fillMetaInfoForLocations = p),
      (l.convertProxyDataToDataStore = _),
      (l.convertKeyToString = f),
      (l.getSearchableEntryFromBrowseListEntry = g),
      (l.convertToSearchableEntries = h));
  },
  98,
);
