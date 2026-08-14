__d(
  "ReStoreMetadata",
  [
    "ReStoreDefaultValuesMetadata",
    "ReStoreIndexMetadata",
    "ReStorePersistedMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return !0;
    }
    function u(e) {
      var t = e.reduce(function (e, t) {
        return function (n) {
          return n[t] != null && e(n);
        };
      }, s);
      return (
        (t.toString = function () {
          return "dynamic predicate on [" + e.join(",") + "]";
        }),
        t
      );
    }
    function c(e) {
      return function (n) {
        var t = {},
          r = {};
        for (var o of n)
          for (var a of o) {
            var i, l, s, u, c;
            (a.id != null && (t[a.id] = a.name),
              (r[a.name] = {
                autoIncrement: (i = a.auto_increment) != null ? i : !1,
                cascadeUpdates: (l = e[a.name]) != null ? l : [],
                indexes:
                  (s = Object.fromEntries(
                    Object.entries((u = a.indexes) != null ? u : {}).map(
                      function (e) {
                        var t = e[0],
                          n = e[1].columns;
                        return [t, n];
                      },
                    ),
                  )) != null
                    ? s
                    : {},
                indexPredicates: Object.fromEntries(
                  Object.entries((c = a.indexes) != null ? c : {})
                    .filter(function (e) {
                      var t = e[0],
                        n = e[1];
                      return n.predicate;
                    })
                    .map(function (e) {
                      var t = e[0],
                        n = e[1];
                      return [t, n.predicate];
                    }),
                ),
                name: a.name,
                primaryKeyIds: a.primary_key,
              }));
          }
        return { tableIds: t, tableNames: r };
      };
    }
    var d =
      ((e = {}),
      (e[o("ReStoreDefaultValuesMetadata").defaultValuesTableName] = {
        autoIncrement: !1,
        cascadeUpdates: [],
        indexes: {},
        name: o("ReStoreDefaultValuesMetadata").defaultValuesTableName,
        primaryKeyIds: ["t"],
      }),
      (e[o("ReStoreIndexMetadata").indicesTableName] = {
        autoIncrement: !1,
        cascadeUpdates: [],
        indexes: {},
        name: o("ReStoreIndexMetadata").indicesTableName,
        primaryKeyIds: ["tableName", "indexName"],
      }),
      (e[o("ReStorePersistedMetadata").schemaMetadataTableName] = {
        autoIncrement: !1,
        cascadeUpdates: [],
        indexes: {},
        name: o("ReStorePersistedMetadata").schemaMetadataTableName,
        primaryKeyIds: [],
      }),
      e);
    ((l.createPredicate = u),
      (l.getBuildTableData = c),
      (l.RESTORE_METADATA_TABLES = d));
  },
  98,
);
