__d(
  "WAWebFormatRichResponseMessageText",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatMsgTextUtils",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisReplyGate",
    "WAWebHatchJarvisText",
    "WAWebMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebRichResponseMsgUtils",
    "WAWebRichResponseTableFragmentText.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        r = o("WAWebFrontendMsgGetters").getAsRichResponse(t);
      if (
        r != null &&
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t)
      )
        return c(t, u(t, r.unifiedResponse), n.formatAsLastMsg === !0, n);
      if (
        r == null ||
        o("WAWebRichResponseMsgUtils").isRichResponseMsgUnparsedAfterCompletion(
          r,
        )
      )
        return o("WAWebFormatUnknownMsg").formatUnknownMsgText(t);
      var a = r.richResponse,
        i = a.fragments,
        l = a.parseState,
        s = o("WAWebRichResponseMsgUtils")
          .getBundledRichResponseFragments(i)
          .map(function (e) {
            return m(e, l);
          })
          .join("\n");
      return s.trim() === ""
        ? o("WAWebFormatUnknownMsg").formatUnknownMsgText(t)
        : o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
            t,
            s,
            n,
          );
    }
    function u(e, t) {
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
    function c(e, t, n, r) {
      var a = t.trim() === "" && n ? d(e) : null;
      return a == null
        ? o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
            e,
            t,
            r,
          )
        : s._(/*BTDS*/ "A message from {agent name}", [
            s._param("agent name", a),
          ]);
    }
    function d(e) {
      if (
        o("WAWebMsgGetters").getIsSentByMe(e) ||
        !o("WAWebBotUtils").isHatchBot(e.id.remote)
      )
        return null;
      var t = o("WAWebContactCollection").ContactCollection.get(e.id.remote),
        n = t == null ? "" : o("WAWebContactGetters").getName(t);
      return n === "" ? null : n;
    }
    function m(e, t) {
      switch (e.type) {
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
          return e.text;
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Table:
          return o(
            "WAWebRichResponseTableFragmentText.react",
          ).getTableFragmentText(e);
        case o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems:
          return "";
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
          return o(
            "WAWebRichResponseUnknownFragmentUtils",
          ).getUnknownFragmentText(e, t);
      }
    }
    l.default = e;
  },
  226,
);
