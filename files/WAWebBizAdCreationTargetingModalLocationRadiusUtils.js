__d(
  "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e3,
      l = 1609.34,
      s = new Set(["US", "LR", "MM"]),
      u = [16, 20, 25, 30, 40, 50, 65, 80],
      c = [10, 12, 15, 20, 25, 30, 40, 50],
      d = [1, 3, 5, 8, 12, 15, 20, 30],
      m = [1, 2, 3, 5, 8, 10, 15, 20];
    function p(e, t) {
      var n = e === "CITY";
      return t ? (n ? c : m) : n ? u : d;
    }
    function _(e) {
      return e == null ? !1 : s.has(e.trim().toUpperCase());
    }
    function f(t, n, r) {
      var o = p(n, r);
      return Math.round(r ? o[t] * l : o[t] * e);
    }
    function g(e, t, n) {
      var r = p(t, n),
        o = r[e];
      return o + " " + (n ? "mi" : "km");
    }
    var h = 25,
      y = 40;
    function C(e) {
      return _(e) ? "mile" : "kilometer";
    }
    function b(t, n) {
      return t != null
        ? Math.round(n === "mile" ? t / l : t / e)
        : n === "mile"
          ? h
          : y;
    }
    function v(t, n, r) {
      for (
        var o = p(n, r),
          a = r ? t / l : t / e,
          i = 0,
          s = Math.abs(o[0] - a),
          u = 1;
        u < o.length;
        u++
      ) {
        var c = Math.abs(o[u] - a);
        c < s && ((s = c), (i = u));
      }
      return i;
    }
    function S(t, n) {
      return n === "mile" ? Math.round(t * l) : t * e;
    }
    ((i.METERS_IN_KM = e),
      (i.METERS_IN_MILES = l),
      (i.getRadiusMappingForLocation = p),
      (i.usesImperialUnits = _),
      (i.convertRadiusStepToMeters = f),
      (i.formatRadiusLabel = g),
      (i.DEFAULT_CITY_RADIUS_MILES = h),
      (i.DEFAULT_CITY_RADIUS_KM = y),
      (i.getDistanceUnitForCountry = C),
      (i.calculateRadius = b),
      (i.convertMetersToRadiusStep = v),
      (i.convertRadiusToMeters = S));
  },
  66,
);
