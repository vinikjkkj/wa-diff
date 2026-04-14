__d(
  "WAWebVoipDarkThemeRoot.react",
  ["WAWebFlex.react", "WAWebNoop", "WAWebThemeContext", "WDSThemes", "react"],
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
      var t = e.children,
        n = e.ref,
        r = e.tabIndex,
        a = e.testid,
        i = e.xstyle;
      return s.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
        value: u,
        children: s.jsx(o("WAWebFlex.react").FlexColumn, {
          ref: n,
          tabIndex: r,
          testid: void 0,
          xstyle: [o("WDSThemes").WDSDarkTheme, i],
          children: t,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
