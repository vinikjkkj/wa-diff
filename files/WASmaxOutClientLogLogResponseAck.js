__d(
  "WASmaxOutClientLogLogResponseAck",
  ["WASmaxJsx", "WASmaxOutClientLogNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutClientLogNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeLogResponseAck = e;
  },
  98,
);
