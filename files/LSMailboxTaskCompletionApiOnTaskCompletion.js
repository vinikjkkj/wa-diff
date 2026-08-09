__d(
  "LSMailboxTaskCompletionApiOnTaskCompletion",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(t.db.table(233).fetch([[[e[0]]]]), function (t) {
            var n = t.update,
              r = t.item;
            return n({ success: e[1] });
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSCoreMailboxTaskCompletionApiOnTaskCompletionStoredProcedure"),
      (e.__tables__ = ["mailbox_task_completion_api_tasks"]),
      (a.exports = e));
  },
  null,
);
