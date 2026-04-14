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
      if (u == null) return !1;
      var t = u,
        n = new Set(
          e
            .toLowerCase()
            .split(",")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e.length > 0;
            }),
        );
      return n.has(t);
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
        g() &&
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
      return o("WAWebMobilePlatforms").isSMB() || !m() ? !1 : p();
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") !== 0;
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_rendering_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_attribution_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("ai_mode_selector_enabled");
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_enabled",
      );
    }
    function S() {
      return (
        o("WAWebThreadsGating").isThreadsInfraEnabled() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_infra_enabled")
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_main_gate_enabled",
      );
    }
    function L() {
      return R() ? !o("WAWebMobilePlatforms").isSMB() : !1;
    }
    function E() {
      return (
        L() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_rich_response_forward_receiving_enabled",
        )
      );
    }
    function k(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? o("WAWebABProps").getABPropConfigValue(
            "ai_session_transparency_meta_ai_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "ai_continuous_session_transparency_notice_enabled",
          );
    }
    function I(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.from) && r("justknobx")._("5352");
    }
    ((l.setBonsaiUserLanguage = c),
      (l.isDeviceLanguageInLanguages = d),
      (l.isMetaAIHomeEnabled = _),
      (l.isMetaAIHomeDefaultLandingEnabled = f),
      (l.isBotEnabled = g),
      (l.isBizBot3pEnabled = h),
      (l.isBizBot1pEnabled = y),
      (l.isAiForwardAttributionEnabled = C),
      (l.isAiModeSelectorMessagingEnabled = b),
      (l.isDynamicModeSelectorEnabled = v),
      (l.isAiChatThreadsInfraEnabled = S),
      (l.isRichStructuredResponseReceiverEnabled = L),
      (l.isRichResponseForwardReceivingEnabled = E),
      (l.isAiContinuousSessionTransparencyNoticeEnabled = k),
      (l.isLoadingMediaMessagesEnabled = I));
  },
  98,
);
