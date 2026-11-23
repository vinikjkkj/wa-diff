__d(
  "MAIBATaskTypes",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "TIME_BASED__ONE_OFF" || e === "TIME_BASED__RECURRING";
    }
    function s(e) {
      var t = {
        actionNeeded: e.actionNeeded,
        lastActivityTime: e.lastActivityTime,
        name: e.name,
        pastRuns: e.pastRuns,
        prompt: e.prompt,
        sourceProactiveTemplateKey: e.sourceProactiveTemplateKey,
        status: e.status,
        taskId: e.taskId,
      };
      e: {
        if (e.type === "TIME_BASED__ONE_OFF") {
          var n;
          return babelHelpers.extends({}, t, {
            cadenceDescriptor: (n = e.cadenceDescriptor) != null ? n : "CUSTOM",
            nextRun: e.nextRun,
            recurrenceCadenceSeconds: e.recurrenceCadenceSeconds,
            startTime: e.startTime,
            taskType: "TIME_BASED__ONE_OFF",
          });
        }
        if (e.type === "TIME_BASED__RECURRING") {
          var o;
          return babelHelpers.extends({}, t, {
            cadenceDescriptor: (o = e.cadenceDescriptor) != null ? o : "CUSTOM",
            nextRun: e.nextRun,
            recurrenceCadenceSeconds: e.recurrenceCadenceSeconds,
            startTime: e.startTime,
            taskType: "TIME_BASED__RECURRING",
          });
        }
        if (e.type === "CONDITION_BASED") {
          var a;
          return babelHelpers.extends({}, t, {
            taskType: "CONDITION_BASED",
            triggerCondition: (a = e.triggerCondition) != null ? a : "",
          });
        }
        throw r("err")("Unknown MAIBA async task type: " + String(e.type));
      }
    }
    ((l.isTimeBasedTaskType = e), (l.toMAIBATaskView = s));
  },
  98,
);
