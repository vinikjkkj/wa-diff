__d(
  "LSVerifyThreadRowExists",
  ["LSVerifyThreadExists"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (r) {
          return t.storedProcedure(
            n("LSVerifyThreadExists"),
            e[0],
            e[1] == null ? t.i64.cast([0, 1]) : e[1],
            "inbox",
            t.i64.cast([0, 0]),
            t.i64.cast([0, 40]) == null
              ? t.i64.cast([0, 40])
              : t.i64.cast([0, 40]),
            e[2],
          );
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxVerifyThreadRowExistsStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
