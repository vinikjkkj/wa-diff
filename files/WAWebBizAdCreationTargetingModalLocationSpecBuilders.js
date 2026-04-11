__d(
  "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
  ["WAWebBizAdCreationTargetingModalLocationRadiusUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.key;
      if (t == null) return null;
      var n = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).getDistanceUnitForCountry(e.countryCode),
        r = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).calculateRadius(e.radiusInMeters, n),
        a = {
          distance_unit: n,
          key: t,
          radius: r,
          region_id: e.regionId != null ? e.regionId : "",
        };
      return (
        e.name != null && (a.name = e.name),
        e.countryCode != null && (a.country = e.countryCode),
        e.countryName != null && (a.country_name = e.countryName),
        e.region != null && (a.region = e.region),
        a
      );
    }
    function s(e) {
      var t = e.key;
      if (t == null) return null;
      var n = { key: t };
      return (
        e.name != null && (n.name = e.name),
        e.countryCode != null && (n.country = e.countryCode),
        e.countryName != null && (n.country_name = e.countryName),
        n
      );
    }
    function u(e) {
      var t = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).getDistanceUnitForCountry(e.countryCode),
        n = o(
          "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
        ).calculateRadius(e.radiusInMeters, t),
        r = { distance_unit: t, radius: n };
      return (
        e.latitude != null && (r.latitude = e.latitude),
        e.longitude != null && (r.longitude = e.longitude),
        e.name != null && (r.address_string = e.name),
        r
      );
    }
    function c(e) {
      var t = e.key;
      if (t == null) return null;
      var n = { key: t };
      return (
        e.name != null && (n.name = e.name),
        e.countryCode != null && (n.country = e.countryCode),
        e.countryName != null && (n.country_name = e.countryName),
        e.region != null && (n.region = e.region),
        e.regionId != null && (n.region_id = e.regionId),
        n
      );
    }
    function d(e) {
      var t = e.key,
        n = e.regionId;
      if (t == null || n == null) return null;
      var r = { key: t, region_id: n };
      return (
        e.name != null && (r.name = e.name),
        e.countryCode != null && (r.country = e.countryCode),
        e.region != null && (r.region = e.region),
        r
      );
    }
    function m(e) {
      var t = e.key,
        n = e.regionId;
      if (t == null || n == null) return null;
      var r = { key: t, region_id: n };
      return (
        e.name != null && (r.name = e.name),
        e.countryCode != null && (r.country = e.countryCode),
        e.region != null && (r.region = e.region),
        r
      );
    }
    function p(t) {
      var n = {};
      return (
        t.forEach(function (t) {
          switch (t.type) {
            case "COUNTRY": {
              (n.countries || (n.countries = []),
                t.countryCode != null &&
                  n.countries.push(String(t.countryCode)));
              break;
            }
            case "COUNTRY_GROUP": {
              t.key != null &&
                (n.country_groups || (n.country_groups = []),
                n.country_groups.push(t.key));
              break;
            }
            case "CITY": {
              var r = e(t);
              r != null && (n.cities || (n.cities = []), n.cities.push(r));
              break;
            }
            case "REGION": {
              var o = s(t);
              o != null && (n.regions || (n.regions = []), n.regions.push(o));
              break;
            }
            case "PLACE":
            case "CUSTOM_LOCATION": {
              var a = u(t);
              (n.custom_locations || (n.custom_locations = []),
                n.custom_locations.push(a));
              break;
            }
            case "ZIP": {
              var i = c(t);
              i != null && (n.zips || (n.zips = []), n.zips.push(i));
              break;
            }
            case "NEIGHBORHOOD": {
              var l = d(t);
              l != null &&
                (n.neighborhoods || (n.neighborhoods = []),
                n.neighborhoods.push(l));
              break;
            }
            case "SUBCITY": {
              var p = m(t);
              p != null &&
                (n.subcities || (n.subcities = []), n.subcities.push(p));
              break;
            }
          }
        }),
        n
      );
    }
    l.convertLocationsToGeoLocations = p;
  },
  98,
);
