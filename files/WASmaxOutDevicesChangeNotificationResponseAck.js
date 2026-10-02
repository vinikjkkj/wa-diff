__d(
  "WASmaxOutDevicesChangeNotificationResponseAck",
  ["WASmaxJsx", "WASmaxOutDevicesNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutDevicesNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeChangeNotificationResponseAck = e;
  },
  98,
);
