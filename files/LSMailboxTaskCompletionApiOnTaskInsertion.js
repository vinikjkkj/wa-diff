__d(
  "LSMailboxTaskCompletionApiOnTaskInsertion",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(
            t.islc(
              t.db.table(232).fetch(),
              0,
              t.i64.to_float(t.i64.cast([0, 1])),
            ),
            function (n) {
              var r = n.item;
              return t.db
                .table(233)
                .add({
                  taskId: e[0],
                  notificationScopeKey: r.notificationScopeKey,
                  notificationName: r.notificationName,
                });
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSCoreMailboxTaskCompletionApiOnTaskInsertionStoredProcedure"),
      (e.__tables__ = [
        "mailbox_task_completion_notification_context",
        "mailbox_task_completion_api_tasks",
      ]),
      (a.exports = e));
  },
  null,
);
