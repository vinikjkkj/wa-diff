__d(
  "LSIssueMessagesRangeQuery",
  ["LSGetCursor", "LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return (
            (r[2] = t.i64.eq(e[2], t.i64.cast([-1, 4294967295]))
              ? t.i64.cast([0, 0])
              : e[2]),
            t
              .islc(
                t.filter(t.db.table(13).fetchDesc([[[e[0]]]]), function (n) {
                  return (
                    t.i64.eq(n.threadKey, e[0]) &&
                    (t.i64.eq(n.minTimestampMs, void 0) ||
                      t.i64.le(n.minTimestampMs, e[1]))
                  );
                }),
                0,
                t.i64.to_float(t.i64.cast([0, 1])),
              )
              .next()
              .then(function (o, a) {
                var i = o.done,
                  l = o.value;
                return i
                  ? (r[0] = !1)
                  : ((a = l.item),
                    t.sequence([
                      function (o) {
                        return (
                          (r[5] = a.threadKey),
                          (r[6] = t.i64.cast([0, 0])),
                          (r[7] = a.minTimestampMs),
                          (r[8] = a.minMessageId),
                          t.i64.eq(r[2], t.i64.cast([0, 1]))
                            ? (r[3] = !a.isLoadingAfter)
                            : (r[3] = !a.isLoadingBefore),
                          r[3]
                            ? t.sequence([
                                function (o) {
                                  return (
                                    t.i64.eq(r[2], t.i64.cast([0, 1]))
                                      ? (r[9] = a.hasMoreAfter)
                                      : (r[9] = a.hasMoreBefore),
                                    r[9]
                                      ? t.sequence([
                                          function (e) {
                                            return t.i64.eq(
                                              r[2],
                                              t.i64.cast([0, 1]),
                                            )
                                              ? t.sequence([
                                                  function (e) {
                                                    return t.forEach(
                                                      t.filter(
                                                        t.db
                                                          .table(13)
                                                          .fetch([
                                                            [
                                                              [
                                                                r[5],
                                                                r[7],
                                                                r[8],
                                                              ],
                                                            ],
                                                          ]),
                                                        function (e) {
                                                          return (
                                                            t.i64.eq(
                                                              e.threadKey,
                                                              r[5],
                                                            ) &&
                                                            t.i64.eq(
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                              r[6],
                                                            ) &&
                                                            t.i64.eq(
                                                              e.minTimestampMs,
                                                              r[7],
                                                            ) &&
                                                            e.minMessageId ===
                                                              r[8]
                                                          );
                                                        },
                                                      ),
                                                      function (e) {
                                                        var t = e.update,
                                                          n = e.item;
                                                        return t({
                                                          isLoadingAfter: !0,
                                                        });
                                                      },
                                                    );
                                                  },
                                                  function (e) {
                                                    var t;
                                                    return (
                                                      (t = [
                                                        a.maxTimestampMs,
                                                        a.maxMessageId,
                                                      ]),
                                                      (r[10] = t[0]),
                                                      (r[11] = t[1]),
                                                      t
                                                    );
                                                  },
                                                ])
                                              : t.sequence([
                                                  function (e) {
                                                    return t.forEach(
                                                      t.filter(
                                                        t.db
                                                          .table(13)
                                                          .fetch([
                                                            [
                                                              [
                                                                r[5],
                                                                r[7],
                                                                r[8],
                                                              ],
                                                            ],
                                                          ]),
                                                        function (e) {
                                                          return (
                                                            t.i64.eq(
                                                              e.threadKey,
                                                              r[5],
                                                            ) &&
                                                            t.i64.eq(
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                              r[6],
                                                            ) &&
                                                            t.i64.eq(
                                                              e.minTimestampMs,
                                                              r[7],
                                                            ) &&
                                                            e.minMessageId ===
                                                              r[8]
                                                          );
                                                        },
                                                      ),
                                                      function (e) {
                                                        var t = e.update,
                                                          n = e.item;
                                                        return t({
                                                          isLoadingBefore: !0,
                                                        });
                                                      },
                                                    );
                                                  },
                                                  function (e) {
                                                    var t;
                                                    return (
                                                      (t = [r[7], r[8]]),
                                                      (r[10] = t[0]),
                                                      (r[11] = t[1]),
                                                      t
                                                    );
                                                  },
                                                ]);
                                          },
                                          function (n) {
                                            return t.db
                                              .table(9)
                                              .fetch([[[e[0]]]])
                                              .next()
                                              .then(function (e, n) {
                                                var o = e.done,
                                                  a = e.value;
                                                return o
                                                  ? (r[12] = t.i64.cast([0, 1]))
                                                  : ((n = a.item),
                                                    (r[19] = n.syncGroup),
                                                    t.i64.neq(r[19], void 0)
                                                      ? (r[18] = r[19])
                                                      : (r[18] = t.i64.cast([
                                                          0, 1,
                                                        ])),
                                                    (r[12] = r[18]));
                                              });
                                          },
                                          function (e) {
                                            return t
                                              .storedProcedure(
                                                n("LSGetCursor"),
                                                r[12],
                                              )
                                              .then(function (e) {
                                                var t;
                                                return (
                                                  (t = e),
                                                  (r[14] = t[0]),
                                                  t
                                                );
                                              });
                                          },
                                          function (o) {
                                            return (
                                              (r[15] = new t.Map()),
                                              r[15].set("thread_key", e[0]),
                                              r[15].set("direction", r[2]),
                                              r[15].set(
                                                "reference_timestamp_ms",
                                                r[10],
                                              ),
                                              r[15].set(
                                                "reference_message_id",
                                                r[11],
                                              ),
                                              r[15].set("sync_group", r[12]),
                                              r[15].set("cursor", r[14]),
                                              (r[16] = r[15].get("thread_key")),
                                              (r[17] = t.toJSON(r[15])),
                                              t.storedProcedure(
                                                n("LSIssueNewTask"),
                                                "mrq.{}"
                                                  .split("{}")
                                                  .join(t.i64.to_string(r[16])),
                                                t.i64.cast([0, 228]),
                                                r[17],
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
                                        ])
                                      : t.resolve()
                                  );
                                },
                                function (e) {
                                  return (r[4] = !0);
                                },
                              ])
                            : t.resolve((r[4] = !1))
                        );
                      },
                      function (e) {
                        return (r[0] = r[4]);
                      },
                    ]));
              })
          );
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxIssueMessagesRangeQueryStoredProcedure"),
      (e.__tables__ = ["messages_ranges_v2__generated", "threads"]),
      (a.exports = e));
  },
  null,
);
