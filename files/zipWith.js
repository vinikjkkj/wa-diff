__d(
  "zipWith",
  ["minBy"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      if (n.length === 0) return [];
      var a =
        r("minBy")(n, function (e) {
          return e.length;
        }) || [];
      return a.map(function (t, r) {
        var o = n.map(function (e) {
          return e[r];
        });
        return e.apply(void 0, o);
      });
    }
    l.default = e;
  },
  98,
);
