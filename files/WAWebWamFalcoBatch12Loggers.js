__d(
  "WAWebWamFalcoBatch12Loggers",
  [
    "WamBannerEventFalcoEvent",
    "WamChannelCoreEventFalcoEvent",
    "WamCriticalEventFalcoEvent",
    "WamDailyFalcoEvent",
    "WamForwardActionUserJourneyFalcoEvent",
    "WamMdLinkDeviceCompanionFalcoEvent",
    "WamMediaUpload2FalcoEvent",
    "WamMexEventV2FalcoEvent",
    "WamOfflineResumeFalcoEvent",
    "WamPlaceholderActivityFalcoEvent",
    "WamPreCallUserJourneyChatThreadFalcoEvent",
    "WamPttMessageUserJourneyFalcoEvent",
    "WamQbmIncomingMessageFalcoEvent",
    "WamQuotedMessageUserJourneyFalcoEvent",
    "WamShareContentUserJourneyFalcoEvent",
    "WamSmbUserJourneyFalcoEvent",
    "WamStatusCrosspostRequestFalcoEvent",
    "WamStatusItemViewFalcoEvent",
    "WamStatusPostImpressionFalcoEvent",
    "WamTextMessageUserJourneyFalcoEvent",
    "WamThreadInteractionDataCoreConsumerFalcoEvent",
    "WamTsNavigationFalcoEvent",
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
        case 1158:
        case 1578:
        case 1588:
        case 1658:
        case 1684:
        case 1980:
        case 2576:
        case 3112:
        case 3790:
        case 4334:
        case 4336:
        case 4692:
        case 4994:
        case 5402:
        case 5404:
        case 5462:
        case 5634:
        case 5734:
        case 6364:
        case 6444:
        case 6466:
        case 6506:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1158:
          return (e(r("WamDailyFalcoEvent"), n, o), !0);
        case 1578:
          return (e(r("WamBannerEventFalcoEvent"), n, o), !0);
        case 1588:
          return (e(r("WamMediaUpload2FalcoEvent"), n, o), !0);
        case 1658:
          return (e(r("WamStatusItemViewFalcoEvent"), n, o), !0);
        case 1684:
          return (e(r("WamCriticalEventFalcoEvent"), n, o), !0);
        case 1980:
          return (e(r("WamPlaceholderActivityFalcoEvent"), n, o), !0);
        case 2576:
          return (e(r("WamMdLinkDeviceCompanionFalcoEvent"), n, o), !0);
        case 3112:
          return (e(r("WamOfflineResumeFalcoEvent"), n, o), !0);
        case 3790:
          return (e(r("WamQbmIncomingMessageFalcoEvent"), n, o), !0);
        case 4334:
          return (e(r("WamTsNavigationFalcoEvent"), n, o), !0);
        case 4336:
          return (e(r("WamMexEventV2FalcoEvent"), n, o), !0);
        case 4692:
          return (e(r("WamChannelCoreEventFalcoEvent"), n, o), !0);
        case 4994:
          return (e(r("WamStatusCrosspostRequestFalcoEvent"), n, o), !0);
        case 5402:
          return (e(r("WamPttMessageUserJourneyFalcoEvent"), n, o), !0);
        case 5404:
          return (e(r("WamTextMessageUserJourneyFalcoEvent"), n, o), !0);
        case 5462:
          return (e(r("WamSmbUserJourneyFalcoEvent"), n, o), !0);
        case 5634:
          return (e(r("WamPreCallUserJourneyChatThreadFalcoEvent"), n, o), !0);
        case 5734:
          return (e(r("WamShareContentUserJourneyFalcoEvent"), n, o), !0);
        case 6364:
          return (e(r("WamStatusPostImpressionFalcoEvent"), n, o), !0);
        case 6444:
          return (e(r("WamQuotedMessageUserJourneyFalcoEvent"), n, o), !0);
        case 6466:
          return (
            e(r("WamThreadInteractionDataCoreConsumerFalcoEvent"), n, o),
            !0
          );
        case 6506:
          return (e(r("WamForwardActionUserJourneyFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
