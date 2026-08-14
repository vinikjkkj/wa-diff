__d(
  "ReStoreSchemaProvider",
  ["ReStoreMigrateUtil", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        defaults: babelHelpers.extends({}, e.defaults, t.defaults),
        migrate: (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var r = yield e.migrate(n),
              a = yield t.migrate(n);
            return r ===
              o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE ||
              a ===
                o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE
              ? o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE
              : r ===
                    o("ReStoreMigrateUtil").ReStoreMigrateResult
                      .UPDATE_METADATA ||
                  a ===
                    o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA
                ? o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA
                : o("ReStoreMigrateUtil").ReStoreMigrateResult
                    .NO_UPGRADE_NEEDED;
          });
          function a(e) {
            return r.apply(this, arguments);
          }
          return a;
        })(),
        tableIds: babelHelpers.extends({}, e.tableIds, t.tableIds),
        tableNames: babelHelpers.extends({}, e.tableNames, t.tableNames),
      };
    }
    l.mergeSchemaProviders = e;
  },
  98,
);
