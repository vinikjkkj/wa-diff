__d(
  "LSIssueNextSync",
  ["LSIssueNewTaskAndGetTaskID"],
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
              return t
                .count(
                  t.filter(t.db.table(310).fetch(), function (t) {
                    return t.projectName === e[1];
                  }),
                )
                .then(function (e) {
                  return (r[0] = e);
                });
            },
            function (o) {
              return t.i64.gt(r[0], t.i64.cast([0, 0])) && e[3] === !0
                ? t.resolve(0)
                : t.sequence([
                    function (n) {
                      return t.forEach(
                        t.filter(t.db.table(310).fetch(), function (t) {
                          return t.projectName === e[1];
                        }),
                        function (e) {
                          return e.delete();
                        },
                      );
                    },
                    function (o) {
                      return (
                        t.i64.gt(e[2], t.i64.cast([0, 0]))
                          ? ((r[3] = t.i64.of_float(Date.now())),
                            (r[1] = t.i64.add(r[3], e[2])))
                          : (r[1] = t.i64.cast([0, 0])),
                        t
                          .storedProcedure(
                            n("LSIssueNewTaskAndGetTaskID"),
                            ["acs_sync", "_", e[1]].join(""),
                            t.i64.cast([0, 362]),
                            "",
                            void 0,
                            void 0,
                            t.i64.cast([0, 0]),
                            t.i64.cast([0, 0]),
                            void 0,
                            void 0,
                            r[1],
                            t.i64.cast([0, 0]),
                          )
                          .then(function (e) {
                            var t;
                            return ((t = e), (r[2] = t[0]), t);
                          })
                      );
                    },
                    function (n) {
                      return t.db
                        .table(310)
                        .add({
                          taskId: r[2],
                          projectName: e[1],
                          maxClientTokenPoolSize: e[0],
                        });
                    },
                  ]);
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSAnonymousCredentialsIssueNextSyncStoredProcedure"),
      (e.__tables__ = ["acs_request_context"]),
      (a.exports = e));
  },
  null,
);
