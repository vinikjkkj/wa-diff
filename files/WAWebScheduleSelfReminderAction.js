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
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 100;
    async function d(t) {
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
        var s = await o("WAWebFindChatAction").findOrCreateLatestChat(
            o("WAWebUserUtils").getMeUserOrThrow(),
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
          p = await o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat(
            {
              chat: u,
              text: _(l, c ? null : n),
              options: c ? { quotedMsg: n } : {},
              scheduledTimestampS: a,
              onScheduled: function (t) {
                d = t;
              },
            },
          );
        return !p || d == null ? "failed" : (await m(d, a), "scheduled");
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
    }
    async function m(e, t) {
      if (o("WAWebSelfReminderGating").isSelfReminderEnabled())
        try {
          await o("WAWebSelfReminderMarkStore").addSelfReminderMark(e.id, {
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
    }
    function p(e) {
      var t = _("").trim();
      return e.startsWith(t) ? e.slice(t.length).trimStart() : e;
    }
    function _(e, t) {
      var n = s
          ._(/*BTDS*/ "", [s._param("reminder text", e.trim())])
          .toString(),
        r = t != null ? h(t) : null;
      if (t == null || r == null) return n;
      var o = f(t),
        a =
          o === ""
            ? r
            : s
                ._(/*BTDS*/ "", [
                  s._param("source", o),
                  s._param("message excerpt", r),
                ])
                .toString();
      return (
        n +
        `
> ` +
        a
      );
    }
    function f(e) {
      var t = e.id.fromMe ? s._(/*BTDS*/ "").toString() : g(e),
        n = o("WAWebChatCollection").ChatCollection.get(e.id.remote);
      return n == null || !o("WAWebChatGetters").getIsGroup(n)
        ? t
        : t === ""
          ? n.title()
          : s
              ._(/*BTDS*/ "", [
                s._param("sender", t),
                s._param("group name", n.title()),
              ])
              .toString();
    }
    function g(e) {
      var t = o("WAWebMsgGetters").getSender(e),
        n =
          t != null
            ? o("WAWebContactCollection").ContactCollection.get(t)
            : null;
      return n != null
        ? o("WAWebFrontendContactGetters").getDisplayName(n)
        : "";
    }
    function h(e) {
      var t = e.type === o("WAWebMsgType").MSG_TYPE.CHAT ? e.body : e.caption,
        n = t == null ? void 0 : t.replace(/\s+/g, " ").trim();
      return n == null || n === ""
        ? null
        : n.length > c
          ? n.slice(0, c) + "\u2026"
          : n;
    }
    ((l.scheduleSelfReminder = d),
      (l.storeReminderMark = m),
      (l.withoutReminderPrefix = p),
      (l.buildSelfReminderText = _));
  },
  226,
);
