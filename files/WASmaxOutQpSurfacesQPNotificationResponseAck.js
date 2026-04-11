__d(
  "WASmaxOutQpSurfacesQPNotificationResponseAck",
  ["WASmaxJsx", "WASmaxOutQpSurfacesNotificationClientAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutQpSurfacesNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    l.makeQPNotificationResponseAck = e;
  },
  98,
);
