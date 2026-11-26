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
    function c(e, t, n) {
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
    ((l.getRichResponseQuoteText = s),
      (l.getRichResponsePreviewText = u),
      (l.getUnifiedResponsePreviewText = c));
  },
  226,
);
