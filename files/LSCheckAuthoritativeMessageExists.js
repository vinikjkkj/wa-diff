__d(
  "LSCheckAuthoritativeMessageExists",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (r) {
              return t
                .filter(
                  t.db.table(12).fetch([[[e[1]]], "optimistic"]),
                  function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[0]) &&
                      n.offlineThreadingId === e[1] &&
                      t.i64.eq(n.authorityLevel, t.i64.cast([0, 80]))
                    );
                  },
                )
                .next()
                .then(function (e, t) {
                  var r = e.done,
                    o = e.value;
                  return r ? (n[0] = !1) : ((t = o.item), (n[0] = !0));
                });
            },
            function (e) {
              return (r[0] = n[0]);
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxCheckAuthoritativeMessageExistsStoredProcedure"),
      (e.__tables__ = ["messages"]),
      (a.exports = e));
  },
  null,
);
