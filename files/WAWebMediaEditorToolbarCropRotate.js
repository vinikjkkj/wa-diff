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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.canReset,
        r = e.onReset,
        a = e.onRotateCanvas;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        children: [
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: [
              (t = o("WAWebUISpacing")).uiMargin.vert0,
              t.uiMargin.start8,
              t.uiMargin.end13,
            ],
            icon: u.jsx(
              o("WAWebMediaEditorRotateLeftIcon.react")
                .MediaEditorRotateLeftIcon,
              { displayInline: !0 },
            ),
            title: s._(/*BTDS*/ "Rotate left"),
            onClick: function () {
              return a(-90);
            },
          }),
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: [t.uiMargin.vert0, t.uiMargin.horiz8],
            icon: u.jsx(
              o("WAWebMediaEditorRotateRightIcon.react")
                .MediaEditorRotateRightIcon,
              { displayInline: !0 },
            ),
            title: s._(/*BTDS*/ "Rotate right"),
            onClick: function () {
              return a(90);
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
