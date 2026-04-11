__d(
  "WAWebFormatMatch",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      n === void 0 && (n = 1 / 0);
      for (var r = [], o = 0; o < t.length; ++o) {
        for (
          var a = t[o],
            i = a[0],
            l = a[1],
            s = i.match(e, l, n),
            u = [],
            c = s.length,
            d = 0,
            m = s[d];
          d < c;
          m = s[++d]
        )
          u[d] = [m[0], m[1], m[2], m[3], o, m[4]];
        u.length && r.push(u);
      }
      for (var p = 0; p < r.length; p++) {
        var _ = t[r[p][0][4]][0].conflictResolvers;
        if (_)
          for (var f = 0; f < r.length; f++) {
            var g = t[r[f][0][4]][0],
              h = _.get(g);
            h == null || h(r[p], r[f]);
          }
      }
      for (var y = [], C = 0; C < r.length; ++C) y[C] = r[C].length - 1;
      for (var b = [], v = 0; r.length; ) {
        for (var S = 0, R = -1; S < r.length; ++S)
          r[S][y[S]][0] > R && ((v = S), (R = r[S][y[S]][0]));
        (b.push(r[v][y[v]]), --y[v] < 0 && (r.splice(v, 1), y.splice(v, 1)));
      }
      return b;
    }
    i.default = e;
  },
  66,
);
