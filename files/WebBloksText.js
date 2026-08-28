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
      m = 1e3 / 60,
      p = "#",
      _ = ";",
      f = "$",
      g = "&",
      h = "(",
      y = "2",
      C = ")",
      b = "*",
      v = "+",
      S = ",",
      R = "-",
      L = ".",
      E = "0",
      k = "1";
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
      var t = o("react-compiler-runtime").c(25),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a
        ? ((i = a.getExpression(h)), (t[0] = a), (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] !== a ? ((u = a.get(C)), (t[2] = a), (t[3] = u)) : (u = t[3]);
      var c = u,
        d = a.get(b),
        m = a.get(R),
        T = a.get(L),
        D = a.getSubNode(E),
        x = a.get(v),
        $ = a.get(p),
        P = a.get(y),
        N = a.getSubNode(S),
        M;
      t[4] !== a ? ((M = a.get(k)), (t[4] = a), (t[5] = M)) : (M = t[5]);
      var w = M,
        A = a.get(_),
        F = a.get(f),
        O = a.get(g),
        B = o("WebBloksStyle").useStyle(a, n, l != null),
        W = B.ref,
        q = B.style,
        U = B.wrapper,
        V = B.wrapperProps,
        H = o("WebBloksTheme").useTheme().getTheme(),
        G =
          (x != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(x),
            )) ||
          (D && o("WebBloksUtils").getRGBColorWithTheme(D, H)),
        z = r("useClickablePropsForWebBloks")(a, l),
        j = o("WebBloksComponentContext").useWebBloksContext(),
        K = j.bloksContext,
        Q = j.renderNode,
        X = K.objectSet.environment.fontFamilyMappings,
        Y =
          N != null
            ? Q(N)
            : c == null
              ? c
              : c === " "
                ? s.jsx(s.Fragment, { children: "\xA0" })
                : c;
      I(W, w, Y);
      var J = o("WebBloksUtils").toPx(A),
        Z = J != null ? J : o("WebBloksTextStyle").getLineHeight(F),
        ee = o("WebBloksTextStyle").getLineClampStyle(O),
        te = o("WebBloksTextStyle").getTextStyle(T),
        ne = o("WebBloksTextStyle").getVerticalSpacingStyles(Z),
        re = o("WebBloksUtils").toPx(m),
        oe = o("WebBloksTextStyle").getFontFamily($, X),
        ae = o("WebBloksUtils").toHyphen(d),
        ie = o("WebBloksBooleanUtils").isTrue(P) ? "line-through" : "",
        le;
      t[6] !== G ||
      t[7] !== Z ||
      t[8] !== q ||
      t[9] !== ie ||
      t[10] !== ee ||
      t[11] !== te ||
      t[12] !== ne ||
      t[13] !== re ||
      t[14] !== oe ||
      t[15] !== ae
        ? ((le = babelHelpers.extends({}, q, ee, te, ne, {
            lineHeight: Z,
            fontSize: re,
            fontFamily: oe,
            textAlign: ae,
            textDecoration: ie,
            color: G,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            padding: "unset",
            maxWidth: "100%",
          })),
          (t[6] = G),
          (t[7] = Z),
          (t[8] = q),
          (t[9] = ie),
          (t[10] = ee),
          (t[11] = te),
          (t[12] = ne),
          (t[13] = re),
          (t[14] = oe),
          (t[15] = ae),
          (t[16] = le))
        : (le = t[16]);
      var se;
      t[17] !== z || t[18] !== le || t[19] !== Y || t[20] !== V
        ? ((se = s.jsx(
            "span",
            babelHelpers.extends({}, V, { style: le }, z, { children: Y }),
          )),
          (t[17] = z),
          (t[18] = le),
          (t[19] = Y),
          (t[20] = V),
          (t[21] = se))
        : (se = t[21]);
      var ue;
      return (
        t[22] !== se || t[23] !== U
          ? ((ue = U(se)), (t[22] = se), (t[23] = U), (t[24] = ue))
          : (ue = t[24]),
        ue
      );
    }
    l.default = T;
  },
  98,
);
