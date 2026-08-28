__d(
  "GeoPrivateOnboardingThemeProvider",
  ["GeoPrivateThemeContext", "react", "react-compiler-runtime", "useGeoTheme"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      return babelHelpers.extends({}, e, {
        selectInteractiveColorPalette: function (n) {
          var t = n.color === "primary" ? "onboarding" : n.color;
          return e.selectInteractiveColorPalette(
            babelHelpers.extends({}, n, { color: t }),
          );
        },
        selectOutline: function (n) {
          var t = n.color === "primary" ? "onboarding" : n.color;
          return e.selectOutline(babelHelpers.extends({}, n, { color: t }));
        },
      });
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = r("useGeoTheme")(),
        i;
      t[0] !== a ? ((i = c(a)), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l = i,
        u;
      return (
        t[2] !== l || t[3] !== n
          ? ((u = s.jsx(r("GeoPrivateThemeContext").Provider, {
              value: l,
              children: n,
            })),
            (t[2] = l),
            (t[3] = n),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.GeoPrivateOnboardingThemeProvider = d;
  },
  98,
);
