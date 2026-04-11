__d(
  "CometLink.react",
  [
    "BaseLink.react",
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometLinkUtils.react",
    "FDSTextContext",
    "isCometRouterUrl",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "color_DEPRECATED",
        "disabled",
        "display_DEPRECATED",
        "href",
        "role",
        "target",
        "weight_DEPRECATED",
        "xstyle_DEPRECATED",
      ],
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = {
        disabled: {
          color: "x1dntmbh",
          textDecorationLine: "xkrqix3 x1ubmc1d",
          $$css: !0,
        },
        root: {
          color: "x1heor9g",
          textDecorationLine: "xkrqix3 x1sur9pj",
          $$css: !0,
        },
      },
      m = {
        block: { display: "x1lliihq", $$css: !0 },
        "inline-block": { display: "x1rg5ohu", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(39),
        a,
        i,
        l,
        s,
        p,
        _,
        f,
        g,
        h;
      if (n[0] !== t) {
        var y = t.ref,
          C = t.color_DEPRECATED,
          b = t.disabled,
          v = t.display_DEPRECATED,
          S = t.href,
          R = t.role,
          L = t.target,
          E = t.weight_DEPRECATED,
          k = t.xstyle_DEPRECATED,
          I = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((s = y),
          (a = C),
          (_ = b),
          (f = v),
          (i = S),
          (p = R),
          (g = L),
          (h = k),
          (l = I),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = p),
          (n[6] = _),
          (n[7] = f),
          (n[8] = g),
          (n[9] = h));
      } else
        ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (p = n[5]),
          (_ = n[6]),
          (f = n[7]),
          (g = n[8]),
          (h = n[9]));
      var T = _ === void 0 ? !1 : _,
        D = f === void 0 ? "inline" : f,
        x = o("FDSTextContext").useFDSTextContext(),
        $ = c(r("CometDangerouslySuppressInteractiveElementsContext")),
        P;
      n[10] !== i || n[11] !== g
        ? ((P =
            g === "_blank" ||
            (g == null && i != null && i !== "#" && !r("isCometRouterUrl")(i))),
          (n[10] = i),
          (n[11] = g),
          (n[12] = P))
        : (P = n[12]);
      var N = P,
        M = p == null && (i == null || i === "#") ? "button" : p,
        w = x == null ? void 0 : x.type,
        A;
      n[13] !== a || n[14] !== N || n[15] !== w
        ? ((A = o("CometLinkUtils.react").getLinkColorStyle(a, w, N)),
          (n[13] = a),
          (n[14] = N),
          (n[15] = w),
          (n[16] = A))
        : (A = n[16]);
      var F = A,
        O = x == null ? void 0 : x.type,
        B;
      n[17] !== O
        ? ((B = o("CometLinkUtils.react").getLinkWeightStyle__new(O)),
          (n[17] = O),
          (n[18] = B))
        : (B = n[18]);
      var W = B,
        q = T && d.disabled,
        U = D !== "inline" && m[D],
        V;
      n[19] !== F || n[20] !== W || n[21] !== q || n[22] !== U
        ? ((V = [q, F, W, U]),
          (n[19] = F),
          (n[20] = W),
          (n[21] = q),
          (n[22] = U),
          (n[23] = V))
        : (V = n[23]);
      var H = V;
      if ($) {
        var G;
        return (
          n[24] !== l.children || n[25] !== s || n[26] !== H
            ? ((G = u.jsx(o("react-strict-dom").html.span, {
                ref: s,
                style: H,
                children: l.children,
              })),
              (n[24] = l.children),
              (n[25] = s),
              (n[26] = H),
              (n[27] = G))
            : (G = n[27]),
          G
        );
      }
      var z = N ? "_blank" : g,
        j;
      n[28] !== H || n[29] !== h
        ? ((j = [d.root].concat(H, [h])), (n[28] = H), (n[29] = h), (n[30] = j))
        : (j = n[30]);
      var K;
      return (
        n[31] !== T ||
        n[32] !== i ||
        n[33] !== M ||
        n[34] !== l ||
        n[35] !== s ||
        n[36] !== z ||
        n[37] !== j
          ? ((K = u.jsx(
              r("BaseLink.react"),
              babelHelpers.extends({}, l, {
                disabled: T,
                display: "inline",
                href: i,
                ref: s,
                role: M,
                target: z,
                xstyle: j,
              }),
            )),
            (n[31] = T),
            (n[32] = i),
            (n[33] = M),
            (n[34] = l),
            (n[35] = s),
            (n[36] = z),
            (n[37] = j),
            (n[38] = K))
          : (K = n[38]),
        K
      );
    }
    l.default = p;
  },
  98,
);
