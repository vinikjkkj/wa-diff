__d(
  "LSExecuteFirstBlockForSyncTransaction",
  ["LSAppendDataTraceAddon", "LSArrayGetObjectAt", "LSLogEventAnnotate.nop"],
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
                            (r[5] = new t.Map()),
                            r[5].set("database_id", e[0]),
                            r[5].set("epoch_id", e[1]),
                            r[5].set("sync_status", e[4]),
                            r[5].set("next_cursor", e[3]),
                            r[5].set("error_msg", "epoch mismatch"),
                            e[9] ? (r[6] = !1) : (r[6] = !0),
                            r[6]
                              ? t.resolve()
                              : ((r[7] = e[9].keys()),
                                (r[8] = t.i64.of_int32(r[7].length)),
                                t.i64.gt(r[8], t.i64.cast([0, 0]))
                                  ? t.loopAsync(r[8], function (o) {
                                      return (
                                        (r[9] = o),
                                        t.sequence([
                                          function (e) {
                                            return t
                                              .nativeTypeOperation(
                                                "Array",
                                                n("LSArrayGetObjectAt"),
                                                r[7],
                                                r[9],
                                              )
                                              .then(function (e) {
                                                var t;
                                                return (
                                                  (t = e),
                                                  (r[10] = t[0]),
                                                  (r[11] = t[1]),
                                                  t
                                                );
                                              });
                                          },
                                          function (t) {
                                            return (
                                              (r[12] = e[9].get(r[10])),
                                              r[5].set(r[10], r[12])
                                            );
                                          },
                                        ])
                                      );
                                    })
                                  : t.resolve())
                          );
                        },
                        function (e) {
                          return t.nativeOperation(
                            n("LSLogEventAnnotate.nop"),
                            t.i64.cast([0, 16]),
                            t.i64.cast([0, 35]),
                            t.i64.cast([0, 0]),
                            r[5],
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
                                        (r[7] = new t.Map()),
                                        r[7].set("database_id", e[0]),
                                        r[7].set("epoch_id", e[1]),
                                        r[7].set("sync_status", e[4]),
                                        r[7].set("next_cursor", e[3]),
                                        r[7].set(
                                          "error_msg",
                                          "cursor mismatch",
                                        ),
                                        e[9] ? (r[8] = !1) : (r[8] = !0),
                                        r[8]
                                          ? t.resolve()
                                          : ((r[9] = e[9].keys()),
                                            (r[10] = t.i64.of_int32(
                                              r[9].length,
                                            )),
                                            t.i64.gt(r[10], t.i64.cast([0, 0]))
                                              ? t.loopAsync(
                                                  r[10],
                                                  function (o) {
                                                    return (
                                                      (r[11] = o),
                                                      t.sequence([
                                                        function (e) {
                                                          return t
                                                            .nativeTypeOperation(
                                                              "Array",
                                                              n(
                                                                "LSArrayGetObjectAt",
                                                              ),
                                                              r[9],
                                                              r[11],
                                                            )
                                                            .then(function (e) {
                                                              var t;
                                                              return (
                                                                (t = e),
                                                                (r[12] = t[0]),
                                                                (r[13] = t[1]),
                                                                t
                                                              );
                                                            });
                                                        },
                                                        function (t) {
                                                          return (
                                                            (r[14] = e[9].get(
                                                              r[12],
                                                            )),
                                                            r[7].set(
                                                              r[12],
                                                              r[14],
                                                            )
                                                          );
                                                        },
                                                      ])
                                                    );
                                                  },
                                                )
                                              : t.resolve())
                                      );
                                    },
                                    function (e) {
                                      return t.nativeOperation(
                                        n("LSLogEventAnnotate.nop"),
                                        t.i64.cast([0, 16]),
                                        t.i64.cast([0, 35]),
                                        t.i64.cast([0, 0]),
                                        r[7],
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
                                            (r[6] = t.i64.of_float(Date.now())),
                                            (r[7] = t.i64.of_float(Date.now())),
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
                                                      : t.i64.add(r[6], e[6]),
                                                  canIgnoreTimestamp: e[7],
                                                  syncChannel: e[8],
                                                  lastSyncCompletedTimestampMs:
                                                    r[7],
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
                                    function (o) {
                                      return (
                                        (r[4] = new t.Map()),
                                        r[4].set("database_id", e[0]),
                                        r[4].set("epoch_id", e[1]),
                                        r[4].set("sync_status", e[4]),
                                        r[4].set("next_cursor", e[3]),
                                        e[9] ? (r[5] = !1) : (r[5] = !0),
                                        r[5]
                                          ? t.resolve()
                                          : ((r[6] = e[9].keys()),
                                            (r[7] = t.i64.of_int32(
                                              r[6].length,
                                            )),
                                            t.i64.gt(r[7], t.i64.cast([0, 0]))
                                              ? t.loopAsync(r[7], function (o) {
                                                  return (
                                                    (r[8] = o),
                                                    t.sequence([
                                                      function (e) {
                                                        return t
                                                          .nativeTypeOperation(
                                                            "Array",
                                                            n(
                                                              "LSArrayGetObjectAt",
                                                            ),
                                                            r[6],
                                                            r[8],
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[9] = t[0]),
                                                              (r[10] = t[1]),
                                                              t
                                                            );
                                                          });
                                                      },
                                                      function (t) {
                                                        return (
                                                          (r[11] = e[9].get(
                                                            r[9],
                                                          )),
                                                          r[4].set(r[9], r[11])
                                                        );
                                                      },
                                                    ])
                                                  );
                                                })
                                              : t.resolve())
                                      );
                                    },
                                    function (e) {
                                      return t.nativeOperation(
                                        n("LSLogEventAnnotate.nop"),
                                        t.i64.cast([0, 16]),
                                        t.i64.cast([0, 35]),
                                        t.i64.cast([0, 0]),
                                        r[4],
                                      );
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
