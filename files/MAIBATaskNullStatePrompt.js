__d(
  "MAIBATaskNullStatePrompt",
  ["isMAIBAAsyncTaskEnabled"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("isMAIBAAsyncTaskEnabled")() ? 3 : 4;
    }
    var s = "scheduled_task_daily_recap";
    function u() {
      return !1;
    }
    ((l.getMAIBAWelcomePromptCount = e),
      (l.TASK_NULL_STATE_PROMPT_ID = s),
      (l.isMAIBATaskNullStatePromptEnabled = u));
  },
  98,
);
