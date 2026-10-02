__d(
  "WASmaxOutAccountSyncNotificationResponseAck",
  ["WASmaxJsx", "WASmaxOutAccountSyncNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutAccountSyncNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeNotificationResponseAck = e;
  },
  98,
);
