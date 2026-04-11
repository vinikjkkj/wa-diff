__d(
  "CometRow.react",
  [
    "BaseRow.react",
    "CometColumnContext",
    "CometColumnItem.react",
    "CometRowContext",
    "CometRowItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = [
        "children",
        "paddingHorizontal",
        "paddingVertical",
        "paddingTop",
        "spacing",
        "spacingHorizontal",
        "spacingVertical",
        "xstyle",
      ],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useMemo,
      _ = {
        0: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        4: {
          paddingInlineEnd: "x11lfxj5",
          paddingInlineStart: "x135b78x",
          $$css: !0,
        },
        8: {
          paddingInlineEnd: "xf159sx",
          paddingInlineStart: "xmzvs34",
          $$css: !0,
        },
        12: {
          paddingInlineEnd: "xpdmqnj",
          paddingInlineStart: "x1g0dm76",
          $$css: !0,
        },
        16: {
          paddingInlineEnd: "xv54qhq",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      },
      f = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
      },
      g = {
        0: { paddingBottom: "x18d9i69", paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingBottom: "xjkvuk6", paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingBottom: "xwib8y2", paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingBottom: "xsag5q8", paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingBottom: "x1l90r2v", paddingTop: "xyamay9", $$css: !0 },
      },
      h = {
        0: { $$css: !0 },
        4: {
          marginInlineEnd: "x11lt19s",
          marginInlineStart: "xe9ewy2",
          $$css: !0,
        },
        8: {
          marginInlineEnd: "x1lxpwgx",
          marginInlineStart: "x165d6jo",
          $$css: !0,
        },
        12: {
          marginInlineEnd: "x1ws5yxj",
          marginInlineStart: "xw01apr",
          $$css: !0,
        },
        16: {
          marginInlineEnd: "x1w5wx5t",
          marginInlineStart: "x1qfufaz",
          $$css: !0,
        },
        24: {
          marginInlineEnd: "xbcz3fp",
          marginInlineStart: "x18xomjl",
          $$css: !0,
        },
        32: {
          marginInlineEnd: "xd9ej83",
          marginInlineStart: "x162z183",
          $$css: !0,
        },
      },
      y = {
        0: { $$css: !0 },
        4: { marginBottom: "xmgb6t1", marginTop: "x1kgmq87", $$css: !0 },
        8: { marginBottom: "x4vbgl9", marginTop: "x1rdy4ex", $$css: !0 },
        12: { marginBottom: "x4cne27", marginTop: "xifccgj", $$css: !0 },
        16: { marginBottom: "x1wsgfga", marginTop: "x9otpla", $$css: !0 },
        24: { marginBottom: "xh3wvx0", marginTop: "x7wgvq7", $$css: !0 },
        32: { marginBottom: "x1oo3vh0", marginTop: "xwya9rg", $$css: !0 },
      };
    function C(t) {
      var n = o("react-compiler-runtime").c(37),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = m(r("CometColumnContext")),
        u = m(r("CometRowContext")),
        d = (l == null ? void 0 : l.paddingHorizontal) != null ? 0 : 12,
        p = (l == null ? void 0 : l.spacing) != null ? 0 : 16,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I;
      if (n[3] !== a) {
        var T = a;
        ((C = T.children),
          (S = T.paddingHorizontal),
          (R = T.paddingVertical),
          (b = T.paddingTop),
          (L = T.spacing),
          (E = T.spacingHorizontal),
          (k = T.spacingVertical),
          (I = T.xstyle),
          (v = babelHelpers.objectWithoutPropertiesLoose(T, s)),
          (n[3] = a),
          (n[4] = C),
          (n[5] = b),
          (n[6] = v),
          (n[7] = S),
          (n[8] = R),
          (n[9] = L),
          (n[10] = E),
          (n[11] = k),
          (n[12] = I));
      } else
        ((C = n[4]),
          (b = n[5]),
          (v = n[6]),
          (S = n[7]),
          (R = n[8]),
          (L = n[9]),
          (E = n[10]),
          (k = n[11]),
          (I = n[12]));
      var D = S === void 0 ? d : S,
        x = R === void 0 ? 0 : R,
        $ = L === void 0 ? 12 : L,
        P = E === void 0 ? $ : E,
        N = k === void 0 ? $ : k,
        M;
      n[13] !== P || n[14] !== N
        ? ((M = { spacingHorizontal: P, spacingVertical: N }),
          (n[13] = P),
          (n[14] = N),
          (n[15] = M))
        : (M = n[15]);
      var w = M,
        A = _[D],
        F = g[x],
        O = b != null ? f[b] : a.paddingVertical == null ? f[p] : null,
        B = h[P],
        W = y[N],
        q;
      n[16] !== B ||
      n[17] !== W ||
      n[18] !== A ||
      n[19] !== F ||
      n[20] !== O ||
      n[21] !== I
        ? ((q = [A, F, O, B, W, I]),
          (n[16] = B),
          (n[17] = W),
          (n[18] = A),
          (n[19] = F),
          (n[20] = O),
          (n[21] = I),
          (n[22] = q))
        : (q = n[22]);
      var U;
      n[23] !== w || n[24] !== C
        ? ((U = c.jsx(r("CometRowContext").Provider, {
            value: w,
            children: C,
          })),
          (n[23] = w),
          (n[24] = C),
          (n[25] = U))
        : (U = n[25]);
      var V;
      n[26] !== i || n[27] !== v || n[28] !== q || n[29] !== U
        ? ((V = c.jsx(
            r("BaseRow.react"),
            babelHelpers.extends({}, v, { ref: i, xstyle: q, children: U }),
          )),
          (n[26] = i),
          (n[27] = v),
          (n[28] = q),
          (n[29] = U),
          (n[30] = V))
        : (V = n[30]);
      var H = V;
      if (u != null) {
        var G;
        return (
          n[31] !== H || n[32] !== v.expanding
            ? ((G = c.jsx(r("CometRowItem.react"), {
                expanding: v.expanding,
                children: H,
              })),
              (n[31] = H),
              (n[32] = v.expanding),
              (n[33] = G))
            : (G = n[33]),
          G
        );
      }
      if (l != null) {
        var z;
        return (
          n[34] !== H || n[35] !== v.expanding
            ? ((z = c.jsx(r("CometColumnItem.react"), {
                expanding: v.expanding,
                children: H,
              })),
              (n[34] = H),
              (n[35] = v.expanding),
              (n[36] = z))
            : (z = n[36]),
          z
        );
      }
      return H;
    }
    l.default = C;
  },
  98,
);
