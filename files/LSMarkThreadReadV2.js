__d(
  "LSMarkThreadReadV2",
  ["LSGetViewerFBID"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (n) {
              return t.db
                .table(9)
                .fetch([[[e[0]]]])
                .next()
                .then(function (e, n) {
                  var o = e.done,
                    a = e.value;
                  return o
                    ? (r[0] = t.i64.cast([0, 0]))
                    : ((n = a.item), (r[0] = n.lastActivityTimestampMs));
                });
            },
            function (o) {
              return t.i64.gt(r[0], e[1])
                ? t.sequence([
                    function (e) {
                      return t
                        .storedProcedure(n("LSGetViewerFBID"))
                        .then(function (e) {
                          var t;
                          return ((t = e), (r[2] = t[0]), t);
                        });
                    },
                    function (n) {
                      return t
                        .count(
                          t.filter(
                            t.db.table(12).fetch([[[e[0], { gt: e[1] }]]]),
                            function (n) {
                              return (
                                t.i64.eq(n.threadKey, e[0]) &&
                                t.i64.eq(n.senderId, r[2]) &&
                                t.i64.gt(n.timestampMs, e[1])
                              );
                            },
                          ),
                        )
                        .then(function (e) {
                          return (r[3] = e);
                        });
                    },
                    function (n) {
                      return t
                        .count(t.db.table(12).fetch([[[e[0], { gt: e[1] }]]]))
                        .then(function (e) {
                          return (r[4] = e);
                        });
                    },
                    function (n) {
                      return t.i64.eq(r[3], r[4]) &&
                        t.i64.gt(r[4], t.i64.cast([0, 0]))
                        ? t.forEach(
                            t.db.table(9).fetch([[[e[0]]]]),
                            function (e) {
                              var t = e.update,
                                n = e.item;
                              return t({
                                lastReadWatermarkTimestampMs:
                                  n.lastActivityTimestampMs,
                              });
                            },
                          )
                        : t.forEach(
                            t.filter(
                              t.db.table(9).fetch([[[e[0]]]]),
                              function (n) {
                                return (
                                  t.i64.eq(n.threadKey, e[0]) &&
                                  t.i64.gt(e[1], n.lastReadWatermarkTimestampMs)
                                );
                              },
                            ),
                            function (t) {
                              var n = t.update,
                                r = t.item;
                              return n({ lastReadWatermarkTimestampMs: e[1] });
                            },
                          );
                    },
                  ])
                : t.forEach(
                    t.filter(t.db.table(9).fetch([[[e[0]]]]), function (n) {
                      return (
                        t.i64.eq(n.threadKey, e[0]) &&
                        t.i64.gt(e[1], n.lastReadWatermarkTimestampMs)
                      );
                    }),
                    function (t) {
                      var n = t.update,
                        r = t.item;
                      return n({ lastReadWatermarkTimestampMs: e[1] });
                    },
                  );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxMarkThreadReadV2StoredProcedure"),
      (e.__tables__ = ["threads", "messages"]),
      (a.exports = e));
  },
  null,
);
