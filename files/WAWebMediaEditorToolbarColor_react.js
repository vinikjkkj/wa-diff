__d(
  "WAWebMediaEditorToolbarColor.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarColorChip.react",
    "WAWebMediaEditorToolbarColorPicker.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: { minWidth: "xeuugli", $$css: !0 },
        colorChipsContainer: {
          minWidth: "x187xtus",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      f = n("$InternalEnum").Mirrored(["Default", "Integrated"]);
    function g(t) {
      var n = o("react-compiler-runtime").c(35),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.colors,
        c = l.onColorSelect,
        g = l.selectedColor,
        h = l.theme,
        y = h === void 0 ? f.Default : h,
        C = m(),
        b = p(null),
        v = b[0],
        S = b[1],
        R;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            S(null);
          }),
          (n[3] = R))
        : (R = n[3]);
      var L = R,
        E;
      n[4] !== c || n[5] !== g
        ? ((E = function (t) {
            (t.preventDefault(), t.stopPropagation());
            var e = {
              menu: u.jsx(r("WAWebMediaEditorToolbarColorPicker.react"), {
                onColorSelect: c,
                selectedColor: g,
                onColorPickerClose: L,
              }),
              dirX: r("WAWebL10N").isRTL()
                ? o("WAWebDropdown.react").DirX.RIGHT
                : o("WAWebDropdown.react").DirX.LEFT,
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              type: o("WAWebDropdown.react").MenuType.ColorPicker,
              anchor: r("WANullthrows")(C.current),
            };
            S(e);
          }),
          (n[4] = c),
          (n[5] = g),
          (n[6] = E))
        : (E = n[6]);
      var k = E,
        I;
      n[7] !== v
        ? ((I = function () {
            return !!v;
          }),
          (n[7] = v),
          (n[8] = I))
        : (I = n[8]);
      var T = I,
        D;
      n[9] !== c
        ? ((D = function (t) {
            c(t);
          }),
          (n[9] = c),
          (n[10] = D))
        : (D = n[10]);
      var x = D,
        $;
      (n[11] !== T
        ? (($ = function () {
            return { isPanelVisible: T };
          }),
          (n[11] = T),
          (n[12] = $))
        : ($ = n[12]),
        d(i, $));
      var P;
      if (n[13] !== s || n[14] !== x || n[15] !== g || n[16] !== y) {
        var N;
        (n[18] !== x || n[19] !== g || n[20] !== y
          ? ((N = function (t) {
              var e = t.primaryColor;
              return u.jsx(
                r("WAWebMediaEditorToolbarColorChip.react"),
                {
                  primaryColor: e,
                  onSelect: function () {
                    return x(e);
                  },
                  selected: !!(g && g.equals(e)),
                  withBorder: !0,
                  theme: y === f.Integrated ? "small" : void 0,
                },
                e.toString(),
              );
            }),
            (n[18] = x),
            (n[19] = g),
            (n[20] = y),
            (n[21] = N))
          : (N = n[21]),
          (P = s.map(N)),
          (n[13] = s),
          (n[14] = x),
          (n[15] = g),
          (n[16] = y),
          (n[17] = P));
      } else P = n[17];
      var M = P,
        w = null;
      if (v) {
        var A;
        (n[22] !== v
          ? ((A = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ColorPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: L,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v }),
            })),
            (n[22] = v),
            (n[23] = A))
          : (A = n[23]),
          (w = A));
      }
      var F = y === f.Integrated ? 8 : 0,
        O;
      n[24] !== M || n[25] !== F
        ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.colorChipsContainer,
            gap: F,
            children: M,
          })),
          (n[24] = M),
          (n[25] = F),
          (n[26] = O))
        : (O = n[26]);
      var B;
      n[27] !== v || n[28] !== k || n[29] !== y
        ? ((B =
            y === f.Default &&
            u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
              ref: C,
              onClick: k,
              caret: v ? "down" : "up",
            })),
          (n[27] = v),
          (n[28] = k),
          (n[29] = y),
          (n[30] = B))
        : (B = n[30]);
      var W;
      return (
        n[31] !== w || n[32] !== B || n[33] !== O
          ? ((W = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: _.container,
              children: [O, B, w],
            })),
            (n[31] = w),
            (n[32] = B),
            (n[33] = O),
            (n[34] = W))
          : (W = n[34]),
        W
      );
    }
    ((l.Theme = f), (l.ColorToolbar = g));
  },
  98,
);
