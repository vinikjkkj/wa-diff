__d(
  "WASmaxOutMessageRequestThreadNotificationResponseAck",
  ["WASmaxJsx", "WASmaxOutMessageRequestNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutMessageRequestNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeThreadNotificationResponseAck = e;
  },
  98,
);
