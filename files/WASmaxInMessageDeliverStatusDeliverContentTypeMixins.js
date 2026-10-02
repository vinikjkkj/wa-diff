__d(
  "WASmaxInMessageDeliverStatusDeliverContentTypeMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypePollVoteMixin",
    "WASmaxInMessageDeliverContentTypeReactionMixin",
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
        "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
      ).parseContentTypeMediaSingleMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMediaSingle",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypePollVote",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMediaSingle",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollVote",
            ],
            [t, n, r, a, i],
          );
    }
    l.parseStatusDeliverContentTypeMixins = e;
  },
  98,
);
