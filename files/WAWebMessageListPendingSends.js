__d(
  "WAWebMessageListPendingSends",
  ["WAWebAck", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        beforeMsg: e.find(function (e) {
          return (
            e != null &&
            e.ack === o("WAWebAck").ACK.CLOCK &&
            o("WAWebMsgGetters").getIsSentByMe(e.unsafe())
          );
        }),
      };
    }
    l.getPendingSendsMarkerPosition = e;
  },
  98,
);
