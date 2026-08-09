__d(
  "LSClearMessagePlaceholderRange",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(
            t.filter(
              t.db.table(13).fetch([[[e[0], t.i64.cast([0, 0])]]]),
              function (n) {
                return (
                  t.i64.eq(n.threadKey, e[0]) &&
                  n.minMessageId === e[1] &&
                  t.i64.eq(t.i64.cast([0, 0]), n.minTimestampMs) &&
                  t.i64.eq(e[2], n.maxTimestampMs)
                );
              },
            ),
            function (e) {
              return e.delete();
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxClearMessagePlaceholderRangeStoredProcedure"),
      (e.__tables__ = ["messages_ranges_v2__generated"]),
      (a.exports = e));
  },
  null,
);
