__d(
  "WAWebMediaEditorToolbarOutline",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebOutlineSmoothIcon.react",
    "WAWebOutlineStraightIcon.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.canReset,
        r = e.onReset,
        a = e.onSmoothingToggle,
        i = e.smoothing,
        l,
        c,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.horiz8,
          ]),
          (c = u.jsx(o("WAWebOutlineSmoothIcon.react").OutlineSmoothIcon, {
            displayInline: !0,
          })),
          (d = s._(/*BTDS*/ "Smooth")),
          (t[0] = l),
          (t[1] = c),
          (t[2] = d))
        : ((l = t[0]), (c = t[1]), (d = t[2]));
      var m;
      t[3] !== a
        ? ((m = function () {
            return a(!0);
          }),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== i || t[6] !== m
        ? ((p = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: l,
            icon: c,
            title: d,
            selected: i,
            onClick: m,
          })),
          (t[5] = i),
          (t[6] = m),
          (t[7] = p))
        : (p = t[7]);
      var _, f, g;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.horiz8,
          ]),
          (f = u.jsx(o("WAWebOutlineStraightIcon.react").OutlineStraightIcon, {
            displayInline: !0,
          })),
          (g = s._(/*BTDS*/ "Straight")),
          (t[8] = _),
          (t[9] = f),
          (t[10] = g))
        : ((_ = t[8]), (f = t[9]), (g = t[10]));
      var h = !i,
        y;
      t[11] !== a
        ? ((y = function () {
            return a(!1);
          }),
          (t[11] = a),
          (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] !== y || t[14] !== h
        ? ((C = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: _,
            icon: f,
            title: g,
            selected: h,
            onClick: y,
          })),
          (t[13] = y),
          (t[14] = h),
          (t[15] = C))
        : (C = t[15]);
      var b;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.horiz8,
          ]),
          (t[16] = b))
        : (b = t[16]);
      var v = !n,
        S;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Reset")), (t[17] = S))
        : (S = t[17]);
      var R;
      t[18] !== r || t[19] !== v
        ? ((R = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: b,
            onClick: r,
            disabled: v,
            children: S,
          })),
          (t[18] = r),
          (t[19] = v),
          (t[20] = R))
        : (R = t[20]);
      var L;
      return (
        t[21] !== C || t[22] !== R || t[23] !== p
          ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [p, C, R],
            })),
            (t[21] = C),
            (t[22] = R),
            (t[23] = p),
            (t[24] = L))
          : (L = t[24]),
        L
      );
    }
    l.default = c;
  },
  226,
);
