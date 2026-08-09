__d(
  "LSUpdateThreadActivityStatus",
  ["LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (o) {
              return t.db
                .table(9)
                .fetch([[[e[0]]]])
                .next()
                .then(function (o, a) {
                  var i = o.done,
                    l = o.value;
                  return i
                    ? t.sequence([
                        function (o) {
                          return (
                            (r[2] = new t.Map()),
                            r[2].set("thread_fbid", e[0]),
                            r[2].set("force_upsert", !1),
                            r[2].set("use_open_messenger_transport", !1),
                            r[2].set("sync_group", t.i64.cast([0, 104])),
                            r[2].set("metadata_only", !1),
                            r[2].set("preview_only", !1),
                            (r[3] = r[2].get("thread_fbid")),
                            (r[4] = t.toJSON(r[2])),
                            t.storedProcedure(
                              n("LSIssueNewTask"),
                              t.i64.to_string(r[3]),
                              t.i64.cast([0, 209]),
                              r[4],
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
                        function (o) {
                          return (
                            (r[5] = t.createArray()),
                            (r[8] = (r[5].push(e[0]), r[5])),
                            (r[6] = new t.Map()),
                            r[6].set("number_of_threads", t.i64.cast([0, 1])),
                            r[6].set(
                              "event_type",
                              "issue_tpq_for_verify_threads_activity_status",
                            ),
                            r[6].set("thread_ids", r[5]),
                            (r[7] = t.toJSON(r[6])),
                            t.storedProcedure(
                              n("LSIssueNewTask"),
                              "log_community_resnapshot_event",
                              t.i64.cast([0, 576]),
                              r[7],
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
                          return (r[0] = t.i64.cast([0, 2]));
                        },
                      ])
                    : ((a = l.item),
                      t.sequence([
                        function (n) {
                          return t.i64.lt(a.lastActivityTimestampMs, e[1])
                            ? t.sequence([
                                function (n) {
                                  return t.forEach(
                                    t.db.table(9).fetch([[[e[0]]]]),
                                    function (t) {
                                      var n = t.update,
                                        r = t.item;
                                      return n({
                                        lastActivityTimestampMs: e[1],
                                        snippet: e[2],
                                      });
                                    },
                                  );
                                },
                                function (e) {
                                  return (r[2] = t.i64.cast([0, 1]));
                                },
                              ])
                            : t.resolve((r[2] = t.i64.cast([0, 0])));
                        },
                        function (e) {
                          return (r[0] = r[2]);
                        },
                      ]));
                });
            },
            function (e) {
              return (o[0] = r[0]);
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpdateThreadActivityStatusStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
