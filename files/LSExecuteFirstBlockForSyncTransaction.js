__d(
  "LSExecuteFirstBlockForSyncTransaction",
  ["LSAppendDataTraceAddon", "LSOnSyncTransactionRejected.nop"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (e) {
              return t.resolve();
            },
            function (o) {
              return t
                .filter(t.db.table(3).fetch([[["", e[0]]]]), function (n) {
                  return (
                    n.taskQueueName === "" &&
                    t.i64.eq(n.syncDatabaseId, e[0]) &&
                    t.i64.eq(n.epochId, e[1])
                  );
                })
                .next()
                .then(function (o, a) {
                  var i = o.done,
                    l = o.value;
                  return i
                    ? t.sequence([
                        function (n) {
                          return t.db
                            .table(3)
                            .fetch([[["", e[0]]]])
                            .next()
                            .then(function (e, t) {
                              var n = e.done,
                                o = e.value;
                              return n
                                ? (r[2] = void 0)
                                : ((t = o.item), (r[2] = t.epochId));
                            });
                        },
                        function (o) {
                          return (
                            (r[4] = ","),
                            (function (e) {
                              t.logger(e).mustfix(e);
                            })(
                              [
                                "epoch mismatch",
                                r[4],
                                " db_type=",
                                r[4],
                                t.i64.to_string(e[0]),
                                r[4],
                                " previous_cursor=",
                                r[4],
                                e[2] == null ? "null" : e[2],
                                r[4],
                                " next_cursor=",
                                r[4],
                                e[3],
                                r[4],
                                " server_epoch_id=",
                                r[4],
                                t.i64.to_string(e[1]),
                                r[4],
                                " client_epoch_id=",
                                r[4],
                                r[2] == null ? "null" : r[2],
                              ].join(""),
                            ),
                            t.nativeOperation(
                              n("LSOnSyncTransactionRejected.nop"),
                              e[0],
                              "epoch mismatch",
                            )
                          );
                        },
                        function (e) {
                          return (r[0] = !1);
                        },
                      ])
                    : ((a = l.item),
                      t.sequence([
                        function (o) {
                          return t
                            .filter(
                              t.db.table(1).fetch([[[e[0]]]]),
                              function (n) {
                                return (
                                  t.i64.eq(n.groupId, e[0]) &&
                                  n.currentCursor === e[2]
                                );
                              },
                            )
                            .next()
                            .then(function (o, a) {
                              var i = o.done,
                                l = o.value;
                              return i
                                ? t.sequence([
                                    function (n) {
                                      return t.db
                                        .table(3)
                                        .fetch([[["", e[0]]]])
                                        .next()
                                        .then(function (e, t) {
                                          var n = e.done,
                                            o = e.value;
                                          return n
                                            ? (r[4] = void 0)
                                            : ((t = o.item),
                                              (r[4] = t.epochId));
                                        });
                                    },
                                    function (o) {
                                      return (
                                        (r[6] = ","),
                                        (function (e) {
                                          t.logger(e).mustfix(e);
                                        })(
                                          [
                                            "cursor mismatch",
                                            r[6],
                                            " db_type=",
                                            r[6],
                                            t.i64.to_string(e[0]),
                                            r[6],
                                            " previous_cursor=",
                                            r[6],
                                            e[2] == null ? "null" : e[2],
                                            r[6],
                                            " next_cursor=",
                                            r[6],
                                            e[3],
                                            r[6],
                                            " server_epoch_id=",
                                            r[6],
                                            t.i64.to_string(e[1]),
                                            r[6],
                                            " client_epoch_id=",
                                            r[6],
                                            r[4] == null ? "null" : r[4],
                                          ].join(""),
                                        ),
                                        t.nativeOperation(
                                          n("LSOnSyncTransactionRejected.nop"),
                                          e[0],
                                          "cursor mismatch",
                                        )
                                      );
                                    },
                                    function (e) {
                                      return (r[2] = !1);
                                    },
                                  ])
                                : ((a = l.item),
                                  t.sequence([
                                    function (n) {
                                      return t.sequence([
                                        function (n) {
                                          return (
                                            (r[4] = t.i64.of_float(Date.now())),
                                            (r[5] = t.i64.of_float(Date.now())),
                                            t.forEach(
                                              t.db.table(1).fetch([[[e[0]]]]),
                                              function (n) {
                                                var o = n.update,
                                                  a = n.item;
                                                return o({
                                                  currentCursor: e[3],
                                                  syncStatus: e[4],
                                                  sendSyncParams: e[5],
                                                  minTimeToSyncTimestampMs:
                                                    t.i64.eq(
                                                      e[6],
                                                      t.i64.cast([0, 0]),
                                                    )
                                                      ? t.i64.cast([0, 0])
                                                      : t.i64.add(r[4], e[6]),
                                                  canIgnoreTimestamp: e[7],
                                                  syncChannel: e[8],
                                                  lastSyncCompletedTimestampMs:
                                                    r[5],
                                                });
                                              },
                                            )
                                          );
                                        },
                                        function (n) {
                                          return t.forEach(
                                            t.db.table(3).fetch([[["", e[0]]]]),
                                            function (e) {
                                              var n = e.update,
                                                r = e.item;
                                              return n({
                                                failureCount: t.i64.cast([
                                                  -1, 4294967295,
                                                ]),
                                              });
                                            },
                                          );
                                        },
                                      ]);
                                    },
                                    function (e) {
                                      return (r[2] = !0);
                                    },
                                  ]));
                            });
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
    ((e.__sproc_name__ =
      "LSCoreExecuteFirstBlockForSyncTransactionStoredProcedure"),
      (e.__tables__ = ["data_trace_meta", "network_requests", "sync_groups"]),
      (a.exports = e));
  },
  null,
);
