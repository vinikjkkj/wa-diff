__d(
  "LSTruncateMetadataThreads",
  ["LSTruncateMetadataThreads.nop"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (e) {
          return t.nativeOperation(n("LSTruncateMetadataThreads.nop"));
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxTruncateMetadataThreadsStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
