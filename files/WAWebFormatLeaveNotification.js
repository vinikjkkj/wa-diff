__d(
  "WAWebFormatLeaveNotification",
  ["fbt", "WAWebGroupType", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.body,
        n = e.participantsClickable,
        r = e.subject;
      return r
        ? o("WAWebSystemMessagesUtils").isMe(r)
          ? s._(/*BTDS*/ "You left")
          : s._(/*BTDS*/ "{user_name} left", [s._param("user_name", n)])
        : t === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
          ? s._(/*BTDS*/ "This community is no longer available")
          : s._(/*BTDS*/ "This group has ended");
    }
    l.formatLeaveNotification = e;
  },
  226,
);
