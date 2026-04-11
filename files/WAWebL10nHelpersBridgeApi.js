__d(
  "WAWebL10nHelpersBridgeApi",
  ["WAWebFrontendL10nHelpers", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = {
      mungeLocaleOverrideFromUrlIfNecessary: function () {
        o(
          "WAWebFrontendL10nHelpers",
        ).mungeWAWebLocaleOverrideFromUrlIfNecessary();
      },
      extendLocalePrefCookieTtl: function () {
        o("WAWebFrontendL10nHelpers").extendWAWebLocalePrefCookieTtl();
      },
      getUserLocale: function () {
        return r("WAWebL10N").getLocale();
      },
      getNormalizedLocale: function () {
        return r("WAWebL10N").getNormalizedLocale();
      },
      getFullLocale: function () {
        return r("WAWebL10N").getFullLocale();
      },
      getLanguage: function () {
        return r("WAWebL10N").getLanguage();
      },
      normalizeLocaleToWajsLocale: function (t) {
        var e = t.locale;
        return r("WAWebL10N").normalizeLocaleToWajsLocale(e);
      },
      setLocale: function (t) {
        var e = t.locale,
          n = t.priority,
          o = t.reload;
        return r("WAWebL10N").setLocale(e, n, o);
      },
    };
    l.L10nHelpersBridgeApi = e;
  },
  98,
);
