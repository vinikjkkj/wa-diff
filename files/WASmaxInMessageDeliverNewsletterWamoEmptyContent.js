__d(
  "WASmaxInMessageDeliverNewsletterWamoEmptyContent",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypeQuizCreationMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverNewsletterQuestionEmptyMixin",
    "WASmaxInMessageDeliverNewsletterQuestionReplyEmptyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverNewsletterQuestionEmptyMixin",
      ).parseNewsletterQuestionEmptyMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionEmpty",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverNewsletterQuestionReplyEmptyMixin",
      ).parseNewsletterQuestionReplyEmptyMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionReplyEmpty",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverContentTypeQuizCreationMixin",
      ).parseContentTypeQuizCreationMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeQuizCreation",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "NewsletterQuestionEmpty",
              "NewsletterQuestionReplyEmpty",
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypePollCreation",
              "ContentTypeQuizCreation",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseNewsletterWamoEmptyContent = e;
  },
  98,
);
