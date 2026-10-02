__d(
  "WASmaxOutUsyncNotificationResponseAck",
  ["WASmaxJsx", "WASmaxOutUsyncNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutUsyncNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeNotificationResponseAck = e;
  },
  98,
);
