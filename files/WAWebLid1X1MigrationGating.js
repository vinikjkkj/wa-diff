__d(
  "WAWebLid1X1MigrationGating",
  ["WALogger", "WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsTypes"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.setIsLidMigrated = async function (n, r, a) {
            (r === void 0 &&
              (r = o("WAWebUserPrefsTypes").LidMigrationSource.PEER),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "lid: setIsLidMigrated: ",
                    ", source: ",
                    ", isPureLidSyncDSession: ",
                    "",
                  ])),
                n,
                r,
                a,
              ),
              await Promise.all([
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  "WAIsAccountLidFieldMigrated",
                  n,
                ),
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  "WALidOneOnOneMigrationSource",
                  r,
                ),
                a == null
                  ? Promise.resolve()
                  : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WAIsPureLidSyncDSession",
                      a,
                    ),
              ]));
          }),
          (n.lidMigrationSource = function () {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              "WALidOneOnOneMigrationSource",
            );
          }),
          (n.isPureLidSyncDSession = function () {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              "WAIsPureLidSyncDSession",
            );
          }),
          t
        );
      })(),
      u = new s();
    l.Lid1X1MigrationUtils = u;
  },
  98,
);
