__d(
  "performanceNow",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    if ((e || (e = r("performance"))).now)
      s = function () {
        return (e || (e = r("performance"))).now();
      };
    else {
      var u = t._cstart,
        c = Date.now(),
        d = typeof u == "number" && u < c ? u : c,
        m = 0;
      s = function () {
        var e = Date.now(),
          t = e - d;
        return (t < m && ((d -= m - t), (t = e - d)), (m = t), t);
      };
    }
    var p = s;
    l.default = p;
  },
  98,
);
