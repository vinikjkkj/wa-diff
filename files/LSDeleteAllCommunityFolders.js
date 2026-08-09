__d(
  "LSDeleteAllCommunityFolders",
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
              return t.forEach(t.db.table(162).fetch(), function (e) {
                return e.delete();
              });
            },
            function (e) {
              return t.forEach(
                t.db
                  .table(9)
                  .fetch([
                    [[t.i64.cast([0, 17])]],
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
    ((e.__sproc_name__ = "LSMailboxDeleteAllCommunityFoldersStoredProcedure"),
      (e.__tables__ = ["community_folders", "threads"]),
      (a.exports = e));
  },
  null,
);
