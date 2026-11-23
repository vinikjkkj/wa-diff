__d(
  "WebBloksDataComposableTextSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksModel",
    "WebBloksRichTextContext",
    "WebBloksRichTextResizeToFit",
    "WebBloksStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useMemo,
      p = "bk.style.textspan.ResizeToFitStyle",
      _ = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("&");
    function h(e) {
      var t,
        n = e.externalStyle,
        a = e.node,
        i = a.get(_),
        l = a.get(g),
        u = o("WebBloksStyle").useStyle(a, n),
        h = u.wrapper,
        y = o("WebBloksComponentContext").useWebBloksContext(),
        C = y.renderNode,
        b = c(r("WebBloksRichTextContext")),
        v = b.isRootFontSizeEnabled,
        S = b.setIsRootFontSizeEnabled,
        R = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          i,
          a,
          n,
          l,
        ),
        L =
          (t = a.getSubNodes(f)) == null
            ? void 0
            : t.map(function (e) {
                return C(e);
              }),
        E = m(
          function () {
            var e;
            return (e =
              l == null
                ? void 0
                : l.some(function (e) {
                    var t = e.styleId;
                    return (
                      t === p || t === "bk.style.textspan.ResizeToFitStyle"
                    );
                  })) != null
              ? e
              : !1;
          },
          [l],
        );
      return (
        d(
          function () {
            !v && E && S(!0);
          },
          [E, v, S],
        ),
        h(
          E
            ? s.jsx(r("WebBloksRichTextResizeToFit"), {
                node: a,
                children: s.jsx(
                  "span",
                  babelHelpers.extends({}, R, { children: L }),
                ),
              })
            : s.jsx("span", babelHelpers.extends({}, R, { children: L })),
        )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
