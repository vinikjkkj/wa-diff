__d(
  "LSDeleteThenInsertRankingRequest",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db.table(135).put({ scoreType: e[0], requestId: e[1] });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSRankingDeleteThenInsertRankingRequestStoredProcedure"),
      (e.__tables__ = ["ranking_requests"]),
      (a.exports = e));
  },
  null,
);
