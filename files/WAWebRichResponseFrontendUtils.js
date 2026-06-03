__d(
  "WAWebRichResponseFrontendUtils",
  [
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebGetPlainTextFromBotMsg",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER
        ? !1
        : s(e) &&
            o("WAWebBotUnifiedResponseGating").isReplyToRichResponseEnabled();
    }
    function s(e) {
      var t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e);
      return t != null && t.trim().length > 0;
    }
    ((l.canReplyRichResponse = e), (l.botMsgHasExtractableText = s));
  },
  98,
);
