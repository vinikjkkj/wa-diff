__d(
  "WASmaxInMessageDeliverContentUnavailableMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeEventMixin",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypePayIndividualMixin",
    "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypePollEditMixin",
    "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
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
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypePayIndividualMixin",
      ).parseContentTypePayIndividualMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayIndividual",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
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
        "WASmaxInMessageDeliverContentTypePollEditMixin",
      ).parseContentTypePollEditMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
      ).parseContentTypePollAddOptionMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: c.value,
        });
      var d = o(
        "WASmaxInMessageDeliverContentTypeEventMixin",
      ).parseContentTypeEventMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: d.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypePayIndividual",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d],
          );
    }
    l.parseContentUnavailableMixins = e;
  },
  98,
);
