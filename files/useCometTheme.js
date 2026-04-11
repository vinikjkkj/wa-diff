__d(
  "useCometTheme",
  [
    "BaseThemeDisplayModeContext",
    "react",
    "react-compiler-runtime",
    "useCurrentDisplayMode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = { dark: "__fb-dark-mode ", light: "__fb-light-mode " };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = r("useCurrentDisplayMode")(),
        a;
      t[0] !== n || t[1] !== e
        ? (e === "invert" ? (a = n === "light" ? "dark" : "light") : (a = e),
          (t[0] = n),
          (t[1] = e),
          (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] !== a
        ? ((i = function (t) {
            var e = t.children;
            return s.jsx(r("BaseThemeDisplayModeContext").Provider, {
              value: a,
              children: e,
            });
          }),
          (t[3] = a),
          (t[4] = i))
        : (i = t[4]);
      var l = i,
        u = c[a],
        d;
      t[5] !== u
        ? ((d = { $$css: !0, theme: u }), (t[5] = u), (t[6] = d))
        : (d = t[6]);
      var m = d,
        p;
      return (
        t[7] !== l || t[8] !== m
          ? ((p = [l, m]), (t[7] = l), (t[8] = m), (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = d;
  },
  98,
);
