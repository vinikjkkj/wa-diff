__d(
  "WebBloksImageSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = "#",
      d = ")",
      m = "*",
      p = "(";
    function _(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.accessibilityLabel,
        r = e.externalStyle,
        a = e.imageAlign,
        i = e.imageComponent,
        l = e.imageHeight,
        u = e.imageMargin,
        _ = e.imageWidth,
        f = e.node,
        g = e.spanStyles,
        h = o("WebBloksStyle").useStyle(f, r),
        y = h.wrapper,
        C = o("WebBloksComponentContext").useWebBloksContext(),
        b = C.renderNode,
        v = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          n,
          f,
          r,
          g,
        ),
        S = a === "bottom" ? "flex-end" : a,
        R;
      t[0] !== v.style || t[1] !== S
        ? ((R = babelHelpers.extends({}, v.style, {
            display: "inline-flex",
            height: "100%",
            alignItems: S,
          })),
          (t[0] = v.style),
          (t[1] = S),
          (t[2] = R))
        : (R = t[2]);
      var L;
      t[3] !== v || t[4] !== R
        ? ((L = babelHelpers.extends({}, v, { style: R })),
          (t[3] = v),
          (t[4] = R),
          (t[5] = L))
        : (L = t[5]);
      var E = L,
        k,
        I,
        T,
        D;
      if (
        t[6] !== i ||
        t[7] !== l ||
        t[8] !== u ||
        t[9] !== E ||
        t[10] !== _ ||
        t[11] !== b ||
        t[12] !== y
      ) {
        D = Symbol.for("react.early_return_sentinel");
        e: {
          var x = o("WebBloksUtils").toPx(l),
            $ = o("WebBloksUtils").toPx(_);
          if (x == null || x === "0px" || $ == null || $ === "0px") {
            D = null;
            break e;
          }
          ((T = y),
            (k = E),
            (I = b(i, {
              height: x,
              width: $,
              marginTop: o("WebBloksUtils").toPx(u == null ? void 0 : u.get(p)),
              marginRight: o("WebBloksUtils").toPx(
                u == null ? void 0 : u.get(d),
              ),
              marginBottom: o("WebBloksUtils").toPx(
                u == null ? void 0 : u.get(c),
              ),
              marginLeft: o("WebBloksUtils").toPx(
                u == null ? void 0 : u.get(m),
              ),
            })));
        }
        ((t[6] = i),
          (t[7] = l),
          (t[8] = u),
          (t[9] = E),
          (t[10] = _),
          (t[11] = b),
          (t[12] = y),
          (t[13] = k),
          (t[14] = I),
          (t[15] = T),
          (t[16] = D));
      } else ((k = t[13]), (I = t[14]), (T = t[15]), (D = t[16]));
      if (D !== Symbol.for("react.early_return_sentinel")) return D;
      var P;
      t[17] !== k || t[18] !== I
        ? ((P = s.jsx("span", babelHelpers.extends({}, k, { children: I }))),
          (t[17] = k),
          (t[18] = I),
          (t[19] = P))
        : (P = t[19]);
      var N;
      return (
        t[20] !== T || t[21] !== P
          ? ((N = T(P)), (t[20] = T), (t[21] = P), (t[22] = N))
          : (N = t[22]),
        N
      );
    }
    l.default = _;
  },
  98,
);
