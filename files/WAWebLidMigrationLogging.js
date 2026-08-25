__d(
  "WAWebLidMigrationLogging",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebUserPrefsHistorySync",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[lid-migration] emp=",
            " migrated=",
            " src=",
            " histSync=",
            "",
          ])),
        o("WAWebCurrentUser").isEmployee(),
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(),
        o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.lidMigrationSource(),
        o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete(),
      );
    }
    l.logLidMetadata = s;
  },
  98,
);
