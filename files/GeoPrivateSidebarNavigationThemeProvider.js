__d(
  "GeoPrivateSidebarNavigationThemeProvider",
  [
    "GeoPrivateSidebarNavigationThemeResetContext",
    "GeoPrivateThemeContext",
    "cr:1958",
    "createGeoPrivateSidebarNavigationDarkTheme",
    "react",
    "react-compiler-runtime",
    "useGeoPrivateIsNextTheme",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = c(r("GeoPrivateSidebarNavigationThemeResetContext"));
      if (a == null) return n;
      var i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(r("GeoPrivateThemeContext").Provider, {
              value: a,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        a = e.children,
        i = e.variant,
        l = r("useGeoTheme")(),
        u = r("useGeoPrivateIsNextTheme")(),
        c;
      e: {
        if (i === "flat" && u && n("cr:1958") != null) {
          var d;
          (t[0] !== l
            ? ((d = n("cr:1958")(l)), (t[0] = l), (t[1] = d))
            : (d = t[1]),
            (c = d));
          break e;
        }
        if (i === "dark") {
          var m;
          (t[2] !== l
            ? ((m = r("createGeoPrivateSidebarNavigationDarkTheme")(l)),
              (t[2] = l),
              (t[3] = m))
            : (m = t[3]),
            (c = m));
          break e;
        }
        c = l;
      }
      var p = c,
        _;
      t[4] !== p || t[5] !== a
        ? ((_ = s.jsx(r("GeoPrivateThemeContext").Provider, {
            value: p,
            children: a,
          })),
          (t[4] = p),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== l || t[8] !== _
          ? ((f = s.jsx(
              r("GeoPrivateSidebarNavigationThemeResetContext").Provider,
              { value: l, children: _ },
            )),
            (t[7] = l),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    ((l.GeoPrivateSidebarNavigationThemeResetProvider = m),
      (l.GeoPrivateSidebarNavigationThemeProvider = p));
  },
  98,
);
