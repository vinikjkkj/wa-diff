__d(
  "WASmaxInStatusPublishPostNewsletterStatusResponseNegative",
  ["WASmaxInStatusPublishStatusNegativeAckMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusPublishStatusNegativeAckMixin",
      ).parseStatusNegativeAckMixin(e, t);
      return (r.success, r);
    }
    l.parsePostNewsletterStatusResponseNegative = e;
  },
  98,
);
