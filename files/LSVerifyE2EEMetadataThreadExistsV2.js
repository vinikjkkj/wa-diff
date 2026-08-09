__d(
  "LSVerifyE2EEMetadataThreadExistsV2",
  [
    "LSCheckIfAuthoritativeThreadMissingMiActMapping",
    "LSCreateOfflineThreadingID",
    "LSIssueNewTask",
  ],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (n) {
              var o;
              return t.i64.neq(e[1], void 0)
                ? t.sequence([
                    function (n) {
                      return t.db
                        .table(9)
                        .fetch([[[e[1]]]])
                        .next()
                        .then(function (t, n) {
                          var o,
                            a,
                            i = t.done,
                            l = t.value;
                          return i
                            ? ((o = [void 0, void 0]),
                              (r[3] = o[0]),
                              (r[4] = o[1]),
                              o)
                            : ((n = l.item),
                              (a = [e[1], n.authorityLevel]),
                              (r[3] = a[0]),
                              (r[4] = a[1]));
                        });
                    },
                    function (e) {
                      var t;
                      return (
                        (t = [r[3], r[4]]),
                        (r[0] = t[0]),
                        (r[1] = t[1]),
                        t
                      );
                    },
                  ])
                : t.resolve(
                    ((o = [void 0, void 0]), (r[0] = o[0]), (r[1] = o[1]), o),
                  );
            },
            function (o) {
              return t.i64.neq(r[0], void 0)
                ? t.sequence([
                    function (o) {
                      return t.i64.neq(r[1], void 0)
                        ? t.sequence([
                            function (e) {
                              return t
                                .storedProcedure(
                                  n(
                                    "LSCheckIfAuthoritativeThreadMissingMiActMapping",
                                  ),
                                  r[0],
                                )
                                .then(function (e) {
                                  var t;
                                  return ((t = e), (r[3] = t[0]), t);
                                });
                            },
                            function (n) {
                              return t.i64.gt(e[2], r[1])
                                ? t.forEach(
                                    t.db.table(9).fetch([[[r[0]]]]),
                                    function (t) {
                                      var n = t.update,
                                        r = t.item;
                                      return n({ authorityLevel: e[2] });
                                    },
                                  )
                                : t.resolve();
                            },
                            function (o) {
                              return r[3] || t.i64.gt(e[2], r[1])
                                ? ((r[4] = new t.Map()),
                                  r[4].set("thread_fbid", r[0]),
                                  r[4].set("force_upsert", !1),
                                  r[4].set("use_open_messenger_transport", !1),
                                  r[4].set("sync_group", t.i64.cast([0, 95])),
                                  r[4].set("metadata_only", !1),
                                  r[4].set("preview_only", !1),
                                  (r[5] = r[4].get("thread_fbid")),
                                  (r[6] = t.toJSON(r[4])),
                                  t.storedProcedure(
                                    n("LSIssueNewTask"),
                                    t.i64.to_string(r[5]),
                                    t.i64.cast([0, 209]),
                                    r[6],
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
                          ])
                        : t.resolve();
                    },
                    function (e) {
                      return (r[2] = r[0]);
                    },
                  ])
                : t.sequence([
                    function (o) {
                      return t.i64.neq(e[1], void 0)
                        ? t.sequence([
                            function (o) {
                              return t.i64.neq(e[2], t.i64.cast([0, 20]))
                                ? ((r[13] = new t.Map()),
                                  r[13].set("thread_fbid", e[1]),
                                  r[13].set("force_upsert", !1),
                                  r[13].set("use_open_messenger_transport", !1),
                                  r[13].set("sync_group", t.i64.cast([0, 95])),
                                  r[13].set("metadata_only", !1),
                                  r[13].set("preview_only", !1),
                                  (r[14] = r[13].get("thread_fbid")),
                                  (r[15] = t.toJSON(r[13])),
                                  t.storedProcedure(
                                    n("LSIssueNewTask"),
                                    t.i64.to_string(r[14]),
                                    t.i64.cast([0, 209]),
                                    r[15],
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
                            function (t) {
                              return (r[3] = e[1]);
                            },
                          ])
                        : t.sequence([
                            function (e) {
                              return (
                                (r[13] = t.i64.of_float(Date.now())),
                                t
                                  .storedProcedure(
                                    n("LSCreateOfflineThreadingID"),
                                    r[13],
                                  )
                                  .then(function (e) {
                                    var t;
                                    return ((t = e), (r[14] = t[0]), t);
                                  })
                              );
                            },
                            function (e) {
                              return (r[3] = r[14]);
                            },
                          ]);
                    },
                    function (n) {
                      var o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
                      return (
                        t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0]))
                          ? ((o = ["inbox", t.i64.cast([0, 0])]),
                            (r[4] = o[0]),
                            (r[5] = o[1]))
                          : (t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 1]))
                              ? ((a = [
                                  "pending",
                                  t.i64.cast([-1, 4294967295]),
                                ]),
                                (r[13] = a[0]),
                                (r[14] = a[1]))
                              : (t.i64.eq(
                                  t.i64.cast([0, 0]),
                                  t.i64.cast([0, 2]),
                                )
                                  ? ((i = [
                                      "other",
                                      t.i64.cast([-1, 4294967294]),
                                    ]),
                                    (r[15] = i[0]),
                                    (r[16] = i[1]))
                                  : (t.i64.eq(
                                      t.i64.cast([0, 0]),
                                      t.i64.cast([0, 3]),
                                    )
                                      ? ((l = [
                                          "spam",
                                          t.i64.cast([-1, 4294967293]),
                                        ]),
                                        (r[17] = l[0]),
                                        (r[18] = l[1]))
                                      : (t.i64.eq(
                                          t.i64.cast([0, 0]),
                                          t.i64.cast([0, 5]),
                                        )
                                          ? ((s = [
                                              "hidden",
                                              t.i64.cast([-1, 4294967292]),
                                            ]),
                                            (r[19] = s[0]),
                                            (r[20] = s[1]))
                                          : (t.i64.eq(
                                              t.i64.cast([0, 0]),
                                              t.i64.cast([0, 4]),
                                            )
                                              ? ((u = [
                                                  "archived",
                                                  t.i64.cast([-1, 4294967286]),
                                                ]),
                                                (r[21] = u[0]),
                                                (r[22] = u[1]))
                                              : (t.i64.eq(
                                                  t.i64.cast([0, 0]),
                                                  t.i64.cast([0, 15]),
                                                )
                                                  ? ((c = [
                                                      "restricted",
                                                      t.i64.cast([
                                                        -1, 4294967281,
                                                      ]),
                                                    ]),
                                                    (r[23] = c[0]),
                                                    (r[24] = c[1]))
                                                  : (t.i64.eq(
                                                      t.i64.cast([0, 0]),
                                                      t.i64.cast([0, 19]),
                                                    )
                                                      ? ((d = [
                                                          "interop",
                                                          t.i64.cast([
                                                            -1, 4294967277,
                                                          ]),
                                                        ]),
                                                        (r[25] = d[0]),
                                                        (r[26] = d[1]))
                                                      : (t.i64.eq(
                                                          t.i64.cast([0, 0]),
                                                          t.i64.cast([0, 29]),
                                                        )
                                                          ? ((m = [
                                                              "interop_pending",
                                                              t.i64.cast([
                                                                -1, 4294967267,
                                                              ]),
                                                            ]),
                                                            (r[27] = m[0]),
                                                            (r[28] = m[1]))
                                                          : ((p = [
                                                              "inbox",
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                            ]),
                                                            (r[27] = p[0]),
                                                            (r[28] = p[1])),
                                                        (_ = [r[27], r[28]]),
                                                        (r[25] = _[0]),
                                                        (r[26] = _[1])),
                                                    (f = [r[25], r[26]]),
                                                    (r[23] = f[0]),
                                                    (r[24] = f[1])),
                                                (g = [r[23], r[24]]),
                                                (r[21] = g[0]),
                                                (r[22] = g[1])),
                                            (h = [r[21], r[22]]),
                                            (r[19] = h[0]),
                                            (r[20] = h[1])),
                                        (y = [r[19], r[20]]),
                                        (r[17] = y[0]),
                                        (r[18] = y[1])),
                                    (C = [r[17], r[18]]),
                                    (r[15] = C[0]),
                                    (r[16] = C[1])),
                                (b = [r[15], r[16]]),
                                (r[13] = b[0]),
                                (r[14] = b[1])),
                            (v = [r[13], r[14]]),
                            (r[4] = v[0]),
                            (r[5] = v[1])),
                        (r[6] = t.i64.cast([0, 1083495711])),
                        (r[7] = t.i64.cast([0, 1024])),
                        (r[8] = t.i64.cast([0, 0])),
                        (r[9] = t.i64.cast([0, 0])),
                        (r[10] = t.i64.cast([0, 134217728])),
                        (r[11] = t.i64.cast([0, 0])),
                        t.i64.eq(e[0], t.i64.cast([0, 15]))
                          ? (r[12] = t.i64.cast([0, 26]))
                          : (t.i64.eq(e[0], t.i64.cast([0, 16]))
                              ? (r[13] = t.i64.cast([0, 24]))
                              : (r[13] = void 0),
                            (r[12] = r[13])),
                        t.forEach(
                          t.filter(
                            t.db.table(9).fetch([[[r[3]]]]),
                            function (n) {
                              return (
                                t.i64.eq(n.threadKey, r[3]) &&
                                t.i64.lt(n.authorityLevel, e[2])
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
                          threadKey: r[3],
                          mailboxType: t.i64.cast([0, 4096]),
                          threadType: e[0],
                          threadSubtype: r[12],
                          folderName: r[4],
                          lastActivityTimestampMs: t.i64.cast([-1, 4294967295]),
                          lastReadWatermarkTimestampMs: t.i64.cast([
                            -1, 4294967295,
                          ]),
                          removeWatermarkTimestampMs: t.i64.cast([
                            -1, 4294967295,
                          ]),
                          ongoingCallState: t.i64.cast([0, 0]),
                          parentThreadKey: r[5],
                          authorityLevel: e[2],
                          capabilities: r[6],
                          capabilities2: r[7],
                          capabilities3: r[8],
                          capabilities4: r[9],
                          capabilities5: r[10],
                          unsendLimitMs: t.i64.cast([-1, 4294967295]),
                          syncGroup: t.i64.cast([0, 95]),
                          isHidden: !0,
                          clientThreadKey: r[3],
                        });
                    },
                    function (e) {
                      return (r[2] = r[3]);
                    },
                  ]);
            },
            function (e) {
              return (o[0] = r[2]);
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxVerifyE2EEMetadataThreadExistsV2StoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
