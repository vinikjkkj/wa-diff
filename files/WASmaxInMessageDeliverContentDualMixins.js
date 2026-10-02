__d(
  "WASmaxInMessageDeliverContentDualMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeEventMixin",
    "WASmaxInMessageDeliverContentTypePayGroupMixin",
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
        "WASmaxInMessageDeliverContentTypePayGroupMixin",
      ).parseContentTypePayGroupMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayGroup",
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
        "WASmaxInMessageDeliverContentTypePollEditMixin",
      ).parseContentTypePollEditMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
      ).parseContentTypePollAddOptionMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypeEventMixin",
      ).parseContentTypeEventMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypePayGroup",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    l.parseContentDualMixins = e;
  },
  98,
);
