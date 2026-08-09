__d(
  "LSDeleteExistingMessageRanges",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(t.db.table(13).fetch([[[e[0]]]]), function (e) {
            return e.delete();
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxDeleteExistingMessageRangesStoredProcedure"),
      (e.__tables__ = ["messages_ranges_v2__generated"]),
      (a.exports = e));
  },
  null,
);
