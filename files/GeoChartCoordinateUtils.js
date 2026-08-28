__d(
  "GeoChartCoordinateUtils",
  ["SVGInterpolationRenderer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return "v " + e;
    }
    function s(e) {
      return "h " + e;
    }
    function u(e, t) {
      var n = e[0],
        r = e[1],
        o = t[0],
        a = t[1];
      return "q " + n + ", " + r + " " + o + ", " + a;
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.join(" ");
    }
    function d(e, t) {
      var n = [],
        r = [];
      return (
        t.forEach(function (t) {
          t == null ? r.length > 0 && (n.push(e(r)), (r = [])) : r.push(t);
        }),
        r.length > 0 && n.push(e(r)),
        n
      );
    }
    function m() {
      return "z";
    }
    ((l.moveTo = o("SVGInterpolationRenderer").moveTo),
      (l.verticalLineTo = e),
      (l.horizontalLineTo = s),
      (l.quadBezierCurve = u),
      (l.buildSVGPathData = c),
      (l.buildLineToFromNullablePoints = d),
      (l.closePath = m));
  },
  98,
);
