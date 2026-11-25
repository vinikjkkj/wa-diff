__d(
  "ReStoreHashSchemaProvider",
  ["ReStoreHashMigration", "ReStoreMetadata", "ReStoreMigrateUtil"],
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
        (t.migrate = async function (t) {
          var e, n, r, a, i;
          ((e = t.loggers.logHistory) == null ||
            e.debug(
              "[" + this.$1 + "][ReStoreHashSchemaProvider] Start migration",
            ),
            (n = t.loggers.userFlow) == null ||
              n.addAnnotations(
                o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                  string: { schemaProviderType: "hash" },
                }),
              ),
            (r = t.loggers.userFlow) == null ||
              r.addPoint(this.$1 + "_migration_hash_start"));
          var l = await o("ReStoreHashMigration").runHashMigration(
            this.$1,
            { tableIds: this.tableIds, tableNames: this.tableNames },
            this.defaults,
            t,
          );
          return (
            (a = t.loggers.logHistory) == null ||
              a.debug(
                "[" +
                  this.$1 +
                  "][ReStoreHashSchemaProvider] End migration. Result: " +
                  l,
              ),
            (i = t.loggers.userFlow) == null ||
              i.addPoint(this.$1 + "_migration_hash_end"),
            l
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
