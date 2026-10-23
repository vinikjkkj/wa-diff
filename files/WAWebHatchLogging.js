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
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_CARD_IMPRESSION,
        e,
        JSON.stringify({ browser_card_state: e.state }),
      );
    }
    function u(e) {
      var t = e.terminalReason,
        n = t != null && t.trim() !== "";
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_CARD_IMPRESSION_ERROR,
        { isEligible: e.isEligible, taskID: e.taskID },
        n ? JSON.stringify({ browser_failure_reason: t }) : void 0,
      );
    }
    function c() {
      m(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_CARD_TAP);
    }
    function d(e) {
      m(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_TAKE_CONTROL_TAP,
        e,
      );
    }
    function m(e, t) {
      q(e, {
        hatchUserJourneyMetadata:
          t != null ? JSON.stringify({ browser_surface: t }) : void 0,
      });
    }
    var p = new Map();
    function _(e, t, n) {
      var r,
        o = t.taskID.slice(t.taskID.lastIndexOf(":") + 1);
      if (!(!t.isEligible || o.trim() === "")) {
        var a = p.get(e);
        ((r = a) == null ? void 0 : r.has(o)) !== !0 &&
          q(e, { hatchUserJourneyMetadata: n }) &&
          (a == null && ((a = new Set()), p.set(e, a)), a.add(o));
      }
    }
    function f(e) {
      try {
        q(
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
    function g(e) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function h(e) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function y(e) {
      q(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function C(e, t, n) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_BOTTOM_SHEET_IMPRESSION,
        babelHelpers.extends({}, n, { hitlIsMulti: e, hitlTypes: b(t) }),
      );
    }
    function b(e) {
      return e
        .map(function (e) {
          return e.trim() === "" ? "unknown" : e;
        })
        .join(", ");
    }
    function v(e) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function S(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP,
        babelHelpers.extends({}, t, { hitlLegalLink: e }),
      );
    }
    function R(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_PAYMENT_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: b([e]) }),
      );
    }
    function L(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_CART_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: b([e]) }),
      );
    }
    function E(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_ORDER_SUMMARY_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: b([e]) }),
      );
    }
    function k(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_PICKER_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: b([e]) }),
      );
    }
    function I(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_CARD_SELECTED,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: b([e]) }),
      );
    }
    function T(e, t, n) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DECISION_TAP,
        babelHelpers.extends({}, n, {
          rawHitlAlwaysScope: t,
          rawHitlDecisionKind: e,
        }),
      );
    }
    var D = {
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
      x = {
        chat: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.CHAT,
        settings: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT
          .SETTINGS,
      };
    function $(e, t) {
      q(D[e], { featureEntryPoint: x[t] });
    }
    function P(e, t) {
      q(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .SECURE_CREDENTIAL_SAVE_ERROR,
        {
          featureEntryPoint: x[t],
          hatchUserJourneyMetadata: JSON.stringify({
            secure_credential_failure_reason: e.reason,
            secure_credential_failure_reason_raw: e.raw,
          }),
        },
      );
    }
    var N = {
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
      M = {
        web: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.WEB,
        device: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.DEVICE,
        custom: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.CUSTOM,
      },
      w = {
        new_auth_needed: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.NEW_AUTH_NEEDED,
        device: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.DEVICE,
      };
    function A(e, t) {
      if (o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
        var n = t == null ? void 0 : t.connectorType,
          r = t == null ? void 0 : t.permissionFlow;
        q(N[e], {
          connectorId: t == null ? void 0 : t.connectorId,
          connectorPermissionDecisionType:
            t == null ? void 0 : t.permissionDecisionType,
          connectorPermissionFlow: r != null ? w[r] : void 0,
          connectorPermissionType: t == null ? void 0 : t.permissionType,
          connectorType: n != null ? M[n] : void 0,
        });
      }
    }
    var F = new Set();
    function O(e, t) {
      !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() ||
        F.has(e) ||
        (F.add(e), A("connect_message_impression", t));
    }
    var B = {
      muse_library_tap: e.HATCH_ACTION_TYPE.MUSE_LIBRARY_TAP,
      muse_library_artifact_tab_tap:
        e.HATCH_ACTION_TYPE.MUSE_LIBRARY_ARTIFACT_TAB_TAP,
      muse_library_artifact_tab_impression:
        e.HATCH_ACTION_TYPE.MUSE_LIBRARY_ARTIFACT_TAB_IMPRESSION,
      artifact_tap: e.HATCH_ACTION_TYPE.ARTIFACT_TAP,
      artifact_impression: e.HATCH_ACTION_TYPE.ARTIFACT_IMPRESSION,
      artifact_overflow_menu_tap:
        e.HATCH_ACTION_TYPE.ARTIFACT_OVERFLOW_MENU_TAP,
      artifact_download_tap: e.HATCH_ACTION_TYPE.ARTIFACT_DOWNLOAD_TAP,
      artifact_rename_tap: e.HATCH_ACTION_TYPE.ARTIFACT_RENAME_TAP,
      artifact_pin_tap: e.HATCH_ACTION_TYPE.ARTIFACT_PIN_TAP,
      artifact_delete_tap: e.HATCH_ACTION_TYPE.ARTIFACT_DELETE_TAP,
      artifact_share_tap: e.HATCH_ACTION_TYPE.ARTIFACT_SHARE_TAP,
      artifact_delete_confirm_tap:
        e.HATCH_ACTION_TYPE.ARTIFACT_DELETE_CONFIRM_TAP,
      artifact_delete_cancel_tap:
        e.HATCH_ACTION_TYPE.ARTIFACT_DELETE_CANCEL_TAP,
      artifact_deleted: e.HATCH_ACTION_TYPE.ARTIFACT_DELETED,
      artifact_publish_sheet_impression:
        e.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_SHEET_IMPRESSION,
      artifact_publish_tap: e.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_TAP,
      artifact_publish_consent_impression:
        e.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_CONSENT_IMPRESSION,
      artifact_publish_consent_tap:
        e.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_CONSENT_TAP,
      artifact_publish_consent_cancel:
        e.HATCH_ACTION_TYPE.ARTIFACT_PUBLISH_CONSENT_CANCEL,
      artifact_share_sheet_impression:
        e.HATCH_ACTION_TYPE.ARTIFACT_SHARE_SHEET_IMPRESSION,
      artifact_share_sheet_tap: e.HATCH_ACTION_TYPE.ARTIFACT_SHARE_SHEET_TAP,
      artifact_share_sheet_unpublish:
        e.HATCH_ACTION_TYPE.ARTIFACT_SHARE_SHEET_UNPUBLISH,
      artifact_forward_sheet_impression:
        e.HATCH_ACTION_TYPE.ARTIFACT_FORWARD_SHEET_IMPRESSION,
      artifact_downloaded: e.HATCH_ACTION_TYPE.ARTIFACT_DOWNLOADED,
      artifact_renamed: e.HATCH_ACTION_TYPE.ARTIFACT_RENAMED,
      artifact_pinned: e.HATCH_ACTION_TYPE.ARTIFACT_PINNED,
    };
    function W(e, t) {
      q(B[e], { featureEntryPoint: x[t] });
    }
    function q(e, t) {
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
              : U(t == null ? void 0 : t.botEntryPoint),
        },
      );
      return (s.commit(), !0);
    }
    function U(e) {
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
    ((l.logHatchBrowserCardImpression = s),
      (l.logHatchBrowserCardImpressionError = u),
      (l.logHatchBrowserCardTap = c),
      (l.logHatchBrowserTakeControlTap = d),
      (l.logHatchBrowserActionType = m),
      (l.logHatchIdeaAction = f),
      (l.logHatchRequestWelcomeMsgSent = g),
      (l.logHatchTapUnlinkButton = h),
      (l.logHatchUnlinkSuccess = y),
      (l.logHatchHitlBottomSheetImpression = C),
      (l.logHatchHitlDetailImpression = v),
      (l.logHatchHitlLegalLinkTap = S),
      (l.logHatchHitlPaymentDetailsImpression = R),
      (l.logHatchHitlCartDetailsImpression = L),
      (l.logHatchHitlOrderSummaryImpression = E),
      (l.logHatchHitlWalletPickerImpression = k),
      (l.logHatchHitlWalletCardSelected = I),
      (l.logHatchHitlDecisionTap = T),
      (l.logHatchSecureCredential = $),
      (l.logHatchSecureCredentialSaveError = P),
      (l.logHatchConnector = A),
      (l.logHatchConnectorCardImpression = O),
      (l.logHatchArtifact = W));
  },
  98,
);
