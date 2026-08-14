__d(
  "WASmaxInStatusPublishPostBroadcastStatusResponseNegative",
  [
    "WAResultOrError",
    "WASmaxInStatusPublishStatusNegativeAckMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "participant",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusPublishStatusNegativeAckMixin",
      ).parseStatusNegativeAckMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ participant: r.value }, a.value),
          )
        : a;
    }
    l.parsePostBroadcastStatusResponseNegative = e;
  },
  98,
);
