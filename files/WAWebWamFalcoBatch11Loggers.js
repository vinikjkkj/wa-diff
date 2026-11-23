__d(
  "WAWebWamFalcoBatch11Loggers",
  [
    "WamBlockEventsFsFalcoEvent",
    "WamBusinessToolsImpressionFalcoEvent",
    "WamChannelDirectoryFalcoEvent",
    "WamChatLockActionFalcoEvent",
    "WamCompanionsContactEventFalcoEvent",
    "WamCtwaBizUserJourneyFalcoEvent",
    "WamDeepLinkClickFalcoEvent",
    "WamDeepLinkMsgSentFalcoEvent",
    "WamDisappearingMessageKeepInChatFalcoEvent",
    "WamDisappearingModeSettingChangeFalcoEvent",
    "WamLimitSharingSettingUpdateFalcoEvent",
    "WamMdBootstrapHistoryDataDownloadedFalcoEvent",
    "WamMdLabelSyncTrackingFalcoEvent",
    "WamMediaSharingUserJourneyFalcoEvent",
    "WamMessagingFavoritesUpdateFalcoEvent",
    "WamMessagingUserJourneyFalcoEvent",
    "WamNotificationEngagementFalcoEvent",
    "WamPinInChatInteractionFalcoEvent",
    "WamPinInChatMessageSendFalcoEvent",
    "WamPrivacySettingsClickFalcoEvent",
    "WamProtobufValidationErrorFalcoEvent",
    "WamSearchTheWebFunnelFalcoEvent",
    "WamSendRevokeMessageFalcoEvent",
    "WamSmbPerCustomerDataSharingControlFalcoEvent",
    "WamStatusEditActionsFalcoEvent",
    "WamStatusPrivacySettingsFalcoEvent",
    "WamStatusRevokeFalcoEvent",
    "WamStickerAddToFavoriteFalcoEvent",
    "WamUpdatesTabSearchFalcoEvent",
    "WamUserNoticeFalcoEvent",
    "WamUsernameExposedFalcoEvent",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o = function () {
        return r("unsafeCast")(t);
      };
      if (n) {
        e.logCritical(o);
        return;
      }
      e.log(o);
    }
    function s(e) {
      switch (e) {
        case 1156:
        case 1250:
        case 1348:
        case 1842:
        case 2220:
        case 2296:
        case 2472:
        case 3056:
        case 3198:
        case 3200:
        case 3482:
        case 3726:
        case 3796:
        case 4212:
        case 4288:
        case 4436:
        case 4438:
        case 4544:
        case 4838:
        case 5134:
        case 5186:
        case 5460:
        case 5702:
        case 5718:
        case 5992:
        case 6110:
        case 6390:
        case 7614:
        case 7638:
        case 8232:
        case 8300:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1156:
          return (e(r("WamDeepLinkClickFalcoEvent"), n, o), !0);
        case 1250:
          return (e(r("WamStatusRevokeFalcoEvent"), n, o), !0);
        case 1348:
          return (e(r("WamSendRevokeMessageFalcoEvent"), n, o), !0);
        case 1842:
          return (e(r("WamStickerAddToFavoriteFalcoEvent"), n, o), !0);
        case 2220:
          return (e(r("WamBusinessToolsImpressionFalcoEvent"), n, o), !0);
        case 2296:
          return (
            e(r("WamMdBootstrapHistoryDataDownloadedFalcoEvent"), n, o),
            !0
          );
        case 2472:
          return (e(r("WamUserNoticeFalcoEvent"), n, o), !0);
        case 3056:
          return (e(r("WamDisappearingModeSettingChangeFalcoEvent"), n, o), !0);
        case 3198:
          return (e(r("WamDeepLinkMsgSentFalcoEvent"), n, o), !0);
        case 3200:
          return (e(r("WamStatusPrivacySettingsFalcoEvent"), n, o), !0);
        case 3482:
          return (e(r("WamDisappearingMessageKeepInChatFalcoEvent"), n, o), !0);
        case 3726:
          return (e(r("WamPrivacySettingsClickFalcoEvent"), n, o), !0);
        case 3796:
          return (e(r("WamNotificationEngagementFalcoEvent"), n, o), !0);
        case 4212:
          return (e(r("WamChatLockActionFalcoEvent"), n, o), !0);
        case 4288:
          return (e(r("WamBlockEventsFsFalcoEvent"), n, o), !0);
        case 4436:
          return (e(r("WamPinInChatInteractionFalcoEvent"), n, o), !0);
        case 4438:
          return (e(r("WamPinInChatMessageSendFalcoEvent"), n, o), !0);
        case 4544:
          return (e(r("WamChannelDirectoryFalcoEvent"), n, o), !0);
        case 4838:
          return (e(r("WamUpdatesTabSearchFalcoEvent"), n, o), !0);
        case 5134:
          return (e(r("WamMessagingUserJourneyFalcoEvent"), n, o), !0);
        case 5186:
          return (e(r("WamMediaSharingUserJourneyFalcoEvent"), n, o), !0);
        case 5460:
          return (e(r("WamMessagingFavoritesUpdateFalcoEvent"), n, o), !0);
        case 5702:
          return (e(r("WamSearchTheWebFunnelFalcoEvent"), n, o), !0);
        case 5718:
          return (e(r("WamCompanionsContactEventFalcoEvent"), n, o), !0);
        case 5992:
          return (e(r("WamCtwaBizUserJourneyFalcoEvent"), n, o), !0);
        case 6110:
          return (e(r("WamProtobufValidationErrorFalcoEvent"), n, o), !0);
        case 6390:
          return (e(r("WamLimitSharingSettingUpdateFalcoEvent"), n, o), !0);
        case 7614:
          return (e(r("WamUsernameExposedFalcoEvent"), n, o), !0);
        case 7638:
          return (e(r("WamMdLabelSyncTrackingFalcoEvent"), n, o), !0);
        case 8232:
          return (
            e(r("WamSmbPerCustomerDataSharingControlFalcoEvent"), n, o),
            !0
          );
        case 8300:
          return (e(r("WamStatusEditActionsFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
