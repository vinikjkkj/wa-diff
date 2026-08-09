__d(
  "LSDeleteAllCommunityChannelCategories",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (e) {
          return t.sequence([
            function (e) {
              return t.forEach(t.db.table(182).fetch(), function (e) {
                return e.delete();
              });
            },
            function (e) {
              return t.forEach(
                t.db
                  .table(9)
                  .fetch([
                    [[t.i64.cast([0, 20])]],
                    "threadTypeLastActivityTimestampMs",
                  ]),
                function (e) {
                  return e.delete();
                },
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxDeleteAllCommunityChannelCategoriesStoredProcedure"),
      (e.__tables__ = ["cm_category_list", "threads"]),
      (a.exports = e));
  },
  null,
);
