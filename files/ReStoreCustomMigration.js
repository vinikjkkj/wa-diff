__d(
  "ReStoreCustomMigration",
  ["ReStoreMigrateUtil", "ReStorePersistedMetadata", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = t.storeTx,
            a = t.transaction;
          if (e == null)
            return o("ReStoreMigrateUtil").ReStoreMigrateResult
              .NO_UPGRADE_NEEDED;
          var i = new (o(
              "ReStorePersistedMetadata",
            ).ReStorePersistedCustomMigrationVersion)(),
            l =
              (n = yield i.read(r)) == null ? void 0 : n.customMigrationVersion;
          return e.targetVersion === l
            ? o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED
            : (yield e.migration(l != null ? l : 0, a),
              i.write(r, { customMigrationVersion: e.targetVersion }),
              o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE);
        })),
        s.apply(this, arguments)
      );
    }
    l.runCustomMigration = e;
  },
  98,
);
