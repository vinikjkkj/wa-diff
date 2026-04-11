__d(
  "WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessagePublishNewsletterMessageAckMixin",
    "WASmaxInMessagePublishNewsletterQuestionResponseAckMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o(
        "WASmaxInMessagePublishNewsletterQuestionResponseAckMixin",
      ).parseNewsletterQuestionResponseAckMixin(e, t);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionResponseAck",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessagePublishNewsletterMessageAckMixin",
      ).parseNewsletterMessageAckMixin(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterMessageAck",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["QuestionResponseAck", "MessageAck"],
            [n, r],
          );
    }
    l.parseNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup = e;
  },
  98,
);
