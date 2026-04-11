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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(27),
        n = e.onColorSelect,
        a = e.selectedColor,
        i = e.strokeProps,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebMediaEditorEnumsColors")
            .getAllColorsAndTransparent()
            .map(_)),
          (t[0] = l))
        : (l = t[0]);
      var p = l,
        f = u(!1),
        g = f[0],
        h = f[1],
        y = u(a),
        C = y[0],
        b = y[1],
        v;
      t[1] !== n
        ? ((v = function (t) {
            (b(t), n(t));
          }),
          (t[1] = n),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R;
      t[3] !== C || t[4] !== S || t[5] !== g
        ? ((R =
            g &&
            s.jsx(
              r("WAWebMediaEditorToolbarColorPicker.react"),
              {
                onColorSelect: S,
                selectedColor: C,
                onColorPickerClose: function () {
                  return h(!1);
                },
                theme: o("WAWebMediaEditorToolbarColor.react").Theme.Integrated,
              },
              C.toString(),
            )),
          (t[3] = C),
          (t[4] = S),
          (t[5] = g),
          (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] !== C ? ((L = C.toString()), (t[7] = C), (t[8] = L)) : (L = t[8]);
      var E;
      t[9] !== C || t[10] !== S || t[11] !== L
        ? ((E = s.jsx(
            o("WAWebMediaEditorToolbarColor.react").ColorToolbar,
            {
              colors: p,
              onColorSelect: S,
              selectedColor: C,
              theme: o("WAWebMediaEditorToolbarColor.react").Theme.Integrated,
            },
            L,
          )),
          (t[9] = C),
          (t[10] = S),
          (t[11] = L),
          (t[12] = E))
        : (E = t[12]);
      var k = g ? "down" : "up",
        I;
      t[13] !== g
        ? ((I = function () {
            return h(!g);
          }),
          (t[13] = g),
          (t[14] = I))
        : (I = t[14]);
      var T;
      t[15] !== k || t[16] !== I
        ? ((T = s.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            xstyle: c.buttonContainer,
            caret: k,
            onClick: I,
            theme: o("WAWebMediaEditorToolbarColor.react").Theme.Integrated,
          })),
          (t[15] = k),
          (t[16] = I),
          (t[17] = T))
        : (T = t[17]);
      var D;
      t[18] !== E || t[19] !== T
        ? ((D = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            gap: 8,
            children: [E, T],
          })),
          (t[18] = E),
          (t[19] = T),
          (t[20] = D))
        : (D = t[20]);
      var x;
      t[21] !== i
        ? ((x =
            i &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: c.paddingVert8,
              children: s.jsx(o("WAWebSlider.react").Slider, {
                min: d,
                max: m,
                width: 300,
                value: i.strokeWidth,
                onChange: i.onStrokeWidthSelect,
                theme: o("WAWebSlider.react").SliderTheme.Crescendo,
              }),
            })),
          (t[21] = i),
          (t[22] = x))
        : (x = t[22]);
      var $;
      return (
        t[23] !== x || t[24] !== R || t[25] !== D
          ? (($ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.container,
              align: "center",
              justify: "center",
              gap: 8,
              children: [R, D, x],
            })),
            (t[23] = x),
            (t[24] = R),
            (t[25] = D),
            (t[26] = $))
          : ($ = t[26]),
        $
      );
    }
    function _(e) {
      return {
        primaryColor: o("WAWebMediaEditorEnumsColors").getColorValue(e),
      };
    }
    var f = p;
    l.IntegratedColorToolbar = f;
  },
  98,
);
