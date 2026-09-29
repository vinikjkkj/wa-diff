__d(
  "QualityScoreUtils",
  ["ExecutionEnvironment", "PolynomialCurve"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r) {
      var a = e.map(function (e) {
          return new (o("PolynomialCurve").PolynomialControlPoint)(
            e.quality,
            e.qualityScore,
          );
        }),
        i = new (o("PolynomialCurve").PolynomialCurve)(a);
      return i.interpolate(c(t, n, r));
    }
    function u(e) {
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
    function c(t, n, o) {
      var a = t.height,
        i = t.width;
      if (i === 0 || a === 0) return 0;
      if (i < a) {
        var l = i;
        ((i = a), (a = l));
      }
      var s = i / a,
        u = 1;
      if (
        ((e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          (u = window.devicePixelRatio),
        s > 16 / 9)
      ) {
        var c = o != null ? o : u;
        return n ? Math.round(i / (16 / 9)) * c : Math.round(i / (16 / 9));
      }
      return n ? a * u : a;
    }
    ((l.calculateQualityScore = s), (l.parseQualityScoreCurve = u));
  },
  98,
);
