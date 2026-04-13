__d(
  "WAWebChatBridgeApi",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebCommentAction",
    "WAWebDBUpdateChatTable",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgKey",
    "WAWebMuteCollection",
    "WAWebThreadMetadataUtil",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateOfflinePeerReceipts",
    "WAWebUpdateUnreadChatAction",
    "WAWebWamMemoryStat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["id", "integritySignalsPromise"],
      d,
      m = {
        getChat: function (t) {
          var e = t.chatId;
          return o("WAWebChatCollection").ChatCollection.get(e);
        },
        hasChat: function (t) {
          var e = t.chatId;
          return !!o("WAWebChatCollection").ChatCollection.get(e);
        },
        isMessageSentToBusiness: function (t) {
          var e = t.msgKey,
            n = o("WAWebChatCollection").ChatCollection.get(
              r("WAWebMsgKey").from(e).remote,
            );
          return (n == null ? void 0 : n.contact.isBusiness) === !0;
        },
        chatCollectionAdd: function (t) {
          var e = t.options,
            n = t.things;
          return o("WAWebChatCollection").ChatCollection.add(n, e);
        },
        chatCollectionGadd: function (t) {
          var e = t.chat;
          return o("WAWebChatCollection").ChatCollection.gadd(e);
        },
        chatCollectionTrigger: function (t) {
          var e = t.args,
            n = t.name;
          o("WAWebChatCollection").ChatCollection.trigger(n, e);
        },
        muteCollectionAdd: function (t) {
          var e = t.muteData;
          o("WAWebMuteCollection").MuteCollection.add(
            {
              id: o("WAWebWidFactory").createWid(e.id),
              expiration: e.expiration,
              mentionAllMuteExpiration: e.mentionAllMuteExpiration,
            },
            { merge: !0 },
          );
        },
        updateOfflinePeerReceipt: function (t) {
          var e = t.ackUpdates,
            n = t.chatUpdates;
          o("WAWebUpdateOfflinePeerReceipts").updateOfflinePeerReceipt(n, e);
        },
        chatCollectionUpdate: function (t) {
          var e = t.updates;
          e.forEach(function (e) {
            var t = e.id,
              n = e.integritySignalsPromise,
              r = babelHelpers.objectWithoutPropertiesLoose(e, c),
              a = o("WAWebChatCollection").ChatCollection.get(t);
            a && (a.set(r), n != null && (a.promises.integritySignals = n));
          });
        },
        updateChatReadStatus: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.id,
              n = e.read,
              r = yield o("WAWebChatGetExistingBridge").getExisting(t);
            if (r)
              return n
                ? o("WAWebUpdateUnreadChatAction").markSeen(r)
                : o("WAWebUpdateUnreadChatAction").markUnseen(r);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateChatUnreadMsgCountAndClearMentions: function (t) {
          var e = t.remote,
            n = o("WAWebChatCollection").ChatCollection.get(e);
          n &&
            (o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(n, 0, !1),
            o("WAWebUpdateUnreadChatAction").clearUnreadMentions(n));
        },
        updateChatLastAddOnPreview: function (t) {
          var e = t.chatMap;
          o(
            "WAWebUpdateLastAddOnPreviewChatAction",
          ).updateModelsForLastAddOnPreview(e);
        },
        updateChatToLatest: function (t) {
          var e = t.chatIdToLatestUpdates;
          o("WAWebCommentAction").updateChatToLatest(e);
        },
        updateChatSortListener: function (n) {
          var t = n.enable;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[chat][updateChatSortListener] ",
                " sort listener (",
                "): start",
              ])),
            t ? "enable" : "disable",
            o("WAWebWamMemoryStat").roundIntForMetrics(
              o("WAWebChatCollection").ChatCollection.length,
            ),
          ),
            t
              ? o("WAWebChatCollection").ChatCollection.enableSortListener(!0)
              : o("WAWebChatCollection").ChatCollection.disableSortListener(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat][updateChatSortListener] ",
                  " sort listener (",
                  "): done",
                ])),
              t ? "enable" : "disable",
              o("WAWebWamMemoryStat").roundIntForMetrics(
                o("WAWebChatCollection").ChatCollection.length,
              ),
            ));
        },
        resetChatPreviewT: function (t) {
          var e = t.chatIds;
          e.forEach(function (e) {
            var t = o("WAWebChatCollection").ChatCollection.get(e);
            t && (t.previewT = void 0);
          });
        },
        updateChatPreviewT: function (t) {
          var e = t.threadMeta;
          o("WAWebChatCollection").ChatCollection.forEach(function (t) {
            var n = o("WAWebThreadMetadataUtil").getOfflineMetaPreviewForChat({
              chatTimestamp: e,
              chatId: t.id,
              accountLid: t.accountLid,
            });
            n != null && (t.previewT = n);
          });
        },
        updateBotInvokeSystemMsgCreated: function (t) {
          var e = t.chatId,
            r = o("WAWebChatCollection").ChatCollection.get(e);
          if (r != null)
            return r.hasCreatedBotInvokeSystemMsg === !0
              ? (d || (d = n("Promise"))).resolve()
              : r.updateBotInvokeSystemMsgCreated();
        },
        updateChatLimitSharing: function (t) {
          var e = t.id,
            n = t.limitSharing,
            r = o("WAWebChatCollection").ChatCollection.get(e);
          r && (r.limitSharing = n);
        },
        getChatModelsArray: function () {
          return (d || (d = n("Promise"))).resolve(
            [].concat(o("WAWebChatCollection").ChatCollection.getModelsArray()),
          );
        },
        updateMmSignalSharingExpirationWindow: function (t) {
          var e = t.contextInfo,
            n = t.id,
            r = t.msg;
          if (
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingDisclosureEnabled()
          ) {
            var a = o("WAWebChatCollection").ChatCollection.get(n);
            if (a) {
              var i = o(
                "WAWebMmSignalSharingExpirationWindowUtils",
              ).getMmSignalSharingExpirationWindow(
                a.mmSignalSharingExpirationWindow,
                r.id,
                r.t,
                r.clientReceivedTsMillis != null
                  ? r.clientReceivedTsMillis * 1e3
                  : r.t,
                e,
              );
              ((a.mmSignalSharingExpirationWindow = i),
                o("WAWebDBUpdateChatTable").updateChatTable(n, {
                  mmSignalSharingExpirationWindow: i,
                }));
            }
          }
        },
        updateChatToneId: function (t) {
          var e = t.id,
            n = t.toneId,
            r = o("WAWebChatCollection").ChatCollection.get(e);
          r && (r.toneId = n);
        },
        resetAiThreadUnreadCounts: function (t) {
          var e = t.chatId,
            n = t.threadIds,
            r = o("WAWebChatCollection").ChatCollection.get(e);
          if (!((r == null ? void 0 : r.aiThreads) == null || n.length === 0))
            for (var a of n) {
              var i,
                l = (i = r.aiThreads) == null ? void 0 : i.get(a);
              l != null && l.set({ unreadCount: 0 });
            }
        },
        bulkUpdateChatCapiCallingPermissionType: function (t) {
          var e = t.updates;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[capi] bulkUpdateChatCapiCallingPermissionType ",
                " chats",
              ])),
            e.length,
          );
          for (var n of e) {
            var r = n.capiCallingPermissionType,
              a = n.chatId,
              i = o("WAWebChatCollection").ChatCollection.get(a);
            i != null && (i.capiCallingPermissionType = r);
          }
        },
        chatDeleteMessages: function (t) {
          var e = t.chatId,
            n = t.messageIds,
            r = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(e),
            );
          r && r.deleteMessages(n);
        },
        chatDelete: function (t) {
          var e = t.chatId,
            n = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(e),
            );
          n && n.delete();
        },
      };
    l.ChatBridgeApi = m;
  },
  98,
);
