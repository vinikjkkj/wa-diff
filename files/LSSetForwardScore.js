__d(
  "LSSetForwardScore",
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
              t.db.table(12).fetch([[[e[0], e[2], e[1]]]]),
              function (n) {
                return (
                  t.i64.eq(n.threadKey, e[0]) &&
                  t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                  t.i64.eq(n.timestampMs, e[2]) &&
                  n.messageId === e[1]
                );
              },
            ),
            function (t) {
              var n = t.update,
                r = t.item;
              return n({ forwardScore: e[3] });
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxSetForwardScoreStoredProcedure"),
      (e.__tables__ = ["messages"]),
      (a.exports = e));
  },
  null,
);
