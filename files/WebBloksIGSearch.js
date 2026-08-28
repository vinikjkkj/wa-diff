__d(
  "WebBloksIGSearch",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "$",
      c = "#",
      d = "&",
      m = "$",
      p = "\u346A",
      _ = "\u346D";
    function f(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.externalStyle,
        r = e.node,
        a = r.getSubNodes(u),
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.renderNode,
        f = o("WebBloksStyle").useStyle(r, n),
        g = f.style,
        h = f.wrapper,
        y = f.wrapperProps,
        C = a != null ? a : [],
        b;
      t[0] !== g
        ? ((b = o("WebBloksStyle").getStyleProps(
            babelHelpers.extends({}, g, {
              overflow: "hidden",
              flexDirection: "column",
            }),
          )),
          (t[0] = g),
          (t[1] = b))
        : (b = t[1]);
      var v, S;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s.jsx(
            "div",
            babelHelpers.extends(
              {},
              o("WebBloksStyle").getStyleProps({
                flex: "0 0 auto",
                padding: 8,
                flexDirection: "column",
              }),
            ),
          )),
          (S = o("WebBloksStyle").getStyleProps({
            overflow: "auto",
            flexDirection: "column",
            flex: "1 1 auto",
          })),
          (t[2] = v),
          (t[3] = S))
        : ((v = t[2]), (S = t[3]));
      var R;
      t[4] !== l
        ? ((R = function (t, n) {
            var e = t.styleId;
            if (e === p) {
              var r = o("WebBloksUtils").cast(t),
                a = r.get(c),
                i = r.get(d),
                u = !0;
              return !u || !a
                ? null
                : s.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      o("WebBloksStyle").getStyleProps({ flexShrink: 0 }),
                      { children: l(a) },
                    ),
                    n,
                  );
            } else {
              var f = l(t),
                g = t._style,
                h =
                  g != null && g.styleId === _
                    ? o("WebBloksUtils").cast(g)
                    : null;
              if (h)
                var y = h.get(m),
                  C = !0;
              return s.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  o("WebBloksStyle").getStyleProps({ flexShrink: 0 }),
                  { children: f },
                ),
                n,
              );
            }
          }),
          (t[4] = l),
          (t[5] = R))
        : (R = t[5]);
      var L = C.map(R),
        E;
      t[6] !== S || t[7] !== L
        ? ((E = s.jsx("div", babelHelpers.extends({}, S, { children: L }))),
          (t[6] = S),
          (t[7] = L),
          (t[8] = E))
        : (E = t[8]);
      var k;
      t[9] !== b || t[10] !== v || t[11] !== E || t[12] !== y
        ? ((k = s.jsxs(
            "div",
            babelHelpers.extends({}, y, b, { children: [v, E] }),
          )),
          (t[9] = b),
          (t[10] = v),
          (t[11] = E),
          (t[12] = y),
          (t[13] = k))
        : (k = t[13]);
      var I;
      return (
        t[14] !== k || t[15] !== h
          ? ((I = h(k)), (t[14] = k), (t[15] = h), (t[16] = I))
          : (I = t[16]),
        I
      );
    }
    l.default = f;
  },
  98,
);
