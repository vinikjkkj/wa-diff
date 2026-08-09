__d(
  "LSUpdateReadReceipt",
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
            t.filter(t.db.table(14).fetch([[[e[1], e[2]]]]), function (n) {
              return (
                t.i64.eq(n.threadKey, e[1]) &&
                t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                t.i64.eq(n.contactId, e[2]) &&
                t.i64.lt(n.readWatermarkTimestampMs, e[0])
              );
            }),
            function (n) {
              var r = n.update,
                o = n.item;
              return r({
                readWatermarkTimestampMs: e[0],
                readActionTimestampMs: t.i64.gt(e[3], t.i64.cast([0, 0]))
                  ? e[3]
                  : o.readActionTimestampMs,
              });
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpdateReadReceiptStoredProcedure"),
      (e.__tables__ = ["participants"]),
      (a.exports = e));
  },
  null,
);
