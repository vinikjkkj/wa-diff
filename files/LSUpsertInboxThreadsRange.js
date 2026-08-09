__d(
  "LSUpsertInboxThreadsRange",
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
            .table(198)
            .put({
              syncGroup: e[0],
              minLastActivityTimestampMs: e[1],
              hasMoreBefore: e[2],
              isLoadingBefore: e[3],
              minThreadKey: e[4],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpsertInboxThreadsRangeStoredProcedure"),
      (e.__tables__ = ["inbox_threads_ranges"]),
      (a.exports = e));
  },
  null,
);
