__d(
  "WAWebMediaEditorCanvasHoveredState.react",
  [
    "ReactKonva",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorUtilsColor",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = new (o("WAWebMediaEditorUtilsColor").Color)(82, 248, 24, 1),
      c = 2;
    function d(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.borderRadius,
        r = e.frame,
        a = e.layer,
        i;
      t[0] !== a
        ? ((i =
            a instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            (a.isLine() || a.isArrow())),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] !== a ? ((d = a.getWidth()), (t[2] = a), (t[3] = d)) : (d = t[3]);
      var m;
      t[4] !== a ? ((m = a.getHeight()), (t[4] = a), (t[5] = m)) : (m = t[5]);
      var p = Math.min(d, m),
        _;
      t[6] !== a || t[7] !== p
        ? ((_ =
            a instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !a.isBlur()
              ? p / 50 + a.getStrokeWidth()
              : 0),
          (t[6] = a),
          (t[7] = p),
          (t[8] = _))
        : (_ = t[8]);
      var f = _;
      f = l ? f + 20 : f;
      var g;
      if (t[9] !== r || t[10] !== l || t[11] !== a) {
        var h;
        ((g = l
          ? (h = r == null ? void 0 : r.getX()) != null
            ? h
            : a.getX()
          : 0),
          (t[9] = r),
          (t[10] = l),
          (t[11] = a),
          (t[12] = g));
      } else g = t[12];
      var y = g - f,
        C;
      if (t[13] !== r || t[14] !== l || t[15] !== a) {
        var b;
        ((C = l
          ? (b = r == null ? void 0 : r.getY()) != null
            ? b
            : a.getY()
          : 0),
          (t[13] = r),
          (t[14] = l),
          (t[15] = a),
          (t[16] = C));
      } else C = t[16];
      var v = C - f,
        S;
      if (t[17] !== r || t[18] !== a) {
        var R;
        ((S =
          (R = r == null ? void 0 : r.getWidth()) != null ? R : a.getWidth()),
          (t[17] = r),
          (t[18] = a),
          (t[19] = S));
      } else S = t[19];
      var L = S + f * 2,
        E;
      if (t[20] !== r || t[21] !== a) {
        var k;
        ((E =
          (k = r == null ? void 0 : r.getHeight()) != null ? k : a.getHeight()),
          (t[20] = r),
          (t[21] = a),
          (t[22] = E));
      } else E = t[22];
      var I = E + f * 2,
        T;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.toRgbaString()), (t[23] = T))
        : (T = t[23]);
      var D;
      return (
        t[24] !== n || t[25] !== y || t[26] !== v || t[27] !== I || t[28] !== L
          ? ((D = s.jsx(o("ReactKonva").Rect, {
              name: "hoveredState",
              x: y,
              y: v,
              width: L,
              height: I,
              stroke: T,
              strokeWidth: c,
              cornerRadius: n,
              strokeScaleEnabled: !1,
            })),
            (t[24] = n),
            (t[25] = y),
            (t[26] = v),
            (t[27] = I),
            (t[28] = L),
            (t[29] = D))
          : (D = t[29]),
        D
      );
    }
    l.default = d;
  },
  98,
);
