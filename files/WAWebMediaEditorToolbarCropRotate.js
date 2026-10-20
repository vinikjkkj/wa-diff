__d(
  "WAWebMediaEditorToolbarCropRotate",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarButton.react",
    "WDSIconIcRotate90DegreesCcw.react",
    "WDSIconIcRotate90DegreesCw.react",
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
        a = e.onReset,
        i = e.onRotateCanvas,
        l,
        d,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginStart8,
            c.marginInlineEnd13,
          ]),
          (d = u.jsx(r("WDSIconIcRotate90DegreesCcw.react"), {
            displayInline: !0,
            testid: "media-editor-rotate-left",
          })),
          (m = s._(/*BTDS*/ "Rotate left")),
          (t[0] = l),
          (t[1] = d),
          (t[2] = m))
        : ((l = t[0]), (d = t[1]), (m = t[2]));
      var p;
      t[3] !== i
        ? ((p = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: l,
            icon: d,
            title: m,
            onClick: function () {
              return i(-90);
            },
          })),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _, f, g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (f = u.jsx(r("WDSIconIcRotate90DegreesCw.react"), {
            displayInline: !0,
            testid: "media-editor-rotate-right",
          })),
          (g = s._(/*BTDS*/ "Rotate right")),
          (t[5] = _),
          (t[6] = f),
          (t[7] = g))
        : ((_ = t[5]), (f = t[6]), (g = t[7]));
      var h;
      t[8] !== i
        ? ((h = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: _,
            icon: f,
            title: g,
            onClick: function () {
              return i(90);
            },
          })),
          (t[8] = i),
          (t[9] = h))
        : (h = t[9]);
      var y;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (t[10] = y))
        : (y = t[10]);
      var C = !n,
        b;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Reset")), (t[11] = b))
        : (b = t[11]);
      var v;
      t[12] !== a || t[13] !== C
        ? ((v = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: y,
            onClick: a,
            disabled: C,
            children: b,
          })),
          (t[12] = a),
          (t[13] = C),
          (t[14] = v))
        : (v = t[14]);
      var S;
      return (
        t[15] !== v || t[16] !== p || t[17] !== h
          ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [p, h, v],
            })),
            (t[15] = v),
            (t[16] = p),
            (t[17] = h),
            (t[18] = S))
          : (S = t[18]),
        S
      );
    }
    l.default = d;
  },
  226,
);
