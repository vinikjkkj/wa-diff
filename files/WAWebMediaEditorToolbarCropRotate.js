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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginInlineEnd13: { marginInlineEnd: "xaw7rza", $$css: !0 } };
    function d(e) {
      var t,
        n = e.canReset,
        a = e.onReset,
        i = e.onRotateCanvas;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        children: [
          u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: [
              (t = o("WDSMargins.stylex")).wdsMargins.marginVer0,
              t.wdsMargins.marginStart8,
              c.marginInlineEnd13,
            ],
            icon: u.jsx(r("WDSIconIcRotate90DegreesCcw.react"), {
              displayInline: !0,
              testid: "media-editor-rotate-left",
            }),
            title: s._(/*BTDS*/ ""),
            onClick: function () {
              return i(-90);
            },
          }),
          u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: [t.wdsMargins.marginVer0, t.wdsMargins.marginHor8],
            icon: u.jsx(r("WDSIconIcRotate90DegreesCw.react"), {
              displayInline: !0,
              testid: "media-editor-rotate-right",
            }),
            title: s._(/*BTDS*/ ""),
            onClick: function () {
              return i(90);
            },
          }),
          u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: [t.wdsMargins.marginVer0, t.wdsMargins.marginHor8],
            onClick: a,
            disabled: !n,
            children: s._(/*BTDS*/ ""),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
