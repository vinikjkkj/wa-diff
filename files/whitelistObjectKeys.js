__d(
  "whitelistObjectKeys",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      for (
        var n = {}, r = Array.isArray(t) ? t : Object.keys(t), o = 0;
        o < r.length;
        o++
      )
        typeof e[r[o]] != "undefined" && (n[r[o]] = e[r[o]]);
      return n;
    }
    i.default = e;
  },
  66,
);
