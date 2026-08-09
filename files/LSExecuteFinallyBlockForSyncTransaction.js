__d(
  "LSExecuteFinallyBlockForSyncTransaction",
  ["LSFlushSyncTrace"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.sequence([
            function (n) {
              return t.forEach(
                t.filter(t.db.table(3).fetch([[["", e[1]]]]), function (n) {
                  return (
                    n.taskQueueName === "" &&
                    t.i64.eq(n.syncDatabaseId, e[1]) &&
                    t.i64.eq(n.epochId, e[2])
                  );
                }),
                function (n) {
                  var r = n.update,
                    o = n.item;
                  return r({
                    epochId:
                      !e[0] &&
                      t.i64.eq(o.failureCount, t.i64.cast([-1, 4294967295]))
                        ? o.epochId
                        : void 0,
                    failureCount: t.i64.eq(
                      o.failureCount,
                      t.i64.cast([-1, 4294967295]),
                    )
                      ? t.i64.cast([0, 0])
                      : t.i64.add(o.failureCount, t.i64.cast([0, 1])),
                  });
                },
              );
            },
            function (e) {
              return t.resolve();
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSCoreExecuteFinallyBlockForSyncTransactionStoredProcedure"),
      (e.__tables__ = ["network_requests"]),
      (a.exports = e));
  },
  null,
);
