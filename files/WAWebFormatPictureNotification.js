__d(
  "WAWebFormatPictureNotification",
  ["fbt", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.body;
      return r === "remove"
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(/*BTDS*/ "You deleted this group's icon")
          : n != null
            ? s._(/*BTDS*/ "{user_name} deleted this group's icon", [
                s._param("user_name", n),
              ])
            : s._(/*BTDS*/ "A member deleted this group's icon")
        : o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(/*BTDS*/ "You changed this group's icon")
          : n != null
            ? s._(/*BTDS*/ "{user_name} changed this group's icon", [
                s._param("user_name", n),
              ])
            : s._(/*BTDS*/ "A member changed this group's icon");
    }
    l.formatPictureNotification = e;
  },
  226,
);
