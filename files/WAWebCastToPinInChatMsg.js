__d(
  "WAWebCastToPinInChatMsg",
  ["invariant", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE ? e : null;
    }
    function u(t) {
      var n = e(t);
      return (n != null || s(0, 76405), n);
    }
    l.assertPinInChatMsgData = u;
  },
  98,
);
