__d(
  "nearlyEqualNumbers",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (e === t) return !0;
      var n = Math.abs(e - t);
      if (n < Number.EPSILON) return !0;
      var r = Math.abs(e),
        o = Math.abs(t);
      return n / (r + o) < Number.EPSILON;
    }
    i.default = e;
  },
  66,
);
