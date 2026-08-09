__d(
  "LSDeleteThenInsertRankingScore",
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
            .table(134)
            .put({
              contactId: e[0],
              scoreType: e[1],
              contactType: e[2],
              score: e[3],
              scoreIndex: e[4],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSRankingDeleteThenInsertRankingScoreStoredProcedure"),
      (e.__tables__ = ["ranking_scores"]),
      (a.exports = e));
  },
  null,
);
