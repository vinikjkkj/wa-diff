__d(
  "WebBloksRichText",
  [
    "WebBloksComponentContext",
    "WebBloksModel",
    "WebBloksRichTextContext",
    "WebBloksRichTextTruncation",
    "WebBloksRichTextVerticalAlign",
    "WebBloksStyle",
    "WebBloksTextStyle",
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
        k = n.get(g),
        I = n.get(m),
        T = n.get(p),
        D = n.get(f),
        x = n.getSubNodes(C),
        $ = n.getSubNodes(v),
        P = o("WebBloksStyle").useStyle(n, t, a != null),
        N = P.style,
        M = P.wrapper,
        w = P.wrapperProps,
        A = r("useClickablePropsForWebBloks")(n, a),
        F = o("WebBloksComponentContext").useWebBloksContext(),
        O = F.bloksContext,
        B = F.renderChildren,
        W = O.objectSet.environment.enableDeterministicTextSize,
        q = i.slice(-1)[0],
        U = r("useWebBloksRichTextDimensions")(i, D, l, x, $, L, W),
        V = L === !0,
        H = d(!1),
        G = H[0],
        z = H[1],
        j = c(
          function () {
            return {
              maxNumberOfLines: k != null ? k : 1,
              isRootFontSizeEnabled: G,
              setIsRootFontSizeEnabled: z,
            };
          },
          [G, k],
        ),
        K = c(
          function () {
            return V
              ? s.jsx(r("WebBloksRichTextContext").Provider, {
                  value: j,
                  children: B(l),
                })
              : B(i);
          },
          [V, i, l, B, j],
        );
      return M(
        s.jsx(
          "div",
          babelHelpers.extends(
            {},
            w,
            {
              dir: "auto",
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends(
                {},
                N,
                {
                  lineHeight: U.lineHeight,
                  display: "block",
                  color: q == null ? void 0 : q.get(R),
                  textAlign: o("WebBloksUtils").toHyphen(u),
                  overflow: "hidden",
                },
                k != null && k > 0 ? E(N, U.textSizePx) : null,
              ),
            },
            A,
            {
              children: s.jsx(r("WebBloksRichTextVerticalAlign"), {
                baselineSpacing: I,
                capSpacing: T,
                dimensions: U,
                children: s.jsx(r("WebBloksRichTextTruncation"), {
                  dimensions: U,
                  maxNumberOfLines: k,
                  spansForTruncation: x,
                  truncationSpans: $,
                  children: K,
                }),
              }),
            },
          ),
        ),
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      if (
        e.height != null ||
        e.minHeight != null ||
        e.maxHeight != null ||
        e.flexBasis != null ||
        e.flex != null ||
        e.margin != null ||
        e.padding != null
      )
        return null;
      var n = o("WebBloksTextStyle").getClampedTextHeadroomStyle(t),
        r = n.marginTop,
        a = n.paddingTop,
        i = k(e.marginTop, r),
        l = k(e.paddingTop, a);
      return i == null || l == null ? null : { marginTop: i, paddingTop: l };
    }
    function k(e, t) {
      return e == null
        ? t
        : typeof e == "number"
          ? e + t
          : typeof e == "string" && e !== "auto"
            ? "calc(" + e + " + " + t + "px)"
            : null;
    }
    l.default = L;
  },
  98,
);
