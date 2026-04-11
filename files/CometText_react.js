__d(
  "CometText.react",
  [
    "BaseTextV2.react",
    "BaseTextV2FontMetrics",
    "CometTypographyProvider.react",
    "XPlatReactUserAgent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.use,
      c = {
        bold: { fontWeight: "x1xlr1w8", $$css: !0 },
        family: { fontFamily: "x11kx9fa", $$css: !0 },
        normal: { fontWeight: "xo1l8bm", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
      },
      d = {
        inherit: { color: "x1heor9g", $$css: !0 },
        negative: { color: "x17jvf91", $$css: !0 },
        primary: { color: "x5das44", $$css: !0 },
        secondary: { color: "xxdcdb7", $$css: !0 },
        white: { color: "x1up5m5i", $$css: !0 },
      },
      m = function (t) {
        return (
          t === void 0 && (t = "inherit"),
          typeof t == "string"
            ? { xstyleConfig: { textColor: d[t] } }
            : { xstyleConfig: { textColor: t } }
        );
      },
      p = function (t) {
        return typeof t == "string" ? c[t] : t;
      },
      _ =
        r("XPlatReactUserAgent").isPlatform("iOS") ||
        r("XPlatReactUserAgent").isPlatform("Mac OS X"),
      f = r("XPlatReactUserAgent").isPlatform("Windows"),
      g = r("XPlatReactUserAgent").isPlatform("Android"),
      h = {
        ascent: 1980,
        capHeight: 1443,
        descent: -432,
        lineGap: 0,
        unitsPerEm: 2048,
      },
      y = _
        ? h
        : f
          ? o("BaseTextV2FontMetrics").WindowsSystemFontMetrics
          : g
            ? o("BaseTextV2FontMetrics").RobotoFontMetrics
            : o("BaseTextV2FontMetrics").OptimisticDisplayFontMetrics;
    function C(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.children,
        a = e.color,
        i = e.fontSize,
        l = e.fontWeight,
        d = e.lineGap,
        _ = e.type,
        f = a === void 0 ? "inherit" : a,
        g = l === void 0 ? "normal" : l,
        h = u(o("CometTypographyProvider.react").CometTypographyContext),
        C = h.fontSize,
        b = h.lineGap,
        v;
      t[0] !== f ? ((v = m(f)), (t[0] = f), (t[1] = v)) : (v = t[1]);
      var S = v,
        R = i != null ? i : C,
        L = d != null ? d : b,
        E;
      t[2] !== g ? ((E = p(g)), (t[2] = g), (t[3] = E)) : (E = t[3]);
      var k;
      t[4] !== E || t[5] !== _
        ? ((k = { textType: [c.family, E, _] }),
          (t[4] = E),
          (t[5] = _),
          (t[6] = k))
        : (k = t[6]);
      var I;
      t[7] !== R || t[8] !== L || t[9] !== k
        ? ((I = { fontSize: R, lineGap: L, xstyleConfig: k }),
          (t[7] = R),
          (t[8] = L),
          (t[9] = k),
          (t[10] = I))
        : (I = t[10]);
      var T = I;
      if (n == null || n === "") return n;
      var D;
      return (
        t[11] !== n || t[12] !== S || t[13] !== T
          ? ((D = s.jsx(r("BaseTextV2.react"), {
              colorVariant: S,
              fontMetrics: y,
              typeVariant: T,
              children: n,
            })),
            (t[11] = n),
            (t[12] = S),
            (t[13] = T),
            (t[14] = D))
          : (D = t[14]),
        D
      );
    }
    l.default = C;
  },
  98,
);
