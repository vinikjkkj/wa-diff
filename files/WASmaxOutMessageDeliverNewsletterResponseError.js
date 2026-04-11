__d(
  "WASmaxOutMessageDeliverNewsletterResponseError",
  ["WASmaxJsx", "WASmaxOutMessageDeliverCommonAckMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutMessageDeliverCommonAckMixin").mergeCommonAckMixin(
        o("WASmaxJsx").smax("ack", { error: "406" }),
        e,
      );
      return t;
    }
    l.makeNewsletterResponseError = e;
  },
  98,
);
