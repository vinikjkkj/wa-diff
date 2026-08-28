__d(
  "WebBloksFlexbox",
  [
    "WebBloksAnchorTagExtensionHandlerUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksDecoration",
    "WebBloksDrawable",
    "WebBloksEnvironmentContext",
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
      p = "#",
      _ = "$",
      f = "&",
      g = "(",
      h = ")",
      y = "*",
      C = ",",
      b = "-",
      v = ".",
      S = "6",
      R = "7",
      L = "8",
      E = "9",
      k = ":",
      I = ";",
      T = "1",
      D = "1";
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
        U = o("WebBloksStyle").useStyle(c, s, m != null && q),
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
        J = Y ? "a" : "div",
        Z = (X == null ? void 0 : X.preferNativeNavigation) === !0,
        ee = X != null ? X : {},
        te = ee.preferNativeNavigation,
        ne = babelHelpers.objectWithoutPropertiesLoose(ee, e),
        re = r("useClickablePropsForWebBloks")(
          c,
          m,
          z.disabled === !0 ? !1 : q,
          Y && !Z,
          Z,
        ),
        oe = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        ae = o("WebBloksComponentContext").useWebBloksContext(),
        ie = ae.bloksContext,
        le = ae.executeOnNextTickCatch,
        se = ae.renderChildren;
      d(
        function () {
          W != null && le(c, W, [c, ie]);
        },
        [W],
      );
      var ue = $ == null ? void 0 : $.get(D),
        ce = c.get(I),
        de = c.get(S),
        me = c.get(L),
        pe = c.get(E),
        _e = c.get(k),
        fe = c.get(R),
        ge = oe ? fe : _e,
        he = oe ? _e : fe,
        ye = babelHelpers.extends({ pointerEvents: "none" }, H, M(N), K, {
          alignContent: o("WebBloksUtils").toHyphen(w),
          alignItems: o("WebBloksUtils").toHyphen(A),
          flexDirection: o("WebBloksUtils").toHyphen(F),
          flexWrap: o("WebBloksUtils").toHyphen(O),
          justifyContent: o("WebBloksUtils").toHyphen(
            B != null ? B : H.justifyContent,
          ),
          paddingTop:
            (n = o("WebBloksUtils").toPx(ce)) != null ? n : H.paddingTop,
          paddingBottom:
            (a = o("WebBloksUtils").toPx(de)) != null ? a : H.paddingBottom,
          paddingLeft:
            (i = o("WebBloksUtils").toPx(me != null ? me : ge)) != null
              ? i
              : H.paddingLeft,
          paddingRight:
            (l = o("WebBloksUtils").toPx(pe != null ? pe : he)) != null
              ? l
              : H.paddingRight,
        });
      return G(
        u.jsxs(
          J,
          babelHelpers.extends(
            {},
            z,
            {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: ye,
            },
            re,
            ne,
            { children: [se(x), ue ? u.jsx(P, { drawable: ue }) : null, Q] },
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
