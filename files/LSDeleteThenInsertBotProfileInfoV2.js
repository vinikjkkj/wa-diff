__d(
  "LSDeleteThenInsertBotProfileInfoV2",
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
            .table(299)
            .put({
              botId: e[0],
              isCreatedByViewer: e[1],
              description: e[4],
              tintColor: e[2],
              shortDescription: e[3],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSContactDeleteThenInsertBotProfileInfoV2StoredProcedure"),
      (e.__tables__ = ["bot_profile_info_v2"]),
      (a.exports = e));
  },
  null,
);
