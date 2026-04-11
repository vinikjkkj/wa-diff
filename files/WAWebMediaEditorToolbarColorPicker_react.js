__d(
  "WAWebMediaEditorToolbarColorPicker.react",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorPickerConsts",
    "WAWebMediaEditorToolbarColorPickerInput.react",
    "WAWebMediaEditorToolbarColorPickerPanel.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(22),
        a = t.selectedColor,
        i = t.onColorSelect,
        l = t.theme,
        s =
          l === void 0
            ? o("WAWebMediaEditorToolbarColor.react").Theme.Default
            : l,
        m = c(
          a != null
            ? a
            : o("WAWebMediaEditorToolbarColorPickerConsts").DEFAULT_COLOR,
        ),
        p = m[0],
        _ = m[1],
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (t) {
            _(t);
          }),
          (n[0] = f))
        : (f = n[0]);
      var g = f,
        h;
      n[1] !== i
        ? ((h = function (t) {
            i(t);
          }),
          (n[1] = i),
          (n[2] = h))
        : (h = n[2]);
      var y = h,
        C;
      n[3] !== y
        ? ((C = function (t) {
            (g(t), y(t));
          }),
          (n[3] = y),
          (n[4] = C))
        : (C = n[4]);
      var b = C,
        v;
      n[5] !== s
        ? ((v = (e || (e = r("stylex")))([
            d.container,
            s === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated &&
              d.integratedContainer,
          ])),
          (n[5] = s),
          (n[6] = v))
        : (v = n[6]);
      var S;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {
            width: o("WAWebMediaEditorToolbarColorPickerConsts")
              .CONTAINER_WIDTH,
            height: o("WAWebMediaEditorToolbarColorPickerConsts")
              .CONTAINER_HEIGHT,
          }),
          (n[7] = S))
        : (S = n[7]);
      var R =
          s === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated
            ? 8
            : 0,
        L;
      n[8] !== p || n[9] !== y || n[10] !== s
        ? ((L = u.jsx(r("WAWebMediaEditorToolbarColorPickerPanel.react"), {
            color: p,
            onChangeCanvasColor: g,
            onChangeSelectedColor: y,
            theme: s,
          })),
          (n[8] = p),
          (n[9] = y),
          (n[10] = s),
          (n[11] = L))
        : (L = n[11]);
      var E;
      n[12] !== p ||
      n[13] !== b ||
      n[14] !== t.onColorPickerClose ||
      n[15] !== s
        ? ((E = u.jsx(r("WAWebMediaEditorToolbarColorPickerInput.react"), {
            color: p,
            onChangeColor: b,
            onColorPickerClose: t.onColorPickerClose,
            theme: s,
          })),
          (n[12] = p),
          (n[13] = b),
          (n[14] = t.onColorPickerClose),
          (n[15] = s),
          (n[16] = E))
        : (E = n[16]);
      var k;
      return (
        n[17] !== v || n[18] !== R || n[19] !== L || n[20] !== E
          ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              className: v,
              style: S,
              gap: R,
              children: [L, E],
            })),
            (n[17] = v),
            (n[18] = R),
            (n[19] = L),
            (n[20] = E),
            (n[21] = k))
          : (k = n[21]),
        k
      );
    }
    l.default = m;
  },
  98,
);
