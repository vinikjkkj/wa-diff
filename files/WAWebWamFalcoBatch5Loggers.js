__d(
  "WAWebWamFalcoBatch5Loggers",
  [
    "WamAboutInteractionFalcoEvent",
    "WamAddressingModeMismatchFalcoEvent",
    "WamChannelProducerInsightsNavigationFalcoEvent",
    "WamChannelsVideoPlayFalcoEvent",
    "WamContactUsSessionFalcoEvent",
    "WamDisappearingMessageChatPickerFalcoEvent",
    "WamEphemeralSyncResponseSendFalcoEvent",
    "WamFsApiSignupFlowFalcoEvent",
    "WamGroupProfilePictureFalcoEvent",
    "WamGroupSuspiciousChatUiInteractionsFalcoEvent",
    "WamMdRetryFromUnknownDeviceFalcoEvent",
    "WamSmbMessageLabelDeprecationFalcoEvent",
    "WamSnackbarDeleteUndoFalcoEvent",
    "WamStructuredMessageBuyerInteractionFalcoEvent",
    "WamUserNoticeErrorFalcoEvent",
    "WamWamChannelMenuClickFalcoEvent",
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
        case 470:
        case 2178:
        case 2474:
        case 3398:
        case 3628:
        case 3652:
        case 4750:
        case 4778:
        case 5626:
        case 5710:
        case 6020:
        case 6556:
        case 7084:
        case 7138:
        case 7518:
        case 7952:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 470:
          return (e(r("WamContactUsSessionFalcoEvent"), n, o), !0);
        case 2178:
          return (e(r("WamMdRetryFromUnknownDeviceFalcoEvent"), n, o), !0);
        case 2474:
          return (e(r("WamUserNoticeErrorFalcoEvent"), n, o), !0);
        case 3398:
          return (e(r("WamDisappearingMessageChatPickerFalcoEvent"), n, o), !0);
        case 3628:
          return (e(r("WamSnackbarDeleteUndoFalcoEvent"), n, o), !0);
        case 3652:
          return (e(r("WamGroupProfilePictureFalcoEvent"), n, o), !0);
        case 4750:
          return (e(r("WamAddressingModeMismatchFalcoEvent"), n, o), !0);
        case 4778:
          return (e(r("WamEphemeralSyncResponseSendFalcoEvent"), n, o), !0);
        case 5626:
          return (
            e(r("WamChannelProducerInsightsNavigationFalcoEvent"), n, o),
            !0
          );
        case 5710:
          return (e(r("WamSmbMessageLabelDeprecationFalcoEvent"), n, o), !0);
        case 6020:
          return (
            e(r("WamGroupSuspiciousChatUiInteractionsFalcoEvent"), n, o),
            !0
          );
        case 6556:
          return (e(r("WamChannelsVideoPlayFalcoEvent"), n, o), !0);
        case 7084:
          return (e(r("WamAboutInteractionFalcoEvent"), n, o), !0);
        case 7138:
          return (e(r("WamWamChannelMenuClickFalcoEvent"), n, o), !0);
        case 7518:
          return (
            e(r("WamStructuredMessageBuyerInteractionFalcoEvent"), n, o),
            !0
          );
        case 7952:
          return (e(r("WamFsApiSignupFlowFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
