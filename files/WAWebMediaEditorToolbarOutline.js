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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.canReset,
        r = e.onReset,
        a = e.onSmoothingToggle,
        i = e.smoothing;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        children: [
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: [
              (t = o("WAWebUISpacing")).uiMargin.vert0,
              t.uiMargin.horiz8,
            ],
            icon: u.jsx(o("WAWebOutlineSmoothIcon.react").OutlineSmoothIcon, {
              displayInline: !0,
            }),
            title: s._(/*BTDS*/ "Smooth"),
            selected: i,
            onClick: function () {
              return a(!0);
            },
          }),
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: [t.uiMargin.vert0, t.uiMargin.horiz8],
            icon: u.jsx(
              o("WAWebOutlineStraightIcon.react").OutlineStraightIcon,
              { displayInline: !0 },
            ),
            title: s._(/*BTDS*/ "Straight"),
            selected: !i,
            onClick: function () {
              return a(!1);
            },
          }),
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: [t.uiMargin.vert0, t.uiMargin.horiz8],
            onClick: r,
            disabled: !n,
            children: s._(/*BTDS*/ "Reset"),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
