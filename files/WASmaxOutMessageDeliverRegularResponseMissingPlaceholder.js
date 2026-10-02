__d(
  "WASmaxOutMessageDeliverRegularResponseMissingPlaceholder",
  ["WASmaxJsx", "WASmaxOutMessageDeliverAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxOutMessageDeliverAckMixin").mergeAckMixin(
        o("WASmaxJsx").smax("ack", { error: "404" }),
        e,
        t,
      );
      return n;
    }
    l.makeRegularResponseMissingPlaceholder = e;
  },
  98,
);
