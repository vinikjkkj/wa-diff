__d(
  "WAWebInactiveGroupLidMigration",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.InactiveGroupLidMigrationComplete,
        ) === !0
      );
    }
    function s() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.InactiveGroupLidMigrationComplete,
        !0,
      );
    }
    ((l.isInactiveGroupLidMigrationComplete = e),
      (l.setInactiveGroupLidMigrationComplete = s));
  },
  98,
);
