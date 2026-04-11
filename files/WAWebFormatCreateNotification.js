__d(
  "WAWebFormatCreateNotification",
  ["fbt", "WAWebSystemMessagesUtils", "react"],
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
          ? s._(/*BTDS*/ 'You created group "{group_subject}"', [
              s._param("group_subject", l),
            ])
          : s._(/*BTDS*/ "You created this group");
      if (a)
        return n != null
          ? s._(/*BTDS*/ '{user_name} created group "{group_subject}"', [
              s._param("user_name", n),
              s._param("group_subject", l),
            ])
          : s._(/*BTDS*/ 'An admin created group "{group_subject}"', [
              s._param("group_subject", l),
            ]);
      if (n != null) {
        var c = r ? r.title() : "";
        return c.trim() === ""
          ? s._(/*BTDS*/ "{user_name} created this group", [
              s._param("user_name", n),
            ])
          : s._(/*BTDS*/ '{user_name} created group "{group_subject}"', [
              s._param("user_name", n),
              s._param("group_subject", c),
            ]);
      }
      return s._(/*BTDS*/ "An admin created this group");
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.formatCreateNotification = c));
  },
  226,
);
