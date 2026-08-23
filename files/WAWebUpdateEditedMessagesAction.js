__d(
  "WAWebUpdateEditedMessagesAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatMessageSearch",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebFrontendMsgGetters",
    "WAWebGroupUnreadMessageType",
    "WAWebHatchAboutManager",
    "WAWebHatchFrontendGating",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoCollection",
    "WAWebMsgNotification",
    "WAWebMsgType",
    "WAWebMuteGetters",
    "WAWebNotificationController",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      e.unreadEditTimestampMs = n;
      var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
      if (r != null) {
        var a,
          i = (a = e.aiThreads) == null ? void 0 : a.get(r);
        i != null && i.set({ unreadEditTimestampMs: n });
      }
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (yield (s || (s = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    try {
                      yield m(t);
                    } catch (n) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-edit] failed to apply edit for ",
                              "",
                            ])),
                          t.parentMsg.id.toString(),
                        )
                        .catching(r("getErrorSafe")(n))
                        .sendLogs("update-edited-message-failed");
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.editedMsgData,
            n = e.mentionOfMe,
            a = e.parentMsg,
            i = e.protocolMsg,
            l = o("WAWebMsgCollection").MsgCollection.get(a.id);
          if (l) {
            var s = t.mediaKey !== l.mediaKey;
            (s && (l.thumbnailHQ = ""),
              (o("WAWebBotGating").shouldAnimateAsBotStream(l) ||
                l.botEditType != null) &&
                (t.lastBotEditBodyLength = o(
                  "WAWebBotFrontendUtils",
                ).getBotMsgBodyLength(l)));
            var u = new (o("WAWebMsgNotification").WAMsgNotification)({
              msg: l,
            }).buildKey();
            (a.type === o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
              t.type !== o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
              (yield l.registerAndPrepMedia(t)),
              l.set(t));
            var c = t.unifiedResponse;
            if (
              o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() &&
              o("WAWebBotUtils").isHatchBot(a.id.remote) &&
              c != null
            ) {
              var d = a.id.remote.toString();
              t.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
              t.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER
                ? r("WAWebHatchAboutManager").feedUnifiedResponse(d, c)
                : t.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
                  r("WAWebHatchAboutManager").clearAboutText(d);
            }
            var m = o("WAWebFrontendMsgGetters").getMaybeChat(l);
            (m != null &&
              (o("WAWebChatMessageSearch").clearFtsCache(m),
              _(l, m, u, n),
              f(m, l, i, n)),
              l.clearRawLinks(),
              l.clearRawPhoneNumbers());
            var p = o("WAWebMsgCollection").MsgCollection.get(i.id);
            (p &&
              p.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              p.delete(),
              o("WAWebMsgInfoCollection").MsgInfoCollection.remove(l.id));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      var a = o(
          "WAWebNotificationController",
        ).WANotificationController.getNotification(n),
        i = new (o("WAWebMsgNotification").WAMsgNotification)({ msg: e });
      if (a && o("WAWebMsgGetters").getIsMetaBotResponse(e)) {
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
          o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(i);
        return;
      }
      if (
        (a &&
          o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(i),
        o("WAWebMuteGetters").getIsMuted(t.mute) && r != null)
      )
        switch (r) {
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
            t.isUnreadMsg(e) &&
              o(
                "WAWebNotificationController",
              ).WANotificationController.triggerNotification(i);
            break;
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
            a == null || a.closeBanner();
            break;
        }
    }
    function f(e, t, n, r) {
      (o("WAWebMsgGetters").getIsSentByMe(n) || u(e, t),
        r != null && g(e, t, r));
    }
    function g(e, t, n) {
      var a;
      switch (n) {
        case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
          if (e.isUnreadMsg(t)) {
            var i,
              l = new (r("WAWebUnreadMentionModel"))({
                id: t.id,
                timestamp: t.latestEditSenderTimestampMs,
              });
            (i = e.groupMetadata) == null ||
              i.unreadMentionMetadata.addUnreadMentions(
                [l],
                o("WAWebGroupUnreadMessageType").UnreadMessageType.NEW_MESSAGE,
              );
          }
          break;
        case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
          (a = e.groupMetadata) == null ||
            a.unreadMentionMetadata.removeUnreadMentions(t.id.toString());
          break;
      }
    }
    l.updateEditedMessagesAction = c;
  },
  98,
);
