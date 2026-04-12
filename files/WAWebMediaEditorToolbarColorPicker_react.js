__d(
  "WAWebMediaEditorToolbarColorPicker.react",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorPickerConsts",
    "WAWebMediaEditorToolbarColorPickerInput.react",
    "WAWebMediaEditorToolbarColorPickerPanel.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        container: { position: "x1n2onr6", $$css: !0 },
        integratedContainer: {
          maxWidth: "x1qminx1",
          maxHeight: "x19aweqf",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.selectedColor,
        a = t.onColorSelect,
        i = t.theme,
        l =
          i === void 0
            ? o("WAWebMediaEditorToolbarColor.react").Theme.Default
            : i,
        s = c(
          n != null
            ? n
            : o("WAWebMediaEditorToolbarColorPickerConsts").DEFAULT_COLOR,
        ),
        m = s[0],
        p = s[1],
        _ = function (t) {
          p(t);
        },
        f = function (t) {
          a(t);
        },
        g = function (t) {
          (_(t), f(t));
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        className: (e || (e = r("stylex")))([
          d.container,
          l === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated &&
            d.integratedContainer,
        ]),
        style: {
          width: o("WAWebMediaEditorToolbarColorPickerConsts").CONTAINER_WIDTH,
          height: o("WAWebMediaEditorToolbarColorPickerConsts")
            .CONTAINER_HEIGHT,
        },
        gap:
          l === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated
            ? 8
            : 0,
        children: [
          u.jsx(r("WAWebMediaEditorToolbarColorPickerPanel.react"), {
            color: m,
            onChangeCanvasColor: _,
            onChangeSelectedColor: f,
            theme: l,
          }),
          u.jsx(r("WAWebMediaEditorToolbarColorPickerInput.react"), {
            color: m,
            onChangeColor: g,
            onColorPickerClose: t.onColorPickerClose,
            theme: l,
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
