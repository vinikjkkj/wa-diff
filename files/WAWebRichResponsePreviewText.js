__d(
  "WAWebRichResponsePreviewText",
  [
    "WAWebGetPlainTextFromBotMsg",
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisReplyGate",
    "WAWebHatchJarvisText",
    "WAWebMsgGetters",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)
        ? s(e, e.unifiedResponse)
        : "";
      return n !== ""
        ? n
        : o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, t);
    }
    function s(e, t) {
      if (t == null) return "";
      var n = o("WAWebHatchJarvisReplyGate").getHatchJarvisDrawMode({
          chatId: e.id.remote,
          hasForwardedAttribution:
            o("WAWebMsgGetters").getForwardedAiBotMessageInfo(e) != null,
          isForwarded: o("WAWebMsgGetters").getIsForwarded(e),
          isFromMe: e.id.fromMe,
          unifiedResponse: t,
        }),
        a =
          n === "reply"
            ? o("WAWebHatchJarvisPayload").getHatchJarvisPayload(t)
            : null;
      return a != null && a.presentation == null
        ? o("WAWebHatchJarvisText").getHatchJarvisReplyText(a.displayText)
        : r("getPlainTextFromUnifiedResponse")(t);
    }
    ((l.getRichResponsePreviewText = e), (l.getUnifiedResponsePreviewText = s));
  },
  98,
);
