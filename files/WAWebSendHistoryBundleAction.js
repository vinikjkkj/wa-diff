__d(
  "WAWebSendHistoryBundleAction",
  [
    "WALogger",
    "WAWebFindChatAction",
    "WAWebGenerateGroupHistoryBundleMsgData",
    "WAWebGenerateGroupHistoryNoticeMsgData",
    "WAWebGroupHistoryAgentBundleFilter",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryNoticeHandler",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebJidToWid",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, r, a, i, l) {
      var c = await o(
          "WAWebGenerateGroupHistoryBundleMsgData",
        ).generateGroupHistoryBundleMsgData({
          chatId: t,
          historyReceivers: n,
          nonHistoryReceivers: r,
          selectedMessageCount: a,
          targetStartMessageTime: i,
        }),
        d = c.msgData,
        p = c.stats,
        _ = await o("WAWebFindChatAction").findExistingChat(
          o("WAWebJidToWid").groupJidToWid(t),
          "messageHistorySend",
        ),
        f = o("WAWebSendMsgChatAction").addAndSendMsgToChat(_, d),
        g = f[0],
        h = f[1];
      l != null &&
        o(
          "WAWebGroupHistorySenderUserJourneyLogger",
        ).GroupHistorySenderUserJourneyLogger.bundleMessageSent(l, p);
      var y = await h,
        C = y.ackErrorCode,
        b = y.messageSendResult;
      if (b !== o("WAWebSendMsgResultAction").SendMsgResult.OK)
        return o("WAWebGroupHistoryAgentBundleFilter").isAgentHistoryBundle(n)
          ? (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] agent history bundle nacked: ",
                    "",
                  ])),
                String(C),
              )
              .sendLogs("group-history-agent-bundle-send-failed"),
            { bundleAcked: !1, noticeAcked: !1 })
          : (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Failed to send history bundle message",
                  ])),
              )
              .sendLogs("group-history-bundle-send-failed"),
            { bundleAcked: !1, noticeAcked: !1 });
      var v = d.groupHistoryBundleMetadata;
      if (v == null)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] bundleMetadata is null",
              ])),
          ),
          { bundleAcked: !0, noticeAcked: !1 }
        );
      var S = await m(_, v, l);
      return { bundleAcked: !0, noticeAcked: S };
    }
    async function m(e, t, n) {
      var r = await o(
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
      var s = await l,
        u = s.messageSendResult;
      return u !== o("WAWebSendMsgResultAction").SendMsgResult.OK
        ? (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Failed to send history notice message",
                ])),
            )
            .sendLogs("group-history-notice-send-failed"),
          !1)
        : (await o("WAWebGroupHistoryNoticeHandler").markGroupHistoryNoticeSent(
            e.id,
            t.historyReceivers,
          ),
          !0);
    }
    async function p(e) {
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
            !(await o(
              "WAWebGroupHistoryNoticeHandler",
            ).areAllReceiversNoticeSent(e.id.remote, n))
          ) {
            var r = await o("WAWebFindChatAction").findExistingChat(
              e.id.remote,
              "messageHistorySend",
            );
            await m(r, t);
          }
        }
      }
    }
    ((l.sendHistoryBundleAction = d),
      (l.completeGroupHistorySend = m),
      (l.completeGroupHistorySendOnBundleResend = p));
  },
  98,
);
