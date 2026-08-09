__d(
  "LSTruncateCommunityListTable",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (e) {
          return t.forEach(t.db.table(166).fetch(), function (e) {
            return e.delete();
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOmnistoreSettingsTruncateCommunityListTableStoredProcedure"),
      (e.__tables__ = ["cm_community_list"]),
      (a.exports = e));
  },
  null,
);
