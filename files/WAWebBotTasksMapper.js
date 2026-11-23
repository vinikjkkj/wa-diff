__d(
  "WAWebBotTasksMapper",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { isServerEnabled: !1, suggestedTasks: [], tasks: [] };
    function u(t) {
      if (t == null) return s;
      var n = t.isServerEnabled,
        r = t.reminders,
        a = t.suggestions,
        i = c(r),
        l = d(a),
        u = r.length - i.length,
        m = a.length - l.length;
      return (
        (u > 0 || m > 0) &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot][toBotTasksResult] dropped ",
                  " reminders, ",
                  " suggestions",
                ])),
              u,
              m,
            )
            .sendLogs("bot-tasks-mapper-dropped-records"),
        { isServerEnabled: n, suggestedTasks: l, tasks: i }
      );
    }
    function c(e) {
      return e.flatMap(function (e) {
        return e.id == null || e.title == null
          ? []
          : [
              {
                id: e.id,
                naturalLanguageSchedule: e.natural_language_schedule,
                prompt: e.prompt,
                recurrenceFrequency: e.recurrence_frequency,
                recurrenceInterval: e.recurrence_interval,
                reminderType: e.reminder_type,
                status: e.status,
                timezone: e.timezone,
                title: e.title,
              },
            ];
      });
    }
    function d(e) {
      return e.flatMap(function (e) {
        return e.id == null || e.display_label == null || e.prompt == null
          ? []
          : [
              {
                displayLabel: e.display_label,
                id: e.id,
                prompt: e.prompt,
                subtitle: e.subtitle,
              },
            ];
      });
    }
    l.toBotTasksResult = u;
  },
  98,
);
