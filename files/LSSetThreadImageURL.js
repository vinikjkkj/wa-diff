__d(
  "LSSetThreadImageURL",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(t.db.table(9).fetch([[[e[0]]]]), function (t) {
            var n = t.update,
              r = t.item;
            return n({
              threadPictureUrl: e[1] === "" ? void 0 : e[1],
              threadPictureUrlFallback: e[2],
              threadPictureUrlExpirationTimestampMs: e[3],
              isCustomThreadPicture: e[4],
              shouldRoundThreadPicture: e[5],
            });
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxSetThreadImageURLStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
