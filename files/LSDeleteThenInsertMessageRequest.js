__d(
  "LSDeleteThenInsertMessageRequest",
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
            .table(34)
            .put({ threadKey: e[0], messageRequestStatus: e[2] });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxDeleteThenInsertMessageRequestStoredProcedure"),
      (e.__tables__ = ["message_requests"]),
      (a.exports = e));
  },
  null,
);
