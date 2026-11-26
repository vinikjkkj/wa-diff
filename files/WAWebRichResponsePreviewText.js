__d(
  "WAWebRichResponsePreviewText",
  [
    "WAWebGetPlainTextFromBotMsg",
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisReplyGate",
    "WAWebHatchJarvisText",
    "WAWebMsgGetters",
    "WAWebRichResponseQuoteMarkdown",
    "WAWebUnifiedResponseUtils",
    "fbs",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = (t = s(e)) != null ? t : "",
        a = o("WAWebRichResponseQuoteMarkdown").stripServerFileImages(n);
      return a === n
        ? n
        : a.replace(/\n{3,}/g, "\n\n").trim() ||
            r("fbs")._(/*BTDS*/ "").toString();
    }
    function s(e, t) {
      var n = o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)
        ? u(e, e.unifiedResponse)
        : "";
      return n !== ""
        ? n
        : o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, t);
    }
    function u(e, t, n) {
      if (t == null) return "";
      var a = o("WAWebHatchJarvisReplyGate").getHatchJarvisDrawMode({
          chatId: e.id.remote,
          hasForwardedAttribution:
            o("WAWebMsgGetters").getForwardedAiBotMessageInfo(e) != null,
          isForwarded: o("WAWebMsgGetters").getIsForwarded(e),
          isFromMe: e.id.fromMe,
          unifiedResponse: t,
        }),
        i =
          a === "reply"
            ? o("WAWebHatchJarvisPayload").getHatchJarvisPayload(t)
            : null;
      if (i != null && i.presentation == null) {
        var l,
          s = o("WAWebHatchJarvisText").getHatchJarvisReplyText(i.displayText);
        return (l =
          n == null || n.transformMarkdown == null
            ? void 0
            : n.transformMarkdown(s)) != null
          ? l
          : s;
      }
      return n == null
        ? r("getPlainTextFromUnifiedResponse")(t)
        : r("getPlainTextFromUnifiedResponse")(t, n);
    }
    ((l.getRichResponseQuoteText = e),
      (l.getRichResponsePreviewText = s),
      (l.getUnifiedResponsePreviewText = u));
  },
  226,
);
