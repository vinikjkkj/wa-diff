__d(
  "WAWebMemberLabelFutureproofMsgText",
  ["fbt", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getIsSentByMe(t);
      return n
        ? s._(
            /*BTDS*/ "Your member tag edit couldn't load. Open your member tag on your phone to view it.",
          )
        : s._(
            /*BTDS*/ "This member tag edit couldn't load. Open your member tag on your phone to view it.",
          );
    }
    l.default = e;
  },
  226,
);
