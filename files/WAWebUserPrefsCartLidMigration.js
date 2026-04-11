__d(
  "WAWebUserPrefsCartLidMigration",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CartDbLidMigrationComplete,
        e,
      );
    }
    function s() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.CartDbLidMigrationComplete,
        ) === !0
      );
    }
    ((l.setCartLidMigrationValue = e), (l.isCartLidMigrationComplete = s));
  },
  98,
);
