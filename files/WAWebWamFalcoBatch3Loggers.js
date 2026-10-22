__d(
  "WAWebWamFalcoBatch3Loggers",
  [
    "WamAboutConsumptionDailyFalcoEvent",
    "WamAccountEncryptionAttestationFalcoEvent",
    "WamAdvExpectedTsUnavailableFalcoEvent",
    "WamChannelsInterestPickerFalcoEvent",
    "WamChatThreadWallpaperFalcoEvent",
    "WamCommunityFeatureUsageFalcoEvent",
    "WamEphemeralOutOfSyncInfoFalcoEvent",
    "WamGifSearchCancelledFalcoEvent",
    "WamHatchUserJourneyFalcoEvent",
    "WamKeepInChatNotifFalcoEvent",
    "WamKeepInChatNuxFalcoEvent",
    "WamLwiEntryPointImpressionFalcoEvent",
    "WamMdSyncdDogfoodingFeatureUsageFalcoEvent",
    "WamMediaEngagementSentDailyFalcoEvent",
    "WamMexEventFalcoEvent",
    "WamPrivacyHighlightDailyFalcoEvent",
    "WamPttDailyFalcoEvent",
    "WamReportToAdminEventsFalcoEvent",
    "WamSmbDataSharingConsentStateFalcoEvent",
    "WamStickerErrorFalcoEvent",
    "WamThreadInteractionDataNotificationFalcoEvent",
    "WamUiMessageYourselfActionFalcoEvent",
    "WamWaFsSingleEmojiMessageDailyFalcoEvent",
    "WamWaffleLinkedProfilesCacheFalcoEvent",
    "WamWefrGroupClientExposureFalcoEvent",
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
        case 1126:
        case 2906:
        case 2938:
        case 3016:
        case 3038:
        case 3484:
        case 3486:
        case 3522:
        case 3696:
        case 3780:
        case 3782:
        case 3892:
        case 4274:
        case 4420:
        case 5024:
        case 5286:
        case 5602:
        case 6412:
        case 6470:
        case 6640:
        case 6816:
        case 7074:
        case 7202:
        case 7806:
        case 8164:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1126:
          return (e(r("WamGifSearchCancelledFalcoEvent"), n, o), !0);
        case 2906:
          return (e(r("WamLwiEntryPointImpressionFalcoEvent"), n, o), !0);
        case 2938:
          return (e(r("WamPttDailyFalcoEvent"), n, o), !0);
        case 3016:
          return (e(r("WamMdSyncdDogfoodingFeatureUsageFalcoEvent"), n, o), !0);
        case 3038:
          return (e(r("WamAdvExpectedTsUnavailableFalcoEvent"), n, o), !0);
        case 3484:
          return (e(r("WamKeepInChatNotifFalcoEvent"), n, o), !0);
        case 3486:
          return (e(r("WamKeepInChatNuxFalcoEvent"), n, o), !0);
        case 3522:
          return (e(r("WamPrivacyHighlightDailyFalcoEvent"), n, o), !0);
        case 3696:
          return (e(r("WamCommunityFeatureUsageFalcoEvent"), n, o), !0);
        case 3780:
          return (e(r("WamUiMessageYourselfActionFalcoEvent"), n, o), !0);
        case 3782:
          return (e(r("WamMexEventFalcoEvent"), n, o), !0);
        case 3892:
          return (e(r("WamEphemeralOutOfSyncInfoFalcoEvent"), n, o), !0);
        case 4274:
          return (e(r("WamMediaEngagementSentDailyFalcoEvent"), n, o), !0);
        case 4420:
          return (e(r("WamReportToAdminEventsFalcoEvent"), n, o), !0);
        case 5024:
          return (e(r("WamStickerErrorFalcoEvent"), n, o), !0);
        case 5286:
          return (e(r("WamChatThreadWallpaperFalcoEvent"), n, o), !0);
        case 5602:
          return (e(r("WamWaFsSingleEmojiMessageDailyFalcoEvent"), n, o), !0);
        case 6412:
          return (
            e(r("WamThreadInteractionDataNotificationFalcoEvent"), n, o),
            !0
          );
        case 6470:
          return (e(r("WamSmbDataSharingConsentStateFalcoEvent"), n, o), !0);
        case 6640:
          return (e(r("WamWefrGroupClientExposureFalcoEvent"), n, o), !0);
        case 6816:
          return (e(r("WamAboutConsumptionDailyFalcoEvent"), n, o), !0);
        case 7074:
          return (e(r("WamWaffleLinkedProfilesCacheFalcoEvent"), n, o), !0);
        case 7202:
          return (e(r("WamChannelsInterestPickerFalcoEvent"), n, o), !0);
        case 7806:
          return (e(r("WamHatchUserJourneyFalcoEvent"), n, o), !0);
        case 8164:
          return (e(r("WamAccountEncryptionAttestationFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
