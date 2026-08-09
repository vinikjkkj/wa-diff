__d(
  "LSUpsertFolderSeenTimestamp",
  [],
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
              return t.i64.gt(e[1], t.i64.cast([0, 0]))
                ? t.db
                    .table(35)
                    .fetch([[[e[0]]]])
                    .next()
                    .then(function (n, r) {
                      var o = n.done,
                        a = n.value;
                      return o
                        ? t.db
                            .table(35)
                            .add({
                              parentThreadKey: e[0],
                              lastSeenRequestTimestampMs: e[1],
                            })
                        : ((r = a.item),
                          t.i64.lt(r.lastSeenRequestTimestampMs, e[1])
                            ? t.forEach(
                                t.db.table(35).fetch([[[e[0]]]]),
                                function (t) {
                                  var n = t.update,
                                    r = t.item;
                                  return n({
                                    lastSeenRequestTimestampMs: e[1],
                                  });
                                },
                              )
                            : t.resolve());
                    })
                : t.resolve();
            },
            function (n) {
              return t.db
                .table(9)
                .fetch([[[e[0]]]])
                .next()
                .then(function (n, r) {
                  var o = n.done,
                    a = n.value;
                  return o
                    ? 0
                    : ((r = a.item),
                      t.i64.lt(r.lastReadWatermarkTimestampMs, e[1])
                        ? t.forEach(
                            t.db.table(9).fetch([[[e[0]]]]),
                            function (t) {
                              var n = t.update,
                                r = t.item;
                              return n({ lastReadWatermarkTimestampMs: e[1] });
                            },
                          )
                        : t.resolve());
                });
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpsertFolderSeenTimestampStoredProcedure"),
      (e.__tables__ = ["folder_metadata", "threads"]),
      (a.exports = e));
  },
  null,
);
