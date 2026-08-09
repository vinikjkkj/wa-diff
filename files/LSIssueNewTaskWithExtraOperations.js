__d(
  "LSIssueNewTaskWithExtraOperations",
  ["LSIssueNewTaskAndGetTaskID", "LSMailboxTaskCompletionApiOnTaskInsertion"],
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
              return t
                .storedProcedure(
                  n("LSIssueNewTaskAndGetTaskID"),
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
                  e[11],
                )
                .then(function (e) {
                  var t;
                  return ((t = e), (r[0] = t[0]), t);
                });
            },
            function (e) {
              return t.storedProcedure(
                n("LSMailboxTaskCompletionApiOnTaskInsertion"),
                r[0],
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
      "LSCoreIssueNewTaskWithExtraOperationsStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
