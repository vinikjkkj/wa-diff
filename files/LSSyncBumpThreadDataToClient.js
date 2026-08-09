__d(
  "LSSyncBumpThreadDataToClient",
  ["LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t
            .filter(t.db.table(9).fetch([[[e[0]]]]), function (n) {
              return (
                t.i64.eq(n.threadKey, e[0]) &&
                t.i64.ge(e[1], n.lastActivityTimestampMs)
              );
            })
            .next()
            .then(function (o, a) {
              var i = o.done,
                l = o.value;
              return i
                ? 0
                : ((a = l.item),
                  t.sequence([
                    function (o) {
                      return t.i64.eq(
                        a.parentThreadKey,
                        t.i64.cast([-1, 4294967286]),
                      ) && t.i64.eq(e[2], t.i64.cast([0, 2]))
                        ? ((r[0] = new t.Map()),
                          r[0].set("thread_fbid", e[0]),
                          r[0].set("force_upsert", !1),
                          r[0].set("use_open_messenger_transport", !1),
                          r[0].set("sync_group", t.i64.cast([0, 95])),
                          r[0].set("metadata_only", !1),
                          r[0].set("preview_only", !1),
                          (r[1] = r[0].get("thread_fbid")),
                          (r[2] = t.toJSON(r[0])),
                          t.storedProcedure(
                            n("LSIssueNewTask"),
                            t.i64.to_string(r[1]),
                            t.i64.cast([0, 209]),
                            r[2],
                            void 0,
                            void 0,
                            t.i64.cast([0, 0]),
                            t.i64.cast([0, 0]),
                            void 0,
                            void 0,
                            t.i64.cast([0, 0]),
                            t.i64.cast([0, 0]),
                          ))
                        : t.resolve();
                    },
                    function (n) {
                      return t.forEach(
                        t.db.table(9).fetch([[[e[0]]]]),
                        function (t) {
                          var n = t.update,
                            r = t.item;
                          return n({ lastActivityTimestampMs: e[1] });
                        },
                      );
                    },
                    function (n) {
                      return t.i64.eq(e[2], t.i64.cast([0, 1]))
                        ? t.forEach(
                            t.db.table(9).fetch([[[e[0]]]]),
                            function (t) {
                              var n = t.update,
                                r = t.item;
                              return n({ lastReadWatermarkTimestampMs: e[1] });
                            },
                          )
                        : t.i64.eq(e[2], t.i64.cast([0, 2]))
                          ? t.resolve(0)
                          : t.i64.eq(e[2], t.i64.cast([0, 3]))
                            ? t.i64.ge(
                                a.lastReadWatermarkTimestampMs,
                                a.lastActivityTimestampMs,
                              )
                              ? t.forEach(
                                  t.db.table(9).fetch([[[e[0]]]]),
                                  function (t) {
                                    var n = t.update,
                                      r = t.item;
                                    return n({
                                      lastReadWatermarkTimestampMs: e[1],
                                    });
                                  },
                                )
                              : t.resolve()
                            : t.resolve(0);
                    },
                  ]));
            });
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxSyncBumpThreadDataToClientStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
