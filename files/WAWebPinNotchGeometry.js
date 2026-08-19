__d(
  "WAWebPinNotchGeometry",
  [],
  function (t, n, r, o, a, i) {
    var e = 3,
      l = 9,
      s = 4.5,
      u = 3,
      c = 2,
      d = 5,
      m = 32,
      p = 32,
      _ = 0.5;
    function f(e) {
      return e === 0 ? l : e === 1 ? s : u;
    }
    function g(e, t) {
      for (var n = [], r = 0; r < e; r++)
        n.push(e < d ? s : f(Math.abs(r - t)));
      return n;
    }
    function h(e, t) {
      if (e < 2 || t <= 0) return 1;
      var n = t - c * (e - 1),
        r = S(g(e, Math.floor(e / 2)));
      return r <= 0 || n <= 0 ? 1 : Math.max(1, n / r);
    }
    function y(e, t, n) {
      if (e.length === 0 || t < 0 || t >= e.length) return 0;
      var r = h(e.length, n),
        o = S(e) * r + c * (e.length - 1);
      if (o <= n) return (n - o) / 2;
      for (var a = 0, i = 0; i < t; i++) a += e[i] * r + c;
      var l = a + (e[t] * r) / 2;
      return Math.min(0, Math.max(n - o, n / 2 - l));
    }
    function C(e, t) {
      var n = g(e, t),
        r = h(e, m),
        o = y(n, t, m),
        a = [];
      for (var i of n) {
        var l = i * r;
        (a.push({ height: l, top: o }), (o += l + c));
      }
      return a;
    }
    function b(e, t) {
      return Math.min(e + t, m) - Math.max(e, 0) >= _;
    }
    function v(e, t) {
      return C(e, t).filter(function (e) {
        var t = e.height,
          n = e.top;
        return b(n, t);
      }).length;
    }
    function S(e) {
      return e.reduce(function (e, t) {
        return e + t;
      }, 0);
    }
    ((i.STROKE_PX = e),
      (i.SELECTED_PX = l),
      (i.ADJACENT_PX = s),
      (i.DISTANT_PX = u),
      (i.GAP_PX = c),
      (i.MAX_VISIBLE_NOTCHES = d),
      (i.BAND_PX = m),
      (i.CONTAINER_PX = p),
      (i.MIN_VISIBLE_PX = _),
      (i.heightForDistance = f),
      (i.heightsFor = g),
      (i.fillScaleFor = h),
      (i.stripTopFor = y),
      (i.layoutFor = C),
      (i.isNotchVisible = b),
      (i.visibleNotchCount = v));
  },
  66,
);
