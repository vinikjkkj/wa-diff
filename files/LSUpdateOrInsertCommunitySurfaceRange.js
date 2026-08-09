__d(
  "LSUpdateOrInsertCommunitySurfaceRange",
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
            .table(253)
            .put({
              surfaceType: e[0],
              communityKey: e[1],
              isLoadingAfter: !1,
              hasMoreAfter: e[2],
              nextPageCursor: e[4],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxUpdateOrInsertCommunitySurfaceRangeStoredProcedure"),
      (e.__tables__ = ["community_surface_ranges"]),
      (a.exports = e));
  },
  null,
);
