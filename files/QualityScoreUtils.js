__d(
  "QualityScoreUtils",
  ["PolynomialCurve"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = e.map(function (e) {
          return new (o("PolynomialCurve").PolynomialControlPoint)(
            e.quality,
            e.qualityScore,
          );
        }),
        i = new (o("PolynomialCurve").PolynomialCurve)(a);
      return i.interpolate(u(t, n, r));
    }
    function s(e) {
      for (var t = e.split(","), n = [], r = 0; r < t.length; r++) {
        var o = t[r].split(":");
        if (o.length !== 2) return null;
        var a = Number(o[0]),
          i = Number(o[1]);
        if (isNaN(a) || isNaN(i)) return null;
        var l = { quality: a, qualityScore: i };
        n.push(l);
      }
      return n;
    }
    function u(e, t, n) {
      var r = e.height,
        o = e.width;
      if (o === 0 || r === 0) return 0;
      if (o < r) {
        var a = o;
        ((o = r), (r = a));
      }
      var i = o / r;
      if (i > 16 / 9) {
        var l = n == null ? window.devicePixelRatio : n;
        return t ? Math.round(o / (16 / 9)) * l : Math.round(o / (16 / 9));
      }
      return t ? r * window.devicePixelRatio : r;
    }
    ((l.calculateQualityScore = e), (l.parseQualityScoreCurve = s));
  },
  98,
);
