__d(
  "WAWebFormatAnnounceNotification",
  ["fbt", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.body;
      return r === "on"
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(
              /*BTDS*/ "You allowed only admins to send messages to this group",
            )
          : s._(
              /*BTDS*/ "{user_name} changed this group's settings to allow only admins to send messages to this group",
              [s._param("user_name", n)],
            )
        : o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(
              /*BTDS*/ "You changed this group's settings to allow all members to send messages to this group",
            )
          : s._(
              /*BTDS*/ "{user_name} changed this group's settings to allow all members to send messages to this group",
              [s._param("user_name", n)],
            );
    }
    l.formatAnnounceNotification = e;
  },
  226,
);
