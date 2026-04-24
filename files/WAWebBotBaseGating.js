__d(
  "WAWebBotBaseGating",
  [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebMobilePlatforms",
    "WAWebThreadsGating",
    "justknobx",
  ],
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
      return o("WAWebABProps").getABPropConfigValue("bonsai_enabled") === !0;
    }
    function _() {
      return (
        h() &&
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
      return o("WAWebABProps").getABPropConfigValue("ai_all_languages_enabled");
    }
    function h() {
      return o("WAWebMobilePlatforms").isSMB() || (!m() && !g()) ? !1 : p();
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") !== 0;
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_rendering_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_attribution_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue("ai_mode_selector_enabled");
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_enabled",
      );
    }
    function R() {
      return (
        o("WAWebThreadsGating").isThreadsInfraEnabled() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_infra_enabled")
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_main_gate_enabled",
      );
    }
    function E() {
      return L() ? !o("WAWebMobilePlatforms").isSMB() : !1;
    }
    function k() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_rich_response_forward_receiving_enabled",
        )
      );
    }
    function I(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? o("WAWebABProps").getABPropConfigValue(
            "ai_session_transparency_meta_ai_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "ai_continuous_session_transparency_notice_enabled",
          );
    }
    function T(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.from) && r("justknobx")._("5352");
    }
    ((l.setBonsaiUserLanguage = c),
      (l.isDeviceLanguageInLanguages = d),
      (l.isMetaAIHomeEnabled = _),
      (l.isMetaAIHomeDefaultLandingEnabled = f),
      (l.isBotEnabled = h),
      (l.isBizBot3pEnabled = y),
      (l.isBizBot1pEnabled = C),
      (l.isAiForwardAttributionEnabled = b),
      (l.isAiModeSelectorMessagingEnabled = v),
      (l.isDynamicModeSelectorEnabled = S),
      (l.isAiChatThreadsInfraEnabled = R),
      (l.isRichStructuredResponseReceiverEnabled = E),
      (l.isRichResponseForwardReceivingEnabled = k),
      (l.isAiContinuousSessionTransparencyNoticeEnabled = I),
      (l.isLoadingMediaMessagesEnabled = T));
  },
  98,
);
