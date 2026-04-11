__d(
  "XMDSIcon.react",
  [
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID",
    "useBaseIsDecorative",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          display: "x1lliihq",
          flexShrink: "x2lah0s",
          transitionDuration: "x1k90msu",
          transitionProperty: "x2h7rmj",
          transitionTimingFunction: "x1qfuztq",
          $$css: !0,
        },
        inline: { display: "x1rg5ohu", $$css: !0 },
        shadow: { filter: "x1ssd25i", $$css: !0 },
      },
      d = {
        8: { height: "xdk7pt", width: "x1xc55vz", $$css: !0 },
        10: { height: "x170jfvy", width: "x1fsd2vl", $$css: !0 },
        12: { height: "x1kpxq89", width: "xsmyaan", $$css: !0 },
        13: { height: "x18gnavp", width: "x1fxhmyf", $$css: !0 },
        16: { height: "xlup9mm", width: "x1kky2od", $$css: !0 },
        18: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
        20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        30: { height: "x1gnnpzl", width: "x1849jeq", $$css: !0 },
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        52: { height: "xdd8jsf", width: "xvni27", $$css: !0 },
        56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        60: { height: "xng8ra", width: "x1247r65", $$css: !0 },
        72: { height: "xy75621", width: "xni59qk", $$css: !0 },
        96: { height: "xjp8j0k", width: "x13oubkp", $$css: !0 },
        112: { height: "x19swzb4", width: "xj35x94", $$css: !0 },
        132: { height: "x1h5wmu3", width: "x16s0kzc", $$css: !0 },
      },
      m = {
        "accent-nav-list": { color: "x15d4u2p", $$css: !0 },
        "active-tab": { color: "x5e5rjt", $$css: !0 },
        black: { color: "x1p6odiv", $$css: !0 },
        blueLink: { color: "x1fey0fg", $$css: !0 },
        disabled: { color: "x1eu2eya", $$css: !0 },
        "fb-logo": { color: "x1k841w8", $$css: !0 },
        highlight: { color: "xvpmsi5", $$css: !0 },
        "inactive-tab": { color: "xcza8v6", $$css: !0 },
        inherit_INTERNAL_ONLY: { color: "x1heor9g", $$css: !0 },
        "list-cell-chevron": { color: "x1v20y45", $$css: !0 },
        negative: { color: "x1a1m0xk", $$css: !0 },
        none: { color: "x19co3pv", $$css: !0 },
        positive: { color: "x6u5lvz", $$css: !0 },
        primary: { color: "x198g3q0", $$css: !0 },
        "primary-button": { color: "xtk6v10", $$css: !0 },
        "primary-deemphasized-button": { color: "x1mvi0mv", $$css: !0 },
        "primary-destructive-button": { color: "x1w7cyww", $$css: !0 },
        "primary-icon-on-media": { color: "x3201g3", $$css: !0 },
        "primary-on-media-button": { color: "x3201g3", $$css: !0 },
        secondary: { color: "xcza8v6", $$css: !0 },
        "secondary-button": { color: "x1dem4cn", $$css: !0 },
        "secondary-destructive-button": { color: "x100nk6e", $$css: !0 },
        "secondary-on-media-button": { color: "x1h8q2v1", $$css: !0 },
        tertiary: { color: "x13ucnxn", $$css: !0 },
        "toast-DO_NOT_USE_WILL_BE_DELETED_WITHOUT_NOTICE": {
          color: "xf9uev8",
          $$css: !0,
        },
        "tonal-destructive-button": { color: "x1bzs3c3", $$css: !0 },
        "tonal-primary-button": { color: "xa5m9jb", $$css: !0 },
        warning: { color: "xcly8g5", $$css: !0 },
        white: { color: "x14ctfv", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.alt,
        i = t.color,
        l = t.icon,
        s = t.id,
        p = t.inline,
        _ = t.isDecorative,
        f = t.shadow,
        g = t.size,
        h = t.testid,
        y = i === void 0 ? "primary" : i,
        C = p === void 0 ? !1 : p,
        b = f === void 0 ? !1 : f,
        v = g === void 0 ? 8 : g,
        S = r("useBaseIsDecorative")({ alt: a, isDecorative: _ }) ? !0 : void 0,
        R;
      n[0] !== y || n[1] !== C || n[2] !== b || n[3] !== v
        ? ((R = (e || (e = r("stylex")))([
            c.icon,
            C && c.inline,
            b && c.shadow,
            m[y],
            d[v],
          ])),
          (n[0] = y),
          (n[1] = C),
          (n[2] = b),
          (n[3] = v),
          (n[4] = R))
        : (R = n[4]);
      var L = a || void 0,
        E;
      n[5] !== h ? ((E = r("testID")(h)), (n[5] = h), (n[6] = E)) : (E = n[6]);
      var k;
      return (
        n[7] !== l ||
        n[8] !== S ||
        n[9] !== s ||
        n[10] !== R ||
        n[11] !== L ||
        n[12] !== E
          ? ((k = u.jsx(
              l,
              babelHelpers.extends(
                { "aria-hidden": S, className: R, id: s, title: L },
                E,
              ),
            )),
            (n[7] = l),
            (n[8] = S),
            (n[9] = s),
            (n[10] = R),
            (n[11] = L),
            (n[12] = E),
            (n[13] = k))
          : (k = n[13]),
        k
      );
    }
    l.default = p;
  },
  98,
);
