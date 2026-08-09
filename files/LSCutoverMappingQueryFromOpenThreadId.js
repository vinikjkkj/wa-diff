__d(
  "LSCutoverMappingQueryFromOpenThreadId",
  ["LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return (
            (r[0] = new t.Map()),
            r[0].set("open_thread_id", e[0]),
            (r[1] = r[0].get("open_thread_id")),
            (r[2] = t.toJSON(r[0])),
            t.storedProcedure(
              n("LSIssueNewTask"),
              ["cutover_mapping_query_", t.i64.to_string(r[1])].join(""),
              t.i64.cast([0, 180001]),
              r[2],
              void 0,
              void 0,
              t.i64.cast([0, 0]),
              t.i64.cast([0, 0]),
              void 0,
              void 0,
              t.i64.cast([0, 0]),
              t.i64.cast([0, 0]),
            )
          );
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxCutoverMappingQueryFromOpenThreadIdStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
