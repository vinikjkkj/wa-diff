__d(
  "WAWebUpdateEditedMessagesAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiChat",
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
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      e.unreadEditTimestampMs = n;
      var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
      if (r != null) {
        var a,
          i = (a = e.aiThreads) == null ? void 0 : a.get(r);
        i != null && i.set({ unreadEditTimestampMs: n });
      }
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield (d || (d = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      yield f(e);
                    } catch (t) {
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a.type === o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
              t.type !== o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA &&
              (yield l.registerAndPrepMedia(t));
            var c = h(l, t.viewMode);
            (l.set(t), y(c));
            var d = t.unifiedResponse;
            if (
              o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() &&
              o("WAWebBotUtils").isHatchBot(a.id.remote) &&
              d != null
            ) {
              var m = a.id.remote.toString();
              t.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
              t.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER
                ? r("WAWebHatchAboutManager").feedUnifiedResponse(m, d)
                : t.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
                  r("WAWebHatchAboutManager").clearAboutText(m);
            }
            var p = o("WAWebFrontendMsgGetters").getMaybeChat(l);
            (p != null &&
              (o("WAWebChatMessageSearch").clearFtsCache(p),
              C(l, p, u, n),
              b(p, l, i, n)),
              l.clearRawLinks(),
              l.clearRawPhoneNumbers());
            var _ = o("WAWebMsgCollection").MsgCollection.get(i.id);
            (_ &&
              _.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              _.delete(),
              o("WAWebMsgInfoCollection").MsgInfoCollection.remove(l.id));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      return n == null || t !== o("WAWebViewMode.flow").ViewModeType.HIDDEN
        ? null
        : {
            chat: n,
            isActiveUnread: n.isActiveUnreadMsg(e),
            isUnread: n.isUnreadMsg(e),
          };
    }
    function y(t) {
      if (t != null) {
        var n = t.chat,
          a = t.isActiveUnread,
          i = t.isUnread;
        (i &&
          ((n.unreadCount = Math.max(n.unreadCount - 1, 0)),
          o("WAWebApiChat")
            .reduceChatUnreadCount(n.id.toString(), 1, !1)
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-edit] failed to reduce unread count for hidden msg",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("update-edited-message-hidden-unread-failed");
            })),
          a && (n.activeUnreadCount = Math.max(n.activeUnreadCount - 1, 0)));
      }
    }
    function C(e, t, n, a) {
      var i = o(
          "WAWebNotificationController",
        ).WANotificationController.getNotification(n),
        l = new (o("WAWebMsgNotification").WAMsgNotification)({ msg: e });
      if (i && o("WAWebMsgGetters").getIsMetaBotResponse(e)) {
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
          o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(l);
        return;
      }
      if (
        (i &&
          o("WAWebNotificationController")
            .WANotificationController.triggerNotification(l)
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-edit] failed to trigger notification for edited msg",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("update-edited-message-notification-failed");
            }),
        o("WAWebMuteGetters").getIsMuted(t.mute) && a != null)
      )
        switch (a) {
          case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
            t.isUnreadMsg(e) &&
              o("WAWebNotificationController")
                .WANotificationController.triggerNotification(l)
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
            i == null || i.closeBanner();
            break;
        }
    }
    function b(e, t, n, r) {
      (o("WAWebMsgGetters").getIsSentByMe(n) || m(e, t),
        r != null && v(e, t, r));
    }
    function v(e, t, n) {
      switch (n) {
        case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
          if (e.isUnreadMsg(t)) {
            var a = new (r("WAWebUnreadMentionModel"))({
              id: t.id,
              timestamp: t.latestEditSenderTimestampMs,
            });
            e.unreadMentionMetadata.addUnreadMentions(
              [a],
              o("WAWebGroupUnreadMessageType").UnreadMessageType.NEW_MESSAGE,
            );
          }
          break;
        case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
          e.unreadMentionMetadata.removeUnreadMentions(t.id.toString());
          break;
      }
    }
    l.updateEditedMessagesAction = p;
  },
  98,
);
