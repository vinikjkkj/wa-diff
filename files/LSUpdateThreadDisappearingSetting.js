__d(
  "LSUpdateThreadDisappearingSetting",
  [
    "LSArrayGetObjectAt",
    "LSDeserializeFromJsonIntoDictionaryV2.nop",
    "LSUpdateDisappearingSettingInClientThreadsTable.nop",
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
              return (
                (r[0] = new t.Map()),
                r[0].set("ephemerality_type", void 0),
                t.i64.neq(e[1], void 0)
                  ? (r[1] = t.i64.to_string(e[1]))
                  : (r[1] = void 0),
                r[0].set("ephemeral_options_duration_in_sec", r[1]),
                t.db
                  .table(9)
                  .fetch([[[e[0]]]])
                  .next()
                  .then(function (e, o) {
                    var a = e.done,
                      i = e.value;
                    return a
                      ? (r[2] = void 0)
                      : ((o = i.item),
                        t.sequence([
                          function (e) {
                            return (
                              (r[8] = o.metadata),
                              r[8] !== void 0
                                ? t.sequence([
                                    function (e) {
                                      return t
                                        .nativeOperation(
                                          n(
                                            "LSDeserializeFromJsonIntoDictionaryV2.nop",
                                          ),
                                          r[8],
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[9] = t[0]), t);
                                        });
                                    },
                                    function (e) {
                                      return (
                                        (r[10] = new t.Map()),
                                        (r[11] = r[9].keys()),
                                        (r[12] = t.i64.of_int32(r[11].length)),
                                        t.i64.gt(r[12], t.i64.cast([0, 0]))
                                          ? t.loopAsync(r[12], function (e) {
                                              return (
                                                (r[13] = e),
                                                t.sequence([
                                                  function (e) {
                                                    return t
                                                      .nativeTypeOperation(
                                                        "Array",
                                                        n("LSArrayGetObjectAt"),
                                                        r[11],
                                                        r[13],
                                                      )
                                                      .then(function (e) {
                                                        var t;
                                                        return (
                                                          (t = e),
                                                          (r[14] = t[0]),
                                                          (r[15] = t[1]),
                                                          t
                                                        );
                                                      });
                                                  },
                                                  function (e) {
                                                    return (
                                                      (r[16] = r[9].get(r[14])),
                                                      r[10].set(r[14], r[16])
                                                    );
                                                  },
                                                ])
                                              );
                                            })
                                          : t.resolve()
                                      );
                                    },
                                    function (e) {
                                      return (r[7] = r[10]);
                                    },
                                  ])
                                : t.resolve(
                                    ((r[9] = new t.Map()), (r[7] = r[9])),
                                  )
                            );
                          },
                          function (e) {
                            return (r[2] = r[7]);
                          },
                        ]));
                  })
              );
            },
            function (n) {
              return (
                r[2] ? (r[4] = !1) : (r[4] = !0),
                r[4] || r[2].set("message_ephemerality_setting", r[0]),
                r[2] ? (r[5] = !1) : (r[5] = !0),
                r[5]
                  ? (r[6] = void 0)
                  : ((r[7] = t.toJSON(r[2])), (r[6] = r[7])),
                t.forEach(
                  t.filter(t.db.table(9).fetch([[[e[0]]]]), function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[0]) &&
                      [t.i64.cast([0, 15]), t.i64.cast([0, 16])].some(
                        function (e) {
                          return t.i64.eq(n.threadType, e);
                        },
                      )
                    );
                  }),
                  function (t) {
                    var n = t.update,
                      o = t.item;
                    return n({
                      disappearingSettingTtl: e[1],
                      disappearingSettingUpdatedTs: e[2],
                      disappearingSettingUpdatedBy: e[3],
                      metadata: r[6],
                    });
                  },
                )
              );
            },
            function (r) {
              return t.nativeOperation(
                n("LSUpdateDisappearingSettingInClientThreadsTable.nop"),
                e[0],
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxUpdateThreadDisappearingSettingStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
