__d(
  "LSUpdateThreadAuthorityAndMappingWithOTIDFromJID",
  [
    "LSShimGetServerThreadKeyFromJIDV2.nop",
    "LSUpdateThreadAuthorityAndMapping",
  ],
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
              return t
                .nativeOperation(
                  n("LSShimGetServerThreadKeyFromJIDV2.nop"),
                  e[0],
                )
                .then(function (e) {
                  var t;
                  return ((t = e), (r[0] = t[0]), t);
                });
            },
            function (o) {
              return (
                t.i64.neq(r[0], e[1]) ? (r[1] = r[0]) : (r[1] = void 0),
                t.storedProcedure(
                  n("LSUpdateThreadAuthorityAndMapping"),
                  e[0],
                  e[1],
                  r[1],
                )
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxUpdateThreadAuthorityAndMappingWithOTIDFromJIDStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
