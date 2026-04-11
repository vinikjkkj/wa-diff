__d(
  "WAWebBotTosIds",
  ["WAWebABProps", "WAWebBotGating", "WAWebBotLogging"],
  function (t, n, r, o, a, i, l) {
    var e = "20230901",
      s = "20230902",
      u = "20240216",
      c = "20231027",
      d = "20240729",
      m = new Set([e, s, u]),
      p = function () {
        var t = o("WAWebABProps")
            .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
            .trim(),
          n = t != null && t !== "" ? t : e;
        return n;
      },
      _ = function () {
        var e = o("WAWebABProps")
            .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
            .trim(),
          t = e != null && e !== "" ? e : u;
        return t;
      },
      f = function () {
        var e = o("WAWebABProps")
            .getABPropConfigValue("ai_pdfn_tos_invoke_notice_id")
            .trim(),
          t = e != null && e !== "" ? e : s;
        return t;
      };
    function g() {
      return u;
    }
    function h() {
      return s;
    }
    var y = function () {
        return c;
      },
      C = function (t) {
        var e = o("WAWebBotGating").getMasterBotNoticeId();
        if (e != null) return e;
        switch (t) {
          case o("WAWebBotLogging").BotEntryPointType.Shortcut:
          case o("WAWebBotLogging").BotEntryPointType.Search:
            return Number(_());
          case o("WAWebBotLogging").BotEntryPointType.Invoke:
            return Number(f());
          case o("WAWebBotLogging").BotEntryPointType.Agent:
            return Number(p());
        }
      },
      b = function () {
        return d;
      };
    ((l.supportedTosNoticeIds = m),
      (l.getBotAgentTosId = p),
      (l.getBotShortcutTosId = _),
      (l.getBotInvokeTosId = f),
      (l.getBotLegacyShortcutTosId = g),
      (l.getBotLegacyInvokeTosId = h),
      (l.getBizBotTosId = y),
      (l.getApplicableBotNoticeId = C),
      (l.getUgcAiStudioTosId = b));
  },
  98,
);
