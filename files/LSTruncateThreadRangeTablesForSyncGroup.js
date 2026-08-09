__d(
  "LSTruncateThreadRangeTablesForSyncGroup",
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
              return t.i64.eq(e[0], t.i64.cast([0, 1]))
                ? t.forEach(
                    t.filter(t.db.table(10).fetch(), function (e) {
                      return t.i64.eq(
                        t.i64.cast([0, 1]) == null
                          ? t.i64.cast([0, 1])
                          : t.i64.cast([0, 1]),
                        t.i64.cast([0, 1]),
                      );
                    }),
                    function (e) {
                      return e.delete();
                    },
                  )
                : t.i64.eq(e[0], t.i64.cast([0, 95]))
                  ? t.forEach(
                      t.filter(
                        t.db
                          .table(10)
                          .fetch([
                            [
                              [t.i64.cast([0, 0])],
                              [t.i64.cast([-1, 4294967295])],
                            ],
                          ]),
                        function (e) {
                          return (
                            t.i64.eq(
                              t.i64.cast([0, 1]) == null
                                ? t.i64.cast([0, 1])
                                : t.i64.cast([0, 1]),
                              t.i64.cast([0, 1]),
                            ) &&
                            (t.i64.eq(e.parentThreadKey, t.i64.cast([0, 0])) ||
                              t.i64.eq(
                                e.parentThreadKey,
                                t.i64.cast([-1, 4294967295]),
                              ))
                          );
                        },
                      ),
                      function (e) {
                        return e.delete();
                      },
                    )
                  : t.resolve(0);
            },
            function (n) {
              return t.i64.eq(e[0], t.i64.cast([0, 1]))
                ? t.forEach(
                    t.filter(t.db.table(247).fetch(), function (e) {
                      return t.i64.eq(
                        e.syncGroup == null ? t.i64.cast([0, 1]) : e.syncGroup,
                        t.i64.cast([0, 1]),
                      );
                    }),
                    function (e) {
                      return e.delete();
                    },
                  )
                : t.resolve();
            },
            function (n) {
              return t.forEach(t.db.table(198).fetch([[[e[0]]]]), function (e) {
                return e.delete();
              });
            },
            function (n) {
              return t.forEach(t.db.table(220).fetch([[[e[0]]]]), function (e) {
                return e.delete();
              });
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxTruncateThreadRangeTablesForSyncGroupStoredProcedure"),
      (e.__tables__ = [
        "threads_ranges_v2__generated",
        "filtered_threads_ranges_v3__generated",
        "inbox_threads_ranges",
        "sync_group_threads_ranges",
      ]),
      (a.exports = e));
  },
  null,
);
