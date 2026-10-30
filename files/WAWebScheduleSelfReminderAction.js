__d(
  "WAWebScheduleSelfReminderAction",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebIsScheduledMessagesAvailableForChat",
    "WAWebIsScheduledTimeValid",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSelfReminderGating",
    "WAWebSelfReminderMarkStore",
    "WAWebSendScheduledMsgAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 100;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.quotedMsg,
            a = t.scheduledTimestampS,
            i = t.text;
          if (!o("WAWebSelfReminderGating").isSelfReminderEnabled())
            return "disabled";
          var l = i.trim();
          if (l === "") return "empty_text";
          if (!r("WAWebIsScheduledTimeValid")(a, o("WATimeUtils").unixTime()))
            return "invalid_time";
          try {
            var s = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                "createChat",
              ),
              u = s.chat;
            if (
              !o(
                "WAWebIsScheduledMessagesAvailableForChat",
              ).isScheduledMessagesAvailableForChat(u)
            )
              return "unavailable";
            var c = n != null && n.id.remote.equals(u.id),
              d = null,
              m = yield o(
                "WAWebSendScheduledMsgAction",
              ).sendScheduledTextMsgToChat({
                chat: u,
                text: f(l, c ? null : n),
                options: c ? { quotedMsg: n } : {},
                scheduledTimestampS: a,
                onScheduled: function (t) {
                  d = t;
                },
              });
            return !m || d == null ? "failed" : (yield p(d, a), "scheduled");
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[self_reminder] schedule failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("self-reminder-schedule-failed"),
              "failed"
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebSelfReminderMarkStore").addSelfReminderMark(e.id, {
              msgKey: e.toString(),
              scheduledTimestampS: t,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[self_reminder] storing reminder mark failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("self-reminder-mark-store-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = s
          ._(/*BTDS*/ "Reminder: {reminder text}", [
            s._param("reminder text", e.trim()),
          ])
          .toString(),
        r = t != null ? y(t) : null;
      if (t == null || r == null) return n;
      var o = g(t),
        a =
          o === ""
            ? r
            : s
                ._(/*BTDS*/ "{source}: {message excerpt}", [
                  s._param("source", o),
                  s._param("message excerpt", r),
                ])
                .toString();
      return n + "\n> " + a;
    }
    function g(e) {
      var t = e.id.fromMe ? s._(/*BTDS*/ "You").toString() : h(e),
        n = o("WAWebChatCollection").ChatCollection.get(e.id.remote);
      return n == null || !o("WAWebChatGetters").getIsGroup(n)
        ? t
        : t === ""
          ? n.title()
          : s
              ._(/*BTDS*/ "{sender} \u00b7 {group name}", [
                s._param("sender", t),
                s._param("group name", n.title()),
              ])
              .toString();
    }
    function h(e) {
      var t = o("WAWebMsgGetters").getSender(e),
        n =
          t != null
            ? o("WAWebContactCollection").ContactCollection.get(t)
            : null;
      return n != null
        ? o("WAWebFrontendContactGetters").getDisplayName(n)
        : "";
    }
    function y(e) {
      var t = e.type === o("WAWebMsgType").MSG_TYPE.CHAT ? e.body : e.caption,
        n = t == null ? void 0 : t.replace(/\s+/g, " ").trim();
      return n == null || n === ""
        ? null
        : n.length > c
          ? n.slice(0, c) + "\u2026"
          : n;
    }
    ((l.scheduleSelfReminder = d), (l.buildSelfReminderText = f));
  },
  226,
);
