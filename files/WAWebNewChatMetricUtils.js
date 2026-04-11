__d(
  "WAWebNewChatMetricUtils",
  [
    "WATimeUtils",
    "WAWebChatConstants",
    "WAWebChatThreadLogging",
    "WAWebMsgGetters",
    "WAWebWebContactListStartNewChatWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatType,
        n = e.isSearchResult;
      new (o(
        "WAWebWebContactListStartNewChatWamEvent",
      ).WebContactListStartNewChatWamEvent)({
        webContactListStartNewChatSearch: n,
        webContactListStartNewChatType: t,
      }).commit();
    }
    function s(e) {
      var t = !(
        e.msgs.some(function (e) {
          return o("WAWebMsgGetters").isRealMessage(e);
        }) ||
        e.endOfHistoryTransferType ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .INCOMPLETE
      );
      t &&
        o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
          {
            activityType: "viaContactlessChats",
            ts: o("WATimeUtils").unixTime(),
            chatId: e.id,
            boolValue: !0,
          },
        ]);
    }
    ((l.logContactListStartNewChatAction = e),
      (l.logInitiatedContactlessChat = s));
  },
  98,
);
