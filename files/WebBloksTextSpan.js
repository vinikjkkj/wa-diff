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
        l = t.externalStyle,
        s = t.node,
        T = s.getExpression(f),
        $ = s.get(S),
        P = s.getSubNode(_),
        N = s.getSubNode(R),
        M = s.get(g),
        w = s.get(h),
        A = s.get(y),
        F = s.get(C),
        O = s.get(L),
        B = s.get(E),
        W = s.get(k),
        q = s.get(p),
        U = s.get(d),
        V = s.get(m),
        H = s.get(b),
        G = s.get(I),
        z = o("WebBloksStyle").useStyle(s, l, T != null),
        j = z.style,
        K = z.wrapper,
        Q = z.wrapperProps,
        X = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(s),
        Y = X !== null,
        J = Y ? "a" : "span",
        Z = (X == null ? void 0 : X.preferNativeNavigation) === !0,
        ee = X != null ? X : {},
        te = ee.preferNativeNavigation,
        ne = babelHelpers.objectWithoutPropertiesLoose(ee, e),
        re = r("useClickablePropsForWebBloks")(s, T, null, Y && !Z, Z),
        oe = o("WebBloksComponentContext").useWebBloksContext(),
        ae = oe.bloksContext,
        ie = oe.renderNode,
        le = o("WebBloksTheme").useTheme().getTheme(),
        se = ae.objectSet.environment.fontFamilyMappings,
        ue = N != null ? ie(N) : s.get(v),
        ce = c(
          function () {
            return P != null
              ? u.jsx(r("WebBloksTextSpanImage"), { node: s, externalStyle: l })
              : null;
          },
          [l, s, P],
        ),
        de = D(V, T, P),
        me = {
          role: de,
          label: U,
          tabIndex: de === "button" || de === "link" ? 0 : void 0,
        };
      return K(
        u.jsxs(
          J,
          babelHelpers.extends(
            {},
            Q,
            {
              style: babelHelpers.extends(
                {},
                j,
                o("WebBloksTextStyle").getTextColor($, W, le),
                o("WebBloksTextStyle").getTextStyle(B),
                {
                  display: "inline",
                  fontSize: o("WebBloksUtils").toPx(O),
                  fontFamily:
                    (n = o("WebBloksTextStyle").getFontFamily(q, se)) != null
                      ? n
                      : void 0,
                  fontVariationSettings:
                    (a = o("WebBloksTextStyle").getFontVariationSettings(
                      q,
                      se,
                      le,
                      j,
                    )) != null
                      ? a
                      : void 0,
                  textDecoration: x(H, G),
                  textShadow:
                    (i = o("WebBloksTextStyle").getTextShadow(
                      {
                        shadow_color: M,
                        shadow_offset_dx: w,
                        shadow_offset_dy: A,
                        shadow_radius: F,
                      },
                      le,
                    )) != null
                      ? i
                      : void 0,
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                },
              ),
            },
            re,
            me,
            ne,
            { children: [ue, ce] },
          ),
        ),
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
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
