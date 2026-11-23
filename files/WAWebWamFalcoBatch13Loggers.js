__d(
  "WAWebWamFalcoBatch13Loggers",
  [
    "WamAttachmentTrayActionsFalcoEvent",
    "WamAutomaticEventsUserJourneyFalcoEvent",
    "WamBotJourneyFalcoEvent",
    "WamCallInfoUserJourneyFalcoEvent",
    "WamCallUserJourneyFalcoEvent",
    "WamChannelDiscoveryVisibilityTrackingFalcoEvent",
    "WamChannelMessageVisibilityTrackingFalcoEvent",
    "WamChannelOpenFalcoEvent",
    "WamChatMessageCountsFalcoEvent",
    "WamCtwa3pdConversionFalcoEvent",
    "WamDeepLinkOpenFalcoEvent",
    "WamForwardSendFalcoEvent",
    "WamGroupHistoryReceiverUserJourneyFalcoEvent",
    "WamGroupMemberAddingUserJourneyFalcoEvent",
    "WamImagineActionsFalcoEvent",
    "WamLwiScreenFalcoEvent",
    "WamMdDeviceSyncAckFalcoEvent",
    "WamOrderDetailsActionsSmbFalcoEvent",
    "WamPaidMessageVpvImpressionFalcoEvent",
    "WamPaymentsUserActionFalcoEvent",
    "WamQbmMessageClickFalcoEvent",
    "WamQbmMessageReadFalcoEvent",
    "WamSettingsClickFalcoEvent",
    "WamSmbDataSharingConsentScreenFalcoEvent",
    "WamStatusPostFalcoEvent",
    "WamStatusPosterActionsFalcoEvent",
    "WamStatusReportingEventsFalcoEvent",
    "WamTeeRequestFalcoEvent",
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
        case 1176:
        case 1644:
        case 1728:
        case 2136:
        case 2162:
        case 2180:
        case 2214:
        case 2772:
        case 3456:
        case 3546:
        case 3792:
        case 3920:
        case 3972:
        case 3980:
        case 4316:
        case 4568:
        case 4630:
        case 5138:
        case 5178:
        case 5336:
        case 5620:
        case 5766:
        case 5998:
        case 6034:
        case 6220:
        case 6636:
        case 7064:
        case 7652:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1176:
          return (e(r("WamStatusPostFalcoEvent"), n, o), !0);
        case 1644:
          return (e(r("WamChatMessageCountsFalcoEvent"), n, o), !0);
        case 1728:
          return (e(r("WamForwardSendFalcoEvent"), n, o), !0);
        case 2136:
          return (e(r("WamDeepLinkOpenFalcoEvent"), n, o), !0);
        case 2162:
          return (e(r("WamPaymentsUserActionFalcoEvent"), n, o), !0);
        case 2180:
          return (e(r("WamMdDeviceSyncAckFalcoEvent"), n, o), !0);
        case 2214:
          return (e(r("WamSettingsClickFalcoEvent"), n, o), !0);
        case 2772:
          return (e(r("WamLwiScreenFalcoEvent"), n, o), !0);
        case 3456:
          return (e(r("WamOrderDetailsActionsSmbFalcoEvent"), n, o), !0);
        case 3546:
          return (e(r("WamStatusPosterActionsFalcoEvent"), n, o), !0);
        case 3792:
          return (e(r("WamQbmMessageReadFalcoEvent"), n, o), !0);
        case 3920:
          return (e(r("WamStatusReportingEventsFalcoEvent"), n, o), !0);
        case 3972:
          return (e(r("WamSmbDataSharingConsentScreenFalcoEvent"), n, o), !0);
        case 3980:
          return (e(r("WamAttachmentTrayActionsFalcoEvent"), n, o), !0);
        case 4316:
          return (e(r("WamChannelOpenFalcoEvent"), n, o), !0);
        case 4568:
          return (e(r("WamCallUserJourneyFalcoEvent"), n, o), !0);
        case 4630:
          return (e(r("WamBotJourneyFalcoEvent"), n, o), !0);
        case 5138:
          return (e(r("WamCtwa3pdConversionFalcoEvent"), n, o), !0);
        case 5178:
          return (e(r("WamQbmMessageClickFalcoEvent"), n, o), !0);
        case 5336:
          return (e(r("WamGroupMemberAddingUserJourneyFalcoEvent"), n, o), !0);
        case 5620:
          return (e(r("WamImagineActionsFalcoEvent"), n, o), !0);
        case 5766:
          return (
            e(r("WamChannelDiscoveryVisibilityTrackingFalcoEvent"), n, o),
            !0
          );
        case 5998:
          return (
            e(r("WamChannelMessageVisibilityTrackingFalcoEvent"), n, o),
            !0
          );
        case 6034:
          return (e(r("WamCallInfoUserJourneyFalcoEvent"), n, o), !0);
        case 6220:
          return (e(r("WamTeeRequestFalcoEvent"), n, o), !0);
        case 6636:
          return (e(r("WamAutomaticEventsUserJourneyFalcoEvent"), n, o), !0);
        case 7064:
          return (
            e(r("WamGroupHistoryReceiverUserJourneyFalcoEvent"), n, o),
            !0
          );
        case 7652:
          return (e(r("WamPaidMessageVpvImpressionFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
