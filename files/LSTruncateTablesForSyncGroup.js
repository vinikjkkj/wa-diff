__d(
  "LSTruncateTablesForSyncGroup",
  ["LSTruncateThreadRangeTablesForSyncGroup"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (r) {
          return t.sequence([
            function (n) {
              return t.forEach(
                t.filter(t.db.table(9).fetch(), function (n) {
                  return (
                    (t.i64.eq(n.syncGroup, e[0]) ||
                      (t.i64.eq(n.syncGroup, void 0) &&
                        t.i64.eq(t.i64.cast([0, 1]), e[0]))) &&
                    ![
                      t.i64.cast([0, 17]),
                      t.i64.cast([0, 18]),
                      t.i64.cast([0, 19]),
                      t.i64.cast([0, 20]),
                      t.i64.cast([0, 21]),
                      t.i64.cast([0, 22]),
                      t.i64.cast([0, 23]),
                      t.i64.cast([0, 24]),
                      t.i64.cast([0, 25]),
                      t.i64.cast([0, 26]),
                      t.i64.cast([0, 27]),
                      t.i64.cast([0, 28]),
                    ].some(function (e) {
                      return t.i64.eq(n.threadType, e);
                    })
                  );
                }),
                function (e) {
                  return e.delete();
                },
              );
            },
            function (r) {
              return t.storedProcedure(
                n("LSTruncateThreadRangeTablesForSyncGroup"),
                e[0],
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxTruncateTablesForSyncGroupStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
