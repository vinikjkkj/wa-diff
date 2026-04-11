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
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.externalStyle,
        r = e.node,
        a;
      t[0] !== r
        ? ((a = r.get("image_align")), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = r.get("image_margin"),
        u = r.get("image_width"),
        c = r.get("image_height"),
        d = r.getSubNode("image_component"),
        m = o("WebBloksStyle").useStyle(r, n),
        p = m.wrapper,
        _ = o("WebBloksComponentContext").useWebBloksContext(),
        f = _.renderNode,
        g = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(r, n),
        h = i,
        y = l,
        C = h === "bottom" ? "flex-end" : h,
        b;
      t[2] !== g.style || t[3] !== C
        ? ((b = babelHelpers.extends({}, g.style, {
            display: "inline-flex",
            height: "100%",
            alignItems: C,
          })),
          (t[2] = g.style),
          (t[3] = C),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] !== g || t[6] !== b
        ? ((v = babelHelpers.extends({}, g, { style: b })),
          (t[5] = g),
          (t[6] = b),
          (t[7] = v))
        : (v = t[7]);
      var S = v,
        R = o("WebBloksUtils").toPx(c),
        L = o("WebBloksUtils").toPx(u);
      if (R == null || R === "0px" || L == null || L === "0px") return null;
      var E = f(d, {
          height: R,
          width: L,
          marginTop: o("WebBloksUtils").toPx(y == null ? void 0 : y.get("top")),
          marginRight: o("WebBloksUtils").toPx(
            y == null ? void 0 : y.get("end"),
          ),
          marginBottom: o("WebBloksUtils").toPx(
            y == null ? void 0 : y.get("bottom"),
          ),
          marginLeft: o("WebBloksUtils").toPx(
            y == null ? void 0 : y.get("start"),
          ),
        }),
        k;
      t[8] !== S || t[9] !== E
        ? ((k = s.jsx("span", babelHelpers.extends({}, S, { children: E }))),
          (t[8] = S),
          (t[9] = E),
          (t[10] = k))
        : (k = t[10]);
      var I;
      return (
        t[11] !== k || t[12] !== p
          ? ((I = p(k)), (t[11] = k), (t[12] = p), (t[13] = I))
          : (I = t[13]),
        I
      );
    }
    l.default = c;
  },
  98,
);
