__d(
  "GeoMAIBADarkThemeProvider",
  [
    "GeoPrivateDataVizNextDarkTheme",
    "GeoPrivateDataVizThemeContext",
    "GeoPrivateIsDarkThemeContext",
    "GeoPrivateIsNextThemeContext",
    "GeoPrivateMAIBADarkTheme",
    "GeoPrivateThemeContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children;
      return s.jsx(r("GeoPrivateThemeContext").Provider, {
        value: r("GeoPrivateMAIBADarkTheme"),
        children: s.jsx(r("GeoPrivateIsNextThemeContext").Provider, {
          value: !0,
          children: s.jsx(r("GeoPrivateDataVizThemeContext").Provider, {
            value: r("GeoPrivateDataVizNextDarkTheme"),
            children: s.jsx(r("GeoPrivateIsDarkThemeContext").Provider, {
              value: !0,
              children: t,
            }),
          }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
