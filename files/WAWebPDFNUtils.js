__d(
  "WAWebPDFNUtils",
  ["WAWebThemeContext"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebThemeContext").useIsDarkTheme();
      return e == null ? null : t ? e.dark : e.light;
    }
    l.usePDFNThemedIcon = e;
  },
  98,
);
