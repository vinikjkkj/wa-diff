__d(
  "WASmaxInStatusPublishStatusNegativeAckMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusPublishMessageNackRetryAttributesMixin",
    "WASmaxInStatusPublishStatusAckMixin",
    "WASmaxInStatusPublishStatusApplicationNegativeAckMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInStatusPublishStatusApplicationNegativeAckMixin",
        ).parseStatusApplicationNegativeAckMixin(e),
        l = o(
          "WASmaxInStatusPublishMessageNackRetryAttributesMixin",
        ).parseMessageNackRetryAttributesMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ error: r.value }, a.value, {
          statusApplicationNegativeAckMixin: i.success ? i.value : null,
          messageNackRetryAttributesMixin: l.success ? l.value : null,
        }),
      );
    }
    l.parseStatusNegativeAckMixin = e;
  },
  98,
);
