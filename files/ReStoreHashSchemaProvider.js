__d(
  "ReStoreHashSchemaProvider",
  [
    "ReStoreHashMigration",
    "ReStoreMetadata",
    "ReStoreMigrateUtil",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var r = t.tableIds,
          a = t.tableNames;
        (n === void 0 && (n = {}),
          (this.$1 = e),
          (this.tableNames = babelHelpers.extends(
            {},
            a,
            o("ReStoreMetadata").RESTORE_METADATA_TABLES,
          )),
          (this.tableIds = r),
          (this.defaults = n != null ? n : {}));
      }
      var t = e.prototype;
      return (
        (t.migrate = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t, n, r, a, i;
            ((t = e.loggers.logHistory) == null ||
              t.debug(
                "[" + this.$1 + "][ReStoreHashSchemaProvider] Start migration",
              ),
              (n = e.loggers.userFlow) == null ||
                n.addAnnotations(
                  o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                    string: { schemaProviderType: "hash" },
                  }),
                ),
              (r = e.loggers.userFlow) == null ||
                r.addPoint(this.$1 + "_migration_hash_start"));
            var l = yield o("ReStoreHashMigration").runHashMigration(
              this.$1,
              { tableIds: this.tableIds, tableNames: this.tableNames },
              this.defaults,
              e,
            );
            return (
              (a = e.loggers.logHistory) == null ||
                a.debug(
                  "[" +
                    this.$1 +
                    "][ReStoreHashSchemaProvider] End migration. Result: " +
                    l,
                ),
              (i = e.loggers.userFlow) == null ||
                i.addPoint(this.$1 + "_migration_hash_end"),
              l
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.default = e;
  },
  98,
);
