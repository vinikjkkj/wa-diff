__d(
  "LWICometRadiusUtils",
  ["CurrentLocale", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25,
      s = 1609.34,
      u = 1e3,
      c = s / u,
      d = new Set(["US", "LR", "MM"]),
      m = {
        CITY: {
          kilometer: { defaultVal: 40, max: 80, min: 17 },
          mile: { defaultVal: 25, max: 50, min: 10 },
        },
        CUSTOM_LOCATION: {
          kilometer: { defaultVal: 16, max: 80, min: 1 },
          mile: { defaultVal: 10, max: 50, min: 1 },
        },
        PLACE: {
          kilometer: { defaultVal: 2, max: 80, min: 1 },
          mile: { defaultVal: 1, max: 50, min: 1 },
        },
      },
      p = {
        CITY: {
          kilometer: { defaultVal: 40, max: 80, min: 17 },
          mile: { defaultVal: 25, max: 50, min: 10 },
        },
        CUSTOM_LOCATION: {
          kilometer: { defaultVal: 40, max: 80, min: 1 },
          mile: { defaultVal: 25, max: 50, min: 1 },
        },
        PLACE: {
          kilometer: { defaultVal: 40, max: 80, min: 1 },
          mile: { defaultVal: 25, max: 50, min: 1 },
        },
      },
      _ = {
        CITY: {
          kilometer: { defaultVal: 80, max: 80, min: 17 },
          mile: { defaultVal: 50, max: 50, min: 10 },
        },
        CUSTOM_LOCATION: {
          kilometer: { defaultVal: 80, max: 80, min: 1 },
          mile: { defaultVal: 50, max: 50, min: 1 },
        },
        PLACE: {
          kilometer: { defaultVal: 80, max: 80, min: 1 },
          mile: { defaultVal: 50, max: 50, min: 1 },
        },
      },
      f = {
        CITY: {
          kilometer: { defaultVal: 80, max: 800, min: 17 },
          mile: { defaultVal: 50, max: 500, min: 10 },
        },
        CUSTOM_LOCATION: {
          kilometer: { defaultVal: 16, max: 800, min: 1 },
          mile: { defaultVal: 10, max: 500, min: 1 },
        },
        PLACE: {
          kilometer: { defaultVal: 40, max: 800, min: 1 },
          mile: { defaultVal: 25, max: 500, min: 1 },
        },
      };
    function g(e) {
      return e / c;
    }
    function h(e) {
      return e * c;
    }
    function y() {
      var e = r("CurrentLocale").get().split("_")[1];
      return e != null && d.has(e.trim().toUpperCase()) ? "mile" : "kilometer";
    }
    function C() {
      return r("gkx")("4987") ? f : m;
    }
    function b(e, t) {
      var n,
        r = C();
      return (n = r[e]) == null ? void 0 : n[t];
    }
    function v(e, t) {
      return e * (t === "mile" ? s : u);
    }
    ((l.DEFAULT_GEO_LOCATION_RADIUS = e),
      (l.RADIUS_CONFIG_MAP = m),
      (l.RADIUS_CONFIG_MAP_25MI = p),
      (l.RADIUS_CONFIG_MAP_50MI = _),
      (l.RADIUS_CONFIG_MAP_LAUNCH = f),
      (l.convertKilometersToMiles = g),
      (l.convertMilesToKilometers = h),
      (l.getDistanceUnit = y),
      (l.getRadiusConfigMap = C),
      (l.getRadiusInfoForLocationType = b),
      (l.getRadiusInMeters = v));
  },
  98,
);
