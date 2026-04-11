__d(
  "ServerTime",
  ["ServerTimeData"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0,
      u = 0,
      c = null,
      d =
        (e = (typeof window != "undefined" ? window : self).performance) == null
          ? void 0
          : e.timing;
    if (d) {
      var m = d.requestStart,
        p = d.domLoading;
      if (m && p) {
        var _ =
            r("ServerTimeData").timeOfResponseStart -
            r("ServerTimeData").timeOfRequestStart,
          f = p - m - _;
        u = f / 2;
        var g = p - r("ServerTimeData").timeOfResponseStart - u,
          h = Math.max(50, f * 0.8);
        Math.abs(g) > h && ((s = g), (c = Date.now()));
      }
    } else b(r("ServerTimeData").serverTime);
    function y() {
      return Date.now() - s;
    }
    function C() {
      return s;
    }
    function b(e) {
      var t = Date.now() - e;
      Math.abs(s - t) > 6e4 && ((s = t), (c = Date.now()));
    }
    function v() {
      return c === null ? null : Date.now() - c;
    }
    var S = y,
      R = C;
    ((l.getMillis = y),
      (l.getOffsetMillis = C),
      (l.update = b),
      (l.getMillisSinceLastUpdate = v),
      (l.get = S),
      (l.getSkew = R));
  },
  98,
);
