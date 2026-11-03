__d(
  "WAWebSendHistoryBundleAction",
  [
    "WALogger",
    "WAWebFindChatAction",
    "WAWebGenerateGroupHistoryBundleMsgData",
    "WAWebGenerateGroupHistoryNoticeMsgData",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryNoticeHandler",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebJidToWid",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o, a) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l) {
            var u = yield o(
                "WAWebGenerateGroupHistoryBundleMsgData",
              ).generateGroupHistoryBundleMsgData({
                chatId: t,
                historyReceivers: n,
                nonHistoryReceivers: r,
                selectedMessageCount: a,
                targetStartMessageTime: i,
              }),
              c = u.msgData,
              d = u.stats,
              p = yield o("WAWebFindChatAction").findExistingChat(
                o("WAWebJidToWid").groupJidToWid(t),
                "messageHistorySend",
              ),
              _ = o("WAWebSendMsgChatAction").addAndSendMsgToChat(p, c),
              f = _[0],
              g = _[1];
            l != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.bundleMessageSent(l, d);
            var h = yield g,
              y = h.messageSendResult;
            if (y !== o("WAWebSendMsgResultAction").SendMsgResult.OK)
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
            var C = c.groupHistoryBundleMetadata;
            if (C == null)
              return (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] bundleMetadata is null",
                    ])),
                ),
                { bundleAcked: !0, noticeAcked: !1 }
              );
            var b = yield m(p, C, l);
            return { bundleAcked: !0, noticeAcked: b };
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
              "WAWebGenerateGroupHistoryNoticeMsgData",
            ).generateGroupHistoryNoticeMsgData({
              chat: e,
              groupHistoryBundleMetadata: t,
            }),
            a = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, r),
            i = a[0],
            l = a[1];
          n != null &&
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.noticeMessageSent(n);
          var s = yield l,
            c = s.messageSendResult;
          return c !== o("WAWebSendMsgResultAction").SendMsgResult.OK
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
