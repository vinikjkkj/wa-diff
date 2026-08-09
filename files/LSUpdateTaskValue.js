__d(
  "LSUpdateTaskValue",
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
              return n({ taskValue: r.taskValue.split(e[1]).join(e[2]) });
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSCoreUpdateTaskValueStoredProcedure"),
      (e.__tables__ = ["pending_tasks"]),
      (a.exports = e));
  },
  null,
);
