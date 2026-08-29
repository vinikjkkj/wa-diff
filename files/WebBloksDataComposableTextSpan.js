__d(
  "WebBloksDataComposableTextSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksRichTextContext",
    "WebBloksRichTextResizeToFit",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useMemo;
    function p(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a ? ((i = a.get("styles")), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l = i,
        u = o("WebBloksStyle").useStyle(a, n),
        m = u.wrapper,
        p = o("WebBloksComponentContext").useWebBloksContext(),
        f = p.renderNode,
        g = c(r("WebBloksRichTextContext")),
        h = g.isRootFontSizeEnabled,
        y = g.setIsRootFontSizeEnabled,
        C = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(a, n),
        b;
      if (t[2] !== a || t[3] !== f) {
        var v;
        ((b =
          (v = a.getSubNodes("spans")) == null
            ? void 0
            : v.map(function (e) {
                return f(e);
              })),
          (t[2] = a),
          (t[3] = f),
          (t[4] = b));
      } else b = t[4];
      var S = b,
        R;
      if (t[5] !== l) {
        var L;
        ((R = (L = l == null ? void 0 : l.some(_)) != null ? L : !1),
          (t[5] = l),
          (t[6] = R));
      } else R = t[6];
      var E = R,
        k,
        I;
      if (
        (t[7] !== E || t[8] !== h || t[9] !== y
          ? ((k = function () {
              !h && E && y(!0);
            }),
            (I = [E, h, y]),
            (t[7] = E),
            (t[8] = h),
            (t[9] = y),
            (t[10] = k),
            (t[11] = I))
          : ((k = t[10]), (I = t[11])),
        d(k, I),
        E)
      ) {
        var T;
        t[12] !== C || t[13] !== S
          ? ((T = s.jsx("span", babelHelpers.extends({}, C, { children: S }))),
            (t[12] = C),
            (t[13] = S),
            (t[14] = T))
          : (T = t[14]);
        var D;
        t[15] !== a || t[16] !== T
          ? ((D = s.jsx(r("WebBloksRichTextResizeToFit"), {
              node: a,
              children: T,
            })),
            (t[15] = a),
            (t[16] = T),
            (t[17] = D))
          : (D = t[17]);
        var x;
        return (
          t[18] !== D || t[19] !== m
            ? ((x = m(D)), (t[18] = D), (t[19] = m), (t[20] = x))
            : (x = t[20]),
          x
        );
      }
      var $;
      t[21] !== C || t[22] !== S
        ? (($ = s.jsx("span", babelHelpers.extends({}, C, { children: S }))),
          (t[21] = C),
          (t[22] = S),
          (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== $ || t[25] !== m
          ? ((P = m($)), (t[24] = $), (t[25] = m), (t[26] = P))
          : (P = t[26]),
        P
      );
    }
    function _(e) {
      return e.styleId === "bk.style.textspan.ResizeToFitStyle";
    }
    l.default = p;
  },
  98,
);
