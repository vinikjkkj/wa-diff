__d(
  "WAWebRichResponsePreviewText",
  [
    "WAWebGetPlainTextFromBotMsg",
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisReplyGate",
    "WAWebHatchJarvisText",
    "WAWebMsgGetters",
    "WAWebUnifiedResponseUtils",
    "fbs",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    var e = /!\[[^\[\]\r\n]*\]\((?:container|sandbox):\/\/[^()\s]+\)/g;
    function s(t) {
      var n,
        o = (n = u(t)) != null ? n : "",
        a = o.replace(e, "");
      return a === o
        ? o
        : a.replace(/\n{3,}/g, "\n\n").trim() ||
            r("fbs")._(/*BTDS*/ "").toString();
    }
    function u(e, t) {
      var n = o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)
        ? c(e, e.unifiedResponse)
        : "";
      return n !== ""
        ? n
        : o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, t);
    }
    function c(e, t) {
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
    ((l.getRichResponseQuoteText = s),
      (l.getRichResponsePreviewText = u),
      (l.getUnifiedResponsePreviewText = c));
  },
  226,
);
