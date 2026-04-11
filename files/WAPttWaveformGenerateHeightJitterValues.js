__d(
  "WAPttWaveformGenerateHeightJitterValues",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (e == null || t == null) return [0];
      for (var n = t / 4, r = e / n, o = [], a = -n; a < 0; a++) o.push(r * a);
      for (var i = 0; i < n; i++) o.push(r * i);
      return ((o = o.concat([].concat(o).reverse())), o);
    }
    function l(t, n, r) {
      if (t == null || n == null || r == null) return [[0]];
      for (var o = e(t, r), a = [], i = 0; i < r; i++) {
        var l = e(o[i], n);
        a.push(l);
      }
      return a;
    }
    ((i.generateHeightJitterValues = e),
      (i.generateJitterDistributionArrays = l));
  },
  66,
);
