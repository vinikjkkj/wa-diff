__d(
  "CometAIThemeProvider.react",
  [
    "CometAIBaseTheme.stylex",
    "CometTypographyProvider.react",
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
      d = e || (e = r("react")),
      m = c.createContext,
      p = c.useMemo,
      _ = m({ displayMode: "light" });
    function f(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.children,
        a = e.displayMode,
        i = e.overrides,
        l = a === void 0 ? "light" : a,
        u,
        c,
        m,
        p,
        f;
      if (
        t[0] !== l ||
        t[1] !== (i == null ? void 0 : i.dark) ||
        t[2] !== (i == null ? void 0 : i.light) ||
        t[3] !== (i == null ? void 0 : i.typography)
      ) {
        var g =
            l === "dark"
              ? [
                  o("CometAIBaseTheme.stylex").darkTheme,
                  i == null ? void 0 : i.dark,
                ]
              : [
                  o("CometAIBaseTheme.stylex").defaultTheme,
                  i == null ? void 0 : i.light,
                ],
          h;
        t[9] !== l
          ? ((h = { displayMode: l }), (t[9] = l), (t[10] = h))
          : (h = t[10]);
        var y = h;
        ((c = _.Provider),
          (f = y),
          (u = o("CometTypographyProvider.react").CometTypographyProvider),
          (p = i == null ? void 0 : i.typography),
          (m = (s || (s = r("stylex"))).props(g)),
          (t[0] = l),
          (t[1] = i == null ? void 0 : i.dark),
          (t[2] = i == null ? void 0 : i.light),
          (t[3] = i == null ? void 0 : i.typography),
          (t[4] = u),
          (t[5] = c),
          (t[6] = m),
          (t[7] = p),
          (t[8] = f));
      } else ((u = t[4]), (c = t[5]), (m = t[6]), (p = t[7]), (f = t[8]));
      var C;
      t[11] !== n || t[12] !== m
        ? ((C = d.jsx("div", babelHelpers.extends({}, m, { children: n }))),
          (t[11] = n),
          (t[12] = m),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== u || t[15] !== p || t[16] !== C
        ? ((b = d.jsx(u, { typography: p, children: C })),
          (t[14] = u),
          (t[15] = p),
          (t[16] = C),
          (t[17] = b))
        : (b = t[17]);
      var v;
      return (
        t[18] !== c || t[19] !== f || t[20] !== b
          ? ((v = d.jsx(c, { value: f, children: b })),
            (t[18] = c),
            (t[19] = f),
            (t[20] = b),
            (t[21] = v))
          : (v = t[21]),
        v
      );
    }
    ((l.CometAIThemeContext = _), (l.CometAIThemeProvider = f));
  },
  98,
);
