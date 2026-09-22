__d(
  "WAWebVoipGridLayoutCalculator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1.3333333333333333,
      l = 4,
      s = 8;
    function u(t) {
      var n = t.columns,
        r = t.containerHeight,
        o = t.containerWidth,
        a = t.rows,
        i = t.spacing,
        l = (o - (n - 1) * i) / n,
        s = (r - (a - 1) * i) / a,
        u = Math.min(l, s * e),
        c = Math.min(s, l / e);
      return { cellWidth: u, cellHeight: c };
    }
    function c(e, t, n, r) {
      if (n <= 0 || e <= 0 || t <= 0)
        return { cellWidth: 0, cellHeight: 0, columns: 0, rows: 0 };
      for (
        var o = e * t,
          a = o,
          i = { cellWidth: e, cellHeight: t, columns: 1, rows: 1 },
          l = 1;
        l <= n;
        l++
      ) {
        var s = Math.ceil(n / l),
          c = u({
            columns: s,
            containerHeight: t,
            containerWidth: e,
            rows: l,
            spacing: r,
          }),
          d = c.cellHeight,
          m = c.cellWidth,
          p = o - m * d * n;
        p < a &&
          ((a = p), (i = { cellWidth: m, cellHeight: d, columns: s, rows: l }));
      }
      return i;
    }
    function d(e) {
      return e <= 2 ? 1 : e <= 8 ? 2 : 3;
    }
    function m(e, t, n, r, o) {
      if (n <= 0 || e <= 0 || t <= 0)
        return { cellWidth: 0, cellHeight: 0, columns: 0, rows: 0 };
      var a = d(n),
        i = Math.ceil(n / a),
        l = o ? i : a,
        s = o ? a : i,
        u = Math.max(0, (e - (l - 1) * r) / l),
        c = Math.max(0, (t - (s - 1) * r) / s);
      return { cellWidth: u, cellHeight: c, columns: l, rows: s };
    }
    function p(e) {
      return e <= 0
        ? { cols: 1, rows: 1 }
        : e <= 2
          ? { cols: e, rows: 1 }
          : e <= 4
            ? { cols: 2, rows: Math.ceil(e / 2) }
            : e <= 6
              ? { cols: 3, rows: 2 }
              : e <= 9
                ? { cols: 3, rows: 3 }
                : { cols: 4, rows: Math.ceil(e / 4) };
    }
    function _(e, t) {
      var n = p(e),
        r = p(t);
      return n.cols !== r.cols || n.rows !== r.rows;
    }
    function f(t, n) {
      if (t <= 0 || n <= 0) return 0;
      var r = p(n),
        o = r.cols,
        a = r.rows,
        i = t - 2 * s - (o - 1) * l;
      if (i <= 0) return 0;
      var u = i / o,
        c = u / e;
      return a * c + (a - 1) * l + s;
    }
    ((i.GRID_GAP_PX = l),
      (i.GRID_PADDING_SINGLE_PX = s),
      (i.calculateOptimalGridLayout = c),
      (i.calculateNativeGridLayout = m),
      (i.canonicalGridShape = p),
      (i.hasCanonicalGridShapeChanged = _),
      (i.calculateGroupVideoGridContentHeight = f));
  },
  66,
);
