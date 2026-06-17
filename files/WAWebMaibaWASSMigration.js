__d(
  "WAWebMaibaWASSMigration",
  ["WAWebBizAiAgentGating", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.isLid() && e.user === o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID.user
      );
    }
    function s(e) {
      return o("WAWebBizAiAgentGating").isMaibaWASSReceivingEnabled() &&
        o("WAWebBotUtils").isMaibaAiHubFbid(e)
        ? o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID
        : null;
    }
    function u(t) {
      return o("WAWebBizAiAgentGating").isMaibaWASSSendingEnabled() && e(t)
        ? o("WAWebBotUtils").MAIBA_AI_HUB_FBID_WID
        : null;
    }
    function c(e) {
      var t = e.data.to,
        n = u(t);
      n != null &&
        (e.type === "message"
          ? (e.data.to = n)
          : e.type === "addon" &&
            (e.data = babelHelpers.extends({}, e.data, { to: n })));
    }
    function d(e) {
      return o("WAWebBizAiAgentGating").isMaibaWASSReceivingEnabled() &&
        o("WAWebBotUtils").isMaibaAiHubFbid(e)
        ? o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID
        : e;
    }
    function m(e) {
      var t = u(e);
      return t != null ? t : e;
    }
    ((l.isMaibaAiHubLid = e),
      (l.getMaibaAiHubLidForFbidThread = s),
      (l.getMaibaAiHubFbidForLidChat = u),
      (l.maybeReplaceMaibaAiHubLidWithFbidForSend = c),
      (l.resolveMaibaAiHubFbidToLidOrChatId = d),
      (l.maybeReplaceMaibaAiHubWidWithFbid = m));
  },
  98,
);
