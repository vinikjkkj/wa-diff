__d(
  "ReStoreCustomMigration",
  ["ReStoreMigrateUtil", "ReStorePersistedMetadata"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n,
        r = t.storeTx,
        a = t.transaction;
      if (e == null)
        return o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED;
      var i = new (o(
          "ReStorePersistedMetadata",
        ).ReStorePersistedCustomMigrationVersion)(),
        l = (n = await i.read(r)) == null ? void 0 : n.customMigrationVersion;
      return e.targetVersion === l
        ? o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED
        : (await e.migration(l != null ? l : 0, a),
          i.write(r, { customMigrationVersion: e.targetVersion }),
          o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE);
    }
    l.runCustomMigration = e;
  },
  98,
);
