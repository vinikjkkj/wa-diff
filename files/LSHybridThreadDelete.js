__d(
  "LSHybridThreadDelete",
  ["LSShimHybridThreadDeleteByThreadKey.nop"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (r) {
          return t.nativeOperation(
            n("LSShimHybridThreadDeleteByThreadKey.nop"),
            e[0],
          );
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxHybridThreadDeleteStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
