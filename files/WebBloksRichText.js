__d(
  "WebBloksRichText",
  [
    "WebBloksComponentContext",
    "WebBloksRichTextContext",
    "WebBloksRichTextTruncation",
    "WebBloksRichTextVerticalAlign",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "useClickablePropsForWebBloks",
    "useWebBloksRichTextDimensions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState,
      m = ".",
      p = "0",
      _ = " ",
      f = "&",
      g = "(",
      h = ")",
      y = "E",
      C = "F",
      b = "*",
      v = ",",
      S = "D",
      R = "(";
    function L(e) {
      var t = e.externalStyle,
        n = e.node,
        a = n.getExpression(h),
        i = n.getSubNodes(_),
        l = n.getSubNodes(y),
        u = n.get(b),
        L = n.get(S),
        E = n.get(g),
        k = n.get(m),
        I = n.get(p),
        T = n.get(f),
        D = n.getSubNodes(C),
        x = n.getSubNodes(v),
        $ = o("WebBloksStyle").useStyle(n, t, a != null),
        P = $.style,
        N = $.wrapper,
        M = $.wrapperProps,
        w = r("useClickablePropsForWebBloks")(n, a),
        A = o("WebBloksComponentContext").useWebBloksContext(),
        F = A.renderChildren,
        O = i.slice(-1)[0],
        B = r("useWebBloksRichTextDimensions")(i, T, l, D, x, L),
        W = L === !0,
        q = d(!1),
        U = q[0],
        V = q[1],
        H = c(
          function () {
            return {
              maxNumberOfLines: E != null ? E : 1,
              isRootFontSizeEnabled: U,
              setIsRootFontSizeEnabled: V,
            };
          },
          [U, E],
        ),
        G = c(
          function () {
            return W
              ? s.jsx(r("WebBloksRichTextContext").Provider, {
                  value: H,
                  children: F(l),
                })
              : F(i);
          },
          [W, i, l, F, H],
        );
      return N(
        s.jsx(
          "div",
          babelHelpers.extends(
            {},
            M,
            {
              dir: "auto",
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, P, {
                lineHeight: B.lineHeight,
                display: "block",
                color: O == null ? void 0 : O.get(R),
                textAlign: o("WebBloksUtils").toHyphen(u),
                overflow: "hidden",
              }),
            },
            w,
            {
              children: s.jsx(r("WebBloksRichTextVerticalAlign"), {
                baselineSpacing: k,
                capSpacing: I,
                dimensions: B,
                children: s.jsx(r("WebBloksRichTextTruncation"), {
                  dimensions: B,
                  maxNumberOfLines: E,
                  spansForTruncation: D,
                  truncationSpans: x,
                  children: G,
                }),
              }),
            },
          ),
        ),
      );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  98,
);
