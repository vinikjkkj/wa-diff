__d(
  "LSDeleteThenInsertCmCommunityList",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db.table(166).put({ communityId: e[0] });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOmnistoreSettingsDeleteThenInsertCmCommunityListStoredProcedure"),
      (e.__tables__ = ["cm_community_list"]),
      (a.exports = e));
  },
  null,
);
