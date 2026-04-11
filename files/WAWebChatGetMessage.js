__d(
  "WAWebChatGetMessage",
  [
    "WAWebAck",
    "WAWebCommonMsgUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = o("WAWebStateUtils").unproxy(e), n = t.msgs.length - 1;
        n >= 0;
        n--
      ) {
        var r = t.msgs.at(n);
        if (r && (!r.local || r.ack > o("WAWebAck").ACK.CLOCK)) return r;
      }
    }
    function s(e) {
      for (
        var t = o("WAWebStateUtils").unproxy(e), n = t.msgs.length - 1;
        n >= 0;
        n--
      ) {
        var r = t.msgs.at(n);
        if (
          r &&
          o("WAWebMsgDataUtils").eventTypeFromMsgType(r) !==
            o("WAWebCommonMsgUtils").EventType.IGNORE
        )
          return r;
      }
    }
    function u(e) {
      for (
        var t = o("WAWebStateUtils").unproxy(e), n = t.msgs.length - 1;
        n >= 0;
        n--
      ) {
        var r = t.msgs.at(n);
        if (r != null && o("WAWebMsgGetters").getIsSentByMe(r)) return r;
      }
    }
    ((l.getLastReceivedMsg = e),
      (l.getLastTimestampMsg = s),
      (l.getLastSentMsg = u));
  },
  98,
);
