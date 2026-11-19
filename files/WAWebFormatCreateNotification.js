__d(
  "WAWebFormatCreateNotification",
  ["fbt", "WAWebSystemMessageGatingUtils", "WAWebSystemMessagesUtils", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.chat,
        a = e.groupSubject,
        i = e.groupSubjectAsString,
        l = i
          ? a
          : u.jsx(o("WAWebSystemMessagesUtils").FormattedText, { text: a });
      if (o("WAWebSystemMessagesUtils").isMe(t))
        return a
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ 'You created the group "{group_subject}".', [
                s._param("group_subject", l),
              ])
            : s._(/*BTDS*/ 'You created group "{group_subject}"', [
                s._param("group_subject", l),
              ])
          : o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "You created this group.")
            : s._(/*BTDS*/ "You created this group");
      if (a) return n != null ? d(n, l) : m(l);
      if (n != null) {
        var c = r ? r.title() : "";
        return c.trim() === "" ? p(n) : d(n, c);
      }
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "An admin created this group.")
        : s._(/*BTDS*/ "An admin created this group");
    }
    function d(e, t) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ '{user_name} created the group "{group_subject}".', [
            s._param("user_name", e),
            s._param("group_subject", t),
          ])
        : s._(/*BTDS*/ '{user_name} created group "{group_subject}"', [
            s._param("user_name", e),
            s._param("group_subject", t),
          ]);
    }
    function m(e) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ 'An admin created the group "{group_subject}".', [
            s._param("group_subject", e),
          ])
        : s._(/*BTDS*/ 'An admin created group "{group_subject}"', [
            s._param("group_subject", e),
          ]);
    }
    function p(e) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "{user_name} created this group.", [
            s._param("user_name", e),
          ])
        : s._(/*BTDS*/ "{user_name} created this group", [
            s._param("user_name", e),
          ]);
    }
    l.formatCreateNotification = c;
  },
  226,
);
