__d(
  "WAWebMediaEditorToolbarCropRotate",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorRotateLeftIcon.react",
    "WAWebMediaEditorRotateRightIcon.react",
    "WAWebMediaEditorToolbarButton.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginInlineEnd13: { marginInlineEnd: "xaw7rza", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.canReset,
        r = e.onReset,
        a = e.onRotateCanvas,
        i,
        l,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginStart8,
            c.marginInlineEnd13,
          ]),
          (l = u.jsx(
            o("WAWebMediaEditorRotateLeftIcon.react").MediaEditorRotateLeftIcon,
            { displayInline: !0 },
          )),
          (d = s._(/*BTDS*/ "Rotate left")),
          (t[0] = i),
          (t[1] = l),
          (t[2] = d))
        : ((i = t[0]), (l = t[1]), (d = t[2]));
      var m;
      t[3] !== a
        ? ((m = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: i,
            icon: l,
            title: d,
            onClick: function () {
              return a(-90);
            },
          })),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p, _, f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (_ = u.jsx(
            o("WAWebMediaEditorRotateRightIcon.react")
              .MediaEditorRotateRightIcon,
            { displayInline: !0 },
          )),
          (f = s._(/*BTDS*/ "Rotate right")),
          (t[5] = p),
          (t[6] = _),
          (t[7] = f))
        : ((p = t[5]), (_ = t[6]), (f = t[7]));
      var g;
      t[8] !== a
        ? ((g = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: p,
            icon: _,
            title: f,
            onClick: function () {
              return a(90);
            },
          })),
          (t[8] = a),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (t[10] = h))
        : (h = t[10]);
      var y = !n,
        C;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Reset")), (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== r || t[13] !== y
        ? ((b = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: h,
            onClick: r,
            disabled: y,
            children: C,
          })),
          (t[12] = r),
          (t[13] = y),
          (t[14] = b))
        : (b = t[14]);
      var v;
      return (
        t[15] !== b || t[16] !== m || t[17] !== g
          ? ((v = u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [m, g, b],
            })),
            (t[15] = b),
            (t[16] = m),
            (t[17] = g),
            (t[18] = v))
          : (v = t[18]),
        v
      );
    }
    l.default = d;
  },
  226,
);
