__d(
  "LSUpdateThreadNullState",
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
              threadPictureUrl: e[1],
              threadPictureUrlFallback: e[2],
              threadPictureUrlExpirationTimestampMs: e[3],
              nullstateDescriptionText1: e[5],
              nullstateDescriptionType1: e[10],
              nullstateDescriptionText2: e[6],
              nullstateDescriptionType2: e[11],
              nullstateDescriptionText3: e[7],
              nullstateDescriptionType3: e[12],
              capabilities: e[15],
              threadName: e[16],
              threadSubtype: e[4],
            });
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpdateThreadNullStateStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
