__d(
  "WAWebVoipCallsTabPermissionsOffBannerGating",
  ["WAWebNux", "WAWebUserPrefsNuxPreferences"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return !e && !t
        ? !1
        : o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
            o("WAWebNux").NUX.CALLS_TAB_PERMISSIONS_OFF_BANNER,
          );
    }
    l.shouldShowCallsTabPermissionsOffBanner = e;
  },
  98,
);
