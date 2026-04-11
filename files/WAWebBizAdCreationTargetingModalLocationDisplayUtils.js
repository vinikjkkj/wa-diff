__d(
  "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
  [
    "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
    "compactMap",
    "isStringNullOrEmpty",
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
      var t = [];
      return (
        r("isStringNullOrEmpty")(e.region) || t.push(e.region),
        r("isStringNullOrEmpty")(e.countryName) || t.push(e.countryName),
        t.join(", ")
      );
    }
    function u(t) {
      var n, a, i, l, s, u, c, d;
      if (t == null) return "";
      var m = (n = t.countries) != null ? n : [],
        p = r("compactMap")((a = t.regions) != null ? a : [], function (e) {
          return e.name;
        }),
        _ = r("compactMap")(
          (i = t.country_groups) != null ? i : [],
          function (t) {
            var n;
            return typeof t == "string"
              ? e(t)
              : (n = t.name) != null
                ? n
                : t.key;
          },
        ),
        f = r("compactMap")((l = t.cities) != null ? l : [], function (e) {
          var t = e.name;
          if (t == null) return null;
          if (e.radius != null && e.distance_unit != null) {
            var n = e.distance_unit,
              r =
                n === "mile"
                  ? o("WAWebBizAdCreationTargetingModalLocationRadiusUtils")
                      .DEFAULT_CITY_RADIUS_MILES
                  : o("WAWebBizAdCreationTargetingModalLocationRadiusUtils")
                      .DEFAULT_CITY_RADIUS_KM;
            if (e.radius !== r) {
              var a = n === "mile" ? "mi" : "km";
              return t + " (" + e.radius + " " + a + ")";
            }
          }
          return t;
        }),
        g = r("compactMap")((s = t.zips) != null ? s : [], function (e) {
          return e.name;
        }),
        h = r("compactMap")(
          (u = t.neighborhoods) != null ? u : [],
          function (e) {
            return e.name;
          },
        ),
        y = r("compactMap")((c = t.subcities) != null ? c : [], function (e) {
          return e.name;
        }),
        C = r("compactMap")(
          (d = t.custom_locations) != null ? d : [],
          function (e) {
            var t = e.address_string;
            if (t == null) return null;
            if (e.radius != null && e.distance_unit != null) {
              var n = e.distance_unit === "mile" ? "mi" : "km";
              return t + " (" + e.radius + " " + n + ")";
            }
            return t;
          },
        ),
        b = [].concat(m, _, p, f, y, g, h, C);
      return b.length > 0 ? b.join(", ") : "";
    }
    function c(e) {
      var t, n, r, a, i, l, s, u;
      if (e == null) return !1;
      var c =
          (t = (n = e.custom_locations) == null ? void 0 : n.length) != null
            ? t
            : 0,
        d = (r = (a = e.countries) == null ? void 0 : a.length) != null ? r : 0,
        m = (i = (l = e.regions) == null ? void 0 : l.length) != null ? i : 0,
        p = (s = (u = e.cities) == null ? void 0 : u.length) != null ? s : 0;
      if (c === 1 && d === 0 && m === 0 && p === 0) return !0;
      if (p === 1 && c === 0 && d === 0 && m === 0) {
        var _,
          f = (_ = e.cities) == null ? void 0 : _[0];
        if (f != null && f.radius != null) {
          var g,
            h = (g = f.distance_unit) != null ? g : "kilometer",
            y =
              h === "mile"
                ? o("WAWebBizAdCreationTargetingModalLocationRadiusUtils")
                    .DEFAULT_CITY_RADIUS_MILES
                : o("WAWebBizAdCreationTargetingModalLocationRadiusUtils")
                    .DEFAULT_CITY_RADIUS_KM;
          return f.radius !== y;
        }
      }
      return !1;
    }
    ((l.buildLocationSubtitle = s),
      (l.formatLocationDisplay = u),
      (l.isLocalFlowSelection = c));
  },
  98,
);
