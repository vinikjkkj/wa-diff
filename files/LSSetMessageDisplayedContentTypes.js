__d(
  "LSSetMessageDisplayedContentTypes",
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
            function (r) {
              return t.db
                .table(16)
                .fetch([[[e[0], e[1]]]])
                .next()
                .then(function (e, t) {
                  var r,
                    o,
                    a = e.done,
                    i = e.value;
                  return a
                    ? ((r = [void 0, void 0]), (n[0] = r[0]), (n[1] = r[1]), r)
                    : ((t = i.item),
                      (o = [t.attachmentType, t.xmaLayoutType]),
                      (n[0] = o[0]),
                      (n[1] = o[1]));
                });
            },
            function (r) {
              return t
                .filter(
                  t.db.table(12).fetch([[[e[0], e[2], e[1]]]]),
                  function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[0]) &&
                      t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                      t.i64.eq(n.timestampMs, e[2]) &&
                      n.messageId === e[1]
                    );
                  },
                )
                .next()
                .then(function (e, r) {
                  var o,
                    a,
                    i = e.done,
                    l = e.value;
                  return i
                    ? ((o = [t.i64.cast([0, 0]), void 0, void 0]),
                      (n[3] = o[0]),
                      (n[4] = o[1]),
                      (n[5] = o[2]),
                      o)
                    : ((r = l.item),
                      (a = [r.replySourceTypeV2, r.replySourceId, r.text]),
                      (n[3] = a[0]),
                      (n[4] = a[1]),
                      (n[5] = a[2]));
                });
            },
            function (r) {
              return t.db
                .table(9)
                .fetch([[[e[0]]]])
                .next()
                .then(function (e, t) {
                  var r = e.done,
                    o = e.value;
                  return r
                    ? (n[7] = void 0)
                    : ((t = o.item), (n[7] = t.customEmoji));
                });
            },
            function (r) {
              return (
                t.i64.eq(n[0], t.i64.cast([0, 6]))
                  ? (n[9] = t.i64.cast([0, 64]))
                  : (t.i64.eq(n[0], t.i64.cast([0, 5]))
                      ? (n[16] = t.i64.cast([0, 4]))
                      : (t.i64.eq(n[0], t.i64.cast([0, 3]))
                          ? (n[17] = t.i64.cast([0, 16384]))
                          : (t.i64.eq(n[0], t.i64.cast([0, 2]))
                              ? (n[18] = t.i64.cast([0, 2]))
                              : (t.i64.eq(n[0], t.i64.cast([0, 4]))
                                  ? (n[19] = t.i64.cast([0, 2]))
                                  : (n[19] = e[5]
                                      ? t.i64.cast([0, 4096])
                                      : t.i64.cast([0, 0])),
                                (n[18] = n[19])),
                            (n[17] = n[18])),
                        (n[16] = n[17])),
                    (n[9] = n[16])),
                (n[10] =
                  n[5] !== void 0 && n[5] !== "" && n[5] !== n[7]
                    ? t.i64.or_(n[9], t.i64.cast([0, 1]))
                    : n[9]),
                (n[11] =
                  n[7] !== void 0 && n[7] === n[5]
                    ? t.i64.or_(n[10], t.i64.cast([0, 128]))
                    : n[10]),
                (n[12] = t.i64.eq(n[0], t.i64.cast([0, 7]))
                  ? t.i64.or_(n[11], t.i64.cast([0, 8]))
                  : n[11]),
                (n[13] = t.i64.eq(n[1], t.i64.cast([0, 0]))
                  ? t.i64.or_(n[12], t.i64.cast([0, 1024]))
                  : t.i64.eq(n[1], t.i64.cast([0, 1]))
                    ? t.i64.or_(n[12], t.i64.cast([0, 2048]))
                    : n[12]),
                (n[14] =
                  t.i64.eq(n[3], t.i64.cast([0, 2])) && n[4] !== void 0
                    ? t.i64.or_(n[13], t.i64.cast([0, 512]))
                    : n[13]),
                (n[15] =
                  n[5] !== void 0 &&
                  n[5] !== "" &&
                  n[5] !== n[7] &&
                  t.i64.eq(n[3], t.i64.cast([0, 5]))
                    ? t.i64.or_(n[14], t.i64.cast([0, 512]))
                    : n[14]),
                t.forEach(
                  t.filter(
                    t.db.table(12).fetch([[[e[0], e[2], e[1]]]]),
                    function (n) {
                      return (
                        t.i64.eq(n.threadKey, e[0]) &&
                        t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                        t.i64.eq(n.timestampMs, e[2]) &&
                        n.messageId === e[1]
                      );
                    },
                  ),
                  function (r) {
                    var o = r.update,
                      a = r.item;
                    return o({
                      displayedContentTypes: e[4]
                        ? t.i64.cast([0, 32])
                        : t.i64.eq(n[3], t.i64.cast([0, 3]))
                          ? t.i64.or_(n[15], t.i64.cast([0, 8192]))
                          : n[15],
                    });
                  },
                )
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxSetMessageDisplayedContentTypesStoredProcedure"),
      (e.__tables__ = ["attachments", "messages", "threads"]),
      (a.exports = e));
  },
  null,
);
