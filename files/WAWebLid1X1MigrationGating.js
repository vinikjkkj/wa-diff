__d(
  "WAWebLid1X1MigrationGating",
  ["WALogger", "WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsTypes"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.isLidMigrated = function (n) {
            if ((n === void 0 && (n = !1), n)) {
              var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAIsAccountLidFieldMigrated",
              );
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] isLidMigrated value=",
                    ", type=",
                    ", result: ",
                    "",
                  ])),
                t,
                typeof t,
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                  "WAIsAccountLidFieldMigrated",
                ) === !0,
              );
            }
            return (
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAIsAccountLidFieldMigrated",
              ) === !0
            );
          }),
          (n.setIsLidMigrated = async function (t, n, r) {
            (n === void 0 &&
              (n = o("WAWebUserPrefsTypes").LidMigrationSource.PEER),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "lid: setIsLidMigrated: ",
                    ", source: ",
                    ", isPureLidSyncDSession: ",
                    "",
                  ])),
                t,
                n,
                r,
              ),
              await Promise.all([
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  "WAIsAccountLidFieldMigrated",
                  t,
                ),
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  "WALidOneOnOneMigrationSource",
                  n,
                ),
                r == null
                  ? Promise.resolve()
                  : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WAIsPureLidSyncDSession",
                      r,
                    ),
              ]));
          }),
          (n.hasStateDiscrepancy = function () {
            return (
              !c.isLidMigrated() &&
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAIsAccountLidFieldMigrated",
              ) === !0
            );
          }),
          (n.isSyncdSessionMigrated = function () {
            return !1;
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
          (n.shouldCreatePnChat = function () {
            return !1;
          }),
          t
        );
      })(),
      c = new u();
    l.Lid1X1MigrationUtils = c;
  },
  98,
);
