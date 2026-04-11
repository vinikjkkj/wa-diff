__d(
  "WAWebFormatFlatten",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      for (var t = [], n = 0; n < e.length; ++n)
        for (var r = 0; r < e[n].length; ++r) {
          var o = e[n][r],
            a = o[0],
            i = o[1];
          t.push([a, i, n]);
        }
      return t;
    }
    i.default = e;
  },
  66,
);
