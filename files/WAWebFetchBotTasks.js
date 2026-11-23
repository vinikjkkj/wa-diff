__d(
  "WAWebFetchBotTasks",
  [
    "WALogger",
    "WAWebFetchBotTasksQuery.graphql",
    "WAWebFetchBotTasks_reminder.graphql",
    "WAWebFetchBotTasks_suggestion.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = e !== void 0 ? e : (e = n("WAWebFetchBotTasksQuery.graphql")),
      p = s !== void 0 ? s : (s = n("WAWebFetchBotTasks_reminder.graphql")),
      _ = u !== void 0 ? u : (u = n("WAWebFetchBotTasks_suggestion.graphql"));
    async function f(e) {
      try {
        await r("WAWebNetworkStatus").waitIfOffline();
        var t,
          n = await o("WAWebRelayClient").fetchQuery(
            m,
            {
              first: e.first,
              statuses: e.statuses,
              suggestedLimit: e.suggestedLimit,
              surface: e.surface,
            },
            {
              environmentType: "whatsapp_web",
              getInlineDataReader: function (n) {
                t = n;
              },
            },
          ),
          a = n == null ? void 0 : n.xfb_gen_ai_meta_ai_reminders;
        if (a == null || t == null) return { type: "success", value: null };
        var i = a.edges,
          l = a.is_server_enabled,
          s = a.suggested_tasks,
          u = t;
        return {
          type: "success",
          value: {
            isServerEnabled: l === !0,
            reminders: i.flatMap(function (e) {
              return e.node == null ? [] : [g(u, e.node)];
            }),
            suggestions: s.map(function (e) {
              return h(u, e);
            }),
          },
        };
      } catch (e) {
        return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
          ? (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot][fetchBotTasks] reminders query rejected",
                  ])),
              )
              .catching(e)
              .sendLogs("bot-tasks-fetch-graphql-error"),
            { type: "graphql-error", error: e })
          : (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot][fetchBotTasks] reminders query failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-tasks-fetch-error"),
            { type: "error" });
      }
    }
    function g(e, t) {
      var n = e(p, t),
        r = n.id,
        o = n.natural_language_schedule,
        a = n.prompt,
        i = n.recurrence_frequency,
        l = n.recurrence_interval,
        s = n.reminder_type,
        u = n.status,
        c = n.timezone,
        d = n.title;
      return {
        id: r,
        natural_language_schedule: o,
        prompt: a,
        recurrence_frequency: i == null ? null : i,
        recurrence_interval: l,
        reminder_type: s == null ? null : s,
        status: u == null ? null : u,
        timezone: c,
        title: d,
      };
    }
    function h(e, t) {
      var n = e(_, t),
        r = n.display_label,
        o = n.id,
        a = n.prompt,
        i = n.subtitle;
      return { display_label: r, id: o, prompt: a, subtitle: i };
    }
    l.fetchBotTasks = f;
  },
  98,
);
