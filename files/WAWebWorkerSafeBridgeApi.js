__d(
  "WAWebWorkerSafeBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATaskScheduler",
    "WAWebBackendApi",
    "WAWebCTWASuggestionInitFromStorage",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebEphemeralityResolver",
    "WAWebFetchAdEntryPointsConfiguration",
    "WAWebFetchNativeAdsMvpEligibility",
    "WAWebFetchQuickPromotions",
    "WAWebFtsClient",
    "WAWebGetNewChatMessageCappingInfoJob",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebGroupCreationKeyDistribution",
    "WAWebHandleHistorySyncNotification",
    "WAWebJobLoadQuickPromotions",
    "WAWebKeyManagementHandleKeyRequestApi",
    "WAWebKeyManagementHandleKeyShareApi",
    "WAWebKeyManagementSendKeyShareApi",
    "WAWebMsgCollection",
    "WAWebNonMessageDataRequestHandler",
    "WAWebPaymentNotificationHandler",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebResendGroupMsgMainThreadOnly",
    "WAWebResendUserMsgMainThreadOnly",
    "WAWebRestoreChatsAndMessages",
    "WAWebRestoreGroupsAndContacts",
    "WAWebRestoreProfilePictures",
    "WAWebSyncContactJob",
    "WAWebSyncdOrphan",
    "WAWebTasksTaskType",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUpdateMsgBizPrivacyStatusAction",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var u = r("JSResourceForInteraction")("WAWebOptOutSyncJob").__setRef(
        "WAWebWorkerSafeBridgeApi",
      ),
      c = r("JSResourceForInteraction")("WAWebChannelsForwardCounter").__setRef(
        "WAWebWorkerSafeBridgeApi",
      ),
      d = {
        setProfilePicThumb: async function (t) {
          var e = t.wid;
          return o("WAWebBackendApi").frontendSendAndReceive(
            "setProfilePicThumb",
            { wid: e },
          );
        },
        getPrivacyMode: function (t) {
          var e = t.id;
          return o(
            "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
          ).getPrivacyModeFromModel(e);
        },
        updateBizPrivacyStatus: async function (t) {
          var e = t.msgIds,
            n = t.privacyMode,
            a = r("compactMap")(e, function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e);
            });
          await Promise.all(
            a.map(function (e) {
              return r("WAWebUpdateMsgBizPrivacyStatusAction")(e, n);
            }),
          );
        },
        getChatPrivacyInfoOnNewMsg: function (t) {
          var e = t.chatId,
            n = o("WAWebChatCollection").ChatCollection.get(e);
          return {
            verifiedLevel: n == null ? void 0 : n.contact.verifiedLevel,
            privacyMode: o(
              "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
            ).getPrivacyModeFromModel(e),
          };
        },
        getContactData: function (n) {
          var t = n.ids;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getContactData: for ",
                  " ids",
                ])),
              t.length,
            ),
            new Map(
              t.map(function (e) {
                var t = o("WAWebContactCollection").ContactCollection.get(e),
                  n = o(
                    "WAWebEphemeralityResolver",
                  ).getEphemeralDurationForUser(t);
                return [
                  e.toJid(),
                  {
                    ephemeralDuration: n,
                    shouldBlockByCountry: function () {
                      return t == null
                        ? !1
                        : o("WAWebTosCountryGating").shouldBlockByCountry(t);
                    },
                    shouldBlockByTos: function () {
                      return t == null
                        ? !1
                        : o("WAWebTosGating").shouldBlockByTos(t);
                    },
                  },
                ];
              }),
            )
          );
        },
        getBizBotData: function (t) {
          var e = t.chatIds;
          return new Map(
            e.map(function (e) {
              var t = o("WAWebChatCollection").ChatCollection.get(e);
              return [
                e.toJid(),
                {
                  bizBotSystemMsgType:
                    t == null ? void 0 : t.bizBotSystemMsgType,
                },
              ];
            }),
          );
        },
        handleHistorySyncNotification: function (t) {
          var e = t.externalId,
            n = t.from,
            r = t.historySyncMetaData;
          return o(
            "WAWebHandleHistorySyncNotification",
          ).handleHistorySyncNotification(r, n, e);
        },
        handleAppStateSyncKeyShare: function (t) {
          var e = t.from,
            n = t.keyShare;
          return o(
            "WAWebKeyManagementHandleKeyShareApi",
          ).handleAppStateSyncKeyShare(n, e);
        },
        sendAppStateSyncKeyShare: function (t) {
          var e = t.keyShare;
          return o(
            "WAWebKeyManagementSendKeyShareApi",
          ).sendAppStateSyncKeyShare(e);
        },
        restoreChatsAndMessages: function () {
          return o("WAWebRestoreChatsAndMessages").restoreChatsAndMessages();
        },
        restoreGroupsAndContacts: function () {
          return o("WAWebRestoreGroupsAndContacts").restoreGroupsAndContacts();
        },
        restoreProfilePictures: function () {
          return o("WAWebRestoreProfilePictures").restoreProfilePictures();
        },
        processAllOrphanPaymentNotifications: function () {
          return o(
            "WAWebPaymentNotificationHandler",
          ).processAllOrphanPaymentNotifications();
        },
        handleAppStateSyncKeyRequest: function (t) {
          var e = t.from,
            n = t.keyRequest;
          return o(
            "WAWebKeyManagementHandleKeyRequestApi",
          ).handleAppStateSyncKeyRequest(n, e);
        },
        handlePeerDataOperationRequestResponse: function (t) {
          var e = t.response,
            n = t.stanzaId;
          return o(
            "WAWebNonMessageDataRequestHandler",
          ).handlePeerDataOperationRequestResponse(n, e);
        },
        handlePeerDataOperationRequest: function (t) {
          var e = t.request,
            n = t.stanzaId;
          return o(
            "WAWebNonMessageDataRequestHandler",
          ).handlePeerDataOperationRequest(n, e);
        },
        getFtsClientInstance: function () {
          return o("WAWebFtsClient").ftsClient;
        },
        getOrQueryUsyncInfo: function (t) {
          return o("WAWebGetOrQueryUsyncInfoContactAction").getOrQueryUsyncInfo(
            t,
          );
        },
        maybeSendKeyDistributionMsgToNewGroup: function (t) {
          var e = t.groupId;
          return o(
            "WAWebGroupCreationKeyDistribution",
          ).maybeSendKeyDistributionMsgToNewGroup(e);
        },
        processOrphanPaymentNotifications: function (t) {
          var e = t.msgs;
          return o(
            "WAWebPaymentNotificationHandler",
          ).processOrphanPaymentNotifications(e);
        },
        processLastMsgs: function (t) {
          var e = t.chatId,
            n = t.chatMsgsCollection,
            r = t.meta,
            a = t.msgObjs,
            i = t.preserveOrder,
            l = t.processMessagesOrigin,
            s = o("WAWebChatCollection").ChatCollection.get(e);
          return s && s.msgs.length === 0 && !s.pendingInitialLoading
            ? o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
                e,
                a,
                r,
                l,
                n,
                i,
              )
            : Promise.resolve([]);
        },
        loadQuickPromotions: function (t) {
          var e = t.trigger;
          return o("WAWebJobLoadQuickPromotions").loadQuickPromotions(e);
        },
        prefetchBBEligibilityAndReloadQPs: async function () {
          var e = await r("JSResourceForInteraction")(
              "WAWebBizBroadcastEligibilityPrefetch",
            )
              .__setRef("WAWebWorkerSafeBridgeApi")
              .load(),
            t = e.prefetchEligibilityAndReloadQPs;
          return t();
        },
        fetchQuickPromotionsNow: function () {
          o("WAWebFetchQuickPromotions")
            .fetchQuickPromotions()
            .then(function () {
              o("WATaskScheduler").rescheduleNow(
                o("WAWebTasksTaskType").TaskType.FETCH_QUICK_PROMOTIONS,
              );
            });
        },
        fetchAdEntryPointsConfiguration: function (t) {
          var e = t.trigger;
          return o(
            "WAWebFetchAdEntryPointsConfiguration",
          ).fetchAdEntryPointsConfiguration(e);
        },
        fetchNativeAdsMvpEligibility: function () {
          return o(
            "WAWebFetchNativeAdsMvpEligibility",
          ).fetchNativeAdsMvpEligibility();
        },
        restoreCTWASuggestions: function () {
          return o(
            "WAWebCTWASuggestionInitFromStorage",
          ).restoreCTWASuggestions();
        },
        restoreNewMessageCappingData: function () {
          return o(
            "WAWebGetNewChatMessageCappingInfoJob",
          ).fetchOrUpdateCapStatus();
        },
        resendUserMsg: function (t) {
          var e = t.ackTime,
            n = t.excludeList,
            r = t.msgId,
            a = t.msgRecordType,
            i = t.msgType;
          return o(
            "WAWebResendUserMsgMainThreadOnly",
          ).resendUserMsgMainThreadOnly({
            ackTime: e,
            excludeList: n,
            msgId: r,
            msgRecordType: a,
            msgType: i,
          });
        },
        resendGroupMsg: function (t) {
          var e = t.ackTime,
            n = t.groupId,
            r = t.isDirect,
            a = t.msgId,
            i = t.msgRecordType,
            l = t.msgType,
            s = t.oldList,
            u = t.phash,
            c = t.serverAddressingMode;
          return o(
            "WAWebResendGroupMsgMainThreadOnly",
          ).resendGroupMsgMainThreadOnly(a, l, i, n, r, s, u, e, c);
        },
        updateOptOutList: async function () {
          var e = await u.load(),
            t = e.updateOptOutList;
          return t();
        },
        updateOptOutListCollection: function (t) {
          var e = t.wids;
          o("WAWebBackendApi").frontendFireAndForget(
            "updateOptOutListCollection",
            { wids: e },
          );
        },
        updateOptOutListModelInCollection: function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "updateOptOutListModelInCollection",
            t,
          );
        },
        syncContactListJob: function (t) {
          var e = t.contactIds,
            n = t.mode,
            r = t.shouldSyncDevice;
          return o("WAWebSyncContactJob").syncContactListJob(e, r, n);
        },
        checkOrphanFavoriteStickers: function () {
          return o("WAWebSyncdOrphan").checkOrphanFavoriteStickers();
        },
        incrementForwardCounterAPI: async function (t) {
          var e = t.newsletterId,
            n = t.retriesRemaining,
            r = t.serverId,
            o = await c.load(),
            a = o.incrementForwardCounter;
          return a(e, n, r);
        },
      };
    l.WorkerSafeBridgeApi = d;
  },
  98,
);
