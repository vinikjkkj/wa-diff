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
        i,
        l = o("react-compiler-runtime").c(39),
        s = t.externalStyle,
        c = t.node,
        T;
      l[0] !== c
        ? ((T = c.getExpression(f)), (l[0] = c), (l[1] = T))
        : (T = l[1]);
      var $ = T,
        P = c.get(S),
        N;
      l[2] !== c ? ((N = c.getSubNode(_)), (l[2] = c), (l[3] = N)) : (N = l[3]);
      var M = N,
        w = c.getSubNode(R),
        A = c.get(g),
        F = c.get(h),
        O = c.get(y),
        B = c.get(C),
        W = c.get(L),
        q = c.get(E),
        U = c.get(k),
        V = c.get(p),
        H;
      l[4] !== c ? ((H = c.get(d)), (l[4] = c), (l[5] = H)) : (H = l[5]);
      var G = H,
        z = c.get(m),
        j = c.get(b),
        K = c.get(I),
        Q = o("WebBloksStyle").useStyle(c, s, $ != null),
        X = Q.style,
        Y = Q.wrapper,
        J = Q.wrapperProps,
        Z = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(c),
        ee = Z !== null,
        te = ee ? "a" : "span",
        ne = (Z == null ? void 0 : Z.preferNativeNavigation) === !0,
        re;
      l[6] !== Z
        ? ((re = Z != null ? Z : {}), (l[6] = Z), (l[7] = re))
        : (re = l[7]);
      var oe;
      if (l[8] !== re) {
        var ae = re,
          ie = ae.preferNativeNavigation,
          le = babelHelpers.objectWithoutPropertiesLoose(ae, e);
        ((oe = le), (l[8] = re), (l[9] = oe));
      } else oe = l[9];
      var se = r("useClickablePropsForWebBloks")(c, $, null, ee && !ne, ne),
        ue = o("WebBloksComponentContext").useWebBloksContext(),
        ce = ue.bloksContext,
        de = ue.renderNode,
        me = o("WebBloksTheme").useTheme().getTheme(),
        pe = ce.objectSet.environment.fontFamilyMappings,
        _e = w != null ? de(w) : c.get(v),
        fe;
      l[10] !== s || l[11] !== M || l[12] !== c
        ? ((fe =
            M != null
              ? u.jsx(r("WebBloksTextSpanImage"), { node: c, externalStyle: s })
              : null),
          (l[10] = s),
          (l[11] = M),
          (l[12] = c),
          (l[13] = fe))
        : (fe = l[13]);
      var ge = fe,
        he = D(z, $, M),
        ye = he === "button" || he === "link" ? 0 : void 0,
        Ce;
      l[14] !== G || l[15] !== he || l[16] !== ye
        ? ((Ce = { role: he, label: G, tabIndex: ye }),
          (l[14] = G),
          (l[15] = he),
          (l[16] = ye),
          (l[17] = Ce))
        : (Ce = l[17]);
      var be = Ce,
        ve = o("WebBloksTextStyle").getTextColor(P, U, me),
        Se = o("WebBloksTextStyle").getTextStyle(q),
        Re = "inline",
        Le = o("WebBloksUtils").toPx(W),
        Ee =
          (n = o("WebBloksTextStyle").getFontFamily(V, pe)) != null
            ? n
            : void 0,
        ke =
          (a = o("WebBloksTextStyle").getFontVariationSettings(V, pe, me, X)) !=
          null
            ? a
            : void 0,
        Ie = x(j, K),
        Te =
          (i = o("WebBloksTextStyle").getTextShadow(
            {
              shadow_color: A,
              shadow_offset_dx: F,
              shadow_offset_dy: O,
              shadow_radius: B,
            },
            me,
          )) != null
            ? i
            : void 0,
        De;
      l[18] !== X ||
      l[19] !== Le ||
      l[20] !== Ee ||
      l[21] !== ke ||
      l[22] !== Ie ||
      l[23] !== Te ||
      l[24] !== ve ||
      l[25] !== Se
        ? ((De = babelHelpers.extends({}, X, ve, Se, {
            display: Re,
            fontSize: Le,
            fontFamily: Ee,
            fontVariationSettings: ke,
            textDecoration: Ie,
            textShadow: Te,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          })),
          (l[18] = X),
          (l[19] = Le),
          (l[20] = Ee),
          (l[21] = ke),
          (l[22] = Ie),
          (l[23] = Te),
          (l[24] = ve),
          (l[25] = Se),
          (l[26] = De))
        : (De = l[26]);
      var xe;
      l[27] !== te ||
      l[28] !== be ||
      l[29] !== se ||
      l[30] !== oe ||
      l[31] !== ge ||
      l[32] !== De ||
      l[33] !== _e ||
      l[34] !== J
        ? ((xe = u.jsxs(
            te,
            babelHelpers.extends({}, J, { style: De }, se, be, oe, {
              children: [_e, ge],
            }),
          )),
          (l[27] = te),
          (l[28] = be),
          (l[29] = se),
          (l[30] = oe),
          (l[31] = ge),
          (l[32] = De),
          (l[33] = _e),
          (l[34] = J),
          (l[35] = xe))
        : (xe = l[35]);
      var $e;
      return (
        l[36] !== xe || l[37] !== Y
          ? (($e = Y(xe)), (l[36] = xe), (l[37] = Y), (l[38] = $e))
          : ($e = l[38]),
        $e
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
