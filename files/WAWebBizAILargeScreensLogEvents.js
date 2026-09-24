__d(
  "WAWebBizAILargeScreensLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      AFTER_24H_REPLY: "remove_chats_24hrs_later",
      IMMEDIATELY: "remove_chats_immediately",
    };
    function s() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
        userActionTarget: "nav_bar_entry_point",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function u() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
        userActionTarget: "nav_bar_entry_point",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    var c = [
      ["insight_id", "insight_id"],
      ["insight_type", "type"],
    ];
    function d(e) {
      var t = e.indexOf("?"),
        n = t === -1 ? e : e.slice(0, t),
        r = { deeplink_url: n };
      if (t !== -1) {
        var a = new URLSearchParams(e.slice(t + 1));
        for (var i of c) {
          var l = i[0],
            s = i[1],
            u = a.get(l);
          u != null && u !== "" && (r[s] = u);
        }
      }
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
        extraAttributes: r,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
        userActionTarget: "message_cta",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function m(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function p(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: e,
      });
    }
    function _(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: t == null ? void 0 : { subscription_status: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
        userActionTarget: "subscription_entrypoint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function f(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: t == null ? void 0 : { subscription_status: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
        userActionTarget: "subscription_entrypoint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function g() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_RULES_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function h() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES_V1,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function y() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function C(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AGENT_HANDOFF_LIST_CONFIG,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.ENTER,
      });
    }
    function b(t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: t,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AGENT_HANDOFF_LIST_CONFIG,
        userActionTarget: e[n],
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function v(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { is_enabled: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "allow_replies",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function S(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { segment: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "audience_row",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function R(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { selection: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "schedule",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function L() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "learn_more",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function E() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "delete_ai",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function k(e, t, n) {
      var r = t ? "success" : "failure";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes:
          n != null
            ? { error: n, result: r, save_kind: e }
            : { result: r, save_kind: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "save_settings_gql_response",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function I() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES_CHATS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function T(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { selection: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES_CHATS,
        userActionTarget: "mode",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function D() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_EXAMPLE_RESPONSE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function x() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ADD_BUSINESS_INFO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function $() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ADD_PURCHASING_INFO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function P() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ONLINE_STORE_LINKS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function N() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function M(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: e,
      });
    }
    function w() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function A() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "upload_file",
      });
    }
    function F(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "upload_success" : "upload_failure",
      });
    }
    function O() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "create_chat_history",
      });
    }
    function B(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "chat_history_success" : "chat_history_failure",
      });
    }
    function W() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DELETE,
        userActionTarget: "delete_source",
      });
    }
    function q(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "delete_success" : "delete_failure",
      });
    }
    function U() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_PRODUCT_INFO_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function V() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_PRODUCT_INFO_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save",
      });
    }
    function H(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_PRODUCT_INFO_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function G() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function z() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "toggle_product",
      });
    }
    function j() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save",
      });
    }
    function K(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function Q() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function X() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save",
      });
    }
    function Y(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function J() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_KNOWLEDGE_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Z() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_KNOWLEDGE_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save",
      });
    }
    function ee(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_KNOWLEDGE_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function te() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ne() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_TYPE_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function re() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function oe() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save",
      });
    }
    function ae(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function ie(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "delete_success" : "delete_failure",
      });
    }
    function le(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "mark_all_seen_success" : "mark_all_seen_failure",
      });
    }
    function se(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ONLINE_STORE_LINKS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function ue(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_RULE_EDITOR,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function ce() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function de(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { response_count: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "download_all_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function me() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
        userActionTarget: "download_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function pe(e, t, n) {
      var r = t ? "success" : "failure";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes:
          n != null
            ? { action_status: r, error: n, is_download_all: e }
            : { action_status: r, is_download_all: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
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
    function _e(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .BUSINESS_TOOLS_HOME,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BUSINESS_HOME_PAGE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        userActionTarget: "bizai_entry",
        extraAttributes: { is_onboarded: e },
      });
    }
    function fe(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .BUSINESS_TOOLS_HOME,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BUSINESS_HOME_PAGE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "bizai_entry",
        extraAttributes: { is_onboarded: e },
      });
    }
    function ge() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_WEB_ONBOARDING_QR_CODE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { referral: "web-qr-handoff" },
      });
    }
    function he() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_WEB_ONBOARDING_QR_CODE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "need_help",
      });
    }
    function ye(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { connected: e, files_num: t, success: n },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionTarget: "gdrive_section",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Ce() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionTarget: "gdrive_section_see_all",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function be(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { files_num: e, success: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_KNOWLEDGE_REPO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ve(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: e
          ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .GEN_AI_GDRIVE_KNOWLEDGE_REPO
          : o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionTarget: "gdrive_delete",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Se(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: t != null ? { error: t, success: e } : { success: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionTarget: "gdrive_files_fetch_gql_response",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function Re(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { selected_files_num: 1, success: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: e
          ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .GEN_AI_GDRIVE_KNOWLEDGE_REPO
          : o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionTarget: "gdrive_file_delete_gql_response",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function Le() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionTarget: "connections_entry_point",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Ee() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionTarget: "connections_entry_point",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ke(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { connected_partners: e, success: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .PARTNERS_CONNECTIONS_HUB,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Ie(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { partner_id: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .PARTNERS_CONNECTIONS_HUB,
        userActionTarget: "partner_item",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Te() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNER_MANAGEMENT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function De(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { partner: e, result: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNER_MANAGEMENT,
        userActionTarget: "disconnect_partner",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function xe(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_VALUE_PROP,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function $e(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_VALUE_PROP,
        userActionTarget: "connect",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Pe(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: { success: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_VALUE_PROP,
        userActionTarget: "connect",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Ne(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: { result: "canceled" },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_VALUE_PROP,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Me(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: { result: "canceled" },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_FILE_PICKER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function we(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: { result: "synced" },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_GDRIVE_AFTER_SETUP,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Ae() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "editing_nux_view",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Fe() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "editing_nux_close_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Oe(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes: { is_within_editing_window: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "edit",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Be(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes: { is_within_editing_window: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "editing_hint_chat_composer",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function We(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes: { is_within_editing_window: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "start_editing",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function qe(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes: { is_within_editing_window: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "editing_send",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Ue(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes: { is_within_editing_window: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "editing_nux_hint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Ve(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
          .COACHING_ENTRYPOINT_BUTTON,
        extraAttributes: { delivers_to_customer: t, message_age_ms: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function He(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
          .COACHING_ENTRYPOINT_BUTTON,
        extraAttributes: {
          delivers_to_customer: n,
          text_change_cnt: e,
          timespent_ms: t,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
        userActionTarget: "save_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Ge(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
          .COACHING_ENTRYPOINT_BUTTON,
        extraAttributes: {
          delivers_to_customer: n,
          text_change_cnt: e,
          timespent_ms: t,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
        userActionTarget: "cancel_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ze(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes: { is_within_editing_window: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "submit_coaching_response_start",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function je(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
        extraAttributes:
          e === "success"
            ? { is_within_editing_window: t, result: "success" }
            : { error: e, is_within_editing_window: t, result: "failure" },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionTarget: "submit_coaching_response_result",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function Ke() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_NUX,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Qe(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { appointment_type_count: e, is_empty: e === 0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_LANDING,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Xe(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: { index: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_LANDING,
        userActionTarget: "appointment_type_row",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Ye() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_DETAIL,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Je() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: { flow_type: "edit" },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_LANDING,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_DETAIL,
        userActionTarget: "delete_appointment_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Ze(e, t) {
      var n = e ? "success" : "fail";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes:
          t != null
            ? { error: t, flow_type: "edit", result: n }
            : { flow_type: "edit", result: n },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_HOME,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_DETAIL,
        userActionTarget: "delete_appointment_flow",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function et(e, t, n) {
      var r = e ? "success" : "fail";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: t != null ? { error: t, result: r } : { result: r },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface:
          n === "setup_nux"
            ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .GEN_AI_BOOK_APPOINTMENTS_NUX
            : o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .GEN_AI_BOOK_APPOINTMENTS_LANDING,
        userActionTarget: "fetch_appointment_flow_home",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function tt(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: t == null ? void 0 : { upcoming_count: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
        userActionTarget: "calendar_entrypoint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function nt(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        extraAttributes: t == null ? void 0 : { upcoming_count: t },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
        userActionTarget: "calendar_entrypoint",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function rt() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ot(e, t, n) {
      var r = e ? "success" : "fail";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        extraAttributes:
          n != null
            ? { error: n, event_count: t, result: r }
            : { event_count: t, result: r },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_LIST,
        userActionTarget: "fetch_calendar_events",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function at() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_LIST,
        userActionTarget: "appointment_row",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function it() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DETAIL,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function lt() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_LIST,
        userActionTarget: "open_customer_chat",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function st() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DETAIL,
        userActionTarget: "delete_appointment",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ut() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ct() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
        userActionTarget: "delete",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function dt() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
        userActionTarget: "cancel",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function mt() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function pt(e, t) {
      var n = e ? "success" : "fail";
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        extraAttributes: t != null ? { error: t, result: n } : { result: n },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_DETAIL,
        userActionTarget: "cancel_calendar_event",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function _t() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_ERROR_DIALOG,
        userActionTarget: "delete_error",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ft(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        extraAttributes: { state: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_1P_CALENDAR_LIST,
        userActionTarget: "third_party_calendar_notice",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    ((l.logViewAiHubNavEntryPoint = s),
      (l.logClickAiHubNavEntryPoint = u),
      (l.logBizAiHubDeeplinkClick = d),
      (l.logViewAIHome = m),
      (l.logClickAIHomeSection = p),
      (l.logViewMetaOneEntryPoint = _),
      (l.logClickMetaOneEntryPoint = f),
      (l.logViewInstructionsDrawer = g),
      (l.logViewResponseSettingsDrawer = h),
      (l.logViewResponseSettingsV2Drawer = y),
      (l.logEnterHandoffListSettings = C),
      (l.logSelectHandoffRemovalTiming = b),
      (l.logClickResponseSettingsMasterToggle = v),
      (l.logClickResponseSettingsAudienceRow = S),
      (l.logClickResponseSettingsSchedule = R),
      (l.logClickResponseSettingsLearnMore = L),
      (l.logClickResponseSettingsDeleteAi = E),
      (l.logApiResponseSettingsSave = k),
      (l.logViewResponseModePicker = I),
      (l.logClickResponseMode = T),
      (l.logViewExampleResponsesDrawer = D),
      (l.logViewBusinessInfoDrawer = x),
      (l.logViewPurchaseInfoDrawer = $),
      (l.logViewWebsiteEditDrawer = P),
      (l.logViewKnowledgeDrawer = N),
      (l.logClickKnowledgeSeeAll = M),
      (l.logViewKnowledgeSources = w),
      (l.logClickUploadFile = A),
      (l.logApiUploadFileResult = F),
      (l.logClickCreateChatHistory = O),
      (l.logApiChatHistoryResult = B),
      (l.logClickDeleteSource = W),
      (l.logApiDeleteSourceResult = q),
      (l.logViewProductInfoEdit = U),
      (l.logClickSaveProductInfo = V),
      (l.logApiSaveProductInfoResult = H),
      (l.logViewBestsellersDrawer = G),
      (l.logClickToggleBestseller = z),
      (l.logClickSaveBestsellers = j),
      (l.logApiSaveBestsellersResult = K),
      (l.logViewFAQEdit = Q),
      (l.logClickSaveFAQ = X),
      (l.logApiSaveFAQResult = Y),
      (l.logViewKnowledgeEdit = J),
      (l.logClickSaveKnowledge = Z),
      (l.logApiSaveKnowledgeResult = ee),
      (l.logViewLeadGenList = te),
      (l.logViewLeadGenTypeSelection = ne),
      (l.logViewLeadGenFieldSelection = re),
      (l.logClickSaveLeadGenForm = oe),
      (l.logApiSaveLeadGenFormResult = ae),
      (l.logApiDeleteLeadGenFormResult = ie),
      (l.logApiMarkAllSeenResult = le),
      (l.logApiSaveWebsiteResult = se),
      (l.logApiSaveRuleResult = ue),
      (l.logViewLeadGenCustomerInfoList = ce),
      (l.logClickDownloadAllLeadGenData = de),
      (l.logClickDownloadSingleLeadGenData = me),
      (l.logApiDownloadLeadGenDataResult = pe),
      (l.logViewBizAiEntryTile = _e),
      (l.logClickBizAiEntryTile = fe),
      (l.logViewBizAiOnboardingQr = ge),
      (l.logClickBizAiOnboardingNeedHelp = he),
      (l.logViewGoogleDriveKnowledgeSection = ye),
      (l.logClickGoogleDriveSeeAll = Ce),
      (l.logViewGoogleDriveDrawer = be),
      (l.logClickGoogleDriveDelete = ve),
      (l.logApiGoogleDriveFetchFiles = Se),
      (l.logApiGoogleDriveDeleteFile = Re),
      (l.logViewConnectionsEntryPoint = Le),
      (l.logClickConnectionsEntryPoint = Ee),
      (l.logViewPartnersHub = ke),
      (l.logClickPartnerRow = Ie),
      (l.logViewPartnerManagement = Te),
      (l.logClickDisconnectPartner = De),
      (l.logViewGoogleDriveValueProp = xe),
      (l.logClickGoogleDriveConnect = $e),
      (l.logViewGoogleDriveConnectResult = Pe),
      (l.logViewGoogleDriveSetupCanceled = Ne),
      (l.logViewGoogleDriveSetupDismissed = Me),
      (l.logViewGoogleDriveSetupSynced = we),
      (l.logViewBizAiMessageEditDiscoveryTooltip = Ae),
      (l.logClickBizAiMessageEditDiscoveryTooltipClose = Fe),
      (l.logClickBizAiMessageEditAction = Oe),
      (l.logViewBizAiMessageEditComposerHint = Be),
      (l.logClickBizAiMessageEditStartEditing = We),
      (l.logClickBizAiMessageEditSend = qe),
      (l.logViewBizAiMessageEditPostEditHint = Ue),
      (l.logViewBizAiMessageEditEditor = Ve),
      (l.logClickBizAiMessageEditSave = He),
      (l.logClickBizAiMessageEditCancel = Ge),
      (l.logApiBizAiMessageEditCoachingStart = ze),
      (l.logApiBizAiMessageEditCoachingResult = je),
      (l.logViewAppointmentsSetupNux = Ke),
      (l.logViewAppointmentsLanding = Qe),
      (l.logClickAppointmentTypeRow = Xe),
      (l.logViewAppointmentTypeDetail = Ye),
      (l.logClickDeleteAppointmentType = Je),
      (l.logApiDeleteAppointmentFlow = Ze),
      (l.logApiAppointmentHomeFetch = et),
      (l.logViewCalendarEntryPoint = tt),
      (l.logClickCalendarEntryPoint = nt),
      (l.logViewCalendarBookingsList = rt),
      (l.logApiFetchCalendarEvents = ot),
      (l.logClickCalendarBookingRow = at),
      (l.logViewCalendarBookingDetail = it),
      (l.logClickOpenCustomerChat = lt),
      (l.logClickDeleteCalendarBooking = st),
      (l.logViewCancelCalendarBookingDialog = ut),
      (l.logClickConfirmCancelCalendarBooking = ct),
      (l.logClickKeepCalendarBooking = dt),
      (l.logDismissCancelCalendarBookingDialog = mt),
      (l.logApiCancelCalendarEvent = pt),
      (l.logViewCancelCalendarBookingErrorDialog = _t),
      (l.logViewThirdPartyCalendarNotice = ft));
  },
  98,
);
