__d(
  "WAWebFormatAnnounceNotification",
  ["fbt", "WAWebSystemMessageGatingUtils", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.body;
      return r === "on"
        ? o("WAWebSystemMessagesUtils").isMe(t)
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
        : o("WAWebSystemMessagesUtils").isMe(t)
          ? (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "")) ||
            s._(/*BTDS*/ "")
          : (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "", [s._param("user_name", n)])) ||
            s._(/*BTDS*/ "", [s._param("user_name", n)]);
    }
    l.formatAnnounceNotification = e;
  },
  226,
);
