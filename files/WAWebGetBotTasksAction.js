__d(
  "WAWebGetBotTasksAction",
  ["WAWebBotTasksConfig", "WAWebGetBotTasksJob"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      return o("WAWebGetBotTasksJob").getBotTasks(
        o("WAWebBotTasksConfig").DEFAULT_BOT_TASKS_QUERY_CONFIG,
      );
    }
    l.getBotTasksAction = e;
  },
  98,
);
