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
      var e = o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_chat_media_upload_count_limit",
      );
      return e > 0 ? e : null;
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
      return o(
        "WAWebBizAiWebEditingCoachingGateModel",
      ).isBizAiWebEditingCoachingGateEnabled();
    }
    function C() {
      return r("justknobx")._("3531");
    }
    function b() {
      return !C() && v();
    }
    function v() {
      return o(
        "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
      ).getPrimarySupportsBizAiSettingsSync();
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var R = 0,
      L = 1,
      E = 2;
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function I() {
      return k() !== R;
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function x() {
      return r("justknobx")._("6984");
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function P() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_appointments_enabled",
        ) === !0
      );
    }
    function N() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_checkout_enabled",
        ) === !0
      );
    }
    function M() {
      return (
        N() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_checkout_partners_enabled",
        ) === !0
      );
    }
    function w(e) {
      N() && e();
    }
    function A() {
      return r("justknobx")._("8689");
    }
    function F() {
      return (
        o(
          "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiWebOnboarding() && O()
      );
    }
    function O() {
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
      (l.getBizAiHubMediaUploadCountLimit = m),
      (l.isBizAIHubChatNavItemEnabled = p),
      (l.isBizAIDownloadEnabled = _),
      (l.isBizAiWebAgentChatDisabled = f),
      (l.isBizAIQEClientEnabled = g),
      (l.isAiAgentAutoSaveEnabled = h),
      (l.isAiAgentMessageEditingEnabled = y),
      (l.isSmartComposerAiListsEmergencyDisabled = C),
      (l.isAiListsWebUIEnabled = b),
      (l.isHandoffRemovalTimingSyncEnabled = v),
      (l.getHandoffListExpireDays = S),
      (l.MULTI_WEBSITE_DISABLED = R),
      (l.MULTI_WEBSITE_BRAZIL = L),
      (l.MULTI_WEBSITE_LATAM = E),
      (l.getMultiWebsiteMode = k),
      (l.isMultiWebsiteEnabled = I),
      (l.isMaibaWASSSendingEnabled = T),
      (l.isGoogleDriveEnabled = D),
      (l.isGoogleDriveReconnectDisabled = x),
      (l.isIntegrationHubEnabled = $),
      (l.isAppointmentsEnabled = P),
      (l.isCheckoutEnabled = N),
      (l.isCheckoutPartnersEnabled = M),
      (l.runCheckoutAction = w),
      (l.isCheckoutSuggestionActionDisabled = A),
      (l.isWebOnboardingSendToPhoneEnabled = F),
      (l.isWebOnboardingNotificationDispatchEnabled = O));
  },
  98,
);
