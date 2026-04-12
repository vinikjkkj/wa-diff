__d(
  "WAWebMediaEditorToolbarColorIntegrated.react",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorPicker.react",
    "WAWebSlider.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        container: { width: "xj6ak53", $$css: !0 },
        buttonContainer: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      },
      d = 1,
      m = 25;
    function p(e) {
      var t = e.onColorSelect,
        n = e.selectedColor,
        a = e.strokeProps,
        i = o("WAWebMediaEditorEnumsColors")
          .getAllColorsAndTransparent()
          .map(function (e) {
            return {
              primaryColor: o("WAWebMediaEditorEnumsColors").getColorValue(e),
            };
          }),
        l = u(!1),
        p = l[0],
        _ = l[1],
        f = u(n),
        g = f[0],
        h = f[1],
        y = function (n) {
          (h(n), t(n));
        };
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: c.container,
        align: "center",
        justify: "center",
        gap: 8,
        children: [
          p &&
            s.jsx(
              r("WAWebMediaEditorToolbarColorPicker.react"),
              {
                onColorSelect: y,
                selectedColor: g,
                onColorPickerClose: function () {
                  return _(!1);
                },
                theme: o("WAWebMediaEditorToolbarColor.react").Theme.Integrated,
              },
              g.toString(),
            ),
          s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            gap: 8,
            children: [
              s.jsx(
                o("WAWebMediaEditorToolbarColor.react").ColorToolbar,
                {
                  colors: i,
                  onColorSelect: y,
                  selectedColor: g,
                  theme: o("WAWebMediaEditorToolbarColor.react").Theme
                    .Integrated,
                },
                g.toString(),
              ),
              s.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
                xstyle: c.buttonContainer,
                caret: p ? "down" : "up",
                onClick: function () {
                  return _(!p);
                },
                theme: o("WAWebMediaEditorToolbarColor.react").Theme.Integrated,
              }),
            ],
          }),
          a &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: c.paddingVert8,
              children: s.jsx(o("WAWebSlider.react").Slider, {
                min: d,
                max: m,
                width: 300,
                value: a.strokeWidth,
                onChange: a.onStrokeWidthSelect,
                theme: o("WAWebSlider.react").SliderTheme.Crescendo,
              }),
            }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = p;
    l.IntegratedColorToolbar = _;
  },
  98,
);
