__d(
  "LSDeleteThenInsertCmChannelList",
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
            .table(167)
            .put({
              communityId: e[0],
              threadId: e[1],
              categoryId: e[2],
              channelPrivacy: e[3],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOmnistoreSettingsDeleteThenInsertCmChannelListStoredProcedure"),
      (e.__tables__ = ["cm_channel_list"]),
      (a.exports = e));
  },
  null,
);
