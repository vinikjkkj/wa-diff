__d(
  "WASmaxOutMessageDeliverRegularResponseSuccess",
  ["WASmaxJsx", "WASmaxOutMessageDeliverAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxOutMessageDeliverAckMixin").mergeAckMixin(
        o("WASmaxJsx").smax("ack", null),
        e,
        t,
      );
      return n;
    }
    l.makeRegularResponseSuccess = e;
  },
  98,
);
