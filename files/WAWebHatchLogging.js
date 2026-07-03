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
      c(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function s(e) {
      c(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function u(e) {
      c(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function c(e, t) {
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var n = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          hatchActionType: e,
          unifiedSessionId: t == null ? void 0 : t.unifiedSessionId,
          aiSessionId: t == null ? void 0 : t.aiSessionId,
          rawBotEntryPoint: t == null ? void 0 : t.rawBotEntryPoint,
        });
        n.commit();
      }
    }
    ((l.logHatchRequestWelcomeMsgSent = e),
      (l.logHatchTapUnlinkButton = s),
      (l.logHatchUnlinkSuccess = u));
  },
  98,
);
