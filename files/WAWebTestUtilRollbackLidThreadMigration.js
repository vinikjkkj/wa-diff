__d(
  "WAWebTestUtilRollbackLidThreadMigration",
  [
    "WATimeUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1X1ThreadAccountMigrations.flow",
    "WAWebLid1x1MigrationPrimaryCache",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["chat", "user-prefs"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0],
                      n = (yield t.all()).filter(function (e) {
                        var t = e.id,
                          n = o("WAWebWidFactory").createWid(t);
                        return n.isUser() && !n.isBot();
                      }),
                      r = n.map(function (e) {
                        return { id: e.id, accountLid: null };
                      });
                    (yield t.bulkCreateOrMerge(r),
                      o(
                        "WAWebLid1x1MigrationPrimaryCache",
                      ).lidPnMigrationPrimaryCache.clear(),
                      yield o(
                        "WAWebUserPrefsIndexedDBStorage",
                      ).userPrefsIdb.set("WALidThreadAccountMigrationStatus", {
                        state: o("WAWebLid1X1ThreadAccountMigrations.flow")
                          .LidThreadMigrationStatus.WAITING_MAPPINGS,
                        ts: o("WATimeUtils").unixTime(),
                      }),
                      yield o(
                        "WAWebLid1X1MigrationGating",
                      ).Lid1X1MigrationUtils.setIsLidMigrated(!1));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        s.apply(this, arguments)
      );
    }
    l.rollbackLidThreadMigration = e;
  },
  98,
);
