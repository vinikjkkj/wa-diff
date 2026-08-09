__d(
  "LSUpsertSyncGroupThreadsRange",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db
            .table(220)
            .put({
              syncGroup: e[0],
              parentThreadKey: e[1],
              minLastActivityTimestampMs: e[2],
              hasMoreBefore: e[3],
              isLoadingBefore: e[4],
              minThreadKey: e[5],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpsertSyncGroupThreadsRangeStoredProcedure"),
      (e.__tables__ = ["sync_group_threads_ranges"]),
      (a.exports = e));
  },
  null,
);
