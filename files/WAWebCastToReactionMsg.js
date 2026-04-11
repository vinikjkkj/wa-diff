__d(
  "WAWebCastToReactionMsg",
  ["invariant", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.REACTION ? e : null;
    }
    function u(t) {
      var n = e(t);
      return (n != null || s(0, 73785), n);
    }
    ((l.castToReactionMsgData = e), (l.assertReactionMsgData = u));
  },
  98,
);
