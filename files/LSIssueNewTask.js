__d(
  "LSIssueNewTask",
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
              return (
                (n[0] = t.i64.cast([0, 0])),
                (n[2] = t.i64.to_string(e[1])),
                (n[1] = t.i64.of_float(Date.now())),
                t.db
                  .table(2)
                  .add({
                    taskId: void 0,
                    queueName: e[0],
                    context: n[2],
                    taskValue: e[2],
                    enqueueTimestampMs: n[1],
                    httpUrlOverride: e[3],
                    timeoutTimestampMs: e[4],
                    pluginType: e[5],
                    priority: e[6],
                    syncGroupId: e[7],
                    transportKey: e[8],
                    minTimeToSyncTimestampMs: e[9],
                    taskDispatchPriority: n[0],
                  })
              );
            },
            function (r) {
              return t
                .filter(
                  t.db.table(2).fetchDesc([[[e[0]]], "queueNameTaskId"]),
                  function (t) {
                    return (
                      t.queueName === e[0] &&
                      t.context === n[2] &&
                      t.taskValue === e[2]
                    );
                  },
                )
                .next()
                .then(function (e, r) {
                  var o = e.done,
                    a = e.value;
                  return o
                    ? (n[3] = t.i64.cast([-1, 4294967295]))
                    : ((r = a.item), (n[3] = r.taskId));
                });
            },
            function (r) {
              return (
                (n[5] = " "),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  [
                    "LightSpeed NewTask",
                    n[5],
                    "task_id:",
                    n[5],
                    t.i64.to_string(n[3]),
                    n[5],
                    "queue_name:",
                    n[5],
                    e[0],
                    n[5],
                    "task_label:",
                    n[5],
                    n[2],
                  ].join(""),
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
    ((e.__sproc_name__ = "LSCoreIssueNewTaskStoredProcedure"),
      (e.__tables__ = ["pending_tasks"]),
      (a.exports = e));
  },
  null,
);
