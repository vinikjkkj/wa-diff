__d(
  "WAWebHatchLogging",
  [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumFeatureEntryPoint",
    "WAWebWamEnumHatchActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function u(e) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function c(e) {
      E(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function d(e, t, n) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_BOTTOM_SHEET_IMPRESSION,
        babelHelpers.extends({}, n, { hitlIsMulti: e, hitlTypes: m(t) }),
      );
    }
    function m(e) {
      return e
        .map(function (e) {
          return e.trim() === "" ? "unknown" : e;
        })
        .join(", ");
    }
    function p(e) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function _(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP,
        babelHelpers.extends({}, t, { hitlLegalLink: e }),
      );
    }
    function f(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_PAYMENT_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function g(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_CART_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function h(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_ORDER_SUMMARY_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function y(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_PICKER_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function C(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_CARD_SELECTED,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function b(e, t, n) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DECISION_TAP,
        babelHelpers.extends({}, n, {
          rawHitlAlwaysScope: t,
          rawHitlDecisionKind: e,
        }),
      );
    }
    var v = {
        card_impression: (e = o("WAWebWamEnumHatchActionType"))
          .HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CARD_IMPRESSION,
        card_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CARD_TAP,
        sheet_impression:
          e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SHEET_IMPRESSION,
        save_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_TAP,
        cancel_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CANCEL_TAP,
        save_success: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_SUCCESS,
        setting_page_tap:
          e.HATCH_ACTION_TYPE.SETTING_PAGE_SECURE_CREDENTIAL_TAP,
        list_impression: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_LIST_IMPRESSION,
        null_state_impression:
          e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_NULL_STATE_IMPRESSION,
        detail_impression:
          e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DETAIL_IMPRESSION,
        edit_save_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_EDIT_SAVE_TAP,
        delete_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_TAP,
        delete_confirm: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_CONFIRM,
        delete_cancel_tap:
          e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_CANCEL_TAP,
        delete_success: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_SUCCESS,
      },
      S = {
        chat: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.CHAT,
        settings: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT
          .SETTINGS,
      };
    function R(e, t) {
      E(v[e], { featureEntryPoint: S[t] });
    }
    function L(e, t) {
      E(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .SECURE_CREDENTIAL_SAVE_ERROR,
        {
          featureEntryPoint: S[t],
          hatchUserJourneyMetadata: JSON.stringify({
            secure_credential_failure_reason: e.reason,
            secure_credential_failure_reason_raw: e.raw,
          }),
        },
      );
    }
    function E(e, t) {
      var n, r, a, i, l;
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var s = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          featureEntryPoint: t == null ? void 0 : t.featureEntryPoint,
          hatchActionType: e,
          hatchUserJourneyMetadata:
            t == null ? void 0 : t.hatchUserJourneyMetadata,
          hitlIsMulti: t == null ? void 0 : t.hitlIsMulti,
          hitlLegalLink: t == null ? void 0 : t.hitlLegalLink,
          hitlTypes: t == null ? void 0 : t.hitlTypes,
          rawHitlAlwaysScope: t == null ? void 0 : t.rawHitlAlwaysScope,
          rawHitlDecisionKind: t == null ? void 0 : t.rawHitlDecisionKind,
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
              : k(t == null ? void 0 : t.botEntryPoint),
        });
        s.commit();
      }
    }
    function k(e) {
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
    ((l.logHatchRequestWelcomeMsgSent = s),
      (l.logHatchTapUnlinkButton = u),
      (l.logHatchUnlinkSuccess = c),
      (l.logHatchHitlBottomSheetImpression = d),
      (l.logHatchHitlDetailImpression = p),
      (l.logHatchHitlLegalLinkTap = _),
      (l.logHatchHitlPaymentDetailsImpression = f),
      (l.logHatchHitlCartDetailsImpression = g),
      (l.logHatchHitlOrderSummaryImpression = h),
      (l.logHatchHitlWalletPickerImpression = y),
      (l.logHatchHitlWalletCardSelected = C),
      (l.logHatchHitlDecisionTap = b),
      (l.logHatchSecureCredential = R),
      (l.logHatchSecureCredentialSaveError = L));
  },
  98,
);
