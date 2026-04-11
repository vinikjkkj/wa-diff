__d(
  "WASmaxInMessagePublishNewsletterResponseNegative",
  ["WASmaxInMessagePublishNegativeAckMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    l.parseNewsletterResponseNegative = e;
  },
  98,
);
