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
                status: e.status,
                subtitle: e.subtitle,
                taskId: e.task_id,
                title: e.title,
              }),
            );
    }
    l.default = e;
  },
  98,
);
