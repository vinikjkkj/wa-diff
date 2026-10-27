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
        n = o("react-compiler-runtime").c(25),
        a = e.externalStyle,
        i = e.node,
        l;
      n[0] !== i
        ? ((l = i.getExpression(h)), (n[0] = i), (n[1] = l))
        : (l = n[1]);
      var u = l,
        c;
      n[2] !== i ? ((c = i.get(C)), (n[2] = i), (n[3] = c)) : (c = n[3]);
      var d = c,
        m = i.get(b),
        T = i.get(R),
        D = i.get(L),
        x = i.getSubNode(E),
        $ = i.get(v),
        P = i.get(p),
        N = i.get(y),
        M = i.getSubNode(S),
        w;
      n[4] !== i ? ((w = i.get(k)), (n[4] = i), (n[5] = w)) : (w = n[5]);
      var A = w,
        F = i.get(_),
        O = i.get(f),
        B = i.get(g),
        W = o("WebBloksStyle").useStyle(i, a, u != null),
        q = W.ref,
        U = W.style,
        V = W.wrapper,
        H = W.wrapperProps,
        G = o("WebBloksTheme").useTheme().getTheme(),
        z =
          ($ != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr($),
            )) ||
          (x && o("WebBloksUtils").getRGBColorWithTheme(x, G)),
        j = r("useClickablePropsForWebBloks")(i, u),
        K = o("WebBloksComponentContext").useWebBloksContext(),
        Q = K.bloksContext,
        X = K.renderNode,
        Y = Q.objectSet.environment.fontFamilyMappings,
        J =
          M != null
            ? X(M)
            : d == null
              ? d
              : d === " "
                ? s.jsx(s.Fragment, { children: "\xA0" })
                : d;
      I(q, A, J);
      var Z = o("WebBloksUtils").toPx(F),
        ee = Z != null ? Z : o("WebBloksTextStyle").getLineHeight(O),
        te = o("WebBloksTextStyle").getLineClampStyle(B),
        ne = o("WebBloksTextStyle").getTextStyle(D),
        re = o("WebBloksTextStyle").getVerticalSpacingStyles(ee),
        oe = o("WebBloksUtils").toPx(T),
        ae =
          (t = o("WebBloksTextStyle").getFontFamily(P, Y)) != null ? t : void 0,
        ie = o("WebBloksUtils").toHyphen(m),
        le = o("WebBloksBooleanUtils").isTrue(N) ? "line-through" : "",
        se = z != null ? z : void 0,
        ue;
      n[6] !== ee ||
      n[7] !== U ||
      n[8] !== le ||
      n[9] !== se ||
      n[10] !== te ||
      n[11] !== ne ||
      n[12] !== re ||
      n[13] !== oe ||
      n[14] !== ae ||
      n[15] !== ie
        ? ((ue = babelHelpers.extends({}, U, te, ne, re, {
            lineHeight: ee,
            fontSize: oe,
            fontFamily: ae,
            textAlign: ie,
            textDecoration: le,
            color: se,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            padding: "unset",
            maxWidth: "100%",
          })),
          (n[6] = ee),
          (n[7] = U),
          (n[8] = le),
          (n[9] = se),
          (n[10] = te),
          (n[11] = ne),
          (n[12] = re),
          (n[13] = oe),
          (n[14] = ae),
          (n[15] = ie),
          (n[16] = ue))
        : (ue = n[16]);
      var ce;
      n[17] !== j || n[18] !== ue || n[19] !== J || n[20] !== H
        ? ((ce = s.jsx(
            "span",
            babelHelpers.extends({}, H, { style: ue }, j, { children: J }),
          )),
          (n[17] = j),
          (n[18] = ue),
          (n[19] = J),
          (n[20] = H),
          (n[21] = ce))
        : (ce = n[21]);
      var de;
      return (
        n[22] !== ce || n[23] !== V
          ? ((de = V(ce)), (n[22] = ce), (n[23] = V), (n[24] = de))
          : (de = n[24]),
        de
      );
    }
    l.default = T;
  },
  98,
);
