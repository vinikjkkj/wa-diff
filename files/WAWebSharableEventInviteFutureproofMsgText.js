__d(
  "WAWebSharableEventInviteFutureproofMsgText",
  ["fbt", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getIsSentByMe(t);
      return n
        ? s._(
            /*BTDS*/ "You sent an event's invite from your phone, but this version of WhatsApp doesn't support it.",
          )
        : s._(
            /*BTDS*/ "Someone invited you to an event, but this version of WhatsApp doesn't support it.",
          );
    }
    l.default = e;
  },
  226,
);
