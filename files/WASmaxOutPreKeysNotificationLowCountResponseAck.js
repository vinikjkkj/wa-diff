__d(
  "WASmaxOutPreKeysNotificationLowCountResponseAck",
  ["WASmaxJsx", "WASmaxOutPreKeysNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutPreKeysNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeNotificationLowCountResponseAck = e;
  },
  98,
);
