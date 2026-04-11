__d(
  "WAWebAddOnsBridgeApi",
  [
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebCommentAction",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebPinMessageAction",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsUpsertVotesModelCollectionMsgAction",
    "WAWebReactionsMsgAction",
    "WAWebUpsertEventResponsesModelCollectionAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      updateAddOnCollectionAcks: function (t) {
        var e = t.updatesByType;
        o(
          "WAWebAddOnsUpdateSendStatesAction",
        ).updateAddOnCollectionsSendStatesAction(e);
      },
      upsertVotesModelCollection: function (t) {
        var e = t.restoredFromDb,
          n = t.votes,
          r = t.votesToRemove;
        o(
          "WAWebPollsUpsertVotesModelCollectionMsgAction",
        ).upsertVotesModelCollection(n, r, e);
      },
      markAddOnsAsReadUi: function (t) {
        var e = t.updatedMsgKeys;
        o("WAWebMarkAddOnsAsReadAction").markAddOnsAsReadUiAction(e);
      },
      updatePinCollection: function (t) {
        var e = t.msgs,
          n = t.removeMsgs;
        return o("WAWebPinMessageAction").updatePinCollection(e, n);
      },
      hasPollVotesInCollection: function (t) {
        var e = t.msgKeys;
        return e.map(function (e) {
          return !!o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getByMsgKey(e);
        });
      },
      handleCommentNotification: function (t) {
        var e = t.comments,
          n = t.revokes;
        o("WAWebCommentAction").handleCommentNotification(e, n);
      },
      upsertEventResponsesModelCollection: function (t) {
        var e = t.eventResponses,
          n = t.eventResponsesToRemove;
        return o(
          "WAWebUpsertEventResponsesModelCollectionAction",
        ).upsertEventResponsesModelCollection(e, n);
      },
      upsertCommentModelCollection: function (t) {
        var e = t.comments,
          n = t.commentsToRemove;
        return o("WAWebCommentAction").upsertCommentModelCollection(e, n);
      },
      handleReactionNotification: function (t) {
        var e = t.reactions;
        o("WAWebReactionsMsgAction").handleReactionNotification(e);
      },
    };
    l.AddOnsBridgeApi = e;
  },
  98,
);
