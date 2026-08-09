__d(
  "LSFlushSyncTrace",
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
            t.filter(t.db.table(153).fetch(), function (n) {
              return (
                t.i64.eq(n.traceType, t.i64.cast([0, 2])) &&
                n.contextOne === e[1] &&
                n.contextThree === e[0]
              );
            }),
            function (e) {
              var t = e.update,
                n = e.item;
              return t({ shouldFlush: !0 });
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSDataTraceFlushSyncTraceStoredProcedure"),
      (e.__tables__ = ["data_trace_meta"]),
      (a.exports = e));
  },
  null,
);
