__d(
  "WAWebPollsSendPollResultSnapshotMsgAction",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "WAXplatTrim",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.chat,
        n = e.pollResultSnapshot,
        a = e.pollType,
        i = e.quotedMsg,
        l = await s({
          pollResultSnapshot: n,
          chat: t,
          quotedMsg: i,
          pollType: a,
        }),
        u = r("WAWebWid").isNewsletter(t.id);
      u
        ? await o(
            "WAWebNewsletterSendMsgAction",
          ).sendNewsletterPollResultSnapshotMsg({ msgData: l, chat: t })
        : await Promise.all(
            o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, l),
          );
    }
    async function s(e) {
      var t,
        n = e.chat,
        a = e.pollResultSnapshot,
        i = e.pollType,
        l = e.quotedMsg,
        s = n.id,
        u = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        c = (t = l == null ? void 0 : l.msgContextInfo(n.id)) != null ? t : {};
      return babelHelpers.extends(
        {
          id: new (r("WAWebMsgKey"))({
            from: u,
            to: s,
            id: await r("WAWebMsgKey").newId(),
            participant: o("WAWebChatGetters").getIsGroup(n)
              ? o("WAWebWidFactory").asUserWidOrThrow(u)
              : void 0,
            selfDir: "out",
          }),
          type: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
          kind: o("WAWebMsgType").MsgKind.PollResultSnapshot,
          t: o("WATimeUtils").unixTime(),
          from: u,
          to: s,
          pollType: i,
          isNewMsg: !0,
          local: !0,
          ack: o("WAWebAck").ACK.CLOCK,
          pollName: o("WAXplatTrim").trim(a.name),
          pollVotesSnapshot: a.pollVotesSnapshot,
        },
        c,
        o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
        { viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE },
      );
    }
    l.sendPollResultSnapshotMsg = e;
  },
  98,
);
