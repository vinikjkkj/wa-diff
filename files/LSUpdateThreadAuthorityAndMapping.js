__d(
  "LSUpdateThreadAuthorityAndMapping",
  [
    "LSHybridThreadDelete",
    "LSIssueNewTask",
    "LSReplaceOptimisticThread",
    "LSShimGetServerThreadKeyFromJIDV2.nop",
    "LSUpdateOptimisticContextThreadKeys",
    "LSUpdateTaskQueueName",
    "LSUpdateTaskValue",
  ],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (o) {
              return t
                .nativeOperation(
                  n("LSShimGetServerThreadKeyFromJIDV2.nop"),
                  e[0],
                )
                .then(function (e) {
                  var t;
                  return ((t = e), (r[0] = t[0]), t);
                });
            },
            function (n) {
              return t.db
                .table(9)
                .fetch([[[e[1]]]])
                .next()
                .then(function (e, t) {
                  var n = e.done,
                    o = e.value;
                  return n ? (r[1] = !1) : ((t = o.item), (r[1] = !0));
                });
            },
            function (n) {
              return t
                .filter(t.db.table(9).fetch(), function (n) {
                  return t.i64.eq(n.threadKey, e[2]);
                })
                .next()
                .then(function (e, t) {
                  var n = e.done,
                    o = e.value;
                  return n ? (r[3] = !1) : ((t = o.item), (r[3] = !0));
                });
            },
            function (o) {
              return (
                (r[5] = t.i64.neq(r[0], void 0)),
                (r[7] = t.i64.eq(r[0], e[2]) && r[5]),
                !r[7] &&
                  !(t.i64.eq(r[0], e[1]) && r[5]) &&
                  r[5] &&
                  (function (e) {
                    t.logger(e).mustfix(e);
                  })(
                    "The mi_act_mapping row did not correspond to either the authoritative or optimistic thread key.",
                  ),
                t.i64.neq(e[2], void 0)
                  ? (r[6] = e[2])
                  : (r[6] = t.i64.cast([0, 0])),
                r[5]
                  ? r[7]
                    ? t.sequence([
                        function (o) {
                          return r[1]
                            ? t.sequence([
                                function (n) {
                                  return t.db
                                    .table(173)
                                    .fetch([[[e[1]]]])
                                    .next()
                                    .then(function (e, t) {
                                      var n = e.done,
                                        o = e.value;
                                      return n
                                        ? (r[8] = void 0)
                                        : ((t = o.item), (r[8] = t.jid));
                                    });
                                },
                                function (o) {
                                  return (
                                    (r[10] = new t.Map()),
                                    r[10].set("authoritative_thread_key", e[1]),
                                    r[10].set("jid_authoritative_mapped", r[8]),
                                    r[10].set("jid_optimistic_mapped", e[0]),
                                    r[10].set("optimistic_thread_key", e[2]),
                                    (r[11] = t.toJSON(r[10])),
                                    t.storedProcedure(
                                      n("LSIssueNewTask"),
                                      "e2ee_log_incorrect_occam_mapping",
                                      t.i64.cast([0, 160033]),
                                      r[11],
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
                                function (r) {
                                  return t.storedProcedure(
                                    n("LSHybridThreadDelete"),
                                    e[1],
                                  );
                                },
                              ])
                            : t.resolve();
                        },
                        function (e) {
                          return t.i64.neq(r[6], void 0)
                            ? t.forEach(
                                t.db.table(9).fetch([[[r[6]]]]),
                                function (e) {
                                  var t = e.update,
                                    n = e.item;
                                  return t({ clientThreadKey: r[6] });
                                },
                              )
                            : t.resolve();
                        },
                        function (o) {
                          return t.storedProcedure(
                            n("LSReplaceOptimisticThread"),
                            r[6],
                            e[1],
                          );
                        },
                        function (o) {
                          return t.storedProcedure(
                            n("LSUpdateOptimisticContextThreadKeys"),
                            r[6],
                            e[1],
                          );
                        },
                      ])
                    : r[3]
                      ? t.storedProcedure(n("LSHybridThreadDelete"), r[6])
                      : t.resolve()
                  : r[3]
                    ? r[1]
                      ? t.storedProcedure(n("LSHybridThreadDelete"), r[6])
                      : t.sequence([
                          function (e) {
                            return t.i64.neq(r[6], void 0)
                              ? t.forEach(
                                  t.db.table(9).fetch([[[r[6]]]]),
                                  function (e) {
                                    var t = e.update,
                                      n = e.item;
                                    return t({ clientThreadKey: r[6] });
                                  },
                                )
                              : t.resolve();
                          },
                          function (o) {
                            return t.storedProcedure(
                              n("LSReplaceOptimisticThread"),
                              r[6],
                              e[1],
                            );
                          },
                          function (o) {
                            return t.storedProcedure(
                              n("LSUpdateOptimisticContextThreadKeys"),
                              r[6],
                              e[1],
                            );
                          },
                        ])
                    : t.resolve()
              );
            },
            function (o) {
              return r[3]
                ? t.sequence([
                    function (o) {
                      return (
                        (r[9] = t.i64.to_string(r[6])),
                        (r[8] = t.i64.to_string(e[1])),
                        t.storedProcedure(
                          n("LSUpdateTaskQueueName"),
                          r[9],
                          r[8],
                        )
                      );
                    },
                    function (e) {
                      return t.storedProcedure(
                        n("LSUpdateTaskValue"),
                        r[8],
                        r[9],
                        r[8],
                      );
                    },
                  ])
                : t.resolve();
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxUpdateThreadAuthorityAndMappingStoredProcedure"),
      (e.__tables__ = ["threads", "mi_act_mapping_table"]),
      (a.exports = e));
  },
  null,
);
