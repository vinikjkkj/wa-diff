__d(
  "WAWebHatchLogging",
  [
    "WALogger",
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
    var e, s;
    function u(e) {
      f(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_CARD_IMPRESSION,
        e,
        JSON.stringify({ browser_card_state: e.state }),
      );
    }
    function c(e) {
      var t = e.terminalReason,
        n = t != null && t.trim() !== "";
      f(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_CARD_IMPRESSION_ERROR,
        { isEligible: e.isEligible, taskID: e.taskID },
        n ? JSON.stringify({ browser_failure_reason: t }) : void 0,
      );
    }
    function d() {
      p(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_CARD_TAP);
    }
    function m(e) {
      p(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_TAKE_CONTROL_TAP,
        e,
      );
    }
    function p(e, t) {
      U(e, {
        hatchUserJourneyMetadata:
          t != null ? JSON.stringify({ browser_surface: t }) : void 0,
      });
    }
    var _ = new Map();
    function f(e, t, n) {
      var r,
        o = t.taskID.slice(t.taskID.lastIndexOf(":") + 1);
      if (!(!t.isEligible || o.trim() === "")) {
        var a = _.get(e);
        ((r = a) == null ? void 0 : r.has(o)) !== !0 &&
          U(e, { hatchUserJourneyMetadata: n }) &&
          (a == null && ((a = new Set()), _.set(e, a)), a.add(o));
      }
    }
    function g(e) {
      try {
        U(
          e === "surface_impression"
            ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                .IDEA_SURFACE_IMPRESSION
            : e === "card_tap"
              ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.IDEA_CARD_TAP
              : e === "task_confirm_tap"
                ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                    .IDEA_TASK_CONFIRM_TAP
                : e === "prompt_sent"
                  ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                      .IDEA_PROMPT_SENT
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })(),
        );
      } catch (e) {}
    }
    function h(e) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function y(e) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function C(e) {
      U(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function b(e, t, n) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_BOTTOM_SHEET_IMPRESSION,
        babelHelpers.extends({}, n, { hitlIsMulti: e, hitlTypes: v(t) }),
      );
    }
    function v(e) {
      return e
        .map(function (e) {
          return e.trim() === "" ? "unknown" : e;
        })
        .join(", ");
    }
    function S(e) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function R(e, t) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP,
        babelHelpers.extends({}, t, { hitlLegalLink: e }),
      );
    }
    function L(e, t) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_PAYMENT_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: v([e]) }),
      );
    }
    function E(e, t) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_CART_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: v([e]) }),
      );
    }
    function k(e, t) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_ORDER_SUMMARY_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: v([e]) }),
      );
    }
    function I(e, t) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_PICKER_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: v([e]) }),
      );
    }
    function T(e, t) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_CARD_SELECTED,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: v([e]) }),
      );
    }
    function D(e, t, n) {
      U(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DECISION_TAP,
        babelHelpers.extends({}, n, {
          rawHitlAlwaysScope: t,
          rawHitlDecisionKind: e,
        }),
      );
    }
    var x = {
        card_impression: (s = o("WAWebWamEnumHatchActionType"))
          .HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CARD_IMPRESSION,
        card_tap: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CARD_TAP,
        sheet_impression:
          s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SHEET_IMPRESSION,
        save_tap: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_TAP,
        cancel_tap: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CANCEL_TAP,
        save_success: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_SUCCESS,
        setting_page_tap:
          s.HATCH_ACTION_TYPE.SETTING_PAGE_SECURE_CREDENTIAL_TAP,
        list_impression: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_LIST_IMPRESSION,
        null_state_impression:
          s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_NULL_STATE_IMPRESSION,
        detail_impression:
          s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DETAIL_IMPRESSION,
        edit_save_tap: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_EDIT_SAVE_TAP,
        delete_tap: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_TAP,
        delete_confirm: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_CONFIRM,
        delete_cancel_tap:
          s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_CANCEL_TAP,
        delete_success: s.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_SUCCESS,
      },
      $ = {
        chat: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.CHAT,
        settings: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT
          .SETTINGS,
      };
    function P(e, t) {
      U(x[e], { featureEntryPoint: $[t] });
    }
    function N(t, n) {
      try {
        U(
          o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
            .SECURE_CREDENTIAL_SAVE_ERROR,
          {
            featureEntryPoint: $[n],
            hatchUserJourneyMetadata: JSON.stringify({
              secure_credential_failure_reason: t.reason,
              secure_credential_failure_reason_raw: t.raw,
            }),
          },
        );
      } catch (t) {
        try {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-secure-credentials: save error logging failed",
              ])),
          );
        } catch (e) {}
      }
    }
    var M = {
        connect_message_impression:
          s.HATCH_ACTION_TYPE.CONNECTOR_CONNECT_MESSAGE_IMPRESSION,
        connect_message_tapped:
          s.HATCH_ACTION_TYPE.CONNECTOR_CONNECT_MESSAGE_TAPPED,
        bottom_sheet_impression:
          s.HATCH_ACTION_TYPE.CONNECTOR_BOTTOM_SHEET_IMPRESSION,
        bottom_sheet_connect_tap:
          s.HATCH_ACTION_TYPE.CONNECTOR_BOTTOM_SHEET_CONNECT_TAP,
        cancel_tap: s.HATCH_ACTION_TYPE.CONNECTOR_CANCEL_TAP,
        auth_web_start: s.HATCH_ACTION_TYPE.CONNECTOR_AUTH_WEB_START,
        auth_success: s.HATCH_ACTION_TYPE.CONNECTOR_AUTH_SUCCESS,
        auth_error: s.HATCH_ACTION_TYPE.CONNECTOR_AUTH_ERROR,
        connectors_tap: s.HATCH_ACTION_TYPE.CONNECTORS_TAP,
        connect_tap: s.HATCH_ACTION_TYPE.CONNECT_TAP,
        add_account_tap: s.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_TAP,
        add_account_web_start:
          s.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_WEB_START,
        add_account_success: s.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_SUCCESS,
        add_account_error: s.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_ERROR,
        search_tap: s.HATCH_ACTION_TYPE.CONNECTOR_SEARCH_TAP,
        search_success: s.HATCH_ACTION_TYPE.CONNECTOR_SEARCH_SUCCESS,
        permission_tap: s.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_TAP,
        permission_web_start:
          s.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_WEB_START,
        permission_success: s.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_SUCCESS,
        permission_error: s.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_ERROR,
        permission_decision_tap:
          s.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_DECISION_TAP,
        permission_impression:
          s.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_IMPRESSION,
        legal_link_tap: s.HATCH_ACTION_TYPE.CONNECTOR_LEGAL_LINK_TAP,
        disconnect_tap: s.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_TAP,
        disconnect_success: s.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_SUCCESS,
        disconnect_error: s.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_ERROR,
        disconnect_bottom_sheet_impression:
          s.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_BOTTOM_SHEET_IMPRESSION,
        disconnect_confirm_tap:
          s.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_CONFIRM_TAP,
        disconnect_cancel_tap:
          s.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_CANCEL_TAP,
      },
      w = {
        web: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.WEB,
        device: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.DEVICE,
        custom: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.CUSTOM,
      },
      A = {
        new_auth_needed: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.NEW_AUTH_NEEDED,
        device: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.DEVICE,
      };
    function F(e, t) {
      if (o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
        var n = t == null ? void 0 : t.connectorType,
          r = t == null ? void 0 : t.permissionFlow;
        U(M[e], {
          connectorId: t == null ? void 0 : t.connectorId,
          connectorPermissionDecisionType:
            t == null ? void 0 : t.permissionDecisionType,
          connectorPermissionFlow: r != null ? A[r] : void 0,
          connectorPermissionType: t == null ? void 0 : t.permissionType,
          connectorType: n != null ? w[n] : void 0,
        });
      }
    }
    var O = new Set();
    function B(e, t) {
      !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() ||
        O.has(e) ||
        (O.add(e), F("connect_message_impression", t));
    }
    var W = {
      muse_library_tap: s.HATCH_ACTION_TYPE.MUSE_LIBRARY_TAP,
      muse_library_artifact_tab_tap:
        s.HATCH_ACTION_TYPE.MUSE_LIBRARY_ARTIFACT_TAB_TAP,
      muse_library_artifact_tab_impression:
        s.HATCH_ACTION_TYPE.MUSE_LIBRARY_ARTIFACT_TAB_IMPRESSION,
      artifact_tap: s.HATCH_ACTION_TYPE.ARTIFACT_TAP,
      artifact_impression: s.HATCH_ACTION_TYPE.ARTIFACT_IMPRESSION,
      artifact_overflow_menu_tap:
        s.HATCH_ACTION_TYPE.ARTIFACT_OVERFLOW_MENU_TAP,
      artifact_download_tap: s.HATCH_ACTION_TYPE.ARTIFACT_DOWNLOAD_TAP,
      artifact_rename_tap: s.HATCH_ACTION_TYPE.ARTIFACT_RENAME_TAP,
      artifact_pin_tap: s.HATCH_ACTION_TYPE.ARTIFACT_PIN_TAP,
      artifact_delete_tap: s.HATCH_ACTION_TYPE.ARTIFACT_DELETE_TAP,
      artifact_share_tap: s.HATCH_ACTION_TYPE.ARTIFACT_SHARE_TAP,
      artifact_delete_confirm_tap:
        s.HATCH_ACTION_TYPE.ARTIFACT_DELETE_CONFIRM_TAP,
      artifact_delete_cancel_tap:
        s.HATCH_ACTION_TYPE.ARTIFACT_DELETE_CANCEL_TAP,
      artifact_deleted: s.HATCH_ACTION_TYPE.ARTIFACT_DELETED,
      artifact_publish_sheet_impression:
        s.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_SHEET_IMPRESSION,
      artifact_publish_tap: s.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_TAP,
      artifact_publish_consent_impression:
        s.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_CONSENT_IMPRESSION,
      artifact_publish_consent_tap:
        s.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_CONSENT_TAP,
      artifact_publish_consent_cancel:
        s.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_CONSENT_CANCEL,
      artifact_share_sheet_impression:
        s.HATCH_ACTION_TYPE.ARTIFACT_SHARE_SHEET_IMPRESSION,
      artifact_share_sheet_tap: s.HATCH_ACTION_TYPE.ARTIFACT_SHARE_SHEET_TAP,
      artifact_share_sheet_unpublish:
        s.HATCH_ACTION_TYPE.ARTIFACT_SHARE_SHEET_UNPUBLISH,
      artifact_forward_sheet_impression:
        s.HATCH_ACTION_TYPE.ARTIFACT_FORWARD_SHEET_IMPRESSION,
      artifact_downloaded: s.HATCH_ACTION_TYPE.ARTIFACT_DOWNLOADED,
      artifact_renamed: s.HATCH_ACTION_TYPE.ARTIFACT_RENAMED,
      artifact_pinned: s.HATCH_ACTION_TYPE.ARTIFACT_PINNED,
    };
    function q(e, t) {
      U(W[e], { featureEntryPoint: $[t] });
    }
    function U(e, t) {
      var n, r, a, i, l;
      if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) return !1;
      var s = new (o("WAWebHatchUserJourneyWamEvent").HatchUserJourneyWamEvent)(
        {
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
              : V(t == null ? void 0 : t.botEntryPoint),
        },
      );
      return (s.commit(), !0);
    }
    function V(e) {
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
    ((l.logHatchBrowserCardImpression = u),
      (l.logHatchBrowserCardImpressionError = c),
      (l.logHatchBrowserCardTap = d),
      (l.logHatchBrowserTakeControlTap = m),
      (l.logHatchBrowserActionType = p),
      (l.logHatchIdeaAction = g),
      (l.logHatchRequestWelcomeMsgSent = h),
      (l.logHatchTapUnlinkButton = y),
      (l.logHatchUnlinkSuccess = C),
      (l.logHatchHitlBottomSheetImpression = b),
      (l.logHatchHitlDetailImpression = S),
      (l.logHatchHitlLegalLinkTap = R),
      (l.logHatchHitlPaymentDetailsImpression = L),
      (l.logHatchHitlCartDetailsImpression = E),
      (l.logHatchHitlOrderSummaryImpression = k),
      (l.logHatchHitlWalletPickerImpression = I),
      (l.logHatchHitlWalletCardSelected = T),
      (l.logHatchHitlDecisionTap = D),
      (l.logHatchSecureCredential = P),
      (l.logHatchSecureCredentialSaveError = N),
      (l.logHatchConnector = F),
      (l.logHatchConnectorCardImpression = B),
      (l.logHatchArtifact = q));
  },
  98,
);
