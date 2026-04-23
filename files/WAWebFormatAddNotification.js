__d(
  "WAWebFormatAddNotification",
  ["fbt", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.participantsClickable,
        a = e.subject,
        i = e.subjectClickable;
      return t
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(/*BTDS*/ "You added {names}", [s._param("names", r)])
          : o("WAWebSystemMessagesUtils").isMe(a)
            ? n != null
              ? s._(/*BTDS*/ "{user_name} added you", [
                  s._param("user_name", n),
                ])
              : s._(/*BTDS*/ "A member added you")
            : n != null
              ? s._(/*BTDS*/ "{user_name} added {names}", [
                  s._param("user_name", n),
                  s._param("names", r),
                ])
              : s._(/*BTDS*/ "A member added {names}", [s._param("names", r)])
        : o("WAWebSystemMessagesUtils").isMe(a)
          ? s._(/*BTDS*/ "You were added")
          : s._(/*BTDS*/ "{user_name} was added", [s._param("user_name", i)]);
    }
    l.formatAddNotification = e;
  },
  226,
);
