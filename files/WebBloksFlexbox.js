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
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t,
        n,
        a,
        i,
        l = e.externalStyle,
        u = e.node,
        d = u.getExpression("on_click"),
        m = u.getSubNodes("children"),
        _ = u.getSubNode("decoration"),
        g = u.get("visibility"),
        h = u.get("align_content"),
        y = u.get("align_items"),
        C = u.get("flex_direction"),
        b = u.get("flex_wrap"),
        v = u.get("justify_content"),
        S = u.getExpression("on_mount"),
        R = o("WebBloksUtils").isBloksModelEnabled(u),
        L = o("WebBloksStyle").useStyle(u, l, d != null && R),
        E = L.ref,
        k = L.style,
        I = L.wrapper,
        T = L.wrapperProps,
        D = r("WebBloksDecoration")(u.getValues(), E),
        x = D[0],
        $ = D[1],
        P = o(
          "WebBloksAnchorTagExtensionHandlerUtils",
        ).useWebBloksAnchorTagExtensionProps(u),
        N = P !== null,
        M = N ? "a" : "div",
        w = r("useClickablePropsForWebBloks")(
          u,
          d,
          T.disabled === !0 ? !1 : R,
          N,
        ),
        A = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        F = o("WebBloksComponentContext").useWebBloksContext(),
        O = F.bloksContext,
        B = F.executeOnNextTickCatch,
        W = F.renderChildren;
      c(
        function () {
          S != null && B(u, S, [u, O]);
        },
        [S],
      );
      var q = _ == null ? void 0 : _.get("foreground"),
        U = u.get("padding_top"),
        V = u.get("padding_bottom"),
        H = u.get("padding_left"),
        G = u.get("padding_right"),
        z = u.get("padding_start"),
        j = u.get("padding_end"),
        K = A ? j : z,
        Q = A ? z : j,
        X = babelHelpers.extends({ pointerEvents: "none" }, k, f(g), x, {
          alignContent: o("WebBloksUtils").toHyphen(h),
          alignItems: o("WebBloksUtils").toHyphen(y),
          flexDirection: o("WebBloksUtils").toHyphen(C),
          flexWrap: o("WebBloksUtils").toHyphen(b),
          justifyContent: o("WebBloksUtils").toHyphen(
            v != null ? v : k.justifyContent,
          ),
          paddingTop:
            (t = o("WebBloksUtils").toPx(U)) != null ? t : k.paddingTop,
          paddingBottom:
            (n = o("WebBloksUtils").toPx(V)) != null ? n : k.paddingBottom,
          paddingLeft:
            (a = o("WebBloksUtils").toPx(H != null ? H : K)) != null
              ? a
              : k.paddingLeft,
          paddingRight:
            (i = o("WebBloksUtils").toPx(G != null ? G : Q)) != null
              ? i
              : k.paddingRight,
        });
      return I(
        s.jsxs(
          M,
          babelHelpers.extends(
            {},
            T,
            {
              className: o("WebBloksStyle").WebBloksStyles.container,
              style: X,
            },
            w,
            P,
            { children: [W(m), q ? s.jsx(p, { drawable: q }) : null, $] },
          ),
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.drawable,
        a = d(null),
        i = r("WebBloksDrawable")(n, a),
        l = r("useWebBloksDrawableNode")(n);
      if (l != null) return l;
      var u;
      return (
        t[0] !== i
          ? ((u = s.jsx("div", {
              "data-bloks-name": "bk.components.BoxDecoration",
              ref: a,
              className: _.foreground,
              style: i,
            })),
            (t[0] = i),
            (t[1] = u))
          : (u = t[1]),
        u
      );
    }
    var _ = o("WebBloksStyle").createStyles({
      foreground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
      },
    });
    function f(e) {
      switch (e) {
        case "gone":
          return { display: "none" };
        case "invisible":
          return { visibility: "hidden" };
      }
    }
    l.default = m;
  },
  98,
);
