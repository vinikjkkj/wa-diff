__d(
  "WAWebSharableEventMapMath",
  [],
  function (t, n, r, o, a, i) {
    var e = 512,
      l = 3,
      s = 18,
      u = 256,
      c = 85.05112878,
      d = 256,
      m = 360,
      p = 6371e3;
    function _(e, t) {
      var n = R(t),
        r = Math.min(c, Math.max(-c, e.latitude)),
        o = L(r);
      return {
        x: ((e.longitude + 180) / m) * n,
        y: ((1 - Math.log(Math.tan(o) + 1 / Math.cos(o)) / Math.PI) / 2) * n,
      };
    }
    function f(e, t) {
      var n = R(t);
      return {
        latitude:
          (Math.atan(Math.sinh(Math.PI * (1 - (2 * e.y) / n))) * 180) / Math.PI,
        longitude: E((e.x / n) * m - 180),
      };
    }
    function g(e) {
      return Math.max(l, Math.min(s, e));
    }
    function h(e, t) {
      var n = _(e.center, e.zoom);
      return { x: n.x - t.width / 2, y: n.y - t.height / 2 };
    }
    function y(e, t, n) {
      var r = _(e.center, e.zoom);
      return babelHelpers.extends({}, e, {
        center: f({ x: r.x + t, y: r.y + n }, e.zoom),
      });
    }
    function C(e, t, n, r, o) {
      var a = g(e.zoom + t);
      if (a === e.zoom) return e;
      var i = Math.pow(2, a - e.zoom),
        l = h(e, o),
        s = { x: l.x + n, y: l.y + r };
      return {
        zoom: a,
        center: f(
          { x: s.x * i - n + o.width / 2, y: s.y * i - r + o.height / 2 },
          a,
        ),
      };
    }
    function b(t, n, r) {
      for (
        var o = Math.ceil(R(r) / e) - 1,
          a = Math.floor((t.x - d) / e),
          i = Math.floor((t.x + n.width + d) / e),
          l = Math.max(0, Math.floor((t.y - d) / e)),
          s = Math.min(o, Math.floor((t.y + n.height + d) / e)),
          u = [],
          c = l;
        c <= s;
        c++
      )
        for (var m = a; m <= i; m++) u.push({ column: m, row: c });
      return u;
    }
    function v(t, n) {
      return f({ x: (t.column + 0.5) * e, y: (t.row + 0.5) * e }, n);
    }
    function S(e, t) {
      var n = L(t.latitude - e.latitude),
        r = L(t.longitude - e.longitude),
        o =
          Math.pow(Math.sin(n / 2), 2) +
          Math.cos(L(e.latitude)) *
            Math.cos(L(t.latitude)) *
            Math.pow(Math.sin(r / 2), 2);
      return 2 * p * Math.asin(Math.sqrt(o));
    }
    function R(e) {
      return u * Math.pow(2, e);
    }
    function L(e) {
      return (e * Math.PI) / 180;
    }
    function E(e) {
      return ((((e + 180) % m) + m) % m) - 180;
    }
    ((i.MAP_TILE_SIZE_PX = e),
      (i.MAP_MIN_ZOOM = l),
      (i.MAP_MAX_ZOOM = s),
      (i.projectToMap = _),
      (i.unprojectFromMap = f),
      (i.clampMapZoom = g),
      (i.getMapOrigin = h),
      (i.panMapCamera = y),
      (i.zoomMapCameraAround = C),
      (i.getMapTilesInView = b),
      (i.getMapTileCenter = v),
      (i.getDistanceMeters = S));
  },
  66,
);
