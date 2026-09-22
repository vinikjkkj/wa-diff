__d(
  "WebBloksRichText",
  [
    "WebBloksComponentContext",
    "WebBloksModel",
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
      m = o("WebBloksModel").defineWebBloksAttributeKey("."),
      p = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey(" "),
      f = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("("),
      h = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("E"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("F"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      v = o("WebBloksModel").defineWebBloksAttributeKey(","),
      S = o("WebBloksModel").defineWebBloksAttributeKey("D"),
      R = o("WebBloksModel").defineWebBloksAttributeKey("(");
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
        F = A.bloksContext,
        O = A.renderChildren,
        B = F.objectSet.environment.enableDeterministicTextSize,
        W = i.slice(-1)[0],
        q = r("useWebBloksRichTextDimensions")(i, T, l, D, x, L, B),
        U = L === !0,
        V = d(!1),
        H = V[0],
        G = V[1],
        z = c(
          function () {
            return {
              maxNumberOfLines: E != null ? E : 1,
              isRootFontSizeEnabled: H,
              setIsRootFontSizeEnabled: G,
            };
          },
          [H, E],
        ),
        j = c(
          function () {
            return U
              ? s.jsx(r("WebBloksRichTextContext").Provider, {
                  value: z,
                  children: O(l),
                })
              : O(i);
          },
          [U, i, l, O, z],
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
                lineHeight: q.lineHeight,
                display: "block",
                color: W == null ? void 0 : W.get(R),
                textAlign: o("WebBloksUtils").toHyphen(u),
                overflow: "hidden",
              }),
            },
            w,
            {
              children: s.jsx(r("WebBloksRichTextVerticalAlign"), {
                baselineSpacing: k,
                capSpacing: I,
                dimensions: q,
                children: s.jsx(r("WebBloksRichTextTruncation"), {
                  dimensions: q,
                  maxNumberOfLines: E,
                  spansForTruncation: D,
                  truncationSpans: x,
                  children: j,
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
