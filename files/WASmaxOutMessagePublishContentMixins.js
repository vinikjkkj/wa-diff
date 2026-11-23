__d(
  "WASmaxOutMessagePublishContentMixins",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishContentTypeEventMixin",
    "WASmaxOutMessagePublishContentTypeListMixin",
    "WASmaxOutMessagePublishContentTypeLiveLocationSingleMixin",
    "WASmaxOutMessagePublishContentTypeMediaSingleMixin",
    "WASmaxOutMessagePublishContentTypePollAddOptionMixin",
    "WASmaxOutMessagePublishContentTypePollAddOptionRevokeMixin",
    "WASmaxOutMessagePublishContentTypePollCreationMixin",
    "WASmaxOutMessagePublishContentTypePollEditMixin",
    "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
    "WASmaxOutMessagePublishContentTypePollVoteMixin",
    "WASmaxOutMessagePublishContentTypeReactionMixin",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isContentTypeText)
        return o(
          "WASmaxOutMessagePublishContentTypeTextMixin",
        ).mergeContentTypeTextMixin(e);
      if (t.contentTypeMediaSingle)
        return o(
          "WASmaxOutMessagePublishContentTypeMediaSingleMixin",
        ).mergeContentTypeMediaSingleMixin(e, t.contentTypeMediaSingle);
      if (t.contentTypeLiveLocationSingle)
        return o(
          "WASmaxOutMessagePublishContentTypeLiveLocationSingleMixin",
        ).mergeContentTypeLiveLocationSingleMixin(
          e,
          t.contentTypeLiveLocationSingle,
        );
      if (t.individualContentTypePayIndividual)
        return o(
          "WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin",
        ).mergeIndividualContentTypePayIndividualMixin(
          e,
          t.individualContentTypePayIndividual,
        );
      if (t.contentTypeList)
        return o(
          "WASmaxOutMessagePublishContentTypeListMixin",
        ).mergeContentTypeListMixin(e, t.contentTypeList);
      if (t.isContentTypeReaction)
        return o(
          "WASmaxOutMessagePublishContentTypeReactionMixin",
        ).mergeContentTypeReactionMixin(e);
      if (t.contentTypePollCreation)
        return o(
          "WASmaxOutMessagePublishContentTypePollCreationMixin",
        ).mergeContentTypePollCreationMixin(e, t.contentTypePollCreation);
      if (t.isContentTypePollEdit)
        return o(
          "WASmaxOutMessagePublishContentTypePollEditMixin",
        ).mergeContentTypePollEditMixin(e);
      if (t.contentTypePollVote)
        return o(
          "WASmaxOutMessagePublishContentTypePollVoteMixin",
        ).mergeContentTypePollVoteMixin(e, t.contentTypePollVote);
      if (t.isContentTypePollResultSnapshot)
        return o(
          "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
        ).mergeContentTypePollResultSnapshotMixin(e);
      if (t.isContentTypePollAddOption)
        return o(
          "WASmaxOutMessagePublishContentTypePollAddOptionMixin",
        ).mergeContentTypePollAddOptionMixin(e);
      if (t.isContentTypePollAddOptionRevoke)
        return o(
          "WASmaxOutMessagePublishContentTypePollAddOptionRevokeMixin",
        ).mergeContentTypePollAddOptionRevokeMixin(e);
      if (t.contentTypeEvent)
        return o(
          "WASmaxOutMessagePublishContentTypeEventMixin",
        ).mergeContentTypeEventMixin(e, t.contentTypeEvent);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeContentMixins = e;
  },
  98,
);
