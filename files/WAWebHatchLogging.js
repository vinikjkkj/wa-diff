__d(
  "WAWebHatchLogging",
  [
    "WAWebHatchFrontendGating",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebWamEnumHatchActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var t = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          hatchActionType: o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
            .REQUEST_WELCOME_MSG_SENT,
          unifiedSessionId: e == null ? void 0 : e.unifiedSessionId,
          aiSessionId: e == null ? void 0 : e.aiSessionId,
          rawBotEntryPoint: e == null ? void 0 : e.rawBotEntryPoint,
        });
        t.commit();
      }
    }
    function s(e) {
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var t = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          hatchActionType: o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
            .TAP_UNLINK_BUTTON,
          unifiedSessionId: e == null ? void 0 : e.unifiedSessionId,
          aiSessionId: e == null ? void 0 : e.aiSessionId,
          rawBotEntryPoint: e == null ? void 0 : e.rawBotEntryPoint,
        });
        t.commit();
      }
    }
    ((l.logHatchRequestWelcomeMsgSent = e), (l.logHatchTapUnlinkButton = s));
  },
  98,
);
