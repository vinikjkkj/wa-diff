__d(
  "WAWebBizAILeadGenLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
        userActionTarget: "leadgen_entrypoint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function s(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
        userActionTarget: "leadgen_entrypoint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function u() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionTarget: "leadgen_flow_list_screen",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function c(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          has_unseen_response_badge: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionTarget: "leadgen_flow_item",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function d(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          has_unseen_response_badge: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionTarget: "leadgen_flow_item",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function m() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionTarget: "add_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function p(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { flow_id: e != null ? e : void 0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionTarget: "edit_flow_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function _(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          is_creating: e,
          leadgen_instruction_count: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_TYPE_SELECTION,
        userActionTarget: "type_selection_screen",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function f(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          is_creating: e,
          leadgen_instruction_count: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_TYPE_SELECTION,
        userActionTarget: "continue_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function g(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          is_creating: e,
          leadgen_instruction_count: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionTarget: "field_selection_screen",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function h(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          is_creating: e,
          leadgen_instruction_count: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionTarget: "add_field_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function y(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          is_creating: e,
          leadgen_instruction_count: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save_button",
      });
    }
    function C(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: n != null ? n : void 0,
        extraAttributes: { flow_id: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: t,
        userActionTarget: "delete_flow_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function b(e, t, n, r) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: r != null ? r : void 0,
        extraAttributes: {
          action_status: e ? "success" : "failure",
          flow_id: t,
          resource_type: "flow",
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: n,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: "delete_complete",
      });
    }
    function v(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          response_count: t != null ? t : void 0,
          unseen_count: n != null ? n : void 0,
          has_unseen_response_badge: n != null ? n > 0 : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "customer_info_list_screen",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function S(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          is_unread: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "customer_info_item",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function R(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { flow_id: e != null ? e : void 0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "edit_flow_header",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function L(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          response_count: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "mark_all_as_read_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function E(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          lead_data_id: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "customer_response_screen",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function k(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { flow_id: e != null ? e : void 0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "copy_to_clipboard",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function I(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { flow_id: e != null ? e : void 0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "go_to_chat_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function T(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { flow_id: e != null ? e : void 0, lead_data_id: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "mark_as_seen",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function D(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: n != null ? n : void 0,
        extraAttributes: { response_count: e, flow_id: t != null ? t : void 0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "download_all_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function x(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: n != null ? n : void 0,
        extraAttributes: {
          flow_id: e != null ? e : void 0,
          lead_data_id: t != null ? t : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "download_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function $(e, t, n, r, a) {
      var i = t ? "success" : "failure";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: a != null ? a : void 0,
        extraAttributes: {
          action_status: i,
          is_download_all: e,
          flow_id: r != null ? r : void 0,
          error: n != null ? n : void 0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: e
          ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST
          : o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "download_complete",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function P(e, t, n, r) {
      (r === void 0 && (r = "request_failed"),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          entryPoint: n != null ? n : void 0,
          extraAttributes: {
            action_status: e,
            flow_id: t != null ? t : void 0,
            error: e === "failure" ? r : void 0,
          },
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          stickyEntryPoint: !1,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
            .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
          userActionTarget: "export_request_complete",
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.API,
        }));
    }
    ((l.logViewLeadGenEntryPoint = e),
      (l.logClickLeadGenEntryPoint = s),
      (l.logViewLeadGenList = u),
      (l.logViewLeadGenFlowItem = c),
      (l.logClickLeadGenFlowItem = d),
      (l.logClickAddLeadGenForm = m),
      (l.logClickEditLeadGenForm = p),
      (l.logViewLeadGenTypeSelection = _),
      (l.logClickLeadGenContinue = f),
      (l.logViewLeadGenFieldSelection = g),
      (l.logClickLeadGenAddField = h),
      (l.logClickSaveLeadGenForm = y),
      (l.logClickLeadGenDeleteFlow = C),
      (l.logApiDeleteLeadGenFormResult = b),
      (l.logViewLeadGenCustomerInfoList = v),
      (l.logClickLeadGenCustomerInfoItem = S),
      (l.logClickLeadGenEditHeader = R),
      (l.logClickLeadGenMarkAllRead = L),
      (l.logViewLeadGenCustomerResponse = E),
      (l.logClickLeadGenCopy = k),
      (l.logClickLeadGenGoToChat = I),
      (l.logViewLeadGenMarkAsSeen = T),
      (l.logClickDownloadAllLeadGenData = D),
      (l.logClickDownloadSingleLeadGenData = x),
      (l.logApiDownloadLeadGenDataResult = $),
      (l.logApiExportRequestResult = P));
  },
  98,
);
