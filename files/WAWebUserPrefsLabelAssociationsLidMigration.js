__d(
  "WAWebUserPrefsLabelAssociationsLidMigration",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs
          .LabelAssociationsLidTableMigrationComplete,
        !0,
      );
    }
    function s() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs
            .LabelAssociationsLidTableMigrationComplete,
        ) === !0
      );
    }
    ((l.setLabelAssociationsMigrationAsComplete = e),
      (l.isLabelAssociationsMigrationComplete = s));
  },
  98,
);
