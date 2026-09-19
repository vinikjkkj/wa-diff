__d(
  "cometComposedTextV2GenAiTaskPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.task_id.trim() === ""
        ? null
        : o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o("cometComposedTextV2NodeBuilders").buildTaskNode({
                nodeType: "task",
                promptToRun: e.prompt_to_run,
                recurrenceFrequency: e.recurrence_frequency,
                recurrenceInterval: e.recurrence_interval,
                reminderType: e.reminder_type,
                startAt: e.start_at,
                status: e.status,
                subtitle: e.subtitle,
                taskId: e.task_id,
                timezone: e.timezone,
                title: e.title,
              }),
            );
    }
    l.default = e;
  },
  98,
);
