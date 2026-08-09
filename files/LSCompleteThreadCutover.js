__d(
  "LSCompleteThreadCutover",
  ["LSShimCompleteThreadCutover.nop"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t
            .nativeOperation(
              n("LSShimCompleteThreadCutover.nop"),
              e[0],
              e[1],
              e[2],
            )
            .then(function (e) {
              var t;
              return ((t = e), (r[0] = t[0]), t);
            });
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxCompleteThreadCutoverStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
