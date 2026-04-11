__d(
  "WAWebReactionsBridgeApi",
  [
    "WAWebReactionsFrontendUtils",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateOrphanReactionsMsgAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      checkUpdateForOrphanReactions: function (t) {
        var e = t.updatedRecords;
        o("WAWebUpdateOrphanReactionsMsgAction").checkUpdateForOrphanReactions(
          e,
        );
      },
      deleteModelsForLastAddOnPreview: function (t) {
        var e = t.messagesIds;
        return o(
          "WAWebUpdateLastAddOnPreviewChatAction",
        ).deleteModelsForLastAddOnPreview(e);
      },
      hasReactionsInCollection: function (t) {
        var e = t.msgKeys;
        return o("WAWebReactionsFrontendUtils").hasReactionsInCollection(e);
      },
    };
    l.ReactionsBridgeApi = e;
  },
  98,
);
