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
      m = u.useMemo,
      p = "\u41FB",
      _ = "#",
      f = "$",
      g = "&";
    function h(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a ? ((i = a.get(_)), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l = i,
        u;
      t[2] !== a ? ((u = a.get(g)), (t[2] = a), (t[3] = u)) : (u = t[3]);
      var m = u,
        p = o("WebBloksStyle").useStyle(a, n),
        h = p.wrapper,
        C = o("WebBloksComponentContext").useWebBloksContext(),
        b = C.renderNode,
        v = c(r("WebBloksRichTextContext")),
        S = v.isRootFontSizeEnabled,
        R = v.setIsRootFontSizeEnabled,
        L = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          l,
          a,
          n,
          m,
        ),
        E;
      if (t[4] !== a || t[5] !== b) {
        var k;
        ((E =
          (k = a.getSubNodes(f)) == null
            ? void 0
            : k.map(function (e) {
                return b(e);
              })),
          (t[4] = a),
          (t[5] = b),
          (t[6] = E));
      } else E = t[6];
      var I = E,
        T;
      if (t[7] !== m) {
        var D;
        ((T = (D = m == null ? void 0 : m.some(y)) != null ? D : !1),
          (t[7] = m),
          (t[8] = T));
      } else T = t[8];
      var x = T,
        $,
        P;
      if (
        (t[9] !== x || t[10] !== S || t[11] !== R
          ? (($ = function () {
              !S && x && R(!0);
            }),
            (P = [x, S, R]),
            (t[9] = x),
            (t[10] = S),
            (t[11] = R),
            (t[12] = $),
            (t[13] = P))
          : (($ = t[12]), (P = t[13])),
        d($, P),
        x)
      ) {
        var N;
        t[14] !== L || t[15] !== I
          ? ((N = s.jsx("span", babelHelpers.extends({}, L, { children: I }))),
            (t[14] = L),
            (t[15] = I),
            (t[16] = N))
          : (N = t[16]);
        var M;
        t[17] !== a || t[18] !== N
          ? ((M = s.jsx(r("WebBloksRichTextResizeToFit"), {
              node: a,
              children: N,
            })),
            (t[17] = a),
            (t[18] = N),
            (t[19] = M))
          : (M = t[19]);
        var w;
        return (
          t[20] !== M || t[21] !== h
            ? ((w = h(M)), (t[20] = M), (t[21] = h), (t[22] = w))
            : (w = t[22]),
          w
        );
      }
      var A;
      t[23] !== L || t[24] !== I
        ? ((A = s.jsx("span", babelHelpers.extends({}, L, { children: I }))),
          (t[23] = L),
          (t[24] = I),
          (t[25] = A))
        : (A = t[25]);
      var F;
      return (
        t[26] !== A || t[27] !== h
          ? ((F = h(A)), (t[26] = A), (t[27] = h), (t[28] = F))
          : (F = t[28]),
        F
      );
    }
    function y(e) {
      var t = e.styleId;
      return t === p || t === "bk.style.textspan.ResizeToFitStyle";
    }
    l.default = h;
  },
  98,
);
