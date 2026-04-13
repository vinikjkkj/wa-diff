__d(
  "WAWebMediaEditorToolbarColorPickerInput.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorChip.react",
    "WAWebMediaEditorToolbarColorPickerConsts",
    "WAWebMediaEditorUtilsColor",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: {
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "x1nhvcw1",
          $$css: !0,
        },
        defaultHeight: { minHeight: "x7ywyr2", $$css: !0 },
        compactHeight: { maxHeight: "x1aa1le3", $$css: !0 },
        input: {
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          color: "x14ug900",
          fontSize: "x6prxxf",
          lineHeight: "x1fc57z9",
          outline: "x1a2a7pz",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(28),
        a = t.color,
        i = t.onColorPickerClose,
        l = t.onChangeColor,
        s = t.theme,
        c =
          s === void 0
            ? o("WAWebMediaEditorToolbarColor.react").Theme.Default
            : s,
        f = m(null),
        g;
      n[0] !== a ? ((g = a.toHex()), (n[0] = a), (n[1] = g)) : (g = n[1]);
      var h = p(g),
        y = h[0],
        C = h[1],
        b = p(!1),
        v = b[0],
        S = b[1],
        R,
        L;
      (n[2] !== a || n[3] !== v
        ? ((R = function () {
            v || C(a.toHex());
          }),
          (L = [a, v]),
          (n[2] = a),
          (n[3] = v),
          (n[4] = R),
          (n[5] = L))
        : ((R = n[4]), (L = n[5])),
        d(R, L));
      var E;
      n[6] !== l
        ? ((E = function (t) {
            var e = t.target.value;
            if (
              (C(e), !(!e || !o("WAWebMediaEditorUtilsColor").isValidHex(e)))
            ) {
              var n = o("WAWebMediaEditorUtilsColor").Color.fromHex(e);
              l(n);
            }
          }),
          (n[6] = l),
          (n[7] = E))
        : (E = n[7]);
      var k = E,
        I;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            S(!1);
          }),
          (n[8] = I))
        : (I = n[8]);
      var T = I,
        D;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            S(!0);
          }),
          (n[9] = D))
        : (D = n[9]);
      var x = D,
        $;
      n[10] !== c
        ? (($ = (e || (e = r("stylex")))([
            _.container,
            c === o("WAWebMediaEditorToolbarColor.react").Theme.Default
              ? [_.defaultHeight, o("WAWebUISpacing").uiPadding.horiz8]
              : _.compactHeight,
          ])),
          (n[10] = c),
          (n[11] = $))
        : ($ = n[11]);
      var P;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = {
            width: o("WAWebMediaEditorToolbarColorPickerConsts")
              .CONTAINER_WIDTH,
            height: o("WAWebMediaEditorToolbarColorPickerConsts").INPUT_HEIGHT,
          }),
          (n[12] = P))
        : (P = n[12]);
      var N;
      n[13] !== a
        ? ((N = u.jsx(r("WAWebMediaEditorToolbarColorChip.react"), {
            withBorder: !0,
            primaryColor: a,
            selected: !1,
            theme: "medium",
          })),
          (n[13] = a),
          (n[14] = N))
        : (N = n[14]);
      var M;
      n[15] !== i
        ? ((M = { enter: i }), (n[15] = i), (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (e || (e = r("stylex"))).props([
            _.input,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz8,
          ])),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] !== k || n[19] !== y
        ? ((A = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
            selectable: !0,
            children: u.jsx(
              "input",
              babelHelpers.extends({ type: "text", ref: f }, w, {
                value: y,
                onChange: k,
                onBlur: T,
                onFocus: x,
              }),
            ),
          })),
          (n[18] = k),
          (n[19] = y),
          (n[20] = A))
        : (A = n[20]);
      var F;
      n[21] !== M || n[22] !== A
        ? ((F = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            handlers: M,
            children: A,
          })),
          (n[21] = M),
          (n[22] = A),
          (n[23] = F))
        : (F = n[23]);
      var O;
      return (
        n[24] !== F || n[25] !== $ || n[26] !== N
          ? ((O = u.jsxs("div", { className: $, style: P, children: [N, F] })),
            (n[24] = F),
            (n[25] = $),
            (n[26] = N),
            (n[27] = O))
          : (O = n[27]),
        O
      );
    }
    l.default = f;
  },
  98,
);
