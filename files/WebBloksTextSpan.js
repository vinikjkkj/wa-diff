__d(
  "WebBloksTextSpan",
  [
    "WebBloksAccessibilityUtils",
    "WebBloksAnchorTagExtensionHandlerUtils",
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksTextSpanImage",
    "WebBloksTextStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["preferNativeNavigation"],
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = o("WebBloksModel").defineWebBloksAttributeKey("B"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("C"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("5"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      S = o("WebBloksModel").defineWebBloksAttributeKey("("),
      R = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      E = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      k = o("WebBloksModel").defineWebBloksAttributeKey(","),
      I = o("WebBloksModel").defineWebBloksAttributeKey("4");
    function T(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(38),
        l = t.externalStyle,
        s = t.node,
        c;
      i[0] !== s
        ? ((c = s.getExpression(f)), (i[0] = s), (i[1] = c))
        : (c = i[1]);
      var T = c,
        $ = s.get(S),
        P;
      i[2] !== s ? ((P = s.getSubNode(_)), (i[2] = s), (i[3] = P)) : (P = i[3]);
      var N = P,
        M = s.getSubNode(R),
        w = s.get(g),
        A = s.get(h),
        F = s.get(y),
        O = s.get(C),
        B = s.get(L),
        W = s.get(E),
        q = s.get(k),
        U = s.get(p),
        V;
      i[4] !== s ? ((V = s.get(d)), (i[4] = s), (i[5] = V)) : (V = i[5]);
      var H = V,
        G = s.get(m),
        z = s.get(b),
        j = s.get(I),
        K = o("WebBloksStyle").useStyle(s, l, T != null),
        Q = K.style,
        X = K.wrapper,
        Y = K.wrapperProps,
        J = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(s),
        Z = J !== null,
        ee = Z ? "a" : "span",
        te = (J == null ? void 0 : J.preferNativeNavigation) === !0,
        ne;
      i[6] !== J
        ? ((ne = J != null ? J : {}), (i[6] = J), (i[7] = ne))
        : (ne = i[7]);
      var re;
      if (i[8] !== ne) {
        var oe = ne,
          ae = oe.preferNativeNavigation,
          ie = babelHelpers.objectWithoutPropertiesLoose(oe, e);
        ((re = ie), (i[8] = ne), (i[9] = re));
      } else re = i[9];
      var le = r("useClickablePropsForWebBloks")(s, T, null, Z && !te, te),
        se = o("WebBloksComponentContext").useWebBloksContext(),
        ue = se.bloksContext,
        ce = se.renderNode,
        de = o("WebBloksTheme").useTheme().getTheme(),
        me = ue.objectSet.environment.fontFamilyMappings,
        pe = M != null ? ce(M) : s.get(v),
        _e;
      i[10] !== l || i[11] !== N || i[12] !== s
        ? ((_e =
            N != null
              ? u.jsx(r("WebBloksTextSpanImage"), { node: s, externalStyle: l })
              : null),
          (i[10] = l),
          (i[11] = N),
          (i[12] = s),
          (i[13] = _e))
        : (_e = i[13]);
      var fe = _e,
        ge = D(G, T, N),
        he = ge === "button" || ge === "link" ? 0 : void 0,
        ye;
      i[14] !== H || i[15] !== ge || i[16] !== he
        ? ((ye = { role: ge, label: H, tabIndex: he }),
          (i[14] = H),
          (i[15] = ge),
          (i[16] = he),
          (i[17] = ye))
        : (ye = i[17]);
      var Ce = ye,
        be = o("WebBloksTextStyle").getTextColor($, q, de),
        ve = o("WebBloksTextStyle").getTextStyle(W),
        Se = "inline",
        Re = o("WebBloksUtils").toPx(B),
        Le =
          (n = o("WebBloksTextStyle").getFontFamily(U, me)) != null
            ? n
            : void 0,
        Ee = x(z, j),
        ke =
          (a = o("WebBloksTextStyle").getTextShadow(
            {
              shadow_color: w,
              shadow_offset_dx: A,
              shadow_offset_dy: F,
              shadow_radius: O,
            },
            de,
          )) != null
            ? a
            : void 0,
        Ie;
      i[18] !== Q ||
      i[19] !== Re ||
      i[20] !== Le ||
      i[21] !== Ee ||
      i[22] !== ke ||
      i[23] !== be ||
      i[24] !== ve
        ? ((Ie = babelHelpers.extends({}, Q, be, ve, {
            display: Se,
            fontSize: Re,
            fontFamily: Le,
            textDecoration: Ee,
            textShadow: ke,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          })),
          (i[18] = Q),
          (i[19] = Re),
          (i[20] = Le),
          (i[21] = Ee),
          (i[22] = ke),
          (i[23] = be),
          (i[24] = ve),
          (i[25] = Ie))
        : (Ie = i[25]);
      var Te;
      i[26] !== ee ||
      i[27] !== Ce ||
      i[28] !== le ||
      i[29] !== re ||
      i[30] !== fe ||
      i[31] !== Ie ||
      i[32] !== pe ||
      i[33] !== Y
        ? ((Te = u.jsxs(
            ee,
            babelHelpers.extends({}, Y, { style: Ie }, le, Ce, re, {
              children: [pe, fe],
            }),
          )),
          (i[26] = ee),
          (i[27] = Ce),
          (i[28] = le),
          (i[29] = re),
          (i[30] = fe),
          (i[31] = Ie),
          (i[32] = pe),
          (i[33] = Y),
          (i[34] = Te))
        : (Te = i[34]);
      var De;
      return (
        i[35] !== Te || i[36] !== X
          ? ((De = X(Te)), (i[35] = Te), (i[36] = X), (i[37] = De))
          : (De = i[37]),
        De
      );
    }
    function D(e, t, n) {
      if (e != null) {
        var r;
        return (r = o("WebBloksAccessibilityUtils")
          .WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING[e]) != null
          ? r
          : null;
      }
      return t == null ? null : n != null ? "button" : "link";
    }
    function x(e, t) {
      var n = [];
      if (
        (o("WebBloksBooleanUtils").isTrue(e) && n.push("line-through"),
        o("WebBloksBooleanUtils").isTrue(t) && n.push("underline"),
        n.length !== 0)
      )
        return n.join(" ");
    }
    l.default = T;
  },
  98,
);
