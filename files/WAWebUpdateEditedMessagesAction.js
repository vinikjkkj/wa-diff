__d(
  "WAWebUpdateEditedMessagesAction",
  [
    "WATimeUtils",
    "WAWebBotFrontendGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatMessageSearch",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebFrontendMsgGetters",
    "WAWebGroupUnreadMessageType",
    "WAWebHatchAboutManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoCollection",
    "WAWebMsgType",
    "WAWebMuteGetters",
    "WAWebNotificationController",
    "WAWebNotificationsMsgNotification",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      e.unreadEditTimestampMs = n;
      var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
      if (r != null) {
        var a,
          i = (a = e.aiThreads) == null ? void 0 : a.get(r);
        i != null && i.set({ unreadEditTimestampMs: n });
      }
    }
    async function s(t) {
      (await Promise.all(
        t.map(async function (t) {
          var n = t.editedMsgData,
            a = t.mentionOfMe,
            i = t.parentMsg,
            l = t.protocolMsg,
            s = o("WAWebMsgCollection").MsgCollection.get(i.id);
          if (s) {
            var d = n.mediaKey !== s.mediaKey;
            (d && (s.thumbnailHQ = ""),
              (o("WAWebBotGating").shouldAnimateAsBotStream(s) ||
                s.botEditType != null) &&
                (n.lastBotEditBodyLength = o(
                  "WAWebBotFrontendUtils",
                ).getBotMsgBodyLength(s)));
            var m = new (o(
              "WAWebNotificationsMsgNotification",
            ).WAMsgNotification)({ msg: s }).buildKey();
            (i.type === o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
              n.type !== o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
              (await s.registerAndPrepMedia(n)),
              s.set(n));
            var p = n.unifiedResponse;
            if (
              o("WAWebBotFrontendGating").isHatchIntegrationEnabled() &&
              o("WAWebBotUtils").isHatchBot(i.id.remote) &&
              p != null
            ) {
              var _ = i.id.remote.toString();
              n.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
              n.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER
                ? r("WAWebHatchAboutManager").feedUnifiedResponse(_, p)
                : n.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
                  r("WAWebHatchAboutManager").clearAboutText(_);
            }
            (o("WAWebChatMessageSearch").clearFtsCache(
              o("WAWebFrontendMsgGetters").getChat(s),
            ),
              u(s, m, a),
              o("WAWebMsgGetters").getIsSentByMe(l) ||
                e(o("WAWebFrontendMsgGetters").getChat(s), s),
              a && c(s, a),
              s.clearRawLinks(),
              s.clearRawPhoneNumbers());
            var f = o("WAWebMsgCollection").MsgCollection.get(l.id);
            (f &&
              f.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              f.delete(),
              o("WAWebMsgInfoCollection").MsgInfoCollection.remove(s.id));
          }
        }),
      ),
        o("WAWebMsgCollection").MsgCollection.processEditedMessages(
          t.map(function (e) {
            var t = e.parentMsg;
            return o("WAWebMsgCollection").MsgCollection.get(t.id);
          }),
        ));
    }
    function u(e, t, n) {
      var r = o(
          "WAWebNotificationController",
        ).WANotificationController.getNotification(t),
        a = new (o("WAWebNotificationsMsgNotification").WAMsgNotification)({
          msg: e,
        });
      if (r && o("WAWebMsgGetters").getIsMetaBotResponse(e)) {
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
          o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(a);
        return;
      }
      r &&
        o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(a);
      var i = o("WAWebFrontendMsgGetters").getChat(e);
      if (o("WAWebMuteGetters").getIsMuted(i.mute) && n)
        switch (n) {
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
            i.isUnreadMsg(e) &&
              o(
                "WAWebNotificationController",
              ).WANotificationController.triggerNotification(a);
            break;
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
            r == null || r.closeBanner();
            break;
        }
    }
    function c(e, t) {
      var n,
        a = o("WAWebFrontendMsgGetters").getChat(e);
      switch (t) {
        case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
          if (a.isUnreadMsg(e)) {
            var i,
              l = new (r("WAWebUnreadMentionModel"))({
                id: e.id,
                timestamp: e.latestEditSenderTimestampMs,
              });
            (i = a.groupMetadata) == null ||
              i.unreadMentionMetadata.addUnreadMentions(
                [l],
                o("WAWebGroupUnreadMessageType").UnreadMessageType.NEW_MESSAGE,
              );
          }
          break;
        case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
          (n = a.groupMetadata) == null ||
            n.unreadMentionMetadata.removeUnreadMentions(e.id.toString());
          break;
      }
    }
    l.updateEditedMessagesAction = s;
  },
  98,
);
