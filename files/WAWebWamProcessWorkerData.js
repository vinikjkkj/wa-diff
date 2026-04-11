__d(
  "WAWebWamProcessWorkerData",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebAdvStoredTimestampExpiredWamEvent",
    "WAWebChatMessageCountsWamEvent",
    "WAWebClockSkewDifferenceTWamEvent",
    "WAWebCommunityHomeActionWamEvent",
    "WAWebCommunityTabActionWamEvent",
    "WAWebDailyWamEvent",
    "WAWebE2eMessageRecvWamEvent",
    "WAWebE2eMessageSendWamEvent",
    "WAWebE2eRetryRejectWamEvent",
    "WAWebForwardSendWamEvent",
    "WAWebGatedMessageReceivedWamEvent",
    "WAWebGraphqlCatalogRequestWamEvent",
    "WAWebGroupJoinCWamEvent",
    "WAWebIncomingMessageDropWamEvent",
    "WAWebKeepInChatNotifWamEvent",
    "WAWebMdAppStateDirtyBitsWamEvent",
    "WAWebMdAppStateKeyRotationWamEvent",
    "WAWebMdAppStateMessageRangeWamEvent",
    "WAWebMdAppStateSyncDailyWamEvent",
    "WAWebMdAppStateSyncMutationStatsWamEvent",
    "WAWebMdBadDeviceSentMessageWamEvent",
    "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
    "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
    "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
    "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
    "WAWebMdCriticalEventWamEvent",
    "WAWebMdDeviceSyncAckWamEvent",
    "WAWebMdFatalErrorWamEvent",
    "WAWebMdGroupParticipantMissAckWamEvent",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageReceiveWamEvent",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMessageSendWamEvent",
    "WAWebMexEventV2WamEvent",
    "WAWebMexEventWamEvent",
    "WAWebNonMessagePeerDataMediaUploadWamEvent",
    "WAWebNonMessagePeerDataOperationResponseWamEvent",
    "WAWebNonMessagePeerDataRequestWamEvent",
    "WAWebNotificationDeliveryWamEvent",
    "WAWebNotificationEngagementWamEvent",
    "WAWebOfflineCountTooHighWamEvent",
    "WAWebOfflineResumeWamEvent",
    "WAWebPlaceholderActivityWamEvent",
    "WAWebPsBufferUploadWamEvent",
    "WAWebPsFmxActionWamEvent",
    "WAWebReceiptStanzaReceiveWamEvent",
    "WAWebSignCredentialWamEvent",
    "WAWebSyncdKeyCountWamEvent",
    "WAWebWaOldCodeWamEvent",
    "WAWebWamStorage",
    "WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent",
    "WAWebWebDbTableUsageWamEvent",
    "WAWebWebDbVersionNonAnonymousWamEvent",
    "WAWebWebcDbOpenWamEvent",
    "WAWebWebcJobInfoWamEvent",
    "WAWebWebcLinkPreviewResponseHandleWamEvent",
    "WAWebWebcOfflineNotificationProcessWamEvent",
    "WAWebWebcPageResumeWamEvent",
    "WAWebWebcRawPlatformsWamEvent",
    "WAWebWebcStreamModeChangeWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 2e4,
      c = 1e4;
    function d(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "processWorkerWamData ",
            "",
          ])),
        t ? "start" : "run",
      ),
        m());
      var n = new (o("WAShiftTimer").ShiftTimer)(function () {
        r("WAWebWamStorage")
          .processWorkerWamData()
          .then(function (e) {
            e && d(!1);
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to process worker wam data: ",
                    "",
                  ])),
                e,
              )
              .verbose();
          });
      });
      n.onOrAfter(t ? u : c);
    }
    function m() {
      (n("WAWebOfflineResumeWamEvent").OfflineResumeWamEvent,
        n("WAWebMessageSecretErrorsWamEvent").MessageSecretErrorsWamEvent,
        n("WAWebMessageSendWamEvent").MessageSendWamEvent,
        n("WAWebForwardSendWamEvent").ForwardSendWamEvent,
        n("WAWebMexEventV2WamEvent").MexEventV2WamEvent,
        n("WAWebWaOldCodeWamEvent").WaOldCodeWamEvent,
        n("WAWebChatMessageCountsWamEvent").ChatMessageCountsWamEvent,
        n("WAWebNotificationDeliveryWamEvent").NotificationDeliveryWamEvent,
        n("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent,
        n("WAWebMdAppStateDirtyBitsWamEvent").MdAppStateDirtyBitsWamEvent,
        n("WAWebMdBadDeviceSentMessageWamEvent").MdBadDeviceSentMessageWamEvent,
        n("WAWebPlaceholderActivityWamEvent").PlaceholderActivityWamEvent,
        n("WAWebGatedMessageReceivedWamEvent").GatedMessageReceivedWamEvent,
        n("WAWebMessageReceiveWamEvent").MessageReceiveWamEvent,
        n("WAWebOfflineCountTooHighWamEvent").OfflineCountTooHighWamEvent,
        n("WAWebReceiptStanzaReceiveWamEvent").ReceiptStanzaReceiveWamEvent,
        n("WAWebMdRetryFromUnknownDeviceWamEvent")
          .MdRetryFromUnknownDeviceWamEvent,
        n("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent,
        n("WAWebMdBootstrapHistoryDataDownloadedWamEvent")
          .MdBootstrapHistoryDataDownloadedWamEvent,
        n("WAWebMdBootstrapHistoryDataStartDownloadingWamEvent")
          .MdBootstrapHistoryDataStartDownloadingWamEvent,
        n("WAWebClockSkewDifferenceTWamEvent").ClockSkewDifferenceTWamEvent,
        n("WAWebGraphqlCatalogRequestWamEvent").GraphqlCatalogRequestWamEvent,
        n("WAWebSignCredentialWamEvent").SignCredentialWamEvent,
        n("WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent")
          .MdBootstrapHistorySyncStatusAfterPairingWamEvent,
        n("WAWebWebcJobInfoWamEvent").WebcJobInfoWamEvent,
        n("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent,
        n("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent,
        n("WAWebMdDeviceSyncAckWamEvent").MdDeviceSyncAckWamEvent,
        n("WAWebMdGroupParticipantMissAckWamEvent")
          .MdGroupParticipantMissAckWamEvent,
        n("WAWebMexEventWamEvent").MexEventWamEvent,
        n("WAWebAdvStoredTimestampExpiredWamEvent")
          .AdvStoredTimestampExpiredWamEvent,
        n("WAWebSyncdKeyCountWamEvent").SyncdKeyCountWamEvent,
        n("WAWebMdAppStateSyncMutationStatsWamEvent")
          .MdAppStateSyncMutationStatsWamEvent,
        n("WAWebNonMessagePeerDataMediaUploadWamEvent")
          .NonMessagePeerDataMediaUploadWamEvent,
        n("WAWebNonMessagePeerDataOperationResponseWamEvent")
          .NonMessagePeerDataOperationResponseWamEvent,
        n("WAWebNonMessagePeerDataRequestWamEvent")
          .NonMessagePeerDataRequestWamEvent,
        n("WAWebWebcLinkPreviewResponseHandleWamEvent")
          .WebcLinkPreviewResponseHandleWamEvent,
        n("WAWebE2eMessageRecvWamEvent").E2eMessageRecvWamEvent,
        n("WAWebIncomingMessageDropWamEvent").IncomingMessageDropWamEvent,
        n("WAWebAdvMetadataCreationFailureWamEvent")
          .AdvMetadataCreationFailureWamEvent,
        n("WAWebWebcRawPlatformsWamEvent").WebcRawPlatformsWamEvent,
        n("WAWebWebcPageResumeWamEvent").WebcPageResumeWamEvent,
        n("WAWebWebcStreamModeChangeWamEvent").WebcStreamModeChangeWamEvent,
        n("WAWebPsBufferUploadWamEvent").PsBufferUploadWamEvent,
        n("WAWebWebDbTableUsageWamEvent").WebDbTableUsageWamEvent,
        n("WAWebWebDbVersionNonAnonymousWamEvent")
          .WebDbVersionNonAnonymousWamEvent,
        n("WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent")
          .WebDbLoadFromVersionFailureNonAnonymousWamEvent,
        n("WAWebWebcDbOpenWamEvent").WebcDbOpenWamEvent,
        n("WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent")
          .MdBootstrapAppStateCriticalDataProcessingWamEvent,
        n("WAWebMdCriticalEventWamEvent").MdCriticalEventWamEvent,
        n("WAWebMdSyncdDogfoodingFeatureUsageWamEvent")
          .MdSyncdDogfoodingFeatureUsageWamEvent,
        n("WAWebMdAppStateMessageRangeWamEvent").MdAppStateMessageRangeWamEvent,
        n("WAWebMdBootstrapDataAppliedWamEvent").MdBootstrapDataAppliedWamEvent,
        n("WAWebMdBootstrapAppStateDataDownloadedWamEvent")
          .MdBootstrapAppStateDataDownloadedWamEvent,
        n("WAWebMdFatalErrorWamEvent").MdFatalErrorWamEvent,
        n("WAWebMdAppStateKeyRotationWamEvent").MdAppStateKeyRotationWamEvent,
        n("WAWebMdAppStateSyncDailyWamEvent").MdAppStateSyncDailyWamEvent,
        n("WAWebCommunityHomeActionWamEvent").CommunityHomeActionWamEvent,
        n("WAWebCommunityTabActionWamEvent").CommunityTabActionWamEvent,
        n("WAWebDailyWamEvent").DailyWamEvent,
        n("WAWebKeepInChatNotifWamEvent").KeepInChatNotifWamEvent,
        n("WAWebNotificationEngagementWamEvent").NotificationEngagementWamEvent,
        n("WAWebWebcOfflineNotificationProcessWamEvent")
          .WebcOfflineNotificationProcessWamEvent);
    }
    l.processWorkerWamData = d;
  },
  98,
);
