__d(
  "WAWebBizAiAgentGating",
  [
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
    "WAWebBizAiWebDataDownloadsGateModel",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_smb_agents_automatic_reply_enabled",
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_smart_composer_enabled",
        ) === !0
      );
    }
    function u() {
      return (
        r("justknobx")._("8542") &&
        c(
          o("WAWebABProps").getABPropConfigValue(
            "wabai_thread_sync_fixes_enabled",
          ),
        )
      );
    }
    function c(e) {
      return typeof e == "number" && Number.isInteger(e) && e !== 0;
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_sc_failure_cache_enabled",
        ) === !0
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_suggested_reply_coaching_enabled",
        ) === !0
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "maiba_meta_ai_fab_nullstate_is_deprecated",
      );
    }
    function _() {
      return (
        o(
          "WAWebBizAiWebDataDownloadsGateModel",
        ).isBizAiWebDataDownloadsGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download")
      );
    }
    function f() {
      return r("justknobx")._("5395");
    }
    function g() {
      return r("justknobx")._("2083");
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function y() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_fab_confirm_modal_enabled",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function C() {
      return o(
        "WAWebBizAiWebEditingCoachingGateModel",
      ).isBizAiWebEditingCoachingGateEnabled();
    }
    function b() {
      return r("justknobx")._("3531");
    }
    function v() {
      return S(
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).isBizAiWebSmartComposerAiListsGateEnabled(),
      );
    }
    function S(e) {
      return !b() && e && R();
    }
    function R() {
      return o(
        "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
      ).getPrimarySupportsBizAiSettingsSync();
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var E = 0,
      k = 1,
      I = 2;
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function D() {
      return T() !== E;
    }
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function P() {
      return r("justknobx")._("6984");
    }
    function N() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function M() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_appointments_enabled",
        ) === !0
      );
    }
    function w() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_checkout_enabled",
        ) === !0
      );
    }
    function A() {
      return (
        w() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_checkout_partners_enabled",
        ) === !0
      );
    }
    function F(e) {
      w() && e();
    }
    function O() {
      return (
        o(
          "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiWebOnboarding() && B()
      );
    }
    function B() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_onboarding_notification_dispatch_enabled",
        ) === !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isSmartComposerWebEnabled = s),
      (l.isCompanionThreadSyncFixEnabled = u),
      (l.isCompanionThreadSyncAssignmentEnabled = c),
      (l.isSmartComposerFailureCacheEnabled = d),
      (l.isSmartComposerCoachingEnabled = m),
      (l.isBizAIHubChatNavItemEnabled = p),
      (l.isBizAIDownloadEnabled = _),
      (l.isBizAiWebAgentChatDisabled = f),
      (l.isBizAIQEClientEnabled = g),
      (l.isAiAgentAutoSaveEnabled = h),
      (l.isAiReplyFabConfirmModalEnabled = y),
      (l.isAiAgentMessageEditingEnabled = C),
      (l.isSmartComposerAiListsEmergencyDisabled = b),
      (l.isAiListsWebUIEnabled = v),
      (l.isAiListsWebUIEnabledWithJointGate = S),
      (l.isHandoffRemovalTimingSyncEnabled = R),
      (l.getHandoffListExpireDays = L),
      (l.MULTI_WEBSITE_DISABLED = E),
      (l.MULTI_WEBSITE_BRAZIL = k),
      (l.MULTI_WEBSITE_LATAM = I),
      (l.getMultiWebsiteMode = T),
      (l.isMultiWebsiteEnabled = D),
      (l.isMaibaWASSSendingEnabled = x),
      (l.isGoogleDriveEnabled = $),
      (l.isGoogleDriveReconnectDisabled = P),
      (l.isIntegrationHubEnabled = N),
      (l.isAppointmentsEnabled = M),
      (l.isCheckoutEnabled = w),
      (l.isCheckoutPartnersEnabled = A),
      (l.runCheckoutAction = F),
      (l.isWebOnboardingSendToPhoneEnabled = O),
      (l.isWebOnboardingNotificationDispatchEnabled = B));
  },
  98,
);
