__d(
  "WAWebMsgMayFail",
  ["WAWebAck", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebMsgGetters").getIsSentByMe(e) && e.ack < o("WAWebAck").ACK.SENT
      );
    }
    l.msgMayFail = e;
  },
  98,
);
