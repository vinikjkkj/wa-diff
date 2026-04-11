__d(
  "FDSTextImpl.react",
  [
    "BaseHeading.react",
    "BaseTextContext",
    "CometDensityModeContext",
    "CometTextLangContext",
    "CometTextTypography",
    "FDSLineClamp.react",
    "FDSTextContext",
    "MetaConfig",
    "cr:2099",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useContext;
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = {}), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var p =
        (e = n("cr:2099")) != null ? e : { useTranslationKeyForTextParent: m },
      _ = p.useTranslationKeyForTextParent,
      f = {
        base: {
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          wordBreak: "x13faqbe",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        block: {
          display: "x1lliihq",
          "::after_content": "x1s928wv",
          "::after_display": "xhkezso",
          "::after_height": "x1gmr53x",
          "::before_content": "x1cpjm7i",
          "::before_display": "x1fgarty",
          "::before_height": "x1943h6x",
          $$css: !0,
        },
        heading: { maxWidth: "x193iq5w", minWidth: "xeuugli", $$css: !0 },
        preserveNewLines: { whiteSpace: "x1fj9vlw", $$css: !0 },
      },
      g = {
        center: { textAlign: "x2b8uid", $$css: !0 },
        end: { textAlign: "xp4054r", $$css: !0 },
        start: { textAlign: "x1yc453h", $$css: !0 },
      },
      h = {
        blueLink: { color: "x1fey0fg", $$css: !0 },
        disabled: { color: "x1dntmbh", $$css: !0 },
        disabledButton: { color: "x1x80s81", $$css: !0 },
        highlight: { color: "x1qq9wsj", $$css: !0 },
        linkOnMedia: { color: "x9kptjx", $$css: !0 },
        negative: { color: "x1a1m0xk", $$css: !0 },
        placeholder: { color: "x12scifz", $$css: !0 },
        positive: { color: "x6u5lvz", $$css: !0 },
        primary: { color: "xzsf02u", $$css: !0 },
        primaryButton: { color: "xtk6v10", $$css: !0 },
        primaryButtonTextOnMedia: { color: "x1yeb1j6", $$css: !0 },
        primaryDeemphasizedButton: { color: "x1mvi0mv", $$css: !0 },
        primaryOnColor: { color: "x1ko2xvj", $$css: !0 },
        primaryOnMedia: { color: "x17z8epw", $$css: !0 },
        secondary: { color: "xi81zsa", $$css: !0 },
        secondaryButton: { color: "x1dem4cn", $$css: !0 },
        secondaryOnColor: { color: "xj0d7sl", $$css: !0 },
        secondaryOnMedia: { color: "xkxfvhb", $$css: !0 },
        selectedOption: { color: "x1qoxp87", $$css: !0 },
        tertiary: { color: "x12scifz", $$css: !0 },
        tooltip: { color: "xzsf02u", $$css: !0 },
        white: { color: "x14ctfv", $$css: !0 },
      },
      y = {
        12: { fontSize: "x1pg5gke", lineHeight: "xvq8zen", $$css: !0 },
        13: { fontSize: "x1nxh6w3", lineHeight: "x1sibtaa", $$css: !0 },
        14: { fontSize: "x1f6kntn", lineHeight: "x1ruc54x", $$css: !0 },
        15: { fontSize: "x6prxxf", lineHeight: "xvq8zen", $$css: !0 },
        16: { fontSize: "x1jchvi3", lineHeight: "x132q4wb", $$css: !0 },
        17: { fontSize: "x1lkfr7t", lineHeight: "x1lbecb7", $$css: !0 },
        20: { fontSize: "x1603h9y", lineHeight: "x1u7k74", $$css: !0 },
        24: { fontSize: "xngnso2", lineHeight: "x1qb5hxa", $$css: !0 },
        28: { fontSize: "x1q74xe4", lineHeight: "xyesn5m", $$css: !0 },
        32: { fontSize: "x579bpy", lineHeight: "xjkpybl", $$css: !0 },
      },
      C = {
        12: { fontSize: "x1pg5gke", lineHeight: "xvq8zen", $$css: !0 },
        13: { fontSize: "x1pg5gke", lineHeight: "x1sibtaa", $$css: !0 },
        14: { $$css: !0 },
        15: { fontSize: "x1f6kntn", lineHeight: "xvq8zen", $$css: !0 },
        16: { $$css: !0 },
        17: { fontSize: "x1jchvi3", lineHeight: "x1lbecb7", $$css: !0 },
        20: { fontSize: "x1603h9y", lineHeight: "x1u7k74", $$css: !0 },
        24: { fontSize: "xngnso2", lineHeight: "x1qb5hxa", $$css: !0 },
        28: { fontSize: "x1q74xe4", lineHeight: "xyesn5m", $$css: !0 },
        32: { fontSize: "x579bpy", lineHeight: "xjkpybl", $$css: !0 },
      },
      b = {
        bold: { fontWeight: "x1xlr1w8", $$css: !0 },
        medium: { fontWeight: "xk50ysn", $$css: !0 },
        normal: { fontWeight: "xo1l8bm", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
      },
      v = {
        auto: { hyphens: "xkjl1po", $$css: !0 },
        manual: { hyphens: "xxydokm", $$css: !0 },
      },
      S = {
        0: { $$css: !0 },
        1: { "::before_marginTop": "x1ckan80", $$css: !0 },
        2: { "::before_marginTop": "x1s3etm8", $$css: !0 },
        3: { "::before_marginTop": "x1tu3fi", $$css: !0 },
        4: { "::before_marginTop": "x4zkp8e", $$css: !0 },
        5: { "::before_marginTop": "xudqn12", $$css: !0 },
        6: { "::before_marginTop": "xtoi2st", $$css: !0 },
        7: { "::before_marginTop": "x14z4hjw", $$css: !0 },
        8: { "::before_marginTop": "x1ill7wo", $$css: !0 },
        9: { "::before_marginTop": "xhau9xz", $$css: !0 },
        10: { "::before_marginTop": "x14qwyeo", $$css: !0 },
      },
      R = {
        1: { "::after_marginBottom": "xo8pqpo", $$css: !0 },
        2: { "::after_marginBottom": "xlf94lp", $$css: !0 },
        3: { "::after_marginBottom": "x676frb", $$css: !0 },
        4: { "::after_marginBottom": "x3x7a5m", $$css: !0 },
        5: { "::after_marginBottom": "x41vudc", $$css: !0 },
        6: { "::after_marginBottom": "xw06pyt", $$css: !0 },
        7: { "::after_marginBottom": "x1g2y4wz", $$css: !0 },
        8: { "::after_marginBottom": "x1x48ksl", $$css: !0 },
        9: { "::after_marginBottom": "x1guzi96", $$css: !0 },
        10: { "::after_marginBottom": "x1y9wsrc", $$css: !0 },
      },
      L = {
        1: { paddingBottom: "x1j85h84", $$css: !0 },
        2: { paddingBottom: "x1120s5i", $$css: !0 },
        3: { paddingBottom: "xg8j3zb", $$css: !0 },
      };
    function E(e) {
      "use no forget";
      var t = e.ref,
        n = e.align,
        a = n === void 0 ? "auto" : n,
        i = e.children,
        l = e.color,
        u = e.dir,
        m = u === void 0 ? "auto" : u,
        p = e.hyphens,
        h = p === void 0 ? "none" : p,
        E = e.id,
        I = e.isPrimaryHeading,
        T = I === void 0 ? !1 : I,
        D = e.isSemanticHeading,
        x = D === void 0 ? !1 : D,
        $ = e.numberOfLines,
        P = e.preserveNewLines,
        N = P === void 0 ? !1 : P,
        M = e.suppressHydrationWarning,
        w = e.testid,
        A = e.truncationTooltip,
        F = e.type,
        O = d(r("CometDensityModeContext")),
        B = O[0],
        W = d(r("CometTextLangContext")),
        q = r("CometTextTypography")[F],
        U = q.fontFamily,
        V = q.fontSize,
        H = q.fontWeight,
        G = H === void 0 ? "normal" : H,
        z = q.offsets,
        j = z === void 0 ? [0, 0] : z,
        K = j.length === 3 ? j[2] : 0,
        Q = $ != null ? j[1] + K : j[1],
        X = o("BaseTextContext").useBaseTextContext(),
        Y = (X == null ? void 0 : X.nested) === !0,
        J = _(),
        Z = c.jsx(o("BaseTextContext").BaseTextContextProvider, {
          nested: !0,
          children: c.jsx(o("FDSTextContext").FDSTextContextProviderNonNull, {
            color: l,
            type: F,
            children: function (n) {
              var e = n.color;
              return c.createElement(
                "span",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    f.base,
                    U,
                    !Y && f.block,
                    !Y && S[j[0]],
                    !Y && R[Q],
                    B ? C[V] : y[V],
                    b[G],
                    k(e),
                    a !== "auto" && g[a],
                    h !== "none" && v[h],
                    N && f.preserveNewLines,
                  ),
                  {
                    "data-testid": void 0,
                    dir: Y ? void 0 : m,
                    id: E,
                    key: J,
                    lang: W,
                    ref: t,
                    suppressHydrationWarning: M,
                  },
                ),
                $ != null
                  ? c.jsx(r("FDSLineClamp.react"), {
                      lines: $,
                      truncationTooltip: A,
                      xstyle: K !== 0 && L[K],
                      children: i,
                    })
                  : i,
              );
            },
          }),
        });
      return x || T
        ? c.jsx(r("BaseHeading.react"), {
            isPrimaryHeading: T,
            xstyle: f.heading,
            children: Z,
          })
        : Z;
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return e === "highlight" && r("MetaConfig")._("73") ? h.blueLink : h[e];
    }
    l.default = E;
  },
  98,
);
