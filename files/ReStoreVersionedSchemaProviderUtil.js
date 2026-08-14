__d(
  "ReStoreVersionedSchemaProviderUtil",
  ["ReStoreMetadata"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = {
          tableIds: {},
          tableNames: o("ReStoreMetadata").RESTORE_METADATA_TABLES,
        },
        r = {};
      for (var a of Object.keys(e)) {
        var i,
          l = e[a],
          s = {},
          u = {};
        for (var c in l.indexes)
          ((s[c] = l.indexes[c].fields),
            l.indexes[c].ignoreNulls.length > 0 &&
              (u[c] = o("ReStoreMetadata").createPredicate(
                l.indexes[c].ignoreNulls,
              )));
        ((n.tableNames[a] = {
          autoIncrement: l.autoIncrement,
          cascadeUpdates: (i = t == null ? void 0 : t[a]) != null ? i : [],
          indexes: s,
          indexPredicates: u,
          name: a,
          primaryKeyIds: l.primaryKey.fields,
        }),
          l.id != null && (n.tableIds[l.id] = a),
          Object.keys(l.defaults).length > 0 && (r[a] = l.defaults));
      }
      return { defaults: r, tableData: n };
    }
    l.getTableData = e;
  },
  98,
);
