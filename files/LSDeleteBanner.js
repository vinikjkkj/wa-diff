__d(
  "LSDeleteBanner",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(
            t.filter(t.db.table(118).fetch([[[e[1], e[0]]]]), function (n) {
              return (
                t.i64.eq(n.threadKey, e[1]) &&
                t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                t.i64.eq(n.bannerId, e[0])
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
    ((e.__sproc_name__ = "LSInThreadBannerDeleteBannerStoredProcedure"),
      (e.__tables__ = ["in_thread_banner"]),
      (a.exports = e));
  },
  null,
);
