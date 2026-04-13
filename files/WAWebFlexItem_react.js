__d(
  "WAWebFlexItem.react",
  [
    "WAWebClassnames",
    "WAWebStructureStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "align",
        "as",
        "basis",
        "children",
        "className",
        "columnGap",
        "gap",
        "grow",
        "inline",
        "isFlexContainer",
        "justify",
        "margin",
        "marginBottom",
        "marginEnd",
        "marginStart",
        "marginTop",
        "order",
        "padding",
        "paddingBottom",
        "paddingEnd",
        "paddingStart",
        "paddingTop",
        "rowGap",
        "shrink",
        "style",
        "testid",
        "wrap",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        flexItem: {
          flexGrow: "x1c4vz4f",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          order: "x1g77sc7",
          minWidth: "xeuugli",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        displayFlex: { display: "x78zum5", $$css: !0 },
        displayInlineFlex: { display: "x3nfvp2", $$css: !0 },
      },
      p = {
        nowrap: { flexWrap: "xozqiw3", $$css: !0 },
        wrap: { flexWrap: "x1a02dak", $$css: !0 },
        wrapReverse: { flexWrap: "x8hhl5t", $$css: !0 },
      },
      _ = {
        auto: { alignSelf: "x1oa3qoh", $$css: !0 },
        start: { alignSelf: "xqcrz7y", $$css: !0 },
        center: { alignSelf: "xamitd3", $$css: !0 },
        end: { alignSelf: "xpvyfi4", $$css: !0 },
        stretch: { alignSelf: "xkh2ocl", $$css: !0 },
        baseline: { alignSelf: "xoi2r2e", $$css: !0 },
      },
      f = {
        auto: { justifySelf: "x12fk4p8", $$css: !0 },
        start: { justifySelf: "xwldb3t", $$css: !0 },
        center: { justifySelf: "x7v7x1q", $$css: !0 },
        end: { justifySelf: "x15bdqvn", $$css: !0 },
        stretch: { justifySelf: "xuy72oy", $$css: !0 },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(20),
        a,
        i,
        l,
        c,
        g,
        h,
        y,
        C;
      if (n[0] !== t) {
        var b = t.ref,
          v = babelHelpers.objectWithoutPropertiesLoose(t, e);
        c = b;
        var S = v.align,
          R = v.as,
          L = v.basis,
          E = v.children,
          k = v.className,
          I = v.columnGap,
          T = v.gap,
          D = v.grow,
          x = v.inline,
          $ = v.isFlexContainer,
          P = v.justify,
          N = v.margin,
          M = v.marginBottom,
          w = v.marginEnd,
          A = v.marginStart,
          F = v.marginTop,
          O = v.order,
          B = v.padding,
          W = v.paddingBottom,
          q = v.paddingEnd,
          U = v.paddingStart,
          V = v.paddingTop,
          H = v.rowGap,
          G = v.shrink,
          z = v.style,
          j = v.testid,
          K = v.wrap,
          Q = v.xstyle,
          X = babelHelpers.objectWithoutPropertiesLoose(v, s);
        ((i = E), (h = z), (C = j), (g = X));
        var Y = S === void 0 ? "auto" : S,
          J = R === void 0 ? "div" : R,
          Z = P === void 0 ? "auto" : P,
          ee = K === void 0 ? "nowrap" : K;
        ((l = {}),
          typeof L == "string"
            ? (l.flexBasis = L)
            : L != null && (l.flexBasis = L + "px"),
          D != null && (l.flexGrow = D),
          G != null && (l.flexShrink = G),
          O != null && (l.order = O));
        var te = o("WAWebStructureStyles").getStructureStyles(v);
        ((a = J),
          (y = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (u || (u = r("stylex")))(
              m.flexItem,
              $ === !0 && m.displayFlex,
              x === !0 && m.displayInlineFlex,
              p[ee],
              _[Y],
              f[Z],
              te,
              Q,
            ),
            k,
          )),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = c),
          (n[5] = g),
          (n[6] = h),
          (n[7] = y),
          (n[8] = C));
      } else
        ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (c = n[4]),
          (g = n[5]),
          (h = n[6]),
          (y = n[7]),
          (C = n[8]));
      var ne;
      n[9] !== l || n[10] !== h
        ? ((ne = babelHelpers.extends({}, h, l)),
          (n[9] = l),
          (n[10] = h),
          (n[11] = ne))
        : (ne = n[11]);
      var re;
      return (
        n[12] !== a ||
        n[13] !== i ||
        n[14] !== c ||
        n[15] !== g ||
        n[16] !== y ||
        n[17] !== ne ||
        n[18] !== C
          ? ((re = d.jsx(
              a,
              babelHelpers.extends(
                { className: y, "data-testid": void 0, ref: c, style: ne },
                g,
                { children: i },
              ),
            )),
            (n[12] = a),
            (n[13] = i),
            (n[14] = c),
            (n[15] = g),
            (n[16] = y),
            (n[17] = ne),
            (n[18] = C),
            (n[19] = re))
          : (re = n[19]),
        re
      );
    }
    l.default = g;
  },
  98,
);
