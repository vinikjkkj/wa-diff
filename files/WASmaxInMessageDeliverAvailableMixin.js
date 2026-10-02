__d(
  "WASmaxInMessageDeliverAvailableMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBusinessBotMessageFeedbackRequestedMixin",
    "WASmaxInMessageDeliverBusinessBotMessageMixin",
    "WASmaxInMessageDeliverContentAvailableMixins",
    "WASmaxInMessageDeliverRetryOrIndividualRegularOrBotResponseMessageMixinGroup",
    "WASmaxInMessageDeliverRevokeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e),
        a = o(
          "WASmaxInMessageDeliverBusinessBotMessageMixin",
        ).parseBusinessBotMessageMixin(e),
        i = o(
          "WASmaxInMessageDeliverBusinessBotMessageFeedbackRequestedMixin",
        ).parseBusinessBotMessageFeedbackRequestedMixin(e),
        l = o(
          "WASmaxInMessageDeliverRetryOrIndividualRegularOrBotResponseMessageMixinGroup",
        ).parseRetryOrIndividualRegularOrBotResponseMessageMixinGroup(e);
      if (!l.success) return l;
      var s = o(
        "WASmaxInMessageDeliverContentAvailableMixins",
      ).parseContentAvailableMixins(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            revokeMixin: r.success ? r.value : null,
            businessBotMessageMixin: a.success ? a.value : null,
            businessBotMessageFeedbackRequestedMixin: i.success
              ? i.value
              : null,
            retryOrIndividualRegularOrBotResponseMessageMixinGroup: l.value,
            contentAvailableMixins: s.value,
          })
        : s;
    }
    l.parseAvailableMixin = e;
  },
  98,
);
