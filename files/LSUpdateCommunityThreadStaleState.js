__d(
  "LSUpdateCommunityThreadStaleState",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t
            .filter(t.db.table(9).fetch([[[e[0]]]]), function (n) {
              return (
                t.i64.eq(n.threadKey, e[0]) &&
                ([
                  t.i64.cast([0, 23]),
                  t.i64.cast([0, 21]),
                  t.i64.cast([0, 18]),
                  t.i64.cast([0, 26]),
                  t.i64.cast([0, 27]),
                ].some(function (e) {
                  return t.i64.eq(n.threadType, e);
                }) ||
                  t.i64.eq(n.threadType, t.i64.cast([0, 152])))
              );
            })
            .next()
            .then(function (n, r) {
              var o = n.done,
                a = n.value;
              return o
                ? 0
                : ((r = a.item),
                  t.db
                    .table(294)
                    .fetch([[[e[0]]]])
                    .next()
                    .then(function (n, r) {
                      var o = n.done,
                        a = n.value;
                      return o
                        ? t.db
                            .table(294)
                            .add({
                              threadKey: e[0],
                              threadQueueSequenceId: t.i64.cast([0, 0]),
                              isStale: e[1],
                            })
                        : ((r = a.item),
                          t.forEach(
                            t.db.table(294).fetch([[[e[0]]]]),
                            function (t) {
                              var n = t.update,
                                r = t.item;
                              return n({ isStale: e[1] });
                            },
                          ));
                    }));
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxUpdateCommunityThreadStaleStateStoredProcedure"),
      (e.__tables__ = ["threads", "community_thread_sync_info"]),
      (a.exports = e));
  },
  null,
);
