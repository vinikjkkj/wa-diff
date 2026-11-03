__d(
  "WAWebGroupHistoryBridgeApi",
  [
    "WAWebGroupHistoryReceiverUserJourneyLogger",
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
        ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoSucceeded({
          groupHistoryMessagesCount: n,
          groupHistoryOutWindowPinsCount: r,
          groupHistoryPinsCount: a,
          groupHistoryReceiverGroupId: e,
          groupHistoryUncountedMessagesCount: i,
        });
      },
      logGroupHistoryParseHistoryProtoFailed: function (t) {
        var e = t.groupId,
          n = t.messagesCount,
          r = t.oowPinsCount,
          a = t.receiverFailureReason;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed({
          groupHistoryMessagesCount: n,
          groupHistoryOutWindowPinsCount: r,
          groupHistoryReceiverGroupId: e,
          receiverFailureReason: a,
        });
      },
      logGroupHistoryDbInserted: function (t) {
        var e = t.applyDurationMs,
          n = t.dbIgnoredOlderMessages,
          r = t.groupId,
          a = t.messagesCount,
          i = t.oowPinsCount,
          l = t.pinsCount,
          s = t.receiverFailureReason,
          u = t.uncountedCount;
        o(
          "WAWebGroupHistoryReceiverUserJourneyLogger",
        ).GroupHistoryReceiverUserJourneyLogger.dbInserted({
          groupHistoryBundleApplyDurationMs: e,
          groupHistoryDbIgnoredOlderMessages: n,
          groupHistoryMessagesCount: a,
          groupHistoryOutWindowPinsCount: i,
          groupHistoryPinsCount: l,
          groupHistoryReceiverGroupId: r,
          groupHistoryUncountedMessagesCount: u,
          receiverFailureReason: s,
        });
      },
    };
    l.GroupHistoryBridgeApi = e;
  },
  98,
);
