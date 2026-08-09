__d(
  "LSVerifyThreadExistsV2",
  ["LSGetViewerFBID", "LSIssueNewTask"],
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
              var o;
              return [
                t.i64.cast([0, 7]),
                t.i64.cast([0, 8]),
                t.i64.cast([0, 13]),
                t.i64.cast([0, 10]),
                t.i64.cast([0, 11]),
                t.i64.cast([0, 16]),
              ].some(function (n) {
                return t.i64.eq(e[1], n);
              })
                ? t.resolve(
                    ((o = [!1, !1, !1]),
                    (r[0] = o[0]),
                    (r[1] = o[1]),
                    (r[2] = o[2]),
                    o),
                  )
                : t.sequence([
                    function (n) {
                      return t.db
                        .table(9)
                        .fetch([[[e[0]]]])
                        .next()
                        .then(function (n, o) {
                          var a,
                            i,
                            l,
                            s,
                            u,
                            c,
                            d,
                            m,
                            p = n.done,
                            _ = n.value;
                          return p
                            ? ((a = [!0, !0, !1]),
                              (r[3] = a[0]),
                              (r[4] = a[1]),
                              (r[5] = a[2]),
                              a)
                            : ((o = _.item),
                              (r[12] = o.threadName),
                              (r[11] = o.authorityLevel),
                              (r[10] = o.threadType),
                              o.folderName === "other"
                                ? ((i = [!0, !1, !1]),
                                  (r[7] = i[0]),
                                  (r[8] = i[1]),
                                  (r[9] = i[2]))
                                : ((t.i64.eq(r[10], t.i64.cast([0, 0])) &&
                                    t.i64.eq(r[11], t.i64.cast([0, 40]))) ||
                                  ([
                                    t.i64.cast([0, 23]),
                                    t.i64.cast([0, 21]),
                                    t.i64.cast([0, 18]),
                                    t.i64.cast([0, 26]),
                                    t.i64.cast([0, 27]),
                                  ].some(function (e) {
                                    return t.i64.eq(r[10], e);
                                  }) &&
                                    t.i64.neq(r[11], t.i64.cast([0, 20])) &&
                                    ((r[12] === "" ? void 0 : r[12]) ===
                                      void 0 ||
                                      t.i64.lt(r[11], t.i64.cast([0, 80])))) ||
                                  [
                                    t.i64.cast([0, 151]),
                                    t.i64.cast([0, 155]),
                                    t.i64.cast([0, 153]),
                                  ].some(function (e) {
                                    return t.i64.eq(r[10], e);
                                  }) ||
                                  [
                                    t.i64.cast([0, 24]),
                                    t.i64.cast([0, 22]),
                                    t.i64.cast([0, 19]),
                                    t.i64.cast([0, 25]),
                                    t.i64.cast([0, 28]),
                                  ].some(function (e) {
                                    return t.i64.eq(r[10], e);
                                  }) ||
                                  ([
                                    t.i64.cast([0, 150]),
                                    t.i64.cast([0, 154]),
                                    t.i64.cast([0, 152]),
                                  ].some(function (n) {
                                    return t.i64.eq(e[1], n);
                                  }) &&
                                    t.i64.lt(r[11], t.i64.cast([0, 80]))) ||
                                  ([
                                    t.i64.cast([0, 150]),
                                    t.i64.cast([0, 154]),
                                    t.i64.cast([0, 152]),
                                  ].some(function (n) {
                                    return t.i64.eq(e[1], n);
                                  }) &&
                                    t.i64.eq(e[6], t.i64.cast([0, 205])) &&
                                    t.i64.eq(o.syncGroup, void 0))
                                    ? ((l = [!0, !0, !1]),
                                      (r[13] = l[0]),
                                      (r[14] = l[1]),
                                      (r[15] = l[2]))
                                    : (t.i64.ge(r[11], e[4]) ||
                                      (t.i64.eq(r[11], t.i64.cast([0, 20])) &&
                                        ([
                                          t.i64.cast([0, 2]),
                                          t.i64.cast([0, 202]),
                                          t.i64.cast([0, 206]),
                                          t.i64.cast([0, 229]),
                                        ].some(function (n) {
                                          return t.i64.eq(e[1], n);
                                        }) ||
                                          [
                                            t.i64.cast([0, 23]),
                                            t.i64.cast([0, 21]),
                                            t.i64.cast([0, 18]),
                                            t.i64.cast([0, 26]),
                                            t.i64.cast([0, 27]),
                                          ].some(function (n) {
                                            return t.i64.eq(e[1], n);
                                          })))
                                        ? ((s = [!1, !1, !1]),
                                          (r[16] = s[0]),
                                          (r[17] = s[1]),
                                          (r[18] = s[2]))
                                        : ((u = [!0, !1, !0]),
                                          (r[16] = u[0]),
                                          (r[17] = u[1]),
                                          (r[18] = u[2])),
                                      (c = [r[16], r[17], r[18]]),
                                      (r[13] = c[0]),
                                      (r[14] = c[1]),
                                      (r[15] = c[2])),
                                  (d = [r[13], r[14], r[15]]),
                                  (r[7] = d[0]),
                                  (r[8] = d[1]),
                                  (r[9] = d[2])),
                              (m = [r[7], r[8], r[9]]),
                              (r[3] = m[0]),
                              (r[4] = m[1]),
                              (r[5] = m[2]));
                        });
                    },
                    function (e) {
                      var t;
                      return (
                        (t = [r[3], r[4], r[5]]),
                        (r[0] = t[0]),
                        (r[1] = t[1]),
                        (r[2] = t[2]),
                        t
                      );
                    },
                  ]);
            },
            function (o) {
              return r[0]
                ? ((r[3] = new t.Map()),
                  r[3].set("thread_fbid", e[0]),
                  r[3].set("force_upsert", e[5]),
                  r[3].set("use_open_messenger_transport", !1),
                  r[3].set("sync_group", e[6]),
                  r[3].set("metadata_only", e[7]),
                  r[3].set("preview_only", !1),
                  (r[4] = r[3].get("thread_fbid")),
                  (r[5] = t.toJSON(r[3])),
                  t.storedProcedure(
                    n("LSIssueNewTask"),
                    t.i64.to_string(r[4]),
                    t.i64.cast([0, 209]),
                    r[5],
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
            function (o) {
              return r[1]
                ? t.sequence([
                    function (n) {
                      return t.db
                        .table(9)
                        .fetch([[[e[0]]]])
                        .next()
                        .then(function (n, o) {
                          var a = n.done,
                            i = n.value;
                          return a
                            ? t.sequence([
                                function (n) {
                                  return t
                                    .filter(
                                      t.db.table(7).fetch([[[e[0]]]]),
                                      function (n) {
                                        return (
                                          t.i64.eq(n.id, e[0]) &&
                                          t.i64.eq(
                                            t.i64.cast([0, 1]),
                                            t.i64.cast([0, 1]),
                                          )
                                        );
                                      },
                                    )
                                    .next()
                                    .then(function (e, n) {
                                      var o = e.done,
                                        a = e.value;
                                      return o
                                        ? (r[27] = !1)
                                        : ((n = a.item),
                                          (r[27] = !!t.i64.eq(
                                            n.contactTypeExact,
                                            t.i64.cast([0, 16]),
                                          )));
                                    });
                                },
                                function (e) {
                                  return (r[3] = r[27]);
                                },
                              ])
                            : ((o = i.item),
                              (r[3] = !![
                                t.i64.cast([0, 201]),
                                t.i64.cast([0, 228]),
                              ].some(function (e) {
                                return t.i64.eq(o.threadType, e);
                              })));
                        });
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
                            ? (r[5] = !1)
                            : ((n = a.item),
                              (r[5] = t.i64.eq(
                                n.threadType,
                                t.i64.cast([0, 206]),
                              )));
                        });
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
                            ? (r[7] = !1)
                            : ((n = a.item),
                              (r[7] = t.i64.eq(
                                n.threadType,
                                t.i64.cast([0, 225]),
                              )));
                        });
                    },
                    function (n) {
                      var o, a, i, l, s, u;
                      return (
                        (r[9] = t.i64.cast([0, 1083495711])),
                        (r[10] = t.i64.cast([0, 1024])),
                        (r[11] = t.i64.cast([0, 0])),
                        (r[12] = t.i64.cast([0, 0])),
                        (r[13] = t.i64.cast([0, 134217728])),
                        (r[14] = t.i64.cast([0, 0])),
                        (r[15] = t.i64.cast([0, 1083495711])),
                        (r[16] = t.i64.cast([0, 1024])),
                        (r[17] = t.i64.cast([0, 0])),
                        (r[18] = t.i64.cast([0, 134217728])),
                        (r[19] = t.i64.cast([0, 0])),
                        (r[20] = t.i64.cast([0, 0])),
                        r[3]
                          ? ((r[27] = t.i64.cast([0, 8650752])),
                            (r[28] = t.i64.cast([0, 1024])),
                            (r[29] = t.i64.cast([0, 0])),
                            (r[30] = t.i64.cast([0, 0])),
                            (r[31] = t.i64.cast([0, 0])),
                            (r[32] = t.i64.cast([0, 0])),
                            (o = [r[27], r[28], r[29], r[30], r[31], r[32]]),
                            (r[21] = o[0]),
                            (r[22] = o[1]),
                            (r[23] = o[2]),
                            (r[24] = o[3]),
                            (r[25] = o[4]),
                            (r[26] = o[5]))
                          : (r[5]
                              ? ((r[33] = t.i64.cast([16777220, 9224454])),
                                (r[34] = t.i64.cast([0, 1024])),
                                (r[35] = t.i64.cast([1048576, 0])),
                                (r[36] = t.i64.cast([4530176, 0])),
                                (r[37] = t.i64.cast([0, 0])),
                                (r[38] = t.i64.cast([0, 0])),
                                (a = [
                                  r[33],
                                  r[34],
                                  r[35],
                                  r[36],
                                  r[37],
                                  r[38],
                                ]),
                                (r[27] = a[0]),
                                (r[28] = a[1]),
                                (r[29] = a[2]),
                                (r[30] = a[3]),
                                (r[31] = a[4]),
                                (r[32] = a[5]))
                              : (r[7]
                                  ? ((r[39] = t.i64.cast([0, 0])),
                                    (r[40] = t.i64.cast([8192, 0])),
                                    (r[41] = t.i64.cast([0, 0])),
                                    (r[42] = t.i64.cast([0, 0])),
                                    (r[43] = t.i64.cast([0, 0])),
                                    (r[44] = t.i64.cast([0, 0])),
                                    (i = [
                                      r[15],
                                      t.i64.or_(r[16], r[40]),
                                      r[17],
                                      r[18],
                                      r[19],
                                      r[20],
                                    ]),
                                    (r[33] = i[0]),
                                    (r[34] = i[1]),
                                    (r[35] = i[2]),
                                    (r[36] = i[3]),
                                    (r[37] = i[4]),
                                    (r[38] = i[5]))
                                  : ((l = [
                                      r[15],
                                      r[16],
                                      r[17],
                                      r[18],
                                      r[19],
                                      r[20],
                                    ]),
                                    (r[33] = l[0]),
                                    (r[34] = l[1]),
                                    (r[35] = l[2]),
                                    (r[36] = l[3]),
                                    (r[37] = l[4]),
                                    (r[38] = l[5])),
                                (s = [
                                  r[33],
                                  r[34],
                                  r[35],
                                  r[36],
                                  r[37],
                                  r[38],
                                ]),
                                (r[27] = s[0]),
                                (r[28] = s[1]),
                                (r[29] = s[2]),
                                (r[30] = s[3]),
                                (r[31] = s[4]),
                                (r[32] = s[5])),
                            (u = [r[27], r[28], r[29], r[30], r[31], r[32]]),
                            (r[21] = u[0]),
                            (r[22] = u[1]),
                            (r[23] = u[2]),
                            (r[24] = u[3]),
                            (r[25] = u[4]),
                            (r[26] = u[5])),
                        t.forEach(
                          t.filter(
                            t.db.table(9).fetch([[[e[0]]]]),
                            function (n) {
                              return (
                                t.i64.eq(n.threadKey, e[0]) &&
                                t.i64.lt(n.authorityLevel, e[4])
                              );
                            },
                          ),
                          function (e) {
                            return e.delete();
                          },
                        )
                      );
                    },
                    function (n) {
                      return t.db
                        .table(9)
                        .add({
                          threadKey: e[0],
                          mailboxType: t.i64.cast([0, 0]),
                          threadType: e[1],
                          syncGroup: e[6],
                          folderName: e[2],
                          lastReadWatermarkTimestampMs: t.i64.cast([0, 0]),
                          removeWatermarkTimestampMs: t.i64.cast([
                            -1, 4294967295,
                          ]),
                          ongoingCallState: t.i64.cast([0, 0]),
                          parentThreadKey: e[3],
                          authorityLevel: e[4],
                          capabilities: r[21],
                          capabilities2: r[22],
                          capabilities3: r[23],
                          capabilities4: r[24],
                          capabilities5: r[25],
                          unsendLimitMs: t.i64.cast([-1, 4294967295]),
                        });
                    },
                    function (o) {
                      return [
                        t.i64.cast([0, 1]),
                        t.i64.cast([0, 201]),
                        t.i64.cast([0, 228]),
                        t.i64.cast([0, 204]),
                        t.i64.cast([0, 225]),
                      ].some(function (n) {
                        return t.i64.eq(e[1], n);
                      })
                        ? t.sequence([
                            function (n) {
                              return t.forEach(
                                t.filter(
                                  t.db.table(14).fetch([[[e[0], e[0]]]]),
                                  function (n) {
                                    return (
                                      t.i64.eq(n.threadKey, e[0]) &&
                                      t.i64.eq(
                                        t.i64.cast([0, 0]),
                                        t.i64.cast([0, 0]),
                                      ) &&
                                      t.i64.eq(n.contactId, e[0]) &&
                                      t.i64.lt(n.authorityLevel, e[4])
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
                                .table(14)
                                .add({
                                  threadKey: e[0],
                                  contactId: e[0],
                                  readWatermarkTimestampMs: t.i64.cast([0, 0]),
                                  deliveredWatermarkTimestampMs: t.i64.cast([
                                    0, 0,
                                  ]),
                                  authorityLevel: e[4],
                                  isModerator: !1,
                                });
                            },
                            function (e) {
                              return t
                                .storedProcedure(n("LSGetViewerFBID"))
                                .then(function (e) {
                                  var t;
                                  return ((t = e), (r[27] = t[0]), t);
                                });
                            },
                            function (n) {
                              return t.forEach(
                                t.filter(
                                  t.db.table(14).fetch([[[e[0], r[27]]]]),
                                  function (n) {
                                    return (
                                      t.i64.eq(n.threadKey, e[0]) &&
                                      t.i64.eq(
                                        t.i64.cast([0, 0]),
                                        t.i64.cast([0, 0]),
                                      ) &&
                                      t.i64.eq(n.contactId, r[27]) &&
                                      t.i64.lt(n.authorityLevel, e[4])
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
                                .table(14)
                                .add({
                                  threadKey: e[0],
                                  contactId: r[27],
                                  readWatermarkTimestampMs: t.i64.cast([0, 0]),
                                  deliveredWatermarkTimestampMs: t.i64.cast([
                                    0, 0,
                                  ]),
                                  authorityLevel: e[4],
                                  isModerator: !1,
                                });
                            },
                          ])
                        : t.resolve();
                    },
                  ])
                : t.resolve();
            },
            function (n) {
              return r[2]
                ? t.forEach(t.db.table(9).fetch([[[e[0]]]]), function (t) {
                    var n = t.update,
                      r = t.item;
                    return n({ authorityLevel: e[4] });
                  })
                : t.resolve();
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxVerifyThreadExistsV2StoredProcedure"),
      (e.__tables__ = ["threads", "contacts", "participants"]),
      (a.exports = e));
  },
  null,
);
