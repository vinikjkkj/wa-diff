__d(
  "WebBloksImageSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      d = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("(");
    function _(e, t) {
      return e === "center"
        ? {
            display: "inline-block",
            verticalAlign: "calc(2ex / 3 - (" + t + ") / 2)",
          }
        : e === "bottom"
          ? { display: "inline-block", verticalAlign: "text-bottom" }
          : { display: "inline-block" };
    }
    function f(e) {
      var t = e.accessibilityLabel,
        n = e.externalStyle,
        r = e.imageAlign,
        a = e.imageComponent,
        i = e.imageHeight,
        l = e.imageMargin,
        f = e.imageWidth,
        g = e.node,
        h = e.spanStyles,
        y = o("WebBloksStyle").useStyle(g, n),
        C = y.wrapper,
        b = o("WebBloksComponentContext").useWebBloksContext(),
        v = b.renderNode,
        S = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        R = S.alignImageSpansToFont,
        L = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          t,
          g,
          n,
          h,
        ),
        E = o("WebBloksUtils").toPx(i),
        k = o("WebBloksUtils").toPx(f),
        I = o("WebBloksUtils").toPx(l == null ? void 0 : l.get(p)),
        T = o("WebBloksUtils").toPx(l == null ? void 0 : l.get(c)),
        D = [E, I, T].filter(Boolean).join(" + "),
        x = u(
          function () {
            return babelHelpers.extends({}, L, {
              style: babelHelpers.extends(
                {},
                L.style,
                R
                  ? _(r, D)
                  : {
                      display: "inline-flex",
                      height: "100%",
                      alignItems: r === "bottom" ? "flex-end" : r,
                    },
              ),
            });
          },
          [R, D, r, L],
        );
      return E == null || E === "0px" || k == null || k === "0px"
        ? null
        : C(
            s.jsx(
              "span",
              babelHelpers.extends({}, x, {
                children: v(
                  a,
                  babelHelpers.extends({}, R ? { display: "block" } : null, {
                    height: E,
                    width: k,
                    marginTop: I,
                    marginRight: o("WebBloksUtils").toPx(
                      l == null ? void 0 : l.get(d),
                    ),
                    marginBottom: T,
                    marginLeft: o("WebBloksUtils").toPx(
                      l == null ? void 0 : l.get(m),
                    ),
                  }),
                ),
              }),
            ),
          );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
