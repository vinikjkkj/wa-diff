__d(
  "WAWebUserPrefsAfterReadSendingRollbackMigration",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs
          .AfterReadSendingRollbackMigrationState,
        e,
      );
    }
    function s() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs
          .AfterReadSendingRollbackMigrationState,
      );
      return e === "unmigrated" || e === "migration_started" || e === "migrated"
        ? e
        : "unmigrated";
    }
    function u() {
      return s() !== "unmigrated";
    }
    function c() {
      return s() === "migrated";
    }
    function d() {
      e("unmigrated");
    }
    ((l.setAfterReadSendingRollbackMigrationState = e),
      (l.getAfterReadSendingRollbackMigrationState = s),
      (l.hasAfterReadSendingRollbackMigrationStarted = u),
      (l.isAfterReadSendingRollbackMigrationComplete = c),
      (l.resetAfterReadSendingRollbackMigrationState = d));
  },
  98,
);
