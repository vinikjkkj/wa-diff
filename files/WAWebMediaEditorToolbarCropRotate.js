__d(
  "WAWebMediaEditorToolbarCropRotate",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorRotateLeftIcon.react",
    "WAWebMediaEditorRotateRightIcon.react",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.canReset,
        r = e.onReset,
        a = e.onRotateCanvas,
        i,
        l,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.start8,
            o("WAWebUISpacing").uiMargin.end13,
          ]),
          (l = u.jsx(
            o("WAWebMediaEditorRotateLeftIcon.react").MediaEditorRotateLeftIcon,
            { displayInline: !0 },
          )),
          (c = s._(/*BTDS*/ "Rotate left")),
          (t[0] = i),
          (t[1] = l),
          (t[2] = c))
        : ((i = t[0]), (l = t[1]), (c = t[2]));
      var d;
      t[3] !== a
        ? ((d = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: i,
            icon: l,
            title: c,
            onClick: function () {
              return a(-90);
            },
          })),
          (t[3] = a),
          (t[4] = d))
        : (d = t[4]);
      var m, p, _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.horiz8,
          ]),
          (p = u.jsx(
            o("WAWebMediaEditorRotateRightIcon.react")
              .MediaEditorRotateRightIcon,
            { displayInline: !0 },
          )),
          (_ = s._(/*BTDS*/ "Rotate right")),
          (t[5] = m),
          (t[6] = p),
          (t[7] = _))
        : ((m = t[5]), (p = t[6]), (_ = t[7]));
      var f;
      t[8] !== a
        ? ((f = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: m,
            icon: p,
            title: _,
            onClick: function () {
              return a(90);
            },
          })),
          (t[8] = a),
          (t[9] = f))
        : (f = t[9]);
      var g;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.horiz8,
          ]),
          (t[10] = g))
        : (g = t[10]);
      var h = !n,
        y;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Reset")), (t[11] = y))
        : (y = t[11]);
      var C;
      t[12] !== r || t[13] !== h
        ? ((C = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: g,
            onClick: r,
            disabled: h,
            children: y,
          })),
          (t[12] = r),
          (t[13] = h),
          (t[14] = C))
        : (C = t[14]);
      var b;
      return (
        t[15] !== C || t[16] !== d || t[17] !== f
          ? ((b = u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [d, f, C],
            })),
            (t[15] = C),
            (t[16] = d),
            (t[17] = f),
            (t[18] = b))
          : (b = t[18]),
        b
      );
    }
    l.default = c;
  },
  226,
);
