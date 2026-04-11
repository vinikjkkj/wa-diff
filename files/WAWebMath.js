__d(
  "WAWebMath",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.line1EndX,
        n = e.line1EndY,
        r = e.line1StartX,
        o = e.line1StartY,
        a = e.line2EndX,
        i = e.line2EndY,
        l = e.line2StartX,
        s = e.line2StartY,
        u = { x: null, y: null, onLine1: !1, onLine2: !1 },
        c = (i - s) * (t - r) - (a - l) * (n - o);
      if (c === 0) return u;
      var d = o - s,
        m = r - l,
        p = (a - l) * d - (i - s) * m,
        _ = (t - r) * d - (n - o) * m;
      return (
        (d = p / c),
        (m = _ / c),
        (u.x = r + d * (t - r)),
        (u.y = o + d * (n - o)),
        d > 0 && d < 1 && (u.onLine1 = !0),
        m > 0 && m < 1 && (u.onLine2 = !0),
        u
      );
    }
    function l(e, t) {
      if (e === 0 || t === 0) return 0;
      var n = (e / t) * 100;
      return n % 10 === 0 ? n : (parseInt(n / 10, 10) + 1) * 10;
    }
    ((i.intersect = e), (i.roundUp10thPercentage = l));
  },
  66,
);
