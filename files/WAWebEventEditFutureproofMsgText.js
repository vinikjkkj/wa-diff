__d(
  "WAWebEventEditFutureproofMsgText",
  ["fbt", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getIsSentByMe(t);
      return n
        ? s._(
            /*BTDS*/ "Your event edit couldn't load. Open the event on your phone to view it.",
          )
        : s._(
            /*BTDS*/ "This event edit couldn't load. Open the event on your phone to view it.",
          );
    }
    l.default = e;
  },
  226,
);
