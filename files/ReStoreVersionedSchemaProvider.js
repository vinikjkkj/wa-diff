__d(
  "ReStoreVersionedSchemaProvider",
  [
    "FBLogger",
    "ReStoreDefaultValueMigration",
    "ReStoreIndicesMigration",
    "ReStoreMigrateUtil",
    "ReStorePersistedMetadata",
    "ReStoreVersionedSchemaProviderUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.defaults = {}), (this.$1 = ""), (this.$1 = e), (this.$2 = t));
        var r = t.versions[t.targetVersion],
          a = o("ReStoreVersionedSchemaProviderUtil").getTableData(r.tables, n),
          i = a.defaults,
          l = a.tableData;
        ((this.tableNames = l.tableNames),
          (this.tableIds = l.tableIds),
          (this.defaults = i));
      }
      var t = e.prototype;
      return (
        (t.$3 = async function (t, n) {
          var e, r, a, i;
          ((e = n.loggers.logHistory) == null ||
            e.debug(
              "[" +
                this.$1 +
                "][ReStoreVersionedSchemaProvider] Migrating from scratch...",
            ),
            (r = n.loggers.userFlow) == null ||
              r.addPoint(this.$1 + "_migration_versioned_from_scratch"));
          var l = { tableIds: this.tableIds, tableNames: this.tableNames };
          return (
            await o(
              "ReStoreDefaultValueMigration",
            ).runMigrationForTableDefaultValuesIfNeeded(
              n.transaction,
              l,
              t,
              this.defaults,
            ),
            (a = n.loggers.logHistory) == null ||
              a.debug("migration default values finished"),
            await o("ReStoreIndicesMigration").runMigrationForIndicesIfNeeded(
              n,
              l,
              this.defaults,
              t,
            ),
            (i = n.loggers.logHistory) == null ||
              i.debug("migration indices finished"),
            t
              ? o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA
              : o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE
          );
        }),
        (t.$4 = function (t) {
          var e = this,
            n = this.$2.versionOrder,
            o = n.indexOf(t);
          if (o === -1)
            throw r("FBLogger")("ReStoreVersionedSchemaProvider").mustfixThrow(
              "[%s][ReStoreVersionedSchemaProvider] Cannot resolve version %s",
              this.$1,
              t,
            );
          return Promise.all(
            this.$2.versionOrder
              .slice(o, this.$2.versionOrder.indexOf(this.$2.targetVersion) + 1)
              .map(async function (t) {
                if (t in e.$2.versions)
                  return { meta: e.$2.versions[t], version: t };
                if (t in e.$2.legacyVersions)
                  return {
                    meta: await e.$2.legacyVersions[t].load(),
                    version: t,
                  };
                throw r("FBLogger")(
                  "ReStoreVersionedSchemaProvider",
                ).mustfixThrow(
                  "[%s][ReStoreVersionedSchemaProvider] Cannot find version %s in either versions or legacyVersions",
                  e.$1,
                  t,
                );
              }),
          );
        }),
        (t.$5 = async function (t, n, a) {
          var e,
            i,
            l,
            s = this.$2.targetVersion,
            u = this.$2.versions[s].revision;
          (e = a.loggers) == null ||
            (e = e.logHistory) == null ||
            e.debug(
              "[" +
                this.$1 +
                "][ReStoreVersionedSchemaProvider] currentVersion: " +
                t +
                "R" +
                n +
                ", targetVersion: " +
                s +
                "R" +
                u,
            );
          var c = s;
          if (c === t && u === n) {
            var d;
            return (
              (d = a.loggers) == null ||
                (d = d.logHistory) == null ||
                d.debug(
                  "[" +
                    this.$1 +
                    "][ReStoreVersionedSchemaProvider] DB already up to date, skipping migration",
                ),
              o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED
            );
          }
          ((i = a.loggers.logHistory) == null ||
            i.debug("migration versioned incremental"),
            (l = a.loggers.userFlow) == null ||
              l.addPoint(this.$1 + "_migration_versioned_incremental"));
          var m = await this.$4(t);
          if (m.length === 0 || n > u)
            return (
              r("FBLogger")(
                "ReStoreVersionedSchemaProvider",
                "migrate",
              ).mustfix(
                "[%s][ReStoreVersionedSchemaProvider][DANGEROUS] Backward migration required from %sR%s to %sR%s, running #migrateFromScratch",
                this.$1,
                t,
                "" + n,
                s,
                "" + u,
              ),
              this.$3(!1, a)
            );
          for (var p of m)
            for (
              var _ = p.meta, f = p.version, g = f, h = g === t ? n + 1 : 0;
              h <= _.revision;
              h++
            ) {
              var y, C, b, v, S, R, L;
              ((y = a.loggers) == null ||
                (y = y.logHistory) == null ||
                y.debug(
                  "[" +
                    this.$1 +
                    "][ReStoreVersionedSchemaProvider] Migrating to " +
                    f +
                    "R" +
                    h,
                ),
                (C = a.loggers.userFlow) == null ||
                  C.addPoint(
                    this.$1 + "_migration_versioned_" + f + "{$revision}_start",
                  ),
                await ((b = (v = _.upgrade)[h]) == null
                  ? void 0
                  : b.call(v, a)),
                await ((S = (R = _.afterUpgrade)[h]) == null
                  ? void 0
                  : S.call(R, a.transaction)),
                (L = a.loggers.userFlow) == null ||
                  L.addPoint(
                    this.$1 + "_migration_versioned_" + f + "{$revision}_end",
                  ));
            }
          return o("ReStoreMigrateUtil").ReStoreMigrateResult.UPGRADE_COMPLETE;
        }),
        (t.$6 = function (t, n, r, a, i) {
          var e;
          if (
            ((e = i.loggers.userFlow) == null ||
              e.addPoint(this.$1 + "_migration_versioned_hash_start"),
            n === r && t === a)
          ) {
            var l, s;
            return (
              (l = i.loggers.userFlow) == null ||
                l.addAnnotations(
                  o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                    string: { fromHashSchemaProvider: "no_changes" },
                  }),
                ),
              (s = i.loggers) == null ||
                (s = s.logHistory) == null ||
                s.debug(
                  "[" +
                    this.$1 +
                    "][ReStoreVersionedSchemaProvider] Migrating from Hash schema provider, no changes are detected",
                ),
              Promise.resolve(
                o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA,
              )
            );
          } else {
            var u, c;
            return (
              (u = i.loggers.userFlow) == null ||
                u.addAnnotations(
                  o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                    string: { fromHashSchemaProvider: "changes" },
                  }),
                ),
              (c = i.loggers) == null ||
                (c = c.logHistory) == null ||
                c.debug(
                  "[" +
                    this.$1 +
                    "][ReStoreVersionedSchemaProvider] Migrating from Hash schema provider, changed detected, calling #migrateFromScratch",
                ),
              this.$3(!1, i)
            );
          }
        }),
        (t.migrate = async function (t) {
          var e, n, r, a, i, l, s, u, c;
          ((e = t.loggers.logHistory) == null ||
            e.debug(
              "[" +
                this.$1 +
                "][ReStoreVersionedSchemaProvider] Start migration",
            ),
            (n = t.loggers.userFlow) == null ||
              n.addPoint(this.$1 + "_migration_versioned_start"));
          var d = o(
              "ReStorePersistedMetadata",
            ).ReStorePersistedDefaultValuesVersion.hash(this.defaults),
            m = o(
              "ReStorePersistedMetadata",
            ).ReStorePersistedSchemaVersion.hash({
              tableIds: this.tableIds,
              tableNames: this.tableNames,
            }),
            p = new (o(
              "ReStorePersistedMetadata",
            ).ReStorePersistedSchemaVersion)(this.$1),
            _ = new (o(
              "ReStorePersistedMetadata",
            ).ReStorePersistedDefaultValuesVersion)(this.$1),
            f = await p.read(t.storeTx),
            g =
              (r = await _.read(t.storeTx)) == null
                ? void 0
                : r.defaultValuesVersion,
            h = this.$2.versions[this.$2.targetVersion];
          ((a = t.loggers.userFlow) == null ||
            a.addAnnotations(
              o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                int: {
                  defaultValuesVersion: d,
                  schemaVersion: m,
                  storeDefaultValuesVersion: g,
                  storeRevision: f == null ? void 0 : f.revision,
                  storeSchemaVersion: f == null ? void 0 : f.schemaVersion,
                  targetRevision: h.revision,
                },
                string: {
                  schemaProviderType: "versioned",
                  storeVersion: f == null ? void 0 : f.version,
                  targetVersion: this.$2.targetVersion,
                },
              }),
            ),
            (i = t.loggers.logHistory) == null ||
              i.debug(
                "storeSchemaVersion: " +
                  ((l = f == null ? void 0 : f.schemaVersion) != null
                    ? l
                    : "null"),
              ),
            (s = t.loggers.logHistory) == null ||
              s.debug(
                "storeDefaultValuesVersion: " + (g != null ? g : "null"),
              ));
          var y = await (f != null && f.revision != null && f.version != null
            ? this.$5(f.version, f.revision, t)
            : (f == null ? void 0 : f.schemaVersion) != null
              ? this.$6(g, f.schemaVersion, m, d, t)
              : this.$3(!0, t));
          if (
            y !== o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED
          ) {
            var C;
            (p.write(t.storeTx, {
              revision: h.revision,
              schemaVersion: m,
              version: this.$2.targetVersion,
            }),
              _.write(t.storeTx, { defaultValuesVersion: d }),
              (C = t.loggers.logHistory) == null ||
                C.debug("version is written"));
          }
          return (
            (u = t.loggers.logHistory) == null ||
              u.debug(
                "[" +
                  this.$1 +
                  "][ReStoreVersionedSchemaProvider] End Migration. Result: " +
                  y +
                  ", SchemaVersion: " +
                  m +
                  ", Version: " +
                  this.$2.targetVersion +
                  ", Revision: " +
                  h.revision,
              ),
            (c = t.loggers.userFlow) == null ||
              c.addPoint(this.$1 + "_migration_versioned_end"),
            y
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
