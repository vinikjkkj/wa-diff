__d(
  "adsTargetingLocationEpdAreLocationsEU",
  ["LocationConstants", "adsTargetingLocationEpdEULocations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : u(e).some(function (e) {
            return o(
              "adsTargetingLocationEpdEULocations",
            ).epdLocations.includes(e);
          });
    }
    function s(e) {
      return e == null
        ? !1
        : u(e).some(function (e) {
            return (
              o("adsTargetingLocationEpdEULocations").epdLocations.includes(
                e,
              ) ||
              e === "JP" ||
              e === "KR"
            );
          });
    }
    function u(e) {
      if (e == null) return [];
      var t = [],
        n = e.custom_locations;
      return (
        n != null &&
          n.forEach(function (e) {
            e.custom_type === "multi_city" &&
              (e == null ? void 0 : e.country_group) != null &&
              t.push(e.country_group);
          }),
        o("LocationConstants").locationTypes.forEach(function (n) {
          e[n] &&
            e[n] instanceof Array &&
            e[n].forEach(function (e) {
              typeof e == "string"
                ? t.push(e)
                : (e == null ? void 0 : e.country) != null && t.push(e.country);
            });
        }),
        t
      );
    }
    ((l.adsTargetingLocationEpdAreLocationsEU = e),
      (l.adsTargetingLocationEpdOrTba = s),
      (l.getAdsTargetingLocations = u));
  },
  98,
);
