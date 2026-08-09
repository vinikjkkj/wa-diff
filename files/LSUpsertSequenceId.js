__d(
  "LSUpsertSequenceId",
  ["LSGetViewerFBID"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (e) {
              return t.storedProcedure(n("LSGetViewerFBID")).then(function (e) {
                var t;
                return ((t = e), (r[0] = t[0]), t);
              });
            },
            function (n) {
              return (
                t.i64.neq(e[1], void 0) ? (r[1] = e[1]) : (r[1] = r[0]),
                t.db
                  .table(25)
                  .put({ id: r[1], lastAppliedMailboxSequenceId: e[0] })
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpsertSequenceIdStoredProcedure"),
      (e.__tables__ = ["mailbox_metadata"]),
      (a.exports = e));
  },
  null,
);
