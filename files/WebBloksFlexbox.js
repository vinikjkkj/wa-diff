__d(
  "WebBloksFlexbox",
  [
    "WebBloksAnchorTagExtensionHandlerUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksDecoration",
    "WebBloksDrawable",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
    "useWebBloksDrawableNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["preferNativeNavigation"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("("),
      h = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      C = o("WebBloksModel").defineWebBloksAttributeKey(","),
      b = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("."),
      S = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      R = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      E = o("WebBloksModel").defineWebBloksAttributeKey("9"),
      k = o("WebBloksModel").defineWebBloksAttributeKey(":"),
      I = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      T = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      D = o("WebBloksModel").defineWebBloksAttributeKey("1");
    function x(e) {
      var t = o("react-compiler-runtime").c(2);
      if (e.node.get(T) === "gone") return null;
      var n;
      return (
        t[0] !== e
          ? ((n = u.jsx($, babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function $(t) {
      var n,
        a,
        i,
        l,
        s = t.externalStyle,
        c = t.node,
        m = c.getExpression(b),
        x = c.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        $ = c.getSubNode(f),
        N = c.get(T),
        w = c.get(p),
        A = c.get(_),
        F = c.get(h),
        O = c.get(y),
        B = c.get(C),
        W = c.getExpression(v),
        q = o("WebBloksUtils").isBloksModelEnabled(c, g),
        U = o("WebBloksStyle").useStyle(c, s, m != null && q, g),
        V = U.ref,
        H = U.style,
        G = U.wrapper,
        z = U.wrapperProps,
        j = r("WebBloksDecoration")($, c.get(g), m != null, V),
        K = j[0],
        Q = j[1],
        X = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(c),
        Y = X !== null,
        J = (X == null ? void 0 : X.preferNativeNavigation) === !0,
        Z = X != null ? X : {},
        ee = Z.preferNativeNavigation,
        te = babelHelpers.objectWithoutPropertiesLoose(Z, e),
        ne = r("useClickablePropsForWebBloks")(
          c,
          m,
          z.disabled === !0 ? !1 : q,
          Y && !J,
          J,
        ),
        re = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        oe = o("WebBloksComponentContext").useWebBloksContext(),
        ae = oe.bloksContext,
        ie = oe.executeOnNextTickCatch,
        le = oe.renderChildren;
      d(
        function () {
          W != null && ie(c, W, [c, ae]);
        },
        [W],
      );
      var se = $ == null ? void 0 : $.get(D),
        ue = c.get(I),
        ce = c.get(S),
        de = c.get(L),
        me = c.get(E),
        pe = c.get(k),
        _e = c.get(R),
        fe = re ? _e : pe,
        ge = re ? pe : _e,
        he = babelHelpers.extends({ pointerEvents: "none" }, H, M(N), K, {
          alignContent: o("WebBloksUtils").toHyphen(w),
          alignItems: o("WebBloksUtils").toHyphen(A),
          flexDirection: o("WebBloksUtils").toHyphen(F),
          flexWrap: o("WebBloksUtils").toHyphen(O),
          justifyContent: o("WebBloksUtils").toHyphen(
            B != null ? B : H.justifyContent,
          ),
          paddingTop:
            (n = o("WebBloksUtils").toPx(ue)) != null ? n : H.paddingTop,
          paddingBottom:
            (a = o("WebBloksUtils").toPx(ce)) != null ? a : H.paddingBottom,
          paddingLeft:
            (i = o("WebBloksUtils").toPx(de != null ? de : fe)) != null
              ? i
              : H.paddingLeft,
          paddingRight:
            (l = o("WebBloksUtils").toPx(me != null ? me : ge)) != null
              ? l
              : H.paddingRight,
        });
      return G(
        Y
          ? u.jsxs(
              "a",
              babelHelpers.extends(
                {},
                z,
                {
                  className: o("WebBloksStyle").WebBloksStyles.container,
                  style: he,
                },
                ne,
                te,
                {
                  children: [le(x), se ? u.jsx(P, { drawable: se }) : null, Q],
                },
              ),
            )
          : u.jsxs(
              "div",
              babelHelpers.extends(
                {},
                z,
                {
                  className: o("WebBloksStyle").WebBloksStyles.container,
                  style: he,
                },
                ne,
                {
                  children: [le(x), se ? u.jsx(P, { drawable: se }) : null, Q],
                },
              ),
            ),
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.drawable,
        a = o("WebBloksEnvironmentContext").useDataBloksName(),
        i = m(null),
        l = r("WebBloksDrawable")(n, i),
        s = r("useWebBloksDrawableNode")(n);
      if (s != null) return s;
      var c;
      t[0] !== a
        ? ((c = a("bk.components.BoxDecoration")), (t[0] = a), (t[1] = c))
        : (c = t[1]);
      var d;
      return (
        t[2] !== l || t[3] !== c
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, c, {
                ref: i,
                className: N.foreground,
                style: l,
              }),
            )),
            (t[2] = l),
            (t[3] = c),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    var N = o("WebBloksStyle").createStyles({
      foreground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
      },
    });
    function M(e) {
      switch (e) {
        case "gone":
          return { display: "none" };
        case "invisible":
          return { visibility: "hidden" };
      }
    }
    l.default = x;
  },
  98,
);
