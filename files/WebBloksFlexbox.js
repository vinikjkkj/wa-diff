__d(
  "WebBloksFlexbox",
  [
    "WebBloksAnchorTagExtensionHandlerUtils",
    "WebBloksComponentContext",
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
      m = c.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(2);
      if (e.node.get("visibility") === "gone") return null;
      var n;
      return (
        t[0] !== e
          ? ((n = u.jsx(_, babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function _(t) {
      var n,
        a,
        i,
        l,
        s = t.externalStyle,
        c = t.node,
        m = c.getExpression("on_click"),
        p = c.getSubNodes("children"),
        _ = c.getSubNode("decoration"),
        g = c.get("visibility"),
        y = c.get("align_content"),
        C = c.get("align_items"),
        b = c.get("flex_direction"),
        v = c.get("flex_wrap"),
        S = c.get("justify_content"),
        R = c.getExpression("on_mount"),
        L = o("WebBloksUtils").isBloksModelEnabled(c),
        E = o("WebBloksStyle").useStyle(c, s, m != null && L),
        k = E.ref,
        I = E.style,
        T = E.wrapper,
        D = E.wrapperProps,
        x = r("WebBloksDecoration")(_, c.get("enabled"), m != null, k),
        $ = x[0],
        P = x[1],
        N = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(c),
        M = N !== null,
        w = M ? "a" : "div",
        A = (N == null ? void 0 : N.preferNativeNavigation) === !0,
        F = N != null ? N : {},
        O = F.preferNativeNavigation,
        B = babelHelpers.objectWithoutPropertiesLoose(F, e),
        W = r("useClickablePropsForWebBloks")(
          c,
          m,
          D.disabled === !0 ? !1 : L,
          M && !A,
          A,
        ),
        q = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        U = o("WebBloksComponentContext").useWebBloksContext(),
        V = U.bloksContext,
        H = U.executeOnNextTickCatch,
        G = U.renderChildren;
      d(
        function () {
          R != null && H(c, R, [c, V]);
        },
        [R],
      );
      var z = _ == null ? void 0 : _.get("foreground"),
        j = c.get("padding_top"),
        K = c.get("padding_bottom"),
        Q = c.get("padding_left"),
        X = c.get("padding_right"),
        Y = c.get("padding_start"),
        J = c.get("padding_end"),
        Z = q ? J : Y,
        ee = q ? Y : J,
        te = babelHelpers.extends({ pointerEvents: "none" }, I, h(g), $, {
          alignContent: o("WebBloksUtils").toHyphen(y),
          alignItems: o("WebBloksUtils").toHyphen(C),
          flexDirection: o("WebBloksUtils").toHyphen(b),
          flexWrap: o("WebBloksUtils").toHyphen(v),
          justifyContent: o("WebBloksUtils").toHyphen(
            S != null ? S : I.justifyContent,
          ),
          paddingTop:
            (n = o("WebBloksUtils").toPx(j)) != null ? n : I.paddingTop,
          paddingBottom:
            (a = o("WebBloksUtils").toPx(K)) != null ? a : I.paddingBottom,
          paddingLeft:
            (i = o("WebBloksUtils").toPx(Q != null ? Q : Z)) != null
              ? i
              : I.paddingLeft,
          paddingRight:
            (l = o("WebBloksUtils").toPx(X != null ? X : ee)) != null
              ? l
              : I.paddingRight,
        });
      return T(
        u.jsxs(
          w,
          babelHelpers.extends(
            {},
            D,
            {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: te,
            },
            W,
            B,
            { children: [G(p), z ? u.jsx(f, { drawable: z }) : null, P] },
          ),
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
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
                className: g.foreground,
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
    var g = o("WebBloksStyle").createStyles({
      foreground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
      },
    });
    function h(e) {
      switch (e) {
        case "gone":
          return { display: "none" };
        case "invisible":
          return { visibility: "hidden" };
      }
    }
    l.default = p;
  },
  98,
);
