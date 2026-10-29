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
      D = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      x = o("WebBloksModel").defineWebBloksAttributeKey(";");
    function $(e) {
      var t = o("react-compiler-runtime").c(2);
      if (e.node.get(T) === "gone") return null;
      var n;
      return (
        t[0] !== e
          ? ((n = u.jsx(P, babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function P(t) {
      var n,
        a,
        i,
        l,
        s = t.externalStyle,
        c = t.node,
        m = c.getExpression(b),
        x = c.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        $ = c.getSubNode(f),
        P = c.get(T),
        M = c.get(p),
        F = c.get(_),
        O = c.get(h),
        B = c.get(y),
        W = c.get(C),
        q = c.getExpression(v),
        U = o("WebBloksUtils").isBloksModelEnabled(c, g),
        V = o("WebBloksStyle").useStyle(c, s, m != null && U, g),
        H = V.ref,
        G = V.style,
        z = V.wrapper,
        j = V.wrapperProps,
        K = r("WebBloksDecoration")($, c.get(g), m != null, H),
        Q = K[0],
        X = K[1],
        Y = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(c),
        J = Y !== null,
        Z = (Y == null ? void 0 : Y.preferNativeNavigation) === !0,
        ee = Y != null ? Y : {},
        te = ee.preferNativeNavigation,
        ne = babelHelpers.objectWithoutPropertiesLoose(ee, e),
        re = r("useClickablePropsForWebBloks")(
          c,
          m,
          j.disabled === !0 ? !1 : U,
          J && !Z,
          Z,
        ),
        oe = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        ae = oe.isRtl,
        ie = o("WebBloksComponentContext").useWebBloksContext(),
        le = ie.bloksContext,
        se = ie.executeOnNextTickCatch,
        ue = ie.renderChildren;
      d(
        function () {
          q != null && se(c, q, [c, le]);
        },
        [q],
      );
      var ce = $ == null ? void 0 : $.get(D),
        de = c.get(I),
        me = c.get(S),
        pe = c.get(L),
        _e = c.get(E),
        fe = c.get(k),
        ge = c.get(R),
        he = ae ? ge : fe,
        ye = ae ? fe : ge,
        Ce = he != null ? he : pe,
        be = ye != null ? ye : _e,
        ve = babelHelpers.extends({ pointerEvents: "none" }, G, A(P), Q, {
          alignContent: o("WebBloksUtils").toHyphen(M),
          alignItems: o("WebBloksUtils").toHyphen(F),
          flexDirection: o("WebBloksUtils").toHyphen(O),
          flexWrap: o("WebBloksUtils").toHyphen(B),
          justifyContent: o("WebBloksUtils").toHyphen(
            W != null ? W : G.justifyContent,
          ),
          paddingTop:
            (n = o("WebBloksUtils").toPx(de)) != null ? n : G.paddingTop,
          paddingBottom:
            (a = o("WebBloksUtils").toPx(me)) != null ? a : G.paddingBottom,
          paddingLeft:
            (i = o("WebBloksUtils").toPx(Ce)) != null ? i : G.paddingLeft,
          paddingRight:
            (l = o("WebBloksUtils").toPx(be)) != null ? l : G.paddingRight,
          isolation:
            (x == null ? void 0 : x.some(w)) === !0 ? "isolate" : void 0,
        });
      return z(
        J
          ? u.jsxs(
              "a",
              babelHelpers.extends(
                {},
                j,
                {
                  className: o("WebBloksStyle").WebBloksStyles.container,
                  style: ve,
                },
                re,
                ne,
                {
                  children: [ue(x), ce ? u.jsx(N, { drawable: ce }) : null, X],
                },
              ),
            )
          : u.jsxs(
              "div",
              babelHelpers.extends(
                {},
                j,
                {
                  className: o("WebBloksStyle").WebBloksStyles.container,
                  style: ve,
                },
                re,
                {
                  children: [ue(x), ce ? u.jsx(N, { drawable: ce }) : null, X],
                },
              ),
            ),
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
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
                className: M.foreground,
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
    var M = o("WebBloksStyle").createStyles({
      foreground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
      },
    });
    function w(e) {
      var t = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      return (
        t != null &&
        o("WebBloksUtils").isStyle(t, "bk.style.Base") &&
        Number(t.get(x)) < 0
      );
    }
    function A(e) {
      switch (e) {
        case "gone":
          return { display: "none" };
        case "invisible":
          return { visibility: "hidden" };
      }
    }
    l.default = $;
  },
  98,
);
