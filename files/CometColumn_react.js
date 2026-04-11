__d(
  "CometColumn.react",
  [
    "BaseView.react",
    "CometColumnContext",
    "CometColumnItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "align",
        "children",
        "expanding",
        "hasDividers",
        "paddingHorizontal",
        "paddingTop",
        "paddingVertical",
        "spacing",
        "verticalAlign",
        "xstyle",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useMemo,
      p = {
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        inner: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        root: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      },
      _ = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
        20: { paddingTop: "x1cnzs8", $$css: !0 },
        24: { paddingTop: "x1p5oq8j", $$css: !0 },
        40: { paddingTop: "x13zrc24", $$css: !0 },
      },
      f = {
        4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: !0 },
        16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: !0 },
        20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: !0 },
        24: { paddingTop: "x1p5oq8j", paddingBottom: "xwxc41k", $$css: !0 },
        40: { paddingTop: "x13zrc24", paddingBottom: "x1t1ogtf", $$css: !0 },
      },
      g = {
        bottom: { justifyContent: "x13a6bvl", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        "space-between": { justifyContent: "x1qughib", $$css: !0 },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(39),
        a,
        i,
        l,
        s,
        c,
        m,
        h,
        y,
        C,
        b,
        v,
        S;
      n[0] !== t
        ? ((s = t.ref),
          (c = t.align),
          (a = t.children),
          (m = t.expanding),
          (h = t.hasDividers),
          (y = t.paddingHorizontal),
          (i = t.paddingTop),
          (C = t.paddingVertical),
          (b = t.spacing),
          (v = t.verticalAlign),
          (S = t.xstyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = m),
          (n[7] = h),
          (n[8] = y),
          (n[9] = C),
          (n[10] = b),
          (n[11] = v),
          (n[12] = S))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (m = n[6]),
          (h = n[7]),
          (y = n[8]),
          (C = n[9]),
          (b = n[10]),
          (v = n[11]),
          (S = n[12]));
      var R = c === void 0 ? null : c,
        L = m === void 0 ? !1 : m,
        E = h === void 0 ? !1 : h,
        k = y === void 0 ? null : y,
        I = C === void 0 ? 0 : C,
        T = b === void 0 ? null : b,
        D = v === void 0 ? "top" : v,
        x = d(r("CometColumnContext")),
        $;
      n[13] !== R || n[14] !== E || n[15] !== k || n[16] !== T
        ? (($ = { align: R, hasDividers: E, paddingHorizontal: k, spacing: T }),
          (n[13] = R),
          (n[14] = E),
          (n[15] = k),
          (n[16] = T),
          (n[17] = $))
        : ($ = n[17]);
      var P = $,
        N = L === !0 && p.expanding,
        M = f[I],
        w = i != null && _[i],
        A;
      n[18] !== M || n[19] !== w || n[20] !== N || n[21] !== S
        ? ((A = [p.root, N, M, w, S]),
          (n[18] = M),
          (n[19] = w),
          (n[20] = N),
          (n[21] = S),
          (n[22] = A))
        : (A = n[22]);
      var F = D !== "top" && g[D],
        O;
      n[23] !== F
        ? ((O = [p.inner, F]), (n[23] = F), (n[24] = O))
        : (O = n[24]);
      var B;
      n[25] !== a || n[26] !== P
        ? ((B = u.jsx(r("CometColumnContext").Provider, {
            value: P,
            children: a,
          })),
          (n[25] = a),
          (n[26] = P),
          (n[27] = B))
        : (B = n[27]);
      var W;
      n[28] !== O || n[29] !== B
        ? ((W = u.jsx(r("BaseView.react"), { xstyle: O, children: B })),
          (n[28] = O),
          (n[29] = B),
          (n[30] = W))
        : (W = n[30]);
      var q;
      n[31] !== l || n[32] !== s || n[33] !== A || n[34] !== W
        ? ((q = u.jsx(
            r("BaseView.react"),
            babelHelpers.extends({}, l, { ref: s, xstyle: A, children: W }),
          )),
          (n[31] = l),
          (n[32] = s),
          (n[33] = A),
          (n[34] = W),
          (n[35] = q))
        : (q = n[35]);
      var U = q;
      if (x != null) {
        var V = L != null ? L : void 0,
          H;
        return (
          n[36] !== U || n[37] !== V
            ? ((H = u.jsx(r("CometColumnItem.react"), {
                expanding: V,
                children: U,
              })),
              (n[36] = U),
              (n[37] = V),
              (n[38] = H))
            : (H = n[38]),
          H
        );
      }
      return U;
    }
    l.default = h;
  },
  98,
);
