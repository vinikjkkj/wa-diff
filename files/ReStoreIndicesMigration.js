__d(
  "ReStoreIndicesMigration",
  [
    "LSPlatformLsInitLog",
    "ReStoreCommonUtils",
    "ReStoreIndexMetadata",
    "ReStoreOperationLock",
    "ReStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = {},
        r = await o("ReStoreUtils").collectIterator(
          t[o("ReStoreIndexMetadata").indicesTableName].entries(e),
        );
      for (var a of r) {
        var i = a[0],
          l = a[1];
        if (i != null) {
          var s,
            u = o("ReStoreIndexMetadata").tryParseIndexData(l);
          if (u == null) continue;
          var c = u.indexName,
            d = u.tableName;
          ((n[d] = (s = n[d]) != null ? s : {}),
            (n[d][c] = babelHelpers.extends(
              { index: u.data, key: i },
              u.predicate == null ? {} : { predicate: u.predicate },
            )));
        }
      }
      return n;
    }
    async function s(t, n, r) {
      var a = await e(t, n),
        i = {};
      for (var l in r.tableNames) {
        var s = r.tableNames[l];
        for (var u in s.indexes) {
          var c,
            d,
            m = [
              s.indexes[u],
              (c = s.indexPredicates) == null || (c = c[u]) == null
                ? void 0
                : c.toString(),
            ],
            p = (d = a[l]) == null ? void 0 : d[u];
          if (
            o("ReStoreIndexMetadata").indicesDiffer(
              [p == null ? void 0 : p.index, p == null ? void 0 : p.predicate],
              m,
            )
          ) {
            var _;
            ((i[l] = (_ = i[l]) != null ? _ : {}), (i[l][u] = m));
          }
        }
      }
      var f = {};
      for (var g in r.tableNames)
        if (g in a) {
          var h = a[g];
          for (var y in h) {
            var C,
              b = h[y],
              v =
                (C = r.tableNames[g]) == null || (C = C.indexes) == null
                  ? void 0
                  : C[y];
            if (v == null) {
              var S;
              ((f[g] = (S = f[g]) != null ? S : {}), (f[g][y] = b));
            }
          }
        }
      return { toRemove: f, toUpdate: i };
    }
    async function u(e, t) {
      for (var n in t) {
        var r = t[n];
        for (var a in r) {
          var i = r[a],
            l = i[0],
            s = i[1],
            u = babelHelpers.extends(
              { data: l, indexName: a, tableName: n },
              s == null ? {} : { predicate: s },
            );
          await e[o("ReStoreIndexMetadata").indicesTableName].put(
            o("ReStoreIndexMetadata").indexDataToValue(u),
          );
        }
      }
    }
    async function c(e, t) {
      for (var n in t) {
        var r = t[n];
        for (var a in r) {
          var i,
            l = r[a].key;
          await (i =
            e[o("ReStoreIndexMetadata").indicesTableName]).delete.apply(i, l);
        }
      }
    }
    function d(e, t, n, r, a) {
      return new (o(
        "ReStoreOperationLock",
      ).ReStoreOperationLock)().chainPromiseOrValue(function (i) {
        return o("ReStoreCommonUtils").gen(
          o("ReStoreUtils").rebuildIndicesLocked(
            e.changedKeys,
            e.clearCache,
            e.storeTx,
            new WeakMap(),
            e.hooksManager,
            n,
            r,
            t,
            a,
            i,
          ),
        );
      });
    }
    function m(e, t, n, r) {
      var a = new WeakMap();
      o("LSPlatformLsInitLog").addPoint("index_migration_start");
      var i = function (t, n) {
        o("LSPlatformLsInitLog").addPoint("index_migration_end_failure", {
          string: {
            index_migration_failure_point: n,
            index_migration_failure_reason: String(t),
          },
        });
      };
      return s(a, e.transaction, t)
        .then(
          async function (a) {
            var i = a.toRemove,
              l = a.toUpdate,
              s = Array.from(
                new Set([].concat(Object.keys(l), Object.keys(i))),
              );
            if (
              (o("LSPlatformLsInitLog").addAnnotations({
                int: { index_migration_rebuild_tables_count: s.length },
              }),
              r === !1)
            ) {
              for (var m of s)
                if (t.tableNames[m] != null) {
                  var p,
                    _,
                    f = Array.from(
                      new Set(
                        [].concat(
                          Object.keys((p = l[m]) != null ? p : {}),
                          Object.keys((_ = i[m]) != null ? _ : {}),
                        ),
                      ),
                    );
                  await d(e, m, t, n, f);
                }
            }
            (await u(e.transaction, l),
              await c(e.transaction, i),
              o("LSPlatformLsInitLog").addPoint("index_migration_end"));
          },
          function (e) {
            return i(e, "findIndicesToUpdateOrRemove");
          },
        )
        .catch(function (e) {
          return i(e, "rebuildIndices");
        });
    }
    l.runMigrationForIndicesIfNeeded = m;
  },
  98,
);
