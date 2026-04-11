__d(
  "WAWebFormatAddNotification",
  ["fbt", "WAWebSystemMessageGatingUtils", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.participantsClickable,
        a = e.participantsCount,
        i = e.subject,
        l = e.subjectClickable,
        u = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageTextTruncationEnabled();
      return t
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? u && a != null && a > 3
            ? s._(/*BTDS*/ "You added {names} and {participants_count} more", [
                s._param("names", r),
                s._param("participants_count", a - 2),
              ])
            : s._(/*BTDS*/ "You added {names}", [s._param("names", r)])
          : o("WAWebSystemMessagesUtils").isMe(i)
            ? n != null
              ? s._(/*BTDS*/ "{user_name} added you", [
                  s._param("user_name", n),
                ])
              : s._(/*BTDS*/ "A member added you")
            : n != null
              ? u && a != null && a > 3
                ? s._(
                    /*BTDS*/ "{user_name} added {names}, {participants_count} more",
                    [
                      s._param("user_name", n),
                      s._param("names", r),
                      s._param("participants_count", a - 2),
                    ],
                  )
                : s._(/*BTDS*/ "{user_name} added {names}", [
                    s._param("user_name", n),
                    s._param("names", r),
                  ])
              : u && a != null && a > 3
                ? s._(
                    /*BTDS*/ "A member added {names}{participants_count} more",
                    [
                      s._param("names", r),
                      s._param("participants_count", a - 2),
                    ],
                  )
                : s._(/*BTDS*/ "A member added {names}", [s._param("names", r)])
        : o("WAWebSystemMessagesUtils").isMe(i)
          ? s._(/*BTDS*/ "You were added")
          : s._(/*BTDS*/ "{user_name} was added", [s._param("user_name", l)]);
    }
    l.formatAddNotification = e;
  },
  226,
);
