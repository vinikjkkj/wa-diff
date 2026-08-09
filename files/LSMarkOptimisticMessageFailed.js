__d(
  "LSMarkOptimisticMessageFailed",
  ["LSOnSendMessageFailure.nop"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (o) {
              return (
                e[2] === !0
                  ? (r[0] = t.i64.cast([0, 5]))
                  : (r[0] = t.i64.cast([0, 4])),
                e[2] === !0
                  ? (r[1] = t.i64.cast([0, 5]))
                  : (r[1] = t.i64.cast([0, 4])),
                e[2] === !0
                  ? (r[2] = t.i64.cast([0, 5]))
                  : (r[2] = t.i64.cast([0, 4])),
                t.nativeOperation(n("LSOnSendMessageFailure.nop"), e[0], e[1])
              );
            },
            function (n) {
              return t.forEach(
                t.filter(
                  t.db.table(12).fetch([[[e[0]]], "optimistic"]),
                  function (n) {
                    return (
                      n.offlineThreadingId === e[0] &&
                      t.i64.eq(n.authorityLevel, t.i64.cast([0, 20]))
                    );
                  },
                ),
                function (e) {
                  var t = e.update,
                    n = e.item;
                  return t({ sendStatus: r[0], sendStatusV2: r[1] });
                },
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxMarkOptimisticMessageFailedStoredProcedure"),
      (e.__tables__ = ["messages"]),
      (a.exports = e));
  },
  null,
);
