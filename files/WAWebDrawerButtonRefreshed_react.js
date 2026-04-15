__d(
  "WAWebDrawerButtonRefreshed.react",
  [
    "WAWebFlex.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebUISpacing",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        btn: {
          borderStartStartRadius: "x7zqoo0",
          borderStartEndRadius: "xt1g1te",
          borderEndEndRadius: "x1iz9ej4",
          borderEndStartRadius: "x1ga13z8",
          ":focus_backgroundColor": "x1aiwb2g",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
        container: { boxSizing: "x9f619", height: "x1x0gksc", $$css: !0 },
        iconContainer: { width: "x100vrsf", color: "xhslqc4", $$css: !0 },
        danger: { color: "xqnyt8g", $$css: !0 },
        disabled: {
          opacity: "xyd83as",
          cursor: "xt0e3qv",
          ":hover_backgroundColor": "x1rpam2w",
          ":focus_backgroundColor": "xlwr4kp",
          $$css: !0,
        },
        middleContainer: { $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(31),
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
        u = l.ariaLabel,
        m = l.children,
        p = l.danger,
        _ = l.disabled,
        f = l.icon,
        g = l.onClick,
        h = l.testid,
        y = l.tooltip,
        C;
      n[3] !== _ ? ((C = { disabled: _ }), (n[3] = _), (n[4] = C)) : (C = n[4]);
      var b = r("useWAWebStaticButtonA11y")(g, C),
        v = b[0],
        S = b[1],
        R = r("useMergeRefs")(v, i),
        L;
      n[5] !== m
        ? ((L = o("WAWebL10NFbtTypeUtils").isStringOrFbt(m) ? m : null),
          (n[5] = m),
          (n[6] = L))
        : (L = n[6]);
      var E = L,
        k = y != null ? y : E,
        I = u != null ? u : E,
        T = _ !== !0 && p === !0,
        D = T ? "secondaryNegativeEmphasized" : "contentDefault",
        x;
      n[7] !== m || n[8] !== D
        ? ((x = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: D,
            children: m,
          })),
          (n[7] = m),
          (n[8] = D),
          (n[9] = x))
        : (x = n[9]);
      var $ = x,
        P;
      n[10] !== _
        ? ((P = (s || (s = r("stylex"))).props(
            d.btn,
            _ === !0 && d.disabled,
            o("WAWebUISpacing").uiMargin.horiz10,
          )),
          (n[10] = _),
          (n[11] = P))
        : (P = n[11]);
      var N;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [
            d.container,
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.vert10,
          ]),
          (n[12] = N))
        : (N = n[12]);
      var M = T && d.danger,
        w;
      n[13] !== M
        ? ((w = [d.iconContainer, o("WAWebUISpacing").uiMargin.end14, M]),
          (n[13] = M),
          (n[14] = w))
        : (w = n[14]);
      var A;
      n[15] !== f || n[16] !== w
        ? ((A = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: w,
            children: f,
          })),
          (n[15] = f),
          (n[16] = w),
          (n[17] = A))
        : (A = n[17]);
      var F;
      n[18] !== $
        ? ((F = c.jsx(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            grow: 1,
            xstyle: d.middleContainer,
            children: $,
          })),
          (n[18] = $),
          (n[19] = F))
        : (F = n[19]);
      var O;
      n[20] !== F || n[21] !== A
        ? ((O = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "stretch",
            xstyle: N,
            children: [A, F],
          })),
          (n[20] = F),
          (n[21] = A),
          (n[22] = O))
        : (O = n[22]);
      var B;
      return (
        n[23] !== I ||
        n[24] !== S ||
        n[25] !== R ||
        n[26] !== O ||
        n[27] !== P ||
        n[28] !== h ||
        n[29] !== k
          ? ((B = c.jsx(
              "div",
              babelHelpers.extends({}, S, P, {
                "data-ignore-capture": "any",
                "data-testid": void 0,
                ref: R,
                title: k,
                "aria-label": I,
                children: O,
              }),
            )),
            (n[23] = I),
            (n[24] = S),
            (n[25] = R),
            (n[26] = O),
            (n[27] = P),
            (n[28] = h),
            (n[29] = k),
            (n[30] = B))
          : (B = n[30]),
        B
      );
    }
    l.default = m;
  },
  98,
);
