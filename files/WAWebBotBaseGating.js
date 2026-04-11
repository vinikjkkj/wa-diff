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
    function d() {
      var t;
      if (u == null) return !1;
      var n = u,
        r =
          (t = o("WAWebABProps").getABPropConfigValue(
            "bonsai_supported_languages",
          )) != null
            ? t
            : "en";
      if (s !== r || e == null) {
        var a = r
          .toLowerCase()
          .split(",")
          .map(function (e) {
            return e.trim();
          });
        ((s = r), (e = a.includes(n)));
      }
      return e;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("bonsai_enabled") === !0;
    }
    function p() {
      return (
        _() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_meta_ai_home_web_enabled",
        ) === !0
      );
    }
    function _() {
      return o("WAWebMobilePlatforms").isSMB() || !d() ? !1 : m();
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") !== 0;
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_rendering_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_attribution_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("ai_mode_selector_enabled");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_enabled",
      );
    }
    function b() {
      return (
        o("WAWebThreadsGating").isThreadsInfraEnabled() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_infra_enabled")
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_main_gate_enabled",
      );
    }
    function S() {
      return v() ? !o("WAWebMobilePlatforms").isSMB() : !1;
    }
    function R() {
      return (
        S() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_rich_response_forward_receiving_enabled",
        )
      );
    }
    function L(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? o("WAWebABProps").getABPropConfigValue(
            "ai_session_transparency_meta_ai_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "ai_continuous_session_transparency_notice_enabled",
          );
    }
    function E(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.from) && r("justknobx")._("5352");
    }
    ((l.setBonsaiUserLanguage = c),
      (l.isMetaAIHomeEnabled = p),
      (l.isBotEnabled = _),
      (l.isBizBot3pEnabled = f),
      (l.isBizBot1pEnabled = g),
      (l.isAiForwardAttributionEnabled = h),
      (l.isAiModeSelectorMessagingEnabled = y),
      (l.isDynamicModeSelectorEnabled = C),
      (l.isAiChatThreadsInfraEnabled = b),
      (l.isRichStructuredResponseReceiverEnabled = S),
      (l.isRichResponseForwardReceivingEnabled = R),
      (l.isAiContinuousSessionTransparencyNoticeEnabled = L),
      (l.isLoadingMediaMessagesEnabled = E));
  },
  98,
);
