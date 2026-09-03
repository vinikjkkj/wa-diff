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
          r = t.oowPinsCount,
          a = t.pinsCount,
          i = t.uncountedCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoSucceeded(
          e,
          n,
          r,
          a,
          i,
        );
      },
      logGroupHistoryParseHistoryProtoFailed: function (t) {
        var e = t.groupId,
          n = t.messagesCount,
          r = t.oowPinsCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed({
          groupHistoryMessagesCount: n,
          groupHistoryOutWindowPinsCount: r,
          groupHistoryReceiverGroupId: e,
        });
      },
      logGroupHistoryDbInserted: function (t) {
        var e = t.dbIgnoredOlderMessages,
          n = t.groupId,
          r = t.messagesCount,
          a = t.oowPinsCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.dbInserted({
          groupHistoryDbIgnoredOlderMessages: e,
          groupHistoryMessagesCount: r,
          groupHistoryOutWindowPinsCount: a,
          groupHistoryReceiverGroupId: n,
        });
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
