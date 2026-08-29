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
      d = u.useState;
    function m(e) {
      var t = e.externalStyle,
        n = e.node,
        a = n.getExpression("on_click"),
        i = n.getSubNodes("children"),
        l = n.getSubNodes("spans"),
        u = n.get("text_align"),
        m = n.get("use_composable_and_extensible_spans"),
        p = n.get("max_number_of_lines"),
        _ = o("WebBloksStyle").useStyle(n, t, a != null),
        f = _.style,
        g = _.wrapper,
        h = _.wrapperProps,
        y = r("useClickablePropsForWebBloks")(n, a),
        C = o("WebBloksComponentContext").useWebBloksContext(),
        b = C.renderChildren,
        v = i.slice(-1)[0],
        S = r("useWebBloksRichTextDimensions")(n),
        R = m === !0,
        L = d(!1),
        E = L[0],
        k = L[1],
        I = c(
          function () {
            return {
              maxNumberOfLines: p != null ? p : 1,
              isRootFontSizeEnabled: E,
              setIsRootFontSizeEnabled: k,
            };
          },
          [E, p],
        ),
        T = c(
          function () {
            return R
              ? s.jsx(r("WebBloksRichTextContext").Provider, {
                  value: I,
                  children: b(l),
                })
              : b(i);
          },
          [R, i, l, b, I],
        );
      return g(
        s.jsx(
          "div",
          babelHelpers.extends(
            {},
            h,
            {
              dir: "auto",
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: babelHelpers.extends({}, f, {
                lineHeight: S.lineHeight,
                display: "block",
                color: v == null ? void 0 : v.get("text_color"),
                textAlign: o("WebBloksUtils").toHyphen(u),
                overflow: "hidden",
              }),
            },
            y,
            {
              children: s.jsx(r("WebBloksRichTextVerticalAlign"), {
                node: n,
                dimensions: S,
                children: s.jsx(r("WebBloksRichTextTruncation"), {
                  node: n,
                  dimensions: S,
                  children: T,
                }),
              }),
            },
          ),
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
