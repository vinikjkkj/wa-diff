__d(
  "WAWebHatchLogging",
  [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebUnifiedSession",
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
      var n, r, a;
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var i = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          hatchActionType: e,
          unifiedSessionId:
            (n =
              (r = t == null ? void 0 : t.unifiedSessionId) != null
                ? r
                : o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
              ? n
              : void 0,
          aiSessionId: t == null ? void 0 : t.aiSessionId,
          rawBotEntryPoint:
            (a = t == null ? void 0 : t.rawBotEntryPoint) != null
              ? a
              : d(t == null ? void 0 : t.botEntryPoint),
        });
        i.commit();
      }
    }
    function d(e) {
      var t,
        n =
          e != null
            ? e
            : o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
      if (n != null) {
        var r = o(
          "WAWebBotLoggingUtils",
        ).getBotMetricsEntryPointFromBotEntryPoint(n);
        if (r != null)
          return (t = o(
            "WAWebBotLoggingUtils",
          ).getBotOriginFromBotMetricsEntryPoint(r)) != null
            ? t
            : void 0;
      }
    }
    ((l.logHatchRequestWelcomeMsgSent = e),
      (l.logHatchTapUnlinkButton = s),
      (l.logHatchUnlinkSuccess = u));
  },
  98,
);
