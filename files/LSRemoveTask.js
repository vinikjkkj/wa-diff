__d(
  "LSRemoveTask",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return t.db
            .table(2)
            .fetch([[[e[0]]]])
            .next()
            .then(function (r, o) {
              var a = r.done,
                i = r.value;
              return a
                ? 0
                : ((o = i.item),
                  t.forEach(
                    t.db
                      .table(2)
                      .fetch([
                        [[o.queueName, { lte: e[0] }]],
                        "queueNameTaskId",
                      ]),
                    function (e) {
                      var r = e.item;
                      return t.sequence([
                        function (e) {
                          return (
                            (n[0] = r.taskDispatchPriority),
                            t.forEach(
                              t.filter(
                                t.db.table(2).fetch([[[r.taskId]]]),
                                function (e) {
                                  return (
                                    t.i64.eq(e.taskId, r.taskId) &&
                                    e.queueName === r.queueName
                                  );
                                },
                              ),
                              function (e) {
                                return e.delete();
                              },
                            )
                          );
                        },
                        function (e) {
                          return t.i64.eq(n[0], t.i64.cast([0, 1e3])) ||
                            t.i64.eq(n[0], t.i64.cast([0, 2e3]))
                            ? (n[1] = t.i64.cast([0, 734739218]))
                            : (n[1] = t.i64.cast([0, 734737036]));
                        },
                      ]);
                    },
                  ));
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSCoreRemoveTaskStoredProcedure"),
      (e.__tables__ = ["pending_tasks"]),
      (a.exports = e));
  },
  null,
);
