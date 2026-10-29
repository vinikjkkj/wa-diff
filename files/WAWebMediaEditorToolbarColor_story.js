__d(
  "WAWebMediaEditorToolbarColor.story",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorEnumsColorsGetAllColors",
    "WAWebMediaEditorEnumsColorsGetAllColorsAndTransparent",
    "WAWebMediaEditorEnumsColorsGetColorValue",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorIntegrated.react",
    "WAWebMediaEditorToolbarColorPicker.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.integrated,
        a = e.selectedColor,
        i = e.withSlider,
        l = e.withTransparent,
        c = n === void 0 ? !1 : n,
        p;
      t[0] !== a
        ? ((p =
            a === void 0
              ? o("WAWebMediaEditorEnumsColorsGetColorValue").getColorValue(
                  o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
                )
              : a),
          (t[0] = a),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f = i === void 0 ? !1 : i,
        g = l === void 0 ? !1 : l,
        h = u(_),
        y = h[0],
        C = h[1],
        b;
      t[2] !== g
        ? ((b = g
            ? o("WAWebMediaEditorEnumsColorsGetAllColorsAndTransparent")
                .getAllColorsAndTransparent()
                .map(m)
            : o("WAWebMediaEditorEnumsColorsGetAllColors")
                .getAllColors()
                .map(d)),
          (t[2] = g),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      return (
        t[4] !== y || t[5] !== v || t[6] !== c || t[7] !== f
          ? ((S = s.jsx(o("WAWebFlex.react").FlexRow, {
              children: c
                ? s.jsx(s.Fragment, {
                    children: f
                      ? s.jsx(
                          o("WAWebMediaEditorToolbarColorIntegrated.react")
                            .IntegratedColorToolbar,
                          {
                            selectedColor: y,
                            onColorSelect: C,
                            strokeProps: {
                              strokeWidth: 50,
                              onStrokeWidthSelect: r("WAWebNoop"),
                            },
                          },
                        )
                      : s.jsx(
                          o("WAWebMediaEditorToolbarColorIntegrated.react")
                            .IntegratedColorToolbar,
                          { selectedColor: y, onColorSelect: C },
                        ),
                  })
                : s.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
                    selectedColor: y,
                    colors: v,
                    onColorSelect: C,
                  }),
            })),
            (t[4] = y),
            (t[5] = v),
            (t[6] = c),
            (t[7] = f),
            (t[8] = S))
          : (S = t[8]),
        S
      );
    }
    function d(e) {
      return {
        primaryColor: o(
          "WAWebMediaEditorEnumsColorsGetColorValue",
        ).getColorValue(e),
      };
    }
    function m(e) {
      return {
        primaryColor: o(
          "WAWebMediaEditorEnumsColorsGetColorValue",
        ).getColorValue(e),
      };
    }
    var p = {
      storyName: "WAWebMediaEditorToolbarColor",
      component: r("WAWebMediaEditorToolbarColorPicker.react"),
      description: "Color Picker component with hex input & color chips",
      examples: [
        {
          example: function () {
            return s.jsx(c, {});
          },
          title: "Default Color Picker",
        },
        {
          example: function () {
            return s.jsx(c, { withTransparent: !0 });
          },
          title: "Color Picker with transparent option",
        },
        {
          example: function () {
            return s.jsx(c, { integrated: !0 });
          },
          title:
            "Color Picker with integrated Color Panel (used in shapes toolbar in the media editor)",
        },
        {
          example: function () {
            return s.jsx(c, { integrated: !0, withSlider: !0 });
          },
          title:
            "Color Picker with integrated Color Panel and slider (used in shapes toolbar in the media editor for stroke color & width)",
        },
      ],
    };
    l.default = p;
  },
  98,
);
