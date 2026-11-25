__d(
  "ReStoreSchemaProvider",
  ["ReStoreMigrateUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        defaults: babelHelpers.extends({}, e.defaults, t.defaults),
        migrate: async function (r) {
          var n = await e.migrate(r),
            a = await t.migrate(r);
          return n ===
            o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE ||
            a === o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE
            ? o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE
            : n ===
                  o("ReStoreMigrateUtil").ReStoreMigrateResult
                    .UPDATE_METADATA ||
                a ===
                  o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA
              ? o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA
              : o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED;
        },
        tableIds: babelHelpers.extends({}, e.tableIds, t.tableIds),
        tableNames: babelHelpers.extends({}, e.tableNames, t.tableNames),
      };
    }
    l.mergeSchemaProviders = e;
  },
  98,
);
