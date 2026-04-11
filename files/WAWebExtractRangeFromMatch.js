__d(
  "WAWebExtractRangeFromMatch",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      t === void 0 && (t = 0);
      var n = e.index,
        r = e[0],
        o = n + r.length - 1,
        a = [n, n, o, o, e];
      if (t) {
        var i,
          l = (i = e[t]) != null ? i : "";
        ((a[1] = n + r.indexOf(l)), (a[2] = a[1] + l.length - 1));
      }
      return a;
    }
    i.default = e;
  },
  66,
);
