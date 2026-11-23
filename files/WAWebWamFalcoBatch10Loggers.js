__d(
  "WAWebWamFalcoBatch10Loggers",
  [
    "WamAiResponseViewedFalcoEvent",
    "WamChannelMembershipActionEventFalcoEvent",
    "WamChatMuteFalcoEvent",
    "WamExpressionTrayUserJourneyFalcoEvent",
    "WamGroupMemberTagUpdateFalcoEvent",
    "WamListUpdateFalcoEvent",
    "WamMdBootstrapHistoryDataReceivedFalcoEvent",
    "WamMobileConfigInconsistentValueFalcoEvent",
    "WamQpEngagementPerformanceFalcoEvent",
    "WamUnknownStanzaFalcoEvent",
    "WamWaffleDailyFalcoEvent",
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
        case 2280:
        case 2998:
        case 3448:
        case 4104:
        case 5174:
        case 5762:
        case 5830:
        case 6604:
        case 7010:
        case 7026:
        case 7060:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 2280:
          return (e(r("WamChatMuteFalcoEvent"), n, o), !0);
        case 2998:
          return (
            e(r("WamMdBootstrapHistoryDataReceivedFalcoEvent"), n, o),
            !0
          );
        case 3448:
          return (e(r("WamUnknownStanzaFalcoEvent"), n, o), !0);
        case 4104:
          return (e(r("WamWaffleDailyFalcoEvent"), n, o), !0);
        case 5174:
          return (e(r("WamExpressionTrayUserJourneyFalcoEvent"), n, o), !0);
        case 5762:
          return (e(r("WamChannelMembershipActionEventFalcoEvent"), n, o), !0);
        case 5830:
          return (e(r("WamListUpdateFalcoEvent"), n, o), !0);
        case 6604:
          return (e(r("WamAiResponseViewedFalcoEvent"), n, o), !0);
        case 7010:
          return (e(r("WamGroupMemberTagUpdateFalcoEvent"), n, o), !0);
        case 7026:
          return (e(r("WamQpEngagementPerformanceFalcoEvent"), n, o), !0);
        case 7060:
          return (e(r("WamMobileConfigInconsistentValueFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
