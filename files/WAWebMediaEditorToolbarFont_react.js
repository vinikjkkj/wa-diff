__d(
  "WAWebMediaEditorToolbarFont.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarFontDropdown.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useRef,
      f = m.useState,
      g = {
        icon: {
          width: "xw4jnvo",
          height: "x1qx5ct2",
          fontSize: "x1nxh6w3",
          color: "x1r3oa16",
          textAlign: "x2b8uid",
          backgroundColor: "x1518k6t",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(41),
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
        c = l.fonts,
        m = l.onAlignmentSelect,
        h = l.onFontSelect,
        y = l.selectedAlignment,
        C = l.selectedFont,
        b = _(null),
        v = f(null),
        S = v[0],
        R = v[1],
        L;
      n[3] !== S ||
      n[4] !== c ||
      n[5] !== m ||
      n[6] !== h ||
      n[7] !== y ||
      n[8] !== C
        ? ((L = function (t) {
            if (!S && b.current) {
              var e = d.jsx(r("WAWebMediaEditorToolbarFontDropdown.react"), {
                fonts: c,
                selectedFont: C,
                selectedAlignment: y,
                showAlignmentOptions: !0,
                onFontSelect: h,
                onAlignmentSelect: m,
              });
              R({ menu: e, anchor: b.current });
            }
          }),
          (n[3] = S),
          (n[4] = c),
          (n[5] = m),
          (n[6] = h),
          (n[7] = y),
          (n[8] = C),
          (n[9] = L))
        : (L = n[9]);
      var E = L,
        k;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            R(null);
          }),
          (n[10] = k))
        : (k = n[10]);
      var I = k,
        T;
      n[11] !== S
        ? ((T = function () {
            return !!S;
          }),
          (n[11] = S),
          (n[12] = T))
        : (T = n[12]);
      var D = T,
        x;
      (n[13] !== D
        ? ((x = function () {
            return { isMenuVisible: D };
          }),
          (n[13] = D),
          (n[14] = x))
        : (x = n[14]),
        p(i, x));
      var $ = !!S,
        P;
      if (S) {
        var N;
        (n[15] !== S
          ? ((N = d.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MediaEditorFontDropdown",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: I,
              children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: S }),
            })),
            (n[15] = S),
            (n[16] = N))
          : (N = n[16]),
          (P = N));
      }
      var M;
      n[17] !== C
        ? ((M = o("WAWebMediaEditorEnumsFonts").getFontStyle(C)),
          (n[17] = C),
          (n[18] = M))
        : (M = n[18]);
      var w;
      n[19] !== M
        ? ((w = babelHelpers.extends({}, M)), (n[19] = M), (n[20] = w))
        : (w = n[20]);
      var A;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = d.jsx("div", {
            "aria-hidden": "true",
            children: s._(/*BTDS*/ "A"),
          })),
          (n[21] = A))
        : (A = n[21]);
      var F;
      n[22] !== w
        ? ((F = d.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: g.icon,
            style: w,
            justify: "center",
            align: "center",
            children: A,
          })),
          (n[22] = w),
          (n[23] = F))
        : (F = n[23]);
      var O = F,
        B = $ ? "down" : "up",
        W;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.end5,
          )),
          (n[24] = W))
        : (W = n[24]);
      var q;
      n[25] !== C
        ? ((q = o("WAWebMediaEditorEnumsFonts").getFontTranslation(C)),
          (n[25] = C),
          (n[26] = q))
        : (q = n[26]);
      var U;
      n[27] !== q
        ? ((U = d.jsx("span", babelHelpers.extends({}, W, { children: q }))),
          (n[27] = q),
          (n[28] = U))
        : (U = n[28]);
      var V;
      n[29] !== $ || n[30] !== E || n[31] !== O || n[32] !== U || n[33] !== B
        ? ((V = d.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            onClick: E,
            icon: O,
            selected: $,
            caret: B,
            children: U,
          })),
          (n[29] = $),
          (n[30] = E),
          (n[31] = O),
          (n[32] = U),
          (n[33] = B),
          (n[34] = V))
        : (V = n[34]);
      var H = V,
        G;
      n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = { className: "x1n2onr6 x2lah0s" }), (n[35] = G))
        : (G = n[35]);
      var z;
      n[36] !== P
        ? ((z = d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "dropdown",
            children: P,
          })),
          (n[36] = P),
          (n[37] = z))
        : (z = n[37]);
      var j;
      return (
        n[38] !== H || n[39] !== z
          ? ((j = d.jsxs(
              "div",
              babelHelpers.extends({ ref: b }, G, { children: [H, z] }),
            )),
            (n[38] = H),
            (n[39] = z),
            (n[40] = j))
          : (j = n[40]),
        j
      );
    }
    var y = h;
    l.Font = y;
  },
  226,
);
