__d(
  "WAWebBotTaskDetailArgs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return {
        nodeType: "task",
        promptToRun: e.prompt,
        recurrenceFrequency: e.recurrenceFrequency,
        recurrenceInterval: e.recurrenceInterval,
        reminderType: e.reminderType,
        startAt: null,
        status: e.status,
        subtitle: (t = e.naturalLanguageSchedule) != null ? t : "",
        taskId: e.id,
        timezone: e.timezone,
        title: e.title,
      };
    }
    i.toBotTaskDetailArgs = e;
  },
  66,
);
