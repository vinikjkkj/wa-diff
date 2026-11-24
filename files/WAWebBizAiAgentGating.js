__d(
  "WAWebBizAiAgentGating",
  [
    "WAWebABProps",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
    "WAWebBizAiWebDataDownloadsGateModel",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
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
        r("justknobx")._("8542") &&
        u(
          o("WAWebABProps").getABPropConfigValue(
            "wabai_thread_sync_fixes_enabled",
          ),
        )
      );
    }
    function u(e) {
      return typeof e == "number" && Number.isInteger(e) && e !== 0;
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_sc_failure_cache_enabled",
        ) === !0
      );
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_suggested_reply_coaching_enabled",
        ) === !0
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "maiba_meta_ai_fab_nullstate_is_deprecated",
      );
    }
    function p() {
      return (
        o(
          "WAWebBizAiWebDataDownloadsGateModel",
        ).isBizAiWebDataDownloadsGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download")
      );
    }
    function _() {
      return r("justknobx")._("5395");
    }
    function f() {
      return r("justknobx")._("2083");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function h() {
      return o(
        "WAWebBizAiWebEditingCoachingGateModel",
      ).isBizAiWebEditingCoachingGateEnabled();
    }
    function y() {
      return r("justknobx")._("3531");
    }
    function C() {
      return !y() && b();
    }
    function b() {
      return o(
        "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
      ).getPrimarySupportsBizAiSettingsSync();
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var S = 0,
      R = 1,
      L = 2;
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function k() {
      return E() !== S;
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function D() {
      return r("justknobx")._("6984");
    }
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_appointments_enabled",
        ) === !0
      );
    }
    function P() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_checkout_enabled",
        ) === !0
      );
    }
    function N() {
      return (
        P() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_checkout_partners_enabled",
        ) === !0
      );
    }
    function M(e) {
      P() && e();
    }
    function w() {
      return r("justknobx")._("8689");
    }
    function A() {
      return (
        o(
          "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiWebOnboarding() && F()
      );
    }
    function F() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_onboarding_notification_dispatch_enabled",
        ) === !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isCompanionThreadSyncFixEnabled = s),
      (l.isCompanionThreadSyncAssignmentEnabled = u),
      (l.isSmartComposerFailureCacheEnabled = c),
      (l.isSmartComposerCoachingEnabled = d),
      (l.isBizAIHubChatNavItemEnabled = m),
      (l.isBizAIDownloadEnabled = p),
      (l.isBizAiWebAgentChatDisabled = _),
      (l.isBizAIQEClientEnabled = f),
      (l.isAiAgentAutoSaveEnabled = g),
      (l.isAiAgentMessageEditingEnabled = h),
      (l.isSmartComposerAiListsEmergencyDisabled = y),
      (l.isAiListsWebUIEnabled = C),
      (l.isHandoffRemovalTimingSyncEnabled = b),
      (l.getHandoffListExpireDays = v),
      (l.MULTI_WEBSITE_DISABLED = S),
      (l.MULTI_WEBSITE_BRAZIL = R),
      (l.MULTI_WEBSITE_LATAM = L),
      (l.getMultiWebsiteMode = E),
      (l.isMultiWebsiteEnabled = k),
      (l.isMaibaWASSSendingEnabled = I),
      (l.isGoogleDriveEnabled = T),
      (l.isGoogleDriveReconnectDisabled = D),
      (l.isIntegrationHubEnabled = x),
      (l.isAppointmentsEnabled = $),
      (l.isCheckoutEnabled = P),
      (l.isCheckoutPartnersEnabled = N),
      (l.runCheckoutAction = M),
      (l.isCheckoutSuggestionActionDisabled = w),
      (l.isWebOnboardingSendToPhoneEnabled = A),
      (l.isWebOnboardingNotificationDispatchEnabled = F));
  },
  98,
);
