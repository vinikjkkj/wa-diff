__d(
  "WAWebRichResponseFrontendUtils",
  ["WAWebBotTypes", "WAWebGetPlainTextFromBotMsg"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER
        ? !1
        : s(e);
    }
    function s(e) {
      var t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e);
      return t != null && t.trim().length > 0;
    }
    ((l.canReplyRichResponse = e), (l.botMsgHasExtractableText = s));
  },
  98,
);
