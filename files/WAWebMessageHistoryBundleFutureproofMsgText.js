__d(
  "WAWebMessageHistoryBundleFutureproofMsgText",
  ["fbt", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg;
      return o("WAWebMsgGetters").getIsSentByMe(t)
        ? s._(
            /*BTDS*/ "You sent message history to a new group member. Open WhatsApp on your phone and visit this group to see more information about the history sent.",
          )
        : s._(
            /*BTDS*/ "Someone sent you message history for this group. Open WhatsApp on your phone and visit this group to see it.",
          );
    }
    l.default = e;
  },
  226,
);
