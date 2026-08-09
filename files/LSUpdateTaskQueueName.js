__d(
  "LSUpdateTaskQueueName",
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
            t.db.table(2).fetch([[[e[0]]], "queueNameTaskId"]),
            function (t) {
              var n = t.update,
                r = t.item;
              return n({ queueName: e[1] });
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSCoreUpdateTaskQueueNameStoredProcedure"),
      (e.__tables__ = ["pending_tasks"]),
      (a.exports = e));
  },
  null,
);
