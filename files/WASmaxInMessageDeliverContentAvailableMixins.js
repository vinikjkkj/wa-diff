__d(
  "WASmaxInMessageDeliverContentAvailableMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeEventMixin",
    "WASmaxInMessageDeliverContentTypeListDeprecatedMixin",
    "WASmaxInMessageDeliverContentTypeListMixin",
    "WASmaxInMessageDeliverContentTypeLiveLocationSingleMixin",
    "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
    "WASmaxInMessageDeliverContentTypeMedianotifyMixin",
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
        "WASmaxInMessageDeliverContentTypeListDeprecatedMixin",
      ).parseContentTypeListDeprecatedMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeListDeprecated",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeListMixin",
      ).parseContentTypeListMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeList",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypeLiveLocationSingleMixin",
      ).parseContentTypeLiveLocationSingleMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeLiveLocationSingle",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
      ).parseContentTypeMediaSingleMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMediaSingle",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverContentTypePayIndividualMixin",
      ).parseContentTypePayIndividualMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayIndividual",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypePollEditMixin",
      ).parseContentTypePollEditMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: c.value,
        });
      var d = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: d.value,
        });
      var m = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: m.value,
        });
      var p = o(
        "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
      ).parseContentTypePollAddOptionMixin(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: p.value,
        });
      var _ = o(
        "WASmaxInMessageDeliverContentTypeMedianotifyMixin",
      ).parseContentTypeMedianotifyMixin(e);
      if (_.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedianotify",
          value: _.value,
        });
      var f = o(
        "WASmaxInMessageDeliverContentTypeEventMixin",
      ).parseContentTypeEventMixin(e);
      return f.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: f.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeListDeprecated",
              "ContentTypeText",
              "ContentTypeList",
              "ContentTypeLiveLocationSingle",
              "ContentTypeMediaSingle",
              "ContentTypePayIndividual",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeMedianotify",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _, f],
          );
    }
    l.parseContentAvailableMixins = e;
  },
  98,
);
