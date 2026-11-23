__d(
  "GeoPrivateOnboardingThemeProvider",
  ["GeoPrivateThemeContext", "react", "useGeoTheme"],
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
      var t = e.children,
        n = r("useGeoTheme")(),
        o = u(
          function () {
            return c(n);
          },
          [n],
        );
      return s.jsx(r("GeoPrivateThemeContext").Provider, {
        value: o,
        children: t,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.GeoPrivateOnboardingThemeProvider = d));
  },
  98,
);
