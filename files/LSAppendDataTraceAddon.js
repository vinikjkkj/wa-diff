__d(
  "LSAppendDataTraceAddon",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return (
            (n[0] = t.i64.of_float(Date.now())),
            t.db
              .table(154)
              .add({
                addonId: void 0,
                traceId: e[0],
                timestampMs: n[0],
                checkPointId: e[1],
                syncChannel: e[2],
                errorMessage: e[3],
                tags: e[4],
              })
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSDataTraceAppendDataTraceAddonStoredProcedure"),
      (e.__tables__ = ["data_trace_addon"]),
      (a.exports = e));
  },
  null,
);
