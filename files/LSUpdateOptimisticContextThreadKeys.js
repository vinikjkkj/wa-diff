__d(
  "LSUpdateOptimisticContextThreadKeys",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.sequence([
            function (n) {
              return t.forEach(
                t.filter(t.db.table(32).fetch(), function (n) {
                  return t.i64.eq(n.threadKey, e[0]);
                }),
                function (t) {
                  var n = t.update,
                    r = t.item;
                  return n({ threadKey: e[1] });
                },
              );
            },
            function (n) {
              return t.forEach(
                t.filter(t.db.table(31).fetch(), function (n) {
                  return t.i64.eq(n.threadKey, e[0]);
                }),
                function (t) {
                  var n = t.update,
                    r = t.item;
                  return n({ threadKey: e[1] });
                },
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSCoreUpdateOptimisticContextThreadKeysStoredProcedure"),
      (e.__tables__ = [
        "threads_optimistic_context",
        "messages_optimistic_context",
      ]),
      (a.exports = e));
  },
  null,
);
