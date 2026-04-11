__d(
  "WAWebFormatRemoveNotification",
  ["fbt", "WAWebLidMigrationUtils", "WAWebSystemMessagesUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        a = e.participantsClickable,
        i = e.subject,
        l = e.subjectClickable;
      return t
        ? r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(t, i),
          )
          ? s._(/*BTDS*/ "You were removed")
          : o("WAWebSystemMessagesUtils").isMe(t)
            ? s._(/*BTDS*/ "You removed {names}", [s._param("names", a)])
            : o("WAWebSystemMessagesUtils").isMe(i)
              ? n != null
                ? s._(/*BTDS*/ "{user_name} removed you", [
                    s._param("user_name", n),
                  ])
                : s._(/*BTDS*/ "A member removed you")
              : n != null
                ? s._(/*BTDS*/ "{user_name} removed {names}", [
                    s._param("user_name", n),
                    s._param("names", a),
                  ])
                : s._(/*BTDS*/ "A member removed {names}", [
                    s._param("names", a),
                  ])
        : o("WAWebSystemMessagesUtils").isMe(i)
          ? s._(/*BTDS*/ "You were removed")
          : s._(/*BTDS*/ "{user_name} was removed", [s._param("user_name", l)]);
    }
    l.formatRemoveNotification = e;
  },
  226,
);
