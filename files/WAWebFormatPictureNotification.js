__d(
  "WAWebFormatPictureNotification",
  ["fbt", "WAWebSystemMessageGatingUtils", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.body;
      return r === "remove"
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : n != null
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
        : o("WAWebSystemMessagesUtils").isMe(t)
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : n != null
            ? (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "", [s._param("user_name", n)])) ||
              s._(/*BTDS*/ "", [s._param("user_name", n)])
            : (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "")) ||
              s._(/*BTDS*/ "");
    }
    l.formatPictureNotification = e;
  },
  226,
);
