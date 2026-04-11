__d(
  "WAWebEventResponseFutureproofMsgText",
  ["fbt", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getIsSentByMe(t);
      return n
        ? s._(
            /*BTDS*/ "Your event response couldn't load. Open the event on your phone to view it.",
          )
        : s._(
            /*BTDS*/ "This event response couldn't load. Open the event on your phone to view it.",
          );
    }
    l.default = e;
  },
  226,
);
