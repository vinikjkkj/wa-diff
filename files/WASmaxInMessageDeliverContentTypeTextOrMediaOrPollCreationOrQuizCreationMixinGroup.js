__d(
  "WASmaxInMessageDeliverContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypeQuizCreationMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypeQuizCreationMixin",
      ).parseContentTypeQuizCreationMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeQuizCreation",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypePollCreation",
              "ContentTypeQuizCreation",
            ],
            [t, n, r, a],
          );
    }
    l.parseContentTypeTextOrMediaOrPollCreationOrQuizCreationMixinGroup = e;
  },
  98,
);
