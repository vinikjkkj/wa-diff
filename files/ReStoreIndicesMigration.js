__d(
  "ReStoreIndicesMigration",
  [
    "LSPlatformLsInitLog",
    "ReStoreCommonUtils",
    "ReStoreIndexMetadata",
    "ReStoreOperationLock",
    "ReStoreUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {},
            r = yield o("ReStoreUtils").collectIterator(
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield e(t, n),
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
                  [
                    p == null ? void 0 : p.index,
                    p == null ? void 0 : p.predicate,
                  ],
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              yield e[o("ReStoreIndexMetadata").indicesTableName].put(
                o("ReStoreIndexMetadata").indexDataToValue(u),
              );
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (var n in t) {
            var r = t[n];
            for (var a in r) {
              var i,
                l = r[a].key;
              yield (i =
                e[o("ReStoreIndexMetadata").indicesTableName]).delete.apply(
                i,
                l,
              );
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, a) {
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
    function g(e, t, r, a) {
      var i = new WeakMap();
      o("LSPlatformLsInitLog").addPoint("index_migration_start");
      var l = function (t, n) {
        o("LSPlatformLsInitLog").addPoint("index_migration_end_failure", {
          string: {
            index_migration_failure_point: n,
            index_migration_failure_reason: String(t),
          },
        });
      };
      return u(i, e.transaction, t)
        .then(
          (function () {
            var i = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var i = n.toRemove,
                  l = n.toUpdate,
                  s = Array.from(
                    new Set([].concat(Object.keys(l), Object.keys(i))),
                  );
                if (
                  (o("LSPlatformLsInitLog").addAnnotations({
                    int: { index_migration_rebuild_tables_count: s.length },
                  }),
                  a === !1)
                ) {
                  for (var u of s)
                    if (t.tableNames[u] != null) {
                      var c,
                        m,
                        _ = Array.from(
                          new Set(
                            [].concat(
                              Object.keys((c = l[u]) != null ? c : {}),
                              Object.keys((m = i[u]) != null ? m : {}),
                            ),
                          ),
                        );
                      yield f(e, u, t, r, _);
                    }
                }
                (yield d(e.transaction, l),
                  yield p(e.transaction, i),
                  o("LSPlatformLsInitLog").addPoint("index_migration_end"));
              },
            );
            return function (e) {
              return i.apply(this, arguments);
            };
          })(),
          function (e) {
            return l(e, "findIndicesToUpdateOrRemove");
          },
        )
        .catch(function (e) {
          return l(e, "rebuildIndices");
        });
    }
    l.runMigrationForIndicesIfNeeded = g;
  },
  98,
);
