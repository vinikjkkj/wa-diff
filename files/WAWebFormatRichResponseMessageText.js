__d(
  "WAWebFormatRichResponseMessageText",
  [
    "WAWebBotBaseGating",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebRichResponseMsgUtils",
    "WAWebRichResponseTableFragmentText.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "WAWebUnformatMsg",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getAsRichResponse(t);
      if (
        n != null &&
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t)
      ) {
        var a = r("getPlainTextFromUnifiedResponse")(n.unifiedResponse);
        return r("WAWebUnformatMsg")(t, a);
      }
      if (
        n == null ||
        !o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled() ||
        o("WAWebRichResponseMsgUtils").isRichResponseMsgUnparsedAfterCompletion(
          n,
        )
      )
        return o("WAWebFormatUnknownMsg").formatUnknownMsgText(t);
      var i = n.richResponse,
        l = i.fragments,
        u = i.parseState,
        c = o("WAWebRichResponseMsgUtils")
          .getBundledRichResponseFragments(l)
          .map(function (e) {
            return s(e, u);
          })
          .join("\n");
      return c.trim() === ""
        ? o("WAWebFormatUnknownMsg").formatUnknownMsgText(t)
        : r("WAWebUnformatMsg")(t, c);
    }
    function s(e, t) {
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
  98,
);
