__d(
  "WAWebGroupHistoryBridgeApi",
  [
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebUpdateGroupHistoryBundleStateAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      updateGroupHistoryBundleState: function (t) {
        var e = t.messageKey,
          n = t.processState;
        o(
          "WAWebUpdateGroupHistoryBundleStateAction",
        ).updateGroupHistoryBundleState(e, n);
      },
      logGroupHistoryParseHistoryProtoSucceeded: function (t) {
        var e = t.groupId,
          n = t.messagesCount,
          r = t.oowPinsCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoSucceeded(
          e,
          n,
          r,
        );
      },
      logGroupHistoryParseHistoryProtoFailed: function (t) {
        var e = t.groupId,
          n = t.messagesCount,
          r = t.oowPinsCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed(
          e,
          n,
          r,
        );
      },
      logGroupHistoryDbInserted: function (t) {
        var e = t.dbIgnoredOlderMessages,
          n = t.groupId,
          r = t.messagesCount,
          a = t.oowPinsCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.dbInserted(n, r, e, a);
      },
      logGroupHistorySelectableMessagesLoaded: function (t) {
        var e = t.groupHistoryMessagesCount;
        o(
          "WAWebGroupMemberAddingUserJourneyLogger",
        ).GroupMemberAddingUserJourneyLogger.selectableMessagesLoaded({
          groupHistoryMessagesCount: e,
        });
      },
    };
    l.GroupHistoryBridgeApi = e;
  },
  98,
);
