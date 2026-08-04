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
        y() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_meta_ai_home_web_enabled",
        ) === !0
      );
    }
    function f() {
      return (
        _() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_meta_ai_home_default_landing_enabled",
        )
      );
    }
    function g() {
      return (
        y() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_meta_ai_null_state_web_enabled",
        ) === !0 &&
        !r("justknobx")._("4767")
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("ai_all_languages_enabled");
    }
    function y() {
      return o("WAWebMobilePlatforms").isSMB() || (!m() && !h()) ? !1 : p();
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") !== 0;
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
      return o("WAWebABProps").getABPropConfigValue(
        "ai_account_linking_enabled",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue("ai_mode_selector_enabled");
    }
    function k() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_mode_selector_media_editor_enabled",
        )
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_enabled",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_infra_enabled",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_forward_receiving_enabled",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_forward_media_receiving_enabled",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_forward_sending_enabled",
      );
    }
    function P(e) {
      return (
        o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebABProps").getABPropConfigValue(
          "ai_continuous_session_transparency_notice_enabled",
        )
      );
    }
    function N(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.from) && r("justknobx")._("5352");
    }
    ((l.setBonsaiUserLanguage = c),
      (l.isDeviceLanguageInLanguages = d),
      (l.isMetaAIHomeEnabled = _),
      (l.isMetaAIHomeDefaultLandingEnabled = f),
      (l.isMetaAiNullStateEnabled = g),
      (l.isBotEnabled = y),
      (l.isBizBot3pEnabled = C),
      (l.isBizBot1pEnabled = b),
      (l.isAiForwardAttributionEnabled = v),
      (l.isAiSubscriptionMeteringEnabled = S),
      (l.isAiSubscriptionEnabled = R),
      (l.isAiAccountLinkingEnabled = L),
      (l.isAiModeSelectorMessagingEnabled = E),
      (l.isAiModeSelectorMediaEditorEnabled = k),
      (l.isDynamicModeSelectorEnabled = I),
      (l.isAiChatThreadsInfraEnabled = T),
      (l.isRichResponseForwardReceivingEnabled = D),
      (l.isRichResponseForwardMediaReceivingEnabled = x),
      (l.isRichResponseForwardSendingEnabled = $),
      (l.isAiContinuousSessionTransparencyNoticeEnabled = P),
      (l.isLoadingMediaMessagesEnabled = N));
  },
  98,
);
