__d(
  "WAWebHatchLogging",
  [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumConnectorPermissionFlow",
    "WAWebWamEnumConnectorType",
    "WAWebWamEnumFeatureEntryPoint",
    "WAWebWamEnumHatchActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function u(e) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function c(e) {
      $(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function d(e, t, n) {
      $(
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
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function _(e, t) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP,
        babelHelpers.extends({}, t, { hitlLegalLink: e }),
      );
    }
    function f(e, t) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_PAYMENT_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function g(e, t) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_CART_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function h(e, t) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_ORDER_SUMMARY_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function y(e, t) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_PICKER_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function C(e, t) {
      $(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_CARD_SELECTED,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: m([e]) }),
      );
    }
    function b(e, t, n) {
      $(
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
      $(v[e], { featureEntryPoint: S[t] });
    }
    function L(e, t) {
      $(
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
    var E = {
        connect_message_impression:
          e.HATCH_ACTION_TYPE.CONNECTOR_CONNECT_MESSAGE_IMPRESSION,
        connect_message_tapped:
          e.HATCH_ACTION_TYPE.CONNECTOR_CONNECT_MESSAGE_TAPPED,
        bottom_sheet_impression:
          e.HATCH_ACTION_TYPE.CONNECTOR_BOTTOM_SHEET_IMPRESSION,
        bottom_sheet_connect_tap:
          e.HATCH_ACTION_TYPE.CONNECTOR_BOTTOM_SHEET_CONNECT_TAP,
        cancel_tap: e.HATCH_ACTION_TYPE.CONNECTOR_CANCEL_TAP,
        auth_web_start: e.HATCH_ACTION_TYPE.CONNECTOR_AUTH_WEB_START,
        auth_success: e.HATCH_ACTION_TYPE.CONNECTOR_AUTH_SUCCESS,
        auth_error: e.HATCH_ACTION_TYPE.CONNECTOR_AUTH_ERROR,
        connectors_tap: e.HATCH_ACTION_TYPE.CONNECTORS_TAP,
        connect_tap: e.HATCH_ACTION_TYPE.CONNECT_TAP,
        add_account_tap: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_TAP,
        add_account_web_start:
          e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_WEB_START,
        add_account_success: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_SUCCESS,
        add_account_error: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_ERROR,
        search_tap: e.HATCH_ACTION_TYPE.CONNECTOR_SEARCH_TAP,
        search_success: e.HATCH_ACTION_TYPE.CONNECTOR_SEARCH_SUCCESS,
        permission_tap: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_TAP,
        permission_web_start:
          e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_WEB_START,
        permission_success: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_SUCCESS,
        permission_error: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_ERROR,
        permission_decision_tap:
          e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_DECISION_TAP,
        permission_impression:
          e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_IMPRESSION,
        legal_link_tap: e.HATCH_ACTION_TYPE.CONNECTOR_LEGAL_LINK_TAP,
        disconnect_tap: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_TAP,
        disconnect_success: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_SUCCESS,
        disconnect_error: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_ERROR,
        disconnect_bottom_sheet_impression:
          e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_BOTTOM_SHEET_IMPRESSION,
        disconnect_confirm_tap:
          e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_CONFIRM_TAP,
        disconnect_cancel_tap:
          e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_CANCEL_TAP,
      },
      k = {
        web: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.WEB,
        device: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.DEVICE,
        custom: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.CUSTOM,
      },
      I = {
        new_auth_needed: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.NEW_AUTH_NEEDED,
        device: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.DEVICE,
      };
    function T(e, t) {
      if (o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
        var n = t == null ? void 0 : t.connectorType,
          r = t == null ? void 0 : t.permissionFlow;
        $(E[e], {
          connectorId: t == null ? void 0 : t.connectorId,
          connectorPermissionDecisionType:
            t == null ? void 0 : t.permissionDecisionType,
          connectorPermissionFlow: r != null ? I[r] : void 0,
          connectorPermissionType: t == null ? void 0 : t.permissionType,
          connectorType: n != null ? k[n] : void 0,
        });
      }
    }
    var D = new Set();
    function x(e, t) {
      !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() ||
        D.has(e) ||
        (D.add(e), T("connect_message_impression", t));
    }
    function $(e, t) {
      var n, r, a, i, l;
      if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
        var s = new (o(
          "WAWebHatchUserJourneyWamEvent",
        ).HatchUserJourneyWamEvent)({
          connectorId: t == null ? void 0 : t.connectorId,
          connectorPermissionDecisionType:
            t == null ? void 0 : t.connectorPermissionDecisionType,
          connectorPermissionFlow:
            t == null ? void 0 : t.connectorPermissionFlow,
          connectorPermissionType:
            t == null ? void 0 : t.connectorPermissionType,
          connectorType: t == null ? void 0 : t.connectorType,
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
              : P(t == null ? void 0 : t.botEntryPoint),
        });
        s.commit();
      }
    }
    function P(e) {
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
      (l.logHatchSecureCredentialSaveError = L),
      (l.logHatchConnector = T),
      (l.logHatchConnectorCardImpression = x));
  },
  98,
);
