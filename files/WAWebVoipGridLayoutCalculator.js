__d(
  "WAWebVoipGridLayoutCalculator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1.3333333333333333;
    function l(t, n, r, o, a) {
      var i = (t - (o - 1) * a) / o,
        l = (n - (r - 1) * a) / r,
        s = Math.min(i, l * e),
        u = Math.min(l, i / e);
      return { cellWidth: s, cellHeight: u };
    }
    function s(e, t, n, r) {
      if (n <= 0 || e <= 0 || t <= 0)
        return { cellWidth: 0, cellHeight: 0, columns: 0, rows: 0 };
      for (
        var o = e * t,
          a = o,
          i = { cellWidth: e, cellHeight: t, columns: 1, rows: 1 },
          s = 1;
        s <= n;
        s++
      ) {
        var u = Math.ceil(n / s),
          c = l(e, t, s, u, r),
          d = c.cellHeight,
          m = c.cellWidth,
          p = o - m * d * n;
        p < a &&
          ((a = p), (i = { cellWidth: m, cellHeight: d, columns: u, rows: s }));
      }
      return i;
    }
    i.calculateOptimalGridLayout = s;
  },
  66,
);
