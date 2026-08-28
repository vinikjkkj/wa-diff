__d(
  "percentile",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return (e || 0) - (t || 0);
    }
    function l(t, n) {
      return s(t.slice().sort(e), n);
    }
    function s(e, t) {
      var n = (e.length - 1) * t,
        r = Math.floor(n),
        o = Math.ceil(n);
      if (r === o) return e[n];
      var a = e[r] * (o - n),
        i = e[o] * (n - r);
      return a + i;
    }
    ((l.fromSorted = s), (i.default = l));
  },
  66,
);
