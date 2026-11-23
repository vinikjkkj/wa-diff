__d(
  "WAWebWamFalcoBatch9Loggers",
  [
    "WamAdvMetadataCreationFailureFalcoEvent",
    "WamBusinessToolsClickFalcoEvent",
    "WamCompanionInviteContactFalcoEvent",
    "WamContactSearchExperienceFalcoEvent",
    "WamCtwa3pdMessageAnalyticsFalcoEvent",
    "WamCtwaAdCreationAndManagementJourneyFalcoEvent",
    "WamEditBusinessProfileFalcoEvent",
    "WamEditMessageSendFalcoEvent",
    "WamEphemeralSettingChangeFalcoEvent",
    "WamGroupInfoFalcoEvent",
    "WamJoinableCallFalcoEvent",
    "WamLwiEntryTapFalcoEvent",
    "WamMdBootstrapAppStateDataDownloadedFalcoEvent",
    "WamMdFatalErrorFalcoEvent",
    "WamMediaStreamPlaybackFalcoEvent",
    "WamMessageSecretErrorsFalcoEvent",
    "WamOfflineResumeStageFalcoEvent",
    "WamPreCallUserJourneyCallsTabFalcoEvent",
    "WamPttFalcoEvent",
    "WamQbmMessageLevelActionFalcoEvent",
    "WamQuickReplyFalcoEvent",
    "WamReactionUserJourneyFalcoEvent",
    "WamReceiptStanzaReceiveFalcoEvent",
    "WamSearchPerformanceFalcoEvent",
    "WamSmbListEventFalcoEvent",
    "WamStatusInteractionReceivedFalcoEvent",
    "WamStatusInteractionSentFalcoEvent",
    "WamStatusReplyFalcoEvent",
    "WamStickerSendFalcoEvent",
    "WamWaPlusBenefitUserJourneyFalcoEvent",
    "WamWaffleAcUserMappingDailyFalcoEvent",
    "WamWaffleDailyV3FalcoEvent",
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
        case 458:
        case 1180:
        case 1466:
        case 1468:
        case 1584:
        case 1840:
        case 2218:
        case 2294:
        case 2304:
        case 2370:
        case 2496:
        case 2572:
        case 2770:
        case 3048:
        case 3126:
        case 3536:
        case 3686:
        case 3990:
        case 4902:
        case 5290:
        case 5680:
        case 5752:
        case 5770:
        case 5976:
        case 6562:
        case 6574:
        case 6632:
        case 6810:
        case 6812:
        case 7102:
        case 7896:
        case 8230:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 458:
          return (e(r("WamPttFalcoEvent"), n, o), !0);
        case 1180:
          return (e(r("WamStatusReplyFalcoEvent"), n, o), !0);
        case 1466:
          return (e(r("WamEditBusinessProfileFalcoEvent"), n, o), !0);
        case 1468:
          return (e(r("WamQuickReplyFalcoEvent"), n, o), !0);
        case 1584:
          return (e(r("WamMediaStreamPlaybackFalcoEvent"), n, o), !0);
        case 1840:
          return (e(r("WamStickerSendFalcoEvent"), n, o), !0);
        case 2218:
          return (e(r("WamBusinessToolsClickFalcoEvent"), n, o), !0);
        case 2294:
          return (
            e(r("WamMdBootstrapAppStateDataDownloadedFalcoEvent"), n, o),
            !0
          );
        case 2304:
          return (e(r("WamMdFatalErrorFalcoEvent"), n, o), !0);
        case 2370:
          return (e(r("WamEphemeralSettingChangeFalcoEvent"), n, o), !0);
        case 2496:
          return (e(r("WamReceiptStanzaReceiveFalcoEvent"), n, o), !0);
        case 2572:
          return (e(r("WamJoinableCallFalcoEvent"), n, o), !0);
        case 2770:
          return (e(r("WamLwiEntryTapFalcoEvent"), n, o), !0);
        case 3048:
          return (e(r("WamAdvMetadataCreationFailureFalcoEvent"), n, o), !0);
        case 3126:
          return (e(r("WamGroupInfoFalcoEvent"), n, o), !0);
        case 3536:
          return (e(r("WamOfflineResumeStageFalcoEvent"), n, o), !0);
        case 3686:
          return (e(r("WamMessageSecretErrorsFalcoEvent"), n, o), !0);
        case 3990:
          return (e(r("WamEditMessageSendFalcoEvent"), n, o), !0);
        case 4902:
          return (e(r("WamWaffleDailyV3FalcoEvent"), n, o), !0);
        case 5290:
          return (e(r("WamSearchPerformanceFalcoEvent"), n, o), !0);
        case 5680:
          return (e(r("WamPreCallUserJourneyCallsTabFalcoEvent"), n, o), !0);
        case 5752:
          return (e(r("WamReactionUserJourneyFalcoEvent"), n, o), !0);
        case 5770:
          return (e(r("WamWaffleAcUserMappingDailyFalcoEvent"), n, o), !0);
        case 5976:
          return (e(r("WamQbmMessageLevelActionFalcoEvent"), n, o), !0);
        case 6562:
          return (
            e(r("WamCtwaAdCreationAndManagementJourneyFalcoEvent"), n, o),
            !0
          );
        case 6574:
          return (e(r("WamContactSearchExperienceFalcoEvent"), n, o), !0);
        case 6632:
          return (e(r("WamCtwa3pdMessageAnalyticsFalcoEvent"), n, o), !0);
        case 6810:
          return (e(r("WamStatusInteractionReceivedFalcoEvent"), n, o), !0);
        case 6812:
          return (e(r("WamStatusInteractionSentFalcoEvent"), n, o), !0);
        case 7102:
          return (e(r("WamSmbListEventFalcoEvent"), n, o), !0);
        case 7896:
          return (e(r("WamWaPlusBenefitUserJourneyFalcoEvent"), n, o), !0);
        case 8230:
          return (e(r("WamCompanionInviteContactFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
