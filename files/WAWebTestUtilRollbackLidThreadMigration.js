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
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["chat", "user-prefs"], async function (e) {
          var t = e[0],
            n = (await t.all()).filter(function (e) {
              var t = e.id,
                n = o("WAWebWidFactory").createWid(t);
              return n.isUser() && !n.isBot();
            }),
            r = n.map(function (e) {
              return { id: e.id, accountLid: null };
            });
          (await t.bulkCreateOrMerge(r),
            o(
              "WAWebLid1x1MigrationPrimaryCache",
            ).lidPnMigrationPrimaryCache.clear(),
            await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              "WALidThreadAccountMigrationStatus",
              {
                state: o("WAWebLid1X1ThreadAccountMigrations.flow")
                  .LidThreadMigrationStatus.WAITING_MAPPINGS,
                ts: o("WATimeUtils").unixTime(),
              },
            ),
            await o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.setIsLidMigrated(!1));
        });
    }
    l.rollbackLidThreadMigration = e;
  },
  98,
);
