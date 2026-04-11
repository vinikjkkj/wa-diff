__d(
  "WAWebMsgBridgeApi",
  [
    "Promise",
    "WALogger",
    "WAWebAckMsgAction",
    "WAWebBizAgentAction",
    "WAWebChatLoadMessages",
    "WAWebEphemeralSyncResponse",
    "WAWebExternalBetaEvents",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyDisableCTACollection",
    "WAWebHandleDeferredMessages",
    "WAWebHistorySyncOnDemandAction",
    "WAWebKeepInChatMsgAction",
    "WAWebLinkDeviceAction",
    "WAWebMsgCollection",
    "WAWebReactionsCollection",
    "WAWebUpdateEditedMessagesAction",
    "WAWebUpdateMessageUIAction",
    "WAWebUpdateMsgAcksAction",
    "WAWebUpdateMusicBlocklistAction",
    "WAWebUpdateReactionMessageUIAction",
    "WAWebUpdateReplyApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        processMultipleMessages: function (t) {
          var e = t.chatId,
            n = t.chatMsgsCollection,
            r = t.meta,
            a = t.msgObjs,
            i = t.preserveOrder,
            l = t.processMessagesOrigin;
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            e,
            a,
            r,
            l,
            n,
            i,
          );
        },
        addInitialBotTypingIndicatorToChat: function (t) {
          var e = t.chatId,
            n = t.msgKey;
          return o(
            "WAWebMsgCollection",
          ).MsgCollection.addInitialBotTypingIndicatorToChat(e, n);
        },
        msgCollectionTrigger: function (t) {
          var e = t.name;
          o("WAWebMsgCollection").MsgCollection.trigger(e);
        },
        processKeepInChatMessages: function (t) {
          var e = t.allowNotification,
            n = t.keepInChatMessages;
          return o("WAWebKeepInChatMsgAction").processKeepInChatMessages(n, e);
        },
        updateUnattributedMessages: function (t) {
          var e = t.messageInfo,
            n = t.messages;
          return o("WAWebBizAgentAction").updateUnattributedMessages(e, n);
        },
        processKeepInChatMessage: function (t) {
          var e = t.allowNotification,
            n = t.keepInChatMessage;
          return o("WAWebKeepInChatMsgAction").processKeepInChatMessage(n, {
            allowNotification: e,
          });
        },
        updateEditedMessagesAction: function (t) {
          var e = t.messageEdits;
          return o(
            "WAWebUpdateEditedMessagesAction",
          ).updateEditedMessagesAction(e);
        },
        updateMessageUI: function (t) {
          var e = t.chatId,
            n = t.isOffline,
            r = t.messageOverwriteOption,
            a = t.msg,
            i = t.preserveOrder;
          return o("WAWebUpdateMessageUIAction").updateUI(e, a, r, i, n);
        },
        updateMsgModelAcks: function (t) {
          var e = t.updates;
          e.forEach(function (e) {
            var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
            t != null && (t.ack = e.ack);
          });
        },
        updateMsgExpiredTimestamps: function (t) {
          var e = t.updates;
          e.forEach(function (e) {
            var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
            t != null && (t.expiredTimestamp = e.expiredTimestamp);
          });
        },
        updateReactionUI: function (t) {
          var e = t.msg,
            n = t.reparsing;
          return o("WAWebUpdateReactionMessageUIAction").updateReactionUI(e, n);
        },
        updateReactionCollection: function (t) {
          var e = t.allowNotifications,
            n = t.msgs,
            r = t.removeReactions;
          return o(
            "WAWebUpdateReactionMessageUIAction",
          ).updateReactionCollection(n, r, { allowNotify: e });
        },
        processOrphanReadReceipts: function (t) {
          var e = t.msgIds;
          return o("WAWebAckMsgAction").processOrphanReadReceipts(e);
        },
        updateMsgPeerAcks: function (t) {
          var e = t.ack,
            n = t.msgKeys,
            r = t.t;
          return o("WAWebUpdateMsgAcksAction").updateMsgPeerAcks(n, e, r);
        },
        updateMsgOtherAcks: function (t) {
          var e = t.ack,
            n = t.msgKeys,
            r = t.t;
          return o("WAWebUpdateMsgAcksAction").updateMsgOtherAcks(n, e, r);
        },
        handleDeferredMessages: function () {
          return r("WAWebHandleDeferredMessages")();
        },
        processEphemeralSyncResponse: function (t) {
          var e = t.msg;
          return o("WAWebEphemeralSyncResponse").processEphemeralSyncResponse(
            e,
          );
        },
        refreshAltLinkingCode: function (t) {
          var e = t.ref;
          return o("WAWebLinkDeviceAction").refreshAltLinkingCode(e);
        },
        forceManualRefresh: function (t) {
          var e = t.ref;
          return o("WAWebLinkDeviceAction").forceManualRefresh(e);
        },
        errorAltLinking: function () {
          return o("WAWebLinkDeviceAction").errorAltLinking();
        },
        primaryHelloReceivedAltLinking: function () {
          return o("WAWebLinkDeviceAction").primaryHelloReceivedAltLinking();
        },
        changeOptInStatusForExternalWebBeta: function () {
          o(
            "WAWebExternalBetaEvents",
          ).WAWebExternalBetaEvents.triggerBetaOptInStatusChanges();
        },
        successHistorySyncOd: function (t) {
          var e = t.chatId;
          return o("WAWebHistorySyncOnDemandAction").successHistorySyncOd(e);
        },
        errorHistorySyncOd: function (t) {
          var e = t.chatId;
          return o("WAWebHistorySyncOnDemandAction").errorHistorySyncOd(e);
        },
        hasMsgsInCollection: function (t) {
          var e = t.msgKeys;
          return e.map(function (e) {
            return !!o("WAWebMsgCollection").MsgCollection.get(e);
          });
        },
        deleteAssociatedBotCarouselMsgs: function (t) {
          var e = t.msgKeys;
          e.forEach(function (e) {
            var t = o("WAWebMsgCollection").MsgCollection.get(e);
            t && (t.delete(), o("WAWebMsgCollection").MsgCollection.remove(t));
          });
        },
        removePlaceholder: function (t) {
          var e = t.msg;
          return o("WAWebUpdateMessageUIAction").removePlaceholder(e);
        },
        updateReplyCount: function (t) {
          var e = t.replyCountMap;
          return o("WAWebUpdateReplyApi").updateReplyCount(e);
        },
        updateMsgModelHostedBizEncStateMismatchFlagToTrue: function (t) {
          var e = t.msgId,
            n = o("WAWebMsgCollection").MsgCollection.get(e);
          n != null && (n.hostedBizEncStateMismatch = !0);
        },
        updateViewModeForMsgs: function (t) {
          var e = t.msgIdsViewModeMap;
          e.forEach(function (e, t) {
            var n = o("WAWebMsgCollection").MsgCollection.get(t);
            n != null && n.set({ viewMode: e });
          });
        },
        detachAssociatedMsgsForever: function (t) {
          var e = t.msgIds;
          e.forEach(function (e) {
            var t = o("WAWebMsgCollection").MsgCollection.get(e);
            t != null && t.detachAssociatedMsg();
          });
        },
        addGalaxyDisableCTAMessageId: function (t) {
          var e = t.messageId;
          o(
            "WAWebGalaxyDisableCTACollection",
          ).GalaxyDisableCTACollection.addMessageId(e);
        },
        addGalaxyDisableCTAByAgmId: function (t) {
          var e = t.agmId,
            n = t.chatId;
          o(
            "WAWebGalaxyDisableCTACollection",
          ).GalaxyDisableCTACollection.addByAgmId(e, n);
        },
        hydrateReactionsForMessages: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.messageIds;
            yield (s || (s = n("Promise"))).all(
              t.map(function (e) {
                return o("WAWebReactionsCollection").ReactionsCollection.find(
                  e,
                );
              }),
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateCrosspostingInfo: function (t) {
          var e,
            n = t.crosspostingInfo,
            r = t.statusMessageId,
            a = o("WAWebMsgCollection").MsgCollection.get(r);
          if (a != null) {
            var i = new Map((e = a.crosspostingInfo) != null ? e : []);
            for (var l of n) {
              var s = l[0],
                u = l[1];
              i.set(s, u);
            }
            a.crosspostingInfo = i;
          }
        },
        updateMusicBlocklist: function (t) {
          var e = t.countryBlocklist,
            n = t.msgKey;
          return o("WAWebUpdateMusicBlocklistAction").updateMusicBlocklist(
            e,
            n,
          );
        },
        deleteMessageFromCollectionForSync: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.msgKey,
              r = o("WAWebMsgCollection").MsgCollection.get(n);
            if (r) {
              var a = o("WAWebFrontendMsgGetters").getChat(r);
              (a.msgs.length === 1 &&
                (yield o("WAWebChatLoadMessages").loadEarlierMsgs({ chat: a })),
                r.delete());
            } else
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "delete_message_for_me_sync: ",
                    " storage+ collection-",
                  ])),
                n,
              );
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        updateMsgRcat: function (t) {
          var e = t.msgKey,
            n = t.rcat,
            r = o("WAWebMsgCollection").MsgCollection.get(e);
          r != null && (r.rcat = n);
        },
      };
    l.MsgBridgeApi = u;
  },
  98,
);
