__d(
  "CometColumnItem.react",
  [
    "BaseView.react",
    "CometColumnContext",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "XPlatReactEnvironment",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = [
        "align",
        "children",
        "expanding",
        "fallback",
        "paddingHorizontal",
        "paddingTop",
        "paddingVertical",
        "placeholder",
        "verticalAlign",
      ],
      u = ["fallback"],
      c = ["placeholder"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m.useContext,
      f = {
        divider: {
          borderTopColor: "x8cjs6t",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      },
      g = {
        divider: { display: "xh99ass", $$css: !0 },
        dividerMargin: {
          ":first-child:empty + *_marginTop": "xb939ph",
          $$css: !0,
        },
        marginFirstChild: { ":first-child_marginTop": "x14l7nz5", $$css: !0 },
        marginLastChild: { ":last-child_marginBottom": "xzboxd6", $$css: !0 },
      },
      h = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
      },
      y = {
        4: {
          paddingInlineStart: "x135b78x",
          paddingInlineEnd: "x11lfxj5",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        8: {
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        12: {
          paddingInlineStart: "x1g0dm76",
          paddingInlineEnd: "xpdmqnj",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        16: {
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        20: {
          paddingInlineStart: "x106a9eq",
          paddingInlineEnd: "x1xnnf8n",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      C = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
        20: { paddingTop: "x1cnzs8", $$css: !0 },
        24: { paddingTop: "x1p5oq8j", $$css: !0 },
        40: { paddingTop: "x13zrc24", $$css: !0 },
      },
      b = {
        4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: !0 },
        16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: !0 },
        20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: !0 },
        24: { paddingTop: "x1p5oq8j", paddingBottom: "xwxc41k", $$css: !0 },
        40: { paddingTop: "x13zrc24", paddingBottom: "x1t1ogtf", $$css: !0 },
      },
      v = {
        4: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: !0 },
        8: { marginTop: "x1gslohp", marginBottom: "x12nagc", $$css: !0 },
        12: { marginTop: "x1k70j0n", marginBottom: "xzueoph", $$css: !0 },
        16: { marginTop: "x1xmf6yo", marginBottom: "x1e56ztr", $$css: !0 },
        20: { marginTop: "x1anpbxc", marginBottom: "xyorhqc", $$css: !0 },
        24: { marginTop: "x14vqqas", marginBottom: "xod5an3", $$css: !0 },
        32: { marginTop: "xw7yly9", marginBottom: "x1yztbdb", $$css: !0 },
        40: { marginTop: "x1sy10c2", marginBottom: "xieb3on", $$css: !0 },
      },
      S = {
        bottom: { justifyContent: "x13a6bvl", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        "space-between": { justifyContent: "x1qughib", $$css: !0 },
      },
      R = {
        4: {
          marginInlineStart: "xdwrcjd",
          marginInlineEnd: "x2fvf9",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        8: {
          marginInlineStart: "x13fj5qh",
          marginInlineEnd: "x1xegmmw",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        12: {
          marginInlineStart: "x1diwwjn",
          marginInlineEnd: "xbmvrgn",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        16: {
          marginInlineStart: "xyqm7xq",
          marginInlineEnd: "x1ys307a",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        20: {
          marginInlineStart: "xqsn43r",
          marginInlineEnd: "x3aesyq",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      };
    function L(t) {
      var n,
        a,
        l,
        m,
        E = t.ref,
        k = babelHelpers.objectWithoutPropertiesLoose(t, e),
        I = (n = _(r("CometColumnContext"))) != null ? n : {},
        T = k.align,
        D = T === void 0 ? ((a = I.align) != null ? a : "stretch") : T,
        x = k.children,
        $ = k.expanding,
        P = $ === void 0 ? !1 : $,
        N = k.fallback,
        M = k.paddingHorizontal,
        w = M === void 0 ? ((l = I.paddingHorizontal) != null ? l : 0) : M,
        A = k.paddingTop,
        F = k.paddingVertical,
        O = F === void 0 ? 0 : F,
        B = k.placeholder,
        W = k.verticalAlign,
        q = W === void 0 ? "top" : W,
        U = babelHelpers.objectWithoutPropertiesLoose(k, s),
        V = (d || (d = r("stylex"))).compose(k.xstyle),
        H = p.jsxs(p.Fragment, {
          children: [
            I.hasDividers === !0 &&
              p.jsx(r("BaseView.react"), {
                role: "separator",
                xstyle: [
                  f.divider,
                  o("XPlatReactEnvironment").isWeb() && g.divider,
                  R[(m = I.paddingHorizontal) != null ? m : 0],
                  o("XPlatReactEnvironment").isWeb() &&
                    I.spacing != null &&
                    g.dividerMargin,
                ],
              }),
            p.jsx(
              r("BaseView.react"),
              babelHelpers.extends({}, U, {
                ref: E,
                xstyle: [
                  f.root,
                  P && f.expanding,
                  D !== "stretch" && h[D],
                  q !== "top" && S[q],
                  y[w],
                  b[O],
                  A != null && C[A],
                  I.spacing != null && [
                    v[I.spacing],
                    o("XPlatReactEnvironment").isWeb() &&
                      V.marginBottom == null &&
                      g.marginLastChild,
                    o("XPlatReactEnvironment").isWeb() &&
                      V.marginTop == null &&
                      g.marginFirstChild,
                  ],
                  k.xstyle,
                ],
                children: p.jsx(r("CometColumnContext").Provider, {
                  value: null,
                  children: x,
                }),
              }),
            ),
          ],
        });
      if (N !== void 0) {
        var G = k.fallback,
          z = babelHelpers.objectWithoutPropertiesLoose(k, u);
        N === null
          ? (H = p.jsx(r("CometErrorBoundary.react"), { children: H }))
          : (H = p.jsx(r("CometErrorBoundary.react"), {
              fallback: function (t, n) {
                return p.jsx(
                  L,
                  babelHelpers.extends({}, z, {
                    ref: E,
                    children: typeof N == "function" ? N(t, n) : N,
                  }),
                );
              },
              children: H,
            }));
      }
      if (B !== void 0) {
        var j = k.placeholder,
          K = babelHelpers.objectWithoutPropertiesLoose(k, c);
        H = p.jsx(r("CometPlaceholder.react"), {
          fallback:
            B != null
              ? p.jsx(L, babelHelpers.extends({}, K, { ref: E, children: B }))
              : null,
          name: i.id,
          children: H,
        });
      }
      return H;
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  98,
);
