__d(
  "WAWebWamFalcoBatch6Loggers",
  [
    "WamAdvListTimestampInvalidFalcoEvent",
    "WamAdvStoredTimestampExpiredFalcoEvent",
    "WamBusinessToolsEntryFalcoEvent",
    "WamChannelAdminFalcoEvent",
    "WamChannelDyiFalcoEvent",
    "WamChatPsaRemoveFalcoEvent",
    "WamCommunityHomeActionFalcoEvent",
    "WamCtwaOrderSignalFalcoEvent",
    "WamGifSearchSessionStartedFalcoEvent",
    "WamGroupCreateFalcoEvent",
    "WamGroupJourneyFalcoEvent",
    "WamKeepInChatPerfFalcoEvent",
    "WamLockFolderUnlockFalcoEvent",
    "WamManageAdsEntryPointImpressionFalcoEvent",
    "WamMdExpansionAgentBrowserMdIdFalcoEvent",
    "WamMessageCappingFalcoEvent",
    "WamMessageDeleteActionsFalcoEvent",
    "WamMetaAiUpsellCtaFalcoEvent",
    "WamPnhRequestRevealActionFalcoEvent",
    "WamRevokeMessageSendFalcoEvent",
    "WamStickerLatencyFalcoEvent",
    "WamStickerPackLatencyFalcoEvent",
    "WamStructuredMessageBuyerReceiveFalcoEvent",
    "WamThreadInteractionDataIntegrityFalcoEvent",
    "WamViewOnceScreenshotActionsFalcoEvent",
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
        case 594:
        case 1134:
        case 2216:
        case 3036:
        case 3040:
        case 3390:
        case 3488:
        case 3494:
        case 3582:
        case 3606:
        case 3626:
        case 3656:
        case 3808:
        case 4124:
        case 4218:
        case 4264:
        case 4512:
        case 4556:
        case 4726:
        case 5026:
        case 5844:
        case 6468:
        case 6532:
        case 6854:
        case 7520:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 594:
          return (e(r("WamGroupCreateFalcoEvent"), n, o), !0);
        case 1134:
          return (e(r("WamGifSearchSessionStartedFalcoEvent"), n, o), !0);
        case 2216:
          return (e(r("WamBusinessToolsEntryFalcoEvent"), n, o), !0);
        case 3036:
          return (e(r("WamAdvStoredTimestampExpiredFalcoEvent"), n, o), !0);
        case 3040:
          return (e(r("WamAdvListTimestampInvalidFalcoEvent"), n, o), !0);
        case 3390:
          return (e(r("WamMdExpansionAgentBrowserMdIdFalcoEvent"), n, o), !0);
        case 3488:
          return (e(r("WamKeepInChatPerfFalcoEvent"), n, o), !0);
        case 3494:
          return (e(r("WamCommunityHomeActionFalcoEvent"), n, o), !0);
        case 3582:
          return (e(r("WamChatPsaRemoveFalcoEvent"), n, o), !0);
        case 3606:
          return (e(r("WamViewOnceScreenshotActionsFalcoEvent"), n, o), !0);
        case 3626:
          return (e(r("WamMessageDeleteActionsFalcoEvent"), n, o), !0);
        case 3656:
          return (e(r("WamRevokeMessageSendFalcoEvent"), n, o), !0);
        case 3808:
          return (e(r("WamPnhRequestRevealActionFalcoEvent"), n, o), !0);
        case 4124:
          return (e(r("WamManageAdsEntryPointImpressionFalcoEvent"), n, o), !0);
        case 4218:
          return (e(r("WamLockFolderUnlockFalcoEvent"), n, o), !0);
        case 4264:
          return (e(r("WamCtwaOrderSignalFalcoEvent"), n, o), !0);
        case 4512:
          return (e(r("WamGroupJourneyFalcoEvent"), n, o), !0);
        case 4556:
          return (e(r("WamChannelAdminFalcoEvent"), n, o), !0);
        case 4726:
          return (e(r("WamChannelDyiFalcoEvent"), n, o), !0);
        case 5026:
          return (e(r("WamStickerLatencyFalcoEvent"), n, o), !0);
        case 5844:
          return (e(r("WamStickerPackLatencyFalcoEvent"), n, o), !0);
        case 6468:
          return (
            e(r("WamThreadInteractionDataIntegrityFalcoEvent"), n, o),
            !0
          );
        case 6532:
          return (e(r("WamMetaAiUpsellCtaFalcoEvent"), n, o), !0);
        case 6854:
          return (e(r("WamMessageCappingFalcoEvent"), n, o), !0);
        case 7520:
          return (e(r("WamStructuredMessageBuyerReceiveFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
