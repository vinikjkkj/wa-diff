__d(
  "ReStoreHashMigration",
  [
    "JSONStringifyBigIntSafe",
    "ReStoreDefaultValueMigration",
    "ReStoreIndicesMigration",
    "ReStoreMigrateUtil",
    "ReStorePersistedMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = Object.values(e.tableNames).map(function (e) {
        var t;
        return babelHelpers.extends({}, e, {
          indexPredicates: Object.entries(
            (t = e.indexPredicates) != null ? t : {},
          ).map(function (e) {
            var t = e[0],
              n = e[1];
            return [t, n.toString()];
          }),
        });
      });
      return r("JSONStringifyBigIntSafe")(t);
    }
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l = r.loggers,
              s = l.logHistory,
              u = l.userFlow,
              c = r.storeTx,
              d = r.transaction,
              m = o(
                "ReStorePersistedMetadata",
              ).ReStorePersistedDefaultValuesVersion.hash(n),
              p = o(
                "ReStorePersistedMetadata",
              ).ReStorePersistedSchemaVersion.hash(t);
            u == null ||
              u.addAnnotations(
                o("ReStoreMigrateUtil").prefixAnnotations(e, {
                  int: { defaultValuesVersion: m, schemaVersion: p },
                }),
              );
            var _ = new (o(
                "ReStorePersistedMetadata",
              ).ReStorePersistedSchemaVersion)(e),
              f = new (o(
                "ReStorePersistedMetadata",
              ).ReStorePersistedDefaultValuesVersion)(e),
              g = (a = yield _.read(c)) == null ? void 0 : a.schemaVersion,
              h =
                (i = yield f.read(c)) == null ? void 0 : i.defaultValuesVersion;
            if (
              (s == null ||
                s.debug("storeSchemaVersion: " + (g != null ? g : "null")),
              s == null ||
                s.debug(
                  "storeDefaultValuesVersion: " + (h != null ? h : "null"),
                ),
              g != null &&
                (u == null ||
                  u.addAnnotations(
                    o("ReStoreMigrateUtil").prefixAnnotations(e, {
                      int: {
                        storeDefaultValuesVersion: h,
                        storeSchemaVersion: g,
                      },
                    }),
                  )),
              g === p && h === m)
            )
              return o("ReStoreMigrateUtil").ReStoreMigrateResult
                .NO_UPGRADE_NEEDED;
            var y = g == null;
            return (
              yield o(
                "ReStoreDefaultValueMigration",
              ).runMigrationForTableDefaultValuesIfNeeded(d, t, y, n),
              s == null || s.debug("migration default values finished"),
              yield o("ReStoreIndicesMigration").runMigrationForIndicesIfNeeded(
                r,
                t,
                n,
                y,
              ),
              s == null || s.debug("migration indices finished"),
              _.write(c, { schemaVersion: p }),
              f.write(c, { defaultValuesVersion: m }),
              s == null || s.debug("version is written"),
              s == null || s.debug("migration hash end"),
              u == null || u.addPoint("migration_hash_end"),
              y
                ? o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA
                : o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE
            );
          },
        )),
        u.apply(this, arguments)
      );
    }
    ((l.serializeTableData = e), (l.runHashMigration = s));
  },
  98,
);
