__d(
  "WAWebFormatRichResponseMessageText",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebRichResponseMsgUtils",
    "WAWebRichResponseTableFragmentText.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "WAWebUnformatMsg",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        a = o("WAWebFrontendMsgGetters").getAsRichResponse(t);
      if (
        a != null &&
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t)
      )
        return u(
          t,
          r("getPlainTextFromUnifiedResponse")(a.unifiedResponse),
          n.formatAsLastMsg === !0,
        );
      if (
        a == null ||
        o("WAWebRichResponseMsgUtils").isRichResponseMsgUnparsedAfterCompletion(
          a,
        )
      )
        return o("WAWebFormatUnknownMsg").formatUnknownMsgText(t);
      var i = a.richResponse,
        l = i.fragments,
        s = i.parseState,
        c = o("WAWebRichResponseMsgUtils")
          .getBundledRichResponseFragments(l)
          .map(function (e) {
            return d(e, s);
          })
          .join("\n");
      return c.trim() === ""
        ? o("WAWebFormatUnknownMsg").formatUnknownMsgText(t)
        : r("WAWebUnformatMsg")(t, c);
    }
    function u(e, t, n) {
      var o = t.trim() === "" && n ? c(e) : null;
      return o == null
        ? r("WAWebUnformatMsg")(e, t)
        : s._(/*BTDS*/ "A message from {agent name}", [
            s._param("agent name", o),
          ]);
    }
    function c(e) {
      if (
        o("WAWebMsgGetters").getIsSentByMe(e) ||
        !o("WAWebBotUtils").isHatchBot(e.id.remote)
      )
        return null;
      var t = o("WAWebContactCollection").ContactCollection.get(e.id.remote),
        n = t == null ? "" : o("WAWebContactGetters").getName(t);
      return n === "" ? null : n;
    }
    function d(e, t) {
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
