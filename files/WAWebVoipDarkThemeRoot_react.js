__d(
  "WAWebVoipDarkThemeRoot.react",
  [
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebThemeContext",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        theme: "dark",
        setTheme: r("WAWebNoop"),
        setSystemThemeMode: r("WAWebNoop"),
        systemThemeMode: !1,
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        r = e.ref,
        a = e.tabIndex,
        i = e.testid,
        l = e.xstyle,
        c;
      t[0] !== l
        ? ((c = [o("WDSThemes").WDSDarkTheme, l]), (t[0] = l), (t[1] = c))
        : (c = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== r || t[4] !== c || t[5] !== a || t[6] !== i
          ? ((d = s.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
              value: u,
              children: s.jsx(o("WAWebFlex.react").FlexColumn, {
                ref: r,
                tabIndex: a,
                testid: void 0,
                xstyle: c,
                children: n,
              }),
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = c),
            (t[5] = a),
            (t[6] = i),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = c;
  },
  98,
);
