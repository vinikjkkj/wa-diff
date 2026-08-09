__d(
  "LSClearPinnedMessages",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(t.db.table(205).fetch([[[e[0]]]]), function (e) {
            return e.delete();
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxClearPinnedMessagesStoredProcedure"),
      (e.__tables__ = ["msg_pinned_messages_v2"]),
      (a.exports = e));
  },
  null,
);
