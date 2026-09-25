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
    var e, s, u, c;
    function d(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      e.unreadEditTimestampMs = n;
      var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
      if (r != null) {
        var a,
          i = (a = e.aiThreads) == null ? void 0 : a.get(r);
        i != null && i.set({ unreadEditTimestampMs: n });
      }
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield (c || (c = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      yield _(e);
                    } catch (t) {
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-edit] failed to apply edit for ",
                              "",
                            ])),
                          e.parentMsg.id.toString(),
                        )
                        .catching(r("getErrorSafe")(t))
                        .sendLogs("update-edited-message-failed");
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
              e.map(function (e) {
                var t = e.parentMsg;
                return o("WAWebMsgCollection").MsgCollection.get(t.id);
              }),
            ));
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
              g(l, m, u, n),
              h(m, l, i, n)),
              l.clearRawLinks(),
              l.clearRawPhoneNumbers());
            var p = o("WAWebMsgCollection").MsgCollection.get(i.id);
            (p &&
              p.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              p.delete(),
              o("WAWebMsgInfoCollection").MsgInfoCollection.remove(l.id));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, n, a, i) {
      var l = o(
          "WAWebNotificationController",
        ).WANotificationController.getNotification(a),
        u = new (o("WAWebMsgNotification").WAMsgNotification)({ msg: t });
      if (l && o("WAWebMsgGetters").getIsMetaBotResponse(t)) {
        t.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
          o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(u);
        return;
      }
      if (
        (l &&
          o("WAWebNotificationController")
            .WANotificationController.triggerNotification(u)
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-edit] failed to trigger notification for edited msg",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("update-edited-message-notification-failed");
            }),
        o("WAWebMuteGetters").getIsMuted(n.mute) && i != null)
      )
        switch (i) {
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
            n.isUnreadMsg(t) &&
              o("WAWebNotificationController")
                .WANotificationController.triggerNotification(u)
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-edit] failed to trigger notification for added mention of me",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs(
                      "update-edited-message-mention-notification-failed",
                    );
                });
            break;
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
            l == null || l.closeBanner();
            break;
        }
    }
    function h(e, t, n, r) {
      (o("WAWebMsgGetters").getIsSentByMe(n) || d(e, t),
        r != null && y(e, t, r));
    }
    function y(e, t, n) {
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
    l.updateEditedMessagesAction = m;
  },
  98,
);
