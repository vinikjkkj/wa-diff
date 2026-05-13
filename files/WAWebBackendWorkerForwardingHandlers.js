__d(
  "WAWebBackendWorkerForwardingHandlers",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebMsgKey",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        return o("WAWebBackendApi").frontendSendAndReceive(e, t);
      };
    }
    function s(e) {
      return function (t) {
        return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(e, t);
      };
    }
    var u = {
        addAbPropsUpdateListener: e("addAbPropsUpdateListener"),
        triggerAbPropsUpdateFromBridge: e("triggerAbPropsUpdateFromBridge"),
        triggerAbPropsLoadedFromBridge: e("triggerAbPropsLoadedFromBridge"),
        updateAddOnCollectionAcks: e("updateAddOnCollectionAcks"),
        upsertVotesModelCollection: e("upsertVotesModelCollection"),
        markAddOnsAsReadUi: e("markAddOnsAsReadUi"),
        updatePinCollection: e("updatePinCollection"),
        hasPollVotesInCollection: e("hasPollVotesInCollection"),
        upsertCommentModelCollection: e("upsertCommentModelCollection"),
        upsertEventResponsesModelCollection: e(
          "upsertEventResponsesModelCollection",
        ),
        handleCommentNotification: e("handleCommentNotification"),
        handleReactionNotification: e("handleReactionNotification"),
        replaceBlocklist: e("replaceBlocklist"),
        restoreBlocklist: e("restoreBlocklist"),
        refreshCatalogProducts: e("refreshCatalogProducts"),
        updateCatalogCollectionReviewStatuses: e(
          "updateCatalogCollectionReviewStatuses",
        ),
        updateBusinessProfile: e("updateBusinessProfile"),
        restoreVerifiedBusinessContacts: e("restoreVerifiedBusinessContacts"),
        restoreBusinessProfiles: e("restoreBusinessProfiles"),
        scheduleCanonicalReload: e("scheduleCanonicalReload"),
        getChat: e("getChat"),
        hasChat: e("hasChat"),
        isMessageSentToBusiness: e("isMessageSentToBusiness"),
        chatCollectionAdd: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", t)
          );
        },
        chatCollectionGadd: e("chatCollectionGadd"),
        chatCollectionTrigger: e("chatCollectionTrigger"),
        muteCollectionAdd: e("muteCollectionAdd"),
        updateOfflinePeerReceipt: e("updateOfflinePeerReceipt"),
        chatCollectionUpdate: e("chatCollectionUpdate"),
        updateChatReadStatus: e("updateChatReadStatus"),
        updateChatUnreadMsgCountAndClearMentions: e(
          "updateChatUnreadMsgCountAndClearMentions",
        ),
        updateChatLastAddOnPreview: e("updateChatLastAddOnPreview"),
        updateChatSortListener: e("updateChatSortListener"),
        updateChatToLatest: e("updateChatToLatest"),
        resetChatPreviewT: e("resetChatPreviewT"),
        updateChatPreviewT: e("updateChatPreviewT"),
        updateBotInvokeSystemMsgCreated: e("updateBotInvokeSystemMsgCreated"),
        updateChatLimitSharing: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebBackendApi").frontendSendAndReceive(
              "updateChatLimitSharing",
              t,
            )
          );
        },
        getChatModelsArray: e("getChatModelsArray"),
        updateMmSignalSharingExpirationWindow: e(
          "updateMmSignalSharingExpirationWindow",
        ),
        updateChatToneId: e("updateChatToneId"),
        resetAiThreadUnreadCounts: e("resetAiThreadUnreadCounts"),
        updateChatUnreadCount: e("updateChatUnreadCount"),
        bulkUpdateChatCapiCallingPermissionType: e(
          "bulkUpdateChatCapiCallingPermissionType",
        ),
        chatDeleteMessages: e("chatDeleteMessages"),
        chatDelete: e("chatDelete"),
        setWebClockSkew: e("setWebClockSkew"),
        setIs24Hour: e("setIs24Hour"),
        updatePushname: e("updatePushname"),
        bulkUpdatePhoneNumberJids: e("bulkUpdatePhoneNumberJids"),
        bulkUpdateLidContactState: e("bulkUpdateLidContactState"),
        updateDisappearingMode: e("updateDisappearingMode"),
        updateTextStatus: e("updateTextStatus"),
        updateBusinessInfo: e("updateBusinessInfo"),
        updateContactWithVerifiedName: e("updateContactWithVerifiedName"),
        bulkUpdateUsernames: e("bulkUpdateUsernames"),
        bulkUpdateContactPushnames: e("bulkUpdateContactPushnames"),
        updateContactAdvAccountType: e("updateContactAdvAccountType"),
        getFilteredContacts: e("getFilteredContacts"),
        bulkAddContactToCollection: e("bulkAddContactToCollection"),
        updateUsernameKey: e("updateUsernameKey"),
        getFrequentContacts: e("getFrequentContacts"),
        updateContactsStatusMute: e("updateContactsStatusMute"),
        setContactsNotMyUsernameContacts: e("setContactsNotMyUsernameContacts"),
        restoreCustomerData: e("restoreCustomerData"),
        syncCustomerData: e("syncCustomerData"),
        removeCustomerDataFromCollection: e("removeCustomerDataFromCollection"),
        createDownloadDataForMdWebLogs: e("createDownloadDataForMdWebLogs"),
        getWebLogs: e("getWebLogs"),
        getDebugInfo: e("getDebugInfo"),
        getDeviceInfo: e("getDeviceInfo"),
        showDeviceSwitchOtp: e("showDeviceSwitchOtp"),
        failGalaxyFlowDownloadRequest: e("failGalaxyFlowDownloadRequest"),
        resolveGalaxyFlowDownloadRequest: e("resolveGalaxyFlowDownloadRequest"),
        updateModelForGroupAction: e("updateModelForGroupAction"),
        restoreGroupParticipantsForChats: e("restoreGroupParticipantsForChats"),
        updateGroupSubject: e("updateGroupSubject"),
        updateGroupAddressingMode: e("updateGroupAddressingMode"),
        notAlreadyInGroup: e("notAlreadyInGroup"),
        createOrUpdateGroupMetadataFromQuery: e(
          "createOrUpdateGroupMetadataFromQuery",
        ),
        createOrUpdateSubgroupSuggestions: e(
          "createOrUpdateSubgroupSuggestions",
        ),
        updateGroupMetadataModelForAiGroupState: e(
          "updateGroupMetadataModelForAiGroupState",
        ),
        expireGroupInviteV4: e("expireGroupInviteV4"),
        getGroupMetadata: e("getGroupMetadata"),
        updateCachedDeviceCount: e("updateCachedDeviceCount"),
        setGroupMetadata: e("setGroupMetadata"),
        removeMembershipApprovalRequests: e("removeMembershipApprovalRequests"),
        addMembershipApprovalRequests: e("addMembershipApprovalRequests"),
        syncEphemeralTriggerCollectionForGroup: e(
          "syncEphemeralTriggerCollectionForGroup",
        ),
        setHistorySyncPaused: e("setHistorySyncPaused"),
        setHistorySyncProgress: e("setHistorySyncProgress"),
        triggerInitialChatHistorySyncedFromBridge: e(
          "triggerInitialChatHistorySyncedFromBridge",
        ),
        triggerCriticalSyncDoneFromBridge: e(
          "triggerCriticalSyncDoneFromBridge",
        ),
        triggerHistorySyncChunkProcessedFromBridge: e(
          "triggerHistorySyncChunkProcessedFromBridge",
        ),
        handleSelfPrimaryIdentityChange: e("handleSelfPrimaryIdentityChange"),
        openIntegrityCheckpoint: e("openIntegrityCheckpoint"),
        extendLocalePrefCookieTtl: e("extendLocalePrefCookieTtl"),
        mungeLocaleOverrideFromUrlIfNecessary: e(
          "mungeLocaleOverrideFromUrlIfNecessary",
        ),
        getUserLocale: e("getUserLocale"),
        getNormalizedLocale: e("getNormalizedLocale"),
        getFullLocale: e("getFullLocale"),
        getLanguage: e("getLanguage"),
        normalizeLocaleToWajsLocale: e("normalizeLocaleToWajsLocale"),
        setLocale: e("setLocale"),
        waitForPasscode: e("waitForPasscode"),
        waitForPasscodeAfterIncorrectAttempt: e(
          "waitForPasscodeAfterIncorrectAttempt",
        ),
        correctPasscodeEntered: e("correctPasscodeEntered"),
        getCollectionSizes: e("getCollectionSizes"),
        processMultipleMessages: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              t,
            )
          );
        },
        addInitialBotTypingIndicatorToChat: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebBackendApi").frontendSendAndReceive(
              "addInitialBotTypingIndicatorToChat",
              t,
            )
          );
        },
        msgCollectionTrigger: e("msgCollectionTrigger"),
        processKeepInChatMessages: e("processKeepInChatMessages"),
        updateUnattributedMessages: e("updateUnattributedMessages"),
        processKeepInChatMessage: e("processKeepInChatMessage"),
        updateEditedMessagesAction: e("updateEditedMessagesAction"),
        updateMsgModelAcks: e("updateMsgModelAcks"),
        updateMsgExpiredTimestamps: e("updateMsgExpiredTimestamps"),
        updateMessageUI: e("updateMessageUI"),
        updateReactionUI: e("updateReactionUI"),
        updateReactionCollection: e("updateReactionCollection"),
        processOrphanReadReceipts: e("processOrphanReadReceipts"),
        updateMsgPeerAcks: e("updateMsgPeerAcks"),
        updateMsgOtherAcks: e("updateMsgOtherAcks"),
        handleDeferredMessages: e("handleDeferredMessages"),
        processEphemeralSyncResponse: e("processEphemeralSyncResponse"),
        refreshAltLinkingCode: e("refreshAltLinkingCode"),
        forceManualRefresh: e("forceManualRefresh"),
        errorAltLinking: e("errorAltLinking"),
        primaryHelloReceivedAltLinking: e("primaryHelloReceivedAltLinking"),
        changeOptInStatusForExternalWebBeta: e(
          "changeOptInStatusForExternalWebBeta",
        ),
        successHistorySyncOd: e("successHistorySyncOd"),
        errorHistorySyncOd: e("errorHistorySyncOd"),
        hasMsgsInCollection: e("hasMsgsInCollection"),
        deleteAssociatedBotCarouselMsgs: e("deleteAssociatedBotCarouselMsgs"),
        removePlaceholder: e("removePlaceholder"),
        updateReplyCount: e("updateReplyCount"),
        updateMsgModelHostedBizEncStateMismatchFlagToTrue: e(
          "updateMsgModelHostedBizEncStateMismatchFlagToTrue",
        ),
        updateViewModeForMsgs: e("updateViewModeForMsgs"),
        detachAssociatedMsgsForever: e("detachAssociatedMsgsForever"),
        addGalaxyDisableCTAMessageId: e("addGalaxyDisableCTAMessageId"),
        addGalaxyDisableCTAByAgmId: e("addGalaxyDisableCTAByAgmId"),
        hydrateReactionsForMessages: e("hydrateReactionsForMessages"),
        updateCrosspostingInfo: e("updateCrosspostingInfo"),
        updateMusicBlocklist: e("updateMusicBlocklist"),
        deleteMessageFromCollectionForSync: e(
          "deleteMessageFromCollectionForSync",
        ),
        updateMsgRcat: e("updateMsgRcat"),
        updateMsgInfo: e("updateMsgInfo"),
        removeNotes: e("removeNotes"),
        updateNoteJidAction: e("updateNoteJidAction"),
        upsertNotesFromSyncd: e("upsertNotesFromSyncd"),
        bulkUpsertOutContacts: e("bulkUpsertOutContacts"),
        bulkRemoveOutContacts: e("bulkRemoveOutContacts"),
        setPrimaryFeatures: e("setPrimaryFeatures"),
        updateUserDisclosures: e("updateUserDisclosures"),
        triggerAccountSyncForPrivacyFromBridge: e(
          "triggerAccountSyncForPrivacyFromBridge",
        ),
        removeProfilePicThumb: e("removeProfilePicThumb"),
        markProfilePicStale: e("markProfilePicStale"),
        setProfilePicThumb: e("setProfilePicThumb"),
        applyAppSetting: e("applyAppSetting"),
        applyPerChatSetting: e("applyPerChatSetting"),
        updateAccountLinkingStatus: e("updateAccountLinkingStatus"),
        updateCrosspostAutoShareSettings: e("updateCrosspostAutoShareSettings"),
        restoreArchiveV2Settings: e("restoreArchiveV2Settings"),
        socketLogout: e("socketLogout"),
        addStartingLogoutListener: e("addStartingLogoutListener"),
        removeStartingLogoutListener: e("removeStartingLogoutListener"),
        triggerSocketStreamDisconnectedFromBridge: e(
          "triggerSocketStreamDisconnectedFromBridge",
        ),
        triggerOpenSocketStreamFromBridge: e(
          "triggerOpenSocketStreamFromBridge",
        ),
        triggerLogoutFromBridge: e("triggerLogoutFromBridge"),
        triggerStartingLogoutFromBridge: e("triggerStartingLogoutFromBridge"),
        triggerTemporaryBanFromBridge: e("triggerTemporaryBanFromBridge"),
        triggerUnexpectedLogoutModalFromBridge: e(
          "triggerUnexpectedLogoutModalFromBridge",
        ),
        triggerInitialLoadReadyFromBridge: e(
          "triggerInitialLoadReadyFromBridge",
        ),
        triggerMainStreamModeReadyFromBridge: e(
          "triggerMainStreamModeReadyFromBridge",
        ),
        triggerServiceUnavailableFromBridge: e(
          "triggerServiceUnavailableFromBridge",
        ),
        triggerBrigadingStateChangeFromBridge: e(
          "triggerBrigadingStateChangeFromBridge",
        ),
        triggerOfflineDeliveryEndFromBridge: e(
          "triggerOfflineDeliveryEndFromBridge",
        ),
        triggerOfflineDeliveryStateResetFromBridge: e(
          "triggerOfflineDeliveryStateResetFromBridge",
        ),
        triggerOfflineProgressUpdateFromBridge: e(
          "triggerOfflineProgressUpdateFromBridge",
        ),
        processAndGetUnreadMentionsInfo: function (t) {
          for (var e of t.filteredMsgs) {
            o("WAWebApiHydrateWidsUtil").hydrateWids(e);
            var n = e;
            n.id = r("WAWebMsgKey").from(e.id);
          }
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processAndGetUnreadMentionsInfo",
            t,
          );
        },
        getPendingUnreadMentionCounts: e("getPendingUnreadMentionCounts"),
        getChatIdsNeedToBeDeletedFromUnreadMentionInfo: e(
          "getChatIdsNeedToBeDeletedFromUnreadMentionInfo",
        ),
        updateUnreadMentionMetadataByAdding: e(
          "updateUnreadMentionMetadataByAdding",
        ),
        setUsernameStateUpdated: e("setUsernameStateUpdated"),
        generateAndUpdatePrivacySystemMessages: e(
          "generateAndUpdatePrivacySystemMessages",
        ),
        applyBusinessRemoval: e("applyBusinessRemoval"),
        logTieBreakIgnoredKicWam: e("logTieBreakIgnoredKicWam"),
        logOTPMessageReceivedActions: e("logOTPMessageReceivedActions"),
        logOTPMessageReadActions: e("logOTPMessageReadActions"),
        applyContactBusinessProps: e("applyContactBusinessProps"),
        initializeAgentLog: e("initializeAgentLog"),
        restoreCarts: e("restoreCarts"),
        checkOrphanAssignments: e("checkOrphanAssignments"),
        restoreChatAssignments: e("restoreChatAssignments"),
        removeChatAssignmentsFromCollection: e(
          "removeChatAssignmentsFromCollection",
        ),
        restoreCommunityActivity: e("restoreCommunityActivity"),
        restoreUnjoinedSubgroups: e("restoreUnjoinedSubgroups"),
        restoreOptOutList: e("restoreOptOutList"),
        updateOptOutListCollection: e("updateOptOutListCollection"),
        updateOptOutListModelInCollection: e(
          "updateOptOutListModelInCollection",
        ),
        resetNux: e("resetNux"),
        updatePeriodicBackgroundSyncRegistration: e(
          "updatePeriodicBackgroundSyncRegistration",
        ),
        updatePushManager: e("updatePushManager"),
        checkOrphanMutations: e("checkOrphanMutations"),
        handleSyncdFatal: e("handleSyncdFatal"),
        getDeviceFingerprint: e("getDeviceFingerprint"),
        triggerAppStateSyncCompletedFromBridge: e(
          "triggerAppStateSyncCompletedFromBridge",
        ),
        updateChatCapiThreadControl: e("updateChatCapiThreadControl"),
        handleBizAiSettingsNudge: e("handleBizAiSettingsNudge"),
        refreshBroadcastCampaignState: e("refreshBroadcastCampaignState"),
        removeBroadcastList: e("removeBroadcastList"),
        triggerBizBroadcastInsightsContactListFromBridge: e(
          "triggerBizBroadcastInsightsContactListFromBridge",
        ),
        updateBroadcastList: e("updateBroadcastList"),
        newCTWASuggestion: e("newCTWASuggestion"),
        revokeCTWASuggestion: e("revokeCTWASuggestion"),
        loadedCTWASuggestions: e("loadedCTWASuggestions"),
        loadedQuickPromotions: e("loadedQuickPromotions"),
        smbDataSharingSettingUpdate: e("smbDataSharingSettingUpdate"),
        loadedAdEntryPointsConfiguration: e("loadedAdEntryPointsConfiguration"),
        loadedNativeAdsMvpEligibility: e("loadedNativeAdsMvpEligibility"),
        ctwaDetectedOutcomeOnboardingStatusUpdate: e(
          "ctwaDetectedOutcomeOnboardingStatusUpdate",
        ),
        maybeGeneratePerCustomerDataSharingSystemMessage: e(
          "maybeGeneratePerCustomerDataSharingSystemMessage",
        ),
        updateDataSharing3pdLidInCollection: e(
          "updateDataSharing3pdLidInCollection",
        ),
        removeDataSharing3pdLidFromCollection: e(
          "removeDataSharing3pdLidFromCollection",
        ),
        restoreDataSharing3pdLid: e("restoreDataSharing3pdLid"),
        setFavoriteCollection: e("setFavoriteCollection"),
        individualNewChatMessageCappingStateChange: e(
          "individualNewChatMessageCappingStateChange",
        ),
        applyLabelAssociationChanges: e("applyLabelAssociationChanges"),
        reorderLabels: e("reorderLabels"),
        restoreLabelAssociations: e("restoreLabelAssociations"),
        restoreLabels: e("restoreLabels"),
        updateMemberLabelCollection: e("updateMemberLabelCollection"),
        updateGroupHistoryBundleState: e("updateGroupHistoryBundleState"),
        logGroupHistoryParseHistoryProtoSucceeded: e(
          "logGroupHistoryParseHistoryProtoSucceeded",
        ),
        logGroupHistoryParseHistoryProtoFailed: e(
          "logGroupHistoryParseHistoryProtoFailed",
        ),
        logGroupHistoryDbInserted: e("logGroupHistoryDbInserted"),
        logGroupHistorySelectableMessagesLoaded: e(
          "logGroupHistorySelectableMessagesLoaded",
        ),
        updateNewsletterMessageUI: e("updateNewsletterMessageUI"),
        deleteNewsletter: e("deleteNewsletter"),
        joinNewsletter: e("joinNewsletter"),
        getActiveNewsletter: e("getActiveNewsletter"),
        getNewsletterMetadata: e("getNewsletterMetadata"),
        findMsgKeyFromServerId: e("findMsgKeyFromServerId"),
        subscribeToNewsletter: e("subscribeToNewsletter"),
        toggleNewsletterAdminActivityMuteState: e(
          "toggleNewsletterAdminActivityMuteState",
        ),
        toggleNewsletterFollowerActivityMuteState: e(
          "toggleNewsletterFollowerActivityMuteState",
        ),
        updateNewsletterMetadata: e("updateNewsletterMetadata"),
        updateNewsletterSubscriberCount: e("updateNewsletterSubscriberCount"),
        loadNewsletterPreviewChat: e("loadNewsletterPreviewChat"),
        terminateNewsletter: e("terminateNewsletter"),
        updateNewsletterUnreadMsgCount: e("updateNewsletterUnreadMsgCount"),
        updateNewsletterPicture: e("updateNewsletterPicture"),
        updateNewsletterMessages: e("updateNewsletterMessages"),
        updateNewsletterMessageDeliveryUpdate: e(
          "updateNewsletterMessageDeliveryUpdate",
        ),
        updateMsgsViewed: e("updateMsgsViewed"),
        updateGeosuspendedCountry: e("updateGeosuspendedCountry"),
        suspendNewsletter: e("suspendNewsletter"),
        updateProfilePictureDeletionAlertState: e(
          "updateProfilePictureDeletionAlertState",
        ),
        geosuspendNewsletter: e("geosuspendNewsletter"),
        handleMyRoleChangeNotification: e("handleMyRoleChangeNotification"),
        displayRoleChangeDesktopNotification: e(
          "displayRoleChangeDesktopNotification",
        ),
        displayNewsletterMilestoneDesktopNotification: e(
          "displayNewsletterMilestoneDesktopNotification",
        ),
        handleOtherUserRoleChangeNotification: e(
          "handleOtherUserRoleChangeNotification",
        ),
        updateChatPreviewFromReaction: e("updateChatPreviewFromReaction"),
        updateChatPreviewFromVote: e("updateChatPreviewFromVote"),
        updateNewsletterReports: e("updateNewsletterReports"),
        updateNewsletterReport: e("updateNewsletterReport"),
        updateNewsletterEnforcementAlerts: e(
          "updateNewsletterEnforcementAlerts",
        ),
        updateNewsletterQuestionResponses: e(
          "updateNewsletterQuestionResponses",
        ),
        hideNewsletterQuestionResponse: e("hideNewsletterQuestionResponse"),
        updateMyNewsletterMembershipRole: e("updateMyNewsletterMembershipRole"),
        updateNewsletterMemberRole: e("updateNewsletterMemberRole"),
        displayNewsletterMetadataUpdateNotification: e(
          "displayNewsletterMetadataUpdateNotification",
        ),
        expireNewsletterAdminInvites: e("expireNewsletterAdminInvites"),
        updateNewsletterInsights: e("updateNewsletterInsights"),
        handleNewsletterWamoSubStatusChangeNotification: e(
          "handleNewsletterWamoSubStatusChangeNotification",
        ),
        updateNewsletterMsgPaidPartnershipLabel: e(
          "updateNewsletterMsgPaidPartnershipLabel",
        ),
        updateNewsletterAdminProfile: e("updateNewsletterAdminProfile"),
        removeQuickReplyFromCollection: e("removeQuickReplyFromCollection"),
        updateQuickReplyCollection: e("updateQuickReplyCollection"),
        restoreQuickReplies: e("restoreQuickReplies"),
        reachoutTimelockEnforcementLifted: e(
          "reachoutTimelockEnforcementLifted",
        ),
        reachoutTimelockEnforcementSet: e("reachoutTimelockEnforcementSet"),
        setCustomPaymentMethods: e("setCustomPaymentMethods"),
        setCPIInfo: e("setCPIInfo"),
        checkUpdateForOrphanReactions: e("checkUpdateForOrphanReactions"),
        deleteModelsForLastAddOnPreview: e("deleteModelsForLastAddOnPreview"),
        hasReactionsInCollection: e("hasReactionsInCollection"),
        clearStatusForRemovedContact: e("clearStatusForRemovedContact"),
        fillGapFromIncomingStanza: e("fillGapFromIncomingStanza"),
        fillSubscribedStatusGaps: e("fillSubscribedStatusGaps"),
        handleStatusUpdate: e("handleStatusUpdate"),
        handleReadStatus: e("handleReadStatus"),
        triggerUpdateCrosspostAutoShareSettingsFromBridge: e(
          "triggerUpdateCrosspostAutoShareSettingsFromBridge",
        ),
        triggerUpdateStatusPrivacySettingsFromBridge: e(
          "triggerUpdateStatusPrivacySettingsFromBridge",
        ),
        restoreFavoriteStickers: e("restoreFavoriteStickers"),
        restoreRecentStickers: e("restoreRecentStickers"),
        restoreStickerDownload: e("restoreStickerDownload"),
        initializePME: e("initializePME"),
        updateFeatureFlags: e("updateFeatureFlags"),
        updateSubscriptions: e("updateSubscriptions"),
        setMyStatus: e("setMyStatus"),
        updateChatAiThreads: e("updateChatAiThreads"),
        updateChatViewRepliesThreads: e("updateChatViewRepliesThreads"),
        deleteChatAiThreads: e("deleteChatAiThreads"),
        deleteAiThreadsForChat: e("deleteAiThreadsForChat"),
        updateAiThreadUnreadCounts: e("updateAiThreadUnreadCounts"),
        initializeMetaAiBotAiThreads: e("initializeMetaAiBotAiThreads"),
        restoreTimeSpentSession: e("restoreTimeSpentSession"),
        handleIncomingOfferNotice: e("handleIncomingOfferNotice"),
        initializeVoipWasm: e("initializeVoipWasm"),
        handleVoipWebIncomingSignalingMessageAction: e(
          "handleVoipWebIncomingSignalingMessageAction",
        ),
        startVoipCallByWid: e("startVoipCallByWid"),
        generateCallLog: e("generateCallLog"),
        generateCallLogOfferNotice: e("generateCallLogOfferNotice"),
        generateCallLogFromNativeCallEndingEvent: e(
          "generateCallLogFromNativeCallEndingEvent",
        ),
        generateCallLogFromEventUpdateJoinable: e(
          "generateCallLogFromEventUpdateJoinable",
        ),
        generateCallLogFromEventCallMissed: e(
          "generateCallLogFromEventCallMissed",
        ),
        generateCallLogFromEventUpdate1to1: e(
          "generateCallLogFromEventUpdate1to1",
        ),
        cancelCallNotification: e("cancelCallNotification"),
        generateCallLogFromEventGroupInfoChanged: e(
          "generateCallLogFromEventGroupInfoChanged",
        ),
        requestOpenChat: e("requestOpenChat"),
        requestJoinCall: e("requestJoinCall"),
        getTcToken: e("getTcToken"),
        setCallState: e("setCallState"),
        handleVideoStateChange: e("handleVideoStateChange"),
        voipAcquireMediaStream: e("voipAcquireMediaStream"),
        getIsValidVideoDevice: e("getIsValidVideoDevice"),
        handleMuteStateChange: e("handleMuteStateChange"),
        handleGroupInfoChangedGroupCall: e("handleGroupInfoChangedGroupCall"),
        handlePeerVideoPermissionChange: e("handlePeerVideoPermissionChange"),
        handleAudioLevelChange: e("handleAudioLevelChange"),
        handleReactionStateChange: e("handleReactionStateChange"),
        handleRaiseHandStateChange: e("handleRaiseHandStateChange"),
        showMicrophoneSilenceToast: e("showMicrophoneSilenceToast"),
        handleRelayBindsFailed: e("handleRelayBindsFailed"),
        handleScreenShareStateChange: e("handleScreenShareStateChange"),
        handleRxTrafficStateForPeerChanged: e(
          "handleRxTrafficStateForPeerChanged",
        ),
        handleNetHealthStatusChanged: e("handleNetHealthStatusChanged"),
        handleCallEndingForSurvey: e("handleCallEndingForSurvey"),
        handleCallLinkStateChanged: e("handleCallLinkStateChanged"),
        handleIsInWaitingRoomChanged: e("handleIsInWaitingRoomChanged"),
        handleWaitingRoomDenied: e("handleWaitingRoomDenied"),
        handleWaitingRoomStateChanged: e("handleWaitingRoomStateChanged"),
        handleCallOfferNacked: e("handleCallOfferNacked"),
        handleCallLinkNacked: e("handleCallLinkNacked"),
        handleLobbyNacked: e("handleLobbyNacked"),
        handleLobbyTimeout: e("handleLobbyTimeout"),
        handleMuteRequestFailed: e("handleMuteRequestFailed"),
        handleMutedByOthers: e("handleMutedByOthers"),
        handleGroupCallReminder: e("handleGroupCallReminder"),
        handleCallGridRankingChanged: e("handleCallGridRankingChanged"),
        cleanupPrewarmedCamera: e("cleanupPrewarmedCamera"),
        disableAVSync: e("disableAVSync"),
        consumeAVSyncMetrics: e("consumeAVSyncMetrics"),
        peekPerParticipantAVSyncMetrics: e("peekPerParticipantAVSyncMetrics"),
        consumeAudioPlaybackMetrics: e("consumeAudioPlaybackMetrics"),
        consumeWebCodecsFatalErrorCount: e("consumeWebCodecsFatalErrorCount"),
        startAnrTracking: e("startAnrTracking"),
        consumeAnrCount: e("consumeAnrCount"),
        startActivityTracking: e("startActivityTracking"),
        trackVoipActivity: e("trackVoipActivity"),
        trackVoipCallStateChange: e("trackVoipCallStateChange"),
        consumeActivityData: e("consumeActivityData"),
        clearActivityTracking: e("clearActivityTracking"),
        startUiActivityTracking: e("startUiActivityTracking"),
        consumeUiActivityData: e("consumeUiActivityData"),
        clearUiActivityTracking: e("clearUiActivityTracking"),
        clearAllActivityTracking: e("clearAllActivityTracking"),
        setRelayAllCallsToUserPrefs: e("setRelayAllCallsToUserPrefs"),
      },
      c = {
        setProfilePicThumb: s("setProfilePicThumb"),
        getPrivacyMode: s("getPrivacyMode"),
        updateBizPrivacyStatus: s("updateBizPrivacyStatus"),
        getChatPrivacyInfoOnNewMsg: s("getChatPrivacyInfoOnNewMsg"),
        getContactData: s("getContactData"),
        getBizBotData: s("getBizBotData"),
        handleHistorySyncNotification: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              t,
            )
          );
        },
        handleAppStateSyncKeyShare: s("handleAppStateSyncKeyShare"),
        sendAppStateSyncKeyShare: s("sendAppStateSyncKeyShare"),
        restoreChatsAndMessages: s("restoreChatsAndMessages"),
        restoreGroupsAndContacts: s("restoreGroupsAndContacts"),
        restoreProfilePictures: s("restoreProfilePictures"),
        processAllOrphanPaymentNotifications: s(
          "processAllOrphanPaymentNotifications",
        ),
        handleAppStateSyncKeyRequest: s("handleAppStateSyncKeyRequest"),
        handlePeerDataOperationRequestResponse: s(
          "handlePeerDataOperationRequestResponse",
        ),
        handlePeerDataOperationRequest: s("handlePeerDataOperationRequest"),
        getFtsClientInstance: s("getFtsClientInstance"),
        getOrQueryUsyncInfo: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "getOrQueryUsyncInfo",
              t,
            )
          );
        },
        maybeSendKeyDistributionMsgToNewGroup: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "maybeSendKeyDistributionMsgToNewGroup",
              t,
            )
          );
        },
        processOrphanPaymentNotifications: s(
          "processOrphanPaymentNotifications",
        ),
        processLastMsgs: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "processLastMsgs",
              t,
            )
          );
        },
        loadQuickPromotions: s("loadQuickPromotions"),
        prefetchBBEligibilityAndReloadQPs: s(
          "prefetchBBEligibilityAndReloadQPs",
        ),
        fetchQuickPromotionsNow: s("fetchQuickPromotionsNow"),
        fetchAdEntryPointsConfiguration: s("fetchAdEntryPointsConfiguration"),
        fetchNativeAdsMvpEligibility: s("fetchNativeAdsMvpEligibility"),
        restoreCTWASuggestions: s("restoreCTWASuggestions"),
        restoreNewMessageCappingData: s("restoreNewMessageCappingData"),
        updateOptOutList: s("updateOptOutList"),
        updateOptOutListCollection: s("updateOptOutListCollection"),
        updateOptOutListModelInCollection: s(
          "updateOptOutListModelInCollection",
        ),
        resendUserMsg: s("resendUserMsg"),
        resendGroupMsg: s("resendGroupMsg"),
        syncContactListJob: function (t) {
          return (
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "syncContactListJob",
              t,
            )
          );
        },
        checkOrphanFavoriteStickers: s("checkOrphanFavoriteStickers"),
        incrementForwardCounterAPI: s("incrementForwardCounterAPI"),
      };
    ((l.EventForwardingHandlers = u),
      (l.WorkerSafeEventForwardingHandlers = c));
  },
  98,
);
