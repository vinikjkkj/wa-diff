__d(
  "WAWebGetBotTasksJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebBotTasksMapper",
    "WAWebFetchBotTasks",
    "WAWebOrchestratorNonPersistedJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getBotTasks",
          async function (e) {
            var t = await o("WAWebFetchBotTasks").fetchBotTasks(e);
            e: {
              var n = t;
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                n.type === "success" &&
                "value" in n
              ) {
                var a = n.value;
                return o("WAWebBotTasksMapper").toBotTasksResult(a);
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                n.type === "graphql-error" &&
                "error" in n
              ) {
                var i = n.error;
                throw i;
              }
              throw ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
                n.type === "error"
                ? r("err")("[bot][getBotTasks] reminders query failed")
                : Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n,
                  );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted(e);
    }
    l.getBotTasks = e;
  },
  98,
);
