__d(
  "WAWebWamFalcoBatch7Loggers",
  [
    "WamAboutCreationFalcoEvent",
    "WamAiResponseUserJourneyGenaiFalcoEvent",
    "WamCadminDemoteFalcoEvent",
    "WamChannelLinkShareFalcoEvent",
    "WamChannelSimilarChannelsFalcoEvent",
    "WamChatPsaReadFalcoEvent",
    "WamContactNotificationSettingUserJourneyFalcoEvent",
    "WamDisappearingModeSettingEventsFalcoEvent",
    "WamGifFromProviderSentFalcoEvent",
    "WamGifSearchResultTappedFalcoEvent",
    "WamGroupMemberUpdatesFalcoEvent",
    "WamInlineVideoPlaybackClosedFalcoEvent",
    "WamMdAppStateOfflineNotificationsFalcoEvent",
    "WamMdChatAssignmentFalcoEvent",
    "WamMdGroupParticipantMissAckFalcoEvent",
    "WamMentionPickerActionFalcoEvent",
    "WamPnhDailyFalcoEvent",
    "WamPollsActionsFalcoEvent",
    "WamPrivacyTipActionFalcoEvent",
    "WamQbmRichOrderStatusInteractionFalcoEvent",
    "WamReportingTokenValidationFailureFalcoEvent",
    "WamSettingsSearchInitiateFalcoEvent",
    "WamSettingsSearchTapFalcoEvent",
    "WamStatusChatProfileRingActionFalcoEvent",
    "WamStickerStoreOpenedFalcoEvent",
    "WamSystemMessageClickFalcoEvent",
    "WamTeeNodeSelectionFalcoEvent",
    "WamWaFsGroupJoinRequestActionFalcoEvent",
    "WamWaFsMessageButtonInteractionFalcoEvent",
    "WamWamClientErrorsFalcoEvent",
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
        case 1122:
        case 1124:
        case 1144:
        case 2032:
        case 2602:
        case 3020:
        case 3426:
        case 3446:
        case 3574:
        case 3676:
        case 3752:
        case 3806:
        case 3944:
        case 4014:
        case 4016:
        case 4146:
        case 4728:
        case 4794:
        case 5082:
        case 5202:
        case 5304:
        case 5466:
        case 6818:
        case 6940:
        case 6968:
        case 7082:
        case 7768:
        case 8174:
        case 8212:
        case 8554:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1122:
          return (e(r("WamGifSearchResultTappedFalcoEvent"), n, o), !0);
        case 1124:
          return (e(r("WamGifFromProviderSentFalcoEvent"), n, o), !0);
        case 1144:
          return (e(r("WamWamClientErrorsFalcoEvent"), n, o), !0);
        case 2032:
          return (e(r("WamInlineVideoPlaybackClosedFalcoEvent"), n, o), !0);
        case 2602:
          return (
            e(r("WamMdAppStateOfflineNotificationsFalcoEvent"), n, o),
            !0
          );
        case 3020:
          return (e(r("WamStickerStoreOpenedFalcoEvent"), n, o), !0);
        case 3426:
          return (e(r("WamCadminDemoteFalcoEvent"), n, o), !0);
        case 3446:
          return (e(r("WamDisappearingModeSettingEventsFalcoEvent"), n, o), !0);
        case 3574:
          return (e(r("WamChatPsaReadFalcoEvent"), n, o), !0);
        case 3676:
          return (e(r("WamPollsActionsFalcoEvent"), n, o), !0);
        case 3752:
          return (e(r("WamMdChatAssignmentFalcoEvent"), n, o), !0);
        case 3806:
          return (e(r("WamPnhDailyFalcoEvent"), n, o), !0);
        case 3944:
          return (e(r("WamWaFsGroupJoinRequestActionFalcoEvent"), n, o), !0);
        case 4014:
          return (e(r("WamSettingsSearchInitiateFalcoEvent"), n, o), !0);
        case 4016:
          return (e(r("WamSettingsSearchTapFalcoEvent"), n, o), !0);
        case 4146:
          return (e(r("WamMdGroupParticipantMissAckFalcoEvent"), n, o), !0);
        case 4728:
          return (e(r("WamChannelLinkShareFalcoEvent"), n, o), !0);
        case 4794:
          return (e(r("WamPrivacyTipActionFalcoEvent"), n, o), !0);
        case 5082:
          return (e(r("WamSystemMessageClickFalcoEvent"), n, o), !0);
        case 5202:
          return (e(r("WamChannelSimilarChannelsFalcoEvent"), n, o), !0);
        case 5304:
          return (
            e(r("WamContactNotificationSettingUserJourneyFalcoEvent"), n, o),
            !0
          );
        case 5466:
          return (
            e(r("WamReportingTokenValidationFailureFalcoEvent"), n, o),
            !0
          );
        case 6818:
          return (e(r("WamAboutCreationFalcoEvent"), n, o), !0);
        case 6940:
          return (e(r("WamQbmRichOrderStatusInteractionFalcoEvent"), n, o), !0);
        case 6968:
          return (e(r("WamWaFsMessageButtonInteractionFalcoEvent"), n, o), !0);
        case 7082:
          return (e(r("WamMentionPickerActionFalcoEvent"), n, o), !0);
        case 7768:
          return (e(r("WamGroupMemberUpdatesFalcoEvent"), n, o), !0);
        case 8174:
          return (e(r("WamStatusChatProfileRingActionFalcoEvent"), n, o), !0);
        case 8212:
          return (e(r("WamTeeNodeSelectionFalcoEvent"), n, o), !0);
        case 8554:
          return (e(r("WamAiResponseUserJourneyGenaiFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
