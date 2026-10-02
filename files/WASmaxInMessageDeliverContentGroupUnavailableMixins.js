__d(
  "WASmaxInMessageDeliverContentGroupUnavailableMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeEventMixin",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypeMedianotifyMixin",
    "WASmaxInMessageDeliverContentTypePayMixin",
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
        "WASmaxInMessageDeliverContentTypeMedianotifyMixin",
      ).parseContentTypeMedianotifyMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedianotify",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypePayMixin",
      ).parseContentTypePayMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePay",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollEditMixin",
      ).parseContentTypePollEditMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: c.value,
        });
      var d = o(
        "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
      ).parseContentTypePollAddOptionMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: d.value,
        });
      var m = o(
        "WASmaxInMessageDeliverContentTypeEventMixin",
      ).parseContentTypeEventMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypeMedianotify",
              "ContentTypePay",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    l.parseContentGroupUnavailableMixins = e;
  },
  98,
);
