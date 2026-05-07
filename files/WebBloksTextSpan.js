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
      c = s.useMemo;
    function d(t) {
      var n = o("react-compiler-runtime").c(38),
        a = t.externalStyle,
        i = t.node,
        l;
      n[0] !== i
        ? ((l = i.getExpression("on_click")), (n[0] = i), (n[1] = l))
        : (l = n[1]);
      var s = l,
        c = i.get("text_color"),
        d;
      n[2] !== i
        ? ((d = i.getSubNode("image_component")), (n[2] = i), (n[3] = d))
        : (d = n[3]);
      var _ = d,
        f = i.getSubNode("text_provider"),
        g = i.get("shadow_color"),
        h = i.get("shadow_offset_dx"),
        y = i.get("shadow_offset_dy"),
        C = i.get("shadow_radius"),
        b = i.get("text_size"),
        v = i.get("text_style"),
        S = i.get("text_themed_color"),
        R = i.get("font_family"),
        L;
      n[4] !== i
        ? ((L = i.get("accessibility_label")), (n[4] = i), (n[5] = L))
        : (L = n[5]);
      var E = L,
        k = i.get("accessibility_role"),
        I = i.get("strikethrough"),
        T = i.get("underline"),
        D = o("WebBloksStyle").useStyle(i, a, s != null),
        x = D.style,
        $ = D.wrapper,
        P = D.wrapperProps,
        N = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(i),
        M = N !== null,
        w = M ? "a" : "span",
        A = (N == null ? void 0 : N.preferNativeNavigation) === !0,
        F;
      n[6] !== N
        ? ((F = N != null ? N : {}), (n[6] = N), (n[7] = F))
        : (F = n[7]);
      var O;
      if (n[8] !== F) {
        var B = F,
          W = B.preferNativeNavigation,
          q = babelHelpers.objectWithoutPropertiesLoose(B, e);
        ((O = q), (n[8] = F), (n[9] = O));
      } else O = n[9];
      var U = r("useClickablePropsForWebBloks")(i, s, null, M && !A, A),
        V = o("WebBloksComponentContext").useWebBloksContext(),
        H = V.bloksContext,
        G = V.renderNode,
        z = o("WebBloksTheme").useTheme().getTheme(),
        j = H.objectSet.environment.fontFamilyMappings,
        K = f != null ? G(f) : i.get("text"),
        Q;
      n[10] !== a || n[11] !== _ || n[12] !== i
        ? ((Q =
            _ != null
              ? u.jsx(r("WebBloksTextSpanImage"), { node: i, externalStyle: a })
              : null),
          (n[10] = a),
          (n[11] = _),
          (n[12] = i),
          (n[13] = Q))
        : (Q = n[13]);
      var X = Q,
        Y = m(k, s, _),
        J = Y === "button" || Y === "link" ? 0 : void 0,
        Z;
      n[14] !== E || n[15] !== Y || n[16] !== J
        ? ((Z = { role: Y, label: E, tabIndex: J }),
          (n[14] = E),
          (n[15] = Y),
          (n[16] = J),
          (n[17] = Z))
        : (Z = n[17]);
      var ee = Z,
        te = o("WebBloksTextStyle").getTextColor(c, S, z),
        ne = o("WebBloksTextStyle").getTextStyle(v),
        re = "inline",
        oe = o("WebBloksUtils").toPx(b),
        ae = o("WebBloksTextStyle").getFontFamily(R, j),
        ie = p(I, T),
        le = o("WebBloksTextStyle").getTextShadow(
          {
            shadow_color: g,
            shadow_offset_dx: h,
            shadow_offset_dy: y,
            shadow_radius: C,
          },
          z,
        ),
        se;
      n[18] !== x ||
      n[19] !== oe ||
      n[20] !== ae ||
      n[21] !== ie ||
      n[22] !== le ||
      n[23] !== te ||
      n[24] !== ne
        ? ((se = babelHelpers.extends({}, x, te, ne, {
            display: re,
            fontSize: oe,
            fontFamily: ae,
            textDecoration: ie,
            textShadow: le,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          })),
          (n[18] = x),
          (n[19] = oe),
          (n[20] = ae),
          (n[21] = ie),
          (n[22] = le),
          (n[23] = te),
          (n[24] = ne),
          (n[25] = se))
        : (se = n[25]);
      var ue;
      n[26] !== w ||
      n[27] !== ee ||
      n[28] !== U ||
      n[29] !== O ||
      n[30] !== X ||
      n[31] !== se ||
      n[32] !== K ||
      n[33] !== P
        ? ((ue = u.jsxs(
            w,
            babelHelpers.extends({}, P, { style: se }, U, ee, O, {
              children: [K, X],
            }),
          )),
          (n[26] = w),
          (n[27] = ee),
          (n[28] = U),
          (n[29] = O),
          (n[30] = X),
          (n[31] = se),
          (n[32] = K),
          (n[33] = P),
          (n[34] = ue))
        : (ue = n[34]);
      var ce;
      return (
        n[35] !== ue || n[36] !== $
          ? ((ce = $(ue)), (n[35] = ue), (n[36] = $), (n[37] = ce))
          : (ce = n[37]),
        ce
      );
    }
    function m(e, t, n) {
      if (e != null) {
        var r;
        return (r = o("WebBloksAccessibilityUtils")
          .WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING[e]) != null
          ? r
          : null;
      }
      return t == null ? null : n != null ? "button" : "link";
    }
    function p(e, t) {
      var n = [];
      if (
        (o("WebBloksBooleanUtils").isTrue(e) && n.push("line-through"),
        o("WebBloksBooleanUtils").isTrue(t) && n.push("underline"),
        n.length !== 0)
      )
        return n.join(" ");
    }
    l.default = d;
  },
  98,
);
