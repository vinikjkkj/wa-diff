__d(
  "WAWebSendHistoryBundleAction",
  [
    "WALogger",
    "WAWebFindChatAction",
    "WAWebGenerateGroupHistoryBundleMsgData",
    "WAWebGenerateGroupHistoryNoticeMsgData",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryNoticeHandler",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebJidToWid",
    "WAWebMsgGetters",
    "WAWebMsgType",
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
              u = yield o("WAWebFindChatAction").findExistingChat(
                o("WAWebJidToWid").groupJidToWid(t),
                "messageHistorySend",
              ),
              c = o("WAWebSendMsgChatAction").addAndSendMsgToChat(u, l),
              d = c[0],
              p = c[1],
              _ = yield p,
              f = _.messageSendResult;
            if (f !== o("WAWebSendMsgResultAction").SendMsgResult.OK)
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] Failed to send history bundle message",
                      ])),
                  )
                  .sendLogs("group-history-bundle-send-failed"),
                { bundleAcked: !1, noticeAcked: !1 }
              );
            var g = l.groupHistoryBundleMetadata;
            if (g == null)
              return (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] bundleMetadata is null",
                    ])),
                ),
                { bundleAcked: !0, noticeAcked: !1 }
              );
            var h = yield m(u, g);
            return { bundleAcked: !0, noticeAcked: h };
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebGenerateGroupHistoryNoticeMsgData",
          ).generateGroupHistoryNoticeMsgData({
            chat: e,
            groupHistoryBundleMetadata: t,
          });
          o(
            "WAWebGroupMemberAddingUserJourneyLogger",
          ).GroupMemberAddingUserJourneyLogger.noticeMessageSent();
          var r = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, n),
            a = r[0],
            i = r[1],
            l = yield i,
            s = l.messageSendResult;
          return s !== o("WAWebSendMsgResultAction").SendMsgResult.OK
            ? (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Failed to send history notice message",
                    ])),
                )
                .sendLogs("group-history-notice-send-failed"),
              !1)
            : (yield o(
                "WAWebGroupHistoryNoticeHandler",
              ).markGroupHistoryNoticeSent(e.id, t.historyReceivers),
              !0);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebMsgGetters").getType(e) ===
              o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE &&
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e.id.remote)
          ) {
            var t = o("WAWebMsgGetters").getGroupHistoryBundleMetadata(e);
            if (t != null) {
              var n = t.historyReceivers;
              if (
                n.length !== 0 &&
                !(yield o(
                  "WAWebGroupHistoryNoticeHandler",
                ).areAllReceiversNoticeSent(e.id.remote, n))
              ) {
                var r = yield o("WAWebFindChatAction").findExistingChat(
                  e.id.remote,
                  "messageHistorySend",
                );
                yield m(r, t);
              }
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.sendHistoryBundleAction = c),
      (l.completeGroupHistorySend = m),
      (l.completeGroupHistorySendOnBundleResend = _));
  },
  98,
);
