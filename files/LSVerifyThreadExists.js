__d(
  "LSVerifyThreadExists",
  ["LSVerifyThreadExistsV2"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (r) {
          return t.storedProcedure(
            n("LSVerifyThreadExistsV2"),
            e[0],
            e[1],
            e[2],
            e[3],
            e[4],
            !1,
            e[5],
            !1,
            !1,
          );
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxVerifyThreadExistsStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
