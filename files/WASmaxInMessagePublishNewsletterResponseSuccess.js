__d(
  "WASmaxInMessagePublishNewsletterResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup",
      ).parseNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            newsletterQuestionResponseOrNewsletterMessageAckMixinGroup: r.value,
          })
        : r;
    }
    l.parseNewsletterResponseSuccess = e;
  },
  98,
);
