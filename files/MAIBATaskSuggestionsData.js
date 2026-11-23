__d(
  "MAIBATaskSuggestionsData",
  ["fbt", "fbs", "randomInt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = [
        {
          cadence: "WEEKLY",
          description: s._(/*BTDS*/ ""),
          id: "weekly_summary_and_fixes",
          label: s._(/*BTDS*/ ""),
          message: (e = r("fbs"))._(/*BTDS*/ ""),
          taskType: "TIME_BASED__RECURRING",
        },
        {
          cadence: "WEEKLY",
          description: s._(/*BTDS*/ ""),
          id: "weekly_underperformer_scan",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__RECURRING",
        },
        {
          cadence: "WEEKLY",
          description: s._(/*BTDS*/ ""),
          id: "weekly_roas_check",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__RECURRING",
        },
        {
          cadence: "CUSTOM",
          description: s._(/*BTDS*/ ""),
          hideWhenExistingCadences: ["DAILY", "MONTHLY", "CUSTOM"],
          id: "three_day_snapshot",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__RECURRING",
        },
        {
          cadence: "ONE_TIME",
          description: s._(/*BTDS*/ ""),
          id: "one_off_reminder",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__ONE_OFF",
        },
      ],
      c =
        "1. Don't ask a list of questions. Look up the account's active campaigns yourself: optimization goal, spend and results over the last 7 days.\n2. Pick the one metric that best fits the main goal (cost per result for most goals; ROAS when purchase value is tracked) and scope it to the whole account, unless one campaign carries most of the spend.\n3. Without asking to confirm, create the monitoring task in the same turn with a threshold about 20% worse than the current value (above it for costs, below it for ROAS or results), rounded to a clean number, using the last 7 days as the time frame. Start the task description with what you found and why, for example: \"Cost per result is $2.15 over the last 7 days on your top campaign, so the alert is set about 20% higher, at $2.60.\" Then say what the task does.\n4. Only if the account has no active campaigns or no recent data, ask one question: which metric and number to watch, with a suggestion.",
      d =
        "1. The scope is the whole ad account and the metric is cost per result; both are settled, so don't ask about either.\n2. Look up cost per result over the last 7 days yourself, for the account or, when the account-level value is unavailable, for each active campaign, and base the threshold on the campaign with the most spend. Use the last 7 days as the task's time frame.\n3. Without asking to confirm, create the monitoring task in the same turn with a threshold about 20% above that value, rounded to a clean number in the account currency. Start the task description with what you found and why, for example: \"Cost per result is $2.15 over the last 7 days on your top campaign, so the alert is set about 20% higher, at $2.60.\" Then say what the task does.\n4. Only if no campaign has results in the last 7 days, say so in one sentence and ask only for the target number.",
      m =
        "1. Don't ask a follow-up. Create a condition-based task for every active ad in the account: use entity type AD with an empty entity ID list, FREQUENCY greater than 4, and the LAST_7_DAYS time frame.\n2. Keep the task read-only. When it fires, name each ad that crossed the threshold, report its 7-day frequency, explain that repeated exposure may indicate creative fatigue, and recommend what creative to review. Don't make changes.\n3. Make the task name, trigger, and description state the threshold, 7-day window, all-active-ad scope, and at-most-daily alert behavior.",
      p =
        "1. Don't ask a follow-up. Look up active campaigns and their spend and impressions over the last 7 days. Select the highest-spend active campaign that has at least one impression. If none has recent delivery, say so in one sentence and don't create a task.\n2. Create a condition-based task scoped to exactly that campaign: use entity type CAMPAIGN with its ID, IMPRESSIONS less than 1, and the YESTERDAY time frame.\n3. Keep the task read-only. When it fires, say that the campaign received no impressions yesterday, diagnose likely delivery blockers, and recommend what to check. Don't make changes.\n4. Make the selected campaign and the zero-impressions-yesterday condition explicit in the task name, trigger, and description.",
      _ = [
        {
          agentInstructions: c,
          description: s._(/*BTDS*/ ""),
          id: "monitor_metric",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "CONDITION_BASED",
        },
      ],
      f = [].concat(_, u),
      g = [].concat(
        u.filter(function (e) {
          return e.id !== "one_off_reminder";
        }),
        [
          {
            agentInstructions: m,
            description: s._(/*BTDS*/ ""),
            id: "frequency_over_four_alert",
            label: s._(/*BTDS*/ ""),
            message: e._(/*BTDS*/ ""),
            taskType: "CONDITION_BASED",
          },
          {
            agentInstructions: p,
            description: s._(/*BTDS*/ ""),
            id: "zero_impressions_yesterday_alert",
            label: s._(/*BTDS*/ ""),
            message: e._(/*BTDS*/ ""),
            taskType: "CONDITION_BASED",
          },
        ],
      ),
      h = [
        {
          agentInstructions: c,
          description: s._(/*BTDS*/ ""),
          id: "monitor_metric",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "CONDITION_BASED",
        },
        {
          agentInstructions: d,
          description: s._(/*BTDS*/ ""),
          id: "cost_per_result_monitor",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "CONDITION_BASED",
        },
        {
          agentInstructions:
            "1. Always ask first which ad they created or changed, even if one ad is clearly newest. Offer their 3 most recently created or updated ads, with dates, and end your message with that question only.\n2. After they answer, look up that ad and its ad set yourself; don't ask what changed. If the ad's created date is at least 3 days before its last updated date, compare the 3 days before vs the 3 days after that update. Otherwise, compare its recent days with its ad set or account average. Use exactly one of these comparisons; don't add a fallback.\n3. Without asking to confirm, create a read-only one-time task for 9 AM in 3 days that checks delivery, runs that comparison, and recommends one next step. The task description's first sentence states what you found, with its key numbers, the likely goal (lower cost per result, more results, scale spend, refresh creative, or fix delivery), and the one metric you'll compare, by name; then, in the same language, say what the task does. Don't offer to make changes.",
          cadence: "ONE_TIME",
          description: s._(/*BTDS*/ ""),
          id: "change_checkback_3d",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__ONE_OFF",
        },
        {
          cadence: "ONE_TIME",
          description: s._(/*BTDS*/ ""),
          id: "one_off_reminder",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__ONE_OFF",
        },
        {
          cadence: "WEEKLY",
          description: s._(/*BTDS*/ ""),
          id: "weekly_underperformer_scan",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__RECURRING",
        },
        {
          cadence: "WEEKLY",
          description: s._(/*BTDS*/ ""),
          id: "weekly_roas_check",
          label: s._(/*BTDS*/ ""),
          message: e._(/*BTDS*/ ""),
          taskType: "TIME_BASED__RECURRING",
        },
      ];
    function y(e) {
      return (e === void 0 && (e = u), e[r("randomInt")(e.length)]);
    }
    function C(e) {
      for (var t = [].concat(e), n = []; t.length > 0; ) {
        var o = t.splice(r("randomInt")(t.length), 1),
          a = o[0];
        a != null && n.push(a);
      }
      return n;
    }
    ((l.MAIBA_SCHEDULED_TASK_SUGGESTIONS = u),
      (l.MAIBA_TRIGGERED_TASK_SUGGESTIONS = _),
      (l.MAIBA_TRIGGERED_AND_SCHEDULED_TASK_SUGGESTIONS = f),
      (l.MAIBA_TEST_WELCOME_TASK_SUGGESTIONS = g),
      (l.MAIBA_TEST_TASK_SUGGESTIONS = h),
      (l.getRandomMAIBATaskSuggestion = y),
      (l.shuffleMAIBATaskSuggestions = C));
  },
  226,
);
