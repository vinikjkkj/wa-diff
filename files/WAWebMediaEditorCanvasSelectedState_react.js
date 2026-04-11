__d(
  "WAWebMediaEditorCanvasSelectedState.react",
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
      c = new (o("WAWebMediaEditorUtilsColor").Color)(82, 248, 24, 0.1),
      d = new (o("WAWebMediaEditorUtilsColor").Color)(0, 0, 0, 0),
      m = 2;
    function p(e) {
      var t = o("react-compiler-runtime").c(33),
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
        p;
      t[2] !== a ? ((p = a.getWidth()), (t[2] = a), (t[3] = p)) : (p = t[3]);
      var _;
      t[4] !== a ? ((_ = a.getHeight()), (t[4] = a), (t[5] = _)) : (_ = t[5]);
      var f = Math.min(p, _),
        g;
      t[6] !== a || t[7] !== f
        ? ((g =
            a instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !a.isBlur()
              ? f / 50 + a.getStrokeWidth()
              : 0),
          (t[6] = a),
          (t[7] = f),
          (t[8] = g))
        : (g = t[8]);
      var h = g;
      h = l ? h + 20 : h;
      var y;
      if (t[9] !== r || t[10] !== l || t[11] !== a) {
        var C;
        ((y = l
          ? (C = r == null ? void 0 : r.getX()) != null
            ? C
            : a.getX()
          : 0),
          (t[9] = r),
          (t[10] = l),
          (t[11] = a),
          (t[12] = y));
      } else y = t[12];
      var b = y - h,
        v;
      if (t[13] !== r || t[14] !== l || t[15] !== a) {
        var S;
        ((v = l
          ? (S = r == null ? void 0 : r.getY()) != null
            ? S
            : a.getY()
          : 0),
          (t[13] = r),
          (t[14] = l),
          (t[15] = a),
          (t[16] = v));
      } else v = t[16];
      var R = v - h,
        L;
      if (t[17] !== r || t[18] !== a) {
        var E;
        ((L =
          (E = r == null ? void 0 : r.getWidth()) != null ? E : a.getWidth()),
          (t[17] = r),
          (t[18] = a),
          (t[19] = L));
      } else L = t[19];
      var k = L + h * 2,
        I;
      if (t[20] !== r || t[21] !== a) {
        var T;
        ((I =
          (T = r == null ? void 0 : r.getHeight()) != null ? T : a.getHeight()),
          (t[20] = r),
          (t[21] = a),
          (t[22] = I));
      } else I = t[22];
      var D = I + h * 2,
        x = a instanceof o("WAWebMediaEditorLayersShape").ShapeLayer ? d : c,
        $;
      t[23] !== x
        ? (($ = x.toRgbaString()), (t[23] = x), (t[24] = $))
        : ($ = t[24]);
      var P;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u.toRgbaString()), (t[25] = P))
        : (P = t[25]);
      var N;
      return (
        t[26] !== n ||
        t[27] !== b ||
        t[28] !== R ||
        t[29] !== D ||
        t[30] !== $ ||
        t[31] !== k
          ? ((N = s.jsx(o("ReactKonva").Rect, {
              name: "selectedState",
              x: b,
              y: R,
              width: k,
              height: D,
              fill: $,
              stroke: P,
              strokeWidth: m,
              cornerRadius: n,
              strokeScaleEnabled: !1,
            })),
            (t[26] = n),
            (t[27] = b),
            (t[28] = R),
            (t[29] = D),
            (t[30] = $),
            (t[31] = k),
            (t[32] = N))
          : (N = t[32]),
        N
      );
    }
    l.default = p;
  },
  98,
);
