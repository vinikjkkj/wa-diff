__d(
  "WAWebWindowsUnifiedSessionSync",
  ["WAWebUserPrefsBase", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsUnifiedSessionId,
        e,
      );
    }
    l.syncUnifiedSessionIdToNative = e;
  },
  98,
);
