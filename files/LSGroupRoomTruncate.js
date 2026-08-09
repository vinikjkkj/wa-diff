__d(
  "LSGroupRoomTruncate",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (e) {
          return t.forEach(
            t.filter(t.db.table(63).fetch(), function (e) {
              return (
                t.i64.neq(e.groupRoomType, void 0) &&
                t.i64.neq(e.groupRoomType, t.i64.cast([0, 5]))
              );
            }),
            function (e) {
              return e.delete();
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSStoriesGroupRoomTruncateStoredProcedure"),
      (e.__tables__ = ["rooms"]),
      (a.exports = e));
  },
  null,
);
