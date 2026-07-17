__d(
  "WAWebHatchLogging",
  [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebHatchApprovalOption",
    "WAWebHatchFrontendGating",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumHatchActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function s(e) {
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function u(e) {
      _(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function c(e, t) {
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_BOTTOM_SHEET_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: e }),
      );
    }
    function d(e) {
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function m(e, t) {
      _(p(e), t);
    }
    function p(e) {
      return e === r("WAWebHatchApprovalOption").AllowOnce
        ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_ALLOW_ONCE_TAP
        : e === r("WAWebHatchApprovalOption").AllowAlways
          ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
              .HITL_ALWAYS_ALLOW_TAP
          : e === r("WAWebHatchApprovalOption").Deny
            ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DENY_TAP
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e, t) {
      var n, r, a, i, l;
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var s = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          hatchActionType: e,
          hitlIsMulti: t == null ? void 0 : t.hitlIsMulti,
          unifiedSessionId:
            (n =
              (r = t == null ? void 0 : t.unifiedSessionId) != null
                ? r
                : o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
              ? n
              : void 0,
          aiSessionId:
            (a =
              (i = t == null ? void 0 : t.aiSessionId) != null
                ? i
                : o(
                    "WAWebThreadJourneyLogger",
                  ).ThreadJourneyLogger.getAiSessionId()) != null
              ? a
              : void 0,
          rawBotEntryPoint:
            (l = t == null ? void 0 : t.rawBotEntryPoint) != null
              ? l
              : f(t == null ? void 0 : t.botEntryPoint),
        });
        s.commit();
      }
    }
    function f(e) {
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
      (l.logHatchUnlinkSuccess = u),
      (l.logHatchHitlBottomSheetImpression = c),
      (l.logHatchHitlDetailImpression = d),
      (l.logHatchHitlDecisionTap = m));
  },
  98,
);
