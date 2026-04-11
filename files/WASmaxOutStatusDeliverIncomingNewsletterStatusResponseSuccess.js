__d(
  "WASmaxOutStatusDeliverIncomingNewsletterStatusResponseSuccess",
  ["WASmaxJsx", "WASmaxOutStatusDeliverStatusAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutStatusDeliverStatusAckMixin").mergeStatusAckMixin(
        o("WASmaxJsx").smax("ack", null),
        e,
      );
      return t;
    }
    l.makeIncomingNewsletterStatusResponseSuccess = e;
  },
  98,
);
