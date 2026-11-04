__d(
  "WAWebHatchLogging",
  [
    "ArtifactSharedFalcoEvent",
    "WALogger",
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchPermissionsFailureReason",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumConnectorPermissionFlow",
    "WAWebWamEnumConnectorType",
    "WAWebWamEnumFeatureEntryPoint",
    "WAWebWamEnumHatchActionType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      g(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_CARD_IMPRESSION,
        e,
        JSON.stringify({ browser_card_state: e.state }),
      );
    }
    function d(e) {
      var t = e.terminalReason,
        n = t != null && t.trim() !== "";
      g(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_CARD_IMPRESSION_ERROR,
        { isEligible: e.isEligible, taskID: e.taskID },
        n ? JSON.stringify({ browser_failure_reason: t }) : void 0,
      );
    }
    function m() {
      _(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_CARD_TAP);
    }
    function p(e) {
      _(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_TAKE_CONTROL_TAP,
        e,
      );
    }
    function _(e, t) {
      ne(e, {
        hatchUserJourneyMetadata:
          t != null ? JSON.stringify({ browser_surface: t }) : void 0,
      });
    }
    var f = new Map();
    function g(e, t, n) {
      var r,
        o = t.taskID.slice(t.taskID.lastIndexOf(":") + 1);
      if (!(!t.isEligible || o.trim() === "")) {
        var a = f.get(e);
        ((r = a) == null ? void 0 : r.has(o)) !== !0 &&
          ne(e, { hatchUserJourneyMetadata: n }) &&
          (a == null && ((a = new Set()), f.set(e, a)), a.add(o));
      }
    }
    function h(e) {
      try {
        ne(
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
    function y(e) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function C(e) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function b(e) {
      ne(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function v(e, t, n) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_BOTTOM_SHEET_IMPRESSION,
        babelHelpers.extends({}, n, { hitlIsMulti: e, hitlTypes: S(t) }),
      );
    }
    function S(e) {
      return e
        .map(function (e) {
          return e.trim() === "" ? "unknown" : e;
        })
        .join(", ");
    }
    function R(e) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function L(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP,
        babelHelpers.extends({}, t, { hitlLegalLink: e }),
      );
    }
    function E(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_PAYMENT_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function k(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_CART_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function I(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_ORDER_SUMMARY_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function T(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_PICKER_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function D(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_CARD_SELECTED,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function x(e, t, n) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DECISION_TAP,
        babelHelpers.extends({}, n, {
          rawHitlAlwaysScope: t,
          rawHitlDecisionKind: e,
        }),
      );
    }
    var $ = {
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
      P = {
        chat: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.CHAT,
        settings: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT
          .SETTINGS,
      },
      N = {
        chat: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
        settings: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE,
      };
    function M(e, t) {
      ne($[e], A(t));
    }
    function w(t, n) {
      try {
        ne(
          o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
            .SECURE_CREDENTIAL_SAVE_ERROR,
          babelHelpers.extends({}, A(n), {
            hatchUserJourneyMetadata: JSON.stringify({
              secure_credential_failure_reason: t.reason,
              secure_credential_failure_reason_raw: t.raw,
            }),
          }),
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
    function A(e) {
      return { featureEntryPoint: P[e], hatchSurface: N[e] };
    }
    var F = {
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
      O = {
        web: (u = o("WAWebWamEnumConnectorType")).CONNECTOR_TYPE.WEB,
        native: u.CONNECTOR_TYPE.NATIVE,
        device: u.CONNECTOR_TYPE.DEVICE,
        custom: u.CONNECTOR_TYPE.CUSTOM,
      },
      B = {
        new_auth_needed: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.NEW_AUTH_NEEDED,
        device: o("WAWebWamEnumConnectorPermissionFlow")
          .CONNECTOR_PERMISSION_FLOW.DEVICE,
      };
    function W(e, t) {
      if (o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
        var n = t == null ? void 0 : t.connectorType,
          r = t == null ? void 0 : t.permissionFlow;
        ne(F[e], {
          connectorId: t == null ? void 0 : t.connectorId,
          connectorPermissionDecisionType:
            t == null ? void 0 : t.permissionDecisionType,
          connectorPermissionFlow: r != null ? B[r] : void 0,
          connectorPermissionType: t == null ? void 0 : t.permissionType,
          connectorType: n != null ? O[n] : void 0,
        });
      }
    }
    var q = new Set();
    function U(e, t) {
      !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() ||
        q.has(e) ||
        (q.add(e), W("connect_message_impression", t));
    }
    var V = {
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
    function H(e, t) {
      ne(V[e], { featureEntryPoint: P[t] });
    }
    function G(e) {
      r("ArtifactSharedFalcoEvent").log(function () {
        return {
          ai_session_id: o(
            "WAWebThreadJourneyLogger",
          ).ThreadJourneyLogger.getAiSessionId(),
          feature_entry_point: e,
        };
      });
    }
    function z(e, t) {
      ne(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .ARTIFACT_OVERFLOW_MENU_TAP,
        {
          featureEntryPoint: P[t],
          hatchUserJourneyMetadata: JSON.stringify({ share_gate: e }),
        },
      );
    }
    function j(e) {
      try {
        ne(
          e.outcome === "success"
            ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                .SUBSCRIPTION_READ_SUCCESS
            : o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                .SUBSCRIPTION_READ_ERROR,
          {
            hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE,
            hatchUserJourneyMetadata: JSON.stringify(K(e)),
          },
        );
      } catch (e) {}
    }
    function K(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.outcome === "success" &&
          e.isTopUpUnreadable === !0 &&
          "source" in e
        ) {
          var t = e.source;
          return {
            subscription_read_source: t,
            subscription_topup_unreadable: !0,
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.outcome === "success" &&
          e.isTopUpUnreadable === !1 &&
          "source" in e
        ) {
          var n = e.source;
          return { subscription_read_source: n };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.outcome === "error" &&
          "reason" in e &&
          "source" in e
        ) {
          var r = e.reason,
            o = e.source;
          return {
            subscription_failure_reason: r,
            subscription_read_source: o,
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    var Q = {
        category_tap: s.HATCH_ACTION_TYPE.PERMISSION_CATEGORY_TAP,
        default_selected: s.HATCH_ACTION_TYPE.PERMISSION_DEFAULT_SELECTED,
        granular_mode_selected:
          s.HATCH_ACTION_TYPE.GRANULAR_PERMISSION_MODE_SELECTED,
        impression: s.HATCH_ACTION_TYPE.PERMISSIONS_IMPRESSION,
        reset_confirm_tap: s.HATCH_ACTION_TYPE.PERMISSIONS_RESET_CONFIRM_TAP,
        reset_tap: s.HATCH_ACTION_TYPE.PERMISSIONS_RESET_TAP,
        update_error: s.HATCH_ACTION_TYPE.PERMISSION_UPDATE_ERROR,
      },
      X = {
        connector: "connector",
        protocol: "protocol",
        schedule: "scheduled_task",
        space: "space",
        website: "website",
      },
      Y = {
        connector_default: "connector_default",
        network_default: "web_access_default",
      };
    function J(e) {
      try {
        if (Z(e)) return;
        ne(Q[e.action], {
          featureEntryPoint:
            e.action === "impression"
              ? o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.SETTINGS
              : void 0,
          hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PERMISSIONS_HATCH,
          hatchUserJourneyMetadata: te(ee(e)),
        });
      } catch (e) {}
    }
    function Z(e) {
      return (
        e.action === "update_error" &&
        o("WAWebHatchPermissionsFailureReason").hatchPermissionsFailureReason(
          e.result,
        ) == null
      );
    }
    function ee(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "impression" &&
          "settings" in e &&
          (e.settings === null || e.settings === void 0)
        )
          return { list_state: "error" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "impression" &&
          "settings" in e
        ) {
          var t = e.settings;
          return {
            connector_default: t.connectorDefault,
            list_state: "has_items",
            web_access_default: t.networkDefault,
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "default_selected" &&
          "field" in e &&
          "mode" in e
        ) {
          var n = e.field,
            r = e.mode;
          return { permission_field: Y[n], permission_mode: r };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "category_tap" &&
          "owner" in e
        ) {
          var a = e.owner;
          return { permission_owner: X[a] };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "granular_mode_selected" &&
          "mode" in e &&
          "owner" in e
        ) {
          var i = e.mode,
            l = e.owner;
          return { permission_mode: i, permission_owner: X[l] };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.action === "reset_tap" || e.action === "reset_confirm_tap")
        )
          return {};
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "update_error" &&
          "result" in e &&
          "updateType" in e
        ) {
          var s = e.result,
            u = e.updateType;
          return {
            failure_reason: o(
              "WAWebHatchPermissionsFailureReason",
            ).hatchPermissionsFailureReason(s),
            update_type: u,
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function te(e) {
      var t = Object.keys(e)
        .filter(function (t) {
          return e[t] != null;
        })
        .sort();
      return t.length === 0
        ? void 0
        : JSON.stringify(
            Object.fromEntries(
              t.map(function (t) {
                return [t, e[t]];
              }),
            ),
          );
    }
    function ne(e, t) {
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
          hatchSurface: t == null ? void 0 : t.hatchSurface,
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
              : re(t == null ? void 0 : t.botEntryPoint),
        },
      );
      return (s.commit(), !0);
    }
    function re(e) {
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
    ((l.logHatchBrowserCardImpression = c),
      (l.logHatchBrowserCardImpressionError = d),
      (l.logHatchBrowserCardTap = m),
      (l.logHatchBrowserTakeControlTap = p),
      (l.logHatchBrowserActionType = _),
      (l.logHatchIdeaAction = h),
      (l.logHatchRequestWelcomeMsgSent = y),
      (l.logHatchTapUnlinkButton = C),
      (l.logHatchUnlinkSuccess = b),
      (l.logHatchHitlBottomSheetImpression = v),
      (l.logHatchHitlDetailImpression = R),
      (l.logHatchHitlLegalLinkTap = L),
      (l.logHatchHitlPaymentDetailsImpression = E),
      (l.logHatchHitlCartDetailsImpression = k),
      (l.logHatchHitlOrderSummaryImpression = I),
      (l.logHatchHitlWalletPickerImpression = T),
      (l.logHatchHitlWalletCardSelected = D),
      (l.logHatchHitlDecisionTap = x),
      (l.logHatchSecureCredential = M),
      (l.logHatchSecureCredentialSaveError = w),
      (l.logHatchConnector = W),
      (l.logHatchConnectorCardImpression = U),
      (l.logHatchArtifact = H),
      (l.logHatchArtifactShared = G),
      (l.logHatchArtifactMenuOpened = z),
      (l.logHatchSubscriptionRead = j),
      (l.logHatchPermission = J));
  },
  98,
);
