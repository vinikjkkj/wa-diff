__d(
  "ReStoreVersionedSchemaProvider",
  [
    "FBLogger",
    "Promise",
    "ReStoreDefaultValueMigration",
    "ReStoreIndicesMigration",
    "ReStoreMigrateUtil",
    "ReStorePersistedMetadata",
    "ReStoreVersionedSchemaProviderUtil",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n) {
          ((this.defaults = {}), (this.$1 = ""), (this.$1 = e), (this.$2 = t));
          var r = t.versions[t.targetVersion],
            a = o("ReStoreVersionedSchemaProviderUtil").getTableData(
              r.tables,
              n,
            ),
            i = a.defaults,
            l = a.tableData;
          ((this.tableNames = l.tableNames),
            (this.tableIds = l.tableIds),
            (this.defaults = i));
        }
        var a = t.prototype;
        return (
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n, r, a, i;
                ((n = t.loggers.logHistory) == null ||
                  n.debug(
                    "[" +
                      this.$1 +
                      "][ReStoreVersionedSchemaProvider] Migrating from scratch...",
                  ),
                  (r = t.loggers.userFlow) == null ||
                    r.addPoint(this.$1 + "_migration_versioned_from_scratch"));
                var l = {
                  tableIds: this.tableIds,
                  tableNames: this.tableNames,
                };
                return (
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    t.transaction,
                    l,
                    e,
                    this.defaults,
                  ),
                  (a = t.loggers.logHistory) == null ||
                    a.debug("migration default values finished"),
                  yield o(
                    "ReStoreIndicesMigration",
                  ).runMigrationForIndicesIfNeeded(t, l, this.defaults, e),
                  (i = t.loggers.logHistory) == null ||
                    i.debug("migration indices finished"),
                  e
                    ? o("ReStoreMigrateUtil").ReStoreMigrateResult
                        .UPDATE_METADATA
                    : o("ReStoreMigrateUtil").ReStoreMigrateResult
                        .UPGRADE_COMPLETE
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = function (o) {
            var t = this,
              a = this.$2.versionOrder.indexOf(o);
            if (a === -1)
              throw r("FBLogger")(
                "ReStoreVersionedSchemaProvider",
              ).mustfixThrow(
                "[%s][ReStoreVersionedSchemaProvider] Cannot resolve version %s",
                this.$1,
                o,
              );
            return (e || (e = n("Promise"))).all(
              this.$2.versionOrder
                .slice(
                  a,
                  this.$2.versionOrder.indexOf(this.$2.targetVersion) + 1,
                )
                .map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (e in t.$2.versions)
                          return { meta: t.$2.versions[e], version: e };
                        if (e in t.$2.legacyVersions)
                          return {
                            meta: yield t.$2.legacyVersions[e].load(),
                            version: e,
                          };
                        throw r("FBLogger")(
                          "ReStoreVersionedSchemaProvider",
                        ).mustfixThrow(
                          "[%s][ReStoreVersionedSchemaProvider] Cannot find version %s in either versions or legacyVersions",
                          t.$1,
                          e,
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
            );
          }),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a,
                  i,
                  l,
                  s = this.$2.targetVersion,
                  u = this.$2.versions[s].revision;
                (a = n.loggers) == null ||
                  (a = a.logHistory) == null ||
                  a.debug(
                    "[" +
                      this.$1 +
                      "][ReStoreVersionedSchemaProvider] currentVersion: " +
                      e +
                      "R" +
                      t +
                      ", targetVersion: " +
                      s +
                      "R" +
                      u,
                  );
                var c = s;
                if (c === e && u === t) {
                  var d;
                  return (
                    (d = n.loggers) == null ||
                      (d = d.logHistory) == null ||
                      d.debug(
                        "[" +
                          this.$1 +
                          "][ReStoreVersionedSchemaProvider] DB already up to date, skipping migration",
                      ),
                    o("ReStoreMigrateUtil").ReStoreMigrateResult
                      .NO_UPGRADE_NEEDED
                  );
                }
                ((i = n.loggers.logHistory) == null ||
                  i.debug("migration versioned incremental"),
                  (l = n.loggers.userFlow) == null ||
                    l.addPoint(this.$1 + "_migration_versioned_incremental"));
                var m = yield this.$4(e);
                if (m.length === 0 || t > u)
                  return (
                    r("FBLogger")(
                      "ReStoreVersionedSchemaProvider",
                      "migrate",
                    ).mustfix(
                      "[%s][ReStoreVersionedSchemaProvider][DANGEROUS] Backward migration required from %sR%s to %sR%s, running #migrateFromScratch",
                      this.$1,
                      e,
                      "" + t,
                      s,
                      "" + u,
                    ),
                    this.$3(!1, n)
                  );
                for (var p of m)
                  for (
                    var _ = p.meta,
                      f = p.version,
                      g = f,
                      h = g === e ? t + 1 : 0;
                    h <= _.revision;
                    h++
                  ) {
                    var y, C, b, v, S, R, L;
                    ((y = n.loggers) == null ||
                      (y = y.logHistory) == null ||
                      y.debug(
                        "[" +
                          this.$1 +
                          "][ReStoreVersionedSchemaProvider] Migrating to " +
                          f +
                          "R" +
                          h,
                      ),
                      (C = n.loggers.userFlow) == null ||
                        C.addPoint(
                          this.$1 +
                            "_migration_versioned_" +
                            f +
                            "{$revision}_start",
                        ),
                      yield (b = (v = _.upgrade)[h]) == null
                        ? void 0
                        : b.call(v, n),
                      yield (S = (R = _.afterUpgrade)[h]) == null
                        ? void 0
                        : S.call(R, n.transaction),
                      (L = n.loggers.userFlow) == null ||
                        L.addPoint(
                          this.$1 +
                            "_migration_versioned_" +
                            f +
                            "{$revision}_end",
                        ));
                  }
                return o("ReStoreMigrateUtil").ReStoreMigrateResult
                  .UPGRADE_COMPLETE;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = function (r, a, i, l, s) {
            var t;
            if (
              ((t = s.loggers.userFlow) == null ||
                t.addPoint(this.$1 + "_migration_versioned_hash_start"),
              a === i && r === l)
            ) {
              var u, c;
              return (
                (u = s.loggers.userFlow) == null ||
                  u.addAnnotations(
                    o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                      string: { fromHashSchemaProvider: "no_changes" },
                    }),
                  ),
                (c = s.loggers) == null ||
                  (c = c.logHistory) == null ||
                  c.debug(
                    "[" +
                      this.$1 +
                      "][ReStoreVersionedSchemaProvider] Migrating from Hash schema provider, no changes are detected",
                  ),
                (e || (e = n("Promise"))).resolve(
                  o("ReStoreMigrateUtil").ReStoreMigrateResult.UPDATE_METADATA,
                )
              );
            } else {
              var d, m;
              return (
                (d = s.loggers.userFlow) == null ||
                  d.addAnnotations(
                    o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                      string: { fromHashSchemaProvider: "changes" },
                    }),
                  ),
                (m = s.loggers) == null ||
                  (m = m.logHistory) == null ||
                  m.debug(
                    "[" +
                      this.$1 +
                      "][ReStoreVersionedSchemaProvider] Migrating from Hash schema provider, changed detected, calling #migrateFromScratch",
                  ),
                this.$3(!1, s)
              );
            }
          }),
          (a.migrate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t, n, r, a, i, l, s, u, c;
                ((t = e.loggers.logHistory) == null ||
                  t.debug(
                    "[" +
                      this.$1 +
                      "][ReStoreVersionedSchemaProvider] Start migration",
                  ),
                  (n = e.loggers.userFlow) == null ||
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
                  f = yield p.read(e.storeTx),
                  g =
                    (r = yield _.read(e.storeTx)) == null
                      ? void 0
                      : r.defaultValuesVersion,
                  h = this.$2.versions[this.$2.targetVersion];
                ((a = e.loggers.userFlow) == null ||
                  a.addAnnotations(
                    o("ReStoreMigrateUtil").prefixAnnotations(this.$1, {
                      int: {
                        defaultValuesVersion: d,
                        schemaVersion: m,
                        storeDefaultValuesVersion: g,
                        storeRevision: f == null ? void 0 : f.revision,
                        storeSchemaVersion:
                          f == null ? void 0 : f.schemaVersion,
                        targetRevision: h.revision,
                      },
                      string: {
                        schemaProviderType: "versioned",
                        storeVersion: f == null ? void 0 : f.version,
                        targetVersion: this.$2.targetVersion,
                      },
                    }),
                  ),
                  (i = e.loggers.logHistory) == null ||
                    i.debug(
                      "storeSchemaVersion: " +
                        ((l = f == null ? void 0 : f.schemaVersion) != null
                          ? l
                          : "null"),
                    ),
                  (s = e.loggers.logHistory) == null ||
                    s.debug(
                      "storeDefaultValuesVersion: " + (g != null ? g : "null"),
                    ));
                var y = yield f != null &&
                f.revision != null &&
                f.version != null
                  ? this.$5(f.version, f.revision, e)
                  : (f == null ? void 0 : f.schemaVersion) != null
                    ? this.$6(g, f.schemaVersion, m, d, e)
                    : this.$3(!0, e);
                if (
                  y !==
                  o("ReStoreMigrateUtil").ReStoreMigrateResult.NO_UPGRADE_NEEDED
                ) {
                  var C;
                  (p.write(e.storeTx, {
                    revision: h.revision,
                    schemaVersion: m,
                    version: this.$2.targetVersion,
                  }),
                    _.write(e.storeTx, { defaultValuesVersion: d }),
                    (C = e.loggers.logHistory) == null ||
                      C.debug("version is written"));
                }
                return (
                  (u = e.loggers.logHistory) == null ||
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
                  (c = e.loggers.userFlow) == null ||
                    c.addPoint(this.$1 + "_migration_versioned_end"),
                  y
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
