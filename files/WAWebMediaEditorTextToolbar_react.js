__d(
  "WAWebMediaEditorTextToolbar.react",
  [
    "fbt",
    "WAWebDeleteIcon.react",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarFont.react",
    "WAWebMediaEditorToolbarTextBackground.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.onAlignmentSelect,
        a = e.onDeleteLayer,
        i = e.onFontSelect,
        l = e.onTextBackgroundToggle,
        c = e.onTextColorSelect,
        p = e.ref,
        f = e.textLayer,
        g = m(null),
        h = m(null),
        y;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            return {
              isColorPanelVisible: function () {
                var e, t;
                return (e =
                  (t = g.current) == null ? void 0 : t.isPanelVisible()) != null
                  ? e
                  : !1;
              },
              isFontMenuVisible: function () {
                var e, t;
                return (e =
                  (t = h.current) == null ? void 0 : t.isMenuVisible()) != null
                  ? e
                  : !1;
              },
            };
          }),
          (t[0] = y))
        : (y = t[0]),
        d(p, y));
      var C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = o("WAWebMediaEditorEnumsColors").getAllColors().map(_)),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] !== f
        ? ((v = f.getTextColor()), (t[2] = f), (t[3] = v))
        : (v = t[3]);
      var S;
      t[4] !== c || t[5] !== v
        ? ((S = u.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
            ref: g,
            colors: b,
            onColorSelect: c,
            selectedColor: v,
          })),
          (t[4] = c),
          (t[5] = v),
          (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = o("WAWebMediaEditorEnumsFonts").getAllFonts()), (t[7] = R))
        : (R = t[7]);
      var L;
      t[8] !== f ? ((L = f.getFont()), (t[8] = f), (t[9] = L)) : (L = t[9]);
      var E;
      t[10] !== f
        ? ((E = f.getAlignment()), (t[10] = f), (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== n || t[13] !== i || t[14] !== L || t[15] !== E
        ? ((k = u.jsx(o("WAWebMediaEditorToolbarFont.react").Font, {
            ref: h,
            fonts: R,
            selectedFont: L,
            selectedAlignment: E,
            onFontSelect: i,
            onAlignmentSelect: n,
          })),
          (t[12] = n),
          (t[13] = i),
          (t[14] = L),
          (t[15] = E),
          (t[16] = k))
        : (k = t[16]);
      var I;
      t[17] !== f
        ? ((I = f.getTextBackground()), (t[17] = f), (t[18] = I))
        : (I = t[18]);
      var T;
      t[19] !== l || t[20] !== I
        ? ((T = u.jsx(r("WAWebMediaEditorToolbarTextBackground.react"), {
            checked: I,
            onBackgroundToggle: l,
          })),
          (t[19] = l),
          (t[20] = I),
          (t[21] = T))
        : (T = t[21]);
      var D, x;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
            displayInline: !0,
          })),
          (x = s._(/*BTDS*/ "Delete")),
          (t[22] = D),
          (t[23] = x))
        : ((D = t[22]), (x = t[23]));
      var $;
      t[24] !== a
        ? (($ = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            icon: D,
            title: x,
            onClick: a,
          })),
          (t[24] = a),
          (t[25] = $))
        : ($ = t[25]);
      var P;
      return (
        t[26] !== T || t[27] !== $ || t[28] !== S || t[29] !== k
          ? ((P = u.jsxs(u.Fragment, { children: [S, k, T, $] })),
            (t[26] = T),
            (t[27] = $),
            (t[28] = S),
            (t[29] = k),
            (t[30] = P))
          : (P = t[30]),
        P
      );
    }
    function _(e) {
      var t = o("WAWebMediaEditorEnumsColors").getColorValue(e),
        n = o("WAWebMediaEditorEnumsColors").getColorValue(
          t.isLight()
            ? o("WAWebMediaEditorEnumsColors").ColorType.BLACK
            : o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
        );
      return { primaryColor: t, secondaryColor: n };
    }
    var f = p;
    l.TextToolbar = f;
  },
  226,
);
