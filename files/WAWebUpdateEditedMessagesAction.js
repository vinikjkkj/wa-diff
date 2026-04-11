__d(
  "WAWebUpdateEditedMessagesAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      e.unreadEditTimestampMs = n;
      var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
      if (r != null) {
        var a,
          i = (a = e.aiThreads) == null ? void 0 : a.get(r);
        i != null && i.set({ unreadEditTimestampMs: n });
      }
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (yield (e || (e = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.editedMsgData,
                      n = e.mentionOfMe,
                      a = e.parentMsg,
                      i = e.protocolMsg,
                      l = o("WAWebMsgCollection").MsgCollection.get(a.id);
                    if (l) {
                      var u = t.mediaKey !== l.mediaKey;
                      (u && (l.thumbnailHQ = ""),
                        (o("WAWebBotGating").shouldAnimateAsBotStream(l) ||
                          l.botEditType != null) &&
                          (t.lastBotEditBodyLength = o(
                            "WAWebBotFrontendUtils",
                          ).getBotMsgBodyLength(l)));
                      var c = new (o(
                        "WAWebNotificationsMsgNotification",
                      ).WAMsgNotification)({ msg: l }).buildKey();
                      (a.type === o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
                        t.type !== o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
                        (yield l.registerAndPrepMedia(t)),
                        l.set(t));
                      var p = t.unifiedResponse;
                      if (
                        o(
                          "WAWebBotFrontendGating",
                        ).isHatchIntegrationEnabled() &&
                        o("WAWebBotUtils").isHatchBot(a.id.remote) &&
                        p != null
                      ) {
                        var _ = a.id.remote.toString();
                        t.botEditType ===
                          o("WAWebBotTypes").BotMsgEditType.FIRST ||
                        t.botEditType ===
                          o("WAWebBotTypes").BotMsgEditType.INNER
                          ? r("WAWebHatchAboutManager").feedUnifiedResponse(
                              _,
                              p,
                            )
                          : t.botEditType ===
                              o("WAWebBotTypes").BotMsgEditType.LAST &&
                            r("WAWebHatchAboutManager").clearAboutText(_);
                      }
                      (o("WAWebChatMessageSearch").clearFtsCache(
                        o("WAWebFrontendMsgGetters").getChat(l),
                      ),
                        d(l, c, n),
                        o("WAWebMsgGetters").getIsSentByMe(i) ||
                          s(o("WAWebFrontendMsgGetters").getChat(l), l),
                        n && m(l, n),
                        l.clearRawLinks(),
                        l.clearRawPhoneNumbers());
                      var f = o("WAWebMsgCollection").MsgCollection.get(i.id);
                      (f &&
                        f.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
                        f.delete(),
                        o("WAWebMsgInfoCollection").MsgInfoCollection.remove(
                          l.id,
                        ));
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            o("WAWebMsgCollection").MsgCollection.processEditedMessages(
              t.map(function (e) {
                var t = e.parentMsg;
                return o("WAWebMsgCollection").MsgCollection.get(t.id);
              }),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
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
    function m(e, t) {
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
    l.updateEditedMessagesAction = u;
  },
  98,
);
