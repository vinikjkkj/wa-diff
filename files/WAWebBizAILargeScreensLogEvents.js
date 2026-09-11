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
    function c(e) {
      var t = e.indexOf("?"),
        n = t === -1 ? e : e.slice(0, t);
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
        extraAttributes: { deeplink_url: n },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
        userActionTarget: "message_cta",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function d(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function m(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: e,
      });
    }
    function p() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_RULES_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function _() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES_V1,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function f() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function g(e) {
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
    function h(t, n) {
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
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
    function v() {
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
    function S() {
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
    function R(e, t, n) {
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
    function L() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES_CHATS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function E(e) {
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
    function k() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_EXAMPLE_RESPONSE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function I() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ADD_BUSINESS_INFO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function T() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ADD_PURCHASING_INFO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function D() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_ONLINE_STORE_LINKS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function x() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_REPO,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function $(e) {
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
    function P() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function N() {
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
    function M(e) {
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
    function w() {
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
    function A(e) {
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
    function F() {
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
    function O(e) {
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
    function B() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_PRODUCT_INFO_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function W() {
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
    function q(e) {
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
    function U() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function V() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "toggle_product",
      });
    }
    function H() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "save",
      });
    }
    function G(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function z() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function j() {
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
    function K(e) {
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
    function Q() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_KNOWLEDGE_EDIT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function X() {
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
    function Y(e) {
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
    function J() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Z() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_TYPE_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ee() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_FIELD_SELECTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function te() {
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
    function ne(e) {
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
    function re(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "delete_success" : "delete_failure",
      });
    }
    function oe(e) {
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
    function ae(e) {
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
    function ie(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_RULE_EDITOR,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        userActionTarget: e ? "save_success" : "save_failure",
      });
    }
    function le() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function se(e) {
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
    function ue() {
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
    function ce(e, t, n) {
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
    function de(e) {
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
    function me(e) {
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
    function pe() {
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
    function _e() {
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
    function fe(e, t, n) {
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
    function ge() {
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
    function he(e, t) {
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
    function ye(e) {
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
    function Ce(e, t) {
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
    function be(e, t) {
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
    function ve() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionTarget: "connections_entry_point",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Se() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
        userActionTarget: "connections_entry_point",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Re(e, t) {
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
    function Le(e) {
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
    function Ee() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNER_MANAGEMENT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ke(e, t) {
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
    function Ie(e) {
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
    function Te(e) {
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
    function De(e, t) {
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
    function xe(e) {
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
    function $e(e) {
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
    function Pe(e) {
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
    function Ne(e, t) {
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
    function Me(e, t, n) {
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
    function we(e, t, n) {
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
    function Ae(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
          .COACHING_ENTRYPOINT_BUTTON,
        extraAttributes:
          e === "success"
            ? { delivers_to_customer: t, status: "success" }
            : { delivers_to_customer: t, error: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
        userActionTarget: "submit_coaching_response_result",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function Fe(e) {
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
    function Oe(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: t != null ? { error: t, success: e } : { success: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_LANDING,
        userActionTarget: "appointment_flow_home_gql_response",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function Be() {
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
    function We(e, t, n) {
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
    function qe() {
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
    function Ue() {
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
    function Ve() {
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
    ((l.logViewAiHubNavEntryPoint = s),
      (l.logClickAiHubNavEntryPoint = u),
      (l.logBizAiHubDeeplinkClick = c),
      (l.logViewAIHome = d),
      (l.logClickAIHomeSection = m),
      (l.logViewInstructionsDrawer = p),
      (l.logViewResponseSettingsDrawer = _),
      (l.logViewResponseSettingsV2Drawer = f),
      (l.logEnterHandoffListSettings = g),
      (l.logSelectHandoffRemovalTiming = h),
      (l.logClickResponseSettingsMasterToggle = y),
      (l.logClickResponseSettingsAudienceRow = C),
      (l.logClickResponseSettingsSchedule = b),
      (l.logClickResponseSettingsLearnMore = v),
      (l.logClickResponseSettingsDeleteAi = S),
      (l.logApiResponseSettingsSave = R),
      (l.logViewResponseModePicker = L),
      (l.logClickResponseMode = E),
      (l.logViewExampleResponsesDrawer = k),
      (l.logViewBusinessInfoDrawer = I),
      (l.logViewPurchaseInfoDrawer = T),
      (l.logViewWebsiteEditDrawer = D),
      (l.logViewKnowledgeDrawer = x),
      (l.logClickKnowledgeSeeAll = $),
      (l.logViewKnowledgeSources = P),
      (l.logClickUploadFile = N),
      (l.logApiUploadFileResult = M),
      (l.logClickCreateChatHistory = w),
      (l.logApiChatHistoryResult = A),
      (l.logClickDeleteSource = F),
      (l.logApiDeleteSourceResult = O),
      (l.logViewProductInfoEdit = B),
      (l.logClickSaveProductInfo = W),
      (l.logApiSaveProductInfoResult = q),
      (l.logViewBestsellersDrawer = U),
      (l.logClickToggleBestseller = V),
      (l.logClickSaveBestsellers = H),
      (l.logApiSaveBestsellersResult = G),
      (l.logViewFAQEdit = z),
      (l.logClickSaveFAQ = j),
      (l.logApiSaveFAQResult = K),
      (l.logViewKnowledgeEdit = Q),
      (l.logClickSaveKnowledge = X),
      (l.logApiSaveKnowledgeResult = Y),
      (l.logViewLeadGenList = J),
      (l.logViewLeadGenTypeSelection = Z),
      (l.logViewLeadGenFieldSelection = ee),
      (l.logClickSaveLeadGenForm = te),
      (l.logApiSaveLeadGenFormResult = ne),
      (l.logApiDeleteLeadGenFormResult = re),
      (l.logApiMarkAllSeenResult = oe),
      (l.logApiSaveWebsiteResult = ae),
      (l.logApiSaveRuleResult = ie),
      (l.logViewLeadGenCustomerInfoList = le),
      (l.logClickDownloadAllLeadGenData = se),
      (l.logClickDownloadSingleLeadGenData = ue),
      (l.logApiDownloadLeadGenDataResult = ce),
      (l.logViewBizAiEntryTile = de),
      (l.logClickBizAiEntryTile = me),
      (l.logViewBizAiOnboardingQr = pe),
      (l.logClickBizAiOnboardingNeedHelp = _e),
      (l.logViewGoogleDriveKnowledgeSection = fe),
      (l.logClickGoogleDriveSeeAll = ge),
      (l.logViewGoogleDriveDrawer = he),
      (l.logClickGoogleDriveDelete = ye),
      (l.logApiGoogleDriveFetchFiles = Ce),
      (l.logApiGoogleDriveDeleteFile = be),
      (l.logViewConnectionsEntryPoint = ve),
      (l.logClickConnectionsEntryPoint = Se),
      (l.logViewPartnersHub = Re),
      (l.logClickPartnerRow = Le),
      (l.logViewPartnerManagement = Ee),
      (l.logClickDisconnectPartner = ke),
      (l.logViewGoogleDriveValueProp = Ie),
      (l.logClickGoogleDriveConnect = Te),
      (l.logViewGoogleDriveConnectResult = De),
      (l.logViewGoogleDriveSetupCanceled = xe),
      (l.logViewGoogleDriveSetupDismissed = $e),
      (l.logViewGoogleDriveSetupSynced = Pe),
      (l.logViewBizAiMessageEditEditor = Ne),
      (l.logClickBizAiMessageEditSave = Me),
      (l.logClickBizAiMessageEditCancel = we),
      (l.logApiBizAiMessageEditCoachingResult = Ae),
      (l.logViewAppointmentsLanding = Fe),
      (l.logApiAppointmentHomeFetch = Oe),
      (l.logViewCalendarBookingsList = Be),
      (l.logApiFetchCalendarEvents = We),
      (l.logClickCalendarBookingRow = qe),
      (l.logViewCalendarBookingDetail = Ue),
      (l.logClickOpenCustomerChat = Ve));
  },
  98,
);
