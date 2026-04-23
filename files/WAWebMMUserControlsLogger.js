__d(
  "WAWebMMUserControlsLogger",
  [
    "WAWebMarketingMessageUserControlsJourneyWamEvent",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebUnifiedSession",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMMessageLevelFeedbackNotInterestedMenuEnabled(),
        t = o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMStopInFMXEnabled();
      return !e && !t ? 1 : e && !t ? 2 : !e && t ? 3 : 4;
    }
    function s(t) {
      var n,
        r,
        a = t.action,
        i = t.entryPoint,
        l = t.isSuccess,
        s = t.message;
      new (o(
        "WAWebMarketingMessageUserControlsJourneyWamEvent",
      ).MarketingMessageUserControlsJourneyWamEvent)({
        isSuccess: l,
        mmUserControlsAction: a,
        mmUserControlsEntryPoint: i,
        sequenceNumber:
          o("WAWebUnifiedSession").UnifiedSessionManager.getSequence() - 1,
        templateId:
          (n = s == null ? void 0 : s.templateId) != null ? n : void 0,
        unifiedSessionId:
          (r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) !=
          null
            ? r
            : void 0,
        mmUserControlsRolloutVariant: e(),
      }).commit();
    }
    l.logMarketingMessageUserControlsJourney = s;
  },
  98,
);
