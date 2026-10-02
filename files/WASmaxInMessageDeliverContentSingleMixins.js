__d(
  "WASmaxInMessageDeliverContentSingleMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeEventMixin",
    "WASmaxInMessageDeliverContentTypeLiveLocationSingleMixin",
    "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
    "WASmaxInMessageDeliverContentTypePayGroupMixin",
    "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypePollEditMixin",
    "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
    "WASmaxInMessageDeliverContentTypePollVoteMixin",
    "WASmaxInMessageDeliverContentTypeProductListMixin",
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
        "WASmaxInMessageDeliverContentTypeLiveLocationSingleMixin",
      ).parseContentTypeLiveLocationSingleMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeLiveLocationSingle",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
      ).parseContentTypeMediaSingleMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMediaSingle",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypePayGroupMixin",
      ).parseContentTypePayGroupMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayGroup",
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
        "WASmaxInMessageDeliverContentTypeProductListMixin",
      ).parseContentTypeProductListMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeProductList",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollEditMixin",
      ).parseContentTypePollEditMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: c.value,
        });
      var d = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: d.value,
        });
      var m = o(
        "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
      ).parseContentTypePollAddOptionMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: m.value,
        });
      var p = o(
        "WASmaxInMessageDeliverContentTypeEventMixin",
      ).parseContentTypeEventMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: p.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeLiveLocationSingle",
              "ContentTypeMediaSingle",
              "ContentTypePayGroup",
              "ContentTypeReaction",
              "ContentTypeProductList",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p],
          );
    }
    l.parseContentSingleMixins = e;
  },
  98,
);
