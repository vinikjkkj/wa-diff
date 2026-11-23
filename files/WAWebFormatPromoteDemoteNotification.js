__d(
  "WAWebFormatPromoteDemoteNotification",
  [
    "fbt",
    "WALogger",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      var n = t.participantsClickable,
        r = t.participantsCount,
        a = t.subject,
        i = t.subjectClickable,
        l = t.subtype;
      switch (l) {
        case "promote":
          return r === 1 && o("WAWebSystemMessagesUtils").isMe(a)
            ? o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : o(
                  "WAWebSystemMessageGatingUtils",
                ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [
                  s._plural(r),
                  s._param("participant_names", n),
                ])
              : s._(/*BTDS*/ "", [
                  s._plural(r),
                  s._param("participant_names", n),
                ]);
        case "demote":
          return r === 1 && o("WAWebSystemMessagesUtils").isMe(a)
            ? o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : o(
                  "WAWebSystemMessageGatingUtils",
                ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [
                  s._plural(r),
                  s._param("participant_names", n),
                ])
              : s._(/*BTDS*/ "", [
                  s._plural(r),
                  s._param("participant_names", n),
                ]);
        case "linked_group_promote":
          return o("WAWebSystemMessagesUtils").isMe(a)
            ? o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : o(
                  "WAWebSystemMessageGatingUtils",
                ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [s._param("name", i)])
              : s._(/*BTDS*/ "", [s._param("name", i)]);
        case "linked_group_demote":
          return o("WAWebSystemMessagesUtils").isMe(a)
            ? o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : o(
                  "WAWebSystemMessageGatingUtils",
                ).systemMessageTerminalPeriodsEnabled()
              ? s._(/*BTDS*/ "", [s._param("name", i)])
              : s._(/*BTDS*/ "", [s._param("name", i)]);
        default:
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "wa:formatPromoteDemoteNotification:unknown message subtype: ",
                  "",
                ])),
              l,
            ),
            ""
          );
      }
    }
    l.formatPromoteDemoteNotification = u;
  },
  226,
);
