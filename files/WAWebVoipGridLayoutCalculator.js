__d(
  "WAWebVoipGridLayoutCalculator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1.3333333333333333,
      l = 9 / 16,
      s = 16 / 9,
      u = 4,
      c = 4,
      d = 8;
    function m(t) {
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
    function p(e, t, n, r) {
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
          u = m({
            columns: s,
            containerHeight: t,
            containerWidth: e,
            rows: l,
            spacing: r,
          }),
          c = u.cellHeight,
          d = u.cellWidth,
          p = o - d * c * n;
        p < a &&
          ((a = p), (i = { cellWidth: d, cellHeight: c, columns: s, rows: l }));
      }
      return i;
    }
    function _(e) {
      return e <= 2 ? 1 : e <= 8 ? 2 : 3;
    }
    function f(e) {
      var t = e.containerHeight,
        n = e.containerWidth,
        r = e.isLandscape,
        o = e.numItems,
        a = e.spacing,
        i = e.tileShape,
        l = i === void 0 ? "fill" : i;
      if (o <= 0 || n <= 0 || t <= 0)
        return { cellWidth: 0, cellHeight: 0, columns: 0, rows: 0 };
      var s = g(o, l),
        u = h(o, r, s),
        c = u.columns,
        d = u.rows,
        m = Math.max(0, (n - (c - 1) * a) / c),
        p = Math.max(0, (t - (d - 1) * a) / d);
      return s === "fill"
        ? { cellWidth: m, cellHeight: p, columns: c, rows: d }
        : babelHelpers.extends({}, y(m, p), { columns: c, rows: d });
    }
    function g(e, t) {
      return e >= 3 && e <= 4 ? t : "fill";
    }
    function h(e, t, n) {
      if (n === "clampedRow") return { columns: u, rows: 1 };
      var r = _(e),
        o = Math.ceil(e / r);
      return { columns: t ? o : r, rows: t ? r : o };
    }
    function y(e, t) {
      return e < t * l
        ? { cellWidth: e, cellHeight: e / l }
        : e > t * s
          ? { cellWidth: t * s, cellHeight: t }
          : { cellWidth: e, cellHeight: t };
    }
    function C(e) {
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
    function b(e, t) {
      var n = C(e),
        r = C(t);
      return n.cols !== r.cols || n.rows !== r.rows;
    }
    function v(t, n) {
      if (t <= 0 || n <= 0) return 0;
      var r = C(n),
        o = r.cols,
        a = r.rows,
        i = t - 2 * d - (o - 1) * c;
      if (i <= 0) return 0;
      var l = i / o,
        s = l / e;
      return a * s + (a - 1) * c + d;
    }
    ((i.GRID_GAP_PX = c),
      (i.GRID_PADDING_SINGLE_PX = d),
      (i.calculateOptimalGridLayout = p),
      (i.calculateNativeGridLayout = f),
      (i.canonicalGridShape = C),
      (i.hasCanonicalGridShapeChanged = b),
      (i.calculateGroupVideoGridContentHeight = v));
  },
  66,
);
