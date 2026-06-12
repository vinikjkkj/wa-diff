__d(
  "WAWebL10NGetSystemLocale",
  ["WAWebL10NCoerceToFBLocale"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = navigator.language,
        t = e || o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE;
      return o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(t);
    }
    var s = new Set(["ar", "fa", "he", "ps", "sy", "ur", "yi", "cb"]);
    function u() {
      var e =
          navigator.language ||
          o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE,
        t = e.toLocaleLowerCase("en").split(/[-_]/)[0];
      return s.has(t);
    }
    ((l.getSystemLocale = e), (l.isSystemLocaleRTL = u));
  },
  98,
);
