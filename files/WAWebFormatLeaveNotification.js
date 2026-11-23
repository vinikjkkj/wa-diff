__d(
  "WAWebFormatLeaveNotification",
  [
    "fbt",
    "WAWebGroupType",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.body,
        n = e.participantsClickable,
        r = e.subject;
      return r
        ? o("WAWebSystemMessagesUtils").isMe(r)
          ? (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "")) ||
            s._(/*BTDS*/ "")
          : (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "", [s._param("user_name", n)])) ||
            s._(/*BTDS*/ "", [s._param("user_name", n)])
        : t === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    l.formatLeaveNotification = e;
  },
  226,
);
