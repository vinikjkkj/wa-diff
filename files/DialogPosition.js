__d(
  "DialogPosition",
  ["Vector"],
  function (t, n, r, o, a, i, l) {
    var e = 40,
      s;
    function u(t, n, o, a, i) {
      (o === void 0 && (o = null),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1));
      var l = r("Vector").getViewportDimensions(),
        u = !1;
      if ((a && o != null && (u = o + n > l.y), o != null && !u)) return o;
      if (s != null) return s;
      var c = Math.floor(
        i ? (l.y - n) / 2 : ((l.x + t) * (l.y - n)) / (4 * l.x),
      );
      return Math.max(c, e);
    }
    function c(e) {
      s = e;
    }
    ((l.calculateTopMargin = u), (l.setFixedTopMargin = c));
  },
  98,
);
