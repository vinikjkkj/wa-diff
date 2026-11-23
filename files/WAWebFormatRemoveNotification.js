__d(
  "WAWebFormatRemoveNotification",
  [
    "fbt",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebLidMigrationUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        a = e.participantsClickable,
        i = e.subject,
        l = e.subjectClickable;
      return t
        ? r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(t, i),
          )
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : o("WAWebSystemMessagesUtils").isMe(t)
            ? o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [s._param("names", a)])
              : s._(/*BTDS*/ "", [s._param("names", a)])
            : o("WAWebSystemMessagesUtils").isMe(i)
              ? n != null
                ? (o(
                    "WAWebSystemMessageGatingUtils",
                  ).systemMessageTerminalPeriodsEnabled() &&
                    s._(/*BTDS*/ "", [s._param("user_name", n)])) ||
                  s._(/*BTDS*/ "", [s._param("user_name", n)])
                : (o(
                    "WAWebSystemMessageGatingUtils",
                  ).systemMessageTerminalPeriodsEnabled() &&
                    s._(/*BTDS*/ "")) ||
                  s._(/*BTDS*/ "")
              : n != null
                ? (o(
                    "WAWebSystemMessageGatingUtils",
                  ).systemMessageTerminalPeriodsEnabled() &&
                    s._(/*BTDS*/ "", [
                      s._param("user_name", n),
                      s._param("names", a),
                    ])) ||
                  s._(/*BTDS*/ "", [
                    s._param("user_name", n),
                    s._param("names", a),
                  ])
                : (o(
                    "WAWebSystemMessageGatingUtils",
                  ).systemMessageTerminalPeriodsEnabled() &&
                    s._(/*BTDS*/ "", [s._param("names", a)])) ||
                  s._(/*BTDS*/ "", [s._param("names", a)])
        : o("WAWebSystemMessagesUtils").isMe(i)
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : i != null &&
              o("WAWebBotUtils").isWidGroupAgentFbidWid(i) &&
              o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [s._param("agent_name", l)])
              : s._(/*BTDS*/ "", [s._param("agent_name", l)])
            : o(
                  "WAWebSystemMessageGatingUtils",
                ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [s._param("user_name", l)])
              : s._(/*BTDS*/ "", [s._param("user_name", l)]);
    }
    l.formatRemoveNotification = e;
  },
  226,
);
