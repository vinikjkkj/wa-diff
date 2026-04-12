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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(e) {
      var t = e.onAlignmentSelect,
        n = e.onDeleteLayer,
        a = e.onFontSelect,
        i = e.onTextBackgroundToggle,
        l = e.onTextColorSelect,
        c = e.ref,
        p = e.textLayer,
        _ = m(null),
        f = m(null);
      d(c, function () {
        return {
          isColorPanelVisible: function () {
            var e, t;
            return (e =
              (t = _.current) == null ? void 0 : t.isPanelVisible()) != null
              ? e
              : !1;
          },
          isFontMenuVisible: function () {
            var e, t;
            return (e = (t = f.current) == null ? void 0 : t.isMenuVisible()) !=
              null
              ? e
              : !1;
          },
        };
      });
      var g = o("WAWebMediaEditorEnumsColors")
        .getAllColors()
        .map(function (e) {
          var t = o("WAWebMediaEditorEnumsColors").getColorValue(e),
            n = o("WAWebMediaEditorEnumsColors").getColorValue(
              t.isLight()
                ? o("WAWebMediaEditorEnumsColors").ColorType.BLACK
                : o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
            );
          return { primaryColor: t, secondaryColor: n };
        });
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
            ref: _,
            colors: g,
            onColorSelect: l,
            selectedColor: p.getTextColor(),
          }),
          u.jsx(o("WAWebMediaEditorToolbarFont.react").Font, {
            ref: f,
            fonts: o("WAWebMediaEditorEnumsFonts").getAllFonts(),
            selectedFont: p.getFont(),
            selectedAlignment: p.getAlignment(),
            onFontSelect: a,
            onAlignmentSelect: t,
          }),
          u.jsx(r("WAWebMediaEditorToolbarTextBackground.react"), {
            checked: p.getTextBackground(),
            onBackgroundToggle: i,
          }),
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
              displayInline: !0,
            }),
            title: s._(/*BTDS*/ "Delete"),
            onClick: n,
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = p;
    l.TextToolbar = _;
  },
  226,
);
