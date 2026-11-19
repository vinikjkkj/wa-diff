__d(
  "WAWebWamFalcoBatch4Loggers",
  [
    "WamAboutConsumptionFalcoEvent",
    "WamAboutCreationDailyFalcoEvent",
    "WamArInterstitialScreenImpressionFalcoEvent",
    "WamChatActionFalcoEvent",
    "WamChatFolderOpenFalcoEvent",
    "WamChatWallpaperFalcoEvent",
    "WamEphemeralSyncResponseReceiveFalcoEvent",
    "WamGifSearchNoResultsFalcoEvent",
    "WamGroupCatchUpFalcoEvent",
    "WamKeepInChatErrorsFalcoEvent",
    "WamMdAppStateMessageRangeFalcoEvent",
    "WamMdAppStateSyncDailyFalcoEvent",
    "WamMerchantCommerceEventFalcoEvent",
    "WamNativeContactsNuxEventFalcoEvent",
    "WamNewsletterEnforcementEventsFalcoEvent",
    "WamPrekeysDepletionFalcoEvent",
    "WamPsIdUpdateFalcoEvent",
    "WamPttPlaybackFalcoEvent",
    "WamQuickSendsReceiveFalcoEvent",
    "WamReachoutTimelockEnforcementSheetInfoFalcoEvent",
    "WamSenderKeyExpiredFalcoEvent",
    "WamSpamReportPerfFalcoEvent",
    "WamStickerPickerOpenedFalcoEvent",
    "WamUiRevokeActionFalcoEvent",
    "WamViewBusinessProfileFalcoEvent",
    "WamWaffleApiErrorsFalcoEvent",
    "WamWamChannelInfoOpenFalcoEvent",
    "WamWamDroppedEventFalcoEvent",
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
        case 1128:
        case 1522:
        case 1854:
        case 2044:
        case 2300:
        case 2312:
        case 2522:
        case 2808:
        case 2862:
        case 3014:
        case 3058:
        case 3130:
        case 3298:
        case 3698:
        case 4358:
        case 4688:
        case 4780:
        case 5264:
        case 5582:
        case 5788:
        case 6044:
        case 6310:
        case 6814:
        case 6820:
        case 7112:
        case 7148:
        case 7890:
        case 8224:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1128:
          return (e(r("WamGifSearchNoResultsFalcoEvent"), n, o), !0);
        case 1522:
          return (e(r("WamViewBusinessProfileFalcoEvent"), n, o), !0);
        case 1854:
          return (e(r("WamStickerPickerOpenedFalcoEvent"), n, o), !0);
        case 2044:
          return (e(r("WamPttPlaybackFalcoEvent"), n, o), !0);
        case 2300:
          return (e(r("WamMdAppStateSyncDailyFalcoEvent"), n, o), !0);
        case 2312:
          return (e(r("WamChatActionFalcoEvent"), n, o), !0);
        case 2522:
          return (e(r("WamMdAppStateMessageRangeFalcoEvent"), n, o), !0);
        case 2808:
          return (e(r("WamChatFolderOpenFalcoEvent"), n, o), !0);
        case 2862:
          return (e(r("WamPsIdUpdateFalcoEvent"), n, o), !0);
        case 3014:
          return (e(r("WamPrekeysDepletionFalcoEvent"), n, o), !0);
        case 3058:
          return (e(r("WamGroupCatchUpFalcoEvent"), n, o), !0);
        case 3130:
          return (e(r("WamSenderKeyExpiredFalcoEvent"), n, o), !0);
        case 3298:
          return (e(r("WamUiRevokeActionFalcoEvent"), n, o), !0);
        case 3698:
          return (e(r("WamKeepInChatErrorsFalcoEvent"), n, o), !0);
        case 4358:
          return (e(r("WamWamDroppedEventFalcoEvent"), n, o), !0);
        case 4688:
          return (e(r("WamMerchantCommerceEventFalcoEvent"), n, o), !0);
        case 4780:
          return (e(r("WamEphemeralSyncResponseReceiveFalcoEvent"), n, o), !0);
        case 5264:
          return (e(r("WamChatWallpaperFalcoEvent"), n, o), !0);
        case 5582:
          return (
            e(r("WamReachoutTimelockEnforcementSheetInfoFalcoEvent"), n, o),
            !0
          );
        case 5788:
          return (e(r("WamNativeContactsNuxEventFalcoEvent"), n, o), !0);
        case 6044:
          return (e(r("WamWaffleApiErrorsFalcoEvent"), n, o), !0);
        case 6310:
          return (e(r("WamSpamReportPerfFalcoEvent"), n, o), !0);
        case 6814:
          return (e(r("WamAboutConsumptionFalcoEvent"), n, o), !0);
        case 6820:
          return (e(r("WamAboutCreationDailyFalcoEvent"), n, o), !0);
        case 7112:
          return (e(r("WamNewsletterEnforcementEventsFalcoEvent"), n, o), !0);
        case 7148:
          return (e(r("WamWamChannelInfoOpenFalcoEvent"), n, o), !0);
        case 7890:
          return (
            e(r("WamArInterstitialScreenImpressionFalcoEvent"), n, o),
            !0
          );
        case 8224:
          return (e(r("WamQuickSendsReceiveFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
