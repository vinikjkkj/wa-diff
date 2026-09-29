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
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_nux_ai_group_muse_initiator_notice_id")
          .trim(),
        t = o("WAWebABProps")
          .getABPropConfigValue(
            "ai_pdfn_nux_ai_group_muse_non_initiator_notice_id",
          )
          .trim();
      return [e, t].filter(function (e) {
        if (!/^\d+$/.test(e)) return !1;
        var t = Number(e);
        return Number.isSafeInteger(t) && t > 0;
      });
    }
    function _() {
      var t = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
          .trim(),
        n = t != null && t !== "" ? t : e;
      return n;
    }
    function f() {
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
          .trim(),
        t = e != null && e !== "" ? e : u;
      return t;
    }
    function g() {
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_invoke_notice_id")
          .trim(),
        t = e != null && e !== "" ? e : s;
      return t;
    }
    function h() {
      return u;
    }
    function y() {
      return s;
    }
    function C() {
      return c;
    }
    function b(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      if (t != null) return t;
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
        case o("WAWebBotLogging").BotEntryPointType.Search:
          return Number(f());
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return Number(g());
      }
    }
    function v() {
      return d;
    }
    function S() {
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
      (l.getBotAgentTosId = _),
      (l.getBotShortcutTosId = f),
      (l.getBotInvokeTosId = g),
      (l.getBotLegacyShortcutTosId = h),
      (l.getBotLegacyInvokeTosId = y),
      (l.getBizBotTosId = C),
      (l.getApplicableBotNoticeId = b),
      (l.getUgcAiStudioTosId = v),
      (l.getBusinessAssistantLegacyNoticeId = S));
  },
  98,
);
