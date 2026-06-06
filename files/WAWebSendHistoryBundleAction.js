__d(
  "WAWebSendHistoryBundleAction",
  [
    "WALogger",
    "WAWebFindChatAction",
    "WAWebGenerateGroupHistoryBundleMsgData",
    "WAWebGenerateGroupHistoryNoticeMsgData",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebJidToWid",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = yield o(
                "WAWebGenerateGroupHistoryBundleMsgData",
              ).generateGroupHistoryBundleMsgData({
                chatId: t,
                historyReceivers: n,
                nonHistoryReceivers: r,
                selectedMessageCount: a,
                targetStartMessageTime: i,
              }),
              c = yield o("WAWebFindChatAction").findExistingChat(
                o("WAWebJidToWid").groupJidToWid(t),
                "messageHistorySend",
              ),
              d = o("WAWebSendMsgChatAction").addAndSendMsgToChat(c, l),
              m = d[0],
              p = d[1],
              _ = yield p,
              f = _.messageSendResult;
            if (f !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Failed to send history bundle message",
                    ])),
                )
                .sendLogs("group-history-bundle-send-failed");
              return;
            }
            var g = l.groupHistoryBundleMetadata;
            if (g == null) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] bundleMetadata is null",
                  ])),
              );
              return;
            }
            var h = yield o(
              "WAWebGenerateGroupHistoryNoticeMsgData",
            ).generateGroupHistoryNoticeMsgData({
              chat: c,
              groupHistoryBundleMetadata: g,
            });
            o(
              "WAWebGroupMemberAddingUserJourneyLogger",
            ).GroupMemberAddingUserJourneyLogger.noticeMessageSent();
            var y = o("WAWebSendMsgChatAction").addAndSendMsgToChat(c, h),
              C = y[0],
              b = y[1],
              v = yield b,
              S = v.messageSendResult;
            if (S !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Failed to send history notice message",
                    ])),
                )
                .sendLogs("group-history-notice-send-failed");
              return;
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.sendHistoryBundleAction = c;
  },
  98,
);
