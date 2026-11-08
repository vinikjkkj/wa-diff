__d(
  "WebBloksImageSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      d = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("(");
    function _(e, t) {
      return e === "center"
        ? {
            display: "inline-block",
            verticalAlign: "calc(2ex / 3 - (" + t + ") / 2)",
          }
        : e === "bottom"
          ? { display: "inline-block", verticalAlign: "text-bottom" }
          : { display: "inline-block" };
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.accessibilityLabel,
        r = e.externalStyle,
        a = e.imageAlign,
        i = e.imageComponent,
        l = e.imageHeight,
        u = e.imageMargin,
        f = e.imageWidth,
        g = e.node,
        h = e.spanStyles,
        y = o("WebBloksStyle").useStyle(g, r),
        C = y.wrapper,
        b = o("WebBloksComponentContext").useWebBloksContext(),
        v = b.renderNode,
        S = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        R = S.alignImageSpansToFont,
        L = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          n,
          g,
          r,
          h,
        ),
        E,
        k,
        I,
        T;
      if (
        t[0] !== R ||
        t[1] !== a ||
        t[2] !== L ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== f ||
        t[7] !== v ||
        t[8] !== C
      ) {
        T = Symbol.for("react.early_return_sentinel");
        e: {
          var D = o("WebBloksUtils").toPx(l),
            x = o("WebBloksUtils").toPx(f),
            $ = o("WebBloksUtils").toPx(u == null ? void 0 : u.get(p)),
            P = o("WebBloksUtils").toPx(u == null ? void 0 : u.get(c)),
            N = [D, $, P].filter(Boolean).join(" + "),
            M;
          t[13] !== R || t[14] !== N || t[15] !== a
            ? ((M = R
                ? _(a, N)
                : {
                    display: "inline-flex",
                    height: "100%",
                    alignItems: a === "bottom" ? "flex-end" : a,
                  }),
              (t[13] = R),
              (t[14] = N),
              (t[15] = a),
              (t[16] = M))
            : (M = t[16]);
          var w;
          t[17] !== L.style || t[18] !== M
            ? ((w = babelHelpers.extends({}, L.style, M)),
              (t[17] = L.style),
              (t[18] = M),
              (t[19] = w))
            : (w = t[19]);
          var A;
          t[20] !== L || t[21] !== w
            ? ((A = babelHelpers.extends({}, L, { style: w })),
              (t[20] = L),
              (t[21] = w),
              (t[22] = A))
            : (A = t[22]);
          var F = A;
          if (D == null || D === "0px" || x == null || x === "0px") {
            T = null;
            break e;
          }
          ((I = C),
            (E = F),
            (k = v(
              i,
              babelHelpers.extends({}, R ? { display: "block" } : null, {
                height: D,
                width: x,
                marginTop: $,
                marginRight: o("WebBloksUtils").toPx(
                  u == null ? void 0 : u.get(d),
                ),
                marginBottom: P,
                marginLeft: o("WebBloksUtils").toPx(
                  u == null ? void 0 : u.get(m),
                ),
              }),
            )));
        }
        ((t[0] = R),
          (t[1] = a),
          (t[2] = L),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = f),
          (t[7] = v),
          (t[8] = C),
          (t[9] = E),
          (t[10] = k),
          (t[11] = I),
          (t[12] = T));
      } else ((E = t[9]), (k = t[10]), (I = t[11]), (T = t[12]));
      if (T !== Symbol.for("react.early_return_sentinel")) return T;
      var O;
      t[23] !== E || t[24] !== k
        ? ((O = s.jsx("span", babelHelpers.extends({}, E, { children: k }))),
          (t[23] = E),
          (t[24] = k),
          (t[25] = O))
        : (O = t[25]);
      var B;
      return (
        t[26] !== I || t[27] !== O
          ? ((B = I(O)), (t[26] = I), (t[27] = O), (t[28] = B))
          : (B = t[28]),
        B
      );
    }
    l.default = f;
  },
  98,
);
