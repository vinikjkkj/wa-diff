__d(
  "WAWebBotTosIds",
  ["WAWebABProps", "WAWebBotGating", "WAWebBotLogging", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = "20230901",
      s = "20230902",
      u = "20240216",
      c = "20231027",
      d = "20240729",
      m = new Set([e, s, u]);
    function p() {
      return [f(), _()].filter(Boolean);
    }
    function _() {
      return g(
        o("WAWebABProps").getABPropConfigValue(
          "ai_pdfn_nux_ai_group_muse_non_initiator_notice_id",
        ),
      );
    }
    function f() {
      return g(
        o("WAWebABProps").getABPropConfigValue(
          "ai_pdfn_nux_ai_group_muse_initiator_notice_id",
        ),
      );
    }
    function g(e) {
      var t = e.trim();
      if (!/^\d+$/.test(t)) return null;
      var n = Number(t);
      return Number.isSafeInteger(n) && n > 0 ? t : null;
    }
    function h() {
      var t = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
          .trim(),
        n = t != null && t !== "" ? t : e;
      return n;
    }
    function y() {
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
          .trim(),
        t = e != null && e !== "" ? e : u;
      return t;
    }
    function C() {
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_invoke_notice_id")
          .trim(),
        t = e != null && e !== "" ? e : s;
      return t;
    }
    function b() {
      return u;
    }
    function v() {
      return s;
    }
    function S() {
      return c;
    }
    function R(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      if (t != null) return t;
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
        case o("WAWebBotLogging").BotEntryPointType.Search:
          return Number(y());
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return Number(C());
      }
    }
    function L() {
      return d;
    }
    function E() {
      if (!o("WAWebMobilePlatforms").isSMB()) return null;
      var e = o("WAWebABProps")
        .getABPropConfigValue("smb_meta_ai_tos_notice_id")
        .trim();
      if (!/^\d+$/.test(e)) return null;
      var t = Number(e);
      return Number.isSafeInteger(t) && t > 0 ? t : null;
    }
    ((l.supportedTosNoticeIds = m),
      (l.getMuseGroupTosNoticeIds = p),
      (l.getMuseGroupNonInitiatorNoticeId = _),
      (l.getBotAgentTosId = h),
      (l.getBotShortcutTosId = y),
      (l.getBotInvokeTosId = C),
      (l.getBotLegacyShortcutTosId = b),
      (l.getBotLegacyInvokeTosId = v),
      (l.getBizBotTosId = S),
      (l.getApplicableBotNoticeId = R),
      (l.getUgcAiStudioTosId = L),
      (l.getBusinessAssistantLegacyNoticeId = E));
  },
  98,
);
