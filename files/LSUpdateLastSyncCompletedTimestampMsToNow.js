__d(
  "LSUpdateLastSyncCompletedTimestampMsToNow",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return (
            (n[0] = t.i64.of_float(Date.now())),
            t.forEach(t.db.table(1).fetch([[[e[0]]]]), function (e) {
              var t = e.update,
                r = e.item;
              return t({ lastSyncCompletedTimestampMs: n[0] });
            })
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSCoreUpdateLastSyncCompletedTimestampMsToNowStoredProcedure"),
      (e.__tables__ = ["sync_groups"]),
      (a.exports = e));
  },
  null,
);
