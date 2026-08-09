__d(
  "LSInsertNewMessageRange",
  ["LSClearMessagePlaceholderRange"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (r) {
              return t.storedProcedure(
                n("LSClearMessagePlaceholderRange"),
                e[0],
                e[9],
                t.i64.cast([0, 0]),
              );
            },
            function (n) {
              return t
                .filter(
                  t.db.table(13).fetch([[[e[0], { lte: e[5] }]]]),
                  function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[0]) &&
                      t.i64.le(n.minTimestampMs, e[5]) &&
                      t.i64.ge(n.maxTimestampMs, e[5])
                    );
                  },
                )
                .next()
                .then(function (t, n) {
                  var o,
                    a,
                    i = t.done,
                    l = t.value;
                  return i
                    ? ((o = [e[1], e[3], e[7]]),
                      (r[0] = o[0]),
                      (r[1] = o[1]),
                      (r[2] = o[2]),
                      o)
                    : ((n = l.item),
                      (a = [n.minTimestampMs, n.minMessageId, n.hasMoreBefore]),
                      (r[0] = a[0]),
                      (r[1] = a[1]),
                      (r[2] = a[2]));
                });
            },
            function (n) {
              return t
                .filter(
                  t.db.table(13).fetch([[[e[0], { lte: e[6] }]]]),
                  function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[0]) &&
                      t.i64.le(n.minTimestampMs, e[6]) &&
                      t.i64.ge(n.maxTimestampMs, e[6])
                    );
                  },
                )
                .next()
                .then(function (t, n) {
                  var o,
                    a,
                    i = t.done,
                    l = t.value;
                  return i
                    ? ((o = [e[2], e[4], e[8]]),
                      (r[4] = o[0]),
                      (r[5] = o[1]),
                      (r[6] = o[2]),
                      o)
                    : ((n = l.item),
                      (a = [n.maxTimestampMs, n.maxMessageId, n.hasMoreAfter]),
                      (r[4] = a[0]),
                      (r[5] = a[1]),
                      (r[6] = a[2]));
                });
            },
            function (n) {
              return t.forEach(
                t.filter(
                  t.db.table(13).fetch([[[e[0], { lte: e[6] }]]]),
                  function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[0]) &&
                      t.i64.ge(e[6], n.minTimestampMs) &&
                      t.i64.le(e[5], n.maxTimestampMs)
                    );
                  },
                ),
                function (e) {
                  return e.delete();
                },
              );
            },
            function (n) {
              return t.db
                .table(13)
                .put({
                  threadKey: e[0],
                  minTimestampMs: r[0],
                  minMessageId: r[1],
                  maxTimestampMs: r[4],
                  maxMessageId: r[5],
                  isLoadingBefore: !1,
                  isLoadingAfter: !1,
                  hasMoreBefore: r[2],
                  hasMoreAfter: r[6],
                });
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxInsertNewMessageRangeStoredProcedure"),
      (e.__tables__ = ["messages_ranges_v2__generated"]),
      (a.exports = e));
  },
  null,
);
