__d(
  "LSVerifyCommunityFolderExistsV2",
  ["LSIssueNewTaskWithExtraOperations"],
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
              return e[1]
                ? t.resolve((r[0] = e[1]))
                : t.sequence([
                    function (n) {
                      return t.db
                        .table(162)
                        .fetch([[[e[0]]]])
                        .next()
                        .then(function (e, n) {
                          var o = e.done,
                            a = e.value;
                          return o
                            ? (r[1] = !0)
                            : ((n = a.item),
                              t.sequence([
                                function (e) {
                                  return t.db
                                    .table(9)
                                    .fetch([[[n.folderId]]])
                                    .next()
                                    .then(function (e, t) {
                                      var n = e.done,
                                        o = e.value;
                                      return n
                                        ? (r[3] = !0)
                                        : ((t = o.item), (r[3] = !1));
                                    });
                                },
                                function (e) {
                                  return (r[1] = r[3]);
                                },
                              ]));
                        });
                    },
                    function (e) {
                      return (r[0] = r[1]);
                    },
                  ]);
            },
            function (o) {
              return r[0]
                ? ((r[1] = new t.Map()),
                  r[1].set("folder_id", e[0]),
                  (r[2] = r[1].get("folder_id")),
                  (r[3] = t.toJSON(r[1])),
                  t.storedProcedure(
                    n("LSIssueNewTaskWithExtraOperations"),
                    t.i64.to_string(r[2]),
                    t.i64.cast([0, 813]),
                    r[3],
                    void 0,
                    void 0,
                    t.i64.cast([0, 0]),
                    t.i64.cast([0, 0]),
                    void 0,
                    void 0,
                    t.i64.cast([0, 0]),
                    void 0,
                    t.i64.cast([0, 0]),
                  ))
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
      "LSMailboxVerifyCommunityFolderExistsV2StoredProcedure"),
      (e.__tables__ = ["community_folders", "threads"]),
      (a.exports = e));
  },
  null,
);
