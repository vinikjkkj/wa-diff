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
      me(e, {
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
          me(e, { hatchUserJourneyMetadata: n }) &&
          (a == null && ((a = new Set()), f.set(e, a)), a.add(o));
      }
    }
    function h(e) {
      try {
        me(
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
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .REQUEST_WELCOME_MSG_SENT,
        e,
      );
    }
    function C(e) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON,
        e,
      );
    }
    function b(e) {
      me(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function v(e, t, n) {
      me(
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
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_DETAIL_IMPRESSION,
        babelHelpers.extends({}, e, { hitlIsMulti: !1 }),
      );
    }
    function L(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP,
        babelHelpers.extends({}, t, { hitlLegalLink: e }),
      );
    }
    function E(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_PAYMENT_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function k(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_CART_DETAILS_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function I(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_ORDER_SUMMARY_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function T(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_PICKER_IMPRESSION,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function D(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .HITL_WALLET_CARD_SELECTED,
        babelHelpers.extends({}, t, { hitlIsMulti: !1, hitlTypes: S([e]) }),
      );
    }
    function x(e, t, n) {
      me(
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
    function M(e, t, n) {
      me($[e], A(t, n));
    }
    function w(t, n, r) {
      try {
        me(
          o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
            .SECURE_CREDENTIAL_SAVE_ERROR,
          babelHelpers.extends({}, A(n, r), {
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
    function A(e, t) {
      var n = { featureEntryPoint: P[e], hatchSurface: N[e] };
      return (
        (t == null ? void 0 : t.kind) === "custom_connector" &&
          ((n.connectorType = o(
            "WAWebWamEnumConnectorType",
          ).CONNECTOR_TYPE.CUSTOM),
          t.connectorId != null && (n.connectorId = t.connectorId)),
        n
      );
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
        me(F[e], {
          connectorId: t == null ? void 0 : t.connectorId,
          connectorPermissionDecisionType:
            t == null ? void 0 : t.permissionDecisionType,
          connectorPermissionFlow: r != null ? B[r] : void 0,
          connectorPermissionType: t == null ? void 0 : t.permissionType,
          connectorType: n != null ? O[n] : void 0,
          featureEntryPoint:
            (t == null ? void 0 : t.featureEntryPoint) != null
              ? P[t.featureEntryPoint]
              : void 0,
          hatchUserJourneyMetadata: q(
            t == null ? void 0 : t.failure,
            t == null ? void 0 : t.entry,
          ),
        });
      }
    }
    function q(e, t) {
      if (!(e == null && t == null)) {
        var n = {};
        return (
          e != null &&
            ((n.connector_failure_reason = e.reason),
            (n.connector_failure_reason_raw =
              e.httpStatus != null ? e.reason + "." + e.httpStatus : e.reason)),
          t != null && (n.connector_entry = t),
          JSON.stringify(n)
        );
      }
    }
    var U = new Set();
    function V(e, t) {
      !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() ||
        U.has(e) ||
        (U.add(e), W("connect_message_impression", t));
    }
    var H = {
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
    function G(e, t) {
      me(H[e], { featureEntryPoint: P[t] });
    }
    function z(e) {
      r("ArtifactSharedFalcoEvent").log(function () {
        return {
          ai_session_id: o(
            "WAWebThreadJourneyLogger",
          ).ThreadJourneyLogger.getAiSessionId(),
          feature_entry_point: e,
        };
      });
    }
    function j(e, t) {
      me(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .ARTIFACT_OVERFLOW_MENU_TAP,
        {
          featureEntryPoint: P[t],
          hatchUserJourneyMetadata: JSON.stringify({ share_gate: e }),
        },
      );
    }
    function K(e) {
      try {
        me(
          e.outcome === "success"
            ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                .SUBSCRIPTION_READ_SUCCESS
            : o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
                .SUBSCRIPTION_READ_ERROR,
          {
            hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE,
            hatchUserJourneyMetadata: JSON.stringify(Q(e)),
          },
        );
      } catch (e) {}
    }
    function Q(e) {
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
    var X = {
        category_tap: s.HATCH_ACTION_TYPE.PERMISSION_CATEGORY_TAP,
        default_selected: s.HATCH_ACTION_TYPE.PERMISSION_DEFAULT_SELECTED,
        granular_mode_selected:
          s.HATCH_ACTION_TYPE.GRANULAR_PERMISSION_MODE_SELECTED,
        impression: s.HATCH_ACTION_TYPE.PERMISSIONS_IMPRESSION,
        reset_confirm_tap: s.HATCH_ACTION_TYPE.PERMISSIONS_RESET_CONFIRM_TAP,
        reset_tap: s.HATCH_ACTION_TYPE.PERMISSIONS_RESET_TAP,
        update_error: s.HATCH_ACTION_TYPE.PERMISSION_UPDATE_ERROR,
      },
      Y = {
        connector: "connector",
        protocol: "protocol",
        schedule: "scheduled_task",
        space: "space",
        website: "website",
      },
      J = {
        connector_default: "connector_default",
        network_default: "web_access_default",
      };
    function Z(e) {
      try {
        if (ee(e)) return;
        me(X[e.action], {
          featureEntryPoint:
            e.action === "impression"
              ? o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.SETTINGS
              : void 0,
          hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PERMISSIONS_HATCH,
          hatchUserJourneyMetadata: ae(te(e)),
        });
      } catch (e) {}
    }
    function ee(e) {
      return (
        e.action === "update_error" &&
        o("WAWebHatchPermissionsFailureReason").hatchPermissionsFailureReason(
          e.result,
        ) == null
      );
    }
    function te(e) {
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
          return { permission_field: J[n], permission_mode: r };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "category_tap" &&
          "owner" in e
        ) {
          var a = e.owner;
          return { permission_owner: Y[a] };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "granular_mode_selected" &&
          "mode" in e &&
          "owner" in e
        ) {
          var i = e.mode,
            l = e.owner;
          return { permission_mode: i, permission_owner: Y[l] };
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
    var ne = {
      delete_cancel_tap: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_DELETE_CANCEL_TAP,
      delete_confirm_tap: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_DELETE_CONFIRM_TAP,
      delete_error: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_DELETE_ERROR,
      delete_success: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_DELETE_SUCCESS,
      delete_tap: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_DELETE_TAP,
      edit_in_chat_tap: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_EDIT_IN_CHAT_TAP,
      impression: s.HATCH_ACTION_TYPE.SCHEDULED_TASKS_IMPRESSION,
      run_tap: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_RUN_TAP,
      task_tap: s.HATCH_ACTION_TYPE.SCHEDULED_TASK_TAP,
    };
    function re(e) {
      try {
        me(ne[e.action], {
          featureEntryPoint:
            e.action === "impression"
              ? o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.SETTINGS
              : void 0,
          hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
            .SCHEDULED_TASKS_HATCH,
          hatchUserJourneyMetadata: ae(oe(e)),
        });
      } catch (e) {}
    }
    function oe(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "impression" &&
          "listState" in e
        ) {
          var t = e.listState;
          return { list_state: t };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "task_tap" &&
          "category" in e &&
          "runStatus" in e
        ) {
          var n = e.category,
            r = e.runStatus;
          return {
            run_status: r,
            schedule_type: n === "reminder" ? "one_time" : "recurring",
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "run_tap" &&
          "runStatus" in e
        ) {
          var o = e.runStatus;
          return { run_status: o };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.action === "edit_in_chat_tap" ||
            e.action === "delete_tap" ||
            e.action === "delete_confirm_tap" ||
            e.action === "delete_cancel_tap" ||
            e.action === "delete_success")
        )
          return {};
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "delete_error" &&
          "failureReason" in e
        ) {
          var a = e.failureReason;
          return { failure_reason: a };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function ae(e) {
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
    var ie = {
      discard_tap: s.HATCH_ACTION_TYPE.IDENTITY_DISCARD_TAP,
      document_tap: s.HATCH_ACTION_TYPE.IDENTITY_DOCUMENT_TAP,
      edit_tap: s.HATCH_ACTION_TYPE.IDENTITY_EDIT_TAP,
      impression: s.HATCH_ACTION_TYPE.IDENTITY_IMPRESSION,
      save_error: s.HATCH_ACTION_TYPE.IDENTITY_SAVE_ERROR,
      save_success: s.HATCH_ACTION_TYPE.IDENTITY_SAVE_SUCCESS,
    };
    function le(e) {
      try {
        if (!o("WAWebHatchFrontendGating").isHatchIdentityEnabled()) return;
        me(ie[e.action], {
          featureEntryPoint:
            e.action === "impression"
              ? o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.SETTINGS
              : void 0,
          hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.IDENTITY_HATCH,
          hatchUserJourneyMetadata: JSON.stringify(se(e)),
        });
      } catch (e) {}
    }
    function se(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "impression" &&
          "listState" in e
        ) {
          var t = e.listState;
          return { list_state: t };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "save_error" &&
          "document" in e &&
          "failureReason" in e
        ) {
          var n = e.document,
            r = e.failureReason;
          return { document_type: n, failure_reason: r };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.action === "document_tap" ||
            e.action === "edit_tap" ||
            e.action === "save_success" ||
            e.action === "discard_tap") &&
          "document" in e
        ) {
          var o = e.document;
          return { document_type: o };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    var ue = {
      ai_training_keep_confirm_tap:
        s.HATCH_ACTION_TYPE.AI_TRAINING_KEEP_CONFIRM_TAP,
      ai_training_off_confirm_tap:
        s.HATCH_ACTION_TYPE.AI_TRAINING_OFF_CONFIRM_TAP,
      ai_training_toggle_tap: s.HATCH_ACTION_TYPE.AI_TRAINING_TOGGLE_TAP,
      ai_training_update_error: s.HATCH_ACTION_TYPE.AI_TRAINING_UPDATE_ERROR,
      data_export_cancel_tap: s.HATCH_ACTION_TYPE.DATA_EXPORT_CANCEL_TAP,
      data_export_confirm_tap: s.HATCH_ACTION_TYPE.DATA_EXPORT_CONFIRM_TAP,
      data_export_error: s.HATCH_ACTION_TYPE.DATA_EXPORT_ERROR,
      data_export_success: s.HATCH_ACTION_TYPE.DATA_EXPORT_SUCCESS,
      data_export_tap: s.HATCH_ACTION_TYPE.DATA_EXPORT_TAP,
      import_file_selected: s.HATCH_ACTION_TYPE.IMPORT_FILE_SELECTED,
      import_generate_memory_tap:
        s.HATCH_ACTION_TYPE.IMPORT_GENERATE_MEMORY_TAP,
      import_memory_submit_error:
        s.HATCH_ACTION_TYPE.IMPORT_MEMORY_SUBMIT_ERROR,
      import_memory_submit_tap: s.HATCH_ACTION_TYPE.IMPORT_MEMORY_SUBMIT_TAP,
      import_memory_tap: s.HATCH_ACTION_TYPE.IMPORT_MEMORY_TAP,
      import_prompt_copy_tap: s.HATCH_ACTION_TYPE.IMPORT_PROMPT_COPY_TAP,
      import_see_full_prompt_tap:
        s.HATCH_ACTION_TYPE.IMPORT_SEE_FULL_PROMPT_TAP,
      import_upload_data_files_tap:
        s.HATCH_ACTION_TYPE.IMPORT_UPLOAD_DATA_FILES_TAP,
      import_upload_tap: s.HATCH_ACTION_TYPE.IMPORT_UPLOAD_TAP,
      impression: s.HATCH_ACTION_TYPE.DATA_CONTROLS_IMPRESSION,
    };
    function ce(e) {
      try {
        me(ue[e.action], {
          featureEntryPoint:
            e.action === "impression"
              ? o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.SETTINGS
              : void 0,
          hatchSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
            .DATA_CONTROLS_HATCH,
          hatchUserJourneyMetadata: ae(de(e)),
        });
      } catch (e) {}
    }
    function de(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "impression" &&
          "trainingEnabled" in e
        ) {
          var t = e.trainingEnabled;
          return { training_enabled: t == null ? null : String(t) };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "ai_training_toggle_tap" &&
          "trainingEnabled" in e
        ) {
          var n = e.trainingEnabled;
          return { training_enabled: String(n) };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.action === "ai_training_off_confirm_tap" ||
            e.action === "ai_training_keep_confirm_tap")
        )
          return {};
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "ai_training_update_error" &&
          "failureReason" in e &&
          "trainingEnabled" in e
        ) {
          var r = e.failureReason,
            o = e.trainingEnabled;
          return { failure_reason: r, training_enabled: String(o) };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.action === "data_export_tap" ||
            e.action === "data_export_confirm_tap" ||
            e.action === "data_export_cancel_tap")
        )
          return {};
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "data_export_success"
        )
          return {};
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "data_export_error" &&
          "failureReason" in e
        ) {
          var a = e.failureReason;
          return { failure_reason: a };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.action === "import_memory_tap" ||
            e.action === "import_generate_memory_tap" ||
            e.action === "import_prompt_copy_tap" ||
            e.action === "import_see_full_prompt_tap" ||
            e.action === "import_memory_submit_tap" ||
            e.action === "import_upload_tap" ||
            e.action === "import_file_selected" ||
            e.action === "import_upload_data_files_tap")
        )
          return {};
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.action === "import_memory_submit_error" &&
          "failureReason" in e
        ) {
          var i = e.failureReason;
          return { failure_reason: i };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function me(e, t) {
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
              : pe(t == null ? void 0 : t.botEntryPoint),
        },
      );
      return (s.commit(), !0);
    }
    function pe(e) {
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
      (l.logHatchConnectorCardImpression = V),
      (l.logHatchArtifact = G),
      (l.logHatchArtifactShared = z),
      (l.logHatchArtifactMenuOpened = j),
      (l.logHatchSubscriptionRead = K),
      (l.logHatchPermission = Z),
      (l.logHatchScheduledTasks = re),
      (l.logHatchIdentity = le),
      (l.logHatchDataControls = ce));
  },
  98,
);
