__d(
  "WebBloksTextSpan",
  [
    "WebBloksAccessibilityUtils",
    "WebBloksAnchorTagExtensionHandlerUtils",
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
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
      d = "B",
      m = "C",
      p = "#",
      _ = ";",
      f = "$",
      g = "5",
      h = "6",
      y = "7",
      C = "8",
      b = "-",
      v = "&",
      S = "(",
      R = ")",
      L = "*",
      E = "+",
      k = ",",
      I = "4";
    function T(t) {
      var n = o("react-compiler-runtime").c(38),
        a = t.externalStyle,
        i = t.node,
        l;
      n[0] !== i
        ? ((l = i.getExpression(f)), (n[0] = i), (n[1] = l))
        : (l = n[1]);
      var s = l,
        c = i.get(S),
        T;
      n[2] !== i ? ((T = i.getSubNode(_)), (n[2] = i), (n[3] = T)) : (T = n[3]);
      var $ = T,
        P = i.getSubNode(R),
        N = i.get(g),
        M = i.get(h),
        w = i.get(y),
        A = i.get(C),
        F = i.get(L),
        O = i.get(E),
        B = i.get(k),
        W = i.get(p),
        q;
      n[4] !== i ? ((q = i.get(d)), (n[4] = i), (n[5] = q)) : (q = n[5]);
      var U = q,
        V = i.get(m),
        H = i.get(b),
        G = i.get(I),
        z = o("WebBloksStyle").useStyle(i, a, s != null),
        j = z.style,
        K = z.wrapper,
        Q = z.wrapperProps,
        X = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(i),
        Y = X !== null,
        J = Y ? "a" : "span",
        Z = (X == null ? void 0 : X.preferNativeNavigation) === !0,
        ee;
      n[6] !== X
        ? ((ee = X != null ? X : {}), (n[6] = X), (n[7] = ee))
        : (ee = n[7]);
      var te;
      if (n[8] !== ee) {
        var ne = ee,
          re = ne.preferNativeNavigation,
          oe = babelHelpers.objectWithoutPropertiesLoose(ne, e);
        ((te = oe), (n[8] = ee), (n[9] = te));
      } else te = n[9];
      var ae = r("useClickablePropsForWebBloks")(i, s, null, Y && !Z, Z),
        ie = o("WebBloksComponentContext").useWebBloksContext(),
        le = ie.bloksContext,
        se = ie.renderNode,
        ue = o("WebBloksTheme").useTheme().getTheme(),
        ce = le.objectSet.environment.fontFamilyMappings,
        de = P != null ? se(P) : i.get(v),
        me;
      n[10] !== a || n[11] !== $ || n[12] !== i
        ? ((me =
            $ != null
              ? u.jsx(r("WebBloksTextSpanImage"), { node: i, externalStyle: a })
              : null),
          (n[10] = a),
          (n[11] = $),
          (n[12] = i),
          (n[13] = me))
        : (me = n[13]);
      var pe = me,
        _e = D(V, s, $),
        fe = _e === "button" || _e === "link" ? 0 : void 0,
        ge;
      n[14] !== U || n[15] !== _e || n[16] !== fe
        ? ((ge = { role: _e, label: U, tabIndex: fe }),
          (n[14] = U),
          (n[15] = _e),
          (n[16] = fe),
          (n[17] = ge))
        : (ge = n[17]);
      var he = ge,
        ye = o("WebBloksTextStyle").getTextColor(c, B, ue),
        Ce = o("WebBloksTextStyle").getTextStyle(O),
        be = "inline",
        ve = o("WebBloksUtils").toPx(F),
        Se = o("WebBloksTextStyle").getFontFamily(W, ce),
        Re = x(H, G),
        Le = o("WebBloksTextStyle").getTextShadow(
          {
            shadow_color: N,
            shadow_offset_dx: M,
            shadow_offset_dy: w,
            shadow_radius: A,
          },
          ue,
        ),
        Ee;
      n[18] !== j ||
      n[19] !== ve ||
      n[20] !== Se ||
      n[21] !== Re ||
      n[22] !== Le ||
      n[23] !== ye ||
      n[24] !== Ce
        ? ((Ee = babelHelpers.extends({}, j, ye, Ce, {
            display: be,
            fontSize: ve,
            fontFamily: Se,
            textDecoration: Re,
            textShadow: Le,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          })),
          (n[18] = j),
          (n[19] = ve),
          (n[20] = Se),
          (n[21] = Re),
          (n[22] = Le),
          (n[23] = ye),
          (n[24] = Ce),
          (n[25] = Ee))
        : (Ee = n[25]);
      var ke;
      n[26] !== J ||
      n[27] !== he ||
      n[28] !== ae ||
      n[29] !== te ||
      n[30] !== pe ||
      n[31] !== Ee ||
      n[32] !== de ||
      n[33] !== Q
        ? ((ke = u.jsxs(
            J,
            babelHelpers.extends({}, Q, { style: Ee }, ae, he, te, {
              children: [de, pe],
            }),
          )),
          (n[26] = J),
          (n[27] = he),
          (n[28] = ae),
          (n[29] = te),
          (n[30] = pe),
          (n[31] = Ee),
          (n[32] = de),
          (n[33] = Q),
          (n[34] = ke))
        : (ke = n[34]);
      var Ie;
      return (
        n[35] !== ke || n[36] !== K
          ? ((Ie = K(ke)), (n[35] = ke), (n[36] = K), (n[37] = Ie))
          : (Ie = n[37]),
        Ie
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
