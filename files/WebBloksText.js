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
        a = o("react-compiler-runtime").c(26),
        i = e.externalStyle,
        l = e.node,
        u;
      a[0] !== l
        ? ((u = l.getExpression(h)), (a[0] = l), (a[1] = u))
        : (u = a[1]);
      var c = u,
        d;
      a[2] !== l ? ((d = l.get(C)), (a[2] = l), (a[3] = d)) : (d = a[3]);
      var m = d,
        T = l.get(b),
        D = l.get(R),
        x = l.get(L),
        $ = l.getSubNode(E),
        P = l.get(v),
        N = l.get(p),
        M = l.get(y),
        w = l.getSubNode(S),
        A;
      a[4] !== l ? ((A = l.get(k)), (a[4] = l), (a[5] = A)) : (A = a[5]);
      var F = A,
        O = l.get(_),
        B = l.get(f),
        W = l.get(g),
        q = o("WebBloksStyle").useStyle(l, i, c != null),
        U = q.ref,
        V = q.style,
        H = q.wrapper,
        G = q.wrapperProps,
        z = o("WebBloksTheme").useTheme().getTheme(),
        j =
          (P != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(P),
            )) ||
          ($ && o("WebBloksUtils").getRGBColorWithTheme($, z)),
        K = r("useClickablePropsForWebBloks")(l, c),
        Q = o("WebBloksComponentContext").useWebBloksContext(),
        X = Q.bloksContext,
        Y = Q.renderNode,
        J = X.objectSet.environment.fontFamilyMappings,
        Z =
          w != null
            ? Y(w)
            : m == null
              ? m
              : m === " "
                ? s.jsx(s.Fragment, { children: "\xA0" })
                : m;
      I(U, F, Z);
      var ee = o("WebBloksUtils").toPx(O),
        te = ee != null ? ee : o("WebBloksTextStyle").getLineHeight(B),
        ne = o("WebBloksTextStyle").getLineClampStyle(W),
        re = o("WebBloksTextStyle").getTextStyle(x),
        oe = o("WebBloksTextStyle").getVerticalSpacingStyles(te),
        ae = o("WebBloksUtils").toPx(D),
        ie =
          (t = o("WebBloksTextStyle").getFontFamily(N, J)) != null ? t : void 0,
        le =
          (n = o("WebBloksTextStyle").getFontVariationSettings(N, J, z, V)) !=
          null
            ? n
            : void 0,
        se = o("WebBloksUtils").toHyphen(T),
        ue = o("WebBloksBooleanUtils").isTrue(M) ? "line-through" : "",
        ce = j != null ? j : void 0,
        de;
      a[6] !== te ||
      a[7] !== V ||
      a[8] !== se ||
      a[9] !== ue ||
      a[10] !== ce ||
      a[11] !== ne ||
      a[12] !== re ||
      a[13] !== oe ||
      a[14] !== ae ||
      a[15] !== ie ||
      a[16] !== le
        ? ((de = babelHelpers.extends({}, V, ne, re, oe, {
            lineHeight: te,
            fontSize: ae,
            fontFamily: ie,
            fontVariationSettings: le,
            textAlign: se,
            textDecoration: ue,
            color: ce,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            padding: "unset",
            maxWidth: "100%",
          })),
          (a[6] = te),
          (a[7] = V),
          (a[8] = se),
          (a[9] = ue),
          (a[10] = ce),
          (a[11] = ne),
          (a[12] = re),
          (a[13] = oe),
          (a[14] = ae),
          (a[15] = ie),
          (a[16] = le),
          (a[17] = de))
        : (de = a[17]);
      var me;
      a[18] !== K || a[19] !== de || a[20] !== Z || a[21] !== G
        ? ((me = s.jsx(
            "span",
            babelHelpers.extends({}, G, { style: de }, K, { children: Z }),
          )),
          (a[18] = K),
          (a[19] = de),
          (a[20] = Z),
          (a[21] = G),
          (a[22] = me))
        : (me = a[22]);
      var pe;
      return (
        a[23] !== me || a[24] !== H
          ? ((pe = H(me)), (a[23] = me), (a[24] = H), (a[25] = pe))
          : (pe = a[25]),
        pe
      );
    }
    l.default = T;
  },
  98,
);
