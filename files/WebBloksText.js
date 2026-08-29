__d(
  "WebBloksText",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = 1e3 / 60;
    function p(e, t, n) {
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
    function _(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a
        ? ((i = a.getExpression("on_click")), (t[0] = a), (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] !== a ? ((u = a.get("text")), (t[2] = a), (t[3] = u)) : (u = t[3]);
      var c = u,
        d = a.get("text_align"),
        m = a.get("text_size"),
        _ = a.get("text_style"),
        f = a.getSubNode("text_themed_color"),
        g = a.get("text_color"),
        h = a.get("font_family"),
        y = a.get("strikethrough"),
        C = a.getSubNode("text_provider"),
        b;
      t[4] !== a
        ? ((b = a.get("truncation_string")), (t[4] = a), (t[5] = b))
        : (b = t[5]);
      var v = b,
        S = a.get("line_height"),
        R = a.get("line_height_multiplier"),
        L = a.get("max_number_of_lines"),
        E = o("WebBloksStyle").useStyle(a, n, l != null),
        k = E.ref,
        I = E.style,
        T = E.wrapper,
        D = E.wrapperProps,
        x = o("WebBloksTheme").useTheme().getTheme(),
        $ =
          (g != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(g),
            )) ||
          (f && o("WebBloksUtils").getRGBColorWithTheme(f, x)),
        P = r("useClickablePropsForWebBloks")(a, l),
        N = o("WebBloksComponentContext").useWebBloksContext(),
        M = N.bloksContext,
        w = N.renderNode,
        A = M.objectSet.environment.fontFamilyMappings,
        F =
          C != null
            ? w(C)
            : c == null
              ? c
              : c === " "
                ? s.jsx(s.Fragment, { children: "\xA0" })
                : c;
      p(k, v, F);
      var O = o("WebBloksUtils").toPx(S),
        B = O != null ? O : o("WebBloksTextStyle").getLineHeight(R),
        W = o("WebBloksTextStyle").getLineClampStyle(L),
        q = o("WebBloksTextStyle").getTextStyle(_),
        U = o("WebBloksTextStyle").getVerticalSpacingStyles(B),
        V = o("WebBloksUtils").toPx(m),
        H = o("WebBloksTextStyle").getFontFamily(h, A),
        G = o("WebBloksUtils").toHyphen(d),
        z = o("WebBloksBooleanUtils").isTrue(y) ? "line-through" : "",
        j;
      t[6] !== $ ||
      t[7] !== B ||
      t[8] !== I ||
      t[9] !== z ||
      t[10] !== W ||
      t[11] !== q ||
      t[12] !== U ||
      t[13] !== V ||
      t[14] !== H ||
      t[15] !== G
        ? ((j = babelHelpers.extends({}, I, W, q, U, {
            lineHeight: B,
            fontSize: V,
            fontFamily: H,
            textAlign: G,
            textDecoration: z,
            color: $,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            padding: "unset",
            maxWidth: "100%",
          })),
          (t[6] = $),
          (t[7] = B),
          (t[8] = I),
          (t[9] = z),
          (t[10] = W),
          (t[11] = q),
          (t[12] = U),
          (t[13] = V),
          (t[14] = H),
          (t[15] = G),
          (t[16] = j))
        : (j = t[16]);
      var K;
      t[17] !== P || t[18] !== j || t[19] !== F || t[20] !== D
        ? ((K = s.jsx(
            "span",
            babelHelpers.extends({}, D, { style: j }, P, { children: F }),
          )),
          (t[17] = P),
          (t[18] = j),
          (t[19] = F),
          (t[20] = D),
          (t[21] = K))
        : (K = t[21]);
      var Q;
      return (
        t[22] !== K || t[23] !== T
          ? ((Q = T(K)), (t[22] = K), (t[23] = T), (t[24] = Q))
          : (Q = t[24]),
        Q
      );
    }
    l.default = _;
  },
  98,
);
