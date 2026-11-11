__d(
  "WAWebBotBaseGating",
  ["WAWebABProps", "WAWebBotUtils", "WAWebMobilePlatforms", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      ((u = t), (e = null));
    }
    function d(e) {
      var t = u;
      if (t == null) return !1;
      for (var n of e.split(",")) if (n.trim().toLowerCase() === t) return !0;
      return !1;
    }
    function m() {
      var t;
      if (u == null) return !1;
      var n =
        (t = o("WAWebABProps").getABPropConfigValue(
          "bonsai_supported_languages",
        )) != null
          ? t
          : "en";
      return ((s !== n || e == null) && ((s = n), (e = d(n))), e);
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue("bonsai_enabled") === !0 ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_expansion_countries_bonsai_enabled",
        ) === !0
      );
    }
    function _() {
      return (
        h() &&
        !r("justknobx")._("4767") &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_retrigger_null_state_main_gate_v2_enabled",
        ) === !0
      );
    }
    function f() {
      return (
        h() &&
        o("WAWebABProps").getABPropConfigValue("ai_reminders_enabled") === !0
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("ai_all_languages_enabled");
    }
    function h() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_web_meta_ai_assistant_enabled",
          ) === !0
        : !m() && !g()
          ? !1
          : p();
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") !== 0;
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_3p_bot_product_chat_rendering_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_rendering_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_attribution_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_subscription_metering_enabled",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue("ai_subscription_enabled");
    }
    function L() {
      return (
        o("WAWebABProps").getABPropConfigValue("ai_subscription_enabled") &&
        o("WAWebABProps").getABPropConfigValue("wa_meta_one_enabled")
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_account_linking_enabled",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_infra_enabled",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_forward_receiving_enabled",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_forward_media_receiving_enabled",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_forward_sending_enabled",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_source_reporting_long_press_enabled",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_jarvis_forward_sending_enabled",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_jarvis_forward_receiving_enabled",
      );
    }
    function N(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.from) && r("justknobx")._("5352");
    }
    ((l.setBonsaiUserLanguage = c),
      (l.isDeviceLanguageInLanguages = d),
      (l.isMetaAiNullStateEnabled = _),
      (l.isMetaAiTasksEnabled = f),
      (l.isBotEnabled = h),
      (l.isBizBot3pEnabled = y),
      (l.is3pAgentProductEnabled = C),
      (l.isBizBot1pEnabled = b),
      (l.isAiForwardAttributionEnabled = v),
      (l.isAiSubscriptionMeteringEnabled = S),
      (l.isAiSubscriptionEnabled = R),
      (l.isAiSubscriptionPurchaseCtaEnabled = L),
      (l.isAiAccountLinkingEnabled = E),
      (l.isAiChatThreadsInfraEnabled = k),
      (l.isRichResponseForwardReceivingEnabled = I),
      (l.isRichResponseForwardMediaReceivingEnabled = T),
      (l.isRichResponseForwardSendingEnabled = D),
      (l.isRichResponseSourceReportingEnabled = x),
      (l.isRichResponseJarvisForwardSendingEnabled = $),
      (l.isRichResponseJarvisForwardReceivingEnabled = P),
      (l.isLoadingMediaMessagesEnabled = N));
  },
  98,
);
