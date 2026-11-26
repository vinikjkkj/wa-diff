__d(
  "WAWebRichResponseFrontendUtils",
  [
    "WAWebBotTypes",
    "WAWebForwardedBotMessageUtils",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER ||
        o("WAWebForwardedBotMessageUtils").isMaskedForwardedBotCopy(e)
        ? !1
        : u(e);
    }
    function s(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        o("WAWebForwardedBotMessageUtils").isMaskedForwardedBotCopy(e)
      );
    }
    function u(e) {
      var t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e);
      return t != null && t.trim().length > 0;
    }
    ((l.canReplyRichResponse = e),
      (l.isHiddenForwardedRichResponse = s),
      (l.botMsgHasExtractableText = u));
  },
  98,
);
