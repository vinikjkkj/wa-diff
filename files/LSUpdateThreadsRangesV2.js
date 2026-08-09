__d(
  "LSUpdateThreadsRangesV2",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return t.sequence([
            function (n) {
              return t.forEach(t.db.table(10).fetch([[[e[1]]]]), function (e) {
                return e.delete();
              });
            },
            function (r) {
              var o;
              return (
                (n[8] =
                  t.i64.gt(e[2], t.i64.cast([0, 1])) &&
                  t.i64.gt(e[3], t.i64.cast([-2147483648, 0]))),
                e[0] === "inbox" &&
                t.i64.eq(e[1], t.i64.cast([0, 0])) &&
                t.i64.eq(e[4], t.i64.cast([0, 1]))
                  ? t.sequence([
                      function (r) {
                        return (
                          (n[9] = e[2]),
                          (n[10] = e[3]),
                          (n[11] = !1),
                          (n[12] = n[8]),
                          t.forEach(t.db.table(198).fetch(), function (e) {
                            var r = e.item;
                            return (
                              (n[13] = r.minLastActivityTimestampMs),
                              (n[15] = r.minThreadKey),
                              (n[14] = t.i64.lt(
                                n[9] == null ? n[13] : n[9],
                                n[13],
                              )),
                              (n[9] = n[14] ? n[13] : n[9]),
                              (n[10] = n[14] ? n[15] : n[10]),
                              (n[11] = n[11] || r.isLoadingBefore),
                              (n[12] =
                                n[12] ||
                                (t.i64.gt(n[13], t.i64.cast([0, 1])) &&
                                  t.i64.gt(
                                    n[15],
                                    t.i64.cast([-2147483648, 0]),
                                  )))
                            );
                          })
                        );
                      },
                      function (e) {
                        var t;
                        return (
                          (t = [n[9], n[10], n[11], n[12]]),
                          (n[0] = t[0]),
                          (n[1] = t[1]),
                          (n[2] = t[2]),
                          (n[3] = t[3]),
                          t
                        );
                      },
                    ])
                  : t.resolve(
                      ((o = [e[2], e[3], !1, n[8]]),
                      (n[0] = o[0]),
                      (n[1] = o[1]),
                      (n[2] = o[2]),
                      (n[3] = o[3]),
                      o),
                    )
              );
            },
            function (r) {
              var o;
              return t.i64.eq(e[4], t.i64.cast([0, 1]))
                ? t.sequence([
                    function (r) {
                      return (
                        (n[9] = n[0]),
                        (n[10] = n[1]),
                        (n[11] = n[2]),
                        (n[12] = n[3]),
                        t.forEach(
                          t.filter(t.db.table(220).fetch(), function (n) {
                            return t.i64.eq(n.parentThreadKey, e[1]);
                          }),
                          function (e) {
                            var r = e.item;
                            return (
                              (n[13] = r.minLastActivityTimestampMs),
                              (n[15] = r.minThreadKey),
                              (n[14] = t.i64.lt(
                                n[9] == null ? n[13] : n[9],
                                n[13],
                              )),
                              (n[9] = n[14] ? n[13] : n[9]),
                              (n[10] = n[14] ? n[15] : n[10]),
                              (n[11] = n[11] || r.isLoadingBefore),
                              (n[12] =
                                n[12] ||
                                (t.i64.gt(n[13], t.i64.cast([0, 1])) &&
                                  t.i64.gt(
                                    n[15],
                                    t.i64.cast([-2147483648, 0]),
                                  )))
                            );
                          },
                        )
                      );
                    },
                    function (e) {
                      var t;
                      return (
                        (t = [n[9], n[10], n[11], n[12]]),
                        (n[4] = t[0]),
                        (n[5] = t[1]),
                        (n[6] = t[2]),
                        (n[7] = t[3]),
                        t
                      );
                    },
                  ])
                : t.resolve(
                    ((o = [n[0], n[1], n[2], n[3]]),
                    (n[4] = o[0]),
                    (n[5] = o[1]),
                    (n[6] = o[2]),
                    (n[7] = o[3]),
                    o),
                  );
            },
            function (r) {
              return t.db
                .table(10)
                .add({
                  parentThreadKey: e[1],
                  minThreadKey:
                    n[5] == null ? t.i64.cast([-2147483648, 0]) : n[5],
                  minLastActivityTimestampMs:
                    n[4] == null ? t.i64.cast([0, 1]) : n[4],
                  maxLastActivityTimestampMs: t.i64.cast([0, 1]),
                  maxThreadKey: t.i64.cast([-2147483648, 0]),
                  isLoadingBefore: n[6],
                  isLoadingAfter: !1,
                  hasMoreBefore: n[7],
                  hasMoreAfter: !1,
                });
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxUpdateThreadsRangesV2StoredProcedure"),
      (e.__tables__ = [
        "threads_ranges_v2__generated",
        "inbox_threads_ranges",
        "sync_group_threads_ranges",
      ]),
      (a.exports = e));
  },
  null,
);
