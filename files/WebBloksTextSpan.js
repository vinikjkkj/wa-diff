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
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a
        ? ((i = a.getExpression("on_click")), (t[0] = a), (t[1] = i))
        : (i = t[1]);
      var l = i,
        u = a.get("text_color"),
        c;
      t[2] !== a
        ? ((c = a.getSubNode("image_component")), (t[2] = a), (t[3] = c))
        : (c = t[3]);
      var p = c,
        _ = a.getSubNode("text_provider"),
        f = a.get("shadow_color"),
        g = a.get("shadow_offset_dx"),
        h = a.get("shadow_offset_dy"),
        y = a.get("shadow_radius"),
        C = a.get("text_size"),
        b = a.get("text_style"),
        v = a.get("text_themed_color"),
        S = a.get("font_family"),
        R;
      t[4] !== a
        ? ((R = a.get("accessibility_label")), (t[4] = a), (t[5] = R))
        : (R = t[5]);
      var L = R,
        E = a.get("accessibility_role"),
        k = a.get("strikethrough"),
        I = a.get("underline"),
        T = o("WebBloksStyle").useStyle(a, n, l != null),
        D = T.style,
        x = T.wrapper,
        $ = T.wrapperProps,
        P = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(a),
        N = P !== null,
        M = N ? "a" : "span",
        w = r("useClickablePropsForWebBloks")(a, l, null, N),
        A = o("WebBloksComponentContext").useWebBloksContext(),
        F = A.bloksContext,
        O = A.renderNode,
        B = o("WebBloksTheme").useTheme().getTheme(),
        W = F.objectSet.environment.fontFamilyMappings,
        q = _ != null ? O(_) : a.get("text"),
        U;
      t[6] !== n || t[7] !== p || t[8] !== a
        ? ((U =
            p != null
              ? s.jsx(r("WebBloksTextSpanImage"), { node: a, externalStyle: n })
              : null),
          (t[6] = n),
          (t[7] = p),
          (t[8] = a),
          (t[9] = U))
        : (U = t[9]);
      var V = U,
        H = d(E, l, p),
        G = H === "button" || H === "link" ? 0 : void 0,
        z;
      t[10] !== L || t[11] !== H || t[12] !== G
        ? ((z = { role: H, label: L, tabIndex: G }),
          (t[10] = L),
          (t[11] = H),
          (t[12] = G),
          (t[13] = z))
        : (z = t[13]);
      var j = z,
        K = o("WebBloksTextStyle").getTextColor(u, v, B),
        Q = o("WebBloksTextStyle").getTextStyle(b),
        X = "inline",
        Y = o("WebBloksUtils").toPx(C),
        J = o("WebBloksTextStyle").getFontFamily(S, W),
        Z = m(k, I),
        ee = o("WebBloksTextStyle").getTextShadow(
          {
            shadow_color: f,
            shadow_offset_dx: g,
            shadow_offset_dy: h,
            shadow_radius: y,
          },
          B,
        ),
        te;
      t[14] !== D ||
      t[15] !== Y ||
      t[16] !== J ||
      t[17] !== Z ||
      t[18] !== ee ||
      t[19] !== K ||
      t[20] !== Q
        ? ((te = babelHelpers.extends({}, D, K, Q, {
            display: X,
            fontSize: Y,
            fontFamily: J,
            textDecoration: Z,
            textShadow: ee,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          })),
          (t[14] = D),
          (t[15] = Y),
          (t[16] = J),
          (t[17] = Z),
          (t[18] = ee),
          (t[19] = K),
          (t[20] = Q),
          (t[21] = te))
        : (te = t[21]);
      var ne;
      t[22] !== M ||
      t[23] !== j ||
      t[24] !== P ||
      t[25] !== w ||
      t[26] !== V ||
      t[27] !== te ||
      t[28] !== q ||
      t[29] !== $
        ? ((ne = s.jsxs(
            M,
            babelHelpers.extends({}, $, { style: te }, w, j, P, {
              children: [q, V],
            }),
          )),
          (t[22] = M),
          (t[23] = j),
          (t[24] = P),
          (t[25] = w),
          (t[26] = V),
          (t[27] = te),
          (t[28] = q),
          (t[29] = $),
          (t[30] = ne))
        : (ne = t[30]);
      var re;
      return (
        t[31] !== ne || t[32] !== x
          ? ((re = x(ne)), (t[31] = ne), (t[32] = x), (t[33] = re))
          : (re = t[33]),
        re
      );
    }
    function d(e, t, n) {
      if (e != null) {
        var r;
        return (r = o("WebBloksAccessibilityUtils")
          .WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING[e]) != null
          ? r
          : null;
      }
      return t == null ? null : n != null ? "button" : "link";
    }
    function m(e, t) {
      var n = [];
      if (
        (o("WebBloksBooleanUtils").isTrue(e) && n.push("line-through"),
        o("WebBloksBooleanUtils").isTrue(t) && n.push("underline"),
        n.length !== 0)
      )
        return n.join(" ");
    }
    l.default = c;
  },
  98,
);
