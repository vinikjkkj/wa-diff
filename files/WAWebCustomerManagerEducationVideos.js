__d(
  "WAWebCustomerManagerEducationVideos",
  [
    "WAWebCustomerManagerEducationVideosConfig",
    "WAWebL10N",
    "WAWebL10NCoerceToFBLocale",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebCustomerManagerEducationVideosConfig").videos[e];
      if (t == null) return null;
      var n = r("WAWebL10N").getLocale(),
        a = [
          n,
          o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(n),
          o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE,
        ];
      for (var i of a) {
        var l = t[i];
        if (l != null) return l;
      }
      return null;
    }
    l.getCustomerManagerEducationVideoUrl = e;
  },
  98,
);
