__d(
  "LSIssueNewTaskAndGetTaskID",
  ["LSIssueNewTask", "LSLogEventAnnotate.nop"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (r) {
              return t.storedProcedure(
                n("LSIssueNewTask"),
                e[0],
                e[1],
                e[2],
                e[3],
                e[4],
                e[5],
                e[6],
                e[7],
                e[8],
                e[9],
                e[10],
              );
            },
            function (n) {
              return (
                (r[3] = t.i64.to_string(e[1])),
                t
                  .filter(
                    t.db.table(2).fetchDesc([[[e[0]]], "queueNameTaskId"]),
                    function (t) {
                      return (
                        t.queueName === e[0] &&
                        t.context === r[3] &&
                        t.taskValue === e[2]
                      );
                    },
                  )
                  .next()
                  .then(function (e, n) {
                    var o = e.done,
                      a = e.value;
                    return o
                      ? (r[0] = t.i64.cast([-1, 4294967295]))
                      : ((n = a.item), (r[0] = n.taskId));
                  })
              );
            },
            function (o) {
              return (
                (r[2] = new t.Map()),
                r[2].set("task_id", r[0]),
                r[2].set("task_queue_name", e[0]),
                r[2].set("task_label", r[3]),
                t.nativeOperation(
                  n("LSLogEventAnnotate.nop"),
                  t.i64.cast([0, 16]),
                  t.i64.cast([0, 23]),
                  t.i64.cast([0, 0]),
                  r[2],
                )
              );
            },
            function (e) {
              return (o[0] = r[0]);
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSCoreIssueNewTaskAndGetTaskIDStoredProcedure"),
      (e.__tables__ = ["pending_tasks"]),
      (a.exports = e));
  },
  null,
);
