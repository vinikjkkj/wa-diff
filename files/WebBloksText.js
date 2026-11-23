__d(
  "WebBloksText",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = 1e3 / 60,
      p = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("("),
      y = o("WebBloksModel").defineWebBloksAttributeKey("2"),
      C = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      S = o("WebBloksModel").defineWebBloksAttributeKey(","),
      R = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("."),
      E = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("1");
    function I(e, t, n) {
      var r = d({ innerText: "" });
      (c(
        function () {
          e.current != null &&
            e.current.innerText != null &&
            (r.current.innerText = e.current.innerText);
        },
        [n],
      ),
        c(
          function () {
            var n = e.current;
            if (!(n == null || t == null || ResizeObserver == null)) {
              var a = o("WebBloksUtils").throttle(function () {
                ((n.style.whiteSpace = "nowrap"),
                  n.scrollWidth <= n.clientWidth &&
                    (n.innerText = r.current.innerText));
                for (
                  var e = !1;
                  n.scrollWidth > n.clientWidth && n.innerText != null;
                )
                  ((n.innerText =
                    "" +
                    n.innerText.slice(0, -1 + (e ? -1 * t.length : 0)) +
                    t),
                    (e = !0));
              }, m);
              a();
              var i = new ResizeObserver(function () {
                a();
              });
              return (
                i.observe(n),
                function () {
                  i && i.unobserve(n);
                }
              );
            }
          },
          [t, n],
        ));
    }
    function T(e) {
      var t,
        n,
        a = e.externalStyle,
        i = e.node,
        l = i.getExpression(h),
        u = i.get(C),
        c = i.get(b),
        d = i.get(R),
        m = i.get(L),
        T = i.getSubNode(E),
        D = i.get(v),
        x = i.get(p),
        $ = i.get(y),
        P = i.getSubNode(S),
        N = i.get(k),
        M = i.get(_),
        w = i.get(f),
        A = i.get(g),
        F = o("WebBloksStyle").useStyle(i, a, l != null),
        O = F.ref,
        B = F.style,
        W = F.wrapper,
        q = F.wrapperProps,
        U = o("WebBloksTheme").useTheme().getTheme(),
        V =
          (D != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(D),
            )) ||
          (T && o("WebBloksUtils").getRGBColorWithTheme(T, U)),
        H = r("useClickablePropsForWebBloks")(i, l),
        G = o("WebBloksComponentContext").useWebBloksContext(),
        z = G.bloksContext,
        j = G.renderNode,
        K = z.objectSet.environment.fontFamilyMappings,
        Q =
          P != null
            ? j(P)
            : u == null
              ? u
              : u === " "
                ? s.jsx(s.Fragment, { children: "\xA0" })
                : u;
      I(O, N, Q);
      var X = o("WebBloksUtils").toPx(M),
        Y = X != null ? X : o("WebBloksTextStyle").getLineHeight(w);
      return W(
        s.jsx(
          "span",
          babelHelpers.extends(
            {},
            q,
            {
              style: babelHelpers.extends(
                {},
                B,
                o("WebBloksTextStyle").getLineClampStyle(A),
                o("WebBloksTextStyle").getTextStyle(m),
                o("WebBloksTextStyle").getVerticalSpacingStyles(Y),
                {
                  lineHeight: Y,
                  fontSize: o("WebBloksUtils").toPx(d),
                  fontFamily:
                    (t = o("WebBloksTextStyle").getFontFamily(x, K)) != null
                      ? t
                      : void 0,
                  fontVariationSettings:
                    (n = o("WebBloksTextStyle").getFontVariationSettings(
                      x,
                      K,
                      U,
                      B,
                    )) != null
                      ? n
                      : void 0,
                  textAlign: o("WebBloksUtils").toHyphen(c),
                  textDecoration: o("WebBloksBooleanUtils").isTrue($)
                    ? "line-through"
                    : "",
                  color: V != null ? V : void 0,
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  padding: "unset",
                  maxWidth: "100%",
                },
              ),
            },
            H,
            { children: Q },
          ),
        ),
      );
    }
    ((T.displayName = T.name + " [from " + i.id + "]"), (l.default = T));
  },
  98,
);
